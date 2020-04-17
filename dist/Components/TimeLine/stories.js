"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  totalDays: "21 days",
  items: [{
    createdOn: "2019-09-16T13:52:28.657",
    items: [{
      columnName: "LMIA Approved",
      userName: "Esther Flores - 2:45 am"
    }]
  }, {
    createdOn: "2019-09-22T18:32:11.657",
    items: [{
      columnName: "LMIA Approved",
      userName: "Esther Flores - 6:33 pm"
    }, {
      columnName: "Work Permit Processes",
      userName: "Esther Flores - 8:45 pm"
    }]
  }, {
    createdOn: "2019-09-24T13:24:28.657",
    items: [{
      columnName: "LMIA Approved",
      userName: "Esther Flores - 5:45 am"
    }]
  }]
};
(0, _react2.storiesOf)("Components|TimeLine", module).add("VHTimeLine", function () {
  return _react.default.createElement("div", {
    style: {
      width: "250px ",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    items: data.items,
    totalDays: data.totalDays,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
});