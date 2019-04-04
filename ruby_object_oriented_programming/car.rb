#  Exercise Car Blueprints

class Car
    attr_accessor :model, :type, :capacity
    # Methods can have default values for its
    # arguments by using assignment syntax in the argument
    # declarartion position.
  
    # This makes the argument optional. If not provided
    # the argument will use the provided value.
    def initialize(model, type = "sedan", capacity = 4)
      unless model.is_a? String
        raise ArgumentError.new("model must be a string")
        # vs. Javascript
        # throw new Error("model must be a string")
      end
      @model = model
      @type = type
      @capacity = capacity
    end
  
    def drive
      ignite_engine
      puts "Vroom Vroom"
    end
  
    def stop
      puts "Screeeeech"
    end
  
    def park
      puts "zzzzzzzz"
    end
  
    def self.max_speed
      200
    end
  
    private
  
    def pump_gas
      puts "glug glug"
    end
  
    def ignite_engine
      # Emojis for Steve
      puts "ð ð¥ð¥ð¥"
    end
  end
  