import mongoose from 'mongoose';
import ContactModule from '../models/contact.js';
const { Contact } = ContactModule;
import multer from 'multer';
import { json } from 'express';

const { Types } = mongoose;
const { ObjectId } = Types;

const ObjId = ObjectId;

export default {
	get(req, res, next) {
		console.log('processing started')
		Contact.find((err, doc) => {
			if (err) {
				console.log('error dude error');
			} else {
				res.send(doc);
			}
		});
	},

	getSingle(req, res, next) {
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

	},

	post(req, res, next) {
		let model = JSON.parse(req.body.model)
		model.ImagePath = `${req.protocol}://${req.get('host')}/media/images/${req.file.filename}`
		let contact = new Contact(model);

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
	},

	put(req, res, next) {
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

	},

	delete(req, res, next) {
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

	},

	uploadPic(req, res, next) {

	}
};