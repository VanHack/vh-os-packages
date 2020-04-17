"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHCardBase = function VHCardBase(props) {
  return _react.default.createElement(S.Card, {
    onClick: function onClick(event) {
      if (props.onEvent) {
        props.onEvent({
          data: props,
          type: 'onClick',
          target: 'VHCardBase'
        });
      }

      ;
    },
    draggable: props.draggable,
    id: props.id,
    width: props.width,
    height: props.height,
    onDragEnter: props.onDragEnter,
    noPadding: props.noPadding,
    onDragLeave: props.onDragLeave,
    onDragStart: props.onDragStart,
    noBorder: props.noBorder,
    favorite: props.favorite,
    noHover: props.noHover
  }, props.children);
};

VHCardBase.defaultProps = {
  className: '',
  noBorder: false,
  favorite: false,
  noHover: false
};
VHCardBase.propTypes = {
  className: _propTypes.default.string,
  noBorder: _propTypes.default.bool,
  favorite: _propTypes.default.bool,
  noHover: _propTypes.default.bool
};
var _default = VHCardBase;
exports.default = _default;