"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = {
  textPromo: "Get up to 50% off on VanHack Premium",
  label: "Get 50% off",
  endDate: new Date(),
  backgroundColor: 'red'
};
(0, _react2.storiesOf)("Components|Promo Bar", module).add("Types", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_.default, {
    textPromo: items.textPromo,
    label: items.label,
    endDate: items.endDate.setDate(items.endDate.getDate() + 2),
    backgroundColor: items.backgroundColor,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});