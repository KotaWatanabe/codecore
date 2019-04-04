def reduce(arr,i)
    total = i
    for val in arr
        total = yield(total,val)
    end
    p total
end

reduce([1, 2, 3, 4, 5, 6], 0) { |total, v| total + v }
reduce(["This", "is", "my", "sentence"], "") { |sentence, word| sentence + " " + word }
reduce([6, 5, 9, 2, 1, 10, 3], Float::INFINITY) do |min, v|
    if min > v
        v
      else
        min
      end
    end