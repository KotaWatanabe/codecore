class FizzBuzz

    attr_accessor :num1, :num2

    def initialize(num1,num2)
        @num1 = num1
        @num2 = num2
    end

    def run
        arr = []
        for i in 1..100
            if i % num1 == 0 && i % num2 == 0
                arr.push("Fizzbuzz")
            elsif i % num1 == 0
                arr.push("Fizz")
            elsif i % num2 == 0
                arr.push("Buzz")
            else
                arr.push(i)
            end
        end
        p arr
    end
end

fb = FizzBuzz.new(3,5)

fb.num1 = 10
fb.num2 = 20


fb.run