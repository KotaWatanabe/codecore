string = "abcd"
array = []

 string.split("").each.with_index do |val, index|
    if index +1 < string.length
    pair = string[index] + string[index+1] 
    array << pair
    end
end
print array