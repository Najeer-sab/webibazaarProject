const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true
 },
  firstName: { 
    type: String, 
    required: true
 },
  lastName: {
     type: String,
      required: true
     },
  email: { 
    type: String,
    required: true, 
 },
  phoneNumber: {
     type: Number,
      required: true 
    },
  password: {
     type: String,
      required: true
     },
 
  token: { type: String },
  resetPasswordToken:String,
  resetPasswordExpires:Date


});

module.exports = mongoose.model("register", registerSchema);
