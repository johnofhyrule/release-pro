const express = require('express');
const router = express.Router();
const path = require('path');

// Server Public Directory
router.use(express.static(path.join(__dirname, '../public')));

router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/signup', (request, response) => {
    response.sendFile(path.join(__dirname, '../views/signup.html'));
});

router.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, '../views/login.html'));
});

router.get('/logout', (request, response) => {
    response.sendFile(path.join(__dirname, '../views/logout.html'));
});

router.get('/release', (request, response) => {
    response.sendFile(path.join(__dirname, '../views/release.html'));
});

router.get('/addrelease', (request, response) => {
    response.sendFile(path.join(__dirname, '../views/addrelease.html'));
});

router.get('/editrelease', (request, response) => {
    response.sendFile(path.join(__dirname, '../views/editrelease.html'));
});

router.get('/editprofile', (request, response) => {
    response.sendFile(path.join(__dirname, '../views/editprofile.html'));
});

module.exports = router;