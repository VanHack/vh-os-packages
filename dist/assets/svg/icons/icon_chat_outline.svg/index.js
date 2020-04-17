"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var icon_chat_outline = function icon_chat_outline(props) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "16",
    height: props.height || "16",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 16 16"
  }, React.createElement("path", {
    fill: "#4F4F4F",
    d: "M12.719 1.438H3.28A3.285 3.285 0 0 0 0 4.717v5.069c0 1.443.948 2.7 2.321 3.103l1.585 1.585a.469.469 0 0 0 .663 0l1.454-1.454h6.696A3.285 3.285 0 0 0 16 9.74V4.719a3.285 3.285 0 0 0-3.281-3.282zm2.344 8.302a2.346 2.346 0 0 1-2.344 2.344h-6.89a.469.469 0 0 0-.332.137l-1.26 1.26-1.34-1.342a.469.469 0 0 0-.22-.123 2.292 2.292 0 0 1-1.74-2.23V4.72a2.346 2.346 0 0 1 2.344-2.344h9.438a2.346 2.346 0 0 1 2.344 2.344V9.74z"
  }));
};

var _default = icon_chat_outline;
exports.default = _default;