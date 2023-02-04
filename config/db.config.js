const { Pool, Client } = pg;
import pg from "pg";
import * as dotenv from "dotenv";

dotenv.config();

// make a new instance of Client to connect to PSQL DB from nodeJS
const client = new Client({
  connectionString: process.env.CONNECTION,
  database: process.env.DB_DATABASE,
});
client.connect();

// make a new instance of Pool to access the PSQL DB
export const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
});
