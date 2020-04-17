"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../Grid/index");

var _index2 = _interopRequireDefault(require("../Avatar/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTestimonial = function VHTestimonial(props) {
  return _react.default.createElement(_index.Row, {
    row: true
  }, _react.default.createElement(S.AvatarWrapper, null, _react.default.createElement(_index2.default, {
    image: props.image,
    size: props.sizeImg,
    showCursor: true
  })), _react.default.createElement(S.TextWrapper, {
    xs: props.xs,
    sm: props.sm,
    lg: props.lg,
    color: props.color
  }, _react.default.createElement("p", null, props.testimonial)));
};

VHTestimonial.defaultProps = {
  className: '',
  xs: false,
  sm: false,
  lg: false
};
VHTestimonial.propTypes = {
  image: _propTypes.default.string.isRequired,
  sizeImg: _propTypes.default.string,
  testimonial: _propTypes.default.string.isRequired,
  color: _propTypes.default.string,
  xs: _propTypes.default.bool,
  sm: _propTypes.default.bool,
  lg: _propTypes.default.bool,
  className: _propTypes.default.string
};
var _default = VHTestimonial;
exports.default = _default;