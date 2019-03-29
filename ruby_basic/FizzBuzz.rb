for num in 1..100
    if num % 3 == 0 && num % 5 == 0
        puts "FIZZBUZZ"
    elsif num % 3 == 0
        puts "FIZZ"
    elsif num % 5 == 0
        puts "Buzz"
    else 
        puts num
    end
end

for num in 1..100
    str = ""
    str += "Fizz" if num % 3 == 0
    str += "Buzz" if num % 5 == 0
    if str.empty?
      puts num
    else
      puts str
    end
  end