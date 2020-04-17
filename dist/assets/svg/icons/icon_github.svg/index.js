"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var icon_github = function icon_github(props) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "20",
    height: props.height || "20",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 20 20"
  }, React.createElement("g", {
    clipPath: "url(#a)"
  }, React.createElement("path", {
    fill: "#5C6BC0",
    d: "M9.999.208C4.477.208 0 4.703 0 10.248c0 4.435 2.865 8.198 6.84 9.527.5.092.683-.218.683-.484 0-.239-.01-.87-.014-1.708-2.782.607-3.369-1.346-3.369-1.346-.454-1.16-1.11-1.469-1.11-1.469-.909-.622.068-.61.068-.61 1.003.072 1.53 1.035 1.53 1.035.893 1.534 2.342 1.092 2.912.834.09-.649.349-1.091.635-1.343-2.22-.253-4.555-1.114-4.555-4.96 0-1.097.39-1.993 1.03-2.696-.104-.253-.446-1.275.097-2.656 0 0 .84-.27 2.75 1.029a9.54 9.54 0 0 1 2.504-.338 9.563 9.563 0 0 1 2.504.339c1.909-1.299 2.747-1.029 2.747-1.029.545 1.383.203 2.403.1 2.656.642.703 1.028 1.6 1.028 2.696 0 3.856-2.337 4.705-4.565 4.953.359.31.679.923.679 1.859 0 1.343-.013 2.425-.013 2.754 0 .268.18.581.688.482A10.04 10.04 0 0 0 20 10.248C20 4.703 15.523.208 9.999.208z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "a"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h20v20H0V0z"
  }))));
};

var _default = icon_github;
exports.default = _default;