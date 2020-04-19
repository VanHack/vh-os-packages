"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("../../../Components/Text/index"));

var _index3 = _interopRequireDefault(require("../../../Components/TextHighlightDescriptionImage/index"));

var _index4 = _interopRequireDefault(require("../../../Components/ImgCardsOverlay/index"));

var _index5 = _interopRequireDefault(require("../../../Components/ImgVideoIconText/index"));

var _index6 = _interopRequireDefault(require("../../../Components/MediaSource/index"));

var _index7 = _interopRequireDefault(require("../../../Hyperlinks/LinkImage/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHPremiumSuccessCasesSection = function VHPremiumSuccessCasesSection(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.Container, null, /*#__PURE__*/_react.default.createElement(_index.Row, {
    alignItemsCenter: true,
    marginBottom: 20
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "h2",
    color: "gray-100",
    text: props.sectionTitle
  })), /*#__PURE__*/_react.default.createElement(_index.Row, {
    row: true,
    responsive: true
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    mobileDisplayNone: true
  }, /*#__PURE__*/_react.default.createElement(_index3.default, {
    title: props.title,
    highlight: props.highlight
  })), /*#__PURE__*/_react.default.createElement(_index.Row, null, /*#__PURE__*/_react.default.createElement(_index4.default, {
    imgSvg: props.imgBackgroundCards,
    cardLeftTitle: props.cardLeftTitle,
    cardLeftDescription: props.cardLeftDescription,
    cardRightTitle: props.cardRightTitle,
    cardRightDescription: props.cardRightDescription
  }))), /*#__PURE__*/_react.default.createElement(_index.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    marginBottom: 8,
    marginTop: 50,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    responsive: true,
    className: "test"
  }, /*#__PURE__*/_react.default.createElement(_index6.default, {
    source: props.source,
    youtube: true,
    controls: props.control,
    poster: props.poster,
    width: "100%",
    height: "100%"
  }))), /*#__PURE__*/_react.default.createElement(_index.Row, null, /*#__PURE__*/_react.default.createElement(_index7.default, {
    lgLabel: true,
    label: props.label,
    to: props.to,
    icon: props.iconLink,
    smIcon: true,
    reverse: true,
    onEvent: props.onEvent,
    data: "VHLinkImage"
  }))))));
};

VHPremiumSuccessCasesSection.propTypes = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string,
  sectionTitle: _propTypes.default.string,
  title: _propTypes.default.string,
  highlight: _propTypes.default.string,
  imgBackgroundCards: _propTypes.default.string,
  cardLeftTitle: _propTypes.default.string,
  cardLeftDescription: _propTypes.default.string,
  cardRightTitle: _propTypes.default.string,
  cardRightDescription: _propTypes.default.string,
  controls: _propTypes.default.bool,
  youtube: _propTypes.default.bool,
  source: _propTypes.default.string,
  poster: _propTypes.default.string,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  label: _propTypes.default.string,
  to: _propTypes.default.string,
  iconLink: _propTypes.default.string
};
var _default = VHPremiumSuccessCasesSection;
exports.default = _default;