const mongoose = require('mongoose');
const data = require('./store-write.json');

const storeSchema = new mongoose.Schema({
  food_menu: Object,
  name: String,
  description: String,
  deliveryTime: Number,
  score: Number,
  serviceScore: Number,
  foodScore: Number,
  rankRate: Number,
  minPrice: Number,
  deliveryPrice: Number,
  ratingCount: Number,
  distance: String,
  sellCount: Number,
  bulletin: String,
  supports: Array,
  avatar: String,
  id: Number
}, {versionKey: false})

const Store = mongoose.model('store', storeSchema);

Store.findOne(null, (err, res) => {
  if (!err && !res) Store.create(data)
})

module.exports = Store;