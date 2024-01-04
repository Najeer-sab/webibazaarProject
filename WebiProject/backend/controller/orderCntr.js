const order = require("../model/order");



const createOrder=async (req, res) => {
  const newOrder = new order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
}




// updatedOrder
const updatedOrder = async (req, res) => {
  try {
    const updatedOrder = await order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};
//deleteorder

const deleteorder= async (req, res) => {
  try {
    await order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
}

//findUser
const findUser=async (req, res) => {
  try {
    const orders = await order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
}
//get all
const getsall= async(req, res)=>{
  try {
    const orders = await order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
}






module.exports = {createOrder,updatedOrder ,deleteorder,findUser,getsall};

