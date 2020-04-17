"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../Grid/index");

var _index2 = _interopRequireDefault(require("../Text/index"));

var _index3 = _interopRequireDefault(require("../ImgSvg/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTextHighlightDescriptionImage = function VHTextHighlightDescriptionImage(props) {
  return _react.default.createElement(_index.Row, null, _react.default.createElement(S.Wrapper, {
    reverse: props.reverse,
    responsive: true
  }, _react.default.createElement(_index.Row, {
    marginBottom5: true,
    style: {
      justifyContent: "center"
    }
  }, _react.default.createElement(_index.Row, {
    alignItemsLeft: true,
    marginBottom: 8
  }, _react.default.createElement(S.UnderlineText, null, _react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "tertiary-dark",
    text: props.title
  }))), _react.default.createElement(_index.Row, {
    marginBottom5: true
  }, _react.default.createElement(_index2.default, {
    variant: "h2",
    color: "gray-90",
    text: props.highlight
  })), _react.default.createElement(_index.Row, {
    marginBottom5: true
  }, _react.default.createElement(_index2.default, {
    variant: "bodyweb",
    color: "gray-90",
    text: props.description
  }))), _react.default.createElement(_index.Row, {
    alignItemsCenter: true,
    marginBottom5: true,
    mobileImgsSM: true
  }, _react.default.createElement(_index3.default, {
    imgSvg: props.imgSvg
  }))));
};

VHTextHighlightDescriptionImage.defaultProps = {
  reverse: false
};
VHTextHighlightDescriptionImage.prototypes = {
  className: '',
  title: _propTypes.default.string.isRequired,
  highlight: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  imgSvg: _propTypes.default.string.isRequired,
  reverse: _propTypes.default.bool
};
var _default = VHTextHighlightDescriptionImage;
exports.default = _default;