# Implement a map_over_hash method that can be use to map over a hash returning an array. The block passed to the method must be passed the key and value of the mapped over pairs.
#
# Example usage:
#


def map_over_hashes(hash)
    new_arr = []
  
    for key, value in hash
      new_arr << yield(key, value)
    end
  
    p new_arr
  end
  
  map_over_hashes({ name: "Cersei", profession: "Queen", mood: "bitter" }) do |key, value|
    "Her #{key.to_s} is #{value}"
  end
  # => ["Her name is Cersei", "Her profession is Queen", "Her mood is bitter"]
  
  map_over_hashes({ 2 => 5, 10 => 2, 5 => 6 }) { |key, value| key.to_s * value }
  # => [ "22222", "1010", "555555" ]