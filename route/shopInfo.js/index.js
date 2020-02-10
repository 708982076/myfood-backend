const router = require('koa-router')();
const shopInfo = require('../../dao/shopInfo');

router.get('/shopinfo', shopInfo.getList.bind(shopInfo))

module.exports = router