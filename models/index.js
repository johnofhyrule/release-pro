const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/release-pro';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log('MongoDB successfully connected...'))
    .catch((error) => console.log(error));

module.exports = {
    User:require('./User'),
};