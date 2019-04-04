class Animal

    attr_accessor :name,:color

    def initialize(name,color)
        @name = name
        @color = color
    end

    def eat
        p "I'm eating"
    end

    def walk
        p "I'm walking"
    end
end

class Dog < Animal 
    def bark
        p "woof"
    end
    def eat
        super
        p "Bones are yummy!"
    end
end

class Cat < Animal
    def eat
        p "Fish is Yummy"
    end
end

d = Dog.new("Bob","black")
d.eat

c = Cat.new("Bob","white")
c.eat