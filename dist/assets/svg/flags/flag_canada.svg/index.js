"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var flag_canada = function flag_canada(props) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "54",
    height: props.height || "38",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 54 38"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M13.499 0h27.003v37.982H13.5V0z"
  }), React.createElement("path", {
    fill: "red",
    d: "M0 0h13.498v37.982H0V0zm40.502 0H54v37.982H40.51L40.501 0zM17.545 18.353l-1.058.356 4.882 4.266c.373 1.09-.127 1.41-.447 1.988l5.292-.668-.127 5.304 1.103-.03-.246-5.266 5.307.63c-.328-.69-.619-1.053-.32-2.151l4.874-4.043-.85-.312c-.7-.534.298-2.574.448-3.865 0 0-2.84.972-3.027.46l-.73-1.387-2.586 2.834c-.284.067-.403-.045-.47-.282l1.193-5.92-1.894 1.06c-.156.075-.313.016-.417-.17l-1.826-3.635-1.878 3.776c-.142.134-.284.149-.403.06l-1.803-1.01 1.088 5.869c-.09.237-.298.296-.537.17l-2.482-2.796c-.32.519-.537 1.357-.969 1.55-.425.178-1.863-.356-2.825-.564.328 1.18 1.357 3.138.708 3.784v-.008z"
  }));
};

var _default = flag_canada;
exports.default = _default;