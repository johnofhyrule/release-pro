const db = require('../models');
const bcrypt = require('bcryptjs');

// POST Signup Create
const signup = (request, response) => {
    // Validate Signup Form
    if (!request.body.firstName || !request.body.lastName || !request.body.email || !request.body.role) {
        return response.status(400).json({ message: 'All fields are required' });
    }
    // Check for existing user account
    db.User.findOne({ email: request.body.email}, (error, foundUser) => {
        if (error) return response.status(400).json({ message: 'Bad request, please try again.'});
        // Return error if account already exists
        if (foundUser) return response.status(400).json({ message: 'Email has already been registered, please try again.' });

        // Generate Hash Salt
        bcrypt.genSalt(10, (error, salt) => {
            if (error) return response.status(400).json({ message: 'Something went wrong, please try again.' });
            // Turn the plain text password into a complicated hash
            bcrypt.hash(request.body.password, salt, (error, hash) => {
                if (error) return response.status(400).json({ message: 'Something went wrong, please try again.'});

                const { firstName, lastName, email, role } = request.body;

                const newUser = {
                    firstName,
                    lastName,
                    email,
                    password: hash,
                };

                db.User.create(newUser, (error, createdUser) => {
                    if (error) return response.status(400).json({ message: 'Bad request, please try again.' });

                    response.status(201).json(createdUser);
                });
            });
        });
    });
};

// Post Login - Create Session
const createSession = (request, response) => {
    if(!request.body.email || !request.body.password) {
        return response.status(400).json({
            status: 400,
            errors: [{ message: 'Please enter your email and password'}],
        });
    }
    db.User.findOne({ email: request.body.email }, (error, foundUser) => {
        if (error) return response.status(500).json({
            status: 500,
            errors: [{ message: 'Something went wrong. Please try again.' }],
        });
        if (!foundUser) {
            return response.status(400).json({
                status: 400,
                errors: [{ message: 'Username or password is incorrect. Please try again.' }],
            });
        }
        bcrypt.compare(reqeust.body.password, foundUser.password, (error, isMatch) => {
            if (error) return response.status(500).json({
                status: 500,
                errors: [{ messages: 'Something went wrong. Please try again.' }],
            });
            if (isMatch) {
                request.session.loggeIn = true;
                reqeust.session.currentUser = foundUser._id;
                return response.status(200).json({
                    status: 200,
                    data: { id: foundUser._id },
                });
            } else {
                return response.json({
                    status: 400,
                    errors: [{ message: 'Username or password is incorrect. Please try again.' }],
                });
            }
        });
    });
};

const verify = (request, response) => {
    if (request.session.currentUser) {
        return response.json({ message: 'Authorized', userId:
        request.session.currentUser})
    }

    response.status(401).json({ message: 'You aren not Authenticated.' })
};

// DELETE deleteSession (Logout)
const deleteSession = (request, response) => {
    if (!request.session.currentUser) {
        return response.status(401).json({ message: 'Unauthorized, please login and try again.' });
    }

    request.session.destroy((error) => {
        if (error) return response.status(400).json(error);

        response.json({ status: 200 });
    });
};

module.exports = {
    signup,
    createSession,
    verify,
    deleteSession,
}