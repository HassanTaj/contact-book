const mongoose = require('mongoose');
const { Constants } = require('./constants');
const { ContactEmailSchema } = require('./contact-mail');
const { ContactPhoneSchema } = require('./contact-phone');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    FirstName: { type: String },
    LastName: { type: String },
    Address: { type: String },
    City: { type: String },
    Country: { type: String },
    PostalCode: { type: String },
    About: { type: String },
    ImagePath: { type: String },
    PhoneNumbers: [ContactPhoneSchema],
    Emails: [ContactEmailSchema]
});
const ContactModel = mongoose.model(Constants.Schema.CONTACT, ContactSchema, `${Constants.Schema.CONTACT}s`);
module.exports = { Contact: ContactModel , ContactSchema: ContactSchema};