"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Buttons/New/Text Buttom', module).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    textButton: true,
    primary: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    textButton: true,
    secondary: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    textButton: true,
    danger: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    textButton: true,
    success: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    textButton: true,
    disabled: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
}).add('Small', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    textButton: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    textButton: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    textButton: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    success: true,
    textButton: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: true,
    textButton: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
}).add('Large', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    textButton: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    textButton: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    textButton: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    success: true,
    textButton: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: true,
    textButton: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
}).add('Full', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    textButton: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    textButton: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    textButton: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    success: true,
    textButton: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: true,
    textButton: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
});