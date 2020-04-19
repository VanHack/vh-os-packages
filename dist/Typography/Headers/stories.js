"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Typography|Headers', module).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    h1: true,
    label: "H1 - med 36/48"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    h2: true,
    label: "H2 - med 32/40"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    h3: true,
    label: "H3 - med 28/36"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    h4: true,
    label: "H4 - med 24/32"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    h5: true,
    label: "H5 - med 20/24"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    h6: true,
    label: "H6 - med 16/20"
  }));
}).add('Reverse', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: _Colors.default["primary-dark"],
      padding: '8px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    h1: true,
    label: "H1 - med 36/48"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    h2: true,
    label: "H2 - med 32/40"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    h3: true,
    label: "H3 - med 28/36"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    h4: true,
    label: "H4 - med 24/32"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    h5: true,
    label: "H5 - med 20/24"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    h6: true,
    label: "H6 - med 16/20"
  }));
});