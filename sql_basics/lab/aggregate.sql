SELECT 
COUNT(*) AS named_elinore
FROM students
WHERE first_name ILIKE '%ELINORE%' OR last_name ILIKE '%ELINORE%';

SELECT first_name, COUNT(first_name) AS name_occurrences
  FROM students
  HAVING COUNT(first_name) > 1
  GROUP BY first_name;

SELECT first_name, COUNT(first_name) AS name_occurrences
FROM students
HAVING COUNT(first_name) > 1
GROUP BY first_name
LIMIT 20;
ORDER BY first_name;

SELECT name, price,MAX(price)
FROM products;

 SELECT name,price
  FROM products
  ORDER BY price
  DESC LIMIT 1;

  SELECT name,sale_price
  FROM products
  WHERE price > sale_price 
  ORDER BY price ASC
  LIMIT 1;

  SELECT ROUND(SUM(sale_price))
  FROM products;
  

