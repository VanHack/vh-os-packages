"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = require("../../Grid");

var _Text = _interopRequireDefault(require("../../Components/Text"));

var _Button = _interopRequireDefault(require("../../Components/Button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHConfirmationTemplate = function VHConfirmationTemplate(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.Container, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 90
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    text: props.title,
    variant: "h4"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 39
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    alignCenter: true,
    text: props.description,
    variant: "bodyweb"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 39
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "",
    label: props.ctaLabel,
    onEvent: props.onEvent,
    primary: true,
    disabled: props.loading
  })));
};

VHConfirmationTemplate.defaultProps = {};
VHConfirmationTemplate.propTypes = {};
var _default = VHConfirmationTemplate;
exports.default = _default;