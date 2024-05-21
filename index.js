const express = require("express");
const { default: mongoose } = require("mongoose");
const Product = require("./models/productModel");
const app = express();
const productRouter = require("./routes/productRouter.js")

app.use(express.json()); //this will allow to sent json data from body


app.use("/api/products", productRouter)


app.get("/", function (req, res) {
  res.send("Hello Worlddsds");
});




app.listen(3000, () => {
  console.log("server is running on port 3000");
});

mongoose
  .connect("mongodb+srv://favasDb:favas@backenddb.xckuhkn.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(() => {
    console.log("connection failed");
  });
