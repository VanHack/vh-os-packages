"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var relocation = function relocation(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "20",
    height: props.height || "20",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 20 20"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.7674 2.25742C19.5275 1.98902 19.1648 1.88846 18.8211 1.99497L1.10641 7.48552C0.511625 7.66985 0.0927717 8.1682 0.0132736 8.78587C-0.0660719 9.40355 0.213163 9.99147 0.742032 10.3203L2.31445 11.2976L3.91784 15.7727C3.96071 15.8925 4.07332 15.9671 4.19356 15.9671C4.22637 15.9671 4.25979 15.9615 4.29244 15.9499C4.44472 15.8952 4.52407 15.7275 4.46944 15.5753L2.91824 11.2457L17.426 3.77658L6.33696 13.3505C6.33635 13.351 6.33589 13.3516 6.33543 13.3521C6.32765 13.3589 6.32017 13.3661 6.31316 13.3737C6.31132 13.3757 6.30965 13.3778 6.30782 13.3798C6.30263 13.3859 6.29759 13.392 6.29271 13.3986C6.29073 13.4013 6.28889 13.4041 6.28691 13.4068C6.28279 13.4131 6.27882 13.4193 6.27501 13.4258C6.27333 13.4287 6.27165 13.4317 6.27013 13.4346C6.26646 13.4413 6.26326 13.4482 6.26021 13.4551C6.25899 13.4579 6.25761 13.4608 6.25639 13.4639C6.25349 13.4712 6.2509 13.4789 6.24861 13.4865C6.2477 13.4892 6.24678 13.4918 6.24602 13.4946C6.24327 13.5045 6.24098 13.5147 6.2393 13.5249C6.2393 13.5254 6.23915 13.5259 6.239 13.5263V13.5265L5.65535 17.2137C5.6465 17.2702 5.62712 17.3137 5.60286 17.3479C5.59905 17.3526 5.59523 17.3575 5.59172 17.3624C5.52367 17.4448 5.42479 17.4623 5.3868 17.4658C5.33232 17.4707 5.14891 17.4718 5.07598 17.2681L4.9272 16.853C4.87258 16.7006 4.70473 16.6212 4.5526 16.676C4.40032 16.7305 4.32097 16.8982 4.3756 17.0506L4.52437 17.4657C4.65316 17.8255 4.98015 18.0533 5.3543 18.0533C5.38298 18.0533 5.41213 18.0519 5.44142 18.0492C5.68861 18.026 5.90208 17.9076 6.0472 17.7284C6.04781 17.7277 6.04842 17.7272 6.04903 17.7264L8.42207 15.0943L11.1992 16.8208C11.5548 17.0419 11.961 17.1554 12.3707 17.1554C12.5914 17.1554 12.8132 17.1225 13.0287 17.0555C13.6441 16.8646 14.1453 16.4166 14.4038 15.8263L18.206 7.14556C18.2708 6.9974 18.2032 6.82467 18.0551 6.75966C17.9069 6.69481 17.7342 6.76226 17.6692 6.91057L13.8672 15.5913C13.6769 16.0257 13.3079 16.3554 12.855 16.496C12.4022 16.6365 11.9114 16.5735 11.5086 16.3231L7.02131 13.5336L19.413 2.83527C19.4169 2.88165 19.4107 2.93445 19.3855 2.99213L18.2322 5.62518C18.1674 5.77334 18.2348 5.94607 18.3831 6.01107C18.5313 6.07592 18.704 6.00848 18.769 5.86016L19.9221 3.22726C20.0666 2.89752 20.0073 2.52582 19.7674 2.25742ZM7.91639 14.7801L6.36076 16.5059L6.74879 14.0543L7.91639 14.7801ZM2.56942 10.7663L1.05148 9.82255C0.714871 9.61336 0.543973 9.25371 0.594632 8.86049C0.645139 8.46742 0.901333 8.16255 1.2799 8.04521L17.8006 2.92468L2.56942 10.7663Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0H20V20H0V0Z",
    fill: "white"
  }))));
};

var _default = relocation;
exports.default = _default;