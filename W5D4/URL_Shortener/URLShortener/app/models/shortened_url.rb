# == Schema Information
#
# Table name: shortened_urls
#
#  id         :bigint           not null, primary key
#  long_url   :string           not null
#  short_url  :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ShortenedUrl < ApplicationRecord
  validates :long_url, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :visits, 
    foreign_key: :shortened_url_id, 
    class_name: :Visit 

  has_many :visitors, 
    through: :visits, 
    source: :user 

  def self.random_code
    random = SecureRandom.urlsafe_base64(16)
    until !ShortenedUrl.exists?(random)
      random = SecureRandom.urlsafe_base64(16)
    end
    random
  end

  def self.shortened_url_creator(user, long_url)
    ShortenedUrl.create!(long_url: long_url, short_url: self.random_code, user_id: user.id)
  end

  def num_clicks 
    self.visits.count 
  end

  def num_uniques 
    users = self.visits.map { |visit| visit.user }
    users.uniq.count 
  end

  def num_recent_uniques 

  end
end