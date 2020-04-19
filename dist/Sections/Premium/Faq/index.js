"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("../../../Components/Text/index"));

var _index3 = _interopRequireDefault(require("../../../Components/TitleDescriptionImage/index"));

var _index4 = _interopRequireDefault(require("../../../Components/Input/SimpleWithButton/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHPremiumFaqSection = function VHPremiumFaqSection(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.Row, {
    alignItemsCenter: true,
    marginBottom: 20,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "h2",
    color: "gray-100",
    text: props.sectionTitle
  })), /*#__PURE__*/_react.default.createElement(_index.Row, {
    row: true,
    responsive: true
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    width: "50%",
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    width: "80%",
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    marginBottom: 12,
    style: {
      marginLeft: "30px"
    },
    mobileTxtCenter: true
  }, /*#__PURE__*/_react.default.createElement(_index3.default, {
    title: props.title,
    description: props.description,
    imgSvg: "meeting"
  })), props.assigned ? /*#__PURE__*/_react.default.createElement(_index.Row, {
    marginBottom: 12
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "h6",
    color: "gray-90",
    text: "Thank you for subscribing!"
  })) : /*#__PURE__*/_react.default.createElement(_index.Row, {
    marginBottom: 6,
    style: {
      backgroundColor: "#ffffff"
    }
  }, /*#__PURE__*/_react.default.createElement(_index4.default, {
    placeholder: "E-mail",
    label: "SEND",
    onEvent: props.onEvent,
    data: "VHInputSimpleWithButton"
  })))), /*#__PURE__*/_react.default.createElement(_index.Row, {
    width: "50%",
    alignItemsCenter: true
  }, props.faqs.map(function (faq) {
    return /*#__PURE__*/_react.default.createElement(_index.Row, {
      width: "80%",
      alignItemsCenter: true,
      marginBottom: 8,
      style: {
        padding: "20px"
      },
      mobileTxtCenter: true
    }, /*#__PURE__*/_react.default.createElement(_index.Row, {
      marginBottom: 3
    }, /*#__PURE__*/_react.default.createElement(_index2.default, {
      variant: "h4",
      color: "gray-90",
      text: faq.question
    })), /*#__PURE__*/_react.default.createElement(_index.Row, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
      variant: "h6",
      color: "gray-90",
      text: faq.answer
    })));
  }))));
};

VHPremiumFaqSection.propTypes = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string,
  sectionTitle: _propTypes.default.string,
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  imgSvg: _propTypes.default.string,
  question: _propTypes.default.string,
  answer: _propTypes.default.string
};
var _default = VHPremiumFaqSection;
exports.default = _default;