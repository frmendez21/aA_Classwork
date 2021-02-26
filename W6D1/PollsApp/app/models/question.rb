# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  text       :string           not null
#  poll_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Question < ApplicationRecord
    validates :text, presence: true

    belongs_to :poll,
        foreign_key: :poll_id,
        class_name: :Poll 

    has_many :answer_choices,
        foreign_key: :question_id,
        class_name: :Answer_choice 

    has_many :responses,
        through: :answer_choices,
        source: :responses 

    # ##n+1
    # def results
    #     result_h = Hash.new(0)
    #     self.answer_choices.each { |choice| result_h[choice.text] = choice.responses.count }
    #     result_h
    # end
    
    # ##2-q
    # def results 
    #     # Second, use includes to pre-fetch all the responses at the same time you fetch the answer_choices. Test this to see that it makes two queries, and not N+1. (Due to ActiveRecord weirdness, use responses.length instead of responses.count).
    #     result = {}
    #     resps = self.answer_choices.includes(:responses)
    #     resps.each { |choices| result[choices.text] = choices.responses.length }
    #     result
    # end

    def results 
        result = {}
        ac_rows = Answer_choice.find_by_sql([<<-SQL, self.id])
        SELECT
            answer_choices.text, COUNT(*) AS response_count
        FROM 
            answer_choices
        JOIN responses ON responses.answer_choice_id = answer_choices.id
        WHERE answer_choices.question_id = ?
        GROUP BY answer_choices.id
        SQL
        ac_rows.each { |ac| result[ac.text] = ac.response_count }
        result
    end
end
