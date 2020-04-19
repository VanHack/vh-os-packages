"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var close = function close(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "24px",
    height: props.height || "24px",
    fill: props.fill || "undefined",
    viewBox: props.viewBox || "0 0 24 24"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Artboard",
    transform: "translate(-580.000000, -100.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "close",
    transform: "translate(580.000000, 100.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "vh-/-icons-/-material-/-24"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "bounds",
    fill: "#0675CE",
    opacity: "0",
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }), /*#__PURE__*/React.createElement("polygon", {
    id: "\uE5CD",
    fill: "#95A1AC",
    fillRule: "nonzero",
    points: "18.984375 6.421875 13.40625 12 18.984375 17.578125 17.578125 18.984375 12 13.40625 6.421875 18.984375 5.015625 17.578125 10.59375 12 5.015625 6.421875 6.421875 5.015625 12 10.59375 17.578125 5.015625"
  }))))));
};

var _default = close;
exports.default = _default;