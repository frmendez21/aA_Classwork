require 'towers_of_hanoi.rb'

describe TowerOfHanoi do 
    subject(:towerofhanoi) { TowerOfHanoi.new }
    describe "#initialize" do 
        it "initializes stack1" do 
            expect(towerofhanoi.stack1).to eq([3, 2, 1]) 
        end

        it "initializes stack2" do 
            expect(towerofhanoi.stack2).to eq([])
        end

        it "initializes stack3" do 
            expect(towerofhanoi.stack3).to eq([])
        end
    end

    describe "#move" do 
        it "should put one disc on top of another if size is correct" do 
            expect(towerofhanoi.move([3, 2, 1], [])).to eq([1])
        end
    end
end