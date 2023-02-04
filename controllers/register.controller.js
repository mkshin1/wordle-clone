// import { pool } from "../config/db.config.js";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";

const { saltRounds } = bcrypt;

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const loginValue = await isUserNameAvailable(username);
    if (!loginValue) {
      // create the user
      await createUser(username, password);
      res.json({ status: "user has been created!" });
    } else {
      res.json({ user: "already exists in db! " });
    }
  } catch (error) {
    console.log(error);
  }
};

const isUserNameAvailable = async (username) => {
  try {
    return await User.findOne({ where: { username } });
  } catch (error) {
    console.log(error);
  }
  h;
};

const createUser = async (username, password, saltRounds = 10) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await User.create({
    username: username,
    hashed_password: hashedPassword,
  });
};
