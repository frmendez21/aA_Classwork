def my_min_quadratic(arr)
    smallest = arr[0]
    (1...arr.length).each do |ele1|  
        (ele1 + 1...arr.length).each do |ele2|
            if arr[ele1] < smallest || arr[ele2] < smallest
                smallest = arr[ele1]
            end
        end
    end
    smallest
end

def my_min(arr)
    smallest = arr[0]
    arr.each do |i| 
        if i < smallest 
            smallest = i 
        end
    end
    smallest
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
 my_min_quadratic(list) #time-complexity : O(n^2)
 my_min(list)  # time-complexity : O(n)


def largest_contiguous_subsum(list)
    arr = []
    (0...list.length).each do |i|
        (i...list.length).each do |j|
            arr << list[i..j]
        end
    end
    arr
    max = arr[0]
    (1...arr.length).each do |i|
        if arr[i].sum > max.sum
            max = arr[i]
        end
    end
    max.sum
end

def largest_contiguous_subsum_lin(list)
    current = list.first
    max = list.first
    (1...list.length).each do |i|
        current = 0 if current < 0
        current += list[i] 
        max = current if current > max
    end
    max
end


list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum(list) #time-conplexity : O(n^3)
p largest_contiguous_subsum_lin(list) # O(n) 
