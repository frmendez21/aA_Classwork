# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :session_token, :password_digest, presence: true 
    validates :username, presence: true, uniqueness: true 
    validates :password, length: {minimum: 6, allow_nil: true}
    attr_reader :password
    after_initialize :ensure_session_token 

    has_many :subs 
    has_many :posts
    has_many :comments, 
        class_name: :Comment, 
        foreign_key: :author_id

    def password=(password) 
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token! 
        self.session_token = SecureRandom.urlsafe_base64
        self.save! 
        self.session_token 
    end

    def is_password?(password) 
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(username, password) 
        user = User.find_by(username: username)
        if user && user.is_password?(password) 
            user 
        else  
            nil 
        end
    end

end
