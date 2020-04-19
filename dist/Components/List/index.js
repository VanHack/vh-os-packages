"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var S = _interopRequireWildcard(require("./styles"));

var _Text = _interopRequireDefault(require("../Text"));

var _Select = _interopRequireDefault(require("../Input/Select"));

var _Grid = require("../../Grid");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHList = function VHList(props) {
  var items = props.items ? props.items : [];
  var secondList = props.secondList ? props.secondList : [];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    row: true,
    responsive: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    responsive: true,
    width: "27px",
    marginRight: 1
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: 'platform',
    text: "1st",
    color: 'gray-90'
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    responsive: true,
    marginRight: 2
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.topSkill.preLoading,
    placeholder: "Select your top skill",
    removeIndicator: true,
    removeDropdownIcon: true,
    bold: false,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'topSkillExperience',
    className: 'topSkillExperience',
    currentItem: items[0] && items[0].id != 0 ? {
      value: items[0].id,
      label: items[0].name
    } : {},
    items: props.list,
    description: "",
    descriptionColor: "primary",
    onEvent: props.onEvent,
    order: 0
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '20%',
    responsive: true
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.topSkill.preLoading,
    placeholder: "Experience",
    removeIndicator: true,
    isDisabled: !items[0] || items[0].id === 0 ? true : false,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'topSkillYears',
    className: 'topSkillYears',
    currentItem: items[0] ? secondList.find(function (element) {
      return element.value === items[0].yearsOfExperience;
    }) : {},
    items: secondList,
    description: "",
    descriptionColor: "primary",
    leftText: "",
    onEvent: props.onEvent,
    order: 0
  }))), /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    responsive: true,
    alignItemsCenter: true,
    row: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    responsive: true,
    width: "27px",
    marginRight: 1
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: 'platform',
    text: "2nd",
    color: 'gray-90'
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    responsive: true,
    marginRight: 2
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.topSkill.preLoading,
    placeholder: "Select your top skill",
    removeIndicator: true,
    bold: false,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'topSkillExperience',
    className: 'topSkillExperience',
    currentItem: items[1] && items[1].id != 0 ? {
      value: items[1].id,
      label: items[1].name
    } : {},
    items: props.list,
    description: "",
    descriptionColor: "primary",
    onEvent: props.onEvent,
    order: 1
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '20%',
    responsive: true
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.topSkill.preLoading,
    placeholder: "Experience",
    removeIndicator: true,
    isDisabled: !items[1] || items[1].id === 0 ? true : false,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'topSkillYears',
    className: 'topSkillYears',
    currentItem: items[1] ? secondList.find(function (element) {
      return element.value === items[1].yearsOfExperience;
    }) : {},
    items: secondList,
    description: "",
    descriptionColor: "primary",
    leftText: "",
    onEvent: props.onEvent,
    order: 1
  }))), /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    row: true,
    responsive: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    responsive: true,
    width: "27px",
    marginRight: 1
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: 'platform',
    text: "3rd",
    color: 'gray-90'
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    responsive: true,
    marginRight: 2
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.topSkill.preLoading,
    placeholder: "Select your top skill",
    removeIndicator: true,
    bold: false,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'topSkillExperience',
    className: 'topSkillExperience',
    currentItem: items[2] && items[2].id != 0 ? {
      value: items[2].id,
      label: items[2].name
    } : {},
    items: props.list,
    description: "",
    descriptionColor: "primary",
    onEvent: props.onEvent,
    order: 2
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '20%',
    responsive: true
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.topSkill.preLoading,
    placeholder: "Experience",
    removeIndicator: true,
    isDisabled: !items[2] || items[2].id === 0 ? true : false,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'topSkillYears',
    className: 'topSkillYears',
    currentItem: items[2] ? secondList.find(function (element) {
      return element.value === items[2].yearsOfExperience;
    }) : {},
    items: secondList,
    description: "",
    descriptionColor: "primary",
    leftText: "",
    onEvent: props.onEvent,
    order: 2
  }))));
};

var _default = VHList;
exports.default = _default;