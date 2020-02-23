const mongoose = require('mongoose');
const data = require('./cities-init.js')

const CitiesSchema = new mongoose.Schema({
  allCity: Object,
  hotCity: Array
}, {versionKey: false});

const Cities = mongoose.model('citie', CitiesSchema);

let hotCity = ["北京", '上海', '广州', '深圳', '武汉', '杭州', '成都'];
for (let i in data) {
  hotCity.push( ...data[i].filter( city => hotCity.includes(city.name) ) );
}

Cities.findOne(null, (err, res) => {
  if(!err && !res) new Cities({allCity: data, hotCity: hotCity.slice(7)}).save()
})


module.exports = Cities;