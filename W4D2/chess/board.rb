require_relative './piece.rb'
require_relative './nullpiece.rb'
require_relative './slideable.rb'
require_relative './stepable.rb'
require_relative './pawn.rb'
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

    def in_check?(color)

    end

    def checkmate?(color)

    end

    def valid_pos?(pos)
        x, y = pos 
        if (x < 0 || x > 7) || (y < 0 || y > 7)
            return false
        end
        true
    end
end

board = Board.new
rook = Rook.new("W", board, [0,0])
board[[0,0]] = rook
bishop = Bishop.new('B', board, [0,5])
board[[0,5]] = bishop
queen = Queen.new('W', board, [0,3])
board[[0,3]] = queen 
king = King.new('W', board, [0,1])
board[[0,1]] = king
knight = Knight.new('B', board, [3,3])
board[[3,3]] = knight
pawn = Pawn.new('B', board, [1,2])
board[[1,2]] = pawn
# p knight.moves 
# p king.moves
#p pawn.moves
# p queen.moves
# p rook.moves