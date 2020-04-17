"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../Grid/index");

var _index2 = _interopRequireDefault(require("../../Components/Icon/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VHLinkImage = function VHLinkImage(props) {
  var _React$createElement;

  return _react.default.createElement(_index.Row, {
    row: true,
    width: 500
  }, _react.default.createElement(S.A, {
    reverse: props.reverse,
    cursor: props.cursor,
    xs: props.xsLabel,
    sm: props.smLabel,
    lg: props.lgLabel,
    onClick: function onClick() {
      props.onEvent({
        type: "OnClick",
        origin: "VHLinkImage",
        props: {
          data: props.data
        }
      });
    },
    className: "vh-link-image-component ".concat(props.className ? props.className : ''),
    color: props.colorLabel,
    noUnderscore: props.noUnderscore,
    href: props.to,
    label: props.label
  }, props.label, _react.default.createElement(S.IconWrapper, null, _react.default.createElement(_index2.default, (_React$createElement = {
    icon: props.icon,
    xs: props.xsIcon,
    sm: props.smIcon,
    md: props.mdIcon
  }, _defineProperty(_React$createElement, "md", props.mdIcon), _defineProperty(_React$createElement, "lg", props.lgIcon), _defineProperty(_React$createElement, "color", props.colorIcon), _React$createElement)))));
};

VHLinkImage.defaultProps = {
  xsLabel: false,
  smLabel: true,
  lgLabel: false,
  reverse: false,
  noUnderscore: false
};
VHLinkImage.propTypes = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  reverse: _propTypes.default.bool,
  noUnderscore: _propTypes.default.bool,
  round: _propTypes.default.bool,
  smLabel: _propTypes.default.bool,
  xsLabel: _propTypes.default.bool,
  lgLabel: _propTypes.default.bool,
  label: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  colorLabel: _propTypes.default.string,
  to: _propTypes.default.string.isRequired,
  icon: _propTypes.default.string,
  xsIcon: _propTypes.default.bool,
  smIcon: _propTypes.default.bool,
  mdIcon: _propTypes.default.bool,
  lgIcon: _propTypes.default.bool,
  colorIcon: _propTypes.default.string
};
var _default = VHLinkImage;
exports.default = _default;