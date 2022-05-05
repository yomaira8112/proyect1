


const { User } = require('../models/user.model');
const{validationResult}=require('express-validator');

//const {accountNumber}=require('express-validator')

const createUser = async (req, res) => {
  try {
    const {name, password, amount} = req.body; 
    let accountNumber =Math.floor(Math.random()*999999)
    const newUser = await User.create({ name, accountNumber,password,amount}); 
   

   
res.status(201).json({
      newUser });
  } catch (error) {
    console.log(error);
  }
};

const loginUser=async(req,res)=>{
    try {
        const {name, password, amount} = req.body; 
        
        const user  = await User.create({ name,password,amount}); 
       
    
       
    res.status(201).json({
       user,    });
    }catch (error) {
        console.log(error);
     }
    };

module.exports = {
  
  createUser,
  loginUser
  
};
