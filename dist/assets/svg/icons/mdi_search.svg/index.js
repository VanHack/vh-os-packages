"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var mdi_search = function mdi_search(props) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "24",
    height: props.height || "16",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 24 16"
  }, React.createElement("g", {
    clipPath: "url(#a)"
  }, React.createElement("path", {
    fill: "#B6B2B2",
    d: "M15.5 10h-.79l-.28-.27A6.471 6.471 0 0 0 16 5.5 6.5 6.5 0 1 0 9.5 12c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 15l-4.99-5zm-6 0C7.01 10 5 7.99 5 5.5S7.01 1 9.5 1 14 3.01 14 5.5 11.99 10 9.5 10z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "a"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v15.016H0z"
  }))));
};

var _default = mdi_search;
exports.default = _default;