"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _constants = require("./constants.js");

var _contactMail = _interopRequireDefault(require("./contact-mail.js"));

var _contactPhone = _interopRequireDefault(require("./contact-phone.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var ContactPhoneSchema = _contactPhone["default"].ContactPhoneSchema;
var ContactEmailSchema = _contactMail["default"].ContactEmailSchema;
var ContactSchema = new _mongoose["default"].Schema({
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

var ContactModel = _mongoose["default"].model("".concat(_constants.Constants.Schema.CONTACT), ContactSchema, "".concat(_constants.Constants.Schema.CONTACT, "s"));

var _default = {
  Contact: ContactModel,
  ContactSchema: ContactSchema
};
exports["default"] = _default;