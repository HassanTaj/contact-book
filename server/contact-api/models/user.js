const mongoose = require('mongoose');
const { Constants } = require('./constants');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	Email: { type: String, lowercase: true, unique: true },
	Password: { type: String, required: true },
});

const UserModel = mongoose.model(`${Constants.Schema.USER}`, UserSchema, `${Constants.Schema.USER}s`);
module.exports = { User: UserModel, UserSchema: UserSchema };
