"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("../../Icon/index"));

var _index3 = _interopRequireDefault(require("../../Text/index"));

var _index4 = _interopRequireDefault(require("../../Cards/Base/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHCardFeatures = function VHCardFeatures(props) {
  return _react.default.createElement(_index4.default, {
    noHover: props.noHover
  }, _react.default.createElement(_index.Row, {
    row: true,
    alignItemsCenter: true,
    responsive: true
  }, props.features.map(function (feature) {
    return (// <S.Item>
      _react.default.createElement(_index.Row, {
        marginTop: 15,
        marginBottom5: true
      }, _react.default.createElement(_index.Row, {
        alignItemsCenter: true,
        marginBottom5: true,
        height: 50
      }, _react.default.createElement(_index2.default, {
        icon: feature.icon,
        title: feature.title,
        md: true
      })), _react.default.createElement(_index.Row, {
        alignItemsCenter: true,
        marginBottom5: true,
        height: 50
      }, _react.default.createElement(S.TextWrapper, null, _react.default.createElement(_index3.default, {
        variant: "h4",
        color: "gray-90",
        text: feature.title
      }))), _react.default.createElement(_index.Row, {
        alignItemsCenter: true,
        marginBottom5: true,
        height: 160
      }, _react.default.createElement(S.TextWrapper, null, _react.default.createElement(_index3.default, {
        variant: "bodyweb",
        color: "gray-60",
        text: feature.description
      })))) // </S.Item>

    );
  })));
};

VHCardFeatures.defaultProps = {
  className: '',
  noHover: true
};
VHCardFeatures.prototypes = {
  className: _propTypes.default.string,
  icon: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  noHover: _propTypes.default.bool
};
var _default = VHCardFeatures;
exports.default = _default;