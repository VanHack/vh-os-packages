"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var icon_profile = function icon_profile(props) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "42",
    height: props.height || "42",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 42 42"
  }, React.createElement("g", {
    fill: "#788894",
    clipPath: "url(#prefix__clip0)"
  }, React.createElement("path", {
    d: "M33.961 12.202c.453 0 .82-.367.82-.82V2.46c0-1.357-1.103-2.461-2.46-2.461H2.46C1.104 0 .001 1.104.001 2.46v37.08C0 40.895 1.103 42 2.46 42h29.86c1.357 0 2.46-1.104 2.46-2.46v-6.044c0-.453-.367-.82-.82-.82-.453 0-.82.367-.82.82v6.043c0 .452-.368.82-.82.82H2.46c-.452 0-.82-.368-.82-.82V2.461c0-.452.368-.82.82-.82h29.86c.452 0 .82.368.82.82v8.92c0 .454.367.821.82.821z"
  }), React.createElement("path", {
    d: "M17.391 4.43c-4.161 0-7.547 3.385-7.547 7.546 0 2.16.912 4.109 2.37 5.486.027.029.056.057.088.082 1.342 1.229 3.13 1.98 5.089 1.98 1.96 0 3.747-.752 5.09-1.98.031-.025.06-.053.087-.082 1.458-1.377 2.37-3.327 2.37-5.486 0-4.16-3.386-7.546-7.547-7.546zm0 13.453c-1.34 0-2.576-.45-3.568-1.203.721-1.279 2.067-2.079 3.568-2.079s2.847.8 3.568 2.079c-.992.754-2.229 1.203-3.568 1.203zm-1.313-6.235v-.533c0-.723.59-1.312 1.313-1.312.724 0 1.313.588 1.313 1.312v.533c0 .724-.59 1.313-1.313 1.313-.724 0-1.313-.589-1.313-1.313zm6.066 3.83c-.605-.897-1.443-1.595-2.417-2.026.386-.5.617-1.125.617-1.804v-.533c0-1.628-1.325-2.953-2.953-2.953s-2.953 1.325-2.953 2.953v.533c0 .68.23 1.305.617 1.804-.973.43-1.812 1.129-2.417 2.026-.724-.98-1.153-2.192-1.153-3.502 0-3.256 2.65-5.906 5.906-5.906 3.257 0 5.906 2.65 5.906 5.906 0 1.31-.429 2.521-1.153 3.502zM21.82 35.93h-4.429c-.453 0-.82.367-.82.82 0 .453.367.82.82.82h4.43c.453 0 .82-.367.82-.82 0-.453-.367-.82-.82-.82zM21.82 31.336H10.173c-.453 0-.82.367-.82.82 0 .453.367.82.82.82h11.649c.453 0 .82-.367.82-.82 0-.453-.367-.82-.82-.82zM21.82 26.742H10.173c-.453 0-.82.367-.82.82 0 .454.367.82.82.82h11.649c.453 0 .82-.366.82-.82 0-.453-.367-.82-.82-.82zM7.249 22.389c-.153-.153-.364-.24-.581-.24-.216 0-.428.087-.58.24-.153.152-.24.364-.24.58 0 .215.087.427.24.58.153.152.364.24.58.24.217 0 .427-.088.58-.24.153-.153.241-.365.241-.58 0-.216-.088-.428-.24-.58zM7.249 26.983c-.154-.153-.364-.24-.581-.24-.216 0-.427.087-.58.24-.153.152-.24.364-.24.58 0 .215.087.427.24.58.153.152.364.24.58.24.217 0 .427-.088.58-.24.153-.153.241-.365.241-.58 0-.216-.088-.428-.24-.58zM7.249 31.576c-.154-.152-.364-.24-.581-.24-.216 0-.427.088-.58.24-.153.153-.24.364-.24.58 0 .216.087.428.24.58.152.153.364.24.58.24.217 0 .428-.087.58-.24.153-.152.241-.364.241-.58 0-.215-.088-.427-.24-.58zM21.82 22.148H10.173c-.453 0-.82.368-.82.82 0 .454.367.821.82.821h11.649c.453 0 .82-.367.82-.82 0-.453-.367-.82-.82-.82zM40.277 10.69c-.797-.46-1.725-.582-2.614-.344-.889.238-1.632.809-2.092 1.605l-10.323 17.88c-.056.098-.092.207-.105.32l-.727 6.508c-.036.324.123.639.406.802.127.073.268.11.41.11.171 0 .342-.054.486-.16l5.273-3.884c.092-.067.168-.152.224-.25l10.323-17.88c.95-1.645.385-3.757-1.26-4.707zM26.255 34.978l.38-3.399 2.374 1.37-2.754 2.029zm3.95-3.232l-3.126-1.805 8.284-14.348 3.126 1.805-8.284 14.348zm9.913-17.17l-.809 1.401-3.126-1.805.809-1.4c.24-.418.63-.716 1.096-.841.465-.125.952-.06 1.369.18.417.241.716.63.84 1.096.126.466.062.952-.18 1.37z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "prefix__clip0"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0H42V42H0z"
  }))));
};

var _default = icon_profile;
exports.default = _default;