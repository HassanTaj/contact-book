"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MulterConfigFactory = exports.StorageType = void 0;

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg ',
  'image/jpg': 'jpg'
};
var StorageType = {
  DISK_STORAGE: 1
};
exports.StorageType = StorageType;

var MulterConfigFactory =
/*#__PURE__*/
function () {
  function MulterConfigFactory(storageType) {
    _classCallCheck(this, MulterConfigFactory);

    this.config = null;

    if (storageType == StorageType.DISK_STORAGE) {
      var localFileStorage = _multer["default"].diskStorage({
        destination: function destination(req, file, cb) {
          var isValid = MIME_TYPE_MAP[file.mimetype];
          var error = new Error("Invalid mime type");

          if (isValid) {
            error = null;
          }

          cb(error, "media/images");
        },
        filename: function filename(req, file, cb) {
          var name = file.originalname.toLowerCase().split(' ').join('_');
          var ext = MIME_TYPE_MAP[file.mimetype];
          var finalName = "".concat(Date.now(), "_").concat(name);

          if (!name.includes('.')) {
            finalName = "".concat(Date.now(), "_").concat(name, ".").concat(ext);
          }

          cb(null, finalName);
        }
      });

      this.config = localFileStorage;
    }
  }

  _createClass(MulterConfigFactory, [{
    key: "CurrentConfig",
    get: function get() {
      return this.config;
    }
  }]);

  return MulterConfigFactory;
}();

exports.MulterConfigFactory = MulterConfigFactory;