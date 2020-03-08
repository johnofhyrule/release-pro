const db = require('../models');

const test = (request, response) => {
    response.json({ message: 'Test' });
};

const index = (request, response) => {
    db.Release.find({}, (error, allReleases) => {
        if (error) return response.error(500, 'Something went wrong. Try again.');
        response.success(200, allReleases);
    });
};

const create = (request, response) => {
    db.Release.create(request.body, (error, createdRelease) => {
        if (error) {
            // ALWAYS RETURN TO EXIT
            return response
                .status(500)
                .json({ message: 'Something went wrong. Try again.' });
        }
        response.success(201, createdRelease);
    });
};

const show = (request, response) => {
    db.Release.findById(request.params.id, (error, foundRelease) => {
        if (error) {
            // ALWAYS RETURN TO EXIT
            return response
                .status(500)
                .json({ message: 'Something went wrong. Try again.', error: error });
        }
        response.success(200, foundRelease);
    });
};

const update = (request, response) => {
    db.Release.findByIdAndUpdate(
        request.params.id,
        request.body,
        { new: true },
        (error, updatedRelease) => {
            if (error) {
                // ALWAYS RETURN TO EXIT
                return response
                    .status(500)
                    .json({ message: 'Something went wrong. Try again.', error: error });
            }
            response.success(200, updatedRelease);
        }
    );
};

const destroy = (request, response) => {
    db.Release.findByIdAndDelete(request.params.id, (error, deletedRelease) => {
        if (error) {
            // ALWAYS RETURN TO EXIT
            return response
                .status(500)
                .json({ message: 'Something went wrong. Try again.', error: error });
        }
        response.success(200, deletedRelease);
    });
};

module.exports = {
    test,
    index,
    create,
    show,
    update,
    destroy
};