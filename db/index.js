const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myfood',  { 
  useNewUrlParser: true, useUnifiedTopology: true
 })

var conn = mongoose.connection;


require('../models')

conn.on('connected', (suc) => {
  console.log('连接成功', suc)
});
conn.on('disconnected', (dis) => {
  console.log('断开连接', dis)
});
conn.on('error', (err) => {
  console.log('连接失败', err)
});
