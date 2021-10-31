import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { Constants } from './constants.js';

export class ContactPhone {
  static schema = new mongoose.Schema({
    Number: { type: String },
    Type: { type: Number },
    ContactRef: { type: Schema.Types.ObjectId }
  })

  static get Schema() { return this.schema; }
  static get Collection() {
    return mongoose.model(`${Constants.Schema.CONTACT_PHONE}`, this.schema, `${Constants.Schema.CONTACT_PHONE}s`);
  }
}
