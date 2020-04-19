"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Source|Icon', module).add('VHIcon Image XS', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    color: "black-100",
    xs: true,
    title: "bullet icon",
    icon: "bullet"
  });
}).add('VHIcon Image SM', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    color: "black-50",
    sm: true,
    title: "bullet icon",
    icon: "bullet"
  });
}).add('VHIcon Image MD', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    color: "primary-light",
    md: true,
    title: "bullet icon",
    icon: "bullet"
  });
}).add('VHIcon Image LG', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    color: "primary-light",
    lg: true,
    title: "bullet icon",
    icon: "bullet"
  });
});