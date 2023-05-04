"use strict"

const router = require("express").Router();
const DevicesController = require('../../controller/devices-controller');

const ALL_DEVICES_ROUTE = "/allDevices";
const NEW_DEVICE_ROUTE = "/addDevice";

router.get(ALL_DEVICES_ROUTE, DevicesController.showAll);
router.post(NEW_DEVICE_ROUTE, DevicesController.newDevice);

module.exports = router; 
