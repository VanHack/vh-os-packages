"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.Container = exports.Input = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 20px;\n  color: ", ";\n  font-family: Roboto;\n  font-size: 14px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    margin-top: -10px;\n    width: auto;\n\n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 20px;\n  height: 20px;\n  margin: -1px 0 0 -2px;\n  background-color: ", ";\n  border-radius: 3px;\n  border: solid 1px ", ";\n  cursor: pointer;\n  padding-right: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

exports.Wrapper = Wrapper;

var Input = _styledComponents.default.input(_templateObject2(), _Colors.default["gray-20"], _Colors.default["gray-30"]);

exports.Input = Input;

var Container = _styledComponents.default.div(_templateObject3(), function (_ref) {
  var error = _ref.error;
  return error && "\n      border: 1px solid red;\n  ";
});

exports.Container = Container;

var Label = _styledComponents.default.label(_templateObject4(), _Colors.default["gray-100"]);

exports.Label = Label;