require 'colorize'
require_relative 'cursor.rb'
require_relative 'board.rb'
 class Display 

    def initialize(board)
        @board = board 
        @cursor = Cursor.new([4,4], board)
    end
    # loop through the board  
    # loop through each element in each row 
    # even rows start with black 
    # odd rows start with white  

    def render 
       counter = 0
        (0...8).each do |row|
            output = ''
            row % 2 == 1 ? counter = 0 : counter = 1
            (0...8).each do |col|
                piece = @board[[row, col]]
                if [row, col] == @cursor.cursor_pos 
                    output << ' '.colorize(:white).on_light_black
                    if piece.color == 'B'
                        output << piece.to_s.colorize(:blue).on_light_black #.colorize
                       
                    else #piece.color == 'W'
                        output << piece.to_s.colorize(:red).on_light_black
                    end
                    output << ' '.colorize(:white).on_light_black
                elsif counter % 2 == 0
                    output << ' '.colorize(:white).on_white
                    if piece.color == 'B'
                        output << piece.to_s.colorize(:blue).on_white #.colorize
                       
                    else #piece.color == 'W'
                        output << piece.to_s.colorize(:red).on_white
                    end
                    output << ' '.colorize(:white).on_white
                else 
                    output << ' '.colorize(:black).on_black
                    if piece.color == 'B'
                        output << piece.to_s.colorize(:blue).on_black#.colorize
                        
                    else #piece.color == 'W'
                        output << piece.to_s.colorize(:red).on_black
                    end
                    output << ' '.colorize(:black).on_black
                end
                counter += 1
            end
            puts output
        end
        
    end

    def test_play
        self.render
      
        while true
            @cursor.get_input
            self.render
            puts '       ' 
         
        end
    end
 end
board = Board.new

bishop = Bishop.new('B', board, [0,5])
board[[0,5]] = bishop
queen = Queen.new('W', board, [0,3])
board[[0,3]] = queen
king = King.new('W', board, [0,0])
board[[0,0]] = king
knight = Knight.new('B', board, [3,3])
board[[3,3]] = knight
pawn = Pawn.new('B', board, [1,2])
board[[1,2]] = pawn

display = Display.new(board)
display.test_play