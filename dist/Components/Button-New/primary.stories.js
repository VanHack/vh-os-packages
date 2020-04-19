"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Buttons/New/Primary', module).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    success: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
}).add('Small', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    success: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: true,
    sm: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
}).add('Large', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    success: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: true,
    lg: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
}).add('Full', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    success: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
});