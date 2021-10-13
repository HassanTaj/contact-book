"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _contact = _interopRequireDefault(require("../models/contact.js"));

var _multer = _interopRequireDefault(require("multer"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Contact = _contact["default"].Contact;
var Types = _mongoose["default"].Types;
var ObjectId = Types.ObjectId;
var ObjId = ObjectId;
var _default = {
  get: function get(req, res, next) {
    console.log('processing started');
    Contact.find(function (err, doc) {
      if (err) {
        console.log('error dude error');
      } else {
        res.send(doc);
      }
    });
  },
  getSingle: function getSingle(req, res, next) {
    var id = req.params.id;

    if (ObjId.isValid(id)) {
      Contact.findById(id, function (err, doc) {
        if (err) {
          console.log('error dude error');
        } else {
          res.send(doc);
        }
      });
    } else {
      return res.status(400).send();
    }
  },
  post: function post(req, res, next) {
    var model = JSON.parse(req.body.model);
    model.ImagePath = "".concat(req.protocol, "://").concat(req.get('host'), "/media/images/").concat(req.file.filename);
    var contact = new Contact(model);
    contact.save(function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        if (!!contact.PhoneNumbers && !!contact.PhoneNumbers.length) {
          Array.from(contact.PhoneNumbers).forEach(function (n) {
            n.ContactRef = contact._id;
          });
          Contact.findByIdAndUpdate(contact._id, {
            $set: contact
          }, {
            "new": true
          });
        }

        9;

        if (!!contact.Emails && !!contact.Emails.length) {
          Array.from(contact.Emails).forEach(function (n) {
            n.ContactRef = contact._id;
          });
          Contact.findByIdAndUpdate(contact._id, {
            $set: contact
          }, {
            "new": true
          });
        }

        console.log(contact);
        console.log(contact.PhoneNumbers);
        res.send(doc);
      }
    });
  },
  put: function put(req, res, next) {
    var id = req.params.id;

    if (ObjId.isValid(id)) {
      var _Contact = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Address: req.body.Address,
        City: req.body.City,
        Country: req.body.Country,
        PostalCode: req.body.PostalCode,
        About: req.body.About,
        PhoneNumbers: req.body.PhoneNumbers,
        Emails: req.body.Emails
      };

      _Contact.findByIdAndUpdate(id, {
        $set: _Contact
      }, {
        "new": true
      }, function (err, doc) {
        if (err) {
          console.log('error dude error');
        } else {
          res.send(doc);
        }
      });
    } else {
      return res.status(400).send();
    }
  },
  "delete": function _delete(req, res, next) {
    var id = req.params.id;

    if (ObjId.isValid(id)) {
      Contact.findByIdAndRemove(id, function (err, doc) {
        if (err) {
          console.log('error dude error');
        } else {
          res.send(doc);
        }
      });
    } else {
      return res.status(400).send();
    }
  },
  uploadPic: function uploadPic(req, res, next) {}
};
exports["default"] = _default;