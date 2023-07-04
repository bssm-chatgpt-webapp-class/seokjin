const express = require("express");
const { getConnection } = require("../models/connector");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/signin", async (req, res) => {
  const { email, pw } = req.body;
  const [results] = await getConnection().execute(
    `SELECT * FROM user WHERE email=? and pw=?`,
    [email, pw]
  );

  if (results.length === 0) {
    return res.json("no user");
  }

  const token = jwt.sign(
    { id: results[0].id, pw: results[0].pw },
    process.env.JWT_SECRET
  );
  res.json(token);
});

router.post("/signup", async (req, res) => {
  const { email, pw } = req.body;
  await getConnection().execute(`INSERT INTO user(email, pw) VALUES(?,?)`, [
    email,
    pw,
  ]);
  return res.json("success");
});

module.exports = router;
