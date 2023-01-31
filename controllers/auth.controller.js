import { User } from "../models/User.js";
import express, { response } from "express";
import { pool } from "./db.controller.js";
import jwt from "jsonwebtoken";
const app = express();

export const loginUser = async (req, res) => {
  try {
    const { user, pw } = req.body;
    // vadliate incoming data

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
        } else {
          // res.json({ login: "login is successful!" });
          res.redirect("/home");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// JWT
export const authJWT = {
  authenticate: (req, res, next) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    const secret = process.env.JWT_SECRET || "secret";

    try {
      const decoded = jwt.verify(token, secret);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ error: "Unauthorized" });
    }
  },
  signToken: (user) => {
    const secret = process.env.JWT_SECRET || "secret";
    const expiresIn = "1d";
    return jwt.sign({ id: user.id }, secret, { expiresIn });
  },
};
