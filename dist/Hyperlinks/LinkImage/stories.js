"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Hyperlinks|Link Image', module).add('xs', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    xsIcon: true,
    xsLabel: true,
    label: "Link icon xs",
    icon: "canada"
  }));
}).add('sm', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    smLabel: true,
    label: "Link icon sm",
    icon: "canada",
    smIcon: true
  }));
}).add('lg', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    lgLabel: true,
    label: "Link icon lg",
    icon: "canada",
    lgIcon: true
  }));
}).add('noUnderscore', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    noUnderscore: true,
    label: "Link icon noUnderscore",
    icon: "canada"
  }));
}).add('round', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    round: true,
    label: "Link icon round",
    icon: "canada"
  }));
}).add('reverse', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    reverse: true,
    label: "Link icon reverse",
    icon: "canada"
  }));
});