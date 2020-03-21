"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../../../Components/TitleHighlightDescriptionButtonImage/index"));

var _index2 = _interopRequireDefault(require("../../../Components/Cards/Features/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHPremiumIntroSection = function VHPremiumIntroSection(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    title: props.title,
    highlight: props.highlight,
    description: props.description,
    label: props.label,
    image: props.image
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    features: props.features
  }));
};

VHPremiumIntroSection.propTypes = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  highlight: _propTypes.default.string,
  description: _propTypes.default.string,
  label: _propTypes.default.string,
  image: _propTypes.default.string,
  features: _propTypes.default.string
};
var _default = VHPremiumIntroSection;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL1NlY3Rpb25zL1ByZW1pdW0vSW50cm8vaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIUHJlbWl1bUludHJvU2VjdGlvbiIsInByb3BzIiwidGl0bGUiLCJoaWdobGlnaHQiLCJkZXNjcmlwdGlvbiIsImxhYmVsIiwiaW1hZ2UiLCJmZWF0dXJlcyIsInByb3BUeXBlcyIsIm9uRXZlbnQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiZGF0YSIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBQyxLQUFLLEVBQUk7QUFDckMsc0JBQ0UsNkJBQUMsY0FBRCxDQUFPLFFBQVAscUJBQ0ksNkJBQUMsY0FBRDtBQUNJLElBQUEsS0FBSyxFQUFFQSxLQUFLLENBQUNDLEtBRGpCO0FBRUksSUFBQSxTQUFTLEVBQUVELEtBQUssQ0FBQ0UsU0FGckI7QUFHSSxJQUFBLFdBQVcsRUFBRUYsS0FBSyxDQUFDRyxXQUh2QjtBQUlJLElBQUEsS0FBSyxFQUFFSCxLQUFLLENBQUNJLEtBSmpCO0FBS0ksSUFBQSxLQUFLLEVBQUVKLEtBQUssQ0FBQ0s7QUFMakIsSUFESixlQVFJLDZCQUFDLGVBQUQ7QUFDSSxJQUFBLFFBQVEsRUFBRUwsS0FBSyxDQUFDTTtBQURwQixJQVJKLENBREY7QUFjRCxDQWZEOztBQWlCQVAscUJBQXFCLENBQUNRLFNBQXRCLEdBQWtDO0FBQ2hDQyxFQUFBQSxPQUFPLEVBQUVDLG1CQUFVQyxJQURhO0FBRWhDQyxFQUFBQSxJQUFJLEVBQUVGLG1CQUFVRyxTQUFWLENBQW9CLENBQUNILG1CQUFVSSxNQUFYLEVBQW1CSixtQkFBVUssTUFBN0IsQ0FBcEIsQ0FGMEI7QUFHaENDLEVBQUFBLFNBQVMsRUFBRU4sbUJBQVVJLE1BSFc7QUFJaENaLEVBQUFBLEtBQUssRUFBRVEsbUJBQVVJLE1BSmU7QUFLaENYLEVBQUFBLFNBQVMsRUFBRU8sbUJBQVVJLE1BTFc7QUFNaENWLEVBQUFBLFdBQVcsRUFBRU0sbUJBQVVJLE1BTlM7QUFPaENULEVBQUFBLEtBQUssRUFBRUssbUJBQVVJLE1BUGU7QUFRaENSLEVBQUFBLEtBQUssRUFBRUksbUJBQVVJLE1BUmU7QUFTaENQLEVBQUFBLFFBQVEsRUFBRUcsbUJBQVVJO0FBVFksQ0FBbEM7ZUFZZWQscUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBWSFRpdGxlSGlnaGxpZ2h0RGVzY3JpcHRpb25CdXR0b25JbWFnZSBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9UaXRsZUhpZ2hsaWdodERlc2NyaXB0aW9uQnV0dG9uSW1hZ2UvaW5kZXhcIjtcbmltcG9ydCBWSENhcmRGZWF0dXJlcyBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9DYXJkcy9GZWF0dXJlcy9pbmRleFwiO1xuXG5jb25zdCBWSFByZW1pdW1JbnRyb1NlY3Rpb24gPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8VkhUaXRsZUhpZ2hsaWdodERlc2NyaXB0aW9uQnV0dG9uSW1hZ2UgXG4gICAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICBoaWdobGlnaHQ9e3Byb3BzLmhpZ2hsaWdodH1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGxhYmVsPXtwcm9wcy5sYWJlbH1cbiAgICAgICAgICAgIGltYWdlPXtwcm9wcy5pbWFnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPFZIQ2FyZEZlYXR1cmVzIFxuICAgICAgICAgICAgZmVhdHVyZXM9e3Byb3BzLmZlYXR1cmVzfVxuICAgICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gKVxufVxuXG5WSFByZW1pdW1JbnRyb1NlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgZGF0YTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoaWdobGlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZlYXR1cmVzOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBWSFByZW1pdW1JbnRyb1NlY3Rpb247Il19