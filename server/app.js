const express = require('express');



const app=express()

const {usersRouter}=require('./routes/user.router')

const {TransferRouter}=require('./routes/transfer.routes')

app.use(express.json())
app.use('/api/v1/trasfers',TransferRouter)

app.use("/api/v1/users",usersRouter)




module.exports={app}



