puts "give me three inputs"
first = gets.chomp
second = gets.chomp
third = gets.chomp
arr = [first,second,third]

result = ""

for i in 0..2
    for j in 0..2
        for k in 0..2
            result = arr[i]+" "+arr[j]+" "+arr[k]
            puts result
        end
    end
end


