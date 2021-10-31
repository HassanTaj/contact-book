import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { Constants } from './constants.js';
import { ContactPhone } from './contact-phone.js';
import { ContactEmail } from './contact-mail.js';

export class Contact {
    static schema = new mongoose.Schema({
        FirstName: { type: String },
        LastName: { type: String },
        Address: { type: String },
        City: { type: String },
        Country: { type: String },
        PostalCode: { type: String },
        About: { type: String },
        ImagePath: { type: String },
        PhoneNumbers: [ContactPhone.Schema],
        Emails: [ContactEmail.Schema]
    });

    static get Collection() {
        return mongoose.model(`${Constants.Schema.CONTACT}`, this.schema, `${Constants.Schema.CONTACT}s`);
    }
}
