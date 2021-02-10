require_relative './board.rb'

class Piece
    attr_reader :color, :board, :pos
    
    def initialize(color, board, position)
        @color = color
        @board = board
        @pos = position
    end

    def to_s
        puts "Color: #{@color}, Position: #{@pos}"
    end

    def empty?
        @pos.empty?
    end

    def valid_moves
        #should return an array of valid moves
    end

    def pos=(val)
        @pos = val
    end

    def symbol
        @color
    end

    private
    def move_into_check?(end_pos)

    end

end