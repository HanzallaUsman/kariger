const express = require("express");
const router = express.Router();
const Listing = require("../models/listings");

// POST request to add a new listing to the database
router.post("/new", async (req, res) => {
  console.log("Received Request: ", req.body);
  try {
    const newListing = new Listing({
      id: req.body.title,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.imageUrl.url,
      createdDate: new Date(),
      featured: req.body.featured,
      company: req.body.company,
      type: req.body.type,
      name: req.body.name,
    });
    const savedListing = await newListing.save();
    res.json(savedListing);
    console.log(savedListing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  console.log("Request Sent");
});

// router.get("/api", async (req, res) => {
//   try {
//     const listings = await Listing.find().select("-_id");
//     res.json(listings);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

router.get("/api", async (req, res) => {
  try {
    const id = req.query.id;
    if (id) {
      const product = await Listing.findOne({ id: id }).select("-_id");
      if (!product) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.json(product);
      }
    } else {
      const listings = await Listing.find().select("-_id");
      res.json(listings);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
