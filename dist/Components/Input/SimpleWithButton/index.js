"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("../Simple/index"));

var _index3 = _interopRequireDefault(require("../../Button/index"));

var _VHInputSimpleWithBut;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VHInputSimpleWithButton = function VHInputSimpleWithButton(props) {
  return /*#__PURE__*/_react.default.createElement(_index.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    width: "90%",
    style: {
      marginRight: "4px"
    }
  }, /*#__PURE__*/_react.default.createElement(_index2.default, _defineProperty({
    disabled: props.disabled,
    error: props.error,
    loading: props.loading,
    placeholder: props.placeholder,
    data: props.data,
    value: props.value,
    onEvent: props.onEvent
  }, "data", props.data))), /*#__PURE__*/_react.default.createElement(_index3.default, {
    primary: true,
    lg: true,
    onEvent: props.onEvent,
    label: props.label,
    data: props.data
  }));
};

VHInputSimpleWithButton.defaultProps = {
  className: '',
  disabled: false,
  error: false,
  loading: false
};
VHInputSimpleWithButton.propTypes = (_VHInputSimpleWithBut = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  disabled: _propTypes.default.bool,
  error: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  placeholder: _propTypes.default.string
}, _defineProperty(_VHInputSimpleWithBut, "onEvent", _propTypes.default.func), _defineProperty(_VHInputSimpleWithBut, "datat", _propTypes.default.string), _defineProperty(_VHInputSimpleWithBut, "label", _propTypes.default.string), _VHInputSimpleWithBut);
var _default = VHInputSimpleWithButton;
exports.default = _default;