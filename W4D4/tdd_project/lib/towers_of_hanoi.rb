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
    raise "No disc here" if start_stack.empty?
    if end_stack.empty? || disc < end_stack[-1]
      end_stack << start_stack.pop
    else
      raise "That disc is too big!"
    end
    end_stack
  end

  def play
    while game_over? == false
      print @stack1
      print @stack2 
      print @stack3
      start = nil
      last = nil
      puts "Enter the stack number you wish to take from"
      input = gets.chomp.to_i
      puts "Enter the stack number you wish to add to."
      input2 = gets.chomp.to_i
      if input == 1
        start = @stack1
      elsif input == 2
        start = @stack2
      elsif input == 3
        start = @stack3
      end
      if input2 == 1
        last = @stack1
      elsif input2 == 2
        last = @stack2
      elsif input2 == 3
        last = @stack3
      end


      self.move(start, last)
    end
  end
  


end

# game = TowerOfHanoi.new

# game.play


