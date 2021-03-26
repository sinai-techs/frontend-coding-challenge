const fs = require("fs");

const express = require("express");
const app = express();
const PORT = 4000;

function streamFile(res, filePath) {
  res.set({
    "Content-Type": "application/json",
    "Content-Encoding": "utf-8"
  });
  fs.createReadStream(filePath).pipe(res);
}

app.get("/electricity", (req, res) => {
  return streamFile(res, "./data/electricity_grids_usa.json");
});

app.get("/gasoline_mobile_combustion", (req, res) => {
  return streamFile(res, "./data/gasoline_mobile_combustion.json");
});

app.get("/foods", (req, res) => {
  return streamFile(res, "./data/foods.json");
});

app.get("*", (req, res) => res.status(404).send("NOT FOUND"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});