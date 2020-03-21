"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../TitleDescription/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHInfoTitleDescription = function VHInfoTitleDescription(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    className: "vh-info-title-description",
    data: props.data,
    description: props.rightTitle,
    descriptionColor: "gray-30",
    descriptionVariant: "platform1",
    inline: true,
    title: props.title,
    titleColor: "gray-90",
    titleVariant: "subtitle3"
  }), /*#__PURE__*/_react.default.createElement(_index.default, {
    className: "vh-info-title-description",
    data: props.data,
    title: props.description,
    titleColor: "gray-50",
    titleVariant: "platform1"
  }));
};

VHInfoTitleDescription.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  rightTitle: _propTypes.default.string,
  description: _propTypes.default.string,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHInfoTitleDescription;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5mb1RpdGxlRGVzY3JpcHRpb24vaW5kZXguanN4Il0sIm5hbWVzIjpbIlZISW5mb1RpdGxlRGVzY3JpcHRpb24iLCJwcm9wcyIsImRhdGEiLCJyaWdodFRpdGxlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsIm9uRXZlbnQiLCJQcm9wVHlwZXMiLCJmdW5jIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBR0EsSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFBQyxLQUFLLEVBQUk7QUFFcEMsc0JBQ0ksNkJBQUMsU0FBRCxxQkFDSSw2QkFBQyxjQUFEO0FBQ0ksSUFBQSxTQUFTLEVBQUMsMkJBRGQ7QUFFSSxJQUFBLElBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUZoQjtBQUdJLElBQUEsV0FBVyxFQUFFRCxLQUFLLENBQUNFLFVBSHZCO0FBSUksSUFBQSxnQkFBZ0IsRUFBQyxTQUpyQjtBQUtJLElBQUEsa0JBQWtCLEVBQUMsV0FMdkI7QUFNSSxJQUFBLE1BQU0sTUFOVjtBQU9JLElBQUEsS0FBSyxFQUFFRixLQUFLLENBQUNHLEtBUGpCO0FBUUksSUFBQSxVQUFVLEVBQUMsU0FSZjtBQVNJLElBQUEsWUFBWSxFQUFDO0FBVGpCLElBREosZUFZSSw2QkFBQyxjQUFEO0FBQ0ksSUFBQSxTQUFTLEVBQUMsMkJBRGQ7QUFFSSxJQUFBLElBQUksRUFBRUgsS0FBSyxDQUFDQyxJQUZoQjtBQUdJLElBQUEsS0FBSyxFQUFFRCxLQUFLLENBQUNJLFdBSGpCO0FBSUksSUFBQSxVQUFVLEVBQUMsU0FKZjtBQUtJLElBQUEsWUFBWSxFQUFDO0FBTGpCLElBWkosQ0FESjtBQXNCSCxDQXhCRDs7QUEwQkFMLHNCQUFzQixDQUFDTSxTQUF2QixHQUFtQztBQUMvQkMsRUFBQUEsT0FBTyxFQUFFQyxtQkFBVUMsSUFEWTtBQUUvQkwsRUFBQUEsS0FBSyxFQUFFSSxtQkFBVUUsTUFBVixDQUFpQkMsVUFGTztBQUcvQlIsRUFBQUEsVUFBVSxFQUFFSyxtQkFBVUUsTUFIUztBQUkvQkwsRUFBQUEsV0FBVyxFQUFFRyxtQkFBVUUsTUFKUTtBQUsvQlIsRUFBQUEsSUFBSSxFQUFFTSxtQkFBVUksU0FBVixDQUFvQixDQUFDSixtQkFBVUUsTUFBWCxFQUFtQkYsbUJBQVVLLE1BQTdCLENBQXBCLENBTHlCO0FBTS9CQyxFQUFBQSxTQUFTLEVBQUVOLG1CQUFVRTtBQU5VLENBQW5DO2VBU2VWLHNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vR3JpZFwiO1xuaW1wb3J0IFZIVGl0bGVEZXNjcmlwdGlvbiBmcm9tIFwiLi4vVGl0bGVEZXNjcmlwdGlvbi9pbmRleFwiO1xuXG5cbmNvbnN0IFZISW5mb1RpdGxlRGVzY3JpcHRpb24gPSBwcm9wcyA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Um93PlxuICAgICAgICAgICAgPFZIVGl0bGVEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZoLWluZm8tdGl0bGUtZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzLmRhdGF9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLnJpZ2h0VGl0bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25Db2xvcj1cImdyYXktMzBcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVmFyaWFudD1cInBsYXRmb3JtMVwiXG4gICAgICAgICAgICAgICAgaW5saW5lXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgIHRpdGxlQ29sb3I9XCJncmF5LTkwXCJcbiAgICAgICAgICAgICAgICB0aXRsZVZhcmlhbnQ9XCJzdWJ0aXRsZTNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWSFRpdGxlRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2aC1pbmZvLXRpdGxlLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBkYXRhPXtwcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICB0aXRsZUNvbG9yPVwiZ3JheS01MFwiXG4gICAgICAgICAgICAgICAgdGl0bGVWYXJpYW50PVwicGxhdGZvcm0xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvUm93PlxuICAgIClcbn1cblxuVkhJbmZvVGl0bGVEZXNjcmlwdGlvbi5wcm9wVHlwZXMgPSB7XG4gICAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByaWdodFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRhdGE6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhJbmZvVGl0bGVEZXNjcmlwdGlvbjtcbiJdfQ==