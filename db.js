// import { createPool } from "mysql2/promise";
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "project",
  port: 3307, // Specify your custom port here
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});
// const pool = createPool({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "project",
//   port: 3307,
// });
// const connect = async () => {
//   return await pool.getConnection();
// };

// export default connect;
// // Function to execute queries

module.exports = connection;
/////////////////
