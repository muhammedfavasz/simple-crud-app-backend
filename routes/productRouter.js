const express = require("express");
const Product = require("../models/productModel");
const { getProducts, getProduct, postProducts, deleteProducts, updateProducts } = require("../controller/productController.js");

const router = express.Router();

router.get("/", getProducts)
router.get("/:id", getProduct)
router.post("/", postProducts)
router.delete("/:id" , deleteProducts)
router.put("/:id" , updateProducts)


module.exports = router ;