const {store} = require('../models')
const Base = require('./Base');

class Store extends Base{
  constructor(model){
    super(model)
  }
  async searchKeyword(ctx) {
    const {k} = ctx.query;
    const key = decodeURIComponent(k)
    if (!k || /[^\u4e00-\u9fa5\w]+/.test(key)) {
      ctx.status = 404;
      return ;
    }
    ctx.body = await this.model.find({name: new RegExp(key, 'i')}, '-_id');
  }
}

module.exports = new Store(store)