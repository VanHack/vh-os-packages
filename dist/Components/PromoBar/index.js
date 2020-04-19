"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../Text/index"));

var _index2 = _interopRequireDefault(require("../Button/index"));

var _index3 = _interopRequireDefault(require("../../Hyperlinks/Links/index"));

var _index4 = _interopRequireDefault(require("../Timer/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHPromoBar = function VHPromoBar(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    className: "vh-promo-bar ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    color: props.backgroundColor ? props.backgroundColor : 'gray-30'
  }, /*#__PURE__*/_react.default.createElement(_Grid.Container, {
    md: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    style: {
      marginTop: "6px"
    }
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    mobileDisplayNone: true
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      marginRight: "3px"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "subtitle2",
    color: "gray-10",
    text: "Special Offer:"
  })), /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "subtitle3",
    color: "gray-10",
    text: props.textPromo
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      marginLeft: "22px"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "subtitle3",
    color: "gray-10",
    text: "Sale ends in"
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    justifyBottom: true
  }, /*#__PURE__*/_react.default.createElement(_index4.default, {
    endDate: props.endDate
  }), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    marginRight: 1,
    marginLeft: 3
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: "100px"
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    label: props.label,
    full: true,
    lg: true,
    onEvent: props.onEvent,
    data: "VHPromoBar",
    black: true
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    justifyBottom: true,
    style: {
      cursor: "pointer"
    },
    mobileDisplayNone: true
  }, /*#__PURE__*/_react.default.createElement(_index3.default, {
    white: true,
    xl: true,
    noUnderscore: true,
    label: "Dismiss",
    onEvent: props.onEvent,
    data: "DismissPromoBar"
  })))))));
};

VHPromoBar.defaultProps = {
  onEvent: null,
  className: ""
};
VHPromoBar.propTypes = {
  onEvent: _propTypes.default.func,
  className: _propTypes.default.string
};
var _default = VHPromoBar;
exports.default = _default;