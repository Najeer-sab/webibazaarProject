const express = require("express")
const router = express.Router();
const formidable = require("express-formidable")
 const {createCatogary,updateCatogary,deleteCatogary,getCatogary,getAllCatogary}=require("../controller/categoryCntr")


 router.post("/createCatogary",createCatogary);
 router.put("/updateCatogary/:id",updateCatogary);
 router.delete("/deleteCatogary/:id",deleteCatogary);
 router.get("/getCatogary/:id",getCatogary);
 router.get("/getAllCatogary",getAllCatogary);








 module.exports=router;
