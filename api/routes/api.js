"use strict"

const router = require("express").Router();

var apiDevices = require("./api/devices-router")
router.use("/devices", apiDevices);

module.exports = router;