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
  description: "Education - Startup - Belo Horizonte - Brazil"
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
  return /*#__PURE__*/_react.default.createElement(_Grid.Container, {
    md: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 15
  }, /*#__PURE__*/_react.default.createElement(_.default, _extends({}, company, {
    userPositions: ArrayOfUserExperience
  }))));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVXNlckNvbXBhbnlQb3NpdG9uRXhwZXJpZW5jZS9zdG9yaWVzLmpzIl0sIm5hbWVzIjpbImNvbXBhbnkiLCJ0aXRsZSIsInJpZ2h0VGl0bGUiLCJkZXNjcmlwdGlvbiIsIkFycmF5T2ZTa2lsbHMiLCJsYWJlbCIsIkFycmF5T2ZEZXNjcmlwdGlvbnMiLCJVc2VyUG9zaXRpb25FeHBlcmllbmNlIiwiaGVhZGxpbmUiLCJwZXJpb2QiLCJza2lsbHMiLCJVc2VyUG9zaXRpb25FeHBlcmllbmNlMiIsIkFycmF5T2ZVc2VyRXhwZXJpZW5jZSIsInB1c2giLCJtb2R1bGUiLCJhZGQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNaQyxFQUFBQSxLQUFLLEVBQUUsUUFESztBQUVaQyxFQUFBQSxVQUFVLEVBQUUsYUFGQTtBQUdaQyxFQUFBQSxXQUFXLEVBQUU7QUFIRCxDQUFoQjtBQU1BLElBQU1DLGFBQWEsR0FBRyxDQUNsQjtBQUFDQyxFQUFBQSxLQUFLLEVBQUU7QUFBUixDQURrQixFQUVsQjtBQUFDQSxFQUFBQSxLQUFLLEVBQUU7QUFBUixDQUZrQixFQUdsQjtBQUFDQSxFQUFBQSxLQUFLLEVBQUU7QUFBUixDQUhrQixDQUF0QjtBQU1BLElBQU1DLG1CQUFtQixHQUFHLENBQ3hCO0FBQ0VELEVBQUFBLEtBQUssRUFBRTtBQURULENBRHdCLEVBSXhCO0FBQ0VBLEVBQUFBLEtBQUssRUFBRTtBQURULENBSndCLEVBT3hCO0FBQ0VBLEVBQUFBLEtBQUssRUFBRTtBQURULENBUHdCLENBQTVCO0FBWUEsSUFBTUUsc0JBQXNCLEdBQUc7QUFDM0JDLEVBQUFBLFFBQVEsRUFBRSxzQkFEaUI7QUFFM0JDLEVBQUFBLE1BQU0sRUFBRSw0QkFGbUI7QUFHM0JDLEVBQUFBLE1BQU0sRUFBRU4sYUFIbUI7QUFJM0JELEVBQUFBLFdBQVcsRUFBRUc7QUFKYyxDQUEvQjtBQU9BLElBQU1LLHVCQUF1QixHQUFHO0FBQzVCSCxFQUFBQSxRQUFRLEVBQUUsS0FEa0I7QUFFNUJDLEVBQUFBLE1BQU0sRUFBRSw0QkFGb0I7QUFHNUJDLEVBQUFBLE1BQU0sRUFBRU4sYUFIb0I7QUFJNUJELEVBQUFBLFdBQVcsRUFBRUc7QUFKZSxDQUFoQztBQU9BLElBQU1NLHFCQUFxQixHQUFHLEVBQTlCO0FBQ0lBLHFCQUFxQixDQUFDQyxJQUF0QixDQUEyQk4sc0JBQTNCO0FBQ0FLLHFCQUFxQixDQUFDQyxJQUF0QixDQUEyQkYsdUJBQTNCO0FBRUosdUJBQVUsNENBQVYsRUFBd0RHLE1BQXhELEVBRUNDLEdBRkQsQ0FFSyxTQUZMLEVBRWdCO0FBQUEsc0JBQ1osNkJBQUMsZUFBRDtBQUFXLElBQUEsRUFBRTtBQUFiLGtCQUNJLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLFlBQVksRUFBRTtBQUFuQixrQkFDSSw2QkFBQyxTQUFELGVBQ1FmLE9BRFI7QUFFSSxJQUFBLGFBQWEsRUFBRVk7QUFGbkIsS0FESixDQURKLENBRFk7QUFBQSxDQUZoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9HcmlkXCI7XG5pbXBvcnQgVkhVc2VyQ29tcGFueUV4cGVyaWVuY2UgZnJvbSBcIi5cIjtcblxuY29uc3QgY29tcGFueSA9IHtcbiAgICB0aXRsZTogJ0dvb2dsZScsXG4gICAgcmlnaHRUaXRsZTogJzIwMDYgLyAyMDA3JyxcbiAgICBkZXNjcmlwdGlvbjogXCJFZHVjYXRpb24gLSBTdGFydHVwIC0gQmVsbyBIb3Jpem9udGUgLSBCcmF6aWxcIlxufVxuXG5jb25zdCBBcnJheU9mU2tpbGxzID0gW1xuICAgIHtsYWJlbDogXCJKYXZhU2NyaXB0XCJ9LFxuICAgIHtsYWJlbDogXCJSZWFjdFwifSxcbiAgICB7bGFiZWw6IFwiRG9ja2VyXCJ9XG5dO1xuXG5jb25zdCBBcnJheU9mRGVzY3JpcHRpb25zID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIkFkIHRlbXBvciBwcm9pZGVudCBlbmltIHZlbmlhbSBkdWlzLiBPY2NhZWNhdCB2ZW5pYW0gaXJ1cmUgbWluaW0gY2lsbHVtXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkFkIHRlbXBvciBwcm9pZGVudCBlbmltIHZlbmlhbSBkdWlzLiBPY2NhZWNhdCB2ZW5pYW0gaXJ1cmUgbWluaW0gY2lsbHVtXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkFkIHRlbXBvciBwcm9pZGVudCBlbmltIHZlbmlhbSBkdWlzLiBPY2NhZWNhdCB2ZW5pYW0gaXJ1cmUgbWluaW0gY2lsbHVtXCJcbiAgICB9XG5dXG5cbmNvbnN0IFVzZXJQb3NpdGlvbkV4cGVyaWVuY2UgPSB7XG4gICAgaGVhZGxpbmU6IFwiRnVsbCBTdGFjayBEZXZlbG9wZXJcIixcbiAgICBwZXJpb2Q6IFwiT2N0IDIwMTkgLSBQcmVzZW50IC4gMyBtb3NcIixcbiAgICBza2lsbHM6IEFycmF5T2ZTa2lsbHMsXG4gICAgZGVzY3JpcHRpb246IEFycmF5T2ZEZXNjcmlwdGlvbnNcbn1cblxuY29uc3QgVXNlclBvc2l0aW9uRXhwZXJpZW5jZTIgPSB7XG4gICAgaGVhZGxpbmU6IFwiQ1RPXCIsXG4gICAgcGVyaW9kOiBcIk9jdCAyMDE5IC0gUHJlc2VudCAuIDMgbW9zXCIsXG4gICAgc2tpbGxzOiBBcnJheU9mU2tpbGxzLFxuICAgIGRlc2NyaXB0aW9uOiBBcnJheU9mRGVzY3JpcHRpb25zXG59XG5cbmNvbnN0IEFycmF5T2ZVc2VyRXhwZXJpZW5jZSA9IFtdO1xuICAgIEFycmF5T2ZVc2VyRXhwZXJpZW5jZS5wdXNoKFVzZXJQb3NpdGlvbkV4cGVyaWVuY2UpXG4gICAgQXJyYXlPZlVzZXJFeHBlcmllbmNlLnB1c2goVXNlclBvc2l0aW9uRXhwZXJpZW5jZTIpXG5cbnN0b3JpZXNPZihcIkNvbXBvbmVudHN8Q29tcGFueSBVc2VyIFBvc2l0b24gRXhwZXJpZW5jZVwiLCBtb2R1bGUpXG5cbi5hZGQoXCJkZWZhdWx0XCIsICgpID0+IChcbiAgICA8Q29udGFpbmVyIG1kPlxuICAgICAgICA8Um93IG1hcmdpbkJvdHRvbT17MTV9PlxuICAgICAgICAgICAgPFZIVXNlckNvbXBhbnlFeHBlcmllbmNlXG4gICAgICAgICAgICAgICAgey4uLmNvbXBhbnl9XG4gICAgICAgICAgICAgICAgdXNlclBvc2l0aW9ucz17QXJyYXlPZlVzZXJFeHBlcmllbmNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICAgKSlcbiJdfQ==