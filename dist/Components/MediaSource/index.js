"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHMediaSource = function VHMediaSource(props) {
  if (props.youtube) {
    var autoplay = props.autoplay ? '?autoplay=1;' : '';
    console.log("".concat(props.source).concat(autoplay));
    return /*#__PURE__*/_react.default.createElement("iframe", {
      style: {
        borderRadius: "4px"
      },
      width: props.width,
      height: props.height,
      src: "".concat(props.source).concat(autoplay),
      frameborder: "0",
      className: "vh-media-youtube-component ".concat(props.className ? props.className : ''),
      allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture;",
      allowfullscreen: true
    });
  }

  return /*#__PURE__*/_react.default.createElement("video", {
    style: {
      borderRadius: "4px"
    },
    controls: props.controls,
    width: props.width,
    height: props.height,
    className: "vh-media-source-component ".concat(props.className ? props.className : ''),
    poster: props.poster
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: props.source,
    type: props.type
  }));
};

VHMediaSource.defaultProps = {
  controls: null,
  className: ''
};
VHMediaSource.propTypes = {
  controls: _propTypes.default.bool,
  className: _propTypes.default.string,
  width: _propTypes.default.string,
  height: _propTypes.default.string
};
var _default = VHMediaSource;
exports.default = _default;