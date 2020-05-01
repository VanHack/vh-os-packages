"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 18px;\n    text-decoration: none;\n    color: ", ";\n    cursor: pointer;\n    :hover {\n        color: ", ";\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: fit-content;\n    align-items: center;\n    padding: 12px 0;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n    color: ", ";\n    display: flex;\n    flex-direction: row;\n    :hover {\n        \n        color: ", ";\n        cursor: pointer;\n        /* background:linear-gradient(180deg, rgba(2,0,36,0) 25%, rgba(44,155,245,1) 25%, rgba(44,155,245,1) 75%, rgba(0,212,255,0) 75%) center right no-repeat; */\n        background-size: 2px 100%;\n\n        a{\n            \n            color: ", "; \n           \n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), _Colors.default["black-100"], _Colors.default["primary-light"], _Colors.default["primary-light"]);

exports.Wrapper = Wrapper;

var Link = _styledComponents.default.a(_templateObject2(), _Colors.default["black-100"], _Colors.default["primary-light"]);

exports.Link = Link;