"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = exports.Bottom = exports.Top = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-radius: ", ";\n    padding: 24px;\n    position: relative;\n    box-sizing: border-box;\n    border-top: ", ";\n\n    :hover {\n        box-shadow: ", ";\n    }\n\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    background: blue;\n    height: 50%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50%;\n    background: red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Top = _styledComponents.default.span(_templateObject());

exports.Top = Top;

var Bottom = _styledComponents.default.span(_templateObject2());

exports.Bottom = Bottom;

var Card = _styledComponents.default.div(_templateObject3(), _Colors.default["white"], function (props) {
  return props.noBorder ? "0" : "6px";
}, function (props) {
  return props.favorite ? "3px solid ".concat(_Colors.default["yellow-dark"]) : 'none';
}, function (props) {
  return !props.noHover && "0 4px 14px 0 rgba(0, 0, 0, 0.1)";
}, function (_ref) {
  var noPadding = _ref.noPadding;
  return noPadding && "\n        padding: 0;\n    ";
}, function (_ref2) {
  var width = _ref2.width;
  return width && "\n        width: ".concat(width, ";\n    ");
}, function (_ref3) {
  var height = _ref3.height;
  return height && "\n        height: ".concat(height, ";\n    ");
}, function (_ref4) {
  var maxWidth = _ref4.maxWidth;
  return maxWidth && "\n    max-width: ".concat(maxWidth, ";\n    ");
}, function (_ref5) {
  var minHeight = _ref5.minHeight;
  return minHeight && "\n    min-height: ".concat(minHeight, ";\n    ");
});

exports.Card = Card;