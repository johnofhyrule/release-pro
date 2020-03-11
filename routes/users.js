const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Current path = /api/v1/users
// SHOW
router.get('/:id', ctrl.users.show);
// UPDATE
router.put('/:id', ctrl.users.update);
// DELETE
router.post('/:id', ctrl.users.destroy);

module.exports = router;