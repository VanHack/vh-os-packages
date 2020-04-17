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

var _index3 = _interopRequireDefault(require("../Button/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTitleHighlightDescriptionButtonImage = function VHTitleHighlightDescriptionButtonImage(props) {
  return _react.default.createElement(_index.Container, null, _react.default.createElement(_index.Row, {
    row: true,
    responsive: true
  }, _react.default.createElement(_index.Row, {
    width: "40%",
    marginTop: 150
  }, _react.default.createElement(_index.Row, {
    marginBottom5: true
  }, _react.default.createElement(_index2.default, {
    variant: "h3",
    color: "gray-90",
    text: props.title
  })), _react.default.createElement(_index.Row, {
    marginBottom5: true
  }, _react.default.createElement(_index2.default, {
    variant: "h1",
    color: "gray-90",
    text: props.highlight
  })), _react.default.createElement(_index.Row, {
    marginBottom5: true
  }, _react.default.createElement(_index2.default, {
    variant: "bodyweb",
    color: "gray-90",
    text: props.description
  })), _react.default.createElement(_index.Row, {
    width: "50%",
    marginTop: 30,
    marginBottom: 30
  }, _react.default.createElement(_index3.default, {
    secondary: true,
    onEvent: props.onEvent,
    data: props.data,
    label: props.label,
    lg: true
  }))), _react.default.createElement(_index.Row, {
    width: "60%",
    height: 600,
    marginTop: 50,
    mobileDisplayNone: true
  }, _react.default.createElement(S.ImgWrapper, {
    image: props.image
  }))));
};

VHTitleHighlightDescriptionButtonImage.defaultProps = {
  className: ''
};
VHTitleHighlightDescriptionButtonImage.prototypes = {
  className: _propTypes.default.string,
  title: _propTypes.default.string.isRequired,
  highlight: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  image: _propTypes.default.string.isRequired
};
var _default = VHTitleHighlightDescriptionButtonImage;
exports.default = _default;