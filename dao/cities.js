const { cities } = require('../models')

class Cities {
  async getCitiesList(ctx) {
    const citiesJSON = await cities.findOne(null, '-_id');
    ctx.body = citiesJSON;
  }
}

module.exports = new Cities()