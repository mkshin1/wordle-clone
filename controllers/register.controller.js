import { User } from "../models/User.js";
import express from "express";
import { pool } from "./db.controller.js";

const registerUser = async (req, res) => {
  try {
    const { user, pw } = req.body;
    pool.query(
      "INSERT INTO users(username, hashed_password) VALUES($1, $2)",
      [user, pw],
      (err, result) => {
        if (err) {
          res.json({ status: err.message });
        } else {
          res.json({ status: "registered user success!" });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default registerUser;
