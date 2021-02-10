require_relative "./piece.rb"

module Slideable
  HORIZONTAL_DIRS = [[0,1],[0,-1],[1,0],[-1,0]] #diff between start and next pos
  DIAGONAL_DIRS = [[1,1],[1,-1],[-1,1],[-1,-1]]
  
  def horizontal_dirs
    HORIZONTAL_DIRS
  end

  def diagonal_dirs
    DIAGONAL_DIRS
  end

  def moves
    #return array of all possible moves form cur in every direction
    #self.move_dirs -> grow_blocked
    output = []
    self.move_dirs.each do |dir|
      output += grow_unblocked_moves_in_dir(dir[0], dir[1])
    end
    output
  end

  private 

  def move_dirs
    raise "Declare move_dirs in class"
  end

  def grow_unblocked_moves_in_dir(dx, dy)
    #list of all possible moves in one direction
    output = []
    x, y = @pos
    x += dx
    y += dy
    can_move = true
    while can_move
      new_pos = [x,y]
      if (x < 0 || x > 7) || (y < 0 || y > 7)
        can_move = false
      elsif @board[new_pos] == nil
        output << new_pos
      else
        can_move = false
      end
      x += dx
      y += dy
    end
    output
  end
end

class Rook < Piece
  include Slideable

  def symbol
    @color
  end

  def move_dirs
    horizontal_dirs
  end
end

class Bishop < Piece
  include Slideable

  def symbol
    @color
  end


  def move_dirs
    diagonal_dirs
  end
end

class Queen < Piece
  include Slideable

  def symbol
    @color
  end

  def move_dirs
    horizontal_dirs + diagonal_dirs
  end
end