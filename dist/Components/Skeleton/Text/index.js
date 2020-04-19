"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

var _reactPreloadSkeleton = require("react-preload-skeleton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHSkeletonText = function VHSkeletonText(props) {
  return /*#__PURE__*/_react.default.createElement(_reactPreloadSkeleton.TextSkeleton, {
    color: props.color
  });
};

VHSkeletonText.defaultProps = {};
VHSkeletonText.propTypes = {};
var _default = VHSkeletonText;
exports.default = _default;