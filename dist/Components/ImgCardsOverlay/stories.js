"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = {
  cardLeft: {
    title: "250+",
    description: "VanHack Premium Members have been hired internationally"
  },
  cardRight: {
    title: "80%",
    description: "of Premium Members recommend Premium to their friends"
  }
};
(0, _react2.storiesOf)("Components|Img Cards Overlay", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#fff",
      padding: "24px"
    }
  }, _react.default.createElement(_index.default, {
    cardLeftTitle: items.cardLeft.title,
    cardLeftDescription: items.cardLeft.description,
    cardRightTitle: items.cardRight.title,
    cardRightDescription: items.cardRight.description,
    imgSvg: "bubble"
  }));
});