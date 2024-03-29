# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :session_token, uniqueness: {scope: :email}
    validates :password, length: { minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token
    attr_reader :password 

    def generate_session_token 
        SecureRandom::urlsafe_base64
    end

    def reset_session_token! 
        self.session_token = generate_session_token
        self.save!
        self.session_token 
    end

    def ensure_session_token 
        self.session_token ||= generate_session_token
    end 

    def password=(password) 
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end 

    def password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.password?(password)
            user
        else 
            nil 
        end
    end
end
