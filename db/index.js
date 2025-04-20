const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

function dbLogin(con = connection) {
  return new Promise((resolve, reject) => {
    con.connect((err) => {
      if (err) return reject(`DB connection failed: ${err.stack.toString()}`);
      return resolve("Connected to the database!");
    });
  });
}

module.exports = {
  dbLogin,
};
