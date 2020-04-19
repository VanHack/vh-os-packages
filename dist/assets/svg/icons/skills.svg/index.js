"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var skills = function skills(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "20",
    height: props.height || "20",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.8278 1.56555H2.17221C0.974442 1.56555 0 2.53999 0 3.73776V16.2622C0 17.46 0.974442 18.4344 2.17221 18.4344H17.8278C19.0256 18.4344 20 17.46 20 16.2622V3.73776C20 2.53999 19.0256 1.56555 17.8278 1.56555ZM19.4129 16.2622C19.4129 17.1363 18.7018 17.8474 17.8278 17.8474H2.17221C1.29816 17.8474 0.587084 17.1363 0.587084 16.2622V3.73776C0.587084 2.86371 1.29816 2.15264 2.17221 2.15264H17.8278C18.7018 2.15264 19.4129 2.86371 19.4129 3.73776V16.2622Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.454 4.69666H1.546C1.38389 4.69666 1.25246 4.82804 1.25246 4.9902C1.25246 5.15235 1.38389 5.28374 1.546 5.28374H18.454C18.6161 5.28374 18.7476 5.15235 18.7476 4.9902C18.7476 4.82804 18.6161 4.69666 18.454 4.69666Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.17222 3.71819C2.24971 3.71819 2.32525 3.68688 2.37966 3.63208C2.43445 3.57768 2.46576 3.50214 2.46576 3.42465C2.46576 3.3475 2.43445 3.27161 2.37966 3.21721C2.32525 3.16241 2.24971 3.1311 2.17222 3.1311C2.09472 3.1311 2.01919 3.16241 1.96478 3.21721C1.90999 3.27161 1.87868 3.3475 1.87868 3.42465C1.87868 3.5021 1.90999 3.57768 1.96478 3.63208C2.01919 3.68688 2.09472 3.71819 2.17222 3.71819Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.67712 3.71819C4.75422 3.71819 4.83015 3.68688 4.88455 3.63208C4.93935 3.57768 4.97066 3.50214 4.97066 3.42465C4.97066 3.3475 4.93935 3.27161 4.88455 3.21721C4.83015 3.16241 4.75422 3.1311 4.67712 3.1311C4.59962 3.1311 4.52408 3.16241 4.46968 3.21721C4.41489 3.27161 4.38358 3.3475 4.38358 3.42465C4.38358 3.5021 4.41489 3.57768 4.46968 3.63208C4.52408 3.68688 4.59962 3.71819 4.67712 3.71819Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.42468 3.71819C3.50217 3.71819 3.57771 3.68688 3.63211 3.63208C3.68691 3.57768 3.71822 3.50214 3.71822 3.42465C3.71822 3.3475 3.68691 3.27161 3.63211 3.21721C3.57771 3.16241 3.50217 3.1311 3.42468 3.1311C3.34757 3.1311 3.27164 3.16241 3.21724 3.21721C3.16245 3.27161 3.13113 3.3475 3.13113 3.42465C3.13113 3.5021 3.16245 3.57768 3.21724 3.63208C3.27164 3.68688 3.34757 3.71819 3.42468 3.71819Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.38959 8.22685C7.27495 8.11225 7.08908 8.11225 6.97448 8.22685L3.84336 11.358C3.72873 11.4726 3.72873 11.6585 3.84336 11.7731L6.97448 14.9042C7.03178 14.9615 7.10692 14.9902 7.18203 14.9902C7.25714 14.9902 7.33229 14.9615 7.38959 14.9042C7.50422 14.7895 7.50422 14.6037 7.38959 14.4891L4.46603 11.5656L7.38959 8.64203C7.50422 8.52736 7.50422 8.34153 7.38959 8.22685Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.0255 8.22685C12.9109 8.11225 12.725 8.11225 12.6104 8.22685C12.4958 8.34153 12.4958 8.52736 12.6104 8.642L15.534 11.5655L12.6104 14.489C12.4958 14.6037 12.4958 14.7895 12.6104 14.9042C12.6677 14.9615 12.7429 14.9901 12.818 14.9901C12.8931 14.9901 12.9682 14.9615 13.0255 14.9042L16.1567 11.7731C16.2713 11.6584 16.2713 11.4726 16.1567 11.3579L13.0255 8.22685Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.3528 7.84545C11.2004 7.79019 11.032 7.8687 10.9766 8.02099L8.4717 14.9094C8.41628 15.0618 8.49487 15.2302 8.64723 15.2856C8.68035 15.2977 8.7142 15.3034 8.74755 15.3034C8.86747 15.3034 8.98007 15.2293 9.02344 15.1101L11.5283 8.22165C11.5837 8.06929 11.5051 7.90087 11.3528 7.84545Z"
  }));
};

var _default = skills;
exports.default = _default;