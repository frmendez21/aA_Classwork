
class PolyTreeNode

    attr_reader :value, :children, :parent
   
    def initialize(value)
        @value = value
        @children = []
        @parent = nil
    end
       
    def parent=(node)
        if self.parent != node
            self.parent.children.delete(self) if self.parent
            @parent = node 
            self.parent.children << self if self.parent != nil
        end
        self
    end

    def add_child(child)
        child.parent = self
    end

    def remove_child(child)
        raise 'error' if !self.children.include?(child)
        child.parent = nil
    end

    def dfs(target_value)
        return self if self.value == target_value
        self.children.each do |child_node|
            result = child_node.dfs(target_value)
            return result unless result.nil?
        end
        nil
    end
   
    def bfs(target_value)
        result = [self]
        until result.empty?
            node = result.shift
            return node if node.value == target_value
            result.concat(node.children)
        end
        return nil
    end
end

