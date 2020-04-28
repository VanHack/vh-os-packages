"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmationSection = exports.Content = exports.Close = exports.Header = exports.ModalContainer = exports.ModalWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-column-gap: 1rem;\n  justify-content: end;\n  margin-top: 2rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 1rem;\n  font-family: Roboto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  float: right;\n  color: #000000;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 95% 5%;\n  margin: 0;\n  padding: 0;\n  font-family: NunitoSans, sans-serif;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius:9px;\n  margin: 12px auto;\n  max-width: 90%;\n  width: 100%;\n  min-height: 10vh;\n\n  ", "\n  ", "\n\n  ", "\n\n  padding: 33px;\n  background: rgb(255,255,255);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  overflow-y: scroll;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: ", ";\n  background-color: rgba(0, 0, 0, 0.75);\n  z-index: 666;\n  margin-top: ", "\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.open ? "block" : "none";
}, function (props) {
  return props.marginTop ? props.marginTop : '';
});

exports.ModalWrapper = ModalWrapper;

var ModalContainer = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var width = _ref.width;
  return width && "\n    width: ".concat(width, ";\n  ");
}, function (_ref2) {
  var maxWidth = _ref2.maxWidth;
  return maxWidth && "\n    max-width: ".concat(maxWidth, ";\n  ");
}, function (_ref3) {
  var height = _ref3.height;
  return height && "\n    height: ".concat(height, ";\n  ");
});

exports.ModalContainer = ModalContainer;

var Header = _styledComponents.default.div(_templateObject3(), _Colors.default["black-90"]);

exports.Header = Header;

var Close = _styledComponents.default.span(_templateObject4());

exports.Close = Close;

var Content = _styledComponents.default.div(_templateObject5());

exports.Content = Content;

var ConfirmationSection = _styledComponents.default.div(_templateObject6());

exports.ConfirmationSection = ConfirmationSection;