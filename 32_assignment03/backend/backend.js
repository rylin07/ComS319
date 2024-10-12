/*
  Author: Ryan Lin
  Email : rlin1@iastate.edu
  Date : April 26th, 2024
*/

var express = require("express");
var cors = require("cors");
var ObjectId = require("mongodb").ObjectId;
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.json());

app.use(express.static("public"));
app.use("/images", express.static("images"));

const port = "8081";
const host = "localhost";

app.listen(port, () => {
  console.log("App listenting at http://%s:%s\n", host, port);
});

const { MongoClient } = require("mongodb");
const { parse } = require("path");
const url = "mongodb://127.0.0.1:27017";
const dbName = "reactdata";
const client = new MongoClient(url);
const db = client.db(dbName);

// Add Product
app.post("/add_product", async (req, res) => {
    try {
      await client.connect();
      console.log("Request: /add_product");
  
      const newProduct = req.body;
      const query = {
        id: Number(newProduct.id),
        title: newProduct.title,
        price: Number(newProduct.price),
        description: newProduct.description,
        category: newProduct.category,
        image: newProduct.image,
        rating: {
          rate: Number(newProduct.rating.rate),
          count: Number(newProduct.rating.count),
        },
      };
      const result = await db.collection("fakestore_catalog").insertOne(query);
      if (result.acknowledged) {
        res.status(201).send(result);
      } else {
        throw new Error('Insert operation failed.');
      }
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).send({ message: "Failed to add product" });
    }
  });

// List Products
app.get("/fakestore_catalog", async (req, res) => {
  await client.connect();
  console.log("Request: /fakestore_catalog");

  const query = {};
  const results = await db
    .collection("fakestore_catalog")
    .find(query)
    .toArray();
  console.log("ALL Items: ", results);

  res.status(200);
  res.send(results);
});

app.get("/fakestore_catalog/:id", async (req, res) => {
    const numericId = parseInt(req.params.id);
    try {
      const product = await db.collection("fakestore_catalog").findOne({ id: numericId });
      if (!product) {
        return res.status(404).send({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
  
// Update Product Price
app.put("/change_product/:id", async (req, res) => {
    const numericId = parseInt(req.params.id);
    const newPrice = parseFloat(req.body.price);

    console.log("Received update request for product with ID:", numericId);
    console.log("Received new price:", newPrice);

    if (!newPrice) {
      return res.status(400).send({ message: "Invalid price provided" });
    }

    const update = {
      $set: { price: newPrice }
    };

    try {
      const result = await db
        .collection("fakestore_catalog")
        .updateOne({ id: numericId }, update);
      if (result.matchedCount === 0) {
        res.status(404).send({ message: "Product not found" });
      } else {
        console.log("Product price updated successfully:", result);
        res.status(200).send({ message: "Product price updated successfully", result });
      }
    } catch (error) {
      console.error("Failed to update product price:", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
});

// Delete Product
app.delete("/delete_product/:id", async (req, res) => {
    const numericId = parseInt(req.params.id);

  const query = { id: numericId };

  try {
    const result = await db.collection("fakestore_catalog").deleteOne(query);
    if (result.deletedCount === 0) {
      res.status(404).send({ message: "Product not found" });
    } else {
      res.status(200).send({ message: "Product deleted successfully" });
    }
  } catch (error) {
    console.error("Failed to delete product:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
