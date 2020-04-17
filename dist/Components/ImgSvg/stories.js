"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Source|Img Svg', module).add('VHImgSvg', function () {
  return _react.default.createElement(_.default, {
    imgSvg: "meeting"
  });
});