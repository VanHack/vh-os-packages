"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../Grid/index");

var _index2 = _interopRequireDefault(require("../../Components/TextHighlightDescriptionImage/index"));

var _index3 = _interopRequireDefault(require("../../Hyperlinks/LinkImage/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTextsImageLink = function VHTextsImageLink(props) {
  return /*#__PURE__*/_react.default.createElement(_index.Container, null, /*#__PURE__*/_react.default.createElement(_index.Row, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
    title: props.title,
    highlight: props.highlight,
    description: props.description,
    imgSvg: props.imgSvg,
    reverse: props.reverseTop
  }), /*#__PURE__*/_react.default.createElement(_index.Container, null, /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    reverse: props.reverseBottom
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    width: "50%"
  }, /*#__PURE__*/_react.default.createElement(_index3.default, {
    xsLabel: props.xsLabel,
    smLabel: props.smLabel,
    lgLabel: props.lgLabel,
    label: props.label,
    color: props.color,
    to: props.to,
    icon: props.icon,
    xsIcon: props.xsIcon,
    smIcon: props.smIcon,
    mdIcon: props.mdIcon,
    lgIcon: props.lgImg,
    data: props.data,
    onEvent: props.onEvent
  })), /*#__PURE__*/_react.default.createElement(_index.Row, {
    width: "50%"
  })))));
};

VHTextsImageLink.defaultProps = {
  reverseTop: false,
  xsLabel: false,
  smLabel: true,
  lgLabel: false,
  xsIcon: false,
  smIcon: true,
  mdIcon: false,
  lgIcon: false,
  reverseBottom: false
};
VHTextsImageLink.prototypes = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: '',
  title: _propTypes.default.string.isRequired,
  highlight: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  imgSvg: _propTypes.default.string.isRequired,
  reverseTop: _propTypes.default.bool,
  smLabel: _propTypes.default.bool,
  xsLabel: _propTypes.default.bool,
  lgLabel: _propTypes.default.bool,
  label: _propTypes.default.string.isRequired,
  color: _propTypes.default.string,
  icon: _propTypes.default.string.isRequired,
  xsIcon: _propTypes.default.bool,
  smIcon: _propTypes.default.bool,
  mdIcon: _propTypes.default.bool,
  lgIcon: _propTypes.default.bool,
  reverseBottom: _propTypes.default.bool
};
var _default = VHTextsImageLink;
exports.default = _default;