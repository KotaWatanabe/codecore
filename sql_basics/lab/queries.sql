SELECT name, MAX(sale_price * remaining_quantity) AS most_value
FROM products
GROUP BY name 
ORDER BY most_value DESC
LIMIT 1;


-- id, name, description, price, sale_price, remaining_quantity

SELECT *
FROM products
WHERE price BETWEEN 25 AND 50 AND remaining_quantity > 0
ORDER BY price DESC
LIMIT 1;

SELECT *
FROM products
WHERE sale_price < price AND remaining_quantity > 0
ORDER BY price, name;

SELECT *
FROM products
WHERE sale_price < price AND remaining_quantity > 0
ORDER BY price, name
LIMIT 20;
OFFSET 20;

SELECT AVG(price) AS average_price
FROM products;

SELECT AVG(sale_price) AS average_price
FROM products
WHERE sale_price < price;

SELECT AVG(price) AS average_price
FROM products
WHERE sale_price < price AND remaining_quantity > 0;

UPDATE products
 SET remaining_quantity = 0
 WHERE name ILIKE '%paper%';




