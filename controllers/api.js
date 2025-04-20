const db = require("../db");

/* 
NAME: retrieve lessons
INPUT: req, res, sql, connection
*/

async function retrieveLessons(req, res, sql, conn = db.dbLogin) {
  try {
    const connection = await conn();

    let query = "";
    let values = [];

    if (sql.includes("lesson_date")) {
      query = `
        SELECT * FROM lessons
        WHERE instructor_id = ? AND lesson_date = ?
      `;
      values = [instructor_id, lesson_date];
    } else {
      query = `
        SELECT lesson_date, age_group, COUNT(*) AS total_lessons
        FROM lessons
        WHERE instructor_id = ?
        GROUP BY lesson_date, age_group
        ORDER BY lesson_date ASC
      `;
      values = [instructor_id];
    }

    connection.query(query, values, (err, results) => {
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
INPUT: req, res, inputted date
*/

async function todaysStudents(params) {
  try {
    // await connection
    // sql of age group for lessons by date
    // if error
    // then throw error
    // return status and json of students
  } catch (error) {
    // status and json error message
  }
}

module.exports = {
  retrieveLessons,
  todaysStudents,
};
