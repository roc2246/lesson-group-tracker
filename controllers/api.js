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
