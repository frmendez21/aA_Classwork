# == Schema Information
#
# Table name: bands
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Band < ApplicationRecord
    validates :name, presence: true 

    has_many :albums, 
        class_name: :Album, 
        foreign_key: :band_id
end
