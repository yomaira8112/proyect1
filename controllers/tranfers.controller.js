

const {Transfer}=require('../models/transfer.model')


const getAnAmount = async (req, res) => {
    try {
      const {id} =req.params; 
      
      const newTransfer = await Transfer.findAll({ where:{ senderUserid:id}}); 
     
  
     
      res.status(201).json({
        newTransfer });
    } catch (error) {
      console.log(error);
    }
};

  module.exports={getAnAmount}