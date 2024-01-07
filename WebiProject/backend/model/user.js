const mongoose = require("mongoose");

module.exports = mongoose.model("User", {
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  email: String,
  password: String,
  otp: Number,
 
});
