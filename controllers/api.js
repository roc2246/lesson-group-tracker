const db = require("../db");

/* 
NAME: retrieve lessons
INPUT: req, res, sql, connection
*/

async function retrieveLessons(req, res, sql, conn = db.dbLogin) {
  try {
    const connection = await conn();
    const instructorID = req.body.instructorID;
    const lessonDate = req.body.lesson_date;

    if (!instructorID) {
      return res.status(400).json({ error: "Instructor ID is required." });
    }

    const values = sql.includes("lesson_date")
      ? [instructorID, lessonDate]
      : [instructorID];

    connection.query(sql, values, (err, results) => {
      if (err) {
        console.error("Query error:", err);
        return res.status(500).json({ error: "Failed to retrieve lessons." });
      }

      return res.status(200).json({ lessons: results });
    });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
}

/* 
NAME: todays students
INPUT: req, res, conn
*/

async function todaysStudents(req, res, conn = db.dbLogin) {
  try {
    const connection = await conn();
    const lessonDate = req.body.lesson_date;
    const ageGroup = req.body.age_group;

    // sql of age group for lessons by date
    const sql = `SELECT g.guest_id, g.name AS guest_name, g.level AS ability_level, g.birthdate AS guest_birthdate,
       p.age_group, i.name AS instructor_name, p.lesson_date
FROM PROGRAM p
JOIN GUESTS g ON p.guest_id = g.guest_id
JOIN INSTRUCTORS i ON p.instructor_id = i.instructor_id
WHERE p.age_group = ${ageGroup} 
AND p.lesson_date = ${lessonDate}  
ORDER BY g.level ASC;`;
    const values = [lessonDate, ageGroup];

    connection.query(sql, values, (err, results) => {
      if (err) {
        console.error("Query error:", err);
        return res.status(500).json({ error: "Failed to retrieve lessons." });
      }

      return res.status(200).json({ lessons: results });
    });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
}

module.exports = {
  retrieveLessons,
  todaysStudents,
};
