// const { Client, Pool } = require("pg");
// // const client = new Client();
// const { WORDS } = require("./words.mjs");
import { WORDS } from "./words.mjs";
// import { Client, Pool } from "pg";
import pg from "../pg";
const { Pool, Client } = pg;

// const connectDB = async () => {
//   await client.connect();

//   const res = await client.query("SELECT $1::text as message", [
//     "Hello world!",
//   ]);
//   console.log(res.rows[0].message); // Hello world!
//   await client.end();
// };

// connectDB();

const client = new Client({
  connectionString: "postgres://michaelshin:1234@localhost:5432/wordle",

  database: "wordle",
});

client.connect();

export const pool = new Pool({
  host: "localhost",
  user: "michaelshin",
  port: 5432,
  database: "wordle",
  password: 1234,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const insertData = async () => {
  const query = "INSERT INTO words(word) VALUES ($1)";
  const values = [];
  //   await client.query(query, values);

  for (let i = 0; i < WORDS.length; i++) {
    let currWord = WORDS[i];
    values.push(currWord);
    await client.query(query, values);
    values.shift();
  }
};
insertData();
console.log(client.database, "***");

pool.query("SELECT * FROM words", (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows);
  }
});
