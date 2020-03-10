console.log('Router is working');

module.exports = {
    user: require('./userRoutes'),
    release: require('./releaseRoutes'),
    views: require('./viewRoutes'),
    api: require('./api'),
};