require_relative './piece.rb'

module Stepable
  def moves
    #self.move_diffs
    #each and check whats at each end pos
    output = []
    x, y = @pos
    self.move_diffs.each do |move_arr|
      dx, dy = move_arr
      new_pos = [x+dx, y+dy]
      if (new_pos[0] >= 0 && new_pos[0] < 8) && (new_pos[1] >= 0 && new_pos[1] < 8)
        if @board[new_pos].is_a?(NullPiece)
          output << new_pos
        elsif @board[new_pos].color != @color
          output << new_pos
        end
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