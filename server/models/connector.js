// get the client
const mysql = require("mysql2/promise");

let connection;
// create the connection to database
const connect = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: process.env.DATABASE_PASSWORD,
      database: "mytodo",
    });
  }
};

const getConnection = () => {
  return connection;
};

module.exports = { connect, getConnection };
