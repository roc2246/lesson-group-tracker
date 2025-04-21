const router = require('express')
const controllers = require('../controllers/api.js')

// FOR ROUTERS INVOLVING LESSON RETREIVAL
/* 
    query = `
        SELECT * FROM lessons
        WHERE instructor_id = ${instructorID} AND lesson_date = ?
      `;
    query = `
        SELECT lesson_date, age_group, COUNT(*) AS total_lessons
        FROM lessons
        WHERE instructor_id = ${instructorID}
        GROUP BY lesson_date, age_group
        ORDER BY lesson_date ASC
      `;
    */

// Retreive all lessons, organize by day, and get just lessons by age group
// Retreive lesson for just one day and get just lessons by age group
// Retrieve age group for one day and sort students by ability level


