# Creating a class

# Use the keyword 'class' to create a class.
# We name classes followng PascalCase style.
class Cookie

    # Declare class variables by prefixing with '@@'
    # A class variable is accessible by all class and instance
    # methods. It is shared across all instances, so changing it
    # in one instance will change it for all other instances.
    # Class variables are also shared across the inheritence
    # chain.
    @@color = "Brown"
    #  The initialize method is a special method
    # that is called when a Class is instantiated.
    # This is the constructor.
  
    # This is a getter method
    # It reads the value of an instance variable
    # def sugar
    #   @sugar
    # end
    # The following method will create the method above to
    # read the @sugar instance variable
    attr_reader(:sugar, :flour)
  
    # This is a setter
    # It sets the value of an instance variable
    # i.e. c.sugar = 10
    # def sugar=(qty)
    #   @sugar = qty
    # end
    # The method below will create the method above.
    # It will create a setter for the sugar (and flour)
    # instance variable(s).
    attr_writer :sugar, :flour
  
    # To create the getter and setter at once
    # for an instance variable use the followung
    # method instead:
    # attr_accessor :sugar, :flour 
  
  
    def initialize(sugar, flour)
      puts "in the initialize method"
      # Create a instance variable by prefiing the
      # name of the variable with the '@' symbol
  
      # An instance variable is scoped to the body of
      # the class and an instance. It is useable by all
      # instance methods (including private methods) of
      # a class. Every instance of a class gets its own
      # set of instance variables.
      @sugar = sugar
      @flour = flour
  
      # vs. Javascript
      # this.sugar = sugar
      # this.flour = flour
    end
    # Define instance methods for a class by
    # writing the method within the class body
    def eat
      bake
      "Nom. Nom. Nom."
    end
  
    # To create a class method, prefix the method name
    # with 'self.'. A class method can only be called
    # on the class, and not instances of the class
    def self.info
      "I'm in the Cookie class"
    end
  
    # Any method decalred after the keyword 'private'
    # becomes a private method.
    # Private methods can only be used inside the body
    # of the class. They can't be called as instance
    # methods of the class' instance.
    private
  
    def bake # also an instance method
      puts "baking the cookie"
    end
  
  end
  
  # c = Cookie.new
  # c.bake
  # c.eat
  # Cookie.info
  # # => "I'm in the Cookie class"
  # c = Cookie.new
  # c.info
  # # => NoMethodError: undefined method `info' for #<Cookie:0x00007fe324865768>
  
  # Global Variables
  
  # Prefix a word with $ to create a global variable.
  # 98% of the time, don't use global variables. Variables
  # should always use the minimum scope that is needed.
  # $domain = "http://raise.hell"
  
  c = Cookie.new(2, 4)
  c.sugar # => 2
  