"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireWildcard(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("./mongoose.js"));

var _indexRoute = _interopRequireDefault(require("./routes/index.route.js"));

var _globalMiddleware = require("./middleware/global-middleware.js");

var _passport = _interopRequireDefault(require("passport"));

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])();
app.use((0, _express.urlencoded)({
  extended: true
}));
app.use((0, _express.json)()); // app.use(cors({ origin: '*' }));

app.use((0, _cors["default"])()); // app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Headers', "*");
//     res.setHeader('Access-Control-Allow-Origin',
//         'Origin, X-Requested-With, Content-Type, Accept');
//     res.setHeader('Access-Control-Allow-Methods',
//         'GET, POST, PATCH, PUT, DELETE, OPTIONS');
//     next();
// })

app.use(_passport["default"].initialize());
(0, _globalMiddleware.Configure)(app);
var port = 5000;
app.listen(port, function () {
  console.log("Server \uD83D\uDE80 on port : ".concat(port));
});
app.use('/api', _indexRoute["default"]);