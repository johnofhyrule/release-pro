const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Current path = /api/v1/users
router.get('/:id', ctrl.users.show);
router.put('/:id', ctrl.users.edit);

module.exports = router;