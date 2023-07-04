const { getConnection } = require("../models/connector");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/env");

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const tokenResult = jwt.verify(token, jwtSecret);
    const [results] = await getConnection().execute(
      `SELECT * FROM user WHERE id=?`,
      [tokenResult.id]
    );
    if (results.length === 0) {
      return res.status(401).json("no auth");
    }

    req.user = results[0];

    // 사용자도 없고 토큰도 정상

    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json("invaild token");
  }
};

module.exports = { validateToken };
