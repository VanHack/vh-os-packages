"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Icon Text", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    text: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  });
}).add("color", function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    icon: "bullet",
    textColor: "primary-light",
    iconColor: "primary-light",
    variant: "platform",
    text: "Vue.js",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  });
});