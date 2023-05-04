const express = require("express");
const router = require("./routes/api");

const api = express();
api.use(router);

module.exports = api;