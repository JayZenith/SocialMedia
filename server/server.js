const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();


const path = require("path")
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client");

const app = express();
app.use(express.static(buildPath));


app.use(cors());

// Middleware 
app.use(express.json()); //parse json bodies in request object

app.get("/", function(req,res){
  res.sendFile(
    path.join(__dirname, "../index.html"),
    function(err){
      if(err){
        res.status(500).send(err);
      }
    }
  )
})


const db = mysql.createConnection({
  host: "jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "nr5vrexgaqfa2z27",
  password: "xaj3exhubgjgx8pd",
  //database: "o0s6d1ivv6fv4y00"
});



/*
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});
*/


db.connect((err) => {
    if (err) throw err;
    console.log("mysql db Connected...");
    db.query("CREATE DATABASE IF NOT EXISTS o0s6d1ivv6fv4y00", (err, result) => {
      if (err) throw new Error(err);
      console.log("Database created/exists");
      db.changeUser({ database: "o0s6d1ivv6fv4y00" }, (err) => {
        if (err) throw new Error(err);
        createTable();
        createUsersTable();
        createCommentTable();
      });
    });
  });

  function createTable() {
    db.query(
      `CREATE TABLE IF NOT EXISTS posts (
          id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
          postID INT,
          userID INT, 
          title VARCHAR(30),
          postText VARCHAR(100),
          username VARCHAR(30)
      )`,
      (err) => {
        if (err) throw new Error(err);
        console.log("Post Table created/exists");
      }
    );
  }
  
  function createCommentTable() {
    db.query(
      `CREATE TABLE IF NOT EXISTS comments (
          id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
          commentID INT,
          postID INT,
          username VARCHAR(30),
          commentBody VARCHAR(100)
      )`,
      (err) => {
        if (err) throw new Error(err);
        console.log("Comment Table created/exists");
      }
    );
  }
  
  function createUsersTable() {
    db.query(
      `CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
          username VARCHAR(30),
          password VARCHAR(255),
          email VARCHAR(30)
      )`,
      (err) => {
        if (err) throw new Error(err);
        console.log("Users Table created/exists");
      }
    );
  }


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`listening server.js on PORT ${PORT}`);
  });
  
  