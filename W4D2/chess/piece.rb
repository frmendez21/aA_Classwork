class Piece
    attr_reader :color, :board, :pos
    
    def initialize(color, board, position)
        @color = color
        @board = board
        @pos = position
    end

    def to_s
        symbol 
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
        raise "Declare symbol in subclass"
    end

    private
    def move_into_check?(end_pos)

    end

end