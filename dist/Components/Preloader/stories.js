"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Preloader', module).add('VHPreloader type bubble default', function () {
  return _react.default.createElement(_.default, {
    type: "bubble"
  });
}).add('VHPreloader type bubble md', function () {
  return _react.default.createElement(_.default, {
    type: "bubble",
    size: "md"
  });
}).add('VHPreloader type bubble sm', function () {
  return _react.default.createElement(_.default, {
    type: "bubble",
    size: "sm"
  });
}).add('VHPreloader type bubble xs', function () {
  return _react.default.createElement(_.default, {
    type: "bubble",
    size: "xs"
  });
}).add('VHPreloader type circle default', function () {
  return _react.default.createElement(_.default, {
    type: "circle"
  });
}).add('VHPreloader sm', function () {
  return _react.default.createElement(_.default, {
    type: "circle",
    size: "sm"
  });
}).add('VHPreloader xs', function () {
  return _react.default.createElement(_.default, {
    type: "circle",
    size: "xs"
  });
}).add('VHLoading Full Page', function () {
  return _react.default.createElement(_.default, {
    type: "fullPage",
    size: "xs"
  });
});