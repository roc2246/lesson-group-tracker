import { describe, it } from "vitest";
import { retrieveLessons } from "./api";

/* 
retrieveLessons()
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

/* 
      todaysStudents()
      SELECT g.guest_id, g.name AS guest_name, g.level AS ability_level, g.birthdate AS guest_birthdate,
       p.age_group, i.name AS instructor_name, p.lesson_date
FROM PROGRAM p
JOIN GUESTS g ON p.guest_id = g.guest_id
JOIN INSTRUCTORS i ON p.instructor_id = i.instructor_id
WHERE p.age_group = ?  -- Replace '?' with the desired age group
AND p.lesson_date = ?  -- Replace '?' with the desired lesson date
ORDER BY g.level ASC;  -- Sort by ability level

      */

it("should be test", async () => {
  await retrieveLessons();
});
