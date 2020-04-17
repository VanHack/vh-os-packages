"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Buttons/Primary', module).add('Default', function () {
  return _react.default.createElement(_.default, {
    primary: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add('Outlined', function () {
  return _react.default.createElement(_.default, {
    primary: true,
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add('Disabled', function () {
  return _react.default.createElement(_.default, {
    primary: true,
    outline: true,
    disabled: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add('Full size', function () {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.default, {
    disabled: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), _react.default.createElement(_.default, {
    primary: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), _react.default.createElement(_.default, {
    primary: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
});