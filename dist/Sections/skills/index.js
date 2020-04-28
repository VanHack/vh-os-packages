"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Base = _interopRequireDefault(require("../../Components/Cards/Base"));

var _Text = _interopRequireDefault(require("../../Components/Text"));

var _Select = _interopRequireDefault(require("../../Components/Input/Select"));

var _checkbox = _interopRequireDefault(require("../../Components/Input/checkbox"));

var _List = _interopRequireDefault(require("../../Components/List"));

var _SecondaryList = _interopRequireDefault(require("../../Components/SecondaryList"));

var _TitleDescription = _interopRequireDefault(require("../../Components/TitleDescription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHSkillsSection = function VHSkillsSection(props) {
  var positions = props.positions;
  var position = props.positionId != undefined ? positions.find(function (element) {
    return element.value === props.positionId;
  }) : {};
  var yearsOfExperienceList = props.yearsOfExperienceList;
  var yearsOfExperience = props.yearsOfExperience != undefined ? yearsOfExperienceList.find(function (element) {
    return element.value === props.yearsOfExperience;
  }) : {};
  var workAsList = props.positions;
  var userPositions = [];

  if (props.userPositions) {
    props.userPositions.map(function (item) {
      if (item.id) {
        userPositions.push({
          value: item.id,
          label: item.name
        });
      } else {
        userPositions.push({
          value: item,
          label: item.label ? item.label : positions.find(function (element) {
            return element.value === item;
          }).label
        });
      }
    });
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 2
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    className: "vh-skills-section-title ".concat(props.className ? props.className : ''),
    text: "Professional Overview",
    color: "black-50",
    variant: "h2"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Base.default, {
    className: "vh-skills-section-card ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    justifySpaceBetween: true,
    responsive: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '60%',
    marginRight: 3,
    id: "main-role"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.preLoading,
    caption: "I am a/an...",
    captionColor: props.controls.positionId.loading ? "gray-40" : props.controls.positionId.error ? "red" : 'gray-90',
    className: "vh-skills-section-positionId ".concat(props.className ? props.className : ''),
    currentItem: position,
    data: "positionId",
    onEvent: props.onEvent,
    items: positions,
    isLoading: props.controls.positionId.loading,
    description: props.controls.positionId.error && props.controls.positionId.message,
    descriptionColor: "red"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '40%',
    id: "total-year-experience-role"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.preLoading,
    caption: "With...",
    captionColor: props.controls.yearsOfExperience.loading ? "gray-40" : props.controls.yearsOfExperience.error ? "red" : 'gray-90',
    className: "vh-skills-section-yearsOfExperience ".concat(props.className ? props.className : ''),
    currentItem: yearsOfExperience,
    data: "yearsOfExperience",
    onEvent: props.onEvent,
    items: yearsOfExperienceList,
    isLoading: props.controls.yearsOfExperience.loading,
    description: props.controls.yearsOfExperience.error && props.controls.yearsOfExperience.message,
    descriptionColor: "red",
    placeholder: "select an opition"
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom3: true,
    responsive: true,
    id: "leadership"
  }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    checked: props.leadershipExperience,
    className: "",
    color: 'gray-90',
    data: {
      checked: props.leadershipExperience,
      id: 'leadershipExperience',
      label: 'yes',
      value: '123'
    },
    onEvent: props.onEvent,
    title: "I have leadership experience",
    value: "123",
    variant: "platform1"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 5,
    responsive: true,
    id: "open-different-role"
  }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    checked: props.openForDifferentRole,
    className: "",
    color: 'gray-90',
    data: {
      checked: props.openForDifferentRole,
      id: 'openForDifferentRole',
      label: 'yes',
      value: '123'
    },
    onEvent: props.onEvent,
    title: "I am open to working in a different role",
    value: "123",
    variant: "platform1"
  })), props.openForDifferentRole && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    id: "would-work-as"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.preLoading,
    caption: "I would like to work as...",
    isMulti: true,
    captionColor: props.controls.userPositions.loading ? "gray-40" : props.controls.userPositions.error ? "red" : "gray-90",
    className: "vh-skills-section-userPositions ".concat(props.className ? props.className : ''),
    currentItem: userPositions,
    data: "userPositions",
    onEvent: props.onEvent,
    items: workAsList,
    isLoading: props.controls.userPositions.loading,
    description: props.controls.userPositions.error && props.controls.userPositions.message,
    descriptionColor: "red"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    marginTop: 48
  }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
    contents: true,
    className: "vh-general-section-topSkill-description ".concat(props.className ? props.className : ''),
    onEvent: props.onEvent,
    title: "Rank your top 3 skills",
    titleColor: props.controls.topSkill.error ? "red" : "gray-90",
    titleVariant: "subtitle1",
    description: "1st = Highest proficiency level; 3rd = Lowest proficiency level",
    descriptionColor: props.controls.topSkill.loading ? "gray-40" : props.controls.topSkill.error ? "red" : "gray-50"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginTop: 8,
    marginBottom: 16,
    id: "top-skills-group"
  }, /*#__PURE__*/_react.default.createElement(_List.default, {
    controls: props.controls,
    onEvent: props.onEvent,
    secondList: props.yearsOfExperienceList,
    list: props.skillList,
    items: props.topSkill,
    data: "vanhack"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
    contents: true,
    className: "vh-general-section-topSkill-description ".concat(props.className ? props.className : ''),
    onEvent: props.onEvent,
    title: "Add 5 secondary skills",
    titleColor: props.controls.secondarySkill.error ? "red" : "gray-90",
    titleVariant: "subtitle1"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    id: "secondary-skills-group"
  }, /*#__PURE__*/_react.default.createElement(_SecondaryList.default, {
    controls: props.controls,
    onEvent: props.onEvent,
    secondList: props.yearsOfExperienceList,
    list: props.skillList,
    items: props.secondarySkill,
    data: "vanhack"
  })))));
};

VHSkillsSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.object,
  className: _propTypes.default.string
};
var _default = VHSkillsSection;
exports.default = _default;