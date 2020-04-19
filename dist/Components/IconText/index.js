"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _Text = _interopRequireDefault(require("../Text"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHIconText = function VHIconText(props) {
  return /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    profile: props.profile,
    cursor: props.cursor,
    inline: props.inline,
    className: "".concat(props.className ? props.className : ""),
    onClick: function onClick() {
      if (props.onClose) {
        props.onClose();
      }

      if (props.onEvent) {
        props.onEvent({
          type: "Click",
          origin: "VHIconText",
          props: {
            data: props.data
          }
        });
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    color: props.iconColor,
    sm: true,
    title: props.text,
    icon: props.icon,
    data: props.data
  }), /*#__PURE__*/_react.default.createElement(_Text.default, {
    data: props.data,
    color: props.textColor,
    variant: props.variant,
    text: props.text,
    onEvent: props.onEvent
  }));
};

VHIconText.defaultProps = {
  iconColor: "black-50",
  textColor: "black-100",
  onEvent: null,
  data: null,
  text: "",
  icon: "bullet",
  className: "vh-icon-text",
  variant: "body2"
};
VHIconText.propTypes = {
  iconColor: _propTypes.default.string,
  textColor: _propTypes.default.string,
  onEvent: _propTypes.default.func,
  data: _propTypes.default.string,
  text: _propTypes.default.string.isRequired,
  icon: _propTypes.default.string,
  className: _propTypes.default.string,
  variant: _propTypes.default.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2", "body3", "bodyWeb", "subtitle1", "subtitle2", "subtitle3", "caption", "platform1", "platform2", "platform3"])
};
var _default = VHIconText;
exports.default = _default;