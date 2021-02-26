require 'date'
class Cat < ApplicationRecord
    validates :birth_date, :color, :name, :sex, :description, presence: true

    def age 
        date = Time.now.strftime("%d/%m/%Y %H:%M").split(' ').first 
        date = split('/').reverse
        b_day = self.birth_date.split('/') 
        date[1] - b_day[1]
    end
end
