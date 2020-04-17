"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../Chips/index"));

var _index2 = _interopRequireDefault(require("../BlackTitleDescription/index"));

var _index3 = _interopRequireDefault(require("../IconTitleList/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHUserPositonExperience = function VHUserPositonExperience(props) {
  return _react.default.createElement(_Grid.Row, null, _react.default.createElement(S.Wrapper, {
    hideTimeline: props.hideTimeline
  }, _react.default.createElement(_Grid.Row, {
    marginBottom: 3
  }, _react.default.createElement(_index2.default, {
    title: props.headline,
    description: props.period,
    onEvent: props.onEvent,
    rightTitle: props.rightTitle,
    className: "vh-user-position-experience ".concat(props.className ? props.className : '')
  })), _react.default.createElement(_Grid.Row, {
    marginBottom: 3
  }, _react.default.createElement(_index3.default, {
    onEvent: props.onEvent,
    items: props.description,
    color: "gray-30",
    className: "vh-user-position-experience-title-list ".concat(props.className ? props.className : '')
  })), _react.default.createElement(_Grid.Row, {
    row: true
  }, props.skills.map(function (skill) {
    return _react.default.createElement(_index.default, {
      label: skill.label,
      transparent: true,
      round: true,
      noHover: true,
      marginRight: true,
      onEvent: props.onEvent,
      className: "vh-user-position-experience-chip ".concat(props.className ? props.className : '')
    });
  }))));
};

VHUserPositonExperience.defaultProps = {
  onEvent: null,
  hideTimeline: false,
  className: "",
  transparent: true,
  round: true,
  marginRight: true
};
VHUserPositonExperience.propTypes = {
  onEvent: _propTypes.default.func,
  headline: _propTypes.default.string.isRequired,
  period: _propTypes.default.string.isRequired,
  hideTimeline: _propTypes.default.bool,
  rightTitle: _propTypes.default.string,
  description: _propTypes.default.array.isRequired,
  skills: _propTypes.default.array,
  className: _propTypes.default.string
};
var _default = VHUserPositonExperience;
exports.default = _default;