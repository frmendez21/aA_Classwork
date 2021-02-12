
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

p second_anagram?("gizmo", "sally")   #time -->O(n^2) (becase of the index_find)  space --> O(n)
p second_anagram?("elvis", "lives")

def third_anagram?(str1, str2)
  sorted1 = str1.split('').sort
  sorted2 = str2.split('').sort
  sorted1 == sorted2
end

p third_anagram?("gizmo", "sally")  #time worst--> O(n^2)  time best -->O(n log n) space --> O(n)
p third_anagram?("elvis", "lives")


def forth_anagram?(str1, str2)
  return false if str1.length != str2.length

  hash1 , hash2 = Hash.new(0), Hash.new(0)
  (0...str1.length).each do |i| 
    hash1[str1[i]] += 1
    hash2[str2[i]] += 1
  end
  hash1.each {|k, v| return false if !hash2.keys.include?(k) || hash2[k] != v}
  true
end

p forth_anagram?("gizmo", "sally")  #time --> O(n) space --> O(1)
#hash is costant because key is alphabet
p forth_anagram?("elvis", "lives")

#hash {'g'=>1, 'i' => 1, 'm'=>1, 'o'=>1}
#str2 = 'sally'
#iterate over the str1 add the value to hash
#sort str1 & str2, iterate over str1, if str1[i] != str2[i], false after true
#if g !=m n 
def fifth_anagram?(str1, str2)
  return false if str1.length != str2.length
  hash1 = {}
  str1.each_char {|ch| hash1[ch] = 1} 
  str2.each_char {|ch| return false if !hash1.keys.include?(ch)} 
  true
end

p fifth_anagram?("gizmo", "sally")  
p fifth_anagram?("elvis", "lives")