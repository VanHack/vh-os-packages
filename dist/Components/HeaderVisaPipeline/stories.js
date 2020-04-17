"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Header Visa Pipeline', module).add('Header', function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: _Colors.default['gray-10'],
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
    title: "Visa Pipeline",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    inputPlaceholder: "Search for companies, vanhackers, position...",
    inputValue: "search"
  }));
});