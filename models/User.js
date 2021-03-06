const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required'],
        minlength: [2, 'Your first name must be longer than 2 characters'],
        maxlength: [40, 'Your fist name can not exceed 40 characters'],
        trim: true,
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required'],
        minlength: [2, 'Your last name must be longer than 2 characters'],
        maxlength: [40, 'Your last name must not exceed 40 characters'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: [true, 'Email has already been registered'],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [4, 'Password must be at least 4 characters'],
    },
    role: {
        type: String,
        required: [true, 'Please select a role'],
    },
    slack: {
        type: String,
    },
    teams: {
        type: String,
    },
    projects: {
        type: String,
    },
    signupDate: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;