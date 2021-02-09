require_relative './peice.rb'
class Board

    def initialize
        @rows = Array.new(8)  { Array.new(8) {nil} }
    end

    def move_peice(start_pos, end_pos)
        if self[start_pos] == nil
            raise 'No peice at start' 
        elsif self[end_pos] != nil 
            raise 'Cannot move to end position' 
        else 
            self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
        end
    end

    def [](pos)
        @rows[pos[0]][pos[1]]
    end

    def []=(pos, val)
        @rows[pos[0]][pos[1]] = val
    end
end