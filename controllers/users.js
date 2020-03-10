const db = require('../models');

const show = (request, response) => {
    if (!request.session.currentUser) return response.status(401).json({
        status: 401,
        message: 'Something went wrong, please try again.'
    })

    db.User.findById(request.session.currentUser.id, (error, foundUser) => {
        if (error) return response.status(500).json({
            status: 500,
            message: 'Something went wrong, please try again.'
        });

        response.status(200).json({
            status: 200,
            data: foundUser,
        });
    });
};

const update = (request, response) => {
    if (!request.session.currentUser) return response.status(401).json({
        status: 401,
        message: 'Something went wrong, please try again.'
    });

    db.User.findByIdAndUpdate(
        reqeust.session.currentUser.id,
        request.body,
        { new: true },
        (error, foundUser) => {
            if (error) return response.status(500).json({
                status: 500,
                message: error,
            });
            response.status(200).json({
                status:200,
                data: foundUser,
            });
        }
    );
};

const destroy = (request, response) => {
    if (!request.session.currentUser) return response.status(401).json({
        status: 401,
        message: 'Something went wrong, please try again.'
    });

    db.User.findByIdAndDelete(request.session.currentUser, (error, deletedUser) => {
        if (error) return response.status(500).json({
            status: 500,
            message: 'Something went wrong, please try again.'
        })

        response.status(200).json({
            status: 200,
            data: deletedUser,
        });
    });
};

module.exports = {
    show,
    update,
    destroy,
};