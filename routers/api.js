const router = require('express')
const controllers = require('../controllers/api.js')


router.get("/all-lessons-group-name", (req, res)=>{
  const sql = `
        SELECT lesson_date, age_group, COUNT(*) AS total_lessons
        FROM lessons
        WHERE instructor_id = ${req.body.instructor_id}
        GROUP BY lesson_date, age_group
        ORDER BY lesson_date ASC
      `
  controllers.retrieveQuery(req, res, sql)
})

router.get('/lesson-groups-for-day', (req, res)=>{
  const sql = `
        SELECT * FROM lessons
        WHERE instructor_id = ${req.body.instructor_id} AND lesson_date = ${req.body.lesson_date}
      `
  controllers.retrieveQuery(req, res, sql)
})

router.get('/students-for-day', (req, res)=>{
  const sql = `SELECT 
  g.guest_id,
  g.name AS guest_name,
  g.birthdate AS guest_birthdate,
  g.level AS ability_level,
  p.age_group,
  p.lesson_date,
  i.instructor_id,
  i.name AS instructor_name
FROM PROGRAM p
JOIN GUESTS g ON p.guest_id = g.guest_id
JOIN INSTRUCTORS i ON p.instructor_id = i.instructor_id
WHERE p.age_group = ? AND p.lesson_date = ?
ORDER BY g.level ASC;
`
  controllers.retrieveQuery(req, res, sql)
})

