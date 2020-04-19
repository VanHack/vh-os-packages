"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var activities = {
  "totalDays": "21 days",
  "days": [{
    "date": "2019-01-24T17:42:41.587",
    "steps": [{
      "step": "LMIA Approved",
      "user": "Esther Flores",
      "time": "11:52pm"
    }]
  }, {
    "date": "2019-01-09T17:42:41.587",
    "steps": [{
      "step": "LMIA Applied",
      "user": "Esther Flores",
      "time": "9:33 pm"
    }, {
      "step": "Work Permit Processes",
      "user": "Esther Flores",
      "time": "10:30 am"
    }]
  }, {
    "date": "2019-01-03T17:42:41.587",
    "steps": [{
      "step": "Offer Accepted",
      "user": "Esther Flores",
      "time": "5:06 pm"
    }]
  }]
};
(0, _react2.storiesOf)("Components|Activity", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    activities: activities
  });
});