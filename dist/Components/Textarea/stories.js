"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  description: "Relocation bonus: CA$ 3,000 (half on signing and half upon  arrival in Canada)"
};
(0, _react2.storiesOf)("Components|Textarea", module).add("default", function () {
  return _react.default.createElement(_.default, {
    description: data.description,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  });
});