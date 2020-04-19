"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Cards/Base", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, null, /*#__PURE__*/_react.default.createElement("div", null, "VHCardBase Base"))));
}).add("no hover", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    noHover: true
  }, /*#__PURE__*/_react.default.createElement("div", null, "VHCardBase Base"))));
}).add("no border", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    noBorder: true
  }, /*#__PURE__*/_react.default.createElement("div", null, "VHCardBase Base"))));
}).add("favorite", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    favorite: true
  }, /*#__PURE__*/_react.default.createElement("div", null, "VHCardBase Base"))));
});