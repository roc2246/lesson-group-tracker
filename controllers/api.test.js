import { describe, it } from "vitest";
import { retrieveLessons } from "./api";

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


it("should be test", async()=>{
    await retrieveLessons()
})