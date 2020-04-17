"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../../Grid");

var _ = _interopRequireDefault(require("."));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHInputCheckboxMulti = function VHInputCheckboxMulti(props) {
  return _react.default.createElement(_Grid.Row, {
    row: true,
    className: "vh-checkbox ".concat(props.className ? props.className : ''),
    autoWidth: true
  }, props.items.map(function (item) {
    return _react.default.createElement(_styles.WrapperMulti, {
      key: "vh-input-multi-".concat(item.id)
    }, _react.default.createElement(_.default, {
      title: item.label,
      color: "gray-100",
      variant: "platform1",
      data: item,
      value: item.value,
      name: "".concat(item.label, "-input-checkbox"),
      id: "".concat(item.id, "-vh-input-checkbox"),
      onEvent: props.onEvent,
      checked: item.checked
    }));
  }));
};

VHInputCheckboxMulti.defaultProps = {
  onEvent: null,
  items: null,
  className: ''
};
VHInputCheckboxMulti.propTypes = {
  onEvent: _propTypes.default.func.isRequired,
  items: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = VHInputCheckboxMulti;
exports.default = _default;