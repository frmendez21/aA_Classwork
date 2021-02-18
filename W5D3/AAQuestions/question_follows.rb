require_relative "user"

class QuestionFollows 
  attr_accessor :id, :question_id, :user_id
    def self.all 
        data = QuestionsDatabase.instance.execute("SELECT * FROM question_follows")
        data.map { |datum| QuestionFollows.new(datum) }
    end

    def self.find_by_id(id)
        question = QuestionsDatabase.instance.execute(<<-SQL, id)
        SELECT 
            *
        FROM 
            question_follows
        WHERE 
            id = ?
        SQL
        return nil unless question.length > 0
        QuestionFollows.new(question.first)
    end

    def self.find_by_user_id(user_id)
        question = QuestionsDatabase.instance.execute(<<-SQL, user_id)
        SELECT 
            *
        FROM 
            question_follows
        WHERE 
            user_id = ?
        SQL
        return nil unless question.length > 0
        QuestionFollows.new(question.first)
    end

    def self.find_by_question_id(question_id)
        question = QuestionsDatabase.instance.execute(<<-SQL, question_id)
        SELECT 
            *
        FROM 
            question_follows
        WHERE 
            question_id = ?
        SQL
        return nil unless question.length > 0
        QuestionFollows.new(question.first)
    end

    def initialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @body = options['body']
        @user_id = options['user_id']
    end
end