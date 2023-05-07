const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  type: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  mobilenumber: { type: String, required: true },
  lastname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: Number, required: true },
  // location: { type: String, required: true },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
