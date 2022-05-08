const { Transfer } = require("../models/transfer.model");
const { User, accountNumber } = require("../models/user.model");

const getAnAmount = async (req, res) => {
  try {
    const tranfers = await Transfer.findAll({
      where: { status: "exists" },
      include: [{ model: User }],
    });
    res.status(200).json({
      tranfers,
    });
  } catch (error) {
    console.log(error);
  }
};

const transferences = async (req, res) => {
  try {
    const { amount, senderUserId, reseiverUserId } = req.body;

    const transfer = await Transfer.create({
      amount,
      senderUserId,
      reseiverUserId,
    });

    const addition = User.amount + User.amount;
    const sustraction = User.amount - User.amount;

    res.status(201).json({ transfer });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAnAmount, transferences };
