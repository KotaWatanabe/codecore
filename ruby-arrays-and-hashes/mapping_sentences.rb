a =  [
  ['john', 'steve', 'jen'],
  ['ate', 'sat on', 'bought'],
  ['an apple', 'the couch', 'a toothbrush']
]

random_sentence = a.map { |words| words.sample }.join(" ")
puts random_sentence

# random_array = a.map do |words|
#   words.sample
# end
# puts random_array.join(" ")
