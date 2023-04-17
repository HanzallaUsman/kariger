const express = require("express");
const router = express.Router();
const Listing = require("../models/listings");

// POST request to add a new listing to the database
router.post("/", async (req, res) => {
  console.log("Received Request");
  try {
    const newListing = new Listing({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
    });
    const savedListing = await newListing.save();
    res.json(savedListing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  console.log("Request Sent");
});

module.exports = router;
