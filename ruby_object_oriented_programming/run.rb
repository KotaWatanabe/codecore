require "./cookie.rb"
require "./oreo.rb"
require "./cookie_jar.rb"

cj = CookieJar.new(5)

cj.add(Cookie.new(10, 20))
cj.add(Cookie.new(20, 20))

cj.details

cj.take 

cj.details
