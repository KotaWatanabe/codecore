class Rectangle
    attr_accessor(:x, :y)

    def initialize(x,y)
        if x < 0 || y < 0
            raise ArgumentError.new("Negative arguments are not allowed!")
          end
        @x = x
        @y = y
    end

    def area
        x*y
    end

    def perimeter
       (x*2) + (y*2) 
    end

    def is_square?
        x == y
    end

end