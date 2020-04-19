"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Buttons/New/Outlined', module).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    success: true,
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: true,
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
}).add('Small', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    outline: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    outline: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    outline: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    success: true,
    outline: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: true,
    outline: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
}).add('Large', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    outline: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    outline: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    outline: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    success: true,
    outline: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: true,
    outline: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
}).add('Full', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    success: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
});