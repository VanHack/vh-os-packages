"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../Text/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHHeaderVisaPipeline = function VHHeaderVisaPipeline(props) {
  return _react.default.createElement(_Grid.Container, {
    lg: true,
    className: "vh-header-visa-pipe-line ".concat(props.className ? props.className : '')
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_index.default, {
    variant: 'h2',
    text: "Visa Pipeline"
  })), _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(_Grid.Row, null), _react.default.createElement(_Grid.Row, {
    row: true,
    justifySpaceAround: true
  }))), props.children);
};

VHHeaderVisaPipeline.defaultProps = {
  title: "Pipeline",
  inputPlaceholder: "search",
  inputValue: "search",
  onEvent: null
};
VHHeaderVisaPipeline.propTypes = {
  title: _propTypes.default.string,
  inputPlaceholder: _propTypes.default.string,
  inputValue: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = VHHeaderVisaPipeline;
exports.default = _default;