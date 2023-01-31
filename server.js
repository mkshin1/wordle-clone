import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.routes.js";
import homeRoutes from "./routes/home.routes.js";

const app = express();
const PORT = 3000;

app.listen(`${PORT}`, () => {
  console.log(`app is listening on ${PORT}`);
});

// __dirname not supported in ES modules

// serve static files using express.static() middlewhere
app.use(express.static("/Users/michaelshin/Applications/wordle/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware to access api endpoints for users
app.use("/users", userRoutes);

app.use("/home", homeRoutes);

// app.use("/users", userRoutes.getOneUserRoute);
// app.use("/users", userRoutes.createUserRoute);
// app.use("/users", userRoutes.loginUserRoute);

app.get("/home", (req, res) => {
  res.json({ status: "this is the home page" });
});
