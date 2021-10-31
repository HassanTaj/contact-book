import mongoose from 'mongoose';
import { Contact } from '../models/contact.js';


const { Types } = mongoose;
const { ObjectId } = Types;

const ObjId = ObjectId;

export class ContactController {
	static get(req, res, next) {
		console.log('processing started')
		Contact.Collection.find((err, doc) => {
			if (err) {
				console.log('error dude error');
			} else {
				res.send(doc);
			}
		});
	}

	static getSingle(req, res, next) {
		let id = req.params.id;
		if (ObjId.isValid(id)) {
			Contact.Collection.findById(id, (err, doc) => {
				if (err) {
					console.log('error dude error');
				} else {
					res.send(doc);
				}
			})
		} else {
			return res.status(400).send();
		}

	}

	static post(req, res, next) {
		let model = JSON.parse(req.body.model)
		model.ImagePath = `${req.protocol}://${req.get('host')}/media/images/${req.file.filename}`
		let contact = new Contact.Collection(model);

		contact.save((err, doc) => {
			if (err) {
				console.log(err);
			} else {
				if (!!contact.PhoneNumbers && !!contact.PhoneNumbers.length) {
					Array.from(contact.PhoneNumbers).forEach(n => {
						n.ContactRef = contact._id;
					});
					Contact.Collection.findByIdAndUpdate(contact._id, {
						$set: contact
					}, { new: true })
				}
				if (!!contact.Emails && !!contact.Emails.length) {
					Array.from(contact.Emails).forEach(n => {
						n.ContactRef = contact._id;
					});
					Contact.Collection.findByIdAndUpdate(contact._id, {
						$set: contact
					}, { new: true })
				}
				console.log(contact)
				console.log(contact.PhoneNumbers)
				res.send(doc);
			}
		});
	}

	static put(req, res, next) {
		let id = req.params.id;
		if (ObjId.isValid(id)) {
			let contact = {
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

			Contact.Collection.findByIdAndUpdate(id, { $set: contact }, { new: true }, (err, doc) => {
				if (err) {
					console.log('error dude error');
				} else {
					res.send(doc);
				}
			})
		} else {
			return res.status(400).send();
		}

	}

	static delete(req, res, next) {
		let id = req.params.id;
		if (ObjId.isValid(id)) {
			Contact.Collection.findByIdAndRemove(id, (err, doc) => {
				if (err) {
					console.log('error dude error');
				} else {
					res.send(doc);
				}
			})
		} else {
			return res.status(400).send();
		}

	}
	static deleteAll(req, res, next) {
		Contact.Collection.remove({}, (err, doc) => {
			res.status(200).send();
		});
	}

	static uploadPic(req, res, next) {

	}
};