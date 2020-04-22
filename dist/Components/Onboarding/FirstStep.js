"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Colors = _interopRequireDefault(require("../../Colors"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = _interopRequireDefault(require("../Text"));

var _Select = _interopRequireDefault(require("../Input/Select"));

var _radio = _interopRequireDefault(require("../Input/radio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FirstStep = function FirstStep(props) {
  var positions = props.positions;
  var position = props.positionSkill != undefined ? positions.find(function (element) {
    return element.value === props.positionSkill;
  }) : {};
  var yearsOfExperienceList = props.yearsOfExperienceList;
  var yearsOfExperience = props.yearsOfExperience != undefined ? yearsOfExperienceList.find(function (element) {
    return element.value === props.yearsOfExperience;
  }) : {};
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    marginBottom: 10,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    autoWidth: true,
    marginRight: 5
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: 'experience',
    title: "city",
    md: true,
    color: "gray-50"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "h4",
    color: "gray-90",
    text: 'Professional Overview'
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.preLoading,
    caption: "Which role best applies to your experience?",
    captionColor: props.controls.positionSkill.loading ? "gray-40" : props.controls.positionSkill.error ? "red" : 'gray-90',
    className: "vh-skills-section-positionSkill ".concat(props.className ? props.className : ''),
    currentItem: position,
    data: "positionSkill",
    onEvent: props.onEvent,
    items: positions,
    isLoading: props.controls.positionSkill.loading,
    description: props.controls.positionSkill.error && props.controls.positionSkill.message,
    descriptionColor: "red"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '70%',
    marginBottom5: true
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.preLoading,
    caption: "For how many years have you been working as an IT professional?",
    captionColor: props.controls.yearsOfExperience.loading ? "gray-40" : props.controls.yearsOfExperience.error ? "red" : 'gray-90',
    className: "vh-skills-section-yearsOfExperience ".concat(props.className ? props.className : ''),
    currentItem: yearsOfExperience,
    data: "yearsOfExperience",
    onEvent: props.onEvent,
    items: yearsOfExperienceList,
    isLoading: props.controls.yearsOfExperience.loading,
    description: props.controls.yearsOfExperience.error && props.controls.yearsOfExperience.message,
    descriptionColor: "red"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_radio.default, {
    data: 'activelyLookingForJob',
    color: "gray-90",
    variant: "platform1",
    onEvent: props.onEvent,
    text: 'Are you actively looking for a job?',
    checked: props.activelyLookingForJob
  })));
};

FirstStep.defaultProps = {
  className: ""
};
FirstStep.propTypes = {
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = FirstStep;
exports.default = _default;