"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Text = _interopRequireDefault(require("../Text"));

var S = _interopRequireWildcard(require("./styles"));

var _Grid = require("../../Grid");

var _Avatar2 = _interopRequireDefault(require("../Skeleton/Avatar"));

var _Text2 = _interopRequireDefault(require("../Skeleton/Text"));

var _Description = _interopRequireDefault(require("../Skeleton/Description"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHCommentsSkeleton = function VHCommentsSkeleton(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    className: "vh-comments ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "platform2",
    color: "gray-80",
    text: "Comments ..."
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    margin: true
  }, /*#__PURE__*/_react.default.createElement(S.Wrapper, null, [1, 2].map(function (comment) {
    return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true,
      marginBottom: 10
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true,
      autoWidth: true,
      paddingRight8: true
    }, /*#__PURE__*/_react.default.createElement(_Avatar2.default, null)), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true
    }, /*#__PURE__*/_react.default.createElement(_Text2.default, null)), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true
    }, /*#__PURE__*/_react.default.createElement(_Description.default, null))));
  }))));
};

VHCommentsSkeleton.defaultProps = {
  comments: [],
  onEvent: null,
  className: ""
};
VHCommentsSkeleton.propTypes = {
  comments: _propTypes.default.array,
  onEvent: _propTypes.default.func,
  className: _propTypes.default.string
};
var _default = VHCommentsSkeleton;
exports.default = _default;