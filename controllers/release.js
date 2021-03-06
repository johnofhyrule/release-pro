const db = require('../models');

//Index Release
const index = (request, response) => {
    db.Release.find(request.query, (error, foundRelease) => {
        if (error) return response.status(500).json({
            status:500,
            message: error,
        });
        response.status(200).json({
            status: 200,
            data: foundRelease,
        });
    });
};

// Create Release
const create = (request, response) => {
    const newRelease = request.body;
    newRelease.version = Number(newRelease.version)
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
    index,
    create,
    show,
    update,
    destroy
};