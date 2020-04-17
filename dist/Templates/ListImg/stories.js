"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

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
(0, _react2.storiesOf)("Templates|List img", module).add("default", function () {
  return _react.default.createElement(_.default, {
    title1: "Here\u2019s how it work",
    title2: "Advantages",
    list1: ArrayOfItems,
    list2: ArrayOfItems
  });
});