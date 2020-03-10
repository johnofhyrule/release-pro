const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//  BASE URL IS localhost:4000/api/v1/user

// CREATE
router.post('/', ctrl.user.create);

// SHOW -> id === user id
router.get('/:id', ctrl.user.show);

// UPDATE -> id === user id
// WILL RECEIVE JSON FOR UPDATE IN request.body
router.put('/:id', ctrl.user.update);

// DELETE -> id === user id
router.delete('/:id', ctrl.user.destroy);

module.exports = router;