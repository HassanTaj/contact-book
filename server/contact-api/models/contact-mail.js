const mongoose = require('mongoose');
const { Constants } = require('./constants');
const Schema = mongoose.Schema;

const ContactEmailSchema = new Schema({
  Email: { type: String },
  Type: { type: Number }
});

const ContactEmailModel = mongoose.model(`${Constants.Schema.CONTACT_MAIL}`, ContactEmailSchema, `${Constants.Schema.CONTACT_MAIL}s`);
module.exports = { ContactEmail: ContactEmailModel, ContactEmailSchema: ContactEmailSchema };
