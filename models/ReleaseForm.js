const mongoose = require('mongoose');

const releaseSchema = new Schema ({
    build: {
        type: String,
        required: [true, 'Build type required'],
    },
    os: {
        type: String,
        required: [true, 'OS required'],
    },
    version: {
        type: Number,
        required: [true, 'Version required'],
        trim: true,
    },
    releaseManager: {
        type: String,
        required: [true, 'Release Manager needs to be assigned'],
    },
    experiments: {
        type: String,
        minlength: [4, 'List experiments'],
        trim: true,
    },
    notes: {
        type: String,
        required: [true, 'Please enter notes for this release'],
        minlength: [2, 'Please enter notes for this release'],
        maxlength: [500, 'Character amount has been exceeded'],
        trim: true,
    },
    incidents: {
        type: String,
        minlength: [2, 'Please enter notes for this release'],
        maxlength: [500, 'Character amount has been exceeded'],
        trim: true,
    },
    postMortemNotes: {
        type: String,
        minlength: [2, 'Please enter notes for this release'],
        maxlength: [500, 'Character amount has been exceeded'],
        trim: true,
    }
})

const Release = mongoose.model('Release', releaseSchema);

module.exports = Release;