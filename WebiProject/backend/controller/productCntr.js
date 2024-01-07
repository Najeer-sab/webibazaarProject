const product = require("../model/product");

//product
const createProduct = async (req, res) => {
  const { productid, productName, discription, price,imageURL } = req.fields;
  if (!(productid && productName && discription && price && imageURL)) {
    res.status(400).send("provide the all fields ");
  } else {
    const data = await product.create({
      productid: productid,
      productName: productName,
      discription: discription,
      price: price,
      imageURL: imageURL,

    });
    res.status(200).send("data is created for product");
  }
};

//get products

const getProduct = async (req, res) => {
  try {
    const products = await product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getbyid= async (req, res) => {
  try {
    const productbyid = await product.findById(req.params.id);
    res.json(productbyid);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

//updateProduct
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await product.findByIdAndUpdate(
      req.params.id,
      req.fields,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//deletedProduct
const deletedProduct = async (req, res) => {
  try {
    const deletedProduct = await product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};







module.exports = { createProduct, getProduct, updateProduct, deletedProduct,getbyid };
