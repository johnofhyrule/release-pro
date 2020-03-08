// -------- EXTERNAL MODULES -------- //
const express = require('express');
const bodyParser = require('body-parser');
// Require Database
const db = require('./models');

// -------- INTERNAL MODULES -------- //
const routes = require('./routes');
const utils = require('./middleware/utils');
const formatter = require('./middleware/formatter');

// -------- INSTANCE MODULES -------- //
const app = express();

// -------- VARIABLES -------- //
const PORT = process.env.PORT || 4000;

// -------- MIDDLEWARE -------- //
// Logger Middleware
app.use(utils.logger);

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Formaatter Middleware
app.use(formatter); 

// -------- ROUTES -------- //
// -------- VIEW ROUTES
app.get('/', (request, response) => {
    response.send('<h1>Profile</h1>');
});

// -------- API ROUTES
// USER ROUTE
app.use('/api/v1/user', routes.user);

// RELEASE ROUTE
app.use('/api/v1/release', routes.release)

// -------- 404 ROUTE
app.use('/*', utils.notFound);

// -------- 405 ROUTE
app.use('/api/v1/*', utils.methodNotAllowed);

// -------- START SERVER -------- //
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));