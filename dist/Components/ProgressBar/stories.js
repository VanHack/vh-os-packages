"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Progress Bar', module).add('default', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    steps: 6,
    currentStep: 1,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  });
});