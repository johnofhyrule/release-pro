const db = require('../models');

const test = (request, response) => {
    response.json({ message: 'Test' });
};

const index = (request, response) => {
    db.User.find({}, (error, allUsers) => {
        if (error) return response.error(500, 'Something went wrong. Try again.');
        response.success(200, allUsers);
    });
};

const create = (request, response) => {
    db.User.create(request.body, (error, createdUser) => {
        if (error) {
            // ALWAYS RETURN TO EXIT
            return response
                .status(500)
                .json({ message: 'Something went wrong. Try again.', error: error });
        }
        response.success(201, createdUser);
    });
};

const show = (request, response) => {
    db.User.findById(request.params.id, (error, foundUser) => {
        if (error) {
            // ALWAYS RETURN TO EXIT
            return response
                .status(500)
                .json({ message: 'Something went wrong. Try again.', error: error });
        }
        response.success(200, foundUser);
    });
};

const update = (request, response) => {
    db.User.findByIdAndUpdate(
        request.params.id,
        request.body,
        { new: true },
        (error, updatedUser) => {
            if (error) {
                // ALWAYS RETURN TO EXIT
                return response
                    .status(500)
                    .json({ message: 'Something went wrong. Try again.', error: error });
            }
            response.success(200, updatedUser);
        }
    );
};

const destroy = (request, response) => {
    db.User.findByIdAndDelete(request.params.id, (error, deletedUser) => {
        if (error) {
            // ALWAYS RETURN TO EXIT
            return response
                .status(500)
                .json({ message: 'Something went wrong. Try again', error: error });
        }
        response.success(200, deletedUser);
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