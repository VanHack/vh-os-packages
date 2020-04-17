"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var icon_passport = function icon_passport(props) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "24",
    height: props.height || "24",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 24 24"
  }, React.createElement("g", {
    fill: "#333",
    clipPath: "url(#a)"
  }, React.createElement("path", {
    d: "M7.908 6.862a4.91 4.91 0 1 0 0 9.822 4.91 4.91 0 0 0 0-9.822zm3.634 3.07h-1.77a7.95 7.95 0 0 0-.703-2.063 4.084 4.084 0 0 1 2.473 2.063zm-2.407 1.841c0 .366-.027.701-.065 1.023H6.745a8.667 8.667 0 0 1-.065-1.023c0-.365.027-.7.064-1.023h2.327c.037.322.064.658.064 1.023zM7.79 7.693c.04-.001.078-.012.119-.012.04 0 .079.01.12.012.307.471.68 1.217.907 2.239H6.88c.227-1.026.602-1.77.908-2.24zm-1.042.176a7.974 7.974 0 0 0-.703 2.063h-1.77a4.085 4.085 0 0 1 2.473-2.063zm-2.932 3.904c0-.355.06-.694.146-1.023h1.958a9.658 9.658 0 0 0-.057 1.023c0 .362.024.699.059 1.023H3.96a4.043 4.043 0 0 1-.146-1.023zm.458 1.842h1.773c.17.85.436 1.541.7 2.062a4.085 4.085 0 0 1-2.473-2.062zm3.754 2.239c-.04 0-.079.012-.12.012-.04 0-.078-.011-.118-.012-.294-.452-.676-1.199-.907-2.24h2.052c-.231 1.04-.613 1.787-.907 2.24zm1.043-.177a8.093 8.093 0 0 0 .7-2.062h1.772a4.086 4.086 0 0 1-2.472 2.062zm.825-2.88a9.54 9.54 0 0 0 .059-1.024 9.66 9.66 0 0 0-.058-1.023h1.959c.085.33.145.668.145 1.023 0 .356-.06.694-.145 1.023h-1.96zM12 19.14H3.815v.818H12v-.819zM17.698 13.244l-.424 1.58.79.213.424-1.581-.79-.212zM16.85 16.404l-1.482 5.534.79.212 1.483-5.534-.79-.212z"
  }), React.createElement("path", {
    d: "M22.245 2.598L12.758.056a1.638 1.638 0 0 0-2.005 1.158l-.855 3.193H1.36a.818.818 0 0 0-.819.819v16.369c0 .452.367.818.819.818h9.453l5.712 1.53a1.638 1.638 0 0 0 2.005-1.157l4.872-18.183a1.637 1.637 0 0 0-1.157-2.005zM1.36 21.595V5.225h12.277a.82.82 0 0 1 .818.819v14.732a.82.82 0 0 1-.818.819H1.36zM22.612 4.39L17.74 22.575a.82.82 0 0 1-1.003.578l-2.854-.764a1.633 1.633 0 0 0 1.39-1.613v-6.488l.42.112.424-1.581-.79-.212-.053.196V6.299l.835.223.968 3.165.678.182-.065-2.923c.445.12.9.241 1.198.32l.526.929.451.12-.077-1.291.713-1.08-.452-.121-.92.54-1.197-.32 1.517-2.499-.677-.182-2.42 2.257-1.277-.342a1.63 1.63 0 0 0-1.438-.87h-2.892l.799-2.981a.82.82 0 0 1 1.002-.58l9.487 2.543a.813.813 0 0 1 .497.381c.11.19.138.41.082.621z"
  }), React.createElement("path", {
    d: "M17.485 11.08l-.21.791.778.206.21-.79-.778-.207zM19.038 11.493l-.21.791.779.206.209-.791-.778-.206zM15.932 10.669l-.21.791.778.206.21-.791-.778-.206z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "a"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0V0z"
  }))));
};

var _default = icon_passport;
exports.default = _default;