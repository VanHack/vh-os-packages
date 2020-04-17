"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireWildcard(require("react-select"));

var _animated = _interopRequireDefault(require("react-select/animated"));

var _Text = _interopRequireDefault(require("../../Text"));

var _reactPreloadSkeleton = require("react-preload-skeleton");

var _Grid = require("../../../Grid");

var _index = _interopRequireDefault(require("../../../assets/svg/icons/icon_dropdown.svg/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHSelect = function VHSelect(props) {
  var _style;

  var animatedComponents = (0, _animated.default)();

  if (props.preLoading) {
    return _react.default.createElement(_reactPreloadSkeleton.TitleDescriptionSkeleton, null);
  }

  var newValue = undefined;

  if (props.currentItem && Object.keys(props.currentItem).length !== 0 && props.currentItem.constructor === Object) {
    newValue = props.currentItem;
  } else if (Array.isArray(props.currentItem) && props.currentItem.length > 0) {
    newValue = props.currentItem;
  }

  var _React$useState = _react.default.useState(newValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      handleChange = _React$useState2[1];

  _react.default.useEffect(function () {
    handleChange(newValue);
  }, [newValue]);

  var style = (_style = {
    control: function control(base) {
      return _objectSpread({}, base, {
        border: 0,
        boxShadow: "none",
        fontWeight: props.bold ? 'bold' : 'normal',
        fontFamily: 'Roboto',
        fontSize: '14px',
        padding: '0',
        borderRadius: '6px'
      });
    },
    indicatorSeparator: function indicatorSeparator(styles) {
      return {
        display: 'none'
      };
    },
    clearIndicator: function clearIndicator(styles) {
      return {
        display: 'none'
      };
    },
    singleValue: function singleValue(styles) {
      return {
        color: '#4f4f4f'
      };
    },
    valueContainer: function valueContainer(styles) {
      return {
        width: 'auto',
        display: 'flex',
        paddingLeft: '0'
      };
    }
  }, _defineProperty(_style, "singleValue", function singleValue(styles) {
    return {
      padding: '6px 0'
    };
  }), _defineProperty(_style, "dropdownIndicator", function dropdownIndicator(styles) {
    return {
      display: 'none'
    };
  }), _defineProperty(_style, "option", function option(provided, state) {
    return _objectSpread({}, provided, {
      color: state.isFocused ? '#646464' : '#646464'.isSelected ? '#fff' : '#646464',
      backgroundColor: state.isFocused ? '#F2F2F2' : '#fff'.isSelected ? '#2C9BF5' : '#fff',
      padding: '6px 12px',
      fontFamily: 'Roboto',
      fontSize: '14px'
    });
  }), _style);
  var styled = {
    indicatorSeparator: function indicatorSeparator(styles) {
      return {
        display: 'none'
      };
    },
    clearIndicator: function clearIndicator(styles) {
      return {
        display: 'none'
      };
    },
    valueContainer: function valueContainer(base) {
      return {
        width: 'auto',
        display: 'flex',
        marginLeft: 8
      };
    },
    multiValue: function multiValue(base) {
      return {
        width: 'auto',
        height: 'auto',
        marginLeft: 8,
        display: 'flex',
        alignItems: 'center'
      };
    },
    control: function control(base) {
      return _objectSpread({}, base, {
        fontFamily: 'Roboto',
        fontSize: '14px',
        border: '1px solid #e0e0e0',
        padding: '1px 0',
        borderRadius: '6px'
      });
    },
    option: function option(provided, state) {
      return _objectSpread({}, provided, {
        color: state.isFocused ? '#646464' : '#646464'.isSelected ? '#fff' : '#646464',
        backgroundColor: state.isFocused ? '#F2F2F2' : '#fff'.isSelected ? '#2C9BF5' : '#fff',
        padding: '6px 12px',
        fontFamily: 'Roboto',
        fontSize: '14px'
      });
    }
  };

  var DropdownIcon = function DropdownIcon() {
    return _react.default.createElement(_index.default, null);
  };

  var DropdownIndicator = function DropdownIndicator(props2) {
    // if (props.removeIndicator) {
    //   return <>{ DropdownIndicator = () => null, IndicatorSeparator = () => null }</>
    // }
    return _react.default.createElement(_reactSelect.components.DropdownIndicator, props2, _react.default.createElement(DropdownIcon, null));
  };

  return _react.default.createElement(_Grid.Row, {
    responsive: true,
    style: {
      position: 'relative',
      marginBottom: props.marginBottom ? props.marginBottom : '21px'
    },
    className: "VH-select"
  }, props.caption && _react.default.createElement(_Grid.Row, {
    style: {
      marginBottom: '6px'
    }
  }, _react.default.createElement(_Text.default, {
    text: props.caption,
    variant: "platform1",
    color: props.captionColor
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_reactSelect.default, {
    styles: props.removeBorder ? style : styled,
    closeMenuOnSelect: !props.isMulti,
    className: props.className,
    placeholder: props.placeholder ? props.placeholder : 'Select an option',
    isLoading: props.isLoading,
    isDisabled: props.isLoading || props.isDisabled // components={animatedComponents}
    ,
    components: {
      DropdownIndicator: DropdownIndicator
    },
    value: value,
    isMulti: props.isMulti,
    isClearable: true,
    options: props.items,
    onChange: function onChange(newValue, actionMeta) {
      switch (true) {
        case actionMeta.action === "remove-value":
          var finalValue = [];

          if (newValue !== null && newValue.value === 'zero') {
            newValue.value = 0;
          }

          handleChange(newValue);

          if (newValue != undefined && newValue != null) {
            newValue.map(function (item) {
              finalValue.push(parseInt(item.value === 'zero' ? 0 : item.value));
            });
          }

          props.onEvent({
            type: "OnChange",
            origin: "VHSelect",
            props: {
              data: props.data,
              item: finalValue,
              action: 'delete',
              order: props.order
            }
          });
          break;

        case actionMeta.action === "clear":
          props.onEvent({
            type: "OnChange",
            origin: "VHSelect",
            props: {
              data: props.data,
              item: null,
              action: "clear"
            }
          });
          break;

        case actionMeta.action === "select-option":
          if (props.isMulti && newValue.length <= 3) {
            var finalValueChange = [];

            if (newValue.value === 'zero') {
              newValue.value = 0;
            }

            handleChange(newValue);
            newValue.map(function (item) {
              finalValueChange.push(parseInt(item.value === 'zero' ? 0 : item.value));
            });
            props.onEvent({
              type: "OnChange",
              origin: "VHSelect",
              props: {
                data: props.data,
                item: finalValueChange,
                action: 'add',
                order: props.order
              }
            });
          } else if (!props.isMulti) {
            if (newValue.value === 'zero') {
              newValue.value = 0;
            }

            handleChange(newValue);
            props.onEvent({
              type: "OnChange",
              origin: "VHSelect",
              props: {
                data: props.data,
                item: newValue,
                action: 'add',
                order: props.order
              }
            });
          }

          break;
      }
    }
  })), props.description && _react.default.createElement(_Grid.Row, {
    style: {
      position: 'absolute',
      top: '64px',
      marginTop: '8px'
    }
  }, _react.default.createElement(_Text.default, {
    text: props.description,
    variant: "caption",
    color: props.descriptionColor
  })));
};

var _default = VHSelect;
exports.default = _default;