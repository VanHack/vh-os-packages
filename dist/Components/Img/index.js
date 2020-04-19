"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconPropTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = {
  w: 18,
  h: 18
};
var styles = {};

var VHImg = function VHImg(props) {
  switch (true) {
    default:
    case props.xs:
      size = {
        w: 18,
        h: 18
      };
      break;

    case props.sm:
      size = {
        w: 24,
        h: 24
      };
      break;

    case props.md:
      size = {
        w: 36,
        h: 36
      };
      break;

    case props.lg:
      size = {
        w: 48,
        h: 48
      };
      break;
  }

  return /*#__PURE__*/_react.default.createElement("img", {
    src: props.source,
    alt: props.title,
    title: props.title,
    width: size.w,
    height: size.h,
    style: styles,
    className: "vh-img ".concat(props.className ? props.className : '')
  });
};

VHImg.defaultProps = {
  className: ''
};
var IconPropTypes = {
  source: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  className: _propTypes.default.string
};
exports.IconPropTypes = IconPropTypes;
VHImg.propTypes = IconPropTypes;
var _default = VHImg;
exports.default = _default;