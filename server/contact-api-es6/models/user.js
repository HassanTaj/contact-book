import mongoose from 'mongoose'
const { Schema } = mongoose;
import { Constants } from './constants.js';

const UserSchema = new Schema({
	Email: { type: String, lowercase: true, unique: true },
	Password: { type: String, required: true },
});

const UserModel = mongoose.model(`${Constants.Schema.USER}`, UserSchema, `${Constants.Schema.USER}s`);
export default { User: UserModel, UserSchema: UserSchema };
