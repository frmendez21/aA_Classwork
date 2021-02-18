require_relative './user.rb'

class QuestionLikes 
    attr_accessor :id, :likes, :question_id, :user_id
    
    def self.all 
        data = QuestionsDatabase.instance.execute("SELECT * FROM question_likes")
        data.map { |datum| QuestionLikes.new(datum) }
    end

    def self.find_by_id(id)
        question_likes = QuestionsDatabase.instance.execute(<<-SQL, id)
        SELECT 
            *
        FROM 
            question_likes
        WHERE 
            id = ?
        SQL
        return nil unless question_likes.length > 0
        QuestionLikes.new(question_likes.first)
    end

    def self.find_by_question_id(question_id)
        question_likes = QuestionsDatabase.instance.execute(<<-SQL, question_id)
        SELECT 
            *
        FROM 
            question_likes
        WHERE 
            question_id = ?
        SQL
        return nil unless question_likes.length > 0
        QuestionLikes.new(question_likes.first)
    end

    def self.find_by_user_id(user_id)
        question_likes = QuestionsDatabase.instance.execute(<<-SQL, user_id)
        SELECT 
            *
        FROM 
            question_likes
        WHERE 
            user_id = ?
        SQL
        return nil unless question_likes.length > 0
        QuestionLikes.new(question_likes.first)
    end

    def initialize(options)
        @id = options['id']
        @likes = options['likes']
        @question_id = options['question_id']
        @user_id = options['user_id']
    end
    

end