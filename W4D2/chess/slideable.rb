# require_relative "./piece.rb"

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
    move_dirs.each do |dir|
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
    # check that we overtake an enemy position
    #check that we do NOT overtake our own teams positions
    output = []
    x, y = @pos
    x += dx
    y += dy
    can_move = true
    while can_move
      new_pos = [x,y]
      if (x < 0 || x > 7) || (y < 0 || y > 7)
        can_move = false
      elsif @board[new_pos].color == @color 
        can_move = false
        break
      elsif @board[new_pos].color != @color || @board[new_pos].is_a?(NullPiece)
        output << new_pos
        can_move = false unless @board[new_pos].is_a?(NullPiece)
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
    "\u265c".encode('utf-8')
  end

  private
  def move_dirs
    horizontal_dirs
  end
end

class Bishop < Piece
  include Slideable

  def symbol
    "\u265d".encode('utf-8')
  end

  private
  def move_dirs
    diagonal_dirs
  end
end

class Queen < Piece
  include Slideable

  def symbol
    "\u265b".encode('utf-8')
    
  end

  private
  def move_dirs
    horizontal_dirs + diagonal_dirs
  end
end