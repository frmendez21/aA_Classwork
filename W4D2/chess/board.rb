require_relative './piece.rb'
require_relative './nullpiece.rb'
class Board

    def initialize
        @null_piece = NullPiece.instance
        @rows = Array.new(8)  { Array.new(8, @null_piece) }
    end

    def move_piece(start_pos, end_pos)
        if self[start_pos] == @null_piece
            raise 'No peice at start' 
        elsif self[end_pos] != @null_piece 
            raise 'Cannot move to end position' 
        else 
            self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
            self[end_pos].pos = end_pos
        end
    end

    def [](pos)
        @rows[pos[0]][pos[1]]
    end

    def []=(pos, val)
        @rows[pos[0]][pos[1]] = val
    end
end

board = Board.new  
