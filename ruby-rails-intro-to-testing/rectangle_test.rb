require "minitest/autorun"
require "./rectangle.rb"

class RectanlgeTest < MiniTest::Test

    def test_area
        rectangle = Rectangle.new(3,4)
        area = rectangle.area
        assert_equal(12, area)
    end

    def test_perimeter
        rectangle = Rectangle.new(3,4)
        perimeter = rectangle.perimeter
        assert_equal(14, perimeter)
    end

    def test_is_square?
        rectangle = Rectangle.new(3,4)
        is_square = rectangle.is_square?
        assert_equal(false, is_square)
    end

    def test_initialize_raises_error_when_args_are_negative
        assert_raises do
          Rectangle.new(-1, 2)
        end
        assert_raises do
          Rectangle.new(2, -4)
        end
    end
end