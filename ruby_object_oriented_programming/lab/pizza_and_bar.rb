class Food
    def initialize(sugar, protein, fat)
        @sugar = sugar
        @protein = protein
        @fat = fat
    end


end

class Beer < Food
    def initialize(volume,sugar,protein,fat)
        super(sugar,protein,fat)
        @volume = volume
    end
end

class Pizza < Food
    def initialize(weight,sugar,protein,fat)
        super(sugar,protein,fat)
        @weight = weight
    end
end