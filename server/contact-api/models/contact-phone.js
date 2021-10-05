const mongoose = require('mongoose');
const { Constants } = require('./constants');
const Schema = mongoose.Schema;

const ContactPhoneSchema = new Schema({
  Number: { type: String },
  Type: { type: Number },
  ContactRef: { type: Schema.Types.ObjectId }
});
const ContactPhoneModel = mongoose.model(`${Constants.Schema.CONTACT_PHONE}`, ContactPhoneSchema, `${Constants.Schema.CONTACT_PHONE}s`);
module.exports = { ContactPhone: ContactPhoneModel, ContactPhoneSchema: ContactPhoneSchema };