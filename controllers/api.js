const db = require("../db");
const utilities = require('../utilities')

/* 
NAME: retrieveQuery
INPUT: req, res, sql
*/


async function retrieveQuery(req, res, sql) {
  try {
    const connection = await db.dbLogin();
    const inputs = req.body

    for(const dataName in inputs){
      utilities.validateInput(inputs[dataName],  dataName.toString())
    }

    const values = Object.values(inputs);

    const results = await db.handleQuery(sql, values);
    connection.end()
    return res.status(200).json({ lessons: results });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
}

module.exports = {
  retrieveQuery
};
