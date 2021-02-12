
def first_anagram?(str1, str2)
  return false if str1.length != str2.length
  array = str1.split('')
  perms = array.permutation(str1.length).to_a
  perms.map! {|sub_arr| sub_arr.join('')}
  return perms.include?(str2)
end

p first_anagram?("gi", "sa")   #time -->O(n!)  space --> O(n!) 
p first_anagram?("elvis", "lives")


def second_anagram?(str1, str2)
  array = str2.split('')
  str1.each_char do |c|
    if array.find_index(c) 
        array.delete(c)
    end
  end
  array.empty?
end

p second_anagram?("gizmo", "sally")   #time -->O(n)  space --> O(1)
p second_anagram?("elvis", "lives")

def third_anagram?(str1, str2)
  sorted1 = str1.split('').sort
  sorted2 = str2.split('').sort
  sorted1 == sorted2
end

p third_anagram?("gizmo", "sally")  #time --> O(n^2) space --> O(1)
p third_anagram?("elvis", "lives")