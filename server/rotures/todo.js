const express = require("express");
const router = express.Router();

let database = [{ id: 1, text: "할 일" }];
let currentId = 2;

router.get("/todo", (req, res) => {
  res.json(database);
});

router.post("/todo", (req, res) => {
  const data = req.body;
  database.push({ id: currentId++, text: data.text });
  return res.json("success");
});

router.delete("/todo/:id", (req, res) => {
  const id = Number(req.params.id);
  database = database.filter((data) => data.id !== id);
  return res.json(database);
});

router.put("/todo/:id", (req, res) => {
  const data = req.body;
  const id = Number(req.params.id);
  const updateIndex = database.findIndex((data) => data.id === id);
  database[updateIndex].text = data.text;
  return res.json(database);
});

module.exports = router;
