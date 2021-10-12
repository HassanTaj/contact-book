import mongoose from 'mongoose'
import { Constants } from './constants.js';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
	Email: { type: String, lowercase: true, unique: true },
	Password: { type: String, required: true },
});

const UserModel = model(`${Constants.Schema.USER}`, UserSchema, `${Constants.Schema.USER}s`);
export default { User: UserModel, UserSchema: UserSchema };
