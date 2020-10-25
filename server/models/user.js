let mongoose = require('mongoose');

// model class
let userlistModel = mongoose.Schema({
    username: String,
    email: String,
    password: String,
},
{
    collection: "users"
});

module.exports = mongoose.model('User', userlistModel);