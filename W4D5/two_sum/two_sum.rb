def  bad_two_sum?(arr, target_sum)
    (0...arr.length).each do |i|
        (i+1...arr.length).each do |j|
            return true if arr[i] + arr[j] == target_sum
        end
    end
    false
end

arr = [0, 1, 5, 7]
p bad_two_sum?(arr, 6) # => time -- O(n^2) space -- O(1) 
p bad_two_sum?(arr, 10) 

def okay_two_sum?(arr, target_sum)
    array = arr.sort 
    left = 0
    right = arr.length
    mid = right/2
    while left < right

        sum = arr[mid] + arr[mid-1]
        if sum > target_sum 
            right = arr[0..mid].length
            mid = right/2
        elsif sum < target_sum
           if target > arr[0] + arr[-1] 
              arr =  arr[left+1..mid]
              left += 1
           elsif 
            

        #    arr[0] + arr[-1] < target_sum
        #    arr[1..-1]
           break
        end

    end
    arr.each    
end
[1,    2, 3 ,4   ,5,    6   ,7  ,8,  9, 10, 11, 12]


md = arr.length/2 
arr[md] + arr[md-1] < target
new_arr = arr[0..md]