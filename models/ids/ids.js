const mongoose = require('mongoose');

const IdsSchema = new mongoose.Schema({
  id: Number
}, {
  versionKey: false
});

const Ids = mongoose.model('ids', IdsSchema);

Ids.findOne(null, (err, res) => {
  if (!err && !res) {
    Ids.create({id: 0})
  }
})

module.exports = Ids;