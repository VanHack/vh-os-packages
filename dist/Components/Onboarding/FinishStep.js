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

var FinishStep = function FinishStep(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '36px',
      marginTop: '60px'
    }
  }, /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      textAlign: 'center',
      fontFamily: 'Nunito Sans',
      fontSize: '24px',
      color: '#4f4f4f'
    }
  }, "Thank you !")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingLeft: '100px',
      paddingRight: '100px',
      marginBottom: '50px'
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      textAlign: 'center',
      lineHeight: '28px',
      fontFamily: 'Roboto',
      fontSize: '16px',
      color: '#4f4f4f'
    }
  }, "You will be redirected to your Profile page.")));
};

FinishStep.defaultProps = {
  className: ""
};
FinishStep.propTypes = {
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = FinishStep;
exports.default = _default;