const express = require('express');
const router = express.Router();
const ObjId = require('mongoose').Types.ObjectId;
const { Contact } = require('../models/contact');


router.get('/', (req, res) => {
    Contact.find((err, doc) => {
        if (err) {
            console.log('error dude error');
        } else {
            res.send(doc);
        }
    })
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    if (ObjId.isValid(id)) {
        Contact.findById(id, (err, doc) => {
            if (err) {
                console.log('error dude error');
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send();
    }

});

router.post('/', (req, res) => {
    let contact = new Contact();
    contact.FirstName = req.body.FirstName;
    contact.LastName = req.body.LastName;
    contact.Address = req.body.Address;
    contact.City = req.body.City;
    contact.Country = req.body.Country;
    contact.PostalCode = req.body.PostalCode;
    contact.About = req.body.About;
    contact.PhoneNumbers = req.body.PhoneNumbers;
    contact.Emails = req.body.Emails;

    contact.save((err, doc) => {
        if (err) {
            console.log(err);
        } else {
            if (!!contact.PhoneNumbers && !!contact.PhoneNumbers.length) {
                Array.from(contact.PhoneNumbers).forEach(n => {
                    n.ContactRef = contact._id;
                });
                Contact.findByIdAndUpdate(contact._id, {
                    $set: contact
                }, { new: true })
            }
            if (!!contact.Emails && !!contact.Emails.length) {
                Array.from(contact.Emails).forEach(n => {
                    n.ContactRef = contact._id;
                });
                Contact.findByIdAndUpdate(contact._id, {
                    $set: contact
                }, { new: true })
            }
            console.log(contact)
            console.log(contact.PhoneNumbers)
            res.send(doc);

        }
    });
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    if (ObjId.isValid(id)) {
        let Contact = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Address: req.body.Address,
            City: req.body.City,
            Country: req.body.Country,
            PostalCode: req.body.PostalCode,
            About: req.body.About,
            PhoneNumbers: req.body.PhoneNumbers,
            Emails: req.body.Emails
        };

        Contact.findByIdAndUpdate(id, { $set: Contact }, { new: true }, (err, doc) => {
            if (err) {
                console.log('error dude error');
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send();
    }

});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    if (ObjId.isValid(id)) {
        Contact.findByIdAndRemove(id, (err, doc) => {
            if (err) {
                console.log('error dude error');
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send();
    }

});


module.exports = router