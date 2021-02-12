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
    array = array.sort 
    
end