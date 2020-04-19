"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var flag_ireland = function flag_ireland(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "53",
    height: props.height || "40",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 53 40"
  }, /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    clipPath: "url(#prefix__clip0)",
    clipRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h53v39.75H0V0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#009A49",
    d: "M0 0h17.664v39.75H0V0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FF7900",
    d: "M35.336 0H53v39.75H35.336V0z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "prefix__clip0"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h53v39.75H0V0z"
  }))));
};

var _default = flag_ireland;
exports.default = _default;