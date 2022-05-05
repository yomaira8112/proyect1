const express = require('express');

const {db}=require('./utils/util')

const app=express()

const {usersRouter}=require('./routes/user.router')

const {TransferRouter}=require('./routes/transfer.routes')

app.use(express.json())
app.use('/api/v1/trasfers',TransferRouter)

app.use("/api/v1/users",usersRouter)



// User.hasMany(Transfer, {
//   foreignKey: "userId",
//   sourceKey: "id",
// });
// Transfer.belongsTo(User, {
//   foreignKey: "userId",
//   targetId: "id",
// });




db.authenticate()

  .then(() => console.log("db is ready"))

  .catch((err) => console.log("db not found", err));

db.sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));




const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {

  console.log('hi');
  
});
