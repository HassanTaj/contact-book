import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { Constants } from './constants.js';
import mail from './contact-mail.js';
import phone from './contact-phone.js';

const { ContactPhoneSchema } = phone;
const { ContactEmailSchema } = mail;

const ContactSchema = new mongoose.Schema({
    FirstName: { type: String },
    LastName: { type: String },
    Address: { type: String },
    City: { type: String },
    Country: { type: String },
    PostalCode: { type: String },
    About: { type: String },
    PictureUrl: { type: String },
    PhoneNumbers: [ContactPhoneSchema],
    Emails: [ContactEmailSchema]
});
const ContactModel = mongoose.model(`${Constants.Schema.CONTACT}`, ContactSchema, `${Constants.Schema.CONTACT}s`);

export default {
    Contact: ContactModel,
    ContactSchema: ContactSchema
}