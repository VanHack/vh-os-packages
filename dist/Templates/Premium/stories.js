"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Mock = _interopRequireDefault(require("./Mock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Templates|Premium", module).add("default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100%"
    }
  }, _react.default.createElement(_.default, {
    intro: _Mock.default.intro,
    onEvent: function onEvent(e) {
      console.log(e);
    },
    services: _Mock.default.services,
    pricing: _Mock.default.pricing,
    success: _Mock.default.success,
    hired: _Mock.default.hired,
    faq: _Mock.default.faq
  }));
});