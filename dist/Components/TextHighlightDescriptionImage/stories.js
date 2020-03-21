"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var premiumServices = [{
  title: "INTERVIEW CLASS",
  highlight: "Learn how to ace an interview and improve your English skills at the same time",
  description: "Our teachers specialize in English for interviews. With 40+ hours of live classes every month, you’re bound to find a slot that works in your timezone. You will receive personalized interaction and feedback in every class making this a unique experience.",
  image: require("../../../assets/images/img_premium_interview.svg"),
  reverse: false
}, {
  title: "PROFILE REVIEW",
  highlight: "Have experts review your VanHack profile - improve all your profiles at once",
  description: "All improvements directly translate to your resume and LinkedIn Profile. Impove all three at once! LinkedIn’s own data shows candidates with an improved profile are around 30% more likely to be hired.",
  image: require("../../../assets/images/img_premium_interview.svg"),
  reverse: true
}, {
  title: "PREMIUM SLACK GROUP",
  highlight: "Exclusive Premium Slack Group. Connect with thousands of  motivated Premium Members",
  description: "Get exciting information that’s not publicly available and access specific channels like #leap and #immigration where our specialists will answer your questions. Be motivated with the #I-got-a_job. And most of all, inspire each other in your common quest.",
  image: require("../../../assets/images/img_premium_interview.svg"),
  reverse: false
}, {
  title: "LIVE EXCLUSIVE WEBINARS",
  highlight: "CEOs, Senior Recruiters, Immigration Specialists share knowledge and answer your questions",
  description: "Get access to real experts and learn from them. There’s nothing quite like a live Q&A session with someone who’s been there and done that.",
  image: require("../../../assets/images/img_premium_interview.svg"),
  reverse: true
}];
(0, _react2.storiesOf)("Components|Text Highlight Description Image", module).add("Default", function () {
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    title: premiumServices[0].title,
    highlight: premiumServices[0].highlight,
    description: premiumServices[0].description,
    image: premiumServices[0].image,
    reverse: premiumServices[0].reverse
  }));
}).add("Reverse", function () {
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    title: premiumServices[1].title,
    highlight: premiumServices[1].highlight,
    description: premiumServices[1].description,
    image: premiumServices[1].image,
    reverse: premiumServices[1].reverse
  }));
}).add("Multiply", function () {
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      padding: "24px"
    }
  }, premiumServices.map(function (service) {
    return /*#__PURE__*/_react.default.createElement(_index.default, {
      title: service.title,
      highlight: service.highlight,
      description: service.description,
      image: service.image,
      reverse: service.reverse
    });
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dEhpZ2hsaWdodERlc2NyaXB0aW9uSW1hZ2Uvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJwcmVtaXVtU2VydmljZXMiLCJ0aXRsZSIsImhpZ2hsaWdodCIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJyZXF1aXJlIiwicmV2ZXJzZSIsIm1vZHVsZSIsImFkZCIsInBhZGRpbmciLCJtYXAiLCJzZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLENBQ3BCO0FBQ0lDLEVBQUFBLEtBQUssRUFBRSxpQkFEWDtBQUVJQyxFQUFBQSxTQUFTLEVBQUUsZ0ZBRmY7QUFHSUMsRUFBQUEsV0FBVyxFQUFFLGdRQUhqQjtBQUlJQyxFQUFBQSxLQUFLLEVBQUVDLE9BQU8sQ0FBQyxrREFBRCxDQUpsQjtBQUtJQyxFQUFBQSxPQUFPLEVBQUU7QUFMYixDQURvQixFQVFwQjtBQUNJTCxFQUFBQSxLQUFLLEVBQUUsZ0JBRFg7QUFFSUMsRUFBQUEsU0FBUyxFQUFFLDhFQUZmO0FBR0lDLEVBQUFBLFdBQVcsRUFBRSwwTUFIakI7QUFJSUMsRUFBQUEsS0FBSyxFQUFFQyxPQUFPLENBQUMsa0RBQUQsQ0FKbEI7QUFLSUMsRUFBQUEsT0FBTyxFQUFFO0FBTGIsQ0FSb0IsRUFlcEI7QUFDSUwsRUFBQUEsS0FBSyxFQUFFLHFCQURYO0FBRUlDLEVBQUFBLFNBQVMsRUFBRSxxRkFGZjtBQUdJQyxFQUFBQSxXQUFXLEVBQUUsaVFBSGpCO0FBSUlDLEVBQUFBLEtBQUssRUFBRUMsT0FBTyxDQUFDLGtEQUFELENBSmxCO0FBS0lDLEVBQUFBLE9BQU8sRUFBRTtBQUxiLENBZm9CLEVBc0JwQjtBQUNJTCxFQUFBQSxLQUFLLEVBQUUseUJBRFg7QUFFSUMsRUFBQUEsU0FBUyxFQUFFLDRGQUZmO0FBR0lDLEVBQUFBLFdBQVcsRUFBRSw0SUFIakI7QUFJSUMsRUFBQUEsS0FBSyxFQUFFQyxPQUFPLENBQUMsa0RBQUQsQ0FKbEI7QUFLSUMsRUFBQUEsT0FBTyxFQUFFO0FBTGIsQ0F0Qm9CLENBQXhCO0FBK0JBLHVCQUFVLDZDQUFWLEVBQXlEQyxNQUF6RCxFQUNLQyxHQURMLENBQ1MsU0FEVCxFQUNvQjtBQUFBLHNCQUNaLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFaLGtCQUNJLDZCQUFDLGNBQUQ7QUFDSSxJQUFBLEtBQUssRUFBRVQsZUFBZSxDQUFDLENBQUQsQ0FBZixDQUFtQkMsS0FEOUI7QUFFSSxJQUFBLFNBQVMsRUFBRUQsZUFBZSxDQUFDLENBQUQsQ0FBZixDQUFtQkUsU0FGbEM7QUFHSSxJQUFBLFdBQVcsRUFBRUYsZUFBZSxDQUFDLENBQUQsQ0FBZixDQUFtQkcsV0FIcEM7QUFJSSxJQUFBLEtBQUssRUFBRUgsZUFBZSxDQUFDLENBQUQsQ0FBZixDQUFtQkksS0FKOUI7QUFLSSxJQUFBLE9BQU8sRUFBRUosZUFBZSxDQUFDLENBQUQsQ0FBZixDQUFtQk07QUFMaEMsSUFESixDQURZO0FBQUEsQ0FEcEIsRUFZS0UsR0FaTCxDQVlTLFNBWlQsRUFZb0I7QUFBQSxzQkFDWiw2QkFBQyxTQUFEO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFBWixrQkFDSSw2QkFBQyxjQUFEO0FBQ0ksSUFBQSxLQUFLLEVBQUVULGVBQWUsQ0FBQyxDQUFELENBQWYsQ0FBbUJDLEtBRDlCO0FBRUksSUFBQSxTQUFTLEVBQUVELGVBQWUsQ0FBQyxDQUFELENBQWYsQ0FBbUJFLFNBRmxDO0FBR0ksSUFBQSxXQUFXLEVBQUVGLGVBQWUsQ0FBQyxDQUFELENBQWYsQ0FBbUJHLFdBSHBDO0FBSUksSUFBQSxLQUFLLEVBQUVILGVBQWUsQ0FBQyxDQUFELENBQWYsQ0FBbUJJLEtBSjlCO0FBS0ksSUFBQSxPQUFPLEVBQUVKLGVBQWUsQ0FBQyxDQUFELENBQWYsQ0FBbUJNO0FBTGhDLElBREosQ0FEWTtBQUFBLENBWnBCLEVBdUJLRSxHQXZCTCxDQXVCUyxVQXZCVCxFQXVCcUI7QUFBQSxzQkFDYiw2QkFBQyxTQUFEO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFBWixLQUNLVCxlQUFlLENBQUNVLEdBQWhCLENBQW9CLFVBQUFDLE9BQU87QUFBQSx3QkFDeEIsNkJBQUMsY0FBRDtBQUNJLE1BQUEsS0FBSyxFQUFFQSxPQUFPLENBQUNWLEtBRG5CO0FBRUksTUFBQSxTQUFTLEVBQUVVLE9BQU8sQ0FBQ1QsU0FGdkI7QUFHSSxNQUFBLFdBQVcsRUFBRVMsT0FBTyxDQUFDUixXQUh6QjtBQUlJLE1BQUEsS0FBSyxFQUFFUSxPQUFPLENBQUNQLEtBSm5CO0FBS0ksTUFBQSxPQUFPLEVBQUVPLE9BQU8sQ0FBQ0w7QUFMckIsTUFEd0I7QUFBQSxHQUEzQixDQURMLENBRGE7QUFBQSxDQXZCckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uL0dyaWRcIjtcbmltcG9ydCBWSFRpdGxlSGlnaGxpZ2h0RGVzY3JpcHRpb25CdXR0b25JbWFnZSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBwcmVtaXVtU2VydmljZXMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJJTlRFUlZJRVcgQ0xBU1NcIixcbiAgICAgICAgaGlnaGxpZ2h0OiBcIkxlYXJuIGhvdyB0byBhY2UgYW4gaW50ZXJ2aWV3IGFuZCBpbXByb3ZlIHlvdXIgRW5nbGlzaCBza2lsbHMgYXQgdGhlIHNhbWUgdGltZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJPdXIgdGVhY2hlcnMgc3BlY2lhbGl6ZSBpbiBFbmdsaXNoIGZvciBpbnRlcnZpZXdzLiBXaXRoIDQwKyBob3VycyBvZiBsaXZlIGNsYXNzZXMgZXZlcnkgbW9udGgsIHlvdeKAmXJlIGJvdW5kIHRvIGZpbmQgYSBzbG90IHRoYXQgd29ya3MgaW4geW91ciB0aW1lem9uZS4gWW91IHdpbGwgcmVjZWl2ZSBwZXJzb25hbGl6ZWQgaW50ZXJhY3Rpb24gYW5kIGZlZWRiYWNrIGluIGV2ZXJ5IGNsYXNzIG1ha2luZyB0aGlzIGEgdW5pcXVlIGV4cGVyaWVuY2UuXCIsXG4gICAgICAgIGltYWdlOiByZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWdfcHJlbWl1bV9pbnRlcnZpZXcuc3ZnXCIpLFxuICAgICAgICByZXZlcnNlOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiUFJPRklMRSBSRVZJRVdcIixcbiAgICAgICAgaGlnaGxpZ2h0OiBcIkhhdmUgZXhwZXJ0cyByZXZpZXcgeW91ciBWYW5IYWNrIHByb2ZpbGUgLSBpbXByb3ZlIGFsbCB5b3VyIHByb2ZpbGVzIGF0IG9uY2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQWxsIGltcHJvdmVtZW50cyBkaXJlY3RseSB0cmFuc2xhdGUgdG8geW91ciByZXN1bWUgYW5kIExpbmtlZEluIFByb2ZpbGUuIEltcG92ZSBhbGwgdGhyZWUgYXQgb25jZSEgTGlua2VkSW7igJlzIG93biBkYXRhIHNob3dzIGNhbmRpZGF0ZXMgd2l0aCBhbiBpbXByb3ZlZCBwcm9maWxlIGFyZSBhcm91bmQgMzAlIG1vcmUgbGlrZWx5IHRvIGJlIGhpcmVkLlwiLFxuICAgICAgICBpbWFnZTogcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1nX3ByZW1pdW1faW50ZXJ2aWV3LnN2Z1wiKSxcbiAgICAgICAgcmV2ZXJzZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiUFJFTUlVTSBTTEFDSyBHUk9VUFwiLFxuICAgICAgICBoaWdobGlnaHQ6IFwiRXhjbHVzaXZlIFByZW1pdW0gU2xhY2sgR3JvdXAuIENvbm5lY3Qgd2l0aCB0aG91c2FuZHMgb2YgIG1vdGl2YXRlZCBQcmVtaXVtIE1lbWJlcnNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiR2V0IGV4Y2l0aW5nIGluZm9ybWF0aW9uIHRoYXTigJlzIG5vdCBwdWJsaWNseSBhdmFpbGFibGUgYW5kIGFjY2VzcyBzcGVjaWZpYyBjaGFubmVscyBsaWtlICNsZWFwIGFuZCAjaW1taWdyYXRpb24gd2hlcmUgb3VyIHNwZWNpYWxpc3RzIHdpbGwgYW5zd2VyIHlvdXIgcXVlc3Rpb25zLiBCZSBtb3RpdmF0ZWQgd2l0aCB0aGUgI0ktZ290LWFfam9iLiBBbmQgbW9zdCBvZiBhbGwsIGluc3BpcmUgZWFjaCBvdGhlciBpbiB5b3VyIGNvbW1vbiBxdWVzdC5cIixcbiAgICAgICAgaW1hZ2U6IHJlcXVpcmUoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ltZ19wcmVtaXVtX2ludGVydmlldy5zdmdcIiksXG4gICAgICAgIHJldmVyc2U6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJMSVZFIEVYQ0xVU0lWRSBXRUJJTkFSU1wiLFxuICAgICAgICBoaWdobGlnaHQ6IFwiQ0VPcywgU2VuaW9yIFJlY3J1aXRlcnMsIEltbWlncmF0aW9uIFNwZWNpYWxpc3RzIHNoYXJlIGtub3dsZWRnZSBhbmQgYW5zd2VyIHlvdXIgcXVlc3Rpb25zXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkdldCBhY2Nlc3MgdG8gcmVhbCBleHBlcnRzIGFuZCBsZWFybiBmcm9tIHRoZW0uIFRoZXJl4oCZcyBub3RoaW5nIHF1aXRlIGxpa2UgYSBsaXZlIFEmQSBzZXNzaW9uIHdpdGggc29tZW9uZSB3aG/igJlzIGJlZW4gdGhlcmUgYW5kIGRvbmUgdGhhdC5cIixcbiAgICAgICAgaW1hZ2U6IHJlcXVpcmUoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ltZ19wcmVtaXVtX2ludGVydmlldy5zdmdcIiksXG4gICAgICAgIHJldmVyc2U6IHRydWUsXG4gICAgfSxcbl07XG5cbnN0b3JpZXNPZihcIkNvbXBvbmVudHN8VGV4dCBIaWdobGlnaHQgRGVzY3JpcHRpb24gSW1hZ2VcIiwgbW9kdWxlKVxuICAgIC5hZGQoXCJEZWZhdWx0XCIsICgpID0+IChcbiAgICAgICAgPFJvdyBzdHlsZT17eyBwYWRkaW5nOiBcIjI0cHhcIn19PlxuICAgICAgICAgICAgPFZIVGl0bGVIaWdobGlnaHREZXNjcmlwdGlvbkJ1dHRvbkltYWdlXG4gICAgICAgICAgICAgICAgdGl0bGU9e3ByZW1pdW1TZXJ2aWNlc1swXS50aXRsZX1cbiAgICAgICAgICAgICAgICBoaWdobGlnaHQ9e3ByZW1pdW1TZXJ2aWNlc1swXS5oaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3ByZW1pdW1TZXJ2aWNlc1swXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBpbWFnZT17cHJlbWl1bVNlcnZpY2VzWzBdLmltYWdlfVxuICAgICAgICAgICAgICAgIHJldmVyc2U9e3ByZW1pdW1TZXJ2aWNlc1swXS5yZXZlcnNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgKSlcbiAgICAuYWRkKFwiUmV2ZXJzZVwiLCAoKSA9PiAoXG4gICAgICAgIDxSb3cgc3R5bGU9e3sgcGFkZGluZzogXCIyNHB4XCJ9fT5cbiAgICAgICAgICAgIDxWSFRpdGxlSGlnaGxpZ2h0RGVzY3JpcHRpb25CdXR0b25JbWFnZVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcmVtaXVtU2VydmljZXNbMV0udGl0bGV9XG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0PXtwcmVtaXVtU2VydmljZXNbMV0uaGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcmVtaXVtU2VydmljZXNbMV0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgaW1hZ2U9e3ByZW1pdW1TZXJ2aWNlc1sxXS5pbWFnZX1cbiAgICAgICAgICAgICAgICByZXZlcnNlPXtwcmVtaXVtU2VydmljZXNbMV0ucmV2ZXJzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvUm93PlxuICAgICkpXG4gICAgLmFkZChcIk11bHRpcGx5XCIsICgpID0+IChcbiAgICAgICAgPFJvdyBzdHlsZT17eyBwYWRkaW5nOiBcIjI0cHhcIn19PlxuICAgICAgICAgICAge3ByZW1pdW1TZXJ2aWNlcy5tYXAoc2VydmljZSA9PiAoXG4gICAgICAgICAgICAgICAgPFZIVGl0bGVIaWdobGlnaHREZXNjcmlwdGlvbkJ1dHRvbkltYWdlXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtzZXJ2aWNlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQ9e3NlcnZpY2UuaGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17c2VydmljZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3NlcnZpY2UuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIHJldmVyc2U9e3NlcnZpY2UucmV2ZXJzZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvUm93PlxuICAgICkpO1xuICAgICJdfQ==