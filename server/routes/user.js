let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let User = require('../models/user.js');

/* get route for contact list - read operation */
router.get('/', (req, res, next) => {
    User.find((err, UserList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('user/login', {title: 'Login', UserList: UserList});
        }
    });
});

module.exports = router;