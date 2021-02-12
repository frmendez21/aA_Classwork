class TowerOfHanoi

  # attr_reader :stack1, :stack2, :stack3
  attr_accessor :stack1, :stack2, :stack3, :counter
  def initialize
    @stack1 = [3,2,1]
    @stack2 = []
    @stack3 = []
    @counter = 0
  end

  def game_over?
    if @stack2.length == 3 || @stack3.length == 3
      puts "It took you #{@counter} tries to finish the game"
      puts 'You win!'
      return true
    else
      return false
    end
  end

  def move(start_stack, end_stack)
    disc = start_stack[-1]
    if end_stack.empty? || disc < end_stack[-1]
      end_stack << start_stack.pop
    end
    end_stack
  end


  
  def play
    while game_over? == false
      render
      start = nil
      last = nil

      
      begin
      @counter += 1
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
      rescue 
        retry if start.empty? 
      end
    

      self.move(start,last) unless start.empty?
    end
  end

  def render
    print "Tower 1: "
    print @stack1
    puts
    print "Tower 2: "
    print @stack2
    puts
    print "Tower 3: "
    print @stack3
    puts
  end
    
  
  
  
  

  


end

class ArgumentError
  def message 
    "No discs here"
  end
end


game = TowerOfHanoi.new

game.play


