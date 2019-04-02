array = [[2,3,4], [5,6,7], [6,7,8]]


newarray = array.map do |sub_arr| 
  sub_arr.map do |i|
        i * i
    end
end

print newarray