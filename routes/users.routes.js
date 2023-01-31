import express from "express";
const router = express.Router();
import * as userController from "../controllers/users.controller.js";
import * as authController from "../controllers/auth.controller.js";
import registerUser from "../controllers/register.controller.js";

// user query routes
router.get("/", userController.getAllUsers);
router.get("/:user", userController.getOneUser);
router.get("/create/user", userController.createUser);

// user login
router.post("/login/user", authController.loginUser);

// user register
router.post("/register/user", registerUser);

// JWT
router.get(
  "/api/protected",
  authController.authJWT.authenticate,
  (req, res) => {
    res.json({ message: "protected route" });
  }
);

// export { getAllUserRoute, getOneUserRoute, createUserRoute, loginUserRoute };

export default router;
