# == Schema Information
#
# Table name: responses
#
#  id               :bigint           not null, primary key
#  respondent_id    :integer          not null
#  answer_choice_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Response < ApplicationRecord
    validate :not_duplicate_response
    validate :respondent_not_author?
    belongs_to :respondent,
        foreign_key: :respondent_id,
        class_name: :User 

    belongs_to :answer_choice,
        foreign_key: :answer_choice_id,
        class_name: :Answer_choice

    has_one :question,
        through: :answer_choice,
        source: :question

    def sibling_responses
       # This should return all the other Response objects for the same Question
      self.question.responses.where.not(id: self.id)
    end

    def respondent_not_author?
        #should return error if poll author is respondent
        poll_author = self.answer_choice.question.poll
        if poll_author.author_id == respondent_id 
            errors[:respondent_id] << 'You cannot answer your own poll!'
        end
    end
    # this will return T or F based on wether a respondents id has already been saved
    def respondent_already_answered?
        self.sibling_responses.exists?(respondent_id)
    end

    private
    # throws custom error is respondent already answered
    def not_duplicate_response 
        if respondent_already_answered?
            errors[:respondent_id] << 'You have already entered this response'
        end
    end

end
