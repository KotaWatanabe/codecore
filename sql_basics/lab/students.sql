INSERT INTO students
(first_name,last_name,Age,email,registration_date,phone_number)
VALUES
('John','Smith',45,'john@smith.com','2016-01-01','778.778.7787');

SELECT * FROM students
ORDER BY id DESC
LIMIT 1;

-- id  | first_name | last_name 
-- -----+------------+-----------
--  501 | John       | Smith

UPDATE students 
    SET Age = 50
    WHERE id = 501
    RETURNING *;

    DELETE FROM students 
        WHERE id = 501
        RETURNING *;