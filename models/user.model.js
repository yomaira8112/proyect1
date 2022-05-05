const { DataTypes } = require("sequelize");
const { db } = require("../utils/util");

const User = db.define("user", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accountNumber: {
    type: DataTypes.INTEGER,
 allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "available",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = { User };
