"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cardItems = [{
  show: false,
  save: "",
  period: "Month",
  price: "65",
  unit: "CAD$/month",
  subscription: "Renew every month",
  cta: "Get Started",
  outlineBtn: true,
  note: ""
}, {
  show: true,
  save: "Save 15%",
  noHoverChip: true,
  transparentChip: true,
  period: "Month",
  price: "55",
  unit: "CAD$/month",
  subscription: "Renew every 3 months",
  cta: "Get Started",
  outlineBtn: true,
  note: ""
}, {
  show: true,
  save: "Save almost 25%",
  noHoverChip: true,
  transparentChip: true,
  round: true,
  period: "Month",
  price: "50",
  unit: "CAD$/month",
  subscription: "Renew every 6 months",
  cta: "Get Started",
  secondaryBtn: true,
  note: "The choice of 46% of premium members"
}];
(0, _react2.storiesOf)("Sections|Premium/Pricing", module).add("Default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "rgba(203, 248, 251, 0.44)",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    sectionTitle: "Pricing",
    icon: "medal",
    title: "30 Days Money Back Guarantee",
    description: "If you're not getting incredible value and feeling more prepared than ever to get a job in Canada or Europe in the first 30 days, just talk to us and we'll refund 100% of your purchase, no questions asked.",
    cardItems: cardItems,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
});