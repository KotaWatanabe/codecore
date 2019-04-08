def GetCount(inputStr)
    vowel="a,i,u,e,o"
    lower_str = inputStr.downcase
    arr = lower_str.split("")
    p arr
    count = 0
    arr.each do |char|
        case char 
        when "a","i","u","e","o"
            count += 1
        end
    end
    p count
end

GetCount("Hello World")

# best solution

# def getCount(inputStr)
#     inputStr.count("aeiou")
#   end