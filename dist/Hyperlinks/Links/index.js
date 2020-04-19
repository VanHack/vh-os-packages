"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHLink = function VHLink(props) {
  return /*#__PURE__*/_react.default.createElement(_styles.default, {
    cursor: props.cursor,
    xs: props.xs,
    sm: props.sm,
    lg: props.lg,
    reverse: props.reverse,
    onClick: function onClick() {
      props.onEvent({
        type: "OnClick",
        origin: "VHLink",
        props: {
          data: props.data
        }
      });
    },
    className: "vh-link-component ".concat(props.className ? props.className : ''),
    href: props.to,
    color: props.color,
    noUnderscore: props.noUnderscore,
    white: props.white
  }, props.label);
};

VHLink.defaultProps = {
  reverse: false,
  xs: false,
  sm: true,
  lg: false,
  noUnderscore: false
};
VHLink.propTypes = {
  reverse: _propTypes.default.bool,
  sm: _propTypes.default.bool,
  xs: _propTypes.default.bool,
  lg: _propTypes.default.bool,
  label: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  color: _propTypes.default.string,
  to: _propTypes.default.string
};
var _default = VHLink;
exports.default = _default;