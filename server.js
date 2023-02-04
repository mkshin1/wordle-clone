import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as userRoutes from "./routes/users.routes.js";
dotenv.config();

const app = express();

// serve static files using express.static() middlewhere
app.use(express.static("/Users/michaelshin/Applications/wordle/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", userRoutes.router);

app.use((req, res, next) => {
  res.status(400).json({
    message: "No such route exists :(",
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: "Error Message",
  });
});

app.listen(`${process.env.PORT}`, () => {
  console.log(`app is listening on ${process.env.PORT}`);
});
