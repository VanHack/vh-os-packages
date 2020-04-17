"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Testimonial', module).add('default', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    sizeImg: "md",
    testimonial: "\u201DAll their tips were very valuable!\u201D - First Last Name",
    color: "gray-90"
  }));
}).add('xs', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    sizeImg: "sm",
    testimonial: "\u201DAll their tips were very valuable!\u201D - First Last Name",
    color: "gray-90",
    xs: true
  }));
}).add('sm', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    sizeImg: "sm",
    testimonial: "\u201DAll their tips were very valuable!\u201D - First Last Name",
    color: "gray-90",
    sm: true
  }));
}).add('lg', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    sizeImg: "lg",
    testimonial: "\u201DAll their tips were very valuable!\u201D - First Last Name",
    color: "gray-90",
    lg: true
  }));
});