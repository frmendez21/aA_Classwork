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
    

class Disks 
    SIZES = ['small', 'medium', 'large']
    attr_reader :small_disk, :medium_disk, :large_disk
    def initialize
        @small_disk = SIZES[0]
        @medium_disk = SIZES[1]
        @large_disk = SIZES[2]
    end
end

class Pegs 
    def initialize
        @peg1 = []
        @peg2 = []
        @peg3 = []
    end

    def move_disk(peggie1, peggie2)
        if peggie1[-1].index(SIZES) < peggie2[-1].index(SIZES)
            peggie2 << peggie1.pop 
        end
    end

end