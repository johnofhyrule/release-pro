const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

//  BASE URL IS localhost:3000/api/v1/release

// INDEX
router.get('/', controllers.release.index);

// CREATE
router.post('/', controllers.release.create);

// SHOW
router.get('/:id', controllers.release.show);

// UPDATE
router.put('/:id', controllers.release.update);

// DELETE
router.delete('/:id', controllers.release.destroy);

module.exports = router;