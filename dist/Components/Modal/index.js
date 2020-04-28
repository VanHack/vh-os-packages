"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../../assets/svg/icons/close.svg/index.js"));

var _Button = _interopRequireDefault(require("../Button"));

var S = _interopRequireWildcard(require("./styles"));

var _styledComponents = require("styled-components");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body {\n    overflow: hidden;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());

var VHModal = function VHModal(props) {
  return /*#__PURE__*/_react.default.createElement(S.ModalWrapper, {
    open: props.open,
    marginTop: props.marginTop
  }, /*#__PURE__*/_react.default.createElement(S.ModalContainer, {
    maxWidth: props.maxWidth
  }, /*#__PURE__*/_react.default.createElement(S.Header, null, /*#__PURE__*/_react.default.createElement("div", null, props.header && props.header), !props.hideBtnClose && /*#__PURE__*/_react.default.createElement(S.Close, {
    style: {
      textAlign: 'right'
    },
    onClick: function onClick() {
      if (props.onClose) {
        props.onClose();
      }

      props.onEvent({
        event: 'onClose',
        target: 'VHModal'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, null))), /*#__PURE__*/_react.default.createElement(S.Content, null, props.content), props.confirmation && /*#__PURE__*/_react.default.createElement(S.ConfirmationSection, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    primary: true,
    outline: true,
    label: props.cancelTitle,
    onClick: props.onClose
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    disabled: props.disableAction,
    primary: true,
    label: props.confirmType,
    onClick: function onClick() {
      props.onEvent({
        event: 'onConfirm',
        target: 'VHModal',
        type: props.confirmType,
        data: props.data
      });
      props.onClose();
    }
  }))));
};

VHModal.defaultProps = {};
VHModal.propTypes = {};
var _default = VHModal;
exports.default = _default;