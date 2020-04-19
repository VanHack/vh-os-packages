"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var icon_user_circle = function icon_user_circle(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "24",
    height: props.height || "24",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 23c-3.289 0-6.237-1.458-8.254-3.753.057-.035.115-.073.172-.102C5.824 18.166 8.773 17 12 17c3.227 0 6.176 1.166 8.081 2.144.058.03.116.068.174.103C18.236 21.541 15.288 23 12 23zm8.54-4.745C18.534 17.226 15.426 16 12 16c-3.427 0-6.535 1.226-8.54 2.255-.115.06-.23.128-.345.204C1.791 16.642 1 14.414 1 12 1 5.935 5.935 1 12 1s11 4.935 11 11c0 2.414-.791 4.642-2.115 6.459-.116-.076-.23-.144-.346-.204z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3.5c-3.17 0-5.75 2.58-5.75 5.75S8.83 15 12 15s5.75-2.58 5.75-5.75S15.17 3.5 12 3.5zM12 14c-2.62 0-4.75-2.13-4.75-4.75S9.38 4.5 12 4.5s4.75 2.13 4.75 4.75S14.62 14 12 14z"
  }));
};

var _default = icon_user_circle;
exports.default = _default;