const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  // type: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }, //or budget is listing type is job
  createdDate: { type: Date, default: Date.now },
  category: { type: String, required: true },
  imageUrl: {
    type: String,
  },
  // location: { type: String, required: true },
  // status: { type: String },
  // authorId: { type: ObjectId, required: true },
  // dateEnd: { type: Date, required: true },
  // requirements: { type: String, required: true },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
