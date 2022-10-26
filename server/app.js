const express = require("express");
const app = express();
const port = 3000;

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todolist",
});
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});

connection.connect();
connection.query("SELECT * FROM todolist", (err, data) => {
  if (err) throw err;
  console.log(data);
});
// connection.query('insert into todolist (task) values ("test3");');
// connection.query("delete from todolist");
connection.end();
