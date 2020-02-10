const mongoose = require('mongoose');
const data = require('./comments-write.json');

const commentSchema = new mongoose.Schema({
  labels: Array,
  id: Number,
  comments: Array
}, {versionKey: false});

const Comment = mongoose.model('comment', commentSchema)

Comment.findOne(null, (err, res) => {
  if (!err && !res) Comment.create(data)
})

module.exports = Comment;