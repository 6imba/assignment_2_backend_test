const mongoose = require('mongoose')

// connect or create new database.
mongoose.connect('mongodb://localhost:27017/UserDataBase')
    .then(()=> console.log("Node connected to mongoDB(UserDataBase)."))
    .catch((err)=> console.log("Database Connection Error: ",err))
