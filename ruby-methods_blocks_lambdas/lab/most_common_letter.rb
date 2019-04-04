def most_common_letter(string)
    letter=''
    letter_count=0
    string.split("").each do |current_letter|
        if current_letter[/[a-zA-Z0-9]+/] == current_letter
            if letter_count < string.count(current_letter)
                letter=current_letter
                letter_count = string.count(current_letter)
            end
    
        end
    end
    return letter
end

p most_common_letter("aaaabbc") # => "a"
p most_common_letter("T a d c g d g d d n") # => "d"
p most_common_letter("1111 monkeys on the wall") # => "1"