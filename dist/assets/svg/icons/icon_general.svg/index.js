"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var icon_general = function icon_general(props) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "20",
    height: props.height || "20",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 20 20"
  }, React.createElement("g", {
    fill: "#4F4F4F",
    clipPath: "url(#a)"
  }, React.createElement("path", {
    d: "M2.703 10.166c0 .63.513 1.144 1.143 1.144a1.145 1.145 0 0 0 0-2.287c-.63 0-1.143.513-1.143 1.143zm1.701 0a.558.558 0 1 1-1.117-.001.558.558 0 0 1 1.117.001zM7.738 10.166a1.145 1.145 0 1 0-1.144 1.144c.63 0 1.144-.513 1.144-1.144zm-1.702 0a.558.558 0 1 1 1.117.001.558.558 0 0 1-1.117 0zM10.485 10.166a1.145 1.145 0 1 0-1.144 1.144c.631 0 1.144-.513 1.144-1.144zm-1.701 0a.558.558 0 1 1 1.116.001.558.558 0 0 1-1.116 0zM13.233 10.166a1.145 1.145 0 1 0-1.144 1.144c.63 0 1.144-.513 1.144-1.144zm-1.702 0a.558.558 0 1 1 1.117.001.558.558 0 0 1-1.117 0z"
  }), React.createElement("path", {
    d: "M17.143.15H6.335a2.86 2.86 0 0 0-2.856 2.857v.462h-.622A2.86 2.86 0 0 0 0 6.326v7.263a2.86 2.86 0 0 0 2.856 2.857H5.91a.293.293 0 0 0 0-.586H2.856a2.273 2.273 0 0 1-2.27-2.27V6.325a2.273 2.273 0 0 1 2.27-2.27h10.81a2.273 2.273 0 0 1 2.27 2.27v7.263a2.273 2.273 0 0 1-2.27 2.27 1.1 1.1 0 0 0-.855.403c-1.149 1.405-2.517 2.397-3.463 2.982a.1.1 0 0 1-.143-.132c.371-.758.656-1.553.847-2.363a.725.725 0 0 0-.708-.89H7.278a.293.293 0 1 0 0 .587h2.066a.14.14 0 0 1 .137.17c-.18.766-.45 1.52-.802 2.238-.304.62.391 1.251.977.889.984-.61 2.408-1.643 3.609-3.11a.516.516 0 0 1 .4-.187 2.86 2.86 0 0 0 2.857-2.857v-.462h.622A2.86 2.86 0 0 0 20 10.271V7.323a.293.293 0 1 0-.586 0v2.948a2.273 2.273 0 0 1-2.27 2.27h-.622V6.326a2.86 2.86 0 0 0-2.856-2.856H4.064v-.463a2.273 2.273 0 0 1 2.27-2.27h10.81a2.273 2.273 0 0 1 2.27 2.27v2.948a.293.293 0 1 0 .586 0V3.007A2.86 2.86 0 0 0 17.143.151z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "a"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h20v20H0V0z"
  }))));
};

var _default = icon_general;
exports.default = _default;