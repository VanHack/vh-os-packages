"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Templates|Media", module).add("default", function () {
  return _react.default.createElement(_.default, {
    title: "Media Contact",
    name: "Karli Leitl",
    email: "karli@switchboardpr.com",
    phone: "778-401-6040 or 403-975-7707",
    press: "PRESS"
  });
});