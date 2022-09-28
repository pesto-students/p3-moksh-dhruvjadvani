-- Find the item that has minimum weight
SELECT * FROM items
ORDER BY weight
LIMIT 1;

-- Find the different warehouses in “Pune”
SELECT warehouses.warehouse_id, cities.city, cities.state, warehouses.name, warehouses.extra_context
FROM warehouses
JOIN cities ON cities.city_id = warehouses.city_id
WHERE cities.city_id = 2;

-- Find the details of items ordered by a customer “Mr. Patil”
SELECT items.item_name, items.description, items.weight, items.cost, customers.name, orders.order_date
FROM customers 
JOIN orders ON customers.customer_id = orders.customer_id
JOIN items_orders_maps iom ON iom.order_id = orders.order_no
JOIN items ON items.item_no = iom.item_id
WHERE name = "Mr. Patil";

-- Find a Warehouse which has maximum stores
SELECT warehouses.name, warehouses.location, warehouses.extra_context, cities.city, cities.state
FROM warehouses 
JOIN cities ON cities.city_id = warehouses.city_id
WHERE warehouses.warehouse_id IN (
	SELECT warehouse_id FROM (
		SELECT warehouses.warehouse_id AS warehouse_id, COUNT(stores.store_id) AS store_count
		FROM warehouses
		JOIN stores ON stores.warehouse_id = warehouses.warehouse_id
		GROUP BY (warehouses.warehouse_id)
		ORDER BY store_count DESC
		LIMIT 1
	) warehouses_data
);

-- Find an item which is ordered for a minimum number of times
SELECT item_id, items.item_name, items.description, items.weight, items.cost, COUNT(item_id) AS total_count
FROM items_orders_maps iom
JOIN items ON iom.item_id = items.item_no
GROUP BY item_id
ORDER BY total_count
LIMIT 1;

-- Find the detailed orders given by each customer.
SELECT * FROM customers
JOIN cities ON cities.city_id = customers.city_id
JOIN orders ON orders.customer_id = orders.customer_id
JOIN items_orders_maps iom ON orders.order_no = iom.order_id
JOIN items ON items.item_no = iom.item_id
