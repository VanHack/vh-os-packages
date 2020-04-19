"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var icon_skills = function icon_skills(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "20",
    height: props.height || "20",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    d: "M17.828 1.566H2.172A2.175 2.175 0 0 0 0 3.738v12.524c0 1.198.974 2.172 2.172 2.172h15.656A2.175 2.175 0 0 0 20 16.262V3.738a2.175 2.175 0 0 0-2.172-2.172zm1.585 14.696c0 .874-.711 1.585-1.585 1.585H2.172a1.587 1.587 0 0 1-1.585-1.585V3.738c0-.874.711-1.585 1.585-1.585h15.656c.874 0 1.585.71 1.585 1.585v12.524z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    d: "M18.454 4.697H1.546a.294.294 0 1 0 0 .587h16.908a.294.294 0 1 0 0-.587zM2.172 3.718a.294.294 0 1 0 0-.588.294.294 0 0 0 0 .588zM4.677 3.718a.295.295 0 0 0 .294-.293.295.295 0 0 0-.501-.208.295.295 0 0 0 0 .415c.054.055.13.086.207.086zM3.425 3.718a.294.294 0 1 0-.001-.588.294.294 0 0 0 0 .588zM7.39 8.227a.294.294 0 0 0-.416 0l-3.13 3.131a.294.294 0 0 0 0 .415l3.13 3.131a.293.293 0 0 0 .416 0 .294.294 0 0 0 0-.415l-2.924-2.923L7.39 8.642a.294.294 0 0 0 0-.415zM13.025 8.227a.294.294 0 0 0-.415.415l2.924 2.924-2.924 2.923a.294.294 0 0 0 .415.415l3.132-3.13a.294.294 0 0 0 0-.416l-3.132-3.131zM11.353 7.845a.294.294 0 0 0-.376.176l-2.505 6.888a.294.294 0 1 0 .551.201l2.505-6.888a.294.294 0 0 0-.175-.377z"
  }));
};

var _default = icon_skills;
exports.default = _default;