-- SQL: Basics

-- To execute this file, do:

-- psql -d <database-name> <demo.sql>

-- Comments

-- <- A single line comment

/* 
   <- multi-line comment
*/

-- CREATING A TABLE

-- It's a common convention to write all SQL
-- keywords (e.g. CREATE TABLE, SELECT, INNER JOIN, etc.)
-- using all upper case letters.

-- CREATE TABLE cars (

--     id BIGSERIAL,
--     /*
--     [BIG]SERIAL is a special data type unique to PostgreSQL.
--     It creates a [BIG]INT that are auto-incremented. When a new
--     row is inserted, we'll not specify this column ourselves.
--     We call this "id" the PRIMARY KEY. It acts as a unique identifier
--     for rows of the table.
--     */
--     brand VARCHAR(50),
--     /*
--     The VARCHAR(<char-max>) is string type where the
--     number of characters that can be contained is capped.
--     VARiable CHARacters.
--     */
--     model VARCHAR(255),
--     doors INTEGER,
--     /*
--     The INTEGER is a number type that can't have decimal
--     values. However, it can be negative.
--     */
--     description TEXT
--     /*
--     The TEXT type is a string that can be of any length.
--     */
-- );

-- Important Notes:
-- ALWAYS terminate SQL queries with a `;`. This
-- absolutely required!

-- CRUD OPERATIONS

-- CREATING ROWS (OR INSERTING ROWS)
-- https://www.postgresql.org/docs/9.5/sql-insert.html


-- INSERT INTO "students"
-- ("first_name", "last_name", "email", "phone_number")
-- values
-- ('Tam','Kbeilli','tam@codecore.ca','778.889.9988');

-- INSERT INTO "students"
-- ("first_name", "last_name", "email", "phone_number")
-- values
-- ('Bam', 'Kbeilli', 'tam@codecore.ca', '778.899.9988'),
-- ('Sam', 'Kbeilli', 'tam@codecore.ca', '778.899.9988'),
-- ('Dan', 'Kbeilli', 'tam@codecore.ca', '778.899.9988');

-- READING DATA

-- This will get all rows from the students table
-- to display all columns
-- SELECT * FROM students;

-- This will get rows from the students table displaying
-- only the specified columns: id, first_name and last_name
-- SELECT id, first_name, last_name FROM students;

-- Use a WHERE clause to filter the rows from a query

-- The following will only retrieve rows where their
-- "id" is equal to 100 (which will be one)
-- SELECT id, first_name FROM students WHERE id = 100;

-- Exercise: Select all students whose ids are greater than 100
-- SELECT id, first_name
--   FROM students
--   WHERE id > 100;

-- Exercise: Select all students that have registered in the
-- last 360 days
-- https://www.postgresql.org/docs/9.1/functions-formatting.html
-- https://www.postgresql.org/docs/9.1/datatype-datetime.html
-- https://www.postgresql.org/docs/9.1/functions-datetime.html

-- SELECT id, first_name, registration_date
--    FROM students
--    WHERE registration_date > '2018-03-15';

-- SELECT id, first_name, registration_date
--    FROM students
--    WHERE registration_date > NOW() - INTERVAL '360' DAY;

-- Using AND and OR

-- SELECT id, first_name, last_name
--   FROM students
--   WHERE id > 100 AND id < 200;

-- SELECT id, first_name, age
--   FROM students
--   WHERE age >= 40 OR age <= 20;

-- Columns values can be empty. These are represented
-- by the NULL value. You can perform queries on it.

-- Demo: Find all students whose age is NULL

-- SELECT id, first_name, age
--   FROM students
--   WHERE age IS NULL;

-- Use LIKE or ILIKE do perform partial matching queries on
-- strings such checking if a string begins with a certain
-- letter or contains a word.  ILIKE ignores case while LIKE doesn't.


-- SELECT id, first_name
--   FROM students
--   WHERE first_name LIKE 'Jo';

--   SELECT id, first_name
--   FROM students
--   WHERE first_name LIKE 'Jo%'; -- Begins with Jo

  -- Exercise: Get all students whose first_name or last_name
-- contain 'nn'

-- SELECT id, first_name, last_name
--   FROM students
--   WHERE first_name ILIKE '%nn%' OR last_name ILIKE '%nn%';

-- ORDERING RESULTS
-- LIMITING RESULTS
-- OFFSET RESULTS

-- SELECT id, first_name, last_name, age
--   FROM students
--   WHERE age IS NOT NULL
--   ORDER BY age ASC, last_name DESC -- Smallest ages first
--   LIMIT 25 -- Only retrieve the first 25 according to above order
--   OFFSET 25; -- Skips first 25, begins at 26th

-- SELECT id, first_name
--   FROM students
--   ORDER BY id
--   LIMIT 10
--   OFFSET 10; -- Skips first 10, begins at 11th

-- AGGREGATE FUNCTIONS
-- Use these to do calculations on groups of data.
-- For a full list of functions, checkout:
-- https://www.postgresql.org/docs/10/static/functions-aggregate.html

-- SELECT
--     COUNT(*) AS total_students, -- Alias column to a different
--     ROUND(AVG(age),3) AS average_age,
--     SUM(age) AS total_age,
--     MIN(age) AS youngest_students_age,
--     MAX(age) AS oldest_students_age
--   FROM students;

-- Often, we want to perform aggregations on only
-- groups of our data instead of an entire table.
-- Use GROUP BY to do this.

-- SELECT COUNT(*) AS occurences, last_name
--   FROM students
--   GROUP BY last_name
--   ORDER BY occurences DESC;

-- UPDATE A ROW
-- Always provide a WHERE when using UPDATE
-- otherwise it will change every row in your table
-- UPDATE students
--   SET first_name = 'Something Else'
--   WHERE id = 1
--   RETURNING *;

-- DELETE
-- Always provide a WHERE when using UPDATE
-- otherwise it will change every row in your table

-- DELETE FROM students
--   WHERE id = 502
--   RETURNING *;