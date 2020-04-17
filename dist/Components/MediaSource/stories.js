"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _index = _interopRequireDefault(require("../../assets/svg/logo/vanhack_logo.svg/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Source|Video', module).add('default', function () {
  return _react.default.createElement(_.default, {
    source: "https://www.radiantmediaplayer.com/media/bbb-360p.mp4",
    poster: _index.default
  });
}).add('default with control', function () {
  return _react.default.createElement(_.default, {
    source: "https://www.radiantmediaplayer.com/media/bbb-360p.mp4",
    controls: true,
    poster: _index.default
  });
}).add('default with youtube', function () {
  return _react.default.createElement(_.default, {
    source: "https://www.youtube.com/embed/2QLM0AQLfgw",
    youtube: true,
    controls: true,
    poster: _index.default
  });
});