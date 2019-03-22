SELECT * FROM products
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN orders ON orders.id = line_items.order_id;

SELECT p.name, l.price, l.quantity, o.id
FROM products AS p
INNER JOIN line_items AS l ON l.product_id = p.id
INNER JOIN orders AS o ON o.id = l.order_id;