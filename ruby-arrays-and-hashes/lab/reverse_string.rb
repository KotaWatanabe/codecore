string = "hello"

array = string.split("")
print array

newarray = []

for val in array
    newarray.unshift(val) 
end

# for val in array
#     element = val[array.length-1]
#     newarray.push(element) 
# end


p newarray.join()