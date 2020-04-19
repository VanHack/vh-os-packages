"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Buttons/WhiteBorder', module).add('Outlined', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#0074D9",
      width: "100%",
      height: "200px",
      textAlign: "center",
      paddingTop: "30px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    white: true,
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }));
}).add('Disabled', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#0074D9",
      width: "100%",
      height: "200px",
      textAlign: "center",
      paddingTop: "30px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    white: true,
    outline: true,
    disabled: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }));
}).add('Full size', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#0074D9",
      width: "100%",
      height: "200px",
      textAlign: "center",
      padding: "30px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    white: true,
    outline: true,
    disabled: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_.default, {
    white: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }));
});