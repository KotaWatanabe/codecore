class CookieJar
    def initialize(capacity = 10)
        @capacity = capacity
        @cookies = []
    end
  
    def add_cookie(cookie)
      unless cookie.is_a? Cookie
        raise ArgumentError.new("Must be a Cookie")
      end
      if @cookies.length >= @capacity
        puts "You have way too many cookies in here already!"
      else
        @cookies.push(cookie)
      end
    end
  
    def take_cookie
      @cookies.pop
    end
  
    def details
      puts "This jar has #{@cookies.length} cookies in it"
      puts "Here they are:"
      puts @cookies.map {|cookie| "Cookie w/ #{cookie.flour} cups flour and #{cookie.sugar} cups sugar"}.join(", ")
    end
  
  end
  

