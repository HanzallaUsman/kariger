const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB database!");
  app.locals.db = db;
  app.listen(8000, () => {
    console.log("Server is listening on port 8000");
  });
});
