require('./helper_methods.rb')
# Model the following in Ruby Classes & Objects: The cat catches the bird and eats it

# Stretch 1: Use inheritance

# Stretch 2: Give the cat and the bird names.

# Stretch 3: Make the chances of the cat catching the bird 50%.

# Stretch 4: Simulate having 100 cats trying to catch and eat 100 birds.

# Stretch 5: Create a module called HelperMethods in a separate file that has a method called `random_number`. Include the module in your classes and use the `random_number` method if it makes sense.

class Animal
  include Helpermethod

  attr_accessor :name
  def initialize(name)
    @name = name
  end

end

class Bird < Animal

end

class Cat < Animal

  def catch(bird)

    unless bird.is_a? Bird
      raise ArgumentError.new("Cat's only catch birds")
    end
    num = random_number
    if num == 1
      puts "#{bird.name} got caught"
      eat bird.name
    else 
      puts "#{bird.name} got away!"
    end
  end

  def eat(name)
    puts "#{@name} ate #{name}"
  end
end

for x in 1..100 do
  c = Cat.new(x)
  c.catch(Bird.new('random bird'))
end
