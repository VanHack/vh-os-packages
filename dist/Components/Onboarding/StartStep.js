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

var StartStep = function StartStep(props) {
  return _react.default.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, _react.default.createElement("div", {
    style: {
      marginBottom: '36px',
      marginTop: '60px'
    }
  }, _react.default.createElement("h1", {
    style: {
      textAlign: 'center',
      fontFamily: 'Nunito Sans',
      fontSize: '24px',
      color: '#4f4f4f'
    }
  }, "6 Steps to a Successful Profile")), _react.default.createElement("div", {
    style: {
      paddingLeft: '55px',
      paddingRight: '55px',
      marginBottom: '50px'
    }
  }, _react.default.createElement("p", {
    style: {
      textAlign: 'center',
      lineHeight: '28px',
      fontFamily: 'Roboto',
      fontSize: '16px',
      color: '#4f4f4f'
    }
  }, "Everything on VanHack begins with the profile \u2013 it\u2019s the ", _react.default.createElement("b", null, "first step"), " of your job search journey, and we have made it even simpler for you to fill it out."), _react.default.createElement("p", {
    style: {
      textAlign: 'center',
      lineHeight: '28px',
      fontFamily: 'Roboto',
      fontSize: '16px',
      color: '#4f4f4f'
    }
  }, "Click on \"", _react.default.createElement("b", {
    style: {
      color: '#0675ce',
      fontWeight: 'normal'
    }
  }, "start"), "\" to boost your profile\u2019s visibility and get closer to a job offer from an international company."), _react.default.createElement("p", {
    style: {
      textAlign: 'center',
      lineHeight: '28px',
      fontFamily: 'Roboto',
      fontSize: '16px',
      color: '#4f4f4f'
    }
  }, "Crafting a successful profile has never been easier. Let's start!")), _react.default.createElement("div", {
    style: {
      marginBottom: '50px'
    }
  }, _react.default.createElement("button", {
    style: {
      width: '175px',
      height: '52px',
      borderRadius: '3px',
      backgroundColor: '#0675ce'
    },
    onClick: function onClick(e) {
      props.onEvent({
        type: "OnChangeStep",
        origin: "VHOnboarding",
        props: {
          data: {
            step: 1
          }
        }
      });
      props.setCurrentStep(1);
    }
  }, _react.default.createElement("p", {
    style: {
      fontFamily: 'Roboto',
      fontSize: '16px',
      color: '#fff',
      cursor: 'pointer'
    }
  }, "Let's start!"))));
};

StartStep.defaultProps = {
  className: ""
};
StartStep.propTypes = {
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = StartStep;
exports.default = _default;