const express = require('express')
const router = express.Router()
const controllers = require('../controllers/api.js')

// GET all lessons grouped by name and date
router.get("/all-lessons-group-name", (req, res) => {
  const sql = `
  SELECT l.lesson_date, p.program_name, COUNT(*) AS total_lessons
  FROM lessons l
  JOIN programs p ON l.program_id = p.program_id
  WHERE l.instructor_id = ?
  GROUP BY l.lesson_date, p.program_name
  ORDER BY l.lesson_date ASC
`;
  controllers.retrieveQuery(req, res, sql)
})

// GET all lesson groups for a specific day
router.get('/lesson-groups-for-day', (req, res) => {
  const sql = `
    SELECT l.lesson_id, l.lesson_date, p.program_name, s.name AS student_name, COUNT(*) AS total_students
    FROM lessons l
    JOIN programs p ON l.program_id = p.program_id
    JOIN lesson_students ls ON l.lesson_id = ls.lesson_id
    JOIN students s ON ls.student_id = s.student_id
    WHERE l.instructor_id = ? AND l.lesson_date = ?
    GROUP BY l.lesson_id, l.lesson_date, p.program_name, s.name
    ORDER BY l.lesson_date ASC
  `;
  controllers.retrieveQuery(req, res, sql)
})

// GET students for a specific age group on a specific day
router.get('/students-for-day', (req, res) => {
  const sql = `
    SELECT 
      s.student_id,
      s.name AS student_name,
      s.birthdate AS student_birthdate,
      s.level AS ability_level,
      p.age_group,
      l.lesson_date,
      i.instructor_id,
      i.name AS instructor_name
    FROM lessons l
    JOIN programs p ON l.program_id = p.program_id
    JOIN students s ON s.program_id = p.program_id
    JOIN instructors i ON l.instructor_id = i.instructor_id
    WHERE p.age_group = ? AND l.lesson_date = ?
    ORDER BY s.level ASC;
  `
  controllers.retrieveQuery(req, res, sql)
})

module.exports = router
