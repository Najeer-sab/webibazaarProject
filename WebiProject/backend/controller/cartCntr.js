 const cart = require("../model/cart");




const createCart=async (req, res) => {
    const newCart = new cart(req.body);
  
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  }

// updatedCart
const updatedCart = async (req, res) => {
    try {
      const updatedCart = await cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  };
//   deleteCart
  
  const deleteCart= async (req, res) => {
    try {
      await cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
//   //findCart
  const findCart=async (req, res) => {
    try {
      const carts = await cart.find({ userId: req.params.userId });
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
//   //getAllCart
  const getAllCart= async(req, res)=>{
    try {
      const orders = await cart.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }



module.exports = {createCart,updatedCart,deleteCart,findCart,getAllCart}