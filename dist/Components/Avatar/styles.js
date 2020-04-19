"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);\n  background-image: url(", ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 50%;\n  text-align: center;\n  align-content: center;\n  margin: ", ";\n\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", ";\n\n    ", ";\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Avatar = _styledComponents.default.div(_templateObject(), function (props) {
  return props.image && props.image;
}, function (props) {
  return props.center ? "0 auto" : "0";
}, function (_ref) {
  var showCursor = _ref.showCursor;
  return showCursor && "\n      cursor: pointer;\n  ";
}, function (_ref2) {
  var size = _ref2.size;
  return size === "xxl" && "\n    width: 120px;\n    height: 120px;\n  ";
}, function (_ref3) {
  var size = _ref3.size;
  return size === "xl" && "\n    width: 96px;\n    height: 96px;\n  ";
}, function (_ref4) {
  var size = _ref4.size;
  return size === "lg" && "\n    width: 48px;\n    height: 48px;\n  ";
}, function (_ref5) {
  var size = _ref5.size;
  return size === "md2" && "\n    width: 42px;\n    height: 42px;\n  ";
}, function (_ref6) {
  var size = _ref6.size;
  return size === "md" && "\n    width: 32px;\n    height: 32px;\n  ";
}, function (_ref7) {
  var size = _ref7.size;
  return size === "sm" && "\n    width: 24px;\n    height: 24px;\n  ";
}, function (_ref8) {
  var size = _ref8.size;
  return size === "xs" && "\n    width: 16px;\n    height: 16px;\n  ";
}, function (_ref9) {
  var loading = _ref9.loading;
  return loading && "\n      filter: blur(4px);\n  ";
}, function (_ref10) {
  var uploading = _ref10.uploading;
  return uploading && "\n      filter: blur(".concat(uploading, "px);\n      border: solid 1px;\n  ");
});

exports.Avatar = Avatar;