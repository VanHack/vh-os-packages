"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Cards/Pricing', module).add('Outlined without top chips', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "360px",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    period: "Month",
    price: "65",
    unit: "CAD$/month",
    subscription: "Renew every month",
    cta: "Get Started",
    outlineBtn: true,
    note: "",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add('Outlined', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "360px",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    show: true,
    save: "Save 15%",
    noHoverChip: true,
    transparentChip: true,
    period: "Month",
    price: "65",
    unit: "CAD$/month",
    subscription: "Renew every month",
    cta: "Get Started",
    outlineBtn: true,
    note: "",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add('Secondary', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "360px",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    show: true,
    save: "Save almost 25%",
    noHoverChip: true,
    transparentChip: true,
    round: true,
    period: "Month",
    price: "65",
    unit: "CAD$/month",
    subscription: "Renew every month",
    cta: "Get Started",
    secondaryBtn: true,
    note: "The choice of 46% of premium members",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
});