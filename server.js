// -------- EXTERNAL MODULES -------- //
const express = require('express');
const logger = require('./middlware/utils');
const bodyParser = require('body-parser');
// Require Database
const db = require('./models');

// -------- INTERNAL MODULES -------- //

// -------- INSTANCE MODULES -------- //
const app = express();

// -------- VARIABLES -------- //
const PORT = process.env.PORT || 4000;

// -------- MIDDLEWARE -------- //
// Logger Middleware
app.use(logger);

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// -------- ROUTES -------- //
// -------- VIEW ROUTES
app.get('/', (request, response) => {
    response.send('<h1>Profile</h1>');
});

// -------- API ROUTES
app.post('/api/v1/signup', (request, response) => {
    db.User.create(request.body, (error, createdUser) => {
        if (error) return response.status(400).json({ message: 'Bad request, please try again.'})
    });
});

app.get('/api/v1', (request, response) => {
    const doc = {
        message: 'Welcome to the Release Pro API',
        endpoints: [
            {
                method: 'GET',
                path: '/api/v1',
                description: 'Describes all available endpoints'
            }
        ]
    };
    response.json(doc);
})

// -------- 404 ROUTE
app.get('/*', (request, response) => {
    response
        .status(404)
        .send(`<h1>404</h1><h3>Page not found</h3>`);
});

// -------- START SERVER -------- //
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));