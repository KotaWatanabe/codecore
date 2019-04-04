class Rectangle
    attr_accessor :width, :height

    def initialize(width,height)
        @width = width
        @height = height
    end

    def area
        puts @width * @height
    end

    def is_square?
       width == height
    end
end

