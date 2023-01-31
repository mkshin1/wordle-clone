const { Pool, Client } = pg;
import express from "express";
import pg from "pg";

// make a new instance of Client to connect to PSQL DB from nodeJS
const client = new Client({
  connectionString: "postgres://michaelshin:1234@localhost:5432/wordle",

  database: "wordle",
});

client.connect();

// make a new instance of Pool to access the PSQL DB
const pool = new Pool({
  user: "michaelshin",
  host: "localhost",
  database: "wordle",
  password: "1234",
  port: 5432,
});

export { pool };
