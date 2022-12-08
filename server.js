// Description: This file is the entry point to our application. It creates an Express server and connects to our MongoDB database.
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000; // port number is set to 5000 if there isn't a preconfigured port

