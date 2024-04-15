const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("api/products",productRoute)

app.get("/", (req, res) => {
  res.send("Hello from node api server");
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://kp064669:SKauMd9OasqJ12y1@node.sjvg0u8.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Node"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("connection error");
  });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
