const express = require('express');
const router = express.Router();
const path = require('path');

// STARTS AT localthost:4000/

// PUBLIC FOLDER SERVE
router.use(express.static(path.join(__dirname, '../public')));

router.get('/', (request, response) => {
    response.send(`<h1>Release Pro API</h1>`);
});

router.get('/documentation', (request, response) => {
    response.sendFile(path.join(__dirname, '../views/documentation'));
});

module.exports = router;