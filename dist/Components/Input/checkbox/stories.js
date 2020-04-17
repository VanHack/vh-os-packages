"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{
  id: "1",
  value: "123",
  label: "yes",
  checked: true
}, {
  id: "2",
  value: "12355",
  label: "no",
  checked: true
}];
(0, _react2.storiesOf)("Components|Input/Checkbox", module).add("default", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    title: data[0].label,
    color: "gray-100",
    variant: "platform1",
    data: data[0],
    value: data[0].value,
    name: "".concat(data[0].label, "-input-checkbox"),
    id: "".concat(data[0].id, "-vh-input-checkbox"),
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add("multiple", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px',
      display: "flex",
      alignItems: "flex-start"
    }
  }, _react.default.createElement(_.default, {
    items: data,
    multi: true,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
});