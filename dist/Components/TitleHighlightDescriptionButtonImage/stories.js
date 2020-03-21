"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = {
  title: "VanHack Premium",
  highlight: "Get ready to get hired abroad",
  description: "Acquire career skills that will make you stand out from the herd! Live interview practice, profile review, exclusive webinars and more.",
  label: "JOIN VANHACK PREMIUM",
  image: require("../../../assets/images/img_hero_premium.png")
};
(0, _react2.storiesOf)("Components|Title Highlight Description Button Image", module).add("Default", function () {
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    title: items.title,
    highlight: items.highlight,
    description: items.description,
    label: items.label,
    image: items.image
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGl0bGVIaWdobGlnaHREZXNjcmlwdGlvbkJ1dHRvbkltYWdlL3N0b3JpZXMuanMiXSwibmFtZXMiOlsiaXRlbXMiLCJ0aXRsZSIsImhpZ2hsaWdodCIsImRlc2NyaXB0aW9uIiwibGFiZWwiLCJpbWFnZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJhZGQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFDVkMsRUFBQUEsS0FBSyxFQUFFLGlCQURHO0FBRVZDLEVBQUFBLFNBQVMsRUFBRSwrQkFGRDtBQUdWQyxFQUFBQSxXQUFXLEVBQUUseUlBSEg7QUFJVkMsRUFBQUEsS0FBSyxFQUFFLHNCQUpHO0FBS1ZDLEVBQUFBLEtBQUssRUFBRUMsT0FBTyxDQUFDLDZDQUFEO0FBTEosQ0FBZDtBQVFBLHVCQUFVLHFEQUFWLEVBQWlFQyxNQUFqRSxFQUNLQyxHQURMLENBQ1MsU0FEVCxFQUNvQjtBQUFBLHNCQUNaLDZCQUFDLFNBQUQscUJBQ0ksNkJBQUMsY0FBRDtBQUNJLElBQUEsS0FBSyxFQUFFUixLQUFLLENBQUNDLEtBRGpCO0FBRUksSUFBQSxTQUFTLEVBQUVELEtBQUssQ0FBQ0UsU0FGckI7QUFHSSxJQUFBLFdBQVcsRUFBRUYsS0FBSyxDQUFDRyxXQUh2QjtBQUlJLElBQUEsS0FBSyxFQUFFSCxLQUFLLENBQUNJLEtBSmpCO0FBS0ksSUFBQSxLQUFLLEVBQUVKLEtBQUssQ0FBQ0s7QUFMakIsSUFESixDQURZO0FBQUEsQ0FEcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uL0dyaWRcIjtcbmltcG9ydCBWSFRpdGxlSGlnaGxpZ2h0RGVzY3JpcHRpb25CdXR0b25JbWFnZSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBpdGVtcyA9IHtcbiAgICB0aXRsZTogXCJWYW5IYWNrIFByZW1pdW1cIixcbiAgICBoaWdobGlnaHQ6IFwiR2V0IHJlYWR5IHRvIGdldCBoaXJlZCBhYnJvYWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBY3F1aXJlIGNhcmVlciBza2lsbHMgdGhhdCB3aWxsIG1ha2UgeW91IHN0YW5kIG91dCBmcm9tIHRoZSBoZXJkISBMaXZlIGludGVydmlldyBwcmFjdGljZSwgcHJvZmlsZSByZXZpZXcsIGV4Y2x1c2l2ZSB3ZWJpbmFycyBhbmQgbW9yZS5cIixcbiAgICBsYWJlbDogXCJKT0lOIFZBTkhBQ0sgUFJFTUlVTVwiLFxuICAgIGltYWdlOiByZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWdfaGVyb19wcmVtaXVtLnBuZ1wiKSxcbn1cblxuc3Rvcmllc09mKFwiQ29tcG9uZW50c3xUaXRsZSBIaWdobGlnaHQgRGVzY3JpcHRpb24gQnV0dG9uIEltYWdlXCIsIG1vZHVsZSlcbiAgICAuYWRkKFwiRGVmYXVsdFwiLCAoKSA9PiAoXG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8VkhUaXRsZUhpZ2hsaWdodERlc2NyaXB0aW9uQnV0dG9uSW1hZ2VcbiAgICAgICAgICAgICAgICB0aXRsZT17aXRlbXMudGl0bGV9XG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0PXtpdGVtcy5oaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW1zLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGxhYmVsPXtpdGVtcy5sYWJlbH1cbiAgICAgICAgICAgICAgICBpbWFnZT17aXRlbXMuaW1hZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L1Jvdz5cbiAgICApKTsiXX0=