"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var features = [{
  icon: "interview",
  title: "Improve your Interviewing Skills",
  description: "We help you learn the cultural and professional nuances with 40+ hours of live classes every month"
}, {
  icon: "profile",
  title: "Craft a world-class professional profile",
  description: "Our experts will help you update your profile. Using the right  format can make all the difference in your quest for an international job"
}, {
  icon: "community",
  title: "Network with a global community",
  description: "Join thousands of motivated premium members from all over the world. Learn from your peers in a judgement-free environment"
}];
(0, _react2.storiesOf)("Components|Cards/Features", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f8fc",
      padding: "24px"
    }
  }, _react.default.createElement(_index.Row, null, _react.default.createElement(_index2.default, {
    features: features
  })));
});