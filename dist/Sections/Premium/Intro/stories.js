"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* babel-plugin-inline-import '../../../assets/svg/icons/icon_interview.svg' */
var icon_interview = "data:image/svg+xml;base64,CmltcG9ydCAqIGFzIFJlYWN0IGZyb20gInJlYWN0IjsKCmNvbnN0ICBpY29uX2ludGVydmlldyA9IHByb3BzID0+ICgKICAgIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD17cHJvcHMud2lkdGggfHwgIjQ2In0gaGVpZ2h0PXtwcm9wcy5oZWlnaHQgfHwgIjQ2In0gZmlsbD17cHJvcHMuZmlsbCB8fCAibm9uZSJ9IHZpZXdCb3g9e3Byb3BzLnZpZXdCb3ggfHwgIjAgMCA0NiA0NiJ9PgogICAgICAgIAogICAgPGcgZmlsbD0iIzc4ODg5NCIgY2xpcFBhdGg9InVybCgjcHJlZml4X19jbGlwMCkiPgogICAgICAgIDxwYXRoIGQ9Ik01LjYzNyA0NC40NjZjLS4xNjctLjE2Ny0uMzk5LS4yNjMtLjYzNS0uMjYzLS4yMzcgMC0uNDY4LjA5Ni0uNjM1LjI2My0uMTY4LjE2Ny0uMjY0LjQtLjI2NC42MzZzLjA5Ni40NjguMjY0LjYzNWMuMTY3LjE2Ny4zOTguMjYzLjYzNS4yNjMuMjM2IDAgLjQ2OC0uMDk2LjYzNS0uMjYzLjE2Ny0uMTY3LjI2My0uNC4yNjMtLjYzNSAwLS4yMzctLjA5Ni0uNDY4LS4yNjMtLjYzNnpNMzMuNTE4IDM4LjExN2MtLjE2Ny0uMTY3LS4zOTktLjI2My0uNjM1LS4yNjNzLS40NjguMDk2LS42MzUuMjYzYy0uMTY3LjE2Ny0uMjY0LjQtLjI2NC42MzUgMCAuMjM3LjA5Ni40NjguMjY0LjYzNi4xNjcuMTY3LjM5OS4yNjMuNjM1LjI2M3MuNDY4LS4wOTYuNjM1LS4yNjRjLjE2Ny0uMTY3LjI2My0uMzk4LjI2My0uNjM1IDAtLjIzNi0uMDk2LS40NjgtLjI2My0uNjM1eiIvPgogICAgICAgIDxwYXRoIGQ9Ik00My4xMDIgMTQuNTJjLjY4LS42ODIgMS4xMDEtMS42MjMgMS4xMDEtMi42NnYtLjcyYzAtMi4wOC0xLjY5My0zLjc3My0zLjc3My0zLjc3My0yLjA4MSAwLTMuNzc0IDEuNjkzLTMuNzc0IDMuNzc0di43MThjMCAxLjAzOC40MjEgMS45NzkgMS4xMDEgMi42NjItMS40NzQuODEtMi41NDUgMi4yNjctMi44MjUgMy45ODdoLTQuMTE2Yy0xLjQ4NiAwLTIuNjk1IDEuMjA5LTIuNjk1IDIuNjk1IDAgLjMxNS4wNTUuNjE3LjE1NS44OTlIMTcuNzI0Yy4xLS4yODIuMTU1LS41ODQuMTU1LS44OTkgMC0xLjQ4Ni0xLjIxLTIuNjk1LTIuNjk1LTIuNjk1aC00LjExNmMtLjI4LTEuNzItMS4zNS0zLjE3Ny0yLjgyNS0zLjk4Ny42OC0uNjgzIDEuMS0xLjYyNCAxLjEtMi42NjJ2LS43MThjMC0yLjA4MS0xLjY5Mi0zLjc3NC0zLjc3My0zLjc3NC0yLjA4IDAtMy43NzMgMS42OTMtMy43NzMgMy43NzR2LjcxOGMwIDEuMDM4LjQyIDEuOTc5IDEuMSAyLjY2MkMxLjE3MyAxNS40NjcgMCAxNy4zMDMgMCAxOS40MDV2MTAuMDc4YzAgMi44MTUgMi4yOSA1LjEwNiA1LjEwNiA1LjEwNmg3LjExM3Y4LjU4YzAgLjM2NC4wNy43MTMuMTk2IDEuMDMzaC0zLjU1Yy0uNDk3IDAtLjg5OS40MDItLjg5OS44OTggMCAuNDk3LjQwMi44OTkuODk5Ljg5OWgzMi4xMzRjLjQ5NiAwIC44OTgtLjQwMi44OTgtLjg5OCAwLS40OTctLjQwMi0uODk5LS44OTgtLjg5OWgtNy40MTRjLjEyNi0uMzIuMTk2LS42NjkuMTk2LTEuMDMzdi0xLjAzM2MwLS40OTYtLjQwMi0uODk5LS44OTgtLjg5OXMtLjg5OS40MDMtLjg5OS44OTl2MS4wMzNjMCAuNTctLjQ2MyAxLjAzMy0xLjAzMyAxLjAzMy0uNTcgMC0xLjAzMy0uNDYzLTEuMDMzLTEuMDMzVjMxLjgyN2MwLTEuNCAxLjEzOS0yLjUzOCAyLjUzOC0yLjUzOGgxMS43NDd2LjE5NWMwIDEuODI0LTEuNDg0IDMuMzA5LTMuMzEgMy4zMDloLTguMDFjLS40OTYgMC0uODk5LjQwMi0uODk5Ljg5OHYxLjQzOGMwIC40OTYuNDAzLjg5OC44OTkuODk4cy44OTgtLjQwMi44OTgtLjg5OHYtLjU0aDcuMTEzYzIuODE1IDAgNS4xMDYtMi4yOSA1LjEwNi01LjEwNVYxOS40MDZjMC0yLjEwMy0xLjE3Mi0zLjkzOC0yLjg5OC00Ljg4NXptLTQuNjQ5LTMuMzhjMC0xLjA5Ljg4Ny0xLjk3NiAxLjk3Ny0xLjk3NnMxLjk3Ni44ODcgMS45NzYgMS45Nzd2LjcxOGMwIDEuMDktLjg4NiAxLjk3Ny0xLjk3NiAxLjk3Ny0xLjA5IDAtMS45NzctLjg4Ny0xLjk3Ny0xLjk3N3YtLjcxOHptLTM0Ljg2IDBjMC0xLjA5Ljg4Ny0xLjk3NiAxLjk3Ny0xLjk3NnMxLjk3Ny44ODcgMS45NzcgMS45Nzd2LjcxOGMwIDEuMDktLjg4NyAxLjk3Ny0xLjk3NyAxLjk3N3MtMS45NzYtLjg4Ny0xLjk3Ni0xLjk3N3YtLjcxOHptLTEuNzk2IDguMjY2YzAtMi4wOCAxLjY5My0zLjc3MyAzLjc3My0zLjc3MyAyLjA4MSAwIDMuNzc0IDEuNjkzIDMuNzc0IDMuNzczIDAgLjQ5Ni40MDIuODk5Ljg5OC44OTloNC45NDJjLjQ5NSAwIC44OTguNDAzLjg5OC44OThzLS40MDMuODk5LS44OTguODk5SDkuOTUyYy0xLjQyOSAwLTIuNzM1LS43ODMtMy40MS0yLjA0Mi0uMjM0LS40MzctLjc3OS0uNjAyLTEuMjE2LS4zNjgtLjQzOC4yMzUtLjYwMi43OC0uMzY4IDEuMjE3LjkgMS42NzggMi41NjYgMi43NzggNC40MzYgMi45NjItLjAzMy4wOTMtLjA1LjE5My0uMDUuMjk3djMuMzI0SDEuNzk3di04LjA4NnptMTEuMDg1IDguMDg2aC0xLjc0MXYtMy4zMjRjMC0uMDk0LS4wMTUtLjE4NC0uMDQxLS4yN2gxLjc4MmMtLjMwNy41My0uNDg0IDEuMTQzLS40ODQgMS43OTcgMCAuNjU1LjE3NyAxLjI2OC40ODQgMS43OTd6bTMuMiAxNS42NzhjMCAuNTctLjQ2NCAxLjAzMy0xLjAzMyAxLjAzMy0uNTcgMC0xLjAzMy0uNDYzLTEuMDMzLTEuMDMzVjMzLjY5YzAtLjQ5Ni0uNDAzLS44OTgtLjg5OS0uODk4aC04LjAxYy0xLjgyNiAwLTMuMzEtMS40ODUtMy4zMS0zLjMxdi0uMTk0SDEzLjU0M2MxLjQgMCAyLjUzOSAxLjEzOSAyLjUzOSAyLjUzOFY0My4xN3ptNC4yMjMgMS4wMzNoLTIuNjIyYy4xMjYtLjMyLjE5Ni0uNjY5LjE5Ni0xLjAzM1YzMS44MjdjMC0uOTQ3LS4zMDYtMS44MjQtLjgyNC0yLjUzOGgzLjI1djE0LjkxNHptMy41OTMgMGgtMS43OTZWMjkuMjloMS43OTZ2MTQuOTE0em00LjQyIDBoLTIuNjIzVjI5LjI5aDMuMjVjLS41MTguNzE0LS44MjQgMS41OS0uODI0IDIuNTM4VjQzLjE3YzAgLjM2NC4wNy43MTMuMTk2IDEuMDMzem0xLjY5LTE2LjcxSDE1Ljk5MmMtLjk5IDAtMS43OTctLjgwNy0xLjc5Ny0xLjc5OCAwLS45OS44MDYtMS43OTcgMS43OTctMS43OTdoMTQuMDE2Yy45OSAwIDEuNzk3LjgwNiAxLjc5NyAxLjc5NyAwIC45OTEtLjgwNiAxLjc5Ny0xLjc5NyAxLjc5N3ptNC44NTEtMy4zMjV2My4zMjRoLTEuNzQxYy4zMDctLjUyOS40ODQtMS4xNDIuNDg0LTEuNzk3IDAtLjY1NC0uMTc3LTEuMjY4LS40ODQtMS43OTdIMzQuOWMtLjAyNi4wODUtLjA0LjE3Ni0uMDQuMjd6bTkuMzQ0IDMuMzI0aC03LjU0N3YtMy4zMjRjMC0uMTA0LS4wMTctLjIwNC0uMDUtLjI5NyAxLjg3LS4xODQgMy41MzYtMS4yODQgNC40MzYtMi45NjIuMjM0LS40MzguMDctLjk4Mi0uMzY4LTEuMjE3LS40MzctLjIzNC0uOTgyLS4wNy0xLjIxNi4zNjgtLjY3NSAxLjI2LTEuOTgxIDIuMDQyLTMuNDEgMi4wNDJoLTUuMjMyYy0uNDk1IDAtLjg5OC0uNDA0LS44OTgtLjg5OXMuNDAzLS44OTguODk4LS44OThoNC45NDJjLjQ5NiAwIC44OTgtLjQwMy44OTgtLjg5OSAwLTIuMDggMS42OTMtMy43NzMgMy43NzQtMy43NzMgMi4wOCAwIDMuNzczIDEuNjkzIDMuNzczIDMuNzczdjguMDg2eiIvPgogICAgICAgIDxwYXRoIGQ9Ik0yOS40NjkgMEgxNi41M2MtMS40ODYgMC0yLjY5NSAxLjIxLTIuNjk1IDIuNjk1VjExLjVjMCAxLjQ4NiAxLjIwOSAyLjY5NSAyLjY5NSAyLjY5NWgzLjEzMmwyLjcwMiAyLjcwMmMuMTc1LjE3NS40MDUuMjYzLjYzNS4yNjMuMjMgMCAuNDYtLjA4OC42MzUtLjI2M2wyLjcwMi0yLjcwMmgzLjEzMmMxLjQ4NiAwIDIuNjk1LTEuMjA5IDIuNjk1LTIuNjk1VjIuNjk1QzMyLjE2NCAxLjIxIDMwLjk1NCAwIDI5LjQ2OSAwem0uODk4IDExLjVjMCAuNDk1LS40MDMuODk4LS44OTguODk4aC0zLjUwNGMtLjIzOCAwLS40NjcuMDk1LS42MzYuMjY0TDIzIDE0Ljk5MmwtMi4zMjktMi4zM2MtLjE2OC0uMTY5LS4zOTctLjI2NC0uNjM1LS4yNjRoLTMuNTA0Yy0uNDk1IDAtLjg5OC0uNDAzLS44OTgtLjg5OFYyLjY5NWMwLS40OTUuNDAzLS44OTguODk4LS44OThIMjkuNDdjLjQ5NSAwIC44OTguNDAzLjg5OC44OThWMTEuNXoiLz4KICAgICAgICA8cGF0aCBkPSJNMTkuNDEzIDYuMTE4Yy0uMTY4LS4xNjgtLjQtLjI2My0uNjM2LS4yNjNzLS40NjguMDk1LS42MzUuMjYzYy0uMTY3LjE2Ny0uMjYzLjQtLjI2My42MzUgMCAuMjM3LjA5Ni40NjkuMjYzLjYzNi4xNjcuMTY3LjQuMjYzLjYzNS4yNjMuMjM3IDAgLjQ2OC0uMDk2LjYzNi0uMjYzLjE2Ny0uMTY3LjI2My0uNC4yNjMtLjYzNnMtLjA5Ni0uNDY4LS4yNjMtLjYzNXpNMjMuNjM1IDYuMTE4Yy0uMTY3LS4xNjctLjM5OS0uMjYzLS42MzUtLjI2M3MtLjQ2OC4wOTYtLjYzNS4yNjNjLS4xNjcuMTY3LS4yNjMuNC0uMjYzLjYzNSAwIC4yMzcuMDk2LjQ2OS4yNjMuNjM2LjE2Ny4xNjcuMzk5LjI2My42MzUuMjYzcy40NjgtLjA5Ni42MzUtLjI2M2MuMTY3LS4xNjcuMjYzLS40LjI2My0uNjM2cy0uMDk2LS40NjgtLjI2My0uNjM1ek0yNy44NTggNi4xMThjLS4xNjctLjE2OC0uMzk5LS4yNjMtLjYzNS0uMjYzLS4yMzcgMC0uNDY4LjA5NS0uNjM2LjI2My0uMTY3LjE2Ny0uMjYzLjQtLjI2My42MzUgMCAuMjM3LjA5Ni40NjkuMjYzLjYzNi4xNjguMTY3LjQuMjYzLjYzNi4yNjNzLjQ2OC0uMDk2LjYzNS0uMjYzYy4xNjctLjE2Ny4yNjMtLjQuMjYzLS42MzZzLS4wOTYtLjQ2OC0uMjYzLS42MzV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9InByZWZpeF9fY2xpcDAiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwSDQ2VjQ2SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KCiAgICA8L3N2Zz4KICApCgpleHBvcnQgZGVmYXVsdCBpY29uX2ludGVydmlldw==";
var items = {
  title: "VanHack Premium",
  highlight: "Get ready to get hired abroad",
  description: "Acquire career skills that will make you stand out from the herd! Live interview practice, profile review, exclusive webinars and more.",
  label: "JOIN VANHACK PREMIUM",
  image: require("../../../assets/general/background/img_hero_premium.png")
};
var features = [{
  // icon: require('../../../assets/svg/icons/icon_interview.svg'),
  icon: "interview",
  title: "Improve your Interviewing Skills",
  description: "We help you learn the cultural and professional nuances with 40+ hours of live classes every month"
}, {
  // icon: require('../../../assets/svg/icons/icon_profile.svg'),
  icon: "profile",
  title: "Craft a world-class professional profile",
  description: "Our experts will help you update your profile. Using the right  format can make all the difference in your quest for an international job"
}, {
  // icon: require('../../../assets/svg/icons/icon_community.svg'),
  icon: "community",
  title: "Network with a global community",
  description: "Join thousands of motivated premium members from all over the world. Learn from your peers in a judgement-free environment"
}];
(0, _react2.storiesOf)("Sections|Premium/Intro", module).add("Default", function () {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_.default, {
    title: items.title,
    highlight: items.highlight,
    description: items.description,
    label: items.label,
    image: items.image,
    features: features
  }));
});