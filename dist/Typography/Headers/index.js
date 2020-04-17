"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Header = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHHeader = function VHHeader(props) {
  switch (true) {
    case props.h1:
      return _react.default.createElement(Header.H1, {
        className: "vh-header-component ".concat(props.className ? props.className : ''),
        reverse: props.reverse
      }, props.label);

    case props.h2:
      return _react.default.createElement(Header.H2, {
        className: "vh-header-component ".concat(props.className ? props.className : ''),
        reverse: props.reverse
      }, props.label);

    case props.h3:
      return _react.default.createElement(Header.H3, {
        className: "vh-header-component ".concat(props.className ? props.className : ''),
        reverse: props.reverse
      }, props.label);

    case props.h4:
      return _react.default.createElement(Header.H4, {
        className: "vh-header-component ".concat(props.className ? props.className : ''),
        reverse: props.reverse
      }, props.label);

    case props.h5:
      return _react.default.createElement(Header.H5, {
        className: "vh-header-component ".concat(props.className ? props.className : ''),
        reverse: props.reverse,
        padding: props.padding,
        textAlign: props.textAlign
      }, props.label);

    case props.h6:
      return _react.default.createElement(Header.H6, {
        className: "vh-header-component ".concat(props.className ? props.className : ''),
        reverse: props.reverse
      }, props.label);
  }
};

VHHeader.defaultProps = {
  reverse: false,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false
};
VHHeader.propTypes = {
  reverse: _propTypes.default.bool,
  h1: _propTypes.default.bool,
  h2: _propTypes.default.bool,
  h3: _propTypes.default.bool,
  h4: _propTypes.default.bool,
  h5: _propTypes.default.bool,
  h6: _propTypes.default.bool,
  className: _propTypes.default.string,
  label: _propTypes.default.string.isRequired
};
var _default = VHHeader;
exports.default = _default;