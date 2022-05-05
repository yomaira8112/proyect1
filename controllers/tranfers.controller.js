

const {Transfer}=require('../models/transfer.model')

const getAnAmount = async (req, res) => {
    try {
      const {name, accountNumber ,password, amount} = req.body; 
      
      const newTransfer = await Transfer.create({ name, accountNumber,password,amount}); 
     
  
     
  res.status(201).json({
        newUser });
    } catch (error) {
      console.log(error);
    }
  };

  module.exports={getAnAmount}