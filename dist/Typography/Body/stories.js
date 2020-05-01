"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Colors = _interopRequireDefault(require("../../Colors"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Typography|Body/Default', module).add('xs', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    xs: true,
    label: "body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.\r Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy."
  }));
}).add('sm', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    sm: true,
    label: "body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.\r Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy."
  }));
}).add('lg', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    lg: true,
    label: "body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.\r Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy."
  }));
});
(0, _react2.storiesOf)('typography|Body/Reverse', module).add('xs', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: _Colors.default["primary-dark"],
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    xs: true,
    label: "body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.\r Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy."
  }));
}).add('sm', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: _Colors.default["primary-dark"],
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    sm: true,
    label: "body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.\r Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy."
  }));
}).add('lg', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: _Colors.default["primary-dark"],
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    lg: true,
    label: "body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.\r Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy."
  }));
});