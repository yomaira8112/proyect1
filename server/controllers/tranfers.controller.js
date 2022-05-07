const{User}=require('../models/user.model')

const {Transfer}=require('../models/transfer.model');
const { usersRouter } = require('../routes/user.router');


// const getAnAmount = async (req, res) => {
//     try {
    
//       const {id} =req.body; 
      
//       const newTransfer = await Transfer.findAll({ where:{ senderUserid:id}}); 
      
//       if (newTransfer === null) {
//         console.log('Not found!');
  
//       }
     
//       res.status(201).json({
//         newTransfer });
//     } catch (error) {
//       console.log(error);
//     }
// };



const transferences = async (req,res)=>{
  
   
  try { 
    
    
    const {reseiverUserId, senderUserId,amount} = req.body;

    const user = await User.findOne({where: {reseiverUserId:id, senderUserId,amount }} );
    
   


    res.status(201).json({
      
        });
          } catch (error) {
         console.log(error);

  }
}

  module.exports={getAnAmount,transferences}