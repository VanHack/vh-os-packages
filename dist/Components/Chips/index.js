"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconPropTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHChips = function VHChips(props) {
  return /*#__PURE__*/_react.default.createElement(_styles.default, {
    primary: props.primary,
    secondary: props.secondary,
    danger: props.danger,
    full: props.full,
    transparent: props.transparent,
    disabled: props.disabled,
    round: props.round,
    noHover: props.noHover,
    className: "vh-chip-component ".concat(props.className ? props.className : ''),
    xs: props.xs,
    sm: props.sm,
    lg: props.lg,
    marginRight: props.marginRight,
    type: "button",
    onClick: function onClick() {
      if (props.onEvent) props.onEvent({
        target: 'VHChips',
        event: 'onClick',
        data: {
          label: props.label
        }
      });
    }
  }, props.label);
};

VHChips.defaultProps = {
  className: ''
};
var IconPropTypes = {
  label: _propTypes.default.string.isRequired,
  className: _propTypes.default.string
};
exports.IconPropTypes = IconPropTypes;
VHChips.propTypes = IconPropTypes;
var _default = VHChips;
exports.default = _default;