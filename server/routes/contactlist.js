let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to schema
let Contact = require('../models/contactlist.js');

/* get route for contact list - read operation */
router.get('/', (req, res, next) => {
    Contact.find((err, ContactList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('contact/list', {title: 'Contact List', ContactList: ContactList});
        }
    });
});

// Get Route for Add page - CREATE Operation
router.get('/add', (req, res, next)=>{
    res.render('contact/add', {title: 'Add Contact'})
})
// Post Route for Add page - CREATE Operation
router.post('/add', (req, res, next)=>{
    let newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    })

    Contact.create(newContact, (err, Contact) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/contact-list');
        }
    })
})
// Get Route for Edit page - UPDATE Operation
router.get('/edit/:id', (req, res, next)=>{
    let id = req.params.id;

    Contact.findById(id, (err, currentContact) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            // show edit
            res.render('contact/edit', {title: 'Edit Contact', contact: currentContact})
        }
    })
})
// Post Route for Edit page - UPDATE Operation
router.post('/edit/:id', (req, res, next)=>{
    let id = req.params.id
    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    })

    Contact.updateOne({_id: id}, updatedContact, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            // refresh list
            res.redirect('/contact-list');
        }
    })
})
// Get to perform deletion 
router.get('/delete/:id', (req, res, next)=>{
    let id = req.params.id;

    Contact.remove({_id: id}, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/contact-list');
        }
    })
})

module.exports = router;