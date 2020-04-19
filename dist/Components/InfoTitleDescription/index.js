"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../TitleDescription/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHInfoTitleDescription = function VHInfoTitleDescription(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    className: "vh-info-title-description",
    data: props.data,
    description: props.rightTitle,
    descriptionColor: "gray-30",
    descriptionVariant: "platform1",
    inline: true,
    title: props.title,
    titleColor: "gray-90",
    titleVariant: "subtitle3"
  }), /*#__PURE__*/_react.default.createElement(_index.default, {
    className: "vh-info-title-description",
    data: props.data,
    title: props.description,
    titleColor: "gray-50",
    titleVariant: "platform1"
  }));
};

VHInfoTitleDescription.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  rightTitle: _propTypes.default.string,
  description: _propTypes.default.string,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHInfoTitleDescription;
exports.default = _default;