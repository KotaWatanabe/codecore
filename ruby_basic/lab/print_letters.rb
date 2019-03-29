i = 0
alphabet ="abcdefghijklmnopqrstuvwxyz"
for i in 0..24
    puts (alphabet[i]+" ") * (i.to_f + 1) 
end


for char in 65..90
    (char-65+1).times {print char.chr}
    puts
end