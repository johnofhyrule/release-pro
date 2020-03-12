const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Current path = /api/v1/users
// SHOW
router.get('/', ctrl.users.show);
// UPDATE
router.put('/', ctrl.users.update);
// DELETE
router.post('/', ctrl.users.destroy);

module.exports = router;