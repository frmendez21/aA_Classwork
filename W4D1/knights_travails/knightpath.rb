require_relative './00_tree_node.rb'
require 'byebug'
class KnightPathFinder
    attr_accessor :root_node

    #moves: [0,0]start  [1,2][
        MOVES = [
                [2,1],
                [2,-1],
                [1,2],
                [1,-2],
                [-1,2],
                [-1,-2],
                [-2,1],
                [-2,-1]
                ]


    ##anything within the 8x8 board 
    #anything outside of range of (0,0) & (7,7) is invalid 
    #returns array of valid moves 

    def self.valid_moves(position)  #any start position 
        valid_pos = []
        x, y = position   #as long 0 >x < 7 

        MOVES.each do |sub_arr|
            sub_x, sub_y = sub_arr
            added_pos = [sub_x + x, sub_y + y]
            
            if (added_pos[0] > 0 && added_pos[0] < 7) && (added_pos[1] > 0 && added_pos[1] < 7 ) 
                valid_pos << added_pos
            end
        end
        valid_pos
    end
    
    def initialize(start_position) 
        @position = start_position
        @considered_pos = [start_position]
        @root_node = PolyTreeNode.new(start_position) 
        build_move_tree
    end

    def new_move_positions(pos) 
        result = []
        valid_moves = KnightPathFinder.valid_moves(pos)
        valid_moves.each do |sub_arr|
            if !@considered_pos.include?(sub_arr)
                result << sub_arr
                @considered_pos << sub_arr
            end
        end
        result
    end
    # the children of root_node will be all of the possible positions
    def build_move_tree #all possible moves  
        queue = [self.root_node]
        until queue.empty?
            node = queue.shift
            # PolyTreeNode.new([0,0])
            new_move_positions(node.value).each do |pos|
               child = node.add_child(PolyTreeNode.new(pos))
               queue << child
            end
        end
    end
    
    def find_path(end_pos)
        debugger
        path = root_node.dfs(end_pos)
        trace_path_back(path)
    end

    def trace_path_back(end_node)
         queues = []
         node = end_node
         
        until node.value == root_node.value             
            queues << node
            node = node.parent 

        end
       return queues
    end








end 

kpf = KnightPathFinder.new([0, 0])
kpf.find_path([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
p kpf.find_path([6, 2]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]
