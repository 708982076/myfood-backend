const router = require('koa-router')();
const store = require('../../dao/store');

router.get('/store', store.getList.bind(store));
router.get('/storekeyword', store.searchKeyword.bind(store));

module.exports = router;