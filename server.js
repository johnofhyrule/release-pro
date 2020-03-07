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

// -------- START SERVER -------- //
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));