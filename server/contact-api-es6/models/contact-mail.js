import mongoose  from 'mongoose';
const { Schema, model } = mongoose;
import { Constants } from './constants.js';

export class ContactEmail {
  static schema = new mongoose.Schema({
    Email: { type: String },
    Type: { type: Number }
  })
  static get Schema() { return this.schema; }
  static get Collection() {
      return mongoose.model(`${Constants.Schema.CONTACT_MAIL}`, this.schema, `${Constants.Schema.CONTACT_MAIL}s`);
  }
}
