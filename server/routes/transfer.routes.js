const express = require("express");

const {
  getAnAmount,
  transferences,
} = require("../controllers/tranfers.controller");

const router = express.Router();

router.get("/", getAnAmount);
router.post("/", transferences);

module.exports = { TransferRouter: router };
