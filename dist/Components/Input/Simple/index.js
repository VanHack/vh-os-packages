"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _Preloader = _interopRequireDefault(require("../../Preloader"));

var _VHInput$propTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHInput = function VHInput(props) {
  var _React$useState = _react.default.useState(props.value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      handleChange = _React$useState2[1];

  var _React$useState3 = _react.default.useState(props.maxLength),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      maxLength = _React$useState4[0],
      setMaxLength = _React$useState4[1];

  var _React$useState5 = _react.default.useState(props.pattern),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      pattern = _React$useState6[0],
      setPattern = _React$useState6[1];

  var _React$useState7 = _react.default.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      inputValid = _React$useState8[0],
      setInputInvalid = _React$useState8[1];

  _react.default.useEffect(function () {
    handleChange(props.value);
  }, [props.value]);

  return /*#__PURE__*/_react.default.createElement(S.Container, null, /*#__PURE__*/_react.default.createElement(S.Input, {
    id: props.id,
    maxLength: maxLength,
    type: props.type,
    placeholder: props.placeholder,
    pattern: pattern,
    className: "vh-input ".concat(props.className ? props.className : ''),
    disabled: props.disabled || props.loading,
    error: props.error,
    loading: props.loading,
    autoFocus: props.autoFocus,
    value: value,
    noBorder: props.noBorder,
    onChange: function onChange(e) {
      handleChange(e.currentTarget.value);
    },
    onKeyUp: function onKeyUp(e) {
      if (e.key === "Enter") {
        props.onEvent({
          data: {
            value: value,
            data: props.data
          },
          event: "onKeyUpAction",
          origin: "VHInput"
        });
      } else {
        handleChange(e.currentTarget.value);
        props.onEvent({
          data: {
            value: e.currentTarget.value,
            data: props.data
          },
          event: "onKeyUp",
          origin: "VHInput"
        });
      }
    },
    onFocus: function onFocus() {
      props.onEvent({
        data: {
          value: value,
          data: props.data
        },
        event: "onFocus",
        origin: "VHInput"
      });
    },
    onBlur: function onBlur() {
      props.onEvent({
        data: {
          value: value,
          key: props.data
        },
        event: "onBlur",
        origin: "VHInput"
      });
    }
  }), props.loading && /*#__PURE__*/_react.default.createElement(S.LoaderContainer, null, /*#__PURE__*/_react.default.createElement(_Preloader.default, {
    type: "bubble",
    size: "xs"
  })));
};

VHInput.defaultProps = {
  type: "text",
  disabled: false,
  autoFocus: false,
  loading: false,
  className: '',
  placeholder: '',
  noBorder: false
};
VHInput.propTypes = (_VHInput$propTypes = {
  disabled: _propTypes.default.bool,
  autoFocus: _propTypes.default.bool,
  loading: _propTypes.default.bool
}, _defineProperty(_VHInput$propTypes, "autoFocus", _propTypes.default.string), _defineProperty(_VHInput$propTypes, "placeholder", _propTypes.default.string), _defineProperty(_VHInput$propTypes, "noBorder", _propTypes.default.bool), _defineProperty(_VHInput$propTypes, "type", _propTypes.default.string), _VHInput$propTypes);
var _default = VHInput;
exports.default = _default;