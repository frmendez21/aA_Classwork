
def first_anagram?(str1, str2)
  return false if str1.length != str2.length
  array = str1.split('')
  perms = array.permutation(str1.length).to_a
  perms.map! {|sub_arr| sub_arr.join('')}
  return perms.include?(str2)
end

p first_anagram?("gi", "sa")   #time -->O(n!)  space --> O(n!) 
p first_anagram?("elvis", "lives")


def second_anagram?(str)

end