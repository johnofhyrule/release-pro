// -------- EXTERNAL MODULES -------- //
const express = require('express');
const logger = require('./middlware/utils');
const bodyParser = require('body-parser');

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

// -------- API ROUTES

// -------- START SERVER -------- //
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));