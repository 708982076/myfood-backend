module.exports = class Base {
  constructor(model) {
    this.model = model;
  }
  async getList(ctx) {
    const id = ctx.query.id;
    const model = this.model;
    if (id) {
      try {
        const JSONData = await model.findOne({id}, "-_id", {id: false})
        if (JSONData) {
          ctx.body = JSONData
        }else {
          ctx.status = 404;
        }
      }catch {
        ctx.status = 404;
      }
    }else {
      ctx.body = await model.find({}, '-_id')
    }
  }
}