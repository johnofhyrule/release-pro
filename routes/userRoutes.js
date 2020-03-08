const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

//  BASE URL IS localhost:3000/api/v1/user

// INDEX
router.get('/', controllers.user.index);

// CREATE
router.post('/', controllers.user.create);

// SHOW -> id === user id
router.get('/:id', controllers.user.show);

// UPDATE -> id === user id
// WILL RECEIVE JSON FOR UPDATE IN request.body
router.put('/:id', controllers.user.update);

// DELETE -> id === user id
router.delete('/:id', controllers.user.destroy);

module.exports = router;