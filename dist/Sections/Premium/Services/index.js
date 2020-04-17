"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("../../../Components/Text/index"));

var _index3 = _interopRequireDefault(require("../../../Components/TextsImageLink/index"));

var _index4 = _interopRequireDefault(require("../../../Components/TextsImageTestimonial/index"));

var _VHPremiumServicesSec;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VHPremiumServicesSection = function VHPremiumServicesSection(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.Row, {
    alignItemsCenter: true,
    marginBottom: 40,
    style: {
      textAlign: "center"
    },
    mobileMarginBottomSM: true
  }, _react.default.createElement(_index2.default, {
    variant: "h2",
    color: "gray-90",
    text: props.sectionTitle
  })), _react.default.createElement(_index3.default, {
    title: props.title,
    highlight: props.highlight,
    description: props.description,
    imgSvg: props.imgSvg,
    reverseTop: false,
    smLabel: true,
    label: props.label,
    to: props.to,
    color: "gray-90",
    icon: props.icon,
    xsIcon: true,
    reverseBottom: false,
    onEvent: props.onEvent,
    data: "VHTextsImageLink"
  }), props.premiumOtherServices.map(function (service) {
    return _react.default.createElement(_index.Row, {
      marginTop: 120
    }, _react.default.createElement(_index4.default, {
      title: service.title,
      highlight: service.highlight,
      description: service.description,
      imgSvg: service.imgSvg,
      reverseTop: service.reverseTop,
      avatar: service.avatar,
      sizeAvatar: "md",
      testimonial: service.testimonial,
      color: "gray-90",
      reverseBottom: service.reverseBottom
    }));
  }));
};

VHPremiumServicesSection.propTypes = (_VHPremiumServicesSec = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  highlight: _propTypes.default.string,
  description: _propTypes.default.string,
  imgSvg: _propTypes.default.string,
  reverseTop: _propTypes.default.bool,
  label: _propTypes.default.string,
  to: _propTypes.default.string,
  smLabel: _propTypes.default.bool,
  icon: _propTypes.default.string,
  color: _propTypes.default.string,
  avatar: _propTypes.default.string,
  sizeAvatar: _propTypes.default.string
}, _defineProperty(_VHPremiumServicesSec, "avatar", _propTypes.default.string), _defineProperty(_VHPremiumServicesSec, "testimonial", _propTypes.default.string), _defineProperty(_VHPremiumServicesSec, "reverseBottom", _propTypes.default.bool), _defineProperty(_VHPremiumServicesSec, "premiumOtherServices", _propTypes.default.array), _VHPremiumServicesSec);
var _default = VHPremiumServicesSection;
exports.default = _default;