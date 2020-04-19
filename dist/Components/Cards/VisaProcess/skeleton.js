"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base"));

var _Grid = require("../../../Grid");

var S = _interopRequireWildcard(require("./styles"));

var _Avatar = _interopRequireDefault(require("../../Skeleton/Avatar"));

var _Text = _interopRequireDefault(require("../../Skeleton/Text"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHCardVisaProcessSkeleton = function VHCardVisaProcessSkeleton(props) {
  var arr = [1, 2, 3, 4, 5, 6];

  if (props.random) {
    var x = Math.floor(Math.random() * 3 + 1);
    arr.length = x;
  } else {
    arr.length = 1;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, arr.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom: 10
    }, /*#__PURE__*/_react.default.createElement(_Base.default, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true
    }, /*#__PURE__*/_react.default.createElement(_Text.default, null)), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true,
      alignItemsCenter: true
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      autoWidth: true,
      paddingRight2: true
    }, /*#__PURE__*/_react.default.createElement(_Avatar.default, null)), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
      color: 'black-20'
    })))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true,
      alignItemsCenter: true
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      autoWidth: true,
      paddingRight2: true
    }, /*#__PURE__*/_react.default.createElement(_Avatar.default, null)), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Text.default, null)))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true,
      alignItemsCenter: true
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      autoWidth: true,
      paddingRight2: true
    }, /*#__PURE__*/_react.default.createElement(_Avatar.default, null)), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Text.default, null)))), /*#__PURE__*/_react.default.createElement(S.Footer, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true,
      alignItemsRight: true
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
      color: 'black-20'
    })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      alignItemsRight: true
    }, /*#__PURE__*/_react.default.createElement(_Avatar.default, null))))));
  }));
};

var _default = VHCardVisaProcessSkeleton;
exports.default = _default;