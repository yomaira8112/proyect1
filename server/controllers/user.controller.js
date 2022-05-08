const { User } = require("../models/user.model");

const bcrypt = require("bcryptjs");

const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
const createUser = catchAsync(async (req, res) => {
  const { name, password } = req.body;
  const accountNumber = Math.floor(Math.random() * 999999);
  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    accountNumber,
    password: hashPassword,
  });

  newUser.password = undefined;

  res.status(201).json({
    newUser,
  });
});

const loginUser = async (req, res) => {
  try {
    const { accountNumber, password } = req.body;

    const user = await User.findOne({ where: { accountNumber, password } });

    res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const allTransferOfUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({
      users,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createUser, loginUser, allTransferOfUser, getAllUsers };
