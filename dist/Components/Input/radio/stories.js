"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  text: 'Company Size',
  items: [{
    name: 'Startup'
  }, {
    name: 'Midsize'
  }, {
    name: 'Corporate'
  }]
};
(0, _react2.storiesOf)("Components|Input/Radio", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    input: true,
    maxLength: "4",
    color: "gray-100",
    variant: "platform",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    data: data
  }));
});