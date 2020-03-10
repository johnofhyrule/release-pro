console.log('Router is working');

module.exports = {
    user: require('./userRoutes'),
    release: require('./releaseRoutes'),
    api: require('./api'),
};