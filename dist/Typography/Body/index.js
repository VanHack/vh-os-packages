"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHBody = function VHBody(props) {
  return /*#__PURE__*/_react.default.createElement(_styles.default, {
    xs: props.xs,
    sm: props.sm,
    lg: props.lg,
    reverse: props.reverse,
    className: "vh-body-component ".concat(props.className ? props.className : '')
  }, props.label);
};

VHBody.defaultProps = {
  reverse: false,
  xs: false,
  sm: true,
  lg: false
};
VHBody.propTypes = {
  reverse: _propTypes.default.bool,
  sm: _propTypes.default.bool,
  xs: _propTypes.default.bool,
  lg: _propTypes.default.bool,
  className: _propTypes.default.string,
  label: _propTypes.default.string.isRequired
};
var _default = VHBody;
exports.default = _default;