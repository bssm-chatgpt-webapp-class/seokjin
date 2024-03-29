const express = require("express");
const { getConnection } = require("../models/connector");
const router = express.Router();
const { validateToken } = require("../middlewares/auth");
const { hasAuth } = require("../middlewares/todo");

router.get("/", async (req, res) => {
  const [results] = await getConnection().execute(`SELECT * FROM todo`);
  res.json(results);
});

router.post("/", validateToken, async (req, res) => {
  const data = req.body;

  await getConnection().execute(
    `INSERT INTO todo(todo, completed, user_id) VALUES(?, ?, ?)`,
    [data.todo, false, req.user.id]
  );
  return res.json("success");
});

router.put("/:id", validateToken, hasAuth, async (req, res) => {
  const data = req.body;
  const id = Number(req.params.id);

  await getConnection().execute(
    `UPDATE todo SET todo=?, completed=? WHERE id=?`,
    [data.todo, data.completed, id]
  );
  return res.json("success");
});

router.delete("/:id", validateToken, hasAuth, async (req, res) => {
  const id = Number(req.params.id);

  await getConnection().execute(`DELETE FROM todo WHERE id=?`, [id]);
  return res.json("success");
});

module.exports = router;
