import { User } from "../models/User.js";
import express from "express";
import { pool } from "./db.controller.js";

const app = express();

// grab all users from the db
export const getAllUsers = async (req, res) => {
  try {
    const result = [];
    // query users from db
    const users = await User.findAll();
    users.forEach((user) => {
      result.push(user.dataValues.username);
    });
    res.send({ allUsers: result });
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = async (req, res) => {
  try {
    const { user, id } = req.params;
    // sql statement to query the user
    // select username from users where username=username
    // render the username
    const result = await pool.query(
      `select username from users where username=$1`,
      [user]
    );
    res.send({ username: result.rows[0].username });
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, res) => {
  try {
    console.log("do something here");
    res.send({ status: 200 });
  } catch (error) {
    console.log(error);
  }
};

// controller module "job" is to render the correct html page
// also to handle data coming from forms and other html elements from the client
