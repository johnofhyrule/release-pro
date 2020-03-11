// -------- EXTERNAL MODULES -------- //
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
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

// Session
app.use(session({
    store: new MongoStore({
        url: process.env.MONGODB_URI || 'mongodb://localhost:27017/release-app'
    }),
    secret: 'kaTe9-j24np-232Of92-kjRwr2-nvIr8-ruda1-sei-uyQ3-javUnpAo34-h2Nud4t3',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // this cookie will last one week
    }
}))

// -------- ROUTES -------- //
// -------- VIEW ROUTES
app.use('/', routes.views);

// -------- HTML ROUTES
app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/users', routes.users);
app.use('/api/v1/release', routes.release);

// -------- 404 ROUTE
app.use('/*', utils.notFound);

// -------- 405 ROUTE
app.use('/api/v1/*', utils.methodNotAllowed);

// -------- START SERVER -------- //
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));