const express = require("express");
const router = require("./rotures");
const { connect } = require("./models/connector");
const app = express();
require("dotenv").config();

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(8080);
