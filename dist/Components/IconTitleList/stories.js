"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrayOfItems = [{
  label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
}, {
  label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
}, {
  label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
}, {
  label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
}];
(0, _react2.storiesOf)("Components|Icon Title List", module).add("Types", function () {
  return _react.default.createElement(_Grid.Row, null, _react.default.createElement(_index.default, {
    items: ArrayOfItems,
    data: "vanhack"
  }));
});