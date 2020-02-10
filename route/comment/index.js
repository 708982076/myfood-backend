const router = require('koa-router')();
const comment = require('../../dao/comment');
router.get('/storecomment', comment.getList.bind(comment));

module.exports = router;