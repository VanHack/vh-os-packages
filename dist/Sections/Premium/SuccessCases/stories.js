"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = {
  sectionTitle: "Our Success Cases",
  title: "VANHACK PREMIUM CHANGE LIVES",
  highlight: "We've helped over 800 VanHackers get hired abroad in amazing companies in Canada and Europe.",
  imgBackgroundCards: "bubble",
  source: "https://www.youtube.com/embed/ZepkPNPQMrA",
  controls: true,
  poster: require("../../../assets/svg/logo/vanhack_logo.svg/index.js"),
  cardLeft: {
    title: "250+",
    description: "VanHack Premium Members have been hired internationally"
  },
  cardRight: {
    title: "80%",
    description: "of Premium Members recommend Premium to their friends"
  },
  imgVideo: require("../../../assets/general/background/img_video_premium_success_case.png"),
  iconVideo: "play",
  videoDescription: "How Marcelo got hired in Saskatoon, Canada as an Engineering Manager from Brazil",
  label: "See our youtube channel",
  to: "https://www.youtube.com/channel/UCmg0eAiV7f8LZf8vePG1tlA",
  iconLink: "arrow-right"
};
(0, _react2.storiesOf)("Sections|Premium/Success Cases", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#ffffff",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    sectionTitle: items.sectionTitle,
    title: items.title,
    highlight: items.highlight,
    imgBackgroundCards: items.imgBackgroundCards,
    cardLeftTitle: items.cardLeft.title,
    cardLeftDescription: items.cardLeft.description,
    cardRightTitle: items.cardRight.title,
    cardRightDescription: items.cardRight.description,
    imgVideo: items.imgVideo,
    iconVideo: items.iconVideo,
    videoDescription: items.videoDescription,
    label: items.label,
    to: items.to,
    iconLink: items.iconLink,
    source: items.source,
    controls: items.controls,
    poster: items.poster,
    width: items.width,
    height: items.height
  }));
});