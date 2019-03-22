select Sum(total_sum) as sum, s.p_id, s.p_name from
(select (products.remaining_quantity + line_items.quantity) as total_sum, 
products.id as p_id, products.name as p_name
from products inner join line_items on products.id = line_items.product_id
) as s
group by s.p_id, s.p_name;
-- Find the average order total price for all the orders in the system
SELECT AVG(order_total_price) FROM (
  SELECT li.order_id, SUM(li.price * li.quantity) AS order_total_price
    FROM line_items AS li
    GROUP BY li.order_id
) AS average;