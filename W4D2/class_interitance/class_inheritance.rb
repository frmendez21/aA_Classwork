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

    def initialize(name, title, salary, boss, employees)
        super(name, title, salary, boss) 
        @employees = employees  
    end

    def bonus(multiplier) 
        bonus = 0
        @employees.each do |employee|
            bonus += empolyee.bonus(multiplier)
        end
        bonus * multiplier
    end

end