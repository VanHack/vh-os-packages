"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Cards/Base", module).add("default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, _react.default.createElement(_.default, null, _react.default.createElement("div", null, "VHCardBase Base"))));
}).add("no hover", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, _react.default.createElement(_.default, {
    noHover: true
  }, _react.default.createElement("div", null, "VHCardBase Base"))));
}).add("no border", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, _react.default.createElement(_.default, {
    noBorder: true
  }, _react.default.createElement("div", null, "VHCardBase Base"))));
}).add("favorite", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, _react.default.createElement(_.default, {
    favorite: true
  }, _react.default.createElement("div", null, "VHCardBase Base"))));
});