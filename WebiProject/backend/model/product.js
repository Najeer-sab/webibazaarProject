const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productid: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  
  discription: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
    
  },
  imageURL:{

    type: String,
  }
});
module.exports=mongoose.model("product",productSchema)