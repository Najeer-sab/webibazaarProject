const express = require("express")
const router = express.Router();
const formidable = require("express-formidable")
const {createCart,updatedCart,deleteCart,findCart,getAllCart} = require("../controller/cartCntr")




router.post("/createCart",createCart)
router.put("/updatedCart/:id",updatedCart)
router.delete("/deleteCart/:id",deleteCart)
router.get("/findCart/:userId",findCart)
router.get("/getAllCart/",getAllCart)












module.exports=router;
