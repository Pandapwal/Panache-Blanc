const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  model: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  picture: {
    data: Buffer,
    contentType: String
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

module.exports = itemSchema;
