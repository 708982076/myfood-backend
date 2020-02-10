const glob = require('glob');
const reg = /\/(\w+)\/\1\.js$/;

const models = {};
glob.sync(__dirname + '/**').forEach(path => {
  if (reg.test(path)) models[RegExp.$1] = require(path);
})

module.exports = models