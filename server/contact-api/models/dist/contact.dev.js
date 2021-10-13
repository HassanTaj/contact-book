"use strict";

var mongoose = require('mongoose');

var _require = require('./constants'),
    Constants = _require.Constants;

var _require2 = require('./contact-mail'),
    ContactEmailSchema = _require2.ContactEmailSchema;

var _require3 = require('./contact-phone'),
    ContactPhoneSchema = _require3.ContactPhoneSchema;

var Schema = mongoose.Schema;
var ContactSchema = new Schema({
  FirstName: {
    type: String
  },
  LastName: {
    type: String
  },
  Address: {
    type: String
  },
  City: {
    type: String
  },
  Country: {
    type: String
  },
  PostalCode: {
    type: String
  },
  About: {
    type: String
  },
  ImagePath: {
    type: String
  },
  PhoneNumbers: [ContactPhoneSchema],
  Emails: [ContactEmailSchema]
});
var ContactModel = mongoose.model(Constants.Schema.CONTACT, ContactSchema, "".concat(Constants.Schema.CONTACT, "s"));
module.exports = {
  Contact: ContactModel,
  ContactSchema: ContactSchema
};