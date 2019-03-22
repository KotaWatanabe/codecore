-- Assignment: [lab] Queries 1 Edit Next Module
-- Using the SQL Lab tool: https://sql-lab.herokuapp.com/
-- Write the following SQL Queries:
-- Find the average line_item total price (meaning quantity * price) for each order that were completed in the monh of January 2016.
  SELECT line_items.order_id, ROUND(AVG(line_items.price * line_items.quantity)) AS total_avg_price
  FROM orders
  INNER JOIN line_items
  ON orders.id = line_items.order_id
  WHERE orders.completed_on > '2016-01-01' AND orders.completed_on < '2016-01-31'
  GROUP BY line_items.order_id
  ORDER BY line_items.order_id;
-- Select product titles, product prices and the lowest price they were sold at during the last month.
-- [Note] the total price in the line_items table is price per unit and not total price.
  SELECT p.name, p.price, MIN(li.price) AS lowest_price
  FROM line_items as li
  INNER JOIN products AS p ON li.product_id = p.id
  INNER JOIN orders AS o ON li.order_id = o.id
  WHERE o.completed_on > CURRENT_DATE - INTERVAL '1 month'
  GROUP BY p.id;
  -- TYLER SUZUKI NELSON'S SOLUTION (For the month of January 2016)
  SELECT products.name, products.price, MIN(line_items.price) AS lowest_price FROM products
  INNER JOIN line_items ON products.id = line_items.product_id
  INNER JOIN orders ON orders.id = line_items.order_id
  WHERE orders.completed_on >= '2016-01-01' AND orders.completed_on <= '2016-01-31'
  GROUP BY products.id;
