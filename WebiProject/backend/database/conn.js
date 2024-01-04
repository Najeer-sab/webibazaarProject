const mongoose=require("mongoose")
const uri=process.env.MONG_URI
 mongoose.connect(uri)
 .then(()=>console.log("connected"))
 .catch(()=>console.log("not connected"))

