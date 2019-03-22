-- SQL: Associations

-- Querying Associations
-- Find all projects associated to the student with id = 2

-- SELECT * FROM projects WHERE student_id = 2;

-- Find all scores for the course with id 1
-- SELECT score, course_id FROM enrolments WHERE course_id = 1;

-- JOINS
-- Use joins to combine tables together merge all of their
-- columns into a single table

-- CROSS JOIN

-- Cross join the students table with the projects table
-- SELECT * FROM students CROSS JOIN projects;


-- SELECT
--     students.id AS student_id,
--     first_name,
--     projects.id AS project_id,
--     title AS project_title
--   FROM students
--   INNER JOIN projects ON students.id = projects.student_id
--   ORDER BY projects.created_at DESC;

-- SELECT
--     students.id AS student_id,
--     first_name,
--     projects.id AS project_id,
--     title AS project_title
--   FROM students
--   INNER JOIN projects ON students.id = projects.student_id
--   ORDER BY projects.title;

-- SELECT
--     students.id,
--     first_name,
--     courses.title AS course_title,
--     score
--   FROM students
--   INNER JOIN enrolments ON students.id = enrolments.student_id
--   INNER JOIN courses ON enrolments.course_id = courses.id
--   WHERE courses.title ILIKE '%hybrid matrix%';

-- SELECT
--     students.id,
--     first_name,
--     last_name,
--     courses.title AS course_title,
--     score
--   FROM students
--   INNER JOIN enrolments ON students.id = enrolments.student_id
--   INNER JOIN courses ON enrolments.course_id = courses.id
--   WHERE students.first_name ILIKE 'jo%'OR students.last_name ILIKE 'jo%'
--   ORDER BY course_title;

--   SELECT first_name, last_name, projects.title AS project_title
--   FROM students
--   LEFT JOIN projects ON students.id = projects.student_id
--   ORDER BY projects.title DESC;

--   SELECT first_name, last_name, projects.title AS project_title
--   FROM students
--   LEFT JOIN projects ON students.id = projects.student_id
--   WHERE projects.title IS NULL;

-- SELECT * FROM (
--     SELECT
--         courses.id,
--         courses.title,
--         ROUND(AVG(enrolments.score), 3) AS average_score,
--         COUNT(enrolments.student_id) AS student_count
--       FROM courses
--       INNER JOIN enrolments ON courses.id = enrolments.course_id
--       GROUP BY courses.id
--       -- HAVING AVG(enrolments.score) < 60
--       ORDER BY average_score DESC
--   ) AS courses_with_stats
--     WHERE average_score < 60 AND student_count >= 3;
  