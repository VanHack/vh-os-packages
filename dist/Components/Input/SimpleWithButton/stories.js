"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Input/Simple with Button", module).add("default", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    placeholder: "Email",
    value: "",
    data: {},
    onEvent: function onEvent() {
      return console.log(event);
    },
    label: "SEND"
  }));
});