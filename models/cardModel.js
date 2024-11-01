const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  videourl: {
    type: String,
    required: true // Optional
  },
  price: {
    type: String, // Could be a string because the price has '$'
    required: true
  },
  coverImg: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  locationImg: {
    type: String,
    required: false
  },
  openSpots: {
    type: Number,
    default: null
  },
  likes: {
    type: Number,
    required: true,
    default: 0
  },
  websiteurl: {
    type: String,
    required: false
  },
  youtube: {
    type: String,
    required: false
  },
  facebook: {
    type: String,
    required: false
  },
  instagram: {
    type: String,
    required: false
  },
  twitter: {
    type: String,
    required: false
  },
  spotify: {
    type: String,
    required: false
  },
  deezer: {
    type: String,
    required: false
  },
  apple: {
    type: String,
    required: false
  },
  soundcloud: {
    type: String,
    required: false
  },
  tidal: {
    type: String,
    required: false
  },
  wiki: {
    type: String,
    required: false
  },
  ticketmaster: {
    type: String,
    required: false
  },
  tiktok: {
    type: String,
    required: false
  },
  viewCount: { type: Number, default: 0 },
}, { timestamps: true });

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;

