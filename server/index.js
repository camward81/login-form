const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
require("dotenv").config();
const bcrypt = require("bcryptjs");
const saltRounds = 10;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: process.env.DB_PASS,
  database: "login",
});

app.post("/add", async (req, res) => {
  const username = req.body.username;
  const regpass = req.body.password;
  const password = await bcrypt.hash(regpass, saltRounds);
  db.query(
    "INSERT INTO user_login (username, password) VALUES (?, ?)",
    [username, password],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM user_login", (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});
