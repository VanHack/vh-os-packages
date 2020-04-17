"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var S = _interopRequireWildcard(require("./styles"));

var _Text = _interopRequireDefault(require("../Text"));

var _Select = _interopRequireDefault(require("../Input/Select"));

var _Grid = require("../../Grid");

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHLanguageList = function VHLanguageList(props) {
  var _useState = (0, _react.useState)(props.languages),
      _useState2 = _slicedToArray(_useState, 2),
      languages = _useState2[0],
      setLanguages = _useState2[1];

  var secondList = props.secondList ? props.secondList : [];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      render = _useState4[0],
      reRender = _useState4[1];

  _react.default.useEffect(function () {
    setLanguages(props.languages);
  }, [props.languages]);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, languages.length === 0 ? /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    row: true,
    marginRight: 2,
    marginLeft: 2
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Select.default, {
    removeIndicator: true,
    preLoading: true,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'language',
    className: 'language',
    currentItem: {},
    items: [],
    description: "",
    descriptionColor: "primary",
    onEvent: props.onEvent,
<<<<<<< HEAD
    order: 0
  }))), _react.default.createElement(_Grid.Row, {
    width: '20%'
  }, _react.default.createElement(_Select.default, {
    preLoading: props.controls.language.preLoading,
=======
    order: 0,
    placeholder: 'Select Language'
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '20%'
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: true,
>>>>>>> 88ef957ebc82ece36b29d871cfcdd282260a0277
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'proficiency',
    className: 'proficiency',
    currentItem: {},
    items: [],
    description: "",
    descriptionColor: "primary",
    leftText: "",
    onEvent: props.onEvent,
    order: 0,
    placeholder: 'Proficiency'
<<<<<<< HEAD
  }))), _react.default.createElement(S.Wrapper, null, _react.default.createElement(_Grid.Row, {
=======
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, languages.map(function (language, index) {
    return /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      alignItemsCenter: true,
      row: true,
      marginRight: 2,
      marginLeft: 2
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Select.default, {
      removeIndicator: true,
      preLoading: props.controls.language.preLoading,
      marginBottom: '0px',
      removeBorder: true,
      caption: "",
      data: language.code === 'en' || language.code === 'fr' ? 'defaultLanguage' : {
        option: 'language',
        id: language.id
      },
      className: 'language',
      currentItem: language.code !== undefined ? {
        value: language.code,
        label: language.name
      } : {},
      items: language.code === 'en' ? [{
        value: 'en',
        label: 'English'
      }] : language.code === 'fr' ? [{
        value: 'fr',
        label: 'French'
      }] : props.list,
      description: "",
      descriptionColor: "primary",
      onEvent: props.onEvent,
      order: index,
      placeholder: 'Select Language'
    }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      width: '20%'
    }, /*#__PURE__*/_react.default.createElement(_Select.default, {
      preLoading: props.controls.language.preLoading,
      marginBottom: '0px',
      removeBorder: true,
      caption: "",
      data: {
        option: 'proficiency',
        id: language.id
      },
      className: 'proficiency',
      currentItem: language.level != undefined ? secondList[language.level] : {},
      items: secondList,
      description: "",
      descriptionColor: "primary",
      leftText: "",
      onEvent: props.onEvent,
      order: index,
      placeholder: 'Proficiency'
    })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      width: '10%'
    }, language.id && language.code && language.code !== 'en' && language.code !== 'fr' && /*#__PURE__*/_react.default.createElement(S.Close, {
      onClick: function onClick() {
        props.onEvent({
          event: 'deleteLanguage',
          code: language.code
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
      icon: 'delete',
      alt: "Close icon"
    }))));
  }), /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
>>>>>>> 88ef957ebc82ece36b29d871cfcdd282260a0277
    alignItemsCenter: true,
    row: true,
    marginRight: 2,
    marginLeft: 2
<<<<<<< HEAD
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Select.default, {
    removeIndicator: true,
    preLoading: props.controls.language.preLoading,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'defaultLanguage',
    className: 'language',
    currentItem: {
      value: 'fr',
      label: 'French'
    },
    items: [{
      value: 'fr',
      label: 'French'
    }],
    description: "",
    descriptionColor: "primary",
    onEvent: props.onEvent,
    order: 1
  }))), _react.default.createElement(_Grid.Row, {
    width: '20%'
  }, _react.default.createElement(_Select.default, {
    preLoading: props.controls.language.preLoading,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'proficiency',
    className: 'proficiency',
    currentItem: french != undefined ? secondList[french.level] : {},
    items: secondList,
    description: "",
    descriptionColor: "primary",
    leftText: "",
    onEvent: props.onEvent,
    order: 1,
    placeholder: 'Proficiency'
  }))), _react.default.createElement(S.Wrapper, null, _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    row: true,
    marginRight: 2,
    marginLeft: 2
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Select.default, {
    removeIndicator: true,
    preLoading: props.controls.language.preLoading,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'language',
    className: 'language',
    currentItem: other != undefined ? {
      value: other.code,
      label: other.name
    } : {},
    items: props.list,
    description: "",
    descriptionColor: "primary",
    onEvent: props.onEvent,
    order: 2
  }))), _react.default.createElement(_Grid.Row, {
    width: '20%'
  }, _react.default.createElement(_Select.default, {
    preLoading: props.controls.language.preLoading,
    isDisabled: other === undefined ? true : false,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'proficiency',
    className: 'proficiency',
    currentItem: other != undefined ? secondList[other.level] : {},
    items: secondList,
    description: "",
    descriptionColor: "primary",
    leftText: "",
    onEvent: props.onEvent,
    order: 2,
    placeholder: 'Proficiency'
  }))));
=======
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: "gradient-primary",
    onEvent: function onEvent(e) {
      var newLanguages = languages;
      newLanguages.push({
        level: undefined,
        name: undefined,
        code: undefined
      });
      setLanguages(newLanguages);
      reRender(render + 1);
    },
    data: 'addLanguage',
    variant: 'platform',
    text: "+ Add language",
    cursor: true
  })))));
>>>>>>> 88ef957ebc82ece36b29d871cfcdd282260a0277
};

var _default = VHLanguageList;
exports.default = _default;