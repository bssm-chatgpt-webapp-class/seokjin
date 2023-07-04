const express = require("express");
const { getConnection } = require("../models/connector");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/env");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/signin", async (req, res) => {
  const { email, pw } = req.body;
  const bcryptedPw = await bcrypt.hash(pw, 10);
  const [results] = await getConnection().execute(
    `SELECT * FROM user WHERE email=? and pw=?`,
    [email, bcryptedPw]
  );

  if (results.length === 0) {
    return res.json("no user");
  }

  const token = jwt.sign({ id: results[0].id, pw: results[0].pw }, jwtSecret);
  res.json(token);
});

router.post("/signup", async (req, res) => {
  const { email, pw } = req.body;
  const bcryptedPw = await bcrypt.hash(pw, 10);
  await getConnection().execute(`INSERT INTO user(email, pw) VALUES(?,?)`, [
    email,
    bcryptedPw,
  ]);
  return res.json("success");
});

module.exports = router;
