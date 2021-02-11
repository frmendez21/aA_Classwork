require 'tdd'

describe "my_uniq" do 
    let(:arr) { [1, 1, 2, 2, 5, 4, 3] }
    it "returns an array that removes duplicates" do 
        expect(arr.my_uniq).to eq([1, 2, 5, 4, 3])
    end
end 

describe "two_sum" do 
    let(:arr) { [1, -1, 3, 4, -3, 6] }
    it "return an array of indices that add to zero" do 
        expect(arr.two_sum).to eq([[0, 1], [2, 4]])
    end
end

describe "my_transpose" do 
    let(:arr) { [[1, 2, 3], [4, 5, 6], [7, 8, 9]] }
    it "return a new matrix of flipped rows and cols" do
        expect(arr.my_transpose).to eq([[1, 4, 7], [2, 5, 8], [3, 6, 9]])
    end
end