const mongoose = require('mongoose');
const data = require('./cities-init.js')

const CitiesSchema = new mongoose.Schema({
  allCity: Object
}, {versionKey: false});

const Cities = mongoose.model('citie', CitiesSchema);

Cities.findOne(null, (err, res) => {
  if(!err && !res) new Cities({allCity: data}).save()
})

module.exports = Cities;