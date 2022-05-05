const express = require("express");

const {db}=require('./utils/util')

const app=express()

const {usersRouter}=require('./routes/user.router')
const {transferRoutes}=require('./routes/transfer.routes')

app.use("/api/v1/trasfers",transferRoutes)
app.use("/api/v1/users",usersRouter)
app.use(express.json())
db.authenticate()
  .then(() => console.log("db is ready"))
  .catch((err) => console.log("db not found", err));

db.sync({ force: true})
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));




const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {

  console.log('hi');
  
});
