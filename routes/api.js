const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Current path = /api/v1
router.post('/signup', ctrl.release.signup);
router.post('/login', ctrl.release.createSession);
router.get('/verify', ctrl.release.verify);
router.delete('/logout', ctrl.release.deleteSession);

module.exports = router;