"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Title Description", module).add("block", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    title: "Rank your top 3 skills",
    description: "Highest proficiency level; 3 = Lowest proficiency level",
    titleVariant: "bodyplatform",
    descriptionVariant: "",
    data: {},
    onEvent: function onEvent(e) {
      return console.log(e);
    }
  }));
}).add("H1 Title default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    title: "Rank your top 3 skills",
    description: "Highest proficiency level; 3 = Lowest proficiency level",
    titleVariant: "h1",
    descriptionVariant: "bodyweb",
    data: {},
    onEvent: function onEvent(e) {
      return console.log(e);
    }
  }));
}).add("H1 Title blue", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    title: "Rank your top 3 skills",
    titleColor: "primary-light",
    description: "Highest proficiency level; 3 = Lowest proficiency level",
    titleVariant: "h1",
    descriptionVariant: "bodyweb",
    data: {},
    onEvent: function onEvent(e) {
      return console.log(e);
    }
  }));
}).add("inline", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    title: "Phone number",
    description: "(optional)",
    inline: true,
    data: {},
    titleVariant: "subtitle3",
    descriptionVariant: "caption",
    onEvent: function onEvent(e) {
      return console.log(e);
    }
  }));
});