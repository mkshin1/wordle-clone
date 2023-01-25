import express from "express";
import path from "path";
const app = express();
const PORT = 3000;

app.listen(`${PORT}`, () => {
  console.log(`app is listening on ${PORT}`);
});

// __dirname not supported in ES modules

// serve static files using express.static() middlewhere
app.use(express.static("/Users/michaelshin/Applications/wordle/public"));
