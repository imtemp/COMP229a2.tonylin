/*
File: user.js
Name: Tony Lin
Student ID: 301071193
Date: October 21
*/
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

// model class
let User = mongoose.Schema({
    username:
    {
        type: String,
        default: "",
        trim: true,
        required: 'username is required'
    },
    password:
    {
        type: String,
        default: '',
        trim: true,
        required: 'password is required'
    },
    email:
    {
        type: String,
        default: "",
        trim: true,
        required: 'email address is required'
    },
    displayName:
    {
        type: String,
        default: "",
        trim: true,
        required: 'display name is required'
    }
},
{
    collection: "users"
});

//configure user model

let options = ({missingPasswordError: "Wrong Password"});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);