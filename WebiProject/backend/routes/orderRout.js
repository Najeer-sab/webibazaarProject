const express = require("express")
const router = express.Router();
const formidable = require("express-formidable");
const { createOrder,updatedOrder,deleteorder,findUser ,getsall}=require("../controller/orderCntr")

router.post("/createOrder",createOrder)
router.put("/updatedOrder/:id",updatedOrder)
router.delete("/deleteorder/:id",deleteorder)
router.get("/findUser/:userId",findUser)
 router.get("/getsall",getsall)

module.exports=router;
