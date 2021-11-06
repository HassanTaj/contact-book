import mongoose from 'mongoose';
import { Contact } from '../models/contact.js';
import fs from 'fs';

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
		if (req.file?.filename) {
			model.ImagePath = `${req.protocol}://${req.get('host')}/media/images/${req.file.filename}`
		}
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
		let model = JSON.parse(req.body.model)
		if (req.file?.filename) {
			model.ImagePath = `${req.protocol}://${req.get('host')}/media/images/${req.file.filename}`
		}
		if (ObjId.isValid(id)) {
			let contact = new Contact.Collection(model);

			Contact.Collection.findByIdAndUpdate(id, { $set: contact }, { new: true }, (err, doc) => {
				if (err) {
					console.log(err)
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
					let path = String(doc.ImagePath)?.replace(`${req.protocol}://${req.get('host')}`, '.');
					if (!!path) {
						fs.unlink(path, (err) => {
							if (err) {
								console.log("unlink failed", err);
							} else {
								console.log("file deleted");
							}
						});
					}
					res.send(doc);
				}
			})
		} else {
			return res.status(400).send();
		}

	}
	
	static deleteAll(req, res, next) {
		// get all  the files
		Contact.Collection.find((err, doc) => {
			if (err) {
				console.log('error dude error');
			} else {
				// get all the image paths out and delete them
				let imagePaths = doc.map(x => x?.ImagePath);
				imagePaths.forEach((url)=>{
					let path = String(url)?.replace(`${req.protocol}://${req.get('host')}`, '.');
					if (!!path) {
						fs.unlink(path, (err) => {
							if (err) {
								console.log("unlink failed", err);
							} else {
								console.log("file deleted");
							}
						});
					}
				});
			
				// delete all the records  from db
				Contact.Collection.deleteMany({}, (err, doc) => {
					res.status(200).send();
				});
			}
		});

	}

	static uploadPic(req, res, next) {

	}
};