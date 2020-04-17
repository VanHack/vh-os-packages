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

var _SecondaryList = _interopRequireDefault(require("../SecondaryList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThirdStep = function ThirdStep(props) {
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
  })), _react.default.createElement(_Grid.Row, {
    width: '70%'
  }, _react.default.createElement(_Text.default, {
    variant: "h4",
    color: "gray-90",
    text: 'Secondary Skills'
  }))), _react.default.createElement(_Grid.Row, {
    column: true,
    height: '200px'
  }, _react.default.createElement(_Grid.Row, {
    column: true,
    marginBottom: 2
  }, _react.default.createElement(_TitleDescription.default, {
    contents: true,
    className: "vh-general-section-topSkill-description ".concat(props.className ? props.className : ''),
    onEvent: props.onEvent,
    title: "Add 5 secondary skills",
    titleColor: props.controls.secondarySkill.loading ? "gray-40" : props.controls.secondarySkill.error ? "red" : "gray-100",
    titleVariant: "subtitle1"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_SecondaryList.default, {
    controls: props.controls,
    onEvent: props.onEvent,
    secondList: props.yearsOfExperienceList,
    list: props.skillList,
    items: props.secondarySkill,
    data: "vanhack"
  }))));
};

ThirdStep.defaultProps = {
  className: ""
};
ThirdStep.propTypes = {
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = ThirdStep;
exports.default = _default;