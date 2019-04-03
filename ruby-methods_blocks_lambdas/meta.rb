# meta programming
# Programming techniques that perform operations
# on the running code itself.

# define_method

def one
    1
  end
  
  def two
   2
  end
  
  numbers = {
    1 => "one",
    2 => "two",
    3 => "three",
    4 => "four"
  }
  
  numbers.each do |number, number_name|
    define_method(number_name) do
      number
    end
  end

  
  