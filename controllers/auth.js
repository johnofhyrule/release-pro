const db = require('../models');
const bcrypt = require('bcryptjs');

// POST Signup Create
const signup = (request, response) => {
    console.log(request.body)
    // Validate Signup Form
    if (!request.body.firstname || !request.body.lastname || !request.body.email || !request.body.role) {
        return response.status(400).json({ message: 'All fields are required' });
    }
    // Check for existing user account
    db.User.findOne({ email: request.body.email}, (error, foundUser) => {
        console.log('1111111111')
        if (error) return response.status(400).json({ message: 'Bad request, please try again.'});
        // Return error if account already exists
        if (foundUser) return response.status(400).json({ message: 'Email has already been registered, please try again.' });
    });
    
    // Generate Hash Salt
    bcrypt.genSalt(10, (error, salt) => {
        console.log('2')
        if (error) return response.status(400).json({ message: 'Something went wrong, please try again.' });
        // Turn the plain text password into a complicated hash
        bcrypt.hash(request.body.password, salt, (error, hash) => {
            console.log('3')
            if (error) return response.status(400).json({ message: 'Something went wrong, please try again.'});

            // const { firstName, lastName, email, role } = request.body;

            const newUser = {
                firstName: request.body.firstname,
                lastName: request.body.lastname,
                email: request.body.email,
                role: request.body.role,
                password: hash,
            };
            console.log(newUser)

            db.User.create(newUser, (error, createdUser) => {
                console.log('4')
                if (error) {
                    console.log(error)
                    return response.status(400).json({ message: 'Bad request, please try again.' })
                };
                console.log(createdUser);
                response.status(201).json(createdUser);
            });
        });
    });
    
};

// Post Login - Create Session
const login = (request, response) => {
    if(!request.body.email || !request.body.password) {
        return response.status(400).json({
            status: 400,
            errors: [{ message: 'Please enter your email and password'}],
        });
    }
    db.User.findOne({ email: request.body.email }, (error, foundUser) => {
        if (error) return response.status(500).json({
            status: 500,
            errors: [{ message: 'Something went wrong, please try again.' }],
        });
        if (!foundUser) {
            return response.status(400).json({
                status: 400,
                errors: [{ message: 'Username or password is incorrect. Please try again.' }],
            });
        }

        bcrypt.compare(request.body.password, foundUser.password, (error, isMatch) => {
            if (error) return response.status(500).json({
                status: 500,
                errors: [{ messages: 'Something went wrong, please try again.' }],
            });
            if (isMatch) {
                console.log('14')
                request.session.loggedIn = true;
                request.session.currentUser = foundUser._id;
                console.log(request.session)
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

    response.status(401).json({ message: 'You are not Authenticated.' })
};

// DELETE deleteSession (Logout)
const logout = (request, response) => {
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
    login,
    verify,
    logout
}