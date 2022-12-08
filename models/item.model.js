// Description: This file contains the schema for the item model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//! Sample Data
// const food_items = [
//     { "name": "Burger", "description": "A delicious burger", "price": 5.99 },
//     { "name": "Pizza", "description": "A delicious pizza", "price": 7.99 },
//     { "name": "Hot Dog", "description": "A delicious hot dog", "price": 3.99 },
//     { "name": "Fries", "description": "A delicious fries", "price": 2.99 },
//     { "name": "Salad", "description": "A delicious salad", "price": 4.99 },
//     { "name": "Sushi", "description": "A delicious sushi", "price": 6.99 },
//     { "name": "Taco", "description": "A delicious taco", "price": 3.99 },
//     { "name": "Burrito", "description": "A delicious burrito", "price": 4.99 },
//     { "name": "Sandwich", "description": "A delicious sandwich", "price": 5.99 },
//     { "name": "Ice Cream", "description": "A delicious ice cream", "price": 2.99 },
// ]

// Create Schema
const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
}, {
  timestamps: true,
  _id: true,
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;