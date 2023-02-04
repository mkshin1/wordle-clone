import { pool } from "../config/db.config.js";
import { sequelize } from "../models/index.js";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";

// control the logic of each route
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username.length < 6 || username.length > 25)
      res.json({ error: "username must be between 8 - 25 characaters" });
    // form data validation
    else {
      await valdiateUser(username, password);
      res.json({ login_status: "login success / unsuccessful message here" });
    }
  } catch (error) {
    console.log(error);
  }
};

const valdiateUser = async (username, password) => {
  // global variables
  const result = undefined;
  // check password
  const comparePassword = async (plaintextPassword, hashedPassword) => {
    return bcrypt.compare(plaintextPassword, hashedPassword).then((isMatch) => {
      if (!isMatch) {
        throw new Error("Password is incorrect");
      }
      return isMatch;
    });
  };
  // check username
  const user = await User.findOne({ where: { username } });
  try {
    if (!user) {
      throw new Error("User not found");
    }
  } catch (error) {
    console.log(error);
  }
  comparePassword(password, user.hashed_password)
    .then(() => {
      console.log(`User with username ${user.username} has logged in`);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
