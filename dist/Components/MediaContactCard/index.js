"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../Cards/Base/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHMediacontactCard = function VHMediacontactCard(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      marginTop: "-10%",
      boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)",
      borderRadius: "6px"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    noHover: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(S.Title, null, props.title), /*#__PURE__*/_react.default.createElement(S.Info, null, props.name), /*#__PURE__*/_react.default.createElement(S.Info, null, props.email), /*#__PURE__*/_react.default.createElement(S.Info, null, props.phone))));
};

VHMediacontactCard.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string,
  name: _propTypes.default.string,
  email: _propTypes.default.string,
  phone: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = VHMediacontactCard;
exports.default = _default;