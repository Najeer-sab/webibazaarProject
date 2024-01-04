const express = require("express")
const router = express.Router();
 const verifyToken =require("../middleware/authentication ")
const formidable = require("express-formidable");
const { createReg, loginPage,forgetpassword,resetpassword,resetGetpassword } = require("../controller/registerCntr");


router.post("/register",formidable(),createReg)
router.post("/login",formidable(),loginPage)
router.get("/profile",verifyToken,function(req,res){
  res.send("welcome")
})


router.post("/forgetpassword",formidable(),forgetpassword)
router.post("/resetpassword/:token",formidable(),resetpassword)
router.get("/resetGetpassword/:token",formidable(),resetGetpassword)



module.exports=router;


