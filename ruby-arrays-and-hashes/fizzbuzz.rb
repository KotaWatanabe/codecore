array = []
for num in 1..100
    if num % 3 == 0 && num % 5 == 0
        array.push("FIZZBUZZ")
    elsif num % 3 == 0
        array.push("FIZZ")
    elsif num % 5 == 0
        array.push("Buzz")
    else 
        array.push(num)
    end
end

print array


