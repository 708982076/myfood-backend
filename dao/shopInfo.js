const Base = require('./Base');
const {shopInfo} = require('../models');

class ShopInfo extends Base{
  constructor(model){
    super(model)
  }
}

module.exports = new ShopInfo(shopInfo);