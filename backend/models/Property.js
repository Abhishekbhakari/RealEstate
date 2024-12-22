const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Property title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Property description is required']
  },
  price: {
    type: Number,
    required: [true, 'Property price is required']
  },
  location: {
    type: String,
    required: [true, 'Location is required']
  },
  images: {
    type: [String], // Array of image URLs
    required: true
  },
  amenities: {
    type: [String] // List of amenities, like "Swimming Pool", "Gym", etc.
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  area: {
    type: Number, // Area in sq ft
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
