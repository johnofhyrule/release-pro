const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//  BASE URL IS localhost:4000/api/v1/users

// CREATE
router.post('/create', ctrl.users.create);

// SHOW -> id === user id
router.get('/:id', ctrl.users.show);

// UPDATE -> id === user id
// WILL RECEIVE JSON FOR UPDATE IN request.body
router.put('/:id', ctrl.users.update);

// DELETE -> id === user id
router.delete('/:id', ctrl.users.destroy);

module.exports = router;