"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n\n    ", "\n\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n\n    ", "\n\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n   \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 96%;\n\n\n    @media only screen and (max-width: 768px) {\n        width: 93%;\n    }\n\n    padding: 0;\n    margin: 0 auto;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    \n    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var cover = _ref.cover;
  return cover && "\n        background-image: url(".concat(cover, ");\n        background-repeat: no-repeat;\n        background-attachment: fixed;\n        background-size: cover;\n    ");
}, function (_ref2) {
  var md = _ref2.md;
  return md && "\n        max-width: 980px;\n    ";
}, function (_ref3) {
  var lg = _ref3.lg;
  return lg && "\n        max-width: 1200px;\n    ";
}, function (_ref4) {
  var sm = _ref4.sm;
  return sm && "\n        max-width: 330px;\n    ";
}, function (_ref5) {
  var alignItemsCenter = _ref5.alignItemsCenter;
  return alignItemsCenter && "\n        align-items: center;\n    ";
}, function (_ref6) {
  var fullHeight = _ref6.fullHeight;
  return fullHeight && "\n        height: 100vh;\n    ";
}, function (_ref7) {
  var justifyCenter = _ref7.justifyCenter;
  return justifyCenter && "\n        justify-content: center;\n    ";
}, function (_ref8) {
  var fullWidth = _ref8.fullWidth;
  return fullWidth && "\n        width: 100% !important;\n    ";
}, function (_ref9) {
  var fixed = _ref9.fixed;
  return fixed && "\n        position: fixed;\n    ";
}, function (_ref10) {
  var animation = _ref10.animation;
  return animation && "\n        @keyframes expand{\n            0%{height:0vh}\n            100%{height:100vh}\n        }\n\n        @keyframes fadein {\n            from {\n                opacity: 0;\n            }\n            to {\n                opacity: 1;\n            }\n        }\n\n        -webkit-animation: fadein 3s;\n    ";
});

exports.Container = Container;

var Row = _styledComponents.default.div(_templateObject2(), function (_ref11) {
  var row = _ref11.row;
  return row && "\n        flex-direction: row;\n    ";
}, function (_ref12) {
  var column = _ref12.column;
  return column && "\n        flex-direction: column;\n    ";
}, function (_ref13) {
  var justifySpaceAround = _ref13.justifySpaceAround;
  return justifySpaceAround && "\n        justify-content: space-around;\n    ";
}, function (_ref14) {
  var justifySpaceBetween = _ref14.justifySpaceBetween;
  return justifySpaceBetween && "\n        justify-content: space-between;\n    ";
}, function (_ref15) {
  var justifyBottom = _ref15.justifyBottom;
  return justifyBottom && "\n        justify-content: flex-end;\n    ";
}, function (_ref16) {
  var alignItemsRight = _ref16.alignItemsRight;
  return alignItemsRight && "\n        align-items: flex-end;\n    ";
}, function (_ref17) {
  var alignItemsLeft = _ref17.alignItemsLeft;
  return alignItemsLeft && "\n        align-items: flex-start;\n    ";
}, function (_ref18) {
  var alignItemsCenter = _ref18.alignItemsCenter;
  return alignItemsCenter && "\n        align-items: center;\n    ";
}, function (_ref19) {
  var flexWrap = _ref19.flexWrap;
  return flexWrap && "\n        flex-wrap: wrap;\n    ";
}, function (_ref20) {
  var responsive = _ref20.responsive;
  return responsive && "\n        @media only screen and (max-width: 768px) {\n            flex-direction: column;\n        }\n    ";
}, function (_ref21) {
  var mobileDisplayNone = _ref21.mobileDisplayNone;
  return mobileDisplayNone && "\n        @media screen and (max-width: 768px) {\n            display: none;\n        }\n    ";
}, function (_ref22) {
  var mobileImgsSM = _ref22.mobileImgsSM;
  return mobileImgsSM && "\n        @media screen and (max-width: 768px) {\n            width: 200px;\n            height: 200px;\n            margin: 0 auto;\n        }\n    ";
}, function (_ref23) {
  var mobileMarginSM = _ref23.mobileMarginSM;
  return mobileMarginSM && "\n        @media screen and (max-width: 768px) {\n            margin: 15px 0;\n        }\n    ";
}, function (_ref24) {
  var mobileMarginBottomSM = _ref24.mobileMarginBottomSM;
  return mobileMarginBottomSM && "\n        @media screen and (max-width: 768px) {\n            margin-bottom: 40px;\n        }\n    ";
}, function (_ref25) {
  var mobileTxtCenter = _ref25.mobileTxtCenter;
  return mobileTxtCenter && "\n        @media screen and (max-width: 768px) {\n            text-align: center;\n        }\n    ";
}, function (_ref26) {
  var autoWidth = _ref26.autoWidth;
  return autoWidth && "\n       width: auto;\n    ";
}, function (_ref27) {
  var paddingRight8 = _ref27.paddingRight8;
  return paddingRight8 && "\n       padding-right: 24px;\n    ";
}, function (_ref28) {
  var paddingRight2 = _ref28.paddingRight2;
  return paddingRight2 && "\n       padding-right: 6px;\n    ";
}, function (_ref29) {
  var paddingTop = _ref29.paddingTop;
  return paddingTop && "\n        padding-top: ".concat(paddingTop * 3, "px;\n    ");
}, function (_ref30) {
  var paddingRight = _ref30.paddingRight;
  return paddingRight && "\n        padding-right: ".concat(paddingRight * 3, "px;\n    ");
}, function (_ref31) {
  var paddingBottom = _ref31.paddingBottom;
  return paddingBottom && "\n        padding-bottom: ".concat(paddingBottom * 3, "px;\n    ");
}, function (_ref32) {
  var paddingLeft = _ref32.paddingLeft;
  return paddingLeft && "\n        padding-left: ".concat(paddingLeft * 3, "px;\n    ");
}, function (_ref33) {
  var margin = _ref33.margin;
  return margin && "\n       margin: 3px 0;\n    ";
}, function (_ref34) {
  var marginBottom3 = _ref34.marginBottom3;
  return marginBottom3 && "\n       margin-bottom: 9px;\n    ";
}, function (_ref35) {
  var marginBottom4 = _ref35.marginBottom4;
  return marginBottom4 && "\n       margin-bottom: 12px;\n    ";
}, function (_ref36) {
  var marginBottom5 = _ref36.marginBottom5;
  return marginBottom5 && "\n       margin-bottom: 15px;\n    ";
}, function (_ref37) {
  var marginBottom = _ref37.marginBottom;
  return marginBottom && "\n       margin-bottom: ".concat(marginBottom * 3, "px;\n    ");
}, function (_ref38) {
  var marginLeft = _ref38.marginLeft;
  return marginLeft && "\n       margin-Left: ".concat(marginLeft * 3, "px;\n    ");
}, function (_ref39) {
  var marginRight = _ref39.marginRight;
  return marginRight && "\n       margin-Right: ".concat(marginRight * 3, "px;\n    ");
}, function (_ref40) {
  var marginTop = _ref40.marginTop;
  return marginTop && "\n       margin-top: ".concat(marginTop, "px;\n    ");
}, function (_ref41) {
  var height = _ref41.height;
  return height && "\n       height: ".concat(height, "px;\n    ");
}, function (_ref42) {
  var overflowY = _ref42.overflowY;
  return overflowY && "\n       overflow-y: ".concat(overflowY, ";\n    ");
}, function (_ref43) {
  var width = _ref43.width;
  return width && "\n        @media only screen and (min-width: 768px) {\n            width: ".concat(width, ";\n        }\n        @media only screen and (max-width: 768px) {\n            width: 100%;\n        }\n    ");
}, function (_ref44) {
  var fixed = _ref44.fixed;
  return fixed && "\n       position: fixed;\n    ";
}, function (_ref45) {
  var borderBottom = _ref45.borderBottom;
  return borderBottom && "\n       border-bottom: 1px solid #bdbdbd;\n    ";
}, function (_ref46) {
  var paddingBottom = _ref46.paddingBottom;
  return paddingBottom && "\n       padding-bottom: 50px;\n    ";
}, function (_ref47) {
  var cursor = _ref47.cursor;
  return cursor && "\n       cursor: pointer;\n    ";
}, function (_ref48) {
  var borderRight = _ref48.borderRight;
  return borderRight && "\n       border-right: 1px solid #bdbdbd;\n    ";
}, function (_ref49) {
  var borderLeft = _ref49.borderLeft;
  return borderLeft && "\n       border-left: 1px solid #bdbdbd;\n    ";
});

exports.Row = Row;