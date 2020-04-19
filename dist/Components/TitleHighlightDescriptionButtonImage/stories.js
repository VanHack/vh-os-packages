"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = {
  title: "VanHack Premium",
  highlight: "Get ready to get hired abroad",
  description: "Acquire career skills that will make you stand out from the herd! Live interview practice, profile review, exclusive webinars and more.",
  label: "JOIN VANHACK PREMIUM",
  image: require("../../assets/general/background/img_hero_premium.png")
};
(0, _react2.storiesOf)("Components|Title Highlight Description Button Image", module).add("Default", function () {
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    title: items.title,
    highlight: items.highlight,
    description: items.description,
    label: items.label,
    image: items.image
  }));
});