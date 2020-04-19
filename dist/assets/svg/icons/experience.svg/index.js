"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var experience = function experience(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "20",
    height: props.height || "20",
    fill: props.fill || "undefined",
    viewBox: props.viewBox || "0 0 20 20"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.0872 4.76653H14.9906V3.87908C14.9906 3.71566 14.8581 3.58321 14.6947 3.58321H14.4384V3.16893C14.4384 1.78771 13.3145 0.664047 11.9333 0.664047H7.9886C6.60737 0.664047 5.48371 1.78771 5.48371 3.16893V3.58321H5.22721C5.06379 3.58321 4.93135 3.71566 4.93135 3.87908V4.76669H3.80219C3.63877 4.76669 3.50632 4.89913 3.50632 5.0624C3.50632 5.22582 3.63877 5.35827 3.80219 5.35827H18.0872C18.7941 5.35827 19.3692 5.93353 19.3692 6.64047V9.24393C19.3692 9.85535 18.9338 10.3844 18.337 10.5016L11.196 11.8247H8.72576L1.58799 10.502C0.988161 10.3844 0.552675 9.85535 0.552675 9.24393V6.64032C0.552675 5.93337 1.12778 5.35827 1.83472 5.35827H2.4289C2.59232 5.35827 2.72477 5.22582 2.72477 5.0624C2.72477 4.89898 2.59232 4.76653 2.4289 4.76653H1.83472C0.801546 4.76653 -0.0390625 5.60714 -0.0390625 6.64032V9.24393C-0.0390625 9.86435 0.267945 10.4265 0.749819 10.7701V17.5279C0.749819 18.5611 1.59043 19.4017 2.6236 19.4017H14.2411C14.4045 19.4017 14.5369 19.2693 14.5369 19.1059C14.5369 18.9424 14.4045 18.81 14.2411 18.81H2.6236C1.91666 18.81 1.34156 18.2349 1.34156 17.5279V11.051C1.38611 11.0632 1.43128 11.0742 1.47721 11.0832L8.40273 12.3665V15.4735C8.40273 15.6029 8.4868 15.7172 8.6104 15.7558L9.87276 16.1504C9.90145 16.1592 9.9312 16.1638 9.96096 16.1638C9.99071 16.1638 10.0205 16.1592 10.0492 16.1504L11.3115 15.7558C11.4351 15.7172 11.5192 15.6029 11.5192 15.4735V12.3665L18.4478 11.0828C18.4926 11.0739 18.5367 11.0631 18.5804 11.0513V17.5279C18.5804 18.235 18.0053 18.81 17.2983 18.81H15.625C15.4616 18.81 15.3292 18.9424 15.3292 19.1059C15.3292 19.2693 15.4616 19.4017 15.625 19.4017H17.2983C18.3315 19.4017 19.1719 18.5611 19.1719 17.5279V10.7706C19.6535 10.4272 19.961 9.86466 19.961 9.24393V6.64032C19.961 5.60714 19.1204 4.76653 18.0872 4.76653ZM6.0753 3.16893C6.0753 2.11394 6.93361 1.25578 7.9886 1.25578H11.9333C12.9883 1.25578 13.8466 2.11394 13.8466 3.16893V3.58321H13.176V3.16893C13.176 2.48381 12.6184 1.92641 11.9333 1.92641H11.2775C11.1141 1.92641 10.9816 2.05886 10.9816 2.22213C10.9816 2.38555 11.1141 2.51799 11.2775 2.51799H11.9333C12.2922 2.51799 12.5843 2.81005 12.5843 3.16893V3.58321H12.3278C12.1643 3.58321 12.0319 3.71566 12.0319 3.87908V4.76669H7.88988V3.87908C7.88988 3.71566 7.75743 3.58321 7.59401 3.58321H7.33766V3.16893C7.33766 2.81005 7.62971 2.51799 7.9886 2.51799H9.90175C10.0652 2.51799 10.1976 2.38555 10.1976 2.22213C10.1976 2.05886 10.0652 1.92641 9.90175 1.92641H7.9886C7.30348 1.92641 6.74592 2.48381 6.74592 3.16893V3.58321H6.0753V3.16893ZM5.52308 4.76653V4.1748H7.29829V4.76653H5.52308ZM12.6236 4.76653V4.1748H14.3988V4.76653H12.6236ZM8.99446 12.4162H10.9275V13.5602H8.99446V12.4162ZM10.9275 15.2559L9.96096 15.558L8.99446 15.2559V14.1519H10.9275V15.2559Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0H20V20H0V0Z",
    fill: "white"
  }))));
};

var _default = experience;
exports.default = _default;