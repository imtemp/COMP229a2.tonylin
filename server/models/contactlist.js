let mongoose = require('mongoose');

// model class
let contactlistModel = mongoose.Schema({
    name: String,
    number: String,
    email: String,
},
{
    collection: "business_contact"
});

module.exports = mongoose.model('Contact', contactlistModel);