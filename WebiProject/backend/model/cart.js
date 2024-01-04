const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
  userId: { type: String, required: true },
  products: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  
},
{ timestamps: true },
);

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;