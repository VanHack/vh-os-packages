"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrayOfSkills = [{
  label: "JavaScript"
}, {
  label: "React"
}, {
  label: "Docker"
}];
var ArrayOfDescriptions = [{
  label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
}, {
  label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
}, {
  label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
}];
var UserPositionExperience = {
  headline: "Full Stack Developer",
  period: "Oct 2019 - Present . 3 mos",
  skills: ArrayOfSkills,
  description: ArrayOfDescriptions
};
var UserPositionExperience2 = {
  headline: "CTO",
  period: "Oct 2019 - Present . 3 mos",
  skills: ArrayOfSkills,
  description: ArrayOfDescriptions
};
var ArrayOfUserExperience = [];
ArrayOfUserExperience.push(UserPositionExperience);
ArrayOfUserExperience.push(UserPositionExperience2);
ArrayOfUserExperience.push(UserPositionExperience2);
ArrayOfUserExperience.push(UserPositionExperience2);
ArrayOfUserExperience.push(UserPositionExperience2);
ArrayOfUserExperience.push(UserPositionExperience2);
ArrayOfUserExperience.push(UserPositionExperience2);
ArrayOfUserExperience.push(UserPositionExperience2);
ArrayOfUserExperience.push(UserPositionExperience2);
ArrayOfUserExperience.push(UserPositionExperience2);
(0, _react2.storiesOf)("Components|User Positon Experience", module).add("with Timeline", function () {
  return /*#__PURE__*/_react.default.createElement(_Grid.Container, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    headline: UserPositionExperience.headline,
    period: UserPositionExperience.period,
    skills: UserPositionExperience.skills,
    description: UserPositionExperience.description
  })));
}).add("many Timeline", function () {
  return /*#__PURE__*/_react.default.createElement(_Grid.Container, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      padding: "24px"
    }
  }, ArrayOfUserExperience.map(function (userPosition) {
    return /*#__PURE__*/_react.default.createElement(_index.default, userPosition);
  })));
}).add("without Timeline", function () {
  return /*#__PURE__*/_react.default.createElement(_Grid.Container, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    headline: "CTO",
    hideTimeline: true,
    period: "Oct 2019 - Present . 3 mos",
    skills: ArrayOfSkills,
    description: ArrayOfDescriptions
  })));
});