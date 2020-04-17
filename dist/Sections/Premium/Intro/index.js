"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../../../Components/TitleHighlightDescriptionButtonImage/index"));

var _index2 = _interopRequireDefault(require("../../../Components/Cards/Features/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHPremiumIntroSection = function VHPremiumIntroSection(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.default, {
    title: props.title,
    highlight: props.highlight,
    description: props.description,
    label: props.label,
    image: props.image,
    onEvent: props.onEvent,
    data: "VHTitleHighlightDescriptionButtonImage"
  }), _react.default.createElement(_index2.default, {
    features: props.features
  }));
};

VHPremiumIntroSection.propTypes = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  highlight: _propTypes.default.string,
  description: _propTypes.default.string,
  label: _propTypes.default.string,
  image: _propTypes.default.string,
  features: _propTypes.default.string
};
var _default = VHPremiumIntroSection;
exports.default = _default;