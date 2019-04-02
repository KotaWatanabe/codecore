# -------Assignment: [Lab] Find The Repeated Number------------
# with hash
a=[5,3,2,7,4,2,8]
h = {}
a.each do |v|
    if h[v]
        p v
        break
    else
        h[v]=v
    end
end

# without hash
a.each do |v|
    p (v) if a.count(v) >1
end