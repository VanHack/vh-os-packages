"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHButton = function VHButton(props) {
  var _React$useState = _react.default.useState(props.closeModal),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      closeModal = _React$useState2[0],
      setCloseModal = _React$useState2[1];

  _react.default.useEffect(function () {
    setCloseModal(props.closeModal);
  }, [props.closeModal]);

  if (props.outline) {
    if (props.disabled) {
      return /*#__PURE__*/_react.default.createElement(_styles.OutlinedButton, {
        id: props.id,
        primary: props.primary,
        white: props.white,
        secondary: props.secondary,
        danger: props.danger,
        success: props.success,
        full: props.full,
        nowrap: props.nowrap,
        disabled: true,
        className: "vh-button-component ".concat(props.className ? props.className : ''),
        xs: props.xs,
        sm: props.sm,
        lg: props.lg,
        type: "button",
        onClick: function onClick() {
          props.onEvent({
            type: "OnClick",
            origin: "VHButton",
            props: {
              data: props.data
            }
          });
        }
      }, props.label);
    } else {
      return /*#__PURE__*/_react.default.createElement(_styles.OutlinedButton, {
        id: props.id,
        primary: props.primary,
        white: props.white,
        secondary: props.secondary,
        danger: props.danger,
        success: props.success,
        full: props.full,
        nowrap: props.nowrap,
        className: "vh-button-component ".concat(props.className ? props.className : ''),
        xs: props.xs,
        sm: props.sm,
        lg: props.lg,
        type: "button",
        onClick: function onClick() {
          props.onEvent({
            type: "OnClick",
            origin: "VHButton",
            props: {
              data: props.data
            }
          });
        }
      }, props.label);
    }
  } else if (props.textButton) {
    if (props.disabled) {
      return /*#__PURE__*/_react.default.createElement(_styles.TextButton, {
        id: props.id,
        primary: props.primary,
        disabled: true,
        white: props.white,
        secondary: props.secondary,
        danger: props.danger,
        success: props.success,
        full: props.full,
        nowrap: props.nowrap,
        className: "vh-button-component ".concat(props.className ? props.className : ''),
        xs: props.xs,
        sm: props.sm,
        lg: props.lg,
        type: "button",
        onClick: function onClick() {
          props.onEvent({
            type: "OnClick",
            origin: "VHButton",
            props: {
              data: props.data
            }
          });
        }
      }, props.label);
    } else {
      return /*#__PURE__*/_react.default.createElement(_styles.TextButton, {
        id: props.id,
        primary: props.primary,
        white: props.white,
        secondary: props.secondary,
        danger: props.danger,
        success: props.success,
        full: props.full,
        nowrap: props.nowrap,
        className: "vh-button-component ".concat(props.className ? props.className : ''),
        xs: props.xs,
        sm: props.sm,
        lg: props.lg,
        type: "button",
        onClick: function onClick() {
          props.onEvent({
            type: "OnClick",
            origin: "VHButton",
            props: {
              data: props.data
            }
          });
        }
      }, props.label);
    }
  }

  if (props.disabled) {
    return /*#__PURE__*/_react.default.createElement(_styles.default, {
      id: props.id,
      primary: props.primary,
      secondary: props.secondary,
      danger: props.danger,
      success: props.success,
      full: props.full,
      disabled: true,
      className: "vh-button-component ".concat(props.className ? props.className : ''),
      xs: props.xs,
      sm: props.sm,
      lg: props.lg,
      nowrap: props.nowrap,
      type: "button",
      onClick: function onClick() {
        if (props.setNewExperience) {
          props.setNewExperience();
        }

        if (props.onOpen) {
          props.onOpen();
        } else if (closeModal) {
          props.onClose();
        }

        props.onEvent({
          type: "OnClick",
          origin: "VHButton",
          props: {
            data: props.data
          }
        });
      }
    }, props.label);
  } else {
    return /*#__PURE__*/_react.default.createElement(_styles.default, {
      id: props.id,
      primary: props.primary,
      secondary: props.secondary,
      danger: props.danger,
      success: props.success,
      full: props.full,
      className: "vh-button-component ".concat(props.className ? props.className : ''),
      xs: props.xs,
      sm: props.sm,
      lg: props.lg,
      nowrap: props.nowrap,
      type: "button",
      onClick: function onClick() {
        if (props.setNewExperience) {
          props.setNewExperience();
        }

        if (props.onOpen) {
          props.onOpen();
        } else if (closeModal) {
          props.onClose();
        }

        props.onEvent({
          type: "OnClick",
          origin: "VHButton",
          props: {
            data: props.data
          }
        });
      }
    }, props.label);
  }
};

VHButton.defaultProps = {
  disabled: false,
  danger: false,
  success: false,
  nowrap: false,
  secondary: false,
  className: '',
  primary: true
};
VHButton.propTypes = {
  primary: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  danger: _propTypes.default.bool,
  success: _propTypes.default.bool,
  nowrap: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onEvent: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  label: _propTypes.default.string.isRequired
};
var _default = VHButton;
exports.default = _default;