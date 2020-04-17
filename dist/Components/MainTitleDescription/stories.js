"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Main Title Description", module).add("Types", function (props) {
  return _react.default.createElement(_Grid.Row, null, _react.default.createElement(_index.default, {
    title: "Valgariam",
    description: "E-comerce - Startup - Belo Horizonte - Brazil",
    data: "data"
  }), _react.default.createElement(_index.default, {
    title: "Drift Way",
    rightTitle: "(5 yr 9 mos)",
    description: "E-comerce - Startup - Belo Horizonte - Brazil",
    data: "data"
  }));
});