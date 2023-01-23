import express from "express";
import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
import path from "path";

const app = express();

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});

// const loadCss = express.static(__dirname + "/build/style.css");
// app.use("/", loadCss);

// const loadJS = express.static(__dirname + "/build/script.mjs");
// app.use("/", loadJS);

const absolutePath = __dirname + "/build/index.html";
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.use(
  express.static(path.join(__dirname, "/build/style.css"), {
    setHeaders: (res) => {
      res.set("Content-Type", "text/css");
    },
  })
);

const loadStyles = express.static(__dirname + "/build/style.css");
const loadWords = express.static(__dirname + "build/words.mjs");
const loadScript = express.static(__dirname + "build/script.mjs");
const loadData = express.static(__dirname + "/database/index.mjs");

app.use("/", loadScript);
app.use("/", loadStyles);
app.use("/", loadWords);
app.use("/", loadData);

app.get("/build/script.mjs", (req, res) => {
  res.set("Content-Type", "application/javascript");
  res.sendFile(path.join(__dirname, "/build/script.mjs"));
});

app.get("/build/style.css", (req, res) => {
  res.set("Content-Type", "text/css");
  res.sendFile(path.join(__dirname, "/build/style.css"));
});

app.get("/build/words.mjs", (req, res) => {
  res.set("Content-Type", "application/javascript");
  res.sendFile(path.join(__dirname, "/build/words.mjs"));
});

app.get("/database/index.mjs", (req, res) => {
  res.set("Content-Type", "application/javascript");
  res.sendFile(path.join(__dirname, "/database/index.mjs"));
});
