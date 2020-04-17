"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.imgSvgPropTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../../assets/svg/background/img_bubble.svg/index.js"));

var _index2 = _interopRequireDefault(require("../../assets/svg/background/img_meeting.svg/index.js"));

var _index3 = _interopRequireDefault(require("../../assets/svg/background/img_premium_interview.svg/index.js"));

var _index4 = _interopRequireDefault(require("../../assets/svg/background/img_premium_profile.svg/index.js"));

var _index5 = _interopRequireDefault(require("../../assets/svg/background/img_premium_slack.svg/index.js"));

var _index6 = _interopRequireDefault(require("../../assets/svg/background/img_premium_webinar.svg/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHImgSvg = function VHImgSvg(props) {
  switch (props.imgSvg) {
    case 'bubble':
      return _react.default.createElement(_index.default, {
        className: "vh-img-svg ".concat(props.className ? props.className : '')
      });

    case "meeting":
      return _react.default.createElement(_index2.default, {
        className: "vh-img-svg ".concat(props.className ? props.className : '')
      });

    case "interview":
      return _react.default.createElement(_index3.default, {
        className: "vh-img-svg ".concat(props.className ? props.className : '')
      });

    case "profile":
      return _react.default.createElement(_index4.default, {
        className: "vh-img-svg ".concat(props.className ? props.className : '')
      });

    case "slack":
      return _react.default.createElement(_index5.default, {
        className: "vh-img-svg ".concat(props.className ? props.className : '')
      });

    case "webinar":
      return _react.default.createElement(_index6.default, {
        className: "vh-img-svg ".concat(props.className ? props.className : '')
      });

    default:
      return _react.default.createElement("span", null);
  }
};

VHImgSvg.defaultProps = {
  className: ''
};
var imgSvgPropTypes = {
  imgSvg: _propTypes.default.string
};
exports.imgSvgPropTypes = imgSvgPropTypes;
VHImgSvg.propTypes = imgSvgPropTypes;
var _default = VHImgSvg;
exports.default = _default;