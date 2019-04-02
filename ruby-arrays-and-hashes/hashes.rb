# Hashes: https://ruby-doc.org/core-2.5.1/Hash.html

my_hash = {}
my_hash = Hash.new
# Hashes have a default value that is returned when
# accessing keys that do not exist in the hash. If
# no default value is set, nil is used. You can set the
# default value by sending it as an argument to .new()
my_hash = Hash.new(0)



me = {
  "name" => "Brett",
  "place" => "Vancouver",
  "company" => "CodeCore"
}
me["name"]

# Accessing the value for a given key. Use this
# bracket notation to read values and to create
# or re-assign key-value pairs
me["name"]
me["name"] = "Rob"

movie_with_director = {
  "Titanic" => "Stephen Speilberg",
  "Us" => "Jordan Peele",
  "Pulp Fiction" => "Quentin Tarantino"
}

# To get all keys in a hash, use .keys
movie_with_director.keys
# => ["Titanic", "Us", "Pulp Fiction"]

# To get all values in a hash, use .values
movie_with_director.values
# => ["Stephen Speilberg", "Jordan Peele", "Quentin Tarantino"]

# Iterating over hashes

movie_with_director.each do |key, value|
    puts "#{key}'s director is #{value}"
  end
  
  # To loop through only keys or only values
  
  movie_with_director.each_key { |key| puts key }
  movie_with_director.each_value { |value| puts value }
  movie_with_director.each_value  do |value| 
    puts value
  end
  
  hash = {
  "BC" => ["Richmond", "Vancouver"],
  "AB" => ["Edmonton", "Calgary"]
}

hash.each do |province, cities|
  puts "#{province}: #{cities.join(", ")}"
  puts ""
end

# Symbols
#  - A special kind of string
# Symbols are immutable and they are practical data
# structure for text.

# When a symbol is created, if the symbol name already
# exists, that one will be used instead of createing another.
# This makes them excellent for usage as names,
# especially as keys in hashes

# To create a symbol write a word prefixed with a ':'
:i_am_a_symbol
:i-stuff-whatever # invalid symbol
:i stuff # invalid symbol 

# You can use special characters when creating symbols
# just put the name betwen double ""
:"my symbol with spaces"

# Takes the same memory spot
# For most objects, the object_id of an object is
# a pointer to a location in memory where the
# actual data is stored.
# This will be different during multiple runs, because
# it depends on where the system decided to allocate
# the memory, not on any property of the object itself.
# true, false and integers are a little different.


"hello".object_id # => 70185614799280
"hello".object_id # => 70185614918280

me = {
  :name => "Brett",
  :place => "Vancouver",
  :company => "CodeCore"
}

# In this 2nd example, :name, :location, and :company
# are symbols. When a symbol is used as a key in a
# hash, you are allowed to write the key-value pair as follows:
me = {
  name: "Brett",
  place: "Vancouver",
  company: "CodeCore"
}

# To convert between a symbol and a string and vice versa

"string".to_sym
:symbol.to_s

bc_cities_population = { vancouver: 2135201, victoria: 316327, abbotsford: 149855, kelowna: 141767, nanaimo: 88799, white_rock: 82368, kamloops: 73472, chilliwack: 66382 }
