const express = require("express");

const {
  allTransferOfUser,
  createUser,
  loginUser,
  getAllUsers,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/signup", createUser);

router.get("/", getAllUsers);

router.post("/login", loginUser);

router.get("/:id/history", allTransferOfUser);

module.exports = { usersRouter: router };
