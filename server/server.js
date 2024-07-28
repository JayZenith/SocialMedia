const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

/*
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "mysqlDB"
  });


db.connect((err) => {
    if (err) throw err;
    console.log("mysql db Connected...");
    db.query("CREATE DATABASE IF NOT EXISTS mysqlDB", (err, result) => {
      if (err) throw new Error(err);
      console.log("Database created/exists");
      db.changeUser({ database: "mysqlDB" }, (err) => {
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

  */


app.listen(process.env.PORT || 3001, () => {
    console.log("listening server.js");
  });
  
  