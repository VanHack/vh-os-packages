"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Chips', module).add('primary', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    marginRight: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    marginRight: true,
    transparent: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip transparent"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    marginRight: true,
    danger: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    marginRight: true,
    danger: true,
    transparent: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip transparent"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    marginRight: true,
    secondary: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    marginRight: true,
    secondary: true,
    transparent: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip transparent"
  }));
}).add('round', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    round: true,
    primary: true,
    marginRight: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    round: true,
    primary: true,
    marginRight: true,
    transparent: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip transparent"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    round: true,
    marginRight: true,
    danger: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    round: true,
    marginRight: true,
    danger: true,
    transparent: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip transparent"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    round: true,
    marginRight: true,
    secondary: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    round: true,
    marginRight: true,
    secondary: true,
    transparent: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip transparent"
  }));
});