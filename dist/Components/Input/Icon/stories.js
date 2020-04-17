"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Input/Icon", module).add("default", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    placeholder: "http://Isobelle.com/",
    value: "http://Isobelle.com/",
    icon: "world",
    data: {},
    onEvent: function onEvent() {
      return console.log(event);
    }
  }));
}).add("gitHub", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    placeholder: "http://github.com/",
    value: "http://github.com/",
    icon: "github",
    data: {},
    onEvent: function onEvent() {
      return console.log(event);
    }
  }), _react.default.createElement(_.default, {
    placeholder: "http://github.com/",
    value: "http://github.com/",
    icon: "github",
    data: {},
    loading: true,
    onEvent: function onEvent() {
      return console.log(event);
    }
  }));
}).add("linkedIn", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    placeholder: "http://linkedIn.com/",
    value: "http://linkedIn.com/",
    icon: "linkedin",
    data: {},
    onEvent: function onEvent() {
      return console.log(event);
    }
  }));
});