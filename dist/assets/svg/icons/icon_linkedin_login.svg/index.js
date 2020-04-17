"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var icon_linkedin_login = function icon_linkedin_login(props) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "24",
    height: props.height || "24",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 24 24"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "#fff"
  }), React.createElement("path", {
    fill: "#007AB9",
    fillRule: "evenodd",
    d: "M17.612 16.712v-3.904c0-2.091-1.116-3.065-2.605-3.065-1.201 0-1.74.661-2.04 1.125v-.965h-2.263c.03.64 0 6.81 0 6.81h2.263V12.91c0-.203.015-.407.075-.552.163-.407.536-.828 1.16-.828.82 0 1.147.625 1.147 1.54v3.643h2.263zM8.32 8.974c.789 0 1.28-.523 1.28-1.177-.014-.668-.491-1.176-1.265-1.176-.774 0-1.28.508-1.28 1.176 0 .654.49 1.177 1.25 1.177h.015zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.549-5.288V9.903H7.188v6.81h2.263z",
    clipRule: "evenodd"
  }));
};

var _default = icon_linkedin_login;
exports.default = _default;