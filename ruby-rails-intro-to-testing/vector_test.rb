require "minitest/autorun"
require "./vector.rb"

class VectorTest < MiniTest::Test
  # A method that begins with test_ inside
  # of a Test class is called a "test".
  def test_length
    #GIVEN - Initial state of the program
     # A vector of (3, 4)
    vector = Vector.new(3, 4)

    # WHEN - An action is triggered
    # The length method is called
    length = vector.length

    # THEN - We verify the final state
    # length should equal 5
    assert_equal(5, length)
    # When using 'assert_equal' the argument order is:
    # - The first argument is the value we expect or want
    # - The second argument is the actual value our
    # code returned.

    # A line that begins with an "assert*" method
    # is called an assertion.
    # There can be multiple assertions per test.
    # However, it is recommended to keep it to a
     # minimum
    assert_equal(13, Vector.new(5, 12).length)
    assert_equal(17, Vector.new(8, 15).length)
    assert_equal(20, Vector.new(0, 20).length)
    assert_equal(35, Vector.new(35, 0).length)
  end

    # Method to replace "to_s". When it is called
    # it returns a human friendly string to represent
    # a vector.
    def test_to_s
        # GIVEN
        vector = Vector.new(3, 4)
        #WHEN
        to_s = vector.to_s
        # THEN
        assert_equal("Vector (3, 4)", to_s)
    end

end
