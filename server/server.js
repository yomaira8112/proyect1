const {db}=require('./utils/util')
const {app}=require('./app');
const { User } = require('./models/user.model');
const { Transfer } = require('./models/transfer.model');
db.authenticate()

  .then(() => console.log("db is ready"))

  .catch((err) => console.log("db not found", err));


  User.hasMany(Transfer, {
    foreignKey: "senderUserId",
    sourceKey: "id",
  });
  Transfer.belongsTo(User, {
    foreignKey: "senderUserId",
    targetId: "id",
  });

  // User.hasMany(Transfer,
  // {foreignKey:"senderUserId"})
  //  Transfer.belongsTo(User)


db.sync({force:false})
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));




const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {

  console.log('hi');
  
});
