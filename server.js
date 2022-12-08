// Description: This file is the entry point to our application. It creates an Express server and connects to our MongoDB database.
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000; // port number is set to 5000 if there isn't a preconfigured port

require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; // uri is the path to our MongoDB database
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const items = require("./routes/items"); // require the items.js file from the routes folder
app.use("/items", items); // use the items.js file for any routes that start with /items

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
