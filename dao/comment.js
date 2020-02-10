const Base = require('./Base');
const {comment} = require('../models');

class Comment extends Base{
  constructor(model) {
    super(model);
  }
}

module.exports = new Comment(comment);