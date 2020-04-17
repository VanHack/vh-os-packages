"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Text = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHText = function VHText(props) {
  var initialState = {
    className: 'vh-text-component'
  };

  var action = function action() {
    return props.onEvent({
      type: "onClick",
      origin: "VHText",
      props: {
        data: props.data
      }
    });
  };

  switch (props.variant) {
    case 'h1':
      return _react.default.createElement(Text.H1, {
        color: props.color,
        hover: props.hover,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h2':
      return _react.default.createElement(Text.H2, {
        color: props.color,
        hover: props.hover,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h3':
      return _react.default.createElement(Text.H3, {
        color: props.color,
        hover: props.hover,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h4':
      return _react.default.createElement(Text.H4, {
        color: props.color,
        hover: props.hover,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h5':
      return _react.default.createElement(Text.H5, {
        color: props.color,
        hover: props.hover,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h6':
      return _react.default.createElement(Text.H6, {
        color: props.color,
        hover: props.hover,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'subtitle1':
      return _react.default.createElement(Text.Subtitle1, {
        color: props.color,
        hover: props.hover,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'subtitle2':
      return _react.default.createElement(Text.Subtitle2, {
        color: props.color,
        hover: props.hover,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'subtitle3':
      return _react.default.createElement(Text.Subtitle3, {
        color: props.color,
        hover: props.hover,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'bodyweb':
      return _react.default.createElement(Text.BodyWeb, {
        color: props.color,
        hover: props.hover,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'platform1':
    case 'platform':
      return _react.default.createElement(Text.BodyPlatform, {
        color: props.color,
        cursor: props.cursor,
        hover: props.hover,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'platform2':
      return _react.default.createElement(Text.BodyPlatform2, {
        color: props.color,
        hover: props.hover,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'caption':
      return _react.default.createElement(Text.Caption, {
        color: props.color,
        hover: props.hover,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    default:
      return _react.default.createElement(Text.Caption, {
        color: props.color,
        hover: props.hover,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);
  }
};

VHText.defaultProps = {};
VHText.propTypes = {};
var _default = VHText;
exports.default = _default;