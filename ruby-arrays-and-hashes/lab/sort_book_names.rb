books = []

while(true)
newbook = gets.chomp
break if newbook=="exit"
books.push(newbook)
end

newbooks = []

books.each do |element|
  newbooks.push(element.upcase)
end

print newbooks.sort