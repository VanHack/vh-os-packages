"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = require("../../Grid");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var company = {
  title: 'Google',
  rightTitle: '2006 / 2007',
  description: "Education - Startup - Brazil"
};
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
(0, _react2.storiesOf)("Components|Company User Positon Experience", module).add("default", function () {
  return _react.default.createElement(_Grid.Container, {
    md: true
  }, _react.default.createElement(_Grid.Row, {
    marginBottom: 15
  }, _react.default.createElement(_.default, _extends({}, company, {
    userPositions: ArrayOfUserExperience
  }))));
});