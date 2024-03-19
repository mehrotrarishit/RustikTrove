const mongoose = require("mongoose");

const DB=process.env.DATABASE;
mongoose.set('stricQuery',false)
mongoose.connect(DB).then(()=>console.log("database connected")).catch((error)=>console.log("error"+error.message));