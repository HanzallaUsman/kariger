const express = require("express");
const router = express.Router();
const Listing = require("../models/listings");

// POST request to add a new listing to the database
router.post("/", async (req, res) => {
  console.log("Received Request: ", req.body);
  try {
    const newListing = new Listing({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      imageUrl: req.body.imageUrl.url,
      createdDate: new Date(),
    });
    const savedListing = await newListing.save();
    res.json(savedListing);
    console.log(savedListing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  console.log("Request Sent");
});

// router.get("/", async (req, res) => {
//   try {
//     const listings = await Listing.find();
//     res.json(listings);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

module.exports = router;
