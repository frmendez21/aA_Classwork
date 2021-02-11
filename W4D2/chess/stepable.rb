require_relative './piece.rb'

module Stepable
  def moves
    output = []
    x, y = @pos
    self.move_diffs.each do |move_arr|
      dx, dy = move_arr
      new_pos = [x+dx, y+dy]
      if self.board.valid_pos?(new_pos) && (@board[new_pos].is_a?(NullPiece) || @board[new_pos].color != @color)
        output << new_pos 
      end
    end
    output
  end

  private
  def move_diffs
    raise "Declare for class"
  end
end

class Knight < Piece
  include Stepable
  def symbol
    "\u265e".encode('utf-8')
  end

  protected
  def move_diffs
    [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]
  end
end

class King < Piece
  include Stepable
  def symbol
    "\u265a".encode('utf-8')
  end

  protected
  def move_diffs
    [[1,0],[-1,0],[1,1],[1,-1],[-1,1],[0,1],[0,-1],[-1,-1]]
  end
end