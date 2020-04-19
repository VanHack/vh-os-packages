"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHProgressBar = function VHProgressBar(props) {
  var steps = new Array(props.steps).fill('');
  return /*#__PURE__*/_react.default.createElement(_Grid.Container, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true
  }, steps.map(function (step, index) {
    var borderRadius = '0 0 0 0';
    var color = _Colors.default['gray-10'];

    if (index === 0) {
      borderRadius = '6px 0 0 0';
    }

    if (index === steps.length - 1) {
      borderRadius = '0 6px 0 0';
    }

    if (index < props.currentStep - 1) {
      color = _Colors.default['blue'];
    }

    if (index === props.currentStep - 1) {
      color = _Colors.default['gray-30'];
    }

    return /*#__PURE__*/_react.default.createElement("span", {
      style: {
        backgroundColor: color,
        height: '10px',
        width: '100%',
        borderRadius: borderRadius
      }
    });
  })));
};

VHProgressBar.defaultProps = {
  className: ""
};
VHProgressBar.propTypes = {
  steps: _propTypes.default.number.isRequired,
  currentStep: _propTypes.default.number.isRequired,
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = VHProgressBar;
exports.default = _default;