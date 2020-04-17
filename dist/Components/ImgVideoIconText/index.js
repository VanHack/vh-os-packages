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

var _index3 = _interopRequireDefault(require("../Icon/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHImgVideoIconText = function VHImgVideoIconText(props) {
  return _react.default.createElement(_index.Row, {
    alignItemsCenter: true
  }, _react.default.createElement(S.Wrapper, {
    responsive: true
  }, _react.default.createElement(S.ImgItem, {
    image: props.image
  }), _react.default.createElement(S.ItemsWrapper, null, _react.default.createElement(_index.Row, {
    row: true
  }, _react.default.createElement(_index.Row, {
    width: "10%",
    alignItemsCenter: true,
    style: {
      justifyContent: "center",
      marginLeft: "15px"
    },
    mobileDisplayNone: true
  }, _react.default.createElement(_index3.default, {
    icon: props.icon,
    color: props.color,
    md: true
  })), _react.default.createElement(_index.Row, {
    width: "60%",
    style: {
      padding: "0 15px"
    }
  }, _react.default.createElement(_index2.default, {
    variant: "platform1",
    color: "gray-10",
    text: props.text
  })))), _react.default.createElement(S.ImgOverlay, null)));
};

VHImgVideoIconText.defaultProps = {
  className: ''
};
VHImgVideoIconText.prototypes = {
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func,
  data: _propTypes.default.object,
  image: _propTypes.default.string,
  icon: _propTypes.default.string,
  text: _propTypes.default.string
};
var _default = VHImgVideoIconText;
exports.default = _default;