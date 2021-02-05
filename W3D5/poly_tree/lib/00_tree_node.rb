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
end
