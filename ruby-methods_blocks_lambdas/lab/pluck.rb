def pluck(arr,symbol)
    array = []
    output_value = nil
    arr.each do |each_hash|
        each_hash.each do |key, value|
            if key == symbol 
                output_value = value   
            end        
         end
         array.push(output_value)  
    end
    p array
end

pluck([{a:1}, {a:2}],:a)
pluck([{b:2}, {a:4,b:4},{a:1},{c:4}],:a)
