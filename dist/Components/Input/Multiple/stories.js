"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = JSON.stringify([{
  id: 1,
  value: 'Durand',
  loading: false
}, {
  id: 2,
  value: 'Robson',
  error: true
}]); // const items = []
// const items = '[{"id":1,"value":"Durand Neto"},{"id":2,"value":"Robson"},{"value":"asdas"}]'

(0, _react2.storiesOf)("Components|Input/Multiple", module).add("default", function () {
  return _react.default.createElement("div", {
    style: {
      width: '90%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    max: 5,
    items: items,
    placeholder: "VH Multiple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("loading", function () {
  return _react.default.createElement("div", {
    style: {
      width: '90%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    loading: true,
    max: 5,
    items: items,
    placeholder: "VH Multiple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("error", function () {
  return _react.default.createElement("div", {
    style: {
      width: '90%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    error: true,
    max: 5,
    items: items,
    placeholder: "VH Multiple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});