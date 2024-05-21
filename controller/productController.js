const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.json(200, product); // Send status code and product data
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(200, product); // Send status code and product data
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
};

const postProducts = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(200, product); // Send status code and product data
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(200, updatedProduct); // Send status code and updated product data
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getProducts,
  getProduct,
  postProducts,
  deleteProducts,
  updateProducts,
};
