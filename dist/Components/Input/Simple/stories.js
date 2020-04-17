"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Input/Simple", module).add("default", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    placeholder: "VH Simple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("value", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    value: "durand",
    placeholder: "VH Simple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("loading", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    value: "durand",
    loading: true,
    placeholder: "VH Simple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("error", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    value: "durand",
    error: "error from server",
    placeholder: "VH Simple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});