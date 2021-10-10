import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { Constants } from './constants.js';

const ContactPhoneSchema = new mongoose.Schema({
  Number: { type: String },
  Type: { type: Number },
  ContactRef: { type: Schema.Types.ObjectId }
});
const ContactPhoneModel = model(`${Constants.Schema.CONTACT_PHONE}`, ContactPhoneSchema, `${Constants.Schema.CONTACT_PHONE}s`);
export default {
  ContactPhone: ContactPhoneModel,
  ContactPhoneSchema: ContactPhoneSchema
}