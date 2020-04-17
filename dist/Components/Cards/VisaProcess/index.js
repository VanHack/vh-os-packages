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

var _Headers = _interopRequireDefault(require("../../../Typography/Headers"));

var _Img = _interopRequireDefault(require("../../Img"));

var _index = _interopRequireDefault(require("../../../assets/svg/icons/icon_business.svg/index.js"));

var _index2 = _interopRequireDefault(require("../../../assets/svg/icons/icon_skills.svg/index.js"));

var _index3 = _interopRequireDefault(require("../../../assets/svg/icons/icon_passport.svg/index.js"));

var _index4 = _interopRequireDefault(require("../../../assets/svg/icons/icon_chat_outline.svg/index.js"));

var _index5 = _interopRequireDefault(require("../../../assets/svg/icons/icon_time_red.svg/index.js"));

var _index6 = _interopRequireDefault(require("../../../assets/svg/icons/icon_time_green.svg/index.js"));

var _index7 = _interopRequireDefault(require("../../../assets/svg/icons/icon_star_fill.svg/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHCardVisaProcess = function VHCardVisaProcess(props) {
  return _react.default.createElement(_Base.default, {
    candidate: props.candidate,
    onDragEnter: props.onDragEnter,
    id: props.id,
    onDragLeave: props.onDragLeave,
    onDragStart: props.onDragStart,
    favorite: props.favorite,
    draggable: props.draggable,
    onEvent: props.onEvent,
    userId: props.userId
  }, props.invoiced && _react.default.createElement(S.Tag, null, "Invoiced"), _react.default.createElement(_Grid.Row, {
    row: true
  }, _react.default.createElement(S.PersonalInfo, null, _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(S.AvatarWrapper, null, _react.default.createElement(S.Avatar, {
    src: props.avatar
  })), _react.default.createElement(S.Name, null, props.name)), _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(S.IconWrapper, null, _react.default.createElement(_Img.default, {
    source: _index.default,
    title: "city",
    xs: true
  })), _react.default.createElement(S.Info, null, props.companyName)), _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(S.IconWrapper, null, _react.default.createElement(_Img.default, {
    source: _index2.default,
    title: "position",
    xs: true
  })), _react.default.createElement(S.Info, null, props.positionName)), _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(S.IconWrapper, null, _react.default.createElement(_Img.default, {
    source: _index3.default,
    title: "time",
    xs: true
  })), _react.default.createElement(S.Info, null, props.cityName)))), _react.default.createElement(_Grid.Row, null, _react.default.createElement(S.Footer, null, _react.default.createElement(_Grid.Row, {
    row: true
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(S.TimeWrapper, null, _react.default.createElement(_Img.default, {
    source: props.time <= props.avgTime ? "".concat(_index6.default) : "".concat(_index5.default),
    title: "time",
    xs: true
  })), _react.default.createElement(S.InfoTime, {
    avgTime: props.time <= props.avgTime
  }, "".concat(props.time, " days ago")))), _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(S.FavoriteWrapper, null, props.favorite && _react.default.createElement(_Img.default, {
    source: _index7.default,
    title: "comments",
    xs: true
  })), _react.default.createElement(S.Info, null, props.comments), _react.default.createElement(S.CommentsWrapper, null, _react.default.createElement(_Img.default, {
    source: _index4.default,
    title: "comments",
    xs: true
  }))))));
};

VHCardVisaProcess.defaultProps = {
  className: ""
};
VHCardVisaProcess.propTypes = {};
var _default = VHCardVisaProcess;
exports.default = _default;