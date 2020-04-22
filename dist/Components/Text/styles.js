"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Caption = exports.BodyPlatform2 = exports.BodyPlatform = exports.BodyWeb = exports.Subtitle3 = exports.Subtitle2 = exports.Subtitle1 = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 12px;\n    font-weight: normal;\n\n    ", "\n\n", "\n\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n\n    ", "\n\n", "\n\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 21.5px;\n    hyphens: auto;\n    word-break: break-word\n\n    ", "\n\n    ", "\n\n", "\n\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 16px;\n    font-weight: normal;\n    line-height: 28px;\n\n    ", "\n\n", "\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 16px;\n    font-weight: lighter;\n    line-height: 23.1px;\n\n    ", "\n\n", "\n\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 16px;\n    font-weight: bold;\n\n    ", "\n\n", "\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    line-height: 22.4px;\n\n    ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Nunito Sans;\n    font-size: 20px;\n    font-weight: normal;\n\n    ", "\n\n", "\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Nunito Sans;\n    font-size: 22px;\n    font-weight: normal;\n\n    ", "\n\n", "\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Nunito Sans;\n    font-size: 22px;\n    font-weight: bold;\n\n    ", "\n\n", "\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Nunito Sans;\n    font-size: 24px;\n    font-weight: normal;\n\n    ", "\n\n", "\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Nunito Sans;\n    font-size: 34px;\n    font-weight: lighter;\n\n    ", "\n\n", "\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Nunito Sans;\n    font-size: 48px;\n    font-weight: lighter;\n\n    ", "\n\n    ", "\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = _styledComponents.default.h1(_templateObject(), function (props) {
  return _Colors.default[props.color];
}, function (_ref) {
  var alignCenter = _ref.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
}, function (_ref2) {
  var hover = _ref2.hover;
  return hover && "\n            :hover {\n                text-decoration: underline;\n            }\n        ";
});

exports.H1 = H1;

var H2 = _styledComponents.default.h2(_templateObject2(), function (props) {
  return _Colors.default[props.color];
}, function (_ref3) {
  var alignCenter = _ref3.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
}, function (_ref4) {
  var hover = _ref4.hover;
  return hover && "\n            :hover {\n                text-decoration: underline;\n            }\n        ";
});

exports.H2 = H2;

var H3 = _styledComponents.default.h3(_templateObject3(), function (props) {
  return _Colors.default[props.color];
}, function (_ref5) {
  var alignCenter = _ref5.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
}, function (_ref6) {
  var hover = _ref6.hover;
  return hover && "\n            :hover {\n                text-decoration: underline;\n            }\n        ";
});

exports.H3 = H3;

var H4 = _styledComponents.default.h4(_templateObject4(), function (props) {
  return _Colors.default[props.color];
}, function (_ref7) {
  var alignCenter = _ref7.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
}, function (_ref8) {
  var hover = _ref8.hover;
  return hover && "\n            :hover {\n                text-decoration: underline;\n            }\n        ";
});

exports.H4 = H4;

var H5 = _styledComponents.default.h5(_templateObject5(), function (props) {
  return _Colors.default[props.color];
}, function (_ref9) {
  var alignCenter = _ref9.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
}, function (_ref10) {
  var hover = _ref10.hover;
  return hover && "\n            :hover {\n                text-decoration: underline;\n            }\n        ";
});

exports.H5 = H5;

var H6 = _styledComponents.default.h6(_templateObject6(), function (props) {
  return _Colors.default[props.color];
}, function (_ref11) {
  var alignCenter = _ref11.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
}, function (_ref12) {
  var hover = _ref12.hover;
  return hover && "\n            :hover {\n                text-decoration: underline;\n            }\n        ";
});

exports.H6 = H6;

var Subtitle1 = _styledComponents.default.p(_templateObject7(), function (props) {
  return _Colors.default[props.color];
}, function (_ref13) {
  var hover = _ref13.hover;
  return hover && "\n            :hover {\n                text-decoration: underline;\n            }\n        ";
});

exports.Subtitle1 = Subtitle1;

var Subtitle2 = _styledComponents.default.p(_templateObject8(), function (props) {
  return _Colors.default[props.color];
}, function (_ref14) {
  var alignCenter = _ref14.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
}, function (_ref15) {
  var hover = _ref15.hover;
  return hover && "\n            :hover {\n                text-decoration: underline;\n            }\n        ";
});

exports.Subtitle2 = Subtitle2;

var Subtitle3 = _styledComponents.default.p(_templateObject9(), function (props) {
  return _Colors.default[props.color];
}, function (_ref16) {
  var alignCenter = _ref16.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
}, function (_ref17) {
  var hover = _ref17.hover;
  return hover && "\n            :hover {\n                text-decoration: underline;\n            }\n        ";
});

exports.Subtitle3 = Subtitle3;

var BodyWeb = _styledComponents.default.p(_templateObject10(), function (props) {
  return _Colors.default[props.color];
}, function (_ref18) {
  var alignCenter = _ref18.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
}, function (_ref19) {
  var hover = _ref19.hover;
  return hover && "\n            :hover {\n                text-decoration: underline;\n            }\n        ";
});

exports.BodyWeb = BodyWeb;

var BodyPlatform = _styledComponents.default.p(_templateObject11(), function (props) {
  return _Colors.default[props.color];
}, function (_ref20) {
  var alignCenter = _ref20.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
}, function (_ref21) {
  var cursor = _ref21.cursor;
  return cursor && "\n        cursor: pointer;\n    ";
}, function (_ref22) {
  var hover = _ref22.hover;
  return hover && "\n            :hover {\n                text-decoration: underline;\n            }\n        ";
});

exports.BodyPlatform = BodyPlatform;

var BodyPlatform2 = _styledComponents.default.p(_templateObject12(), function (props) {
  return _Colors.default[props.color];
}, function (_ref23) {
  var alignCenter = _ref23.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
}, function (_ref24) {
  var hover = _ref24.hover;
  return hover && "\n            :hover {\n                text-decoration: underline;\n            }\n        ";
});

exports.BodyPlatform2 = BodyPlatform2;

var Caption = _styledComponents.default.p(_templateObject13(), function (props) {
  return _Colors.default[props.color];
}, function (_ref25) {
  var alignCenter = _ref25.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
}, function (_ref26) {
  var hover = _ref26.hover;
  return hover && "\n            :hover {\n                text-decoration: underline;\n            }\n        ";
});

exports.Caption = Caption;