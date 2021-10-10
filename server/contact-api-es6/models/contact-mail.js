import mongoose  from 'mongoose';
const { Schema, model } = mongoose;
import { Constants } from './constants.js';

const ContactEmailSchema = new Schema({
  Email: { type: String },
  Type: { type: Number }
});

const ContactEmailModel = mongoose.model(`${Constants.Schema.CONTACT_MAIL}`, ContactEmailSchema, `${Constants.Schema.CONTACT_MAIL}s`);

export default {
  ContactEmail: ContactEmailModel,
  ContactEmailSchema: ContactEmailSchema
}
