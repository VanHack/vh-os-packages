"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _index = _interopRequireDefault(require("../../../../assets/icons/icon_medal.svg/index.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cardItems = [{
  show: false,
  save: "",
  period: "Month",
  price: "65",
  unit: "CAD$/month",
  subscription: "Renew every month",
  cta: "Get Started",
  outlineBtn: true,
  note: ""
}, {
  show: true,
  save: "Save 15%",
  noHoverChip: true,
  transparentChip: true,
  period: "Month",
  price: "65",
  unit: "CAD$/month",
  subscription: "Renew every month",
  cta: "Get Started",
  outlineBtn: true,
  note: ""
}, {
  show: true,
  save: "Save almost 25%",
  noHoverChip: true,
  transparentChip: true,
  round: true,
  period: "Month",
  price: "65",
  unit: "CAD$/month",
  subscription: "Renew every month",
  cta: "Get Started",
  secondaryBtn: true,
  note: "The choice of 46% of premium members"
}];
(0, _react2.storiesOf)("Sections|Premium/Pricing", module).add("Default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "rgba(203, 248, 251, 0.44)",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    sectionTitle: "Pricing",
    source: _index.default,
    title: "30 Days Money Back Guarantee",
    description: "If you're not getting incredible value and feeling more prepared than ever to get a job in Canada or Europe in the first 30 days, just talk to us and we'll refund 100% of your purchase, no questions asked.",
    cardItems: cardItems,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL1NlY3Rpb25zL1ByZW1pdW0vUHJpY2luZy9zdG9yaWVzLmpzIl0sIm5hbWVzIjpbImNhcmRJdGVtcyIsInNob3ciLCJzYXZlIiwicGVyaW9kIiwicHJpY2UiLCJ1bml0Iiwic3Vic2NyaXB0aW9uIiwiY3RhIiwib3V0bGluZUJ0biIsIm5vdGUiLCJub0hvdmVyQ2hpcCIsInRyYW5zcGFyZW50Q2hpcCIsInJvdW5kIiwic2Vjb25kYXJ5QnRuIiwibW9kdWxlIiwiYWRkIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwicGFkZGluZyIsImljb25NZWRhbCIsImV2ZW50IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNkO0FBQ0lDLEVBQUFBLElBQUksRUFBRSxLQURWO0FBRUlDLEVBQUFBLElBQUksRUFBRSxFQUZWO0FBR0lDLEVBQUFBLE1BQU0sRUFBRSxPQUhaO0FBSUlDLEVBQUFBLEtBQUssRUFBRSxJQUpYO0FBS0lDLEVBQUFBLElBQUksRUFBRSxZQUxWO0FBTUlDLEVBQUFBLFlBQVksRUFBRSxtQkFObEI7QUFPSUMsRUFBQUEsR0FBRyxFQUFFLGFBUFQ7QUFRSUMsRUFBQUEsVUFBVSxFQUFFLElBUmhCO0FBU0lDLEVBQUFBLElBQUksRUFBRTtBQVRWLENBRGMsRUFZZDtBQUNJUixFQUFBQSxJQUFJLEVBQUUsSUFEVjtBQUVJQyxFQUFBQSxJQUFJLEVBQUUsVUFGVjtBQUdJUSxFQUFBQSxXQUFXLEVBQUUsSUFIakI7QUFJSUMsRUFBQUEsZUFBZSxFQUFFLElBSnJCO0FBS0lSLEVBQUFBLE1BQU0sRUFBRSxPQUxaO0FBTUlDLEVBQUFBLEtBQUssRUFBRSxJQU5YO0FBT0lDLEVBQUFBLElBQUksRUFBRSxZQVBWO0FBUUlDLEVBQUFBLFlBQVksRUFBRSxtQkFSbEI7QUFTSUMsRUFBQUEsR0FBRyxFQUFFLGFBVFQ7QUFVSUMsRUFBQUEsVUFBVSxFQUFFLElBVmhCO0FBV0lDLEVBQUFBLElBQUksRUFBRTtBQVhWLENBWmMsRUF5QmQ7QUFDSVIsRUFBQUEsSUFBSSxFQUFFLElBRFY7QUFFSUMsRUFBQUEsSUFBSSxFQUFFLGlCQUZWO0FBR0lRLEVBQUFBLFdBQVcsRUFBRSxJQUhqQjtBQUlJQyxFQUFBQSxlQUFlLEVBQUUsSUFKckI7QUFLSUMsRUFBQUEsS0FBSyxFQUFFLElBTFg7QUFNSVQsRUFBQUEsTUFBTSxFQUFFLE9BTlo7QUFPSUMsRUFBQUEsS0FBSyxFQUFFLElBUFg7QUFRSUMsRUFBQUEsSUFBSSxFQUFFLFlBUlY7QUFTSUMsRUFBQUEsWUFBWSxFQUFFLG1CQVRsQjtBQVVJQyxFQUFBQSxHQUFHLEVBQUUsYUFWVDtBQVdJTSxFQUFBQSxZQUFZLEVBQUUsSUFYbEI7QUFZSUosRUFBQUEsSUFBSSxFQUFFO0FBWlYsQ0F6QmMsQ0FBbEI7QUF5Q0EsdUJBQVUsMEJBQVYsRUFBc0NLLE1BQXRDLEVBQ0tDLEdBREwsQ0FDUyxTQURULEVBQ29CO0FBQUEsc0JBQ1o7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxlQUFlLEVBQUUsMkJBQW5CO0FBQWdEQyxNQUFBQSxNQUFNLEVBQUUsT0FBeEQ7QUFBaUVDLE1BQUFBLE9BQU8sRUFBRTtBQUExRTtBQUFaLGtCQUNJLDZCQUFDLFNBQUQ7QUFDSSxJQUFBLFlBQVksRUFBQyxTQURqQjtBQUVJLElBQUEsTUFBTSxFQUFFQyxjQUZaO0FBR0ksSUFBQSxLQUFLLEVBQUMsOEJBSFY7QUFJSSxJQUFBLFdBQVcsRUFBQywrTUFKaEI7QUFLSSxJQUFBLFNBQVMsRUFBRW5CLFNBTGY7QUFNSSxJQUFBLE9BQU8sRUFBRSxpQkFBQ29CLEtBQUQ7QUFBQSxhQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFYO0FBQUE7QUFOYixJQURKLENBRFk7QUFBQSxDQURwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgVkhQcmVtaXVtUHJpY2luZ1NlY3Rpb24gZnJvbSBcIi5cIjtcblxuaW1wb3J0IGljb25NZWRhbCBmcm9tIFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25fbWVkYWwuc3ZnL2luZGV4LmpzeFwiO1xuXG5jb25zdCBjYXJkSXRlbXMgPSBbXG4gICAge1xuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgc2F2ZTogXCJcIixcbiAgICAgICAgcGVyaW9kOiBcIk1vbnRoXCIsXG4gICAgICAgIHByaWNlOiBcIjY1XCIsXG4gICAgICAgIHVuaXQ6IFwiQ0FEJC9tb250aFwiLFxuICAgICAgICBzdWJzY3JpcHRpb246IFwiUmVuZXcgZXZlcnkgbW9udGhcIixcbiAgICAgICAgY3RhOiBcIkdldCBTdGFydGVkXCIsXG4gICAgICAgIG91dGxpbmVCdG46IHRydWUsXG4gICAgICAgIG5vdGU6IFwiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIHNhdmU6IFwiU2F2ZSAxNSVcIixcbiAgICAgICAgbm9Ib3ZlckNoaXA6IHRydWUsXG4gICAgICAgIHRyYW5zcGFyZW50Q2hpcDogdHJ1ZSxcbiAgICAgICAgcGVyaW9kOiBcIk1vbnRoXCIsXG4gICAgICAgIHByaWNlOiBcIjY1XCIsXG4gICAgICAgIHVuaXQ6IFwiQ0FEJC9tb250aFwiLFxuICAgICAgICBzdWJzY3JpcHRpb246IFwiUmVuZXcgZXZlcnkgbW9udGhcIixcbiAgICAgICAgY3RhOiBcIkdldCBTdGFydGVkXCIsXG4gICAgICAgIG91dGxpbmVCdG46IHRydWUsXG4gICAgICAgIG5vdGU6IFwiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIHNhdmU6IFwiU2F2ZSBhbG1vc3QgMjUlXCIsXG4gICAgICAgIG5vSG92ZXJDaGlwOiB0cnVlLFxuICAgICAgICB0cmFuc3BhcmVudENoaXA6IHRydWUsXG4gICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICBwZXJpb2Q6IFwiTW9udGhcIixcbiAgICAgICAgcHJpY2U6IFwiNjVcIixcbiAgICAgICAgdW5pdDogXCJDQUQkL21vbnRoXCIsXG4gICAgICAgIHN1YnNjcmlwdGlvbjogXCJSZW5ldyBldmVyeSBtb250aFwiLFxuICAgICAgICBjdGE6IFwiR2V0IFN0YXJ0ZWRcIixcbiAgICAgICAgc2Vjb25kYXJ5QnRuOiB0cnVlLFxuICAgICAgICBub3RlOiBcIlRoZSBjaG9pY2Ugb2YgNDYlIG9mIHByZW1pdW0gbWVtYmVyc1wiLFxuICAgIH0sXG5dO1xuXG5zdG9yaWVzT2YoXCJTZWN0aW9uc3xQcmVtaXVtL1ByaWNpbmdcIiwgbW9kdWxlKVxuICAgIC5hZGQoXCJEZWZhdWx0XCIsICgpID0+IChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMDMsIDI0OCwgMjUxLCAwLjQ0KVwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgICAgICAgICA8VkhQcmVtaXVtUHJpY2luZ1NlY3Rpb25cbiAgICAgICAgICAgICAgICBzZWN0aW9uVGl0bGU9XCJQcmljaW5nXCJcbiAgICAgICAgICAgICAgICBzb3VyY2U9e2ljb25NZWRhbH1cbiAgICAgICAgICAgICAgICB0aXRsZT1cIjMwIERheXMgTW9uZXkgQmFjayBHdWFyYW50ZWVcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSWYgeW91J3JlIG5vdCBnZXR0aW5nIGluY3JlZGlibGUgdmFsdWUgYW5kIGZlZWxpbmcgbW9yZSBwcmVwYXJlZCB0aGFuIGV2ZXIgdG8gZ2V0IGEgam9iIGluIENhbmFkYSBvciBFdXJvcGUgaW4gdGhlIGZpcnN0IDMwIGRheXMsIGp1c3QgdGFsayB0byB1cyBhbmQgd2UnbGwgcmVmdW5kIDEwMCUgb2YgeW91ciBwdXJjaGFzZSwgbm8gcXVlc3Rpb25zIGFza2VkLlwiXG4gICAgICAgICAgICAgICAgY2FyZEl0ZW1zPXtjYXJkSXRlbXN9XG4gICAgICAgICAgICAgICAgb25FdmVudD17KGV2ZW50KSA9PiBjb25zb2xlLmxvZyhldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApKTtcbiJdfQ==