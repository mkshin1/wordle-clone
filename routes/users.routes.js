// import controller for each route
import express from "express";
import { User as user } from "../models/User.js";
import * as login from "../controllers/login.controller.js";
import * as register from "../controllers/register.controller.js";
import { pool } from "../config/db.config.js";

const router = express.Router();

router.post("/login", login.login);
router.post("/signup", register.register);
export { router };
