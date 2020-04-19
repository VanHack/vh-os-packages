"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var flag_south_africa = function flag_south_africa(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "50",
    height: props.height || "38",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 50 38"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M-0.000366481 29.8675V7.64632L16.5447 18.7569L-0.00769043 29.8675H-0.000366481Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.286 37.5065L29.8598 25.0117H56.2411V37.4992H11.286V37.5065Z",
    fill: "#0000CC"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.0995 -1.25233e-06H56.2411V12.5095H29.8525C29.8525 12.5095 10.3412 -0.12451 10.0995 -1.25233e-06Z",
    fill: "#FF0000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M-0.000366481 4.68739V7.64632L16.5447 18.7496L-0.00769043 29.8675V32.8191L20.8293 18.7569L-0.00769043 4.68739H-0.000366481Z",
    fill: "#FFCC00"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M-0.000366211 4.6874V0H6.95749L29.0176 14.9411H56.2484V22.5728H29.0176L6.95017 37.4992H-0.000366211V32.8191L20.8293 18.7569L0.00695774 4.6874H-0.000366211Z",
    fill: "#009933"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.95016 0H11.286L29.8598 12.5022H56.2411V14.9411H29.0176L6.95016 0.00732406V0ZM6.95016 37.5065H11.286L29.8598 25.0117H56.2411V22.5801H29.0176L6.95016 37.4992V37.5065Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0H50V37.5H0V0Z",
    fill: "white"
  }))));
};

var _default = flag_south_africa;
exports.default = _default;