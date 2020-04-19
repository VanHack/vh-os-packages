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

var _ = _interopRequireDefault(require("."));

var _ImgCrop = _interopRequireDefault(require("../ImgCrop"));

var _index3 = _interopRequireDefault(require("../Icon/index"));

var _index4 = _interopRequireDefault(require("../Text/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHUserAvatar = function VHUserAvatar(props) {
  return /*#__PURE__*/_react.default.createElement(_index.Row, null, /*#__PURE__*/_react.default.createElement(_index.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(S.OutterImg, null, /*#__PURE__*/_react.default.createElement(_ImgCrop.default, {
    source: props.avatar,
    data: {
      context: 2
    },
    uploading: props.uploading || 100,
    acceptTypes: "image/*",
    onEvent: props.onEvent
  }), /*#__PURE__*/_react.default.createElement(S.InnerImg, null, /*#__PURE__*/_react.default.createElement(_index3.default, {
    title: props.name,
    icon: 'camera',
    sm: true
  })))), /*#__PURE__*/_react.default.createElement(_index.Row, {
    alignItemsCenter: true,
    marginTop: 10
  }, /*#__PURE__*/_react.default.createElement(_index4.default, {
    variant: "h4",
    color: "gray-90",
    text: props.name
  }), /*#__PURE__*/_react.default.createElement(_index4.default, {
    variant: "subtitle3",
    color: "gray-90",
    text: props.email
  })));
};

VHUserAvatar.defaultProps = {
  className: '',
  showCursor: false
};
VHUserAvatar.propTypes = {
  className: _propTypes.default.string,
  avatar: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  email: _propTypes.default.string
};
var _default = VHUserAvatar;
exports.default = _default;