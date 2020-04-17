"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _TitleDescription = _interopRequireDefault(require("../TitleDescription"));

var _Text = _interopRequireDefault(require("../Text"));

var _Grid = require("../../Grid");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTimeLine = function VHTimeLine(props) {
  var getDate = function getDate(date) {
    return new Date(date).toDateString().slice(4, 10);
  };

  var getDay = function getDay(date) {
    return new Date(date).getDate();
  };

  var dates = props.items.map(function (item) {
    return getDay(item.createdOn);
  });
  return _react.default.createElement(_Grid.Row, {
    marginTop: -110,
    marginBottom: 10,
    height: 300,
    overflowY: 'scroll',
    className: "vh-time-line ".concat(props.className ? props.className : "")
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    justifySpaceBetween: true
  }, _react.default.createElement(_Text.default, {
    onEvent: props.onEvent,
    text: "ACTIVITY",
    variant: "subtitle2",
    color: "gray-90"
  }), _react.default.createElement(_Text.default, {
    onEvent: props.onEvent,
    text: "Total: ".concat(props.totalDays),
    variant: "caption",
    color: "gray-50"
  })), _react.default.createElement(S.Group, null, props.items.map(function (item, index) {
    return _react.default.createElement(S.Item, {
      key: "vh-time-line-item".concat(index)
    }, _react.default.createElement(S.Circle, null), _react.default.createElement(S.WrapperText, null, _react.default.createElement(S.Date, null, getDate(item.createdOn), _react.default.createElement(_Text.default, {
      onEvent: props.onEvent,
      text: dates[index + 1] !== undefined && " ".concat(dates[index] - dates[index + 1] < 0 ? -(dates[index] - dates[index + 1]) : dates[index] - dates[index + 1], " days"),
      variant: "caption",
      color: "gray-50"
    })), item.items.length > 1 ? _react.default.createElement(_Grid.Row, null, item.items.map(function (item) {
      return _react.default.createElement(S.WrapperSameDate, {
        key: "vh-time-line-".concat(item.columnName)
      }, _react.default.createElement(_TitleDescription.default, {
        className: "vh-title-description-time-line",
        data: item,
        description: item.description,
        descriptionColor: "gray-50",
        descriptionVariant: "caption",
        onEvent: props.onEvent,
        title: item.columnName,
        titleColor: "gray-90",
        titleVariant: "platform2"
      }));
    })) : _react.default.createElement(_Grid.Row, null, item.items.map(function (item) {
      return _react.default.createElement(_TitleDescription.default, {
        key: "vh-time-line-".concat(item.columnName),
        className: "vh-title-description-time-line",
        data: item,
        description: item.description,
        descriptionColor: "gray-50",
        descriptionVariant: "caption",
        onEvent: props.onEvent,
        title: item.columnName,
        titleColor: "gray-90",
        titleVariant: "platform2"
      });
    }))));
  })));
};

VHTimeLine.defaultProps = {
  items: [],
  totalDays: "",
  className: "",
  onEvent: null
};
VHTimeLine.propTypes = {
  items: _propTypes.default.array,
  totalDays: _propTypes.default.string,
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func
};
var _default = VHTimeLine;
exports.default = _default;