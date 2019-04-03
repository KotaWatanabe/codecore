# Pry tip: To load a file directly from pry
# use pry's load command followed by the path
# to the file.
# Example:
# pry(main)> load "what_is_it.rb"

def what_is_it(thing)
     # return "String" if thing.class == String
     # return "Array" if thing.class == Array
     # return "Integer" if thing.class == Integer
     # "Something else"
     
    if [String, Array, Integer].include?(thing.class)
     thing.class.to_s
    else
     "Something else"
    end
  end




