let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Contact = require('../models/contactlist');

module.exports.displayContactList = (req, res, next) =>{
    Contact.find((err, ContactList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('contact/list', {title: 'Contact List', ContactList: ContactList});
        }
    }).collation({locale:'en',strength: 2}).sort({name:1});
}

module.exports.displayAddPage = (req, res, next)=>{
    res.render('contact/add', {title: 'Add Contact'})
}

module.exports.processAddPage = (req, res, next)=>{
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
}

module.exports.displayEditPage = (req, res, next)=>{
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
}

module.exports.processEditPage = (req, res, next)=>{
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
}

module.exports.performDelete = (req, res, next)=>{
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
}