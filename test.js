// getting-started.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/tutorial");

try {
  console.log("connection success");
} catch (error) {
  handleError(error);
}

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  status: String,
  datePost: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

// find data //

Product.find()
  .then((err) => {
    console.log(err);
  })
  .catch((data) => {
    console.log(data);
  });

// create data //

// Product.create({
//   name: "Ventela",
//   description: "Ini adalah sepatu ventela",
//   price: 400000,
//   status: "available",
// })
//   .then((result) => {
//     console.log("Product saved " + result);
//     console.log("Product succefully created");
//   })
//   .catch((error) => {
//     console.log("Product error created " + error);
//   });

// findOne data //

// Product.findOne({ name: "Converse" })
//   .then((err) => {
//     console.log(err);
//   })
//   .catch((data) => {
//     console.log(data);
//   });

// delete data //

// Product.findById("65502d92307bc751583ae4fe")
//   .deleteOne()
//   .then((err) => {
//     console.log(err);
//   })
//   .catch(console.log("Product success deleted"));

// edit data //

// Product.updateOne({ _id: "65502f2fee5ac52adc79c7bf" }, { price: 500000 })
//   .then((err) => {
//     console.log(err);
//   })
//   .catch((data) => {
//     console.log("product updated to " + data);
//   });
