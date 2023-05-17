const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use(express.json()); // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data

// const sessions = {};

const { sessions } = require("./sessions");

app.get("/", (req, res) => {
  res.json({ message: "Root: Hello, world!" });
});

app.get("/message", (req, res) => {
  res.json({ message: "By Hanzalla Usman" });
});

const sessionRouter = require("./routes/login");
app.use("/login", sessionRouter);

// const loginRouter = require("./routes/login");
// app.use("/login", loginRouter);

const listingsRouter = require("./routes/listings");
app.use("/listings", listingsRouter);

// const listingsApiRouter = require("./routes/Listings");
// app.use("/Listings", listingsApiRouter);

module.exports = { sessions, app };
