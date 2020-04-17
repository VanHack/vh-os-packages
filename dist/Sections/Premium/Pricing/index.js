"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("../../../Components/Text/index"));

var _index3 = _interopRequireDefault(require("../../../Components/Cards/Pricing/index"));

var _index4 = _interopRequireDefault(require("../../../Components/TitleDescription/index"));

var _index5 = _interopRequireDefault(require("../../../Components/Icon/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHPremiumPricingSection = function VHPremiumPricingSection(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.Row, {
    alignItemsCenter: true
  }, _react.default.createElement(_index2.default, {
    variant: "h4",
    color: "tertiary-dark",
    text: props.sectionTitle
  })), _react.default.createElement(_index.Row, {
    row: true,
    marginTop: 50,
    marginBottom: 10,
    style: {
      justifyContent: "center"
    },
    alignItemsCenter: true,
    responsive: true
  }, props.cardItems.map(function (item) {
    return _react.default.createElement(_index.Row, {
      width: "360px",
      style: {
        padding: "10px"
      }
    }, _react.default.createElement(_index3.default, {
      show: item.show,
      label: item.label,
      save: item.save,
      period: item.period,
      price: item.price,
      unit: item.unit,
      subscription: item.subscription,
      cta: item.cta,
      note: item.note,
      noHover: true,
      noHoverChip: item.noHoverChip,
      transparentChip: item.transparentChip,
      round: item.round,
      outlineBtn: item.outlineBtn,
      secondaryBtn: item.secondaryBtn,
      onEvent: props.onEvent,
      data: "VHCardPrincing"
    }));
  })), _react.default.createElement(_index.Row, {
    marginBottom5: true,
    alignItemsCenter: true
  }, _react.default.createElement(_index5.default, {
    icon: props.icon,
    md: true
  })), _react.default.createElement(_index.Row, {
    alignItemsCenter: true
  }, _react.default.createElement(_index.Row, {
    width: "50%",
    style: {
      textAlign: "center"
    }
  }, _react.default.createElement(_index4.default, {
    titleColor: "h4",
    descriptionColor: "gray-80",
    titleVariant: "platform",
    descriptionVariant: "gray-80",
    title: props.title,
    description: props.description
  }))));
};

VHPremiumPricingSection.propTypes = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string,
  sectionTitle: _propTypes.default.string,
  icon: _propTypes.default.string,
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  show: _propTypes.default.bool,
  label: _propTypes.default.string,
  save: _propTypes.default.string,
  period: _propTypes.default.string,
  price: _propTypes.default.string,
  unit: _propTypes.default.string,
  subscription: _propTypes.default.string,
  cta: _propTypes.default.string,
  note: _propTypes.default.string,
  noHover: _propTypes.default.bool,
  noHoverChip: _propTypes.default.bool,
  transparentChip: _propTypes.default.bool,
  round: _propTypes.default.bool,
  outlineBtn: _propTypes.default.bool,
  secondaryBtn: _propTypes.default.bool
};
var _default = VHPremiumPricingSection;
exports.default = _default;