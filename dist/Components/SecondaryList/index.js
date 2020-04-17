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

var VHSecondaryList = function VHSecondaryList(props) {
  var items = props.items ? props.items : [];

  if (items.length > 0) {
    items.sort(function (a, b) {
      return a.id < b.id ? 1 : -1;
    });
  }

  var list = props.list ? props.list : [];
  var secondList = props.secondList ? props.secondList : [];
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(S.Wrapper, null, _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    row: true
  }, _react.default.createElement(_Grid.Row, {
    marginRight: 2
  }, _react.default.createElement(_Select.default, {
    removeIndicator: true,
    preLoading: props.controls.secondarySkill.preLoading,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'secondarySkillExperience',
    className: 'secondarySkillExperience',
    currentItem: items[0] ? list.find(function (element) {
      return element.value === items[0].id;
    }) : {},
    items: props.list,
    description: "",
    descriptionColor: "primary",
    onEvent: props.onEvent,
    order: 0,
    placeholder: "Add secondary skill"
  }))), _react.default.createElement(_Grid.Row, {
    width: '20%'
  }, _react.default.createElement(_Select.default, {
    removeIndicator: true,
    preLoading: props.controls.secondarySkill.preLoading,
    isDisabled: !items[0] ? true : false,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'secondarySkillYears',
    className: 'secondarySkillYears',
    currentItem: items[0] ? secondList.find(function (element) {
      return element.value === items[0].yearsOfExperience;
    }) : {},
    items: secondList,
    description: "",
    descriptionColor: "primary",
    leftText: "",
    onEvent: props.onEvent,
    order: 0,
    placeholder: "Experience"
  }))), _react.default.createElement(S.Wrapper, null, _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    row: true,
    marginRight: 2
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Select.default, {
    removeIndicator: true,
    preLoading: props.controls.secondarySkill.preLoading,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'secondarySkillExperience',
    className: 'secondarySkillExperience',
    currentItem: items[1] ? list.find(function (element) {
      return element.value === items[1].id;
    }) : {},
    items: props.list,
    description: "",
    descriptionColor: "primary",
    onEvent: props.onEvent,
    order: 1,
    placeholder: "Add secondary skill"
  }))), _react.default.createElement(_Grid.Row, {
    width: '20%'
  }, _react.default.createElement(_Select.default, {
    removeIndicator: true,
    preLoading: props.controls.secondarySkill.preLoading,
    isDisabled: !items[1] ? true : false,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'secondarySkillYears',
    className: 'secondarySkillYears',
    currentItem: items[1] ? secondList.find(function (element) {
      return element.value === items[1].yearsOfExperience;
    }) : {},
    items: secondList,
    description: "",
    descriptionColor: "primary",
    leftText: "",
    onEvent: props.onEvent,
    order: 1,
    placeholder: "Experience"
  }))), _react.default.createElement(S.Wrapper, null, _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    row: true,
    marginRight: 2
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Select.default, {
    removeIndicator: true,
    preLoading: props.controls.secondarySkill.preLoading,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'secondarySkillExperience',
    className: 'secondarySkillExperience',
    currentItem: items[2] ? list.find(function (element) {
      return element.value === items[2].id;
    }) : {},
    items: props.list,
    description: "",
    descriptionColor: "primary",
    onEvent: props.onEvent,
    order: 2,
    placeholder: "Add secondary skill"
  }))), _react.default.createElement(_Grid.Row, {
    width: '20%'
  }, _react.default.createElement(_Select.default, {
    removeIndicator: true,
    preLoading: props.controls.secondarySkill.preLoading,
    isDisabled: !items[2] ? true : false,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'secondarySkillYears',
    className: 'secondarySkillYears',
    currentItem: items[2] ? secondList.find(function (element) {
      return element.value === items[2].yearsOfExperience;
    }) : {},
    items: secondList,
    description: "",
    descriptionColor: "primary",
    leftText: "",
    onEvent: props.onEvent,
    order: 2,
    placeholder: "Experience"
  }))), _react.default.createElement(S.Wrapper, null, _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    row: true
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Select.default, {
    removeIndicator: true,
    preLoading: props.controls.secondarySkill.preLoading,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'secondarySkillExperience',
    className: 'secondarySkillExperience',
    currentItem: items[3] ? list.find(function (element) {
      return element.value === items[3].id;
    }) : {},
    items: props.list,
    description: "",
    descriptionColor: "primary",
    onEvent: props.onEvent,
    order: 3,
    placeholder: "Add secondary skill"
  }))), _react.default.createElement(_Grid.Row, {
    width: '20%'
  }, _react.default.createElement(_Select.default, {
    removeIndicator: true,
    preLoading: props.controls.secondarySkill.preLoading,
    isDisabled: !items[3] ? true : false,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'secondarySkillYears',
    className: 'secondarySkillYears',
    currentItem: items[3] ? secondList.find(function (element) {
      return element.value === items[3].yearsOfExperience;
    }) : {},
    items: secondList,
    description: "",
    descriptionColor: "primary",
    leftText: "",
    onEvent: props.onEvent,
    order: 3,
    placeholder: "Experience"
  }))), _react.default.createElement(S.Wrapper, null, _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    row: true
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Select.default, {
    removeIndicator: true,
    preLoading: props.controls.secondarySkill.preLoading,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'secondarySkillExperience',
    className: 'secondarySkillExperience',
    currentItem: items[4] ? list.find(function (element) {
      return element.value === items[4].id;
    }) : {},
    items: props.list,
    description: "",
    descriptionColor: "primary",
    onEvent: props.onEvent,
    order: 4,
    placeholder: "Add secondary skill"
  }))), _react.default.createElement(_Grid.Row, {
    width: '20%'
  }, _react.default.createElement(_Select.default, {
    removeIndicator: true,
    preLoading: props.controls.secondarySkill.preLoading,
    isDisabled: !items[4] ? true : false,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'secondarySkillYears',
    className: 'secondarySkillYears',
    currentItem: items[4] ? secondList.find(function (element) {
      return element.value === items[4].yearsOfExperience;
    }) : {},
    items: secondList,
    description: "",
    descriptionColor: "primary",
    leftText: "",
    onEvent: props.onEvent,
    order: 4,
    placeholder: "Experience"
  }))));
};

var _default = VHSecondaryList;
exports.default = _default;