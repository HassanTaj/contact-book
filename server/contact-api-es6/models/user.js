import mongoose from 'mongoose'
import { Constants } from './constants.js';

const { Schema, model } = mongoose;

export class User {
    static schema = new mongoose.Schema({
		Email: { type: String, lowercase: true, unique: true },
		Password: { type: String, required: true },
	});

    static get Collection() {
        return mongoose.model(`${Constants.Schema.USER}`, this.schema, `${Constants.Schema.USER}s`);
    }
}
