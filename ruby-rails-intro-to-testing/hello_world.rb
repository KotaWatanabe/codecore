require "minitest/autorun"

# To create a grouping of tests with MiniTest,
# create a class whose name ends in "Test" and inherits
# from MiniTest::Test
class HelloWorldTest < MiniTest::Test
    
    # TO run tests (with minitest/autorun) you must
    # start the method name with test_
    def test_something
    # Use the method 'assert' inside a test method to
    # verify that your code must evaluate to
    # something truthy.
        assert(true)
    end

    def test_something_else
        #Use the method assert_equal inside a test method 
        # to compare values.
        assert_equal(3, 1 + 1)
    end

end

# To run this test file, execute with ruby:
# rubby hello_world.rb

# To display the name of all test that run, add
# ruby hello_world.rb --verbose

# There are 3 different kinds of automated tests:

# - Unit testing
# - Integration testing
# - Functional testing

# Unit testing
# Testing aminimal amount of code. Often a method or 
# a function. It means testing a minimal piece of code 
#isolated from the rest of your application.

# Integration testing
# It means testing a specific section of an application
# as a whole. This helps identify issues between the 
# related parts of our app. In rails we'll test our
# controllers as integration tests.

# Functional testing
# This involves testing the application as a whole 
# against it's requirements For web applications, this 
# might mean simulating a browser and simulating user
# interactions with a headless Chrome browser or Selenium. 

