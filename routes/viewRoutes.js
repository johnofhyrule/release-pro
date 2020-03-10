const express = require('express');
const router = express.Router();

// STARTS AT localthost:4000/

// PUBLIC FOLDER SERVE
router.get('/', (request, response) => {
    response.send(`<h1>Release Pro API</h1>`);
});

// GET Signup Template
router.get('/signup', (request, response) => {
    response.sendFile('/views/signup.html', {
        root:  `${__dirname}/../`
    });
});

// Get Login Template
router.get('/login', (request, response) => {
    response.sendFile('/views/login.html', {
        root: `${__dirname}/../`
    });
});

// Get Profile Template
router.get('/profile', (reqeust, response) => {
    if (!request.session.currentUser) {
        response.redirect('/login');
    }

    response.sendFile('/views/profile.html', {
        root: `${__dirname}/../`
    });
});

module.exports = router;