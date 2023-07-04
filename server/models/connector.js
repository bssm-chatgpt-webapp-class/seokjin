// get the client
const mysql = require("mysql2/promise");
const { dbPw } = require("../config/env");

let connection;
// create the connection to database
const connect = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: dbPw,
      database: "mytodo",
    });
  }
};

const getConnection = () => {
  return connection;
};

module.exports = { connect, getConnection };
