"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var general = function general(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "20",
    height: props.height || "20",
    fill: props.fill || "undefined",
    viewBox: props.viewBox || "0 0 20 20"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.70277 10.1661C2.70277 10.7968 3.21582 11.3098 3.84637 11.3098C4.47699 11.3098 4.99 10.7968 4.99 10.1661C4.99 9.53556 4.47695 9.02255 3.84637 9.02255C3.21582 9.02255 2.70277 9.53556 2.70277 10.1661ZM4.4041 10.1661C4.4041 10.4736 4.15391 10.7238 3.84641 10.7238C3.53891 10.7238 3.28875 10.4736 3.28875 10.1661C3.28875 9.85865 3.53891 9.60849 3.84641 9.60849C4.15391 9.60849 4.4041 9.85865 4.4041 10.1661Z",
    fill: "#4F4F4F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.73758 10.1661C7.73758 9.53556 7.22453 9.02255 6.59394 9.02255C5.96336 9.02255 5.45035 9.53556 5.45035 10.1661C5.45035 10.7968 5.96339 11.3098 6.59394 11.3098C7.22453 11.3098 7.73758 10.7968 7.73758 10.1661ZM6.03625 10.1661C6.03625 9.85865 6.2864 9.60849 6.5939 9.60849C6.9014 9.60849 7.1516 9.85865 7.1516 10.1661C7.1516 10.4736 6.9014 10.7238 6.5939 10.7238C6.2864 10.7238 6.03625 10.4736 6.03625 10.1661Z",
    fill: "#4F4F4F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.4851 10.1661C10.4851 9.53556 9.97208 9.02255 9.34149 9.02255C8.71091 9.02255 8.1979 9.53556 8.1979 10.1661C8.1979 10.7968 8.71095 11.3098 9.34149 11.3098C9.97208 11.3098 10.4851 10.7968 10.4851 10.1661ZM8.7838 10.1661C8.7838 9.85865 9.03395 9.60849 9.34145 9.60849C9.64895 9.60849 9.89915 9.85865 9.89915 10.1661C9.89915 10.4736 9.64895 10.7238 9.34145 10.7238C9.03395 10.7238 8.7838 10.4736 8.7838 10.1661Z",
    fill: "#4F4F4F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.2326 10.1661C13.2326 9.53556 12.7196 9.02255 12.089 9.02255C11.4584 9.02255 10.9454 9.53556 10.9454 10.1661C10.9454 10.7968 11.4585 11.3098 12.089 11.3098C12.7196 11.3098 13.2326 10.7968 13.2326 10.1661ZM11.5313 10.1661C11.5313 9.85865 11.7815 9.60849 12.089 9.60849C12.3965 9.60849 12.6467 9.85865 12.6467 10.1661C12.6467 10.4736 12.3965 10.7238 12.089 10.7238C11.7815 10.7238 11.5313 10.4736 11.5313 10.1661Z",
    fill: "#4F4F4F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.1435 0.150909H6.33414C4.7591 0.150909 3.47766 1.43232 3.47766 3.00735V3.46946H2.85645C1.28141 3.4695 0 4.75091 0 6.32595V13.5891C0 15.1642 1.28141 16.4456 2.85645 16.4456H5.91035C6.07219 16.4456 6.20332 16.3144 6.20332 16.1526C6.20332 15.9908 6.07219 15.8597 5.91035 15.8597H2.85645C1.60449 15.8597 0.585938 14.8411 0.585938 13.5891V6.32595C0.585938 5.07399 1.60449 4.05544 2.85645 4.05544H13.6659C14.9178 4.05544 15.9364 5.07399 15.9364 6.32595V13.5891C15.9364 14.8411 14.9178 15.8597 13.6659 15.8597C13.3321 15.8597 13.0206 16.0065 12.8111 16.2625C11.662 17.6668 10.2937 18.6591 9.34812 19.2443C9.25996 19.2988 9.15848 19.2068 9.20481 19.1122C9.57637 18.3541 9.86125 17.5591 10.0515 16.7492C10.158 16.2954 9.81207 15.8597 9.3441 15.8597H7.27758C7.11574 15.8597 6.98461 15.9908 6.98461 16.1526C6.98461 16.3144 7.11574 16.4456 7.27758 16.4456H9.3441C9.43398 16.4456 9.50141 16.5287 9.48105 16.6152C9.3009 17.3823 9.03094 18.1357 8.67867 18.8544C8.37492 19.4744 9.07027 20.1054 9.65648 19.7426C10.64 19.1339 12.0644 18.1004 13.2646 16.6336C13.3624 16.5141 13.5086 16.4456 13.6659 16.4456C15.2409 16.4456 16.5223 15.1642 16.5223 13.5891V13.127H17.1435C18.7186 13.127 20 11.8456 20 10.2706V7.32259C20 7.16079 19.8689 7.02962 19.707 7.02962C19.5452 7.02962 19.4141 7.16079 19.4141 7.32259V10.2706C19.4141 11.5225 18.3955 12.5411 17.1435 12.5411H16.5223V6.32595C16.5223 4.75091 15.2409 3.4695 13.6659 3.4695H4.06359V3.00739C4.06359 1.75544 5.08215 0.736886 6.33414 0.736886H17.1435C18.3955 0.736886 19.4141 1.75544 19.4141 3.00739V5.9554C19.4141 6.1172 19.5452 6.24837 19.707 6.24837C19.8689 6.24837 20 6.1172 20 5.9554V3.00739C20 1.43232 18.7186 0.150909 17.1435 0.150909Z",
    fill: "#4F4F4F"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0H20V20H0V0Z",
    fill: "white"
  }))));
};

var _default = general;
exports.default = _default;