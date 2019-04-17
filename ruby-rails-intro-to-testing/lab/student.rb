class Student
    attr_accessor(:first_name, :last_name, :score)

    def initialize(first_name,last_name,score)
        if !first_name || !last_name || !score
            raise ArgumentError.new("You need to pass all auguments")
        end
        @first_name = first_name
        @last_name = last_name
        @score = score
    end

    def full_name
        first_name + " " + last_name
    end

    def grade  
     if score >= 80
        "A"
     elsif score >= 70
        "B"
     elsif score >= 60
        "C"
     elsif score >= 50
        "D"
     elsif score >= 40
        "E"
     else 
        "F"
     end
    end
end

