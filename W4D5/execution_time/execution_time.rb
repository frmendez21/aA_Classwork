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
p my_min_quadratic(list) #time-complexity : O(n^2)
p my_min(list)  # time-complexity : O(n)