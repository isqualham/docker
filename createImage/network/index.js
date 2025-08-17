const mongoose = require("mongoose");

//db e o nome do container m que esta o banco de dados
mongoose.connect("mongodb://db:27017/test",{})
.then(() => console.log("Connected to MongoDB"))
.catch((err)=> console.log(err));