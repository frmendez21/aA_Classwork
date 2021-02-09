class Employee

    attr_reader :name, :title, :salary, :boss

    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary 
        @boss = boss  
    end

    def bonus(multiplier)
        @salary * multiplier 
    end

end
    
class Manager < Employee

    def initialize(name, title, salary, boss, employees = [])
        super(name, title, salary, boss) 
        @employees = employees
    end

    def bonus(multiplier) 
      self.calc_salary * multiplier
    end

    def calc_salary
      sal = 0
      @employees.each do |employee|
        if employee.is_a?(Manager)
          sal += employee.calc_salary
        end
        sal += employee.salary
      end
      sal
    end

end