"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var flag_uk = function flag_uk(props) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "50",
    height: props.height || "38",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 50 38"
  }, React.createElement("g", {
    clipPath: "url(#prefix__clip0)"
  }, React.createElement("path", {
    fill: "#012169",
    d: "M-12.55 0h75.2v37.6h-75.2V0z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M-12.55 0v4.2l66.792 33.4h8.408v-4.2L-4.14 0h-8.409zm75.2 0v4.2L-4.14 37.6h-8.409v-4.2L54.242 0h8.408z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M18.786 0v37.6h12.528V0H18.786zM-12.55 12.536v12.528h75.2V12.536h-75.2z"
  }), React.createElement("path", {
    fill: "#C8102E",
    d: "M-12.55 15.04v7.52h75.2v-7.52h-75.2zM21.29 0v37.6h7.52V0h-7.52zm-33.84 37.6l25.064-12.536h5.611L-6.947 37.6h-5.603zm0-37.6l25.064 12.536H6.911l-19.46-9.73V0zm44.533 12.536L57.047 0h5.603L37.586 12.536h-5.603zM62.65 37.6L37.586 25.064h5.603l19.461 9.73V37.6z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "prefix__clip0"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h50v37.5H0V0z"
  }))));
};

var _default = flag_uk;
exports.default = _default;