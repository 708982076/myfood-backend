const glob = require('glob');

module.exports = function mountRoutes(App) {
  glob.sync(__dirname + '/*').forEach(path => {
    if (!path.includes('index.js')) {
      const router = require(path)
      App.use(router.routes())
    }
  })
};