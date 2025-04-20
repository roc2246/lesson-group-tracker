const db = require("../db");
const utilities = require('../utilities')

/* 
NAME: retrieve lessons
INPUT: req, res, sql, connection
*/

async function retrieveLessons(req, res, sql) {
  try {
    const connection = await db.dbLogin();
    const instructorID = req.body.instructorID;
    const lessonDate = req.body.lesson_date;

    utilities.validateInput(instructorID,  "Instructor ID")

    const values = sql.includes("lesson_date")
      ? [instructorID, lessonDate]
      : [instructorID];

    const results = await db.handleQuery(sql, values, connection);
    connection.end()
    return res.status(200).json({ lessons: results });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
}

/* 
NAME: todays students
INPUT: req, res, conn
*/

// async function todaysStudents(req, res, conn = db.dbLogin) {
//   try {
//     const connection = await conn();
//     const lessonDate = req.body.lesson_date;
//     const ageGroup = req.body.age_group;

//     // SQL query for age group and lesson date
//     const sql = `
//       SELECT g.guest_id, g.name AS guest_name, g.level AS ability_level, g.birthdate AS guest_birthdate,
//              p.age_group, i.name AS instructor_name, p.lesson_date
//       FROM PROGRAM p
//       JOIN GUESTS g ON p.guest_id = g.guest_id
//       JOIN INSTRUCTORS i ON p.instructor_id = i.instructor_id
//       WHERE p.age_group = ? AND p.lesson_date = ?
//       ORDER BY g.level ASC;
//     `;
//     const values = [ageGroup, lessonDate];

//     const results = await db.handleQuery(sql, values, connection);
//     connection.end(); // Close the connection
//     return res.status(200).json({ lessons: results });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Failed to retrieve students for today." });
//   }
// }

module.exports = {
  retrieveLessons,
  todaysStudents,
};
