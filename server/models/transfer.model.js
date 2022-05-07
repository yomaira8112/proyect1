const { DataTypes } = require("sequelize");
const { db } = require("../utils/util");

const Transfer = db.define("transfer", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
    
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  senderUserId: {
    type: DataTypes.INTEGER,
   allowNull:false,
  },
  reseiverUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
  
});

module.exports = { Transfer };
