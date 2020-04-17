"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPreloadSkeleton = require("react-preload-skeleton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHSkeletonAvatar = function VHSkeletonAvatar(props) {
  return _react.default.createElement(_reactPreloadSkeleton.AvatarSkeleton, {
    color: props.color
  });
};

VHSkeletonAvatar.defaultProps = {};
VHSkeletonAvatar.propTypes = {};
var _default = VHSkeletonAvatar;
exports.default = _default;