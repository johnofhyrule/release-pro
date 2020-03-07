const logger = (request, response, next) => {
    const url = request.url;
    const method = request.method;
    const requestedAt = new Date().toLocaleString();
    const result = `${method} ${url} {$requestedAt}`;
    console.log(result);
    next();
};

module.exports = logger;