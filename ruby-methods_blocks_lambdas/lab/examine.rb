
def map(arr)
    new_arr =[]
    for val in arr
      new_arr.push(yield(val))
    end
    p new_arr
  end

  map([1,2,3,4,5]) {|x| x**2}
