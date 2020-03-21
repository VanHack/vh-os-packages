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

var _TitleDescription = _interopRequireDefault(require("../../Components/TitleDescription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHSkillsSection = function VHSkillsSection(props) {
  var positions = props.positions;
  var position = props.positionSkill != undefined ? [positions[props.positionSkill]] : {};
  var yearsOfExperienceList = props.yearsOfExperienceList;
  var yearsOfExperience = props.yearsOfExperience != undefined ? [yearsOfExperienceList[props.yearsOfExperience]] : {};
  var workAsList = props.positions;
  var workAs = [];

  if (props.workAs) {
    props.workAs.map(function (item) {
      if (item.id) {
        workAs.push({
          value: item.id,
          label: item.name
        });
      } else {
        workAs.push({
          value: item,
          label: positions[item].label
        });
      }
    });
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    className: "vh-skills-section-title ".concat(props.className ? props.className : ''),
    text: "Skills",
    color: "black-50",
    variant: "h2"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Base.default, {
    className: "vh-skills-section-card ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    justifySpaceBetween: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '60%'
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    caption: "I am...",
    captionColor: props.controls.positionSkill.loading ? "gray-40" : props.controls.positionSkill.error ? "red" : null,
    className: "vh-skills-section-positionSkill ".concat(props.className ? props.className : ''),
    currentItem: position,
    data: "positionSkill",
    onEvent: props.onEvent,
    items: positions,
    isLoading: props.controls.positionSkill.loading,
    description: props.controls.positionSkill.error && props.controls.positionSkill.message,
    descriptionColor: "red-light"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '30%'
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    caption: "With...",
    captionColor: props.controls.yearsOfExperience.loading ? "gray-40" : props.controls.yearsOfExperience.error ? "red" : null,
    className: "vh-skills-section-yearsOfExperience ".concat(props.className ? props.className : ''),
    currentItem: yearsOfExperience,
    data: "yearsOfExperience",
    onEvent: props.onEvent,
    items: yearsOfExperienceList,
    isLoading: props.controls.yearsOfExperience.loading,
    description: props.controls.yearsOfExperience.error && props.controls.yearsOfExperience.message,
    descriptionColor: "red-light"
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom3: true
  }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    checked: props.openForDifferentRole,
    className: "",
    color: props.controls.openForDifferentRole.loading ? "gray-40" : props.controls.openForDifferentRole.error ? "red" : 'gray-100',
    data: {
      checked: props.openForDifferentRole,
      id: 'openForDifferentRole',
      label: 'yes',
      value: '123'
    },
    disabled: props.controls.openForDifferentRole.loading,
    onEvent: props.onEvent,
    title: "I am open to working in a different role",
    value: "123",
    variant: "platform1"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Select.default, {
    caption: "I would like to work as...",
    isMulti: true,
    captionColor: props.controls.workAs.loading ? "gray-40" : props.controls.workAs.error ? "red" : null,
    className: "vh-skills-section-workAs ".concat(props.className ? props.className : ''),
    currentItem: workAs,
    data: "workAs",
    onEvent: props.onEvent,
    items: workAsList,
    isLoading: props.controls.workAs.loading,
    description: props.controls.workAs.error && props.controls.workAs.message,
    descriptionColor: "red-light"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
    contents: true,
    className: "vh-general-section-topSkill-description ".concat(props.className ? props.className : ''),
    descriptionColor: props.controls.topSkill.loading ? "gray-40" : props.controls.topSkill.error ? "red-light" : "gray-90",
    inline: true,
    onEvent: props.onEvent,
    title: "Rank your top 3 skills",
    description: "1st = Highest proficiency level; 3rd = Lowest proficiency level",
    titleColor: props.controls.topSkill.loading ? "gray-40" : props.controls.topSkill.error ? "red" : "gray-100",
    titleVariant: "subtitle3"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_List.default, {
    onEvent: props.onEvent,
    secondList: props.yearsOfExperienceList,
    list: props.skillList,
    items: props.topSkill,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1NlY3Rpb25zL3NraWxscy9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhTa2lsbHNTZWN0aW9uIiwicHJvcHMiLCJwb3NpdGlvbnMiLCJwb3NpdGlvbiIsInBvc2l0aW9uU2tpbGwiLCJ1bmRlZmluZWQiLCJ5ZWFyc09mRXhwZXJpZW5jZUxpc3QiLCJ5ZWFyc09mRXhwZXJpZW5jZSIsIndvcmtBc0xpc3QiLCJ3b3JrQXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJwdXNoIiwidmFsdWUiLCJsYWJlbCIsIm5hbWUiLCJjbGFzc05hbWUiLCJjb250cm9scyIsImxvYWRpbmciLCJlcnJvciIsIm9uRXZlbnQiLCJtZXNzYWdlIiwib3BlbkZvckRpZmZlcmVudFJvbGUiLCJjaGVja2VkIiwidG9wU2tpbGwiLCJza2lsbExpc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwidGl0bGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZGF0YSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBR0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLLEVBQUk7QUFDL0IsTUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNDLFNBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixLQUFLLENBQUNHLGFBQU4sSUFBdUJDLFNBQXZCLEdBQW1DLENBQUNILFNBQVMsQ0FBQ0QsS0FBSyxDQUFDRyxhQUFQLENBQVYsQ0FBbkMsR0FBc0UsRUFBdkY7QUFFQSxNQUFNRSxxQkFBcUIsR0FBR0wsS0FBSyxDQUFDSyxxQkFBcEM7QUFDQSxNQUFNQyxpQkFBaUIsR0FBR04sS0FBSyxDQUFDTSxpQkFBTixJQUEyQkYsU0FBM0IsR0FBdUMsQ0FBQ0MscUJBQXFCLENBQUNMLEtBQUssQ0FBQ00saUJBQVAsQ0FBdEIsQ0FBdkMsR0FBMEYs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QkFBVUc7QUFKSyxDQUE1QjtlQU9lL0IsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwiLi4vLi4vR3JpZFwiO1xuaW1wb3J0IFZIQ2FyZEJhc2UgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvQ2FyZHMvQmFzZVwiO1xuaW1wb3J0IFZIVGV4dCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9UZXh0XCI7XG5pbXBvcnQgVkhTZWxlY3QgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW5wdXQvU2VsZWN0XCI7XG5pbXBvcnQgVkhJbnB1dENoZWNrYm94IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0lucHV0L2NoZWNrYm94XCI7XG5pbXBvcnQgVkhMaXN0IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0xpc3RcIjtcbmltcG9ydCBWSFRpdGxlRGVzY3JpcHRpb24gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvVGl0bGVEZXNjcmlwdGlvblwiO1xuXG5cbmNvbnN0IFZIU2tpbGxzU2VjdGlvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgcG9zaXRpb25zID0gcHJvcHMucG9zaXRpb25zXG4gIGNvbnN0IHBvc2l0aW9uID0gcHJvcHMucG9zaXRpb25Ta2lsbCAhPSB1bmRlZmluZWQgPyBbcG9zaXRpb25zW3Byb3BzLnBvc2l0aW9uU2tpbGxdXSA6IHt9O1xuXG4gIGNvbnN0IHllYXJzT2ZFeHBlcmllbmNlTGlzdCA9IHByb3BzLnllYXJzT2ZFeHBlcmllbmNlTGlzdFxuICBjb25zdCB5ZWFyc09mRXhwZXJpZW5jZSA9IHByb3BzLnllYXJzT2ZFeHBlcmllbmNlICE9IHVuZGVmaW5lZCA/IFt5ZWFyc09mRXhwZXJpZW5jZUxpc3RbcHJvcHMueWVhcnNPZkV4cGVyaWVuY2VdXSA6IHt9O1xuXG4gIGNvbnN0IHdvcmtBc0xpc3QgPSBwcm9wcy5wb3NpdGlvbnNcblxuICBsZXQgd29ya0FzID0gW11cblxuICBpZihwcm9wcy53b3JrQXMpe1xuICAgIHByb3BzLndvcmtBcy5tYXAoaXRlbT0+e1xuICAgICAgaWYoaXRlbS5pZCl7XG4gICAgICB3b3JrQXMucHVzaCh7dmFsdWU6IGl0ZW0uaWQsIGxhYmVsOiBpdGVtLm5hbWV9KVxuICAgICAgfWVsc2V7XG4gICAgICAgIHdvcmtBcy5wdXNoKHt2YWx1ZTogaXRlbSwgbGFiZWw6IHBvc2l0aW9uc1tpdGVtXS5sYWJlbH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSb3cgbWFyZ2luQm90dG9tPXs1fT5cbiAgICAgICAgPFZIVGV4dFxuICAgICAgICAgIGNsYXNzTmFtZT17YHZoLXNraWxscy1zZWN0aW9uLXRpdGxlICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICB0ZXh0PXtcIlNraWxsc1wifVxuICAgICAgICAgIGNvbG9yPVwiYmxhY2stNTBcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXG4gICAgICAgIC8+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxWSENhcmRCYXNlXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdmgtc2tpbGxzLXNlY3Rpb24tY2FyZCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8Um93IHJvdyBqdXN0aWZ5U3BhY2VCZXR3ZWVuPlxuICAgICAgICAgICAgPFJvdyB3aWR0aD17JzYwJSd9PlxuICAgICAgICAgICAgICA8VkhTZWxlY3RcbiAgICAgICAgICAgICAgICBjYXB0aW9uPVwiSSBhbS4uLlwiXG4gICAgICAgICAgICAgICAgY2FwdGlvbkNvbG9yPXtcbiAgICAgICAgICAgICAgICAgIHByb3BzLmNvbnRyb2xzLnBvc2l0aW9uU2tpbGwubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICA/IFwiZ3JheS00MFwiXG4gICAgICAgICAgICAgICAgICAgIDogcHJvcHMuY29udHJvbHMucG9zaXRpb25Ta2lsbC5lcnJvclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B2aC1za2lsbHMtc2VjdGlvbi1wb3NpdGlvblNraWxsICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17cG9zaXRpb259XG4gICAgICAgICAgICAgICAgZGF0YT1cInBvc2l0aW9uU2tpbGxcIlxuICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgICAgICAgaXRlbXM9e3Bvc2l0aW9uc31cbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e3Byb3BzLmNvbnRyb2xzLnBvc2l0aW9uU2tpbGwubG9hZGluZ31cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMuY29udHJvbHMucG9zaXRpb25Ta2lsbC5lcnJvciAmJiBwcm9wcy5jb250cm9scy5wb3NpdGlvblNraWxsLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25Db2xvcj1cInJlZC1saWdodFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3cgd2lkdGg9eyczMCUnfT5cbiAgICAgICAgICAgICAgPFZIU2VsZWN0XG4gICAgICAgICAgICAgICAgY2FwdGlvbj1cIldpdGguLi5cIlxuICAgICAgICAgICAgICAgIGNhcHRpb25Db2xvcj17XG4gICAgICAgICAgICAgICAgICBwcm9wcy5jb250cm9scy55ZWFyc09mRXhwZXJpZW5jZS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgID8gXCJncmF5LTQwXCJcbiAgICAgICAgICAgICAgICAgICAgOiBwcm9wcy5jb250cm9scy55ZWFyc09mRXhwZXJpZW5jZS5lcnJvclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B2aC1za2lsbHMtc2VjdGlvbi15ZWFyc09mRXhwZXJpZW5jZSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e3llYXJzT2ZFeHBlcmllbmNlfVxuICAgICAgICAgICAgICAgIGRhdGE9XCJ5ZWFyc09mRXhwZXJpZW5jZVwiXG4gICAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgICBpdGVtcz17eWVhcnNPZkV4cGVyaWVuY2VMaXN0fVxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17cHJvcHMuY29udHJvbHMueWVhcnNPZkV4cGVyaWVuY2UubG9hZGluZ31cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMuY29udHJvbHMueWVhcnNPZkV4cGVyaWVuY2UuZXJyb3IgJiYgcHJvcHMuY29udHJvbHMueWVhcnNPZkV4cGVyaWVuY2UubWVzc2FnZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkNvbG9yPVwicmVkLWxpZ2h0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxSb3cgbWFyZ2luQm90dG9tMz5cbiAgICAgICAgICAgIDxWSElucHV0Q2hlY2tib3hcbiAgICAgICAgICAgICAgY2hlY2tlZD17cHJvcHMub3BlbkZvckRpZmZlcmVudFJvbGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICBwcm9wcy5jb250cm9scy5vcGVuRm9yRGlmZmVyZW50Um9sZS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICA/IFwiZ3JheS00MFwiXG4gICAgICAgICAgICAgICAgICA6IHByb3BzLmNvbnRyb2xzLm9wZW5Gb3JEaWZmZXJlbnRSb2xlLmVycm9yXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICA6ICdncmF5LTEwMCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhPXt7XG4gICAgICAgICAgICAgICAgY2hlY2tlZDogcHJvcHMub3BlbkZvckRpZmZlcmVudFJvbGUsXG4gICAgICAgICAgICAgICAgaWQ6ICdvcGVuRm9yRGlmZmVyZW50Um9sZScsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICd5ZXMnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMTIzJ1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuY29udHJvbHMub3BlbkZvckRpZmZlcmVudFJvbGUubG9hZGluZ31cbiAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgdGl0bGU9XCJJIGFtIG9wZW4gdG8gd29ya2luZyBpbiBhIGRpZmZlcmVudCByb2xlXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCIxMjNcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwicGxhdGZvcm0xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxWSFNlbGVjdFxuICAgICAgICAgICAgICBjYXB0aW9uPVwiSSB3b3VsZCBsaWtlIHRvIHdvcmsgYXMuLi5cIlxuICAgICAgICAgICAgICBpc011bHRpXG4gICAgICAgICAgICAgIGNhcHRpb25Db2xvcj17XG4gICAgICAgICAgICAgICAgcHJvcHMuY29udHJvbHMud29ya0FzLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgID8gXCJncmF5LTQwXCJcbiAgICAgICAgICAgICAgICAgIDogcHJvcHMuY29udHJvbHMud29ya0FzLmVycm9yXG4gICAgICAgICAgICAgICAgICAgID8gXCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B2aC1za2lsbHMtc2VjdGlvbi13b3JrQXMgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgICBjdXJyZW50SXRlbT17d29ya0FzfVxuICAgICAgICAgICAgICBkYXRhPVwid29ya0FzXCJcbiAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgaXRlbXM9e3dvcmtBc0xpc3R9XG4gICAgICAgICAgICAgIGlzTG9hZGluZz17cHJvcHMuY29udHJvbHMud29ya0FzLmxvYWRpbmd9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5jb250cm9scy53b3JrQXMuZXJyb3IgJiYgcHJvcHMuY29udHJvbHMud29ya0FzLm1lc3NhZ2V9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uQ29sb3I9XCJyZWQtbGlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8Um93IGNvbHVtbiBtYXJnaW5Cb3R0b209ezV9PlxuICAgICAgICAgIDxWSFRpdGxlRGVzY3JpcHRpb25cbiAgICAgICAgICBjb250ZW50cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B2aC1nZW5lcmFsLXNlY3Rpb24tdG9wU2tpbGwtZGVzY3JpcHRpb24gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uQ29sb3I9e1xuICAgICAgICAgICAgICAgICAgcHJvcHMuY29udHJvbHMudG9wU2tpbGwubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgPyBcImdyYXktNDBcIlxuICAgICAgICAgICAgICAgICAgOiBwcm9wcy5jb250cm9scy50b3BTa2lsbC5lcnJvclxuICAgICAgICAgICAgICAgICAgPyBcInJlZC1saWdodFwiXG4gICAgICAgICAgICAgICAgICA6IFwiZ3JheS05MFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlubGluZVxuICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgICAgICAgdGl0bGU9XCJSYW5rIHlvdXIgdG9wIDMgc2tpbGxzXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIjFzdCA9IEhpZ2hlc3QgcHJvZmljaWVuY3kgbGV2ZWw7IDNyZCA9IExvd2VzdCBwcm9maWNpZW5jeSBsZXZlbFwiXG4gICAgICAgICAgICAgICAgdGl0bGVDb2xvcj17XG4gICAgICAgICAgICAgICAgICBwcm9wcy5jb250cm9scy50b3BTa2lsbC5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICA/IFwiZ3JheS00MFwiXG4gICAgICAgICAgICAgICAgICA6IHByb3BzLmNvbnRyb2xzLnRvcFNraWxsLmVycm9yXG4gICAgICAgICAgICAgICAgICA/IFwicmVkXCJcbiAgICAgICAgICAgICAgICAgIDogXCJncmF5LTEwMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpdGxlVmFyaWFudD1cInN1YnRpdGxlM1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxWSExpc3RcbiAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgc2Vjb25kTGlzdD17cHJvcHMueWVhcnNPZkV4cGVyaWVuY2VMaXN0fVxuICAgICAgICAgICAgICBsaXN0PXtwcm9wcy5za2lsbExpc3R9XG4gICAgICAgICAgICAgIGl0ZW1zPXtwcm9wcy50b3BTa2lsbH1cbiAgICAgICAgICAgICAgZGF0YT1cInZhbmhhY2tcIiAvPlxuICAgICAgICAgIDwvUm93PiBcbiAgICAgICAgPC9WSENhcmRCYXNlPlxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gIClcbn1cblxuVkhTa2lsbHNTZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBWSFNraWxsc1NlY3Rpb247XG4iXX0=