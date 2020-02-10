const mongoose = require('mongoose');
const data = require('./shopInfo-write.json');

const Schema = mongoose.Schema;

const ShopInfoSchema = new Schema({
  activityList: Array,
  serTime: Array,
  shopAddress: String,
  shopName: String,
  shopPhone: Array,
  tip: String,
  id: Number
}, {versionKey: false})

const ShopInfo = mongoose.model('shopinfo', ShopInfoSchema);

ShopInfo.findOne(null, (err, res) => {
  if (!err && !res) ShopInfo.create(data)
})

module.exports = ShopInfo;