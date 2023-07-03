const express = require("express");
const app = express();

let database = [{ id: 1, text: "할 일" }];
let currentId = 2;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/todo", (req, res) => {
  res.json(database);
});

app.post("/todo", (req, res) => {
  const data = req.body;
  database.push({ id: currentId++, text: data.text });
  return res.json("success");
});

app.delete("/todo/:id", (req, res) => {
  const id = Number(req.params.id);
  database = database.filter((data) => data.id !== id);
  return res.json(database);
});

app.put("/todo/:id", (req, res) => {
  const data = req.body;
  const id = Number(req.params.id);
  const updateIndex = database.findIndex((data) => data.id === id);
  database[updateIndex].text = data.text;
  return res.json(database);
});

app.listen(8080);
