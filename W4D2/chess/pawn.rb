require_relative './piece.rb'
require 'byebug'

class Pawn < Piece

  def symbol
    "\u265f".encode('utf-8')
  end

  def moves
    output = []
    #debugger
    forward_moves = [forward_steps]
    attack_moves = side_attacks # [1,1][1,-1]
    all_moves = forward_moves.concat(attack_moves)

    all_moves.each do |end_pos|
      # [1,1]
      #debugger
      x, y = end_pos
      new_pos = [@pos[0]+x, @pos[1]+y] # [5,1]
      if (new_pos[0] >= 0 && new_pos[0] < 8) && (new_pos[1] >= 0 && new_pos[1] < 8)
        if @board[new_pos].is_a?(NullPiece) 
          if forward_moves.include?(end_pos)
            output << new_pos
          end
        elsif @board[new_pos].color != @color && attack_moves.include?(end_pos)
          output << new_pos
        end
      end
    end
    output
  end

  private
  def at_start_row?
    if @color == 'W' && @pos[0] == 1
      return true
    elsif @color == 'B' && @pos[0] == 6
      return true
    end
    false
  end

  def forward_dir
    if @color == 'W'
      return 1
    elsif @color == 'B'
      return -1
    end
  end

  def forward_steps
    dir = forward_dir
    return [[1*dir,0],[2*dir,0]] if at_start_row?
    return [1*dir,0]
  end

  def side_attacks
    dir = forward_dir
    [[1*dir,1],[1*dir,-1]]
  end
end