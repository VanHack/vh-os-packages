"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var flag_china = function flag_china(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "50",
    height: props.height || "38",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 50 38"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0H50V37.5H0V0Z",
    fill: "#DE2910"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.00005 13.875L9.37501 3.75L12.75 13.875L3.75008 7.6875H14.9999L6.00005 13.875Z",
    fill: "#FFDE00"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.6383 3.94403L17.1651 4.71373L19.4819 2.01399L19.2547 5.64749L17.3272 2.43075L20.6383 3.94403Z",
    fill: "#FFDE00"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.1437 8.38651L20.6438 7.74889L23.8263 6.15901L22.2076 9.41997L21.6786 5.70748L24.1437 8.38651Z",
    fill: "#FFDE00"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.6328 14.6191L20.6973 12.6094L24.2515 12.4558L21.4436 14.7731L22.4747 11.1676L23.6328 14.6191Z",
    fill: "#FFDE00"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.2179 18.6907L17.2863 15.7032L20.624 16.9342L17.1391 17.9872L19.4827 15.0597L19.2179 18.6907Z",
    fill: "#FFDE00"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0H50V37.5H0V0Z",
    fill: "white"
  }))));
};

var _default = flag_china;
exports.default = _default;