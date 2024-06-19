import mysql from "mysql";

export const connection = mysql.createConnection({
  host: process.env.host,
  port: process.env.port,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Connection established");
});

export default connection;
