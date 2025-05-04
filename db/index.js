const mysql = require("mysql");
require("dotenv").config({ path: './config/.env' });

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


async function dbLogin(con = connection) {
  return new Promise((resolve, reject) => {
    con.connect((err) => {
      if (err) return reject(`DB connection failed: ${err.stack.toString()}`);
      return resolve("Connected to the database!");
    });
  });
}

async function handleQuery(sql, values, conn = connection) {
  return new Promise((resolve, reject) => {
    conn.query(sql, values, (err, results) => {
      if (err) {
        reject("Query error: " + err);
      }
      resolve(results);
    });
  });
}
async function closeConnection() {
  connection.destroy()
}

module.exports = {
  dbLogin,
  handleQuery,
  closeConnection
};
