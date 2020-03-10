const db = require('../models');

// Create Release
const create = (request, response) => {
    const newRelease = request.body;
    newRelease.userId = request.session.currentUser.id;
    db.Release.create(newRelease, (error, savedRelease) => {
        if (error) return response.status(500).json({
            status: 500,
            message: error,
        });
        response.status(200).json({
            status: 200,
            data: savedRelease,
        });
    });
};

// Show Release
const show = (request, response) => {
    db.Release.findById(request.params.id, (error, foundRelease) => {
        if (error) return response.status(500).json({
            status: 500,
            message:error,
        });
        response.status(200).json({
            status: 200,
            data: foundRelease,
        });
    });
};

// Update Release
const update = (request, response) => {
    db.Release.findByIdAndUpdate(request.params.id, request.body, { new: true }, (error, updatedRelease) => {
        if (error) return response.status(500).json({
            status: 500,
            message: error,
        });
        response.status(200).json({
            status: 200,
            data: updatedRelease,
        });
    });
};

// Delete Release
const destroy = (request, response) => {
    db.Release.findByIdAndDelete(request.params.id, (error, deletedRelease) => {
        if (error) return response.status(500).json({
            status: 500,
            message: error,
        });
        response.status(200).json({
            status: 200,
            data: deletedRelease,
        });
    });
};

module.exports = {
    create,
    show,
    update,
    destroy
};