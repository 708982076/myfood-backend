const router = require('koa-router')();
const cityApi = require('../../dao/cities');

router.get('/city', cityApi.getCitiesList);

module.exports = router;