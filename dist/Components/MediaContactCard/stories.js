"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Media Contact Card", module).add("Types", function () {
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    title: "Media Contact",
    name: "Karli Leitl",
    email: "karli@switchboardpr.com",
    phone: "778-401-6040 or 403-975-7707"
  }));
});