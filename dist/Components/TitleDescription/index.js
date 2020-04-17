"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _Text = _interopRequireDefault(require("../Text"));

var _reactPreloadSkeleton = require("react-preload-skeleton");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTitleDescription = function VHTitleDescription(props) {
  if (props.preLoading) {
    return _react.default.createElement(_reactPreloadSkeleton.TitleDescriptionSkeleton, null);
  }

  return _react.default.createElement(S.Wrapper, {
    contents: props.contents,
    pointer: props.pointer,
    inline: props.inline,
    className: "vh-title-description ".concat(props.className ? props.className : ''),
    onClick: function onClick() {
      props.setNewExperience ? props.setNewExperience() : '';
      props.setCurrentItem ? props.setCurrentItem() : '';
      props.onOpen ? props.onOpen() : '';
    }
  }, _react.default.createElement(_Text.default, {
    hover: props.hover,
    color: props.titleColor,
    variant: props.titleVariant,
    text: props.title,
    onEvent: props.onEvent,
    data: props.data
  }), _react.default.createElement(S.Display, {
    inline: props.inline
  }, _react.default.createElement(_Text.default, {
    hover: props.hover,
    color: props.descriptionColor,
    variant: props.descriptionVariant,
    text: props.description,
    onEvent: props.onEvent,
    data: props.data
  })));
};

VHTitleDescription.defaultProps = {
  titleColor: "gray-100",
  descriptionColor: "gray-90",
  titleVariant: "subtitle3",
  descriptionVariant: "platform1",
  onEvent: "",
  data: "",
  inline: false,
  title: "",
  description: "",
  className: "vh-title-description"
};
VHTitleDescription.propTypes = {
  className: _propTypes.default.string,
  titleColor: _propTypes.default.string,
  descriptionColor: _propTypes.default.string,
  titleVariant: _propTypes.default.string,
  descriptionVariant: _propTypes.default.string,
  onEvent: _propTypes.default.func,
  data: _propTypes.default.object,
  inline: _propTypes.default.bool,
  title: _propTypes.default.string,
  description: _propTypes.default.string
};
var _default = VHTitleDescription;
exports.default = _default;