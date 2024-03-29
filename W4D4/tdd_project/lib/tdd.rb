class Array 
    def my_uniq
        hash = Hash.new(0)
        self.each do |el|
            hash[el] += 1
        end
        hash.keys
    end

    def two_sum 
        new_arr = []
        self.each_with_index do |el1, idx1|
            self.each_with_index do |el2, idx2|
                if el2 > el1 && el2 + el1 == 0
                    new_arr << [idx2, idx1]
                end
            end
        end
        new_arr
    end

    def my_transpose
        result = []
        (0...self.length).each do |i|
            inner = []
            (0...self.length).each do |j|
                inner << self[j][i]
            end 
            result << inner    
        end
        result    
    end

end

def stock_picker(arr)
    [arr.index(arr.min), arr.index(arr.max)]
end
    

