const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//  BASE URL IS localhost:3000/api/v1/release

// INDEX
router.get('/', ctrl.release.index);

// CREATE
router.post('/create', ctrl.release.create);

// SHOW
router.get('/:id', ctrl.release.show);

// UPDATE
router.put('/:id', ctrl.release.update);

// DELETE
router.delete('/:id', ctrl.release.destroy);

module.exports = router;