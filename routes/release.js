const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Current path = /api/v1/release
// INDEX
router.get('/', ctrl.release.index);
// CREATE
router.post('/create', ctrl.release.create);
// SHOW
router.get('/', ctrl.release.show);
// UPDATE
router.put('/', ctrl.release.update);
// DELETE
router.delete('/', ctrl.release.destroy);

module.exports = router;