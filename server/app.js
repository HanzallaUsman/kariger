const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use(express.json()); // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data

app.get("/", (req, res) => {
  res.json({ message: "Root: Hello, world!" });
});

app.get("/message", (req, res) => {
  res.json({ message: "By Hanzalla Usman" });
});

const jobListingsRouter = require("./routes/newListing");
app.use("/newListing", jobListingsRouter);

// const listingsApiRouter = require("./routes/Listings");
// app.use("/Listings", listingsApiRouter);

module.exports = app;
