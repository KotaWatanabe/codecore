SELECT id,first_name,last_name,Age FROM students
WHERE Age BETWEEN 35 AND 45;
LIMIT 10;

 id | first_name | last_name  | age 
----+------------+------------+-----
 11 | Jordyn     | Quigley    |  45
 12 | Easter     | Schneider  |  44
 15 | Rebecca    | Rohan      |  37
 17 | Finn       | Bode       |  43
 19 | Brian      | Simonis    |  40
 21 | Santino    | Padberg    |  39
 23 | Hanna      | Prohaska   |  36
 30 | Maude      | Nienow     |  38
 31 | Johnathan  | Kuphal     |  44
 32 | Lexi       | Altenwerth |  36
(10 rows)


SELECT id, first_name,last_name,age FROM students 
WHERE age > 25 AND first_name LIKE '%le%'
ORDER BY id ASC, first_name DESC
LIMIT 10
OFFSET 20;

 id  | first_name | last_name  | age 
-----+------------+------------+-----
  40 | Scarlett   | Ankunding  |  49
  53 | Alexys     | Krajcik    |  37
  61 | Manley     | Walter     |  28
  87 | Doyle      | Schaefer   |  70
 124 | Alexandrea | Conroy     |  57
 137 | Caleigh    | Zboncak    |  68
 173 | Miles      | Tremblay   |  52
 196 | Noble      | Upton      |  73
 220 | Joelle     | Kuhic      |  26
 224 | Clarabelle | Runolfsson |  30
(10 rows)

SELECT id, first_name,last_name,age FROM students
WHERE age IS NOT NULL
ORDER BY age DESC
LIMIT 10;

id  | first_name | last_name | age 
-----+------------+-----------+-----
 126 | Frederique | Spinka    |  74
 403 | Maia       | OKeefe   |  74
 235 | Rogelio    | Cassin    |  74
 234 | Vilma      | Littel    |  74
 383 | Hilda      | Conn      |  73
  96 | Brennan    | Ankunding |  73
 264 | Danyka     | Lebsack   |  73
 196 | Noble      | Upton     |  73
 353 | Deon       | Glover    |  73
 443 | Jayme      | Kilback   |  73
(10 rows)

SELECT id, first_name,last_name,age FROM students
WHERE age = 45 AND last_name ILIKE '%n%';

 id  | first_name | last_name | age 
-----+------------+-----------+-----
  71 | Julia      | Senger    |  45
 211 | Karina     | Hagenes   |  45
 362 | Heath      | Towne     |  45
(3 rows)

SELECT id,name,price,sale_price,remaining_quantity FROM products
WHERE price > sale_price;

SELECT id,name,price,sale_price,remaining_quantity FROM products
WHERE price > sale_price AND remaining_quantity IS NOT NULL

SELECT id,name,price,sale_price,remaining_quantity FROM products
WHERE price >= 25 AND price <= 50 AND price > sale_price;



