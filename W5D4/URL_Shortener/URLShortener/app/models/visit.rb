# == Schema Information
#
# Table name: visits
#
#  id               :bigint           not null, primary key
#  user_id          :integer          not null
#  shortened_url_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Visit < ApplicationRecord
    validates :user_id, :shortened_url_id, presence: true 

    #one visit belongs to one user foreign key is user_id 
    belongs_to :user, 
        foreign_key: :user_id,
        class_name: :User

    belongs_to :shortened_url, 
        foreign_key: :shortened_url_id, 
        class_name: :ShortenedUrl 

    def self.record_visit!(user, shortened_url)
        Visit.create!(user.id, shortened_url.id)
    end
end
