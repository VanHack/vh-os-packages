"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var icon_time = function icon_time(props) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "16",
    height: props.height || "16",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 16 16"
  }, React.createElement("path", {
    fill: "#4f4f4f",
    d: "M7.993 1.333A6.663 6.663 0 0 0 1.333 8c0 3.68 2.98 6.667 6.66 6.667A6.67 6.67 0 0 0 14.667 8a6.67 6.67 0 0 0-6.674-6.667zm.007 12A5.332 5.332 0 0 1 2.667 8 5.332 5.332 0 0 1 8 2.667 5.332 5.332 0 0 1 13.333 8 5.332 5.332 0 0 1 8 13.333z"
  }), React.createElement("path", {
    fill: "#4f4f4f",
    d: "M8.333 4.667h-1v4l3.5 2.1.5-.82-3-1.78v-3.5z"
  }));
};

var _default = icon_time;
exports.default = _default;