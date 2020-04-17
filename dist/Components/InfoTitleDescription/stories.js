"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Info Title Description", module).add("Types", function () {
  return _react.default.createElement(_Grid.Row, null, _react.default.createElement(_index.default, {
    title: "Rank your top 3 skills",
    description: "Highest proficiency level; 3 = Lowest proficiency level",
    data: ""
  }), _react.default.createElement(_index.default, {
    title: "Add up to 5 secondary skills",
    data: ""
  }), _react.default.createElement(_index.default, {
    title: "Drift Way",
    rightTitle: "(5 yr 9 mos)",
    description: "E-comerce - Startup - Belo Horizonte - Brazil",
    data: ""
  }));
});