"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = {
  sectionTitle: "Frequently Asking Questions",
  title: "Have questions about VanHack Premium?",
  description: "Give us your email and we’ll get in touch.",
  imgSvg: "meeting"
};
var faqs = [{
  question: "Do I need Premium to get a Job through VH?",
  answer: "No. Premium is a value-added service for people who wish to improve their professional skills. It does not guarantee you a job."
}, {
  question: "Are classes individual or group?",
  answer: "No. Premium is a value-added service for people who wish to improve their professional skills. It does not guarantee you a job."
}, {
  question: "Does premium offer regular English classes and IELTS preparation?",
  answer: "No. Premium is a value-added service for people who wish to improve their professional skills. It does not guarantee you a job."
}];
(0, _react2.storiesOf)("Sections|Premium/Faq", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f6f9",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    sectionTitle: items.sectionTitle,
    title: items.title,
    description: items.description,
    imgSvg: items.imgSvg,
    faqs: faqs,
    assigned: false
  }));
});