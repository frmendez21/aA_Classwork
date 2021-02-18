require_relative 'user'
require_relative 'replies'
class Question
  attr_accessor :id, :title, :body, :user_id
    def self.all 
        data = QuestionsDatabase.instance.execute("SELECT * FROM questions")
        data.map { |datum| Question.new(datum) }
    end

    def self.find_by_id(id)
        question = QuestionsDatabase.instance.execute(<<-SQL, id)
        SELECT 
            *
        FROM 
            questions
        WHERE 
            id = ?
        SQL
        return nil unless question.length > 0
        Question.new(question.first)
    end

    def self.find_by_title(title)
        question = QuestionsDatabase.instance.execute(<<-SQL, title)
        SELECT 
            *
        FROM 
            questions
        WHERE 
            title = ?
        SQL
        return nil unless question.length > 0
        Question.new(question.first)
    end

    def self.find_by_author_id(user_id)
      question = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT 
          *
      FROM 
          questions
      WHERE 
          user_id = ?
      SQL
      return nil unless question.length > 0
      Question.new(question.first)
  end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @user_id = options['user_id']
    end

    def replies
      Replies.find_by_question_id(id)
    end
end