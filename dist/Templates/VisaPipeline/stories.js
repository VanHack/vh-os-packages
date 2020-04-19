"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _OffersMock = _interopRequireDefault(require("./OffersMock"));

var _ = _interopRequireDefault(require("."));

var _WorkPermitMock = _interopRequireDefault(require("./WorkPermitMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MockData = [_OffersMock.default, _WorkPermitMock.default];
(0, _react2.storiesOf)("Templates|VisaPipeline", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    data: MockData
  });
});