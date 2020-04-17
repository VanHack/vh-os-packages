"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var S = _interopRequireWildcard(require("./styles"));

var _skeleton = _interopRequireDefault(require("../Cards/VisaProcess/skeleton"));

var _Avatar = _interopRequireDefault(require("../Skeleton/Avatar"));

var _Text = _interopRequireDefault(require("../Skeleton/Text"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHColumn = function VHColumn(props) {
  return _react.default.createElement(S.Column, {
    id: props.id,
    className: "vh-vp-column-component ".concat(props.className ? props.className : ''),
    onDragEnter: props.onDragEnter,
    onDragLeave: props.onDragLeave,
    onDragOver: props.onDragOver,
    onDrop: props.onDrop
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    className: "vh-vp-row-header-component ".concat(props.className ? props.className : '')
  }, _react.default.createElement(S.ColumnName, null, props.name), _react.default.createElement(S.NumberOfCards, null, props.loading ? _react.default.createElement(_Avatar.default, null) : _react.default.createElement(_react.default.Fragment, null, props.total))), _react.default.createElement(_Grid.Row, {
    className: "vh-vp-row-avg-time-component ".concat(props.className ? props.className : '')
  }, _react.default.createElement(S.AvgTime, null, props.loading ? _react.default.createElement(_Text.default, null) : _react.default.createElement(_react.default.Fragment, null, "Avg Time ".concat(props.avgTime, " days")))), _react.default.createElement(_Grid.Row, {
    className: "vh-vp-row-cards-component ".concat(props.className ? props.className : '')
  }, props.loading ? _react.default.createElement(_skeleton.default, {
    random: true
  }) : _react.default.createElement(_react.default.Fragment, null, props.children)));
};

VHColumn.defaultProps = {
  className: ''
};
VHColumn.propTypes = {};
var _default = VHColumn;
exports.default = _default;