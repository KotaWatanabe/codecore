def product(*nums)
    nums.reduce() do |curr_min, num|
      if curr_min > num
        num
      else
        curr_min
      end
    end
  end
  
  product(1,2,3,4) 
