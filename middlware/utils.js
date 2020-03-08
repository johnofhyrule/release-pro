const logger = (request, response, next) => {
    const url = request.url;
    const method = request.method;
    const requestedAt = new Date().toLocaleString();
    const result = `${method} ${url} {$requestedAt}`;
    console.log(result);
    next();
};

const notFound = (request, response) => {
    response
        .status(404)
        .send(`<h1>404</h1><h3>Page not found</h3>`);
};

const methodNotAllowed = (request, response) => {
    response.status(405).json({ message: 'Method Not Allowed' })
}

module.exports = {
    logger,
    notFound,
    methodNotAllowed
};