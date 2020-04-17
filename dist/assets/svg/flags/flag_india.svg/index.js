"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var flag_india = function flag_india(props) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "50",
    height: props.height || "38",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 50 38"
  }, React.createElement("path", {
    d: "M0 0H50V12.5H0V0Z",
    fill: "#FF9933"
  }), React.createElement("path", {
    d: "M0 12.5H50V25H0V12.5Z",
    fill: "white"
  }), React.createElement("path", {
    d: "M0 25H50V37.5H0V25Z",
    fill: "#128807"
  }), React.createElement("path", {
    d: "M25 23.75C27.7614 23.75 30 21.5114 30 18.75C30 15.9886 27.7614 13.75 25 13.75C22.2386 13.75 20 15.9886 20 18.75C20 21.5114 22.2386 23.75 25 23.75Z",
    fill: "#000088"
  }), React.createElement("path", {
    d: "M25 23.125C27.4162 23.125 29.375 21.1662 29.375 18.75C29.375 16.3338 27.4162 14.375 25 14.375C22.5838 14.375 20.625 16.3338 20.625 18.75C20.625 21.1662 22.5838 23.125 25 23.125Z",
    fill: "white"
  }), React.createElement("path", {
    d: "M25 19.625C25.4833 19.625 25.875 19.2333 25.875 18.75C25.875 18.2668 25.4833 17.875 25 17.875C24.5168 17.875 24.125 18.2668 24.125 18.75C24.125 19.2333 24.5168 19.625 25 19.625Z",
    fill: "#000088"
  }), React.createElement("path", {
    d: "M29.3081 19.5458C29.4313 19.562 29.5443 19.4753 29.5606 19.3521C29.5768 19.2288 29.4901 19.1158 29.3669 19.0996C29.2437 19.0834 29.1307 19.1701 29.1144 19.2933C29.0982 19.4165 29.1849 19.5295 29.3081 19.5458Z",
    fill: "#000088"
  }), React.createElement("path", {
    d: "M25 23.125L25.15 20.5L25 19.25L24.85 20.5L25 23.125Z",
    fill: "#000088"
  }), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0"
  }, React.createElement("path", {
    d: "M0 0H50V37.5H0V0Z",
    fill: "white"
  }))));
};

var _default = flag_india;
exports.default = _default;