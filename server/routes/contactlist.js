/*
File: contactlist.js
Name: Tony Lin
Student ID: 301071193
Date: October 21
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// connect to schema
let Contact = require('../models/contactlist.js');

let userController = require('../controllers/user');
/*
function requireAuth(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}
*/
/* get route for contact list - read operation */
router.get('/', userController.displayContactList);

// Get Route for Add page - CREATE Operation
router.get('/add', userController.displayAddPage);

// Post Route for Add page - CREATE Operation
router.post('/add', userController.processAddPage);

// Get Route for Edit page - UPDATE Operation
router.get('/edit/:id', userController.displayEditPage);

// Post Route for Edit page - UPDATE Operation
router.post('/edit/:id', userController.processEditPage);

// Get to perform deletion 
router.get('/delete/:id', userController.performDelete);

module.exports = router;