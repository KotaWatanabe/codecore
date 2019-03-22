--  SELECT id, completed_on 
--  FROM orders
--  WHERE completed_on > CURRENT_DATE - INTERVAL '24 month' 
--  order by completed_on DESC;

 SELECT (price * quantity) AS sum,product_id,orders.completed_on
 FROM line_items
 INNER JOIN orders ON orders.id = line_items.product_id 
 WHERE orders.completed_on BETWEEN '2017-01-01' AND '2017-12-31'
 ORDER BY sum DESC
 LIMIT 10;
 

 -- Assignment: [lab] Queries 3 Edit Next Module
-- Using the SQL Lab tool: https://sql-lab.herokuapp.com/
-- Write the following SQL Queries:
-- Select all the products that have been purchased in the last 12 months.
  SELECT p.id, p.name
  FROM products AS p
  INNER JOIN line_items AS li ON p.id = li.product_id
  INNER JOIN orders AS o ON o.id = li.order_id
  WHERE o.completed_on > CURRENT_DATE - INTERVAL '12 month'
  GROUP BY p.id
  ORDER BY p.id;
  SELECT products.id, products.name, orders.completed_on FROM products
  INNER JOIN line_items ON products.id = line_items.product_id
  INNER JOIN orders ON line_items.order_id = orders.id
  WHERE orders.completed_on > CURRENT_DATE - INTERVAL '12 month'
  GROUP BY products.id, orders.completed_on
  ORDER BY products.id;
-- Select the top 10 products in terms of last year's gross sales.
  SELECT products.*, SUM(line_items.price * line_items.quantity) AS gross_sales_2017
  FROM products
  INNER JOIN line_items ON products.id = line_items.product_id
  INNER JOIN orders ON line_items.order_id = orders.id
  WHERE orders.completed_on BETWEEN '2017-01-01' AND '2017-12-31'
  GROUP BY products.id
  ORDER BY gross_sales_2017 DESC
  LIMIT 10;
-- Select all the products that weren't purchased during the last 12 months.
-- [Note] the price in the line_items table is price per unit and not total price.
  SELECT *
  FROM products AS p
  WHERE p.id NOT IN (
    -- the query below selects the product ids of all of the ordered products
    SELECT p.id
    FROM products as p
    INNER JOIN line_items as li ON p.id = li.product_id
    INNER JOIN orders as o ON o.id = li.order_id
    WHERE o.completed_on > CURRENT_DATE - INTERVAL '12' MONTH
  )
  ORDER BY p.id;
