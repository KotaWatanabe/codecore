require "./cookie.rb"

# To inherit from a class, use the <
# when declaring a class as shown below.

# By default, all classes will inherit from the Object class
# unless another superclass is provided
class Oreo < Cookie
  # vs. Javascript
  # class Oreo extends Cookie { ...
  attr_accessor :filling_type

  def initialize(sugar, flour, filling_type ="Pure White Sugar")
    # Use super to call the same named method
    # in the super class.
    # In this case, this will call the initialize
    # method from cookie, sending only the sugar and flour
    # arguments.
    super(sugar, flour)
    @filling_type = filling_type
  end

# The eat method will replace the one from the
# super class for an instance of Oreo. This is
# often called method overloading or overriding.
  def eat
    puts "split in half"
    puts "now eat it!"
    super
  end

end
