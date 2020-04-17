"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _Simple = _interopRequireDefault(require("../Simple"));

var _Icon = _interopRequireDefault(require("../../Icon"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHInputIcon = function VHInputIcon(props) {
  var _React$useState = _react.default.useState(props.value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      handleChange = _React$useState2[1];

  return /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    className: "vh-icon-input ".concat(props.className ? props.className : ''),
    loading: props.loading,
    error: props.error
  }, !props.loading && _react.default.createElement(_Icon.default, {
    className: "vh-icon-with-input-icon",
    icon: props.icon,
    lg: props.lg,
    sm: props.sm,
    md: props.md,
    xs: props.xs
  }), _react.default.createElement(_Simple.default, {
    disabled: props.disabled,
    error: props.error,
    loading: props.loading,
    placeholder: props.placeholder,
    data: props.data,
    value: value,
    onEvent: props.onEvent,
    noBorder: !props.loading,
    maxLength: '200'
  }));
};

VHInputIcon.defaultProps = {
  iconColor: "black-100",
  textColor: "black-100",
  textVariant: "platform1",
  onEvent: null,
  data: null,
  placeholder: "",
  value: "",
  className: ''
};
VHInputIcon.propTypes = {
  iconColor: _propTypes.default.string,
  textColor: _propTypes.default.string,
  textVariant: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onEvent: _propTypes.default.func.isRequired,
  data: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  icon: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = VHInputIcon;
exports.default = _default;