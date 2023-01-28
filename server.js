import express from "express";
import path from "path";
import pg from "pg";
import bodyParser from "body-parser";
import { Server } from "http";
const { Pool, Client } = pg;

const app = express();
const PORT = 3000;

app.listen(`${PORT}`, () => {
  console.log(`app is listening on ${PORT}`);
});

// __dirname not supported in ES modules

// serve static files using express.static() middlewhere
app.use(express.static("/Users/michaelshin/Applications/wordle/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/users", (req, res) => {
  res.send({ status: 200 });
});

const client = new Client({
  connectionString: "postgres://michaelshin:1234@localhost:5432/wordle",

  database: "wordle",
});

client.connect();

const pool = new pg.Pool({
  user: "michaelshin",
  host: "localhost",
  database: "wordle",
  password: "1234",
  port: 5432,
});

app.get("/users", (req, res) => {
  pool.query("SELECT * FROM users", (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result.rows);
  });
});

app.post("/register", (req, res) => {
  const { user, pw } = req.body;
  pool.query(
    `insert into users(username, hashed_password) values('${user}','${pw}')`,
    (err, result) => {
      if (err) {
        console.log(err.error);
        return res.status(500).json({ error: err });
      }
      res.json({ status: "ADD USER" });
    }
  );
});

// set up route and handler for login.js

app.post("/login", (req, res) => {
  const { user, pw } = req.body;
  // check user credentials
  pool.query(
    // `select * from users where username='${user}'AND password='${pw}'`,
    `select case when exists(select * from users where username='${user}' 
    and hashed_password='${pw}')then cast(1 as bit) else cast(0 as bit) end;
    `,
    (err, result) => {
      if (err) {
        console.log(err.error);
        return res.status(500).json({ error: err });
      }
      if (result.rows[0].case == 0) {
        res.json({ login: "unsuccessful!" });
      } else res.json({ login: "successful!" });
    }
  );
});
