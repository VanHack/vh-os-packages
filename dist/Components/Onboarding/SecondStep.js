"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = _interopRequireDefault(require("../Text"));

var _TitleDescription = _interopRequireDefault(require("../TitleDescription"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SecondStep = function SecondStep(props) {
  return _react.default.createElement(_Grid.Row, {
    column: true
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    marginBottom: 10,
    alignItemsCenter: true
  }, _react.default.createElement(_Grid.Row, {
    autoWidth: true,
    marginRight: 5
  }, _react.default.createElement(_Icon.default, {
    icon: 'skills',
    title: "city",
    md: true,
    color: "gray-50"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Text.default, {
    variant: "h4",
    color: "gray-90",
    text: 'Top Skills'
  }))), _react.default.createElement(_Grid.Row, {
    column: true
  }, _react.default.createElement(_Grid.Row, {
    column: true,
    marginBottom5: true
  }, _react.default.createElement(_TitleDescription.default, {
    contents: true,
    className: "vh-general-section-topSkill-description ".concat(props.className ? props.className : ''),
    onEvent: props.onEvent,
    title: "Rank your top 3 skills",
    titleColor: props.controls.topSkill.loading ? "gray-40" : props.controls.topSkill.error ? "red" : "gray-100",
    titleVariant: "subtitle1",
    description: "1st = Highest proficiency level; 3rd = Lowest proficiency level",
    descriptionColor: props.controls.topSkill.loading ? "gray-40" : props.controls.topSkill.error ? "red" : "gray-50"
  })), _react.default.createElement(_Grid.Row, {
    marginBottom5: true
  }, _react.default.createElement(_List.default, {
    controls: props.controls,
    onEvent: props.onEvent,
    secondList: props.yearsOfExperienceList,
    list: props.skillList,
    items: props.topSkill,
    data: "vanhack"
  }))));
};

SecondStep.defaultProps = {
  className: ""
};
SecondStep.propTypes = {
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = SecondStep;
exports.default = _default;