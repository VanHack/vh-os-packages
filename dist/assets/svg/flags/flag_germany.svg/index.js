"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var flag_germany = function flag_germany(props) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "50",
    height: props.height || "38",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 50 38"
  }, React.createElement("g", {
    clipPath: "url(#prefix__clip0)"
  }, React.createElement("path", {
    fill: "#FFCE00",
    d: "M0 25h50v12.5H0V25z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M0 0h50v12.5H0V0z"
  }), React.createElement("path", {
    fill: "#D00",
    d: "M0 12.5h50V25H0V12.5z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "prefix__clip0"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h50v37.5H0V0z"
  }))));
};

var _default = flag_germany;
exports.default = _default;