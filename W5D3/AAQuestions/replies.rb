require_relative './user.rb'

class Replies 
    attr_accessor :id, :question_id, :parent_reply, :user_id, :body
    
    def self.all 
        data = QuestionsDatabase.instance.execute("SELECT * FROM replies")
        data.map { |datum| Replies.new(datum) }
    end

    def self.find_by_id(id)
        replies = QuestionsDatabase.instance.execute(<<-SQL, id)
        SELECT 
            *
        FROM 
            replies
        WHERE 
            id = ?
        SQL
        return nil unless replies.length > 0
        Replies.new(replies.first)
    end

    def self.find_by_question_id(question_id)
        reply = QuestionsDatabase.instance.execute(<<-SQL, question_id)
        SELECT 
            *
        FROM 
            replies
        WHERE 
            question_id = ?
        SQL
        return nil unless reply.length > 0
        Replies.new(reply.first)
    end

    def self.find_by_user_id(user_id)
        reply = QuestionsDatabase.instance.execute(<<-SQL, user_id)
        SELECT 
            *
        FROM 
            replies
        WHERE 
            user_id = ?
        SQL
        return nil unless reply.length > 0
        Replies.new(reply.first)
    end

    def self.find_by_parent_reply_id(parent_reply_id)
        parent = QuestionsDatabase.instance.execute(<<-SQL, parent_reply_id)
        SELECT 
            *
        FROM 
            replies
        WHERE 
            parent_reply_id = ?
        SQL
        return nil unless parent.length > 0
        Replies.new(parent.first)
    end

    def initialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @parent_reply = options['parent_reply']
        @user_id = options['user_id']
        @body = options['body']
    end
    

end