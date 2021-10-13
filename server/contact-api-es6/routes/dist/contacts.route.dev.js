"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _contactController = _interopRequireDefault(require("../controllers/contact.controller.js"));

var _passport = _interopRequireDefault(require("passport"));

var _passportJwt = _interopRequireDefault(require("../middleware/passport-jwt.js"));

var _multer = _interopRequireDefault(require("multer"));

var _multer2 = require("../middleware/multer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _express.Router();
var AuthStrategies = _passportJwt["default"].AuthStrategies;
router.get('/', _passport["default"].authenticate(AuthStrategies.JWT, {
  session: false
}), _contactController["default"].get);
router.get('/:id', _contactController["default"].getSingle);
router.post('/', (0, _multer["default"])({
  storage: new _multer2.MulterConfigFactory(_multer2.StorageType.DISK_STORAGE).CurrentConfig
}).single('image'), _contactController["default"].post);
router.put('/:id', _contactController["default"].put);
router["delete"]('/:id', _contactController["default"]["delete"]);
var _default = router;
exports["default"] = _default;