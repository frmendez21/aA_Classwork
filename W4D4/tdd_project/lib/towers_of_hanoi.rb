class TowerOfHanoi

  attr_reader :stack1, :stack2, :stack3
  def initialize
    @stack1 = [3,2,1]
    @stack2 = []
    @stack3 = []
  end

  def game_over?
    if @stack2.length == 3 || @stack3.length == 3
      return true
    else
      return false
    end
  end

  def move(start_stack, end_stack)
    disc = start_stack[-1]
    if disc < end_stack[-1]
      start_stack << end_stack.pop
    else
      raise "That disc is too big!"
    end
  end











end
