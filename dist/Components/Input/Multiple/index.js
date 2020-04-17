"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHInputMultiple = function VHInputMultiple(props) {
  var it = [];
  console.log(props.items);

  try {
    if (props.items !== null) {
      if (props.items.value !== null) {
        it = JSON.parse(props.items.value);
      } else {
        it = JSON.parse("[{ value: '' }]");
      }
    }
  } catch (error) {}

  var _useState = (0, _react.useState)(it),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = (0, _react.useState)([{
    value: ''
  }]),
      _useState4 = _slicedToArray(_useState3, 2),
      newItems = _useState4[0],
      setNewItems = _useState4[1];

  var _useState5 = (0, _react.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      render = _useState6[0],
      reRender = _useState6[1];

  return _react.default.createElement(_react.default.Fragment, null, items.map(function (item, index) {
    return _react.default.createElement("div", {
      key: "VHInputMultiple-".concat(index),
      style: {
        margin: '9px 0'
      }
    }, _react.default.createElement(_Icon.default, {
      icon: "bullet",
      sm: true,
      value: item.Value,
      data: item,
      placeholder: props.placeholder,
      onEvent: function onEvent(e) {
        switch (true) {
          // case e.event === "onKeyUpAction":
          //   if (e.data.value !== '') {
          //     items[index] = {
          //       value: e.data.value,
          //       loading: e.data.data.id === item.id
          //     }
          //     setItems(items)
          //     reRender(render + 1)
          //     props.onEvent({
          //       data: {
          //         value: JSON.stringify(items.concat(newItems)),
          //         data: props.data
          //       },
          //       event: "onKeyUpAction",
          //       origin: "VHInputMultiple"
          //     })
          //   }
          //   break
          case e.event === "onBlur":
            if (e.data.value !== '') {
              items[index] = {
                value: e.data.value,
                loading: ''
              };
              setItems(items);
              reRender(render + 1);
              props.onEvent({
                data: {
                  value: JSON.stringify(items.concat(newItems)),
                  data: props.data
                },
                event: "onBlur",
                origin: "VHInputMultiple"
              });
            }

            break;
        }
      }
    }));
  }), newItems.map(function (item, index) {
    return _react.default.createElement("div", {
      key: "VHInputMultiple-item-".concat(index),
      style: {
        margin: '9px 0'
      }
    }, _react.default.createElement(_Icon.default, {
      icon: "bullet",
      sm: true,
      placeholder: props.placeholder,
      value: "",
      autoFocus: true,
      onEvent: function onEvent(e) {
        switch (true) {
          case e.event === "onKeyUpAction":
            if (e.data.value !== '') {
              newItems[index] = {
                value: e.data.value,
                loading: true
              };

              if (items.length + newItems.length < props.max) {
                newItems.push({
                  value: ''
                });
              }

              setNewItems(newItems);
              reRender(render + 1);
              props.onEvent({
                data: {
                  value: JSON.stringify(items.concat(newItems)),
                  data: props.data
                },
                event: "onKeyUpAction",
                origin: "VHInputMultiple"
              });
            }

            break;

          case e.event === "onBlur":
            if (e.data.value !== '') {
              newItems[index] = {
                value: e.data.value,
                loading: ''
              };
              setNewItems(newItems);
              reRender(render + 1);
              props.onEvent({
                data: {
                  value: JSON.stringify(items.concat(newItems)),
                  data: props.data
                },
                event: "onBlur",
                origin: "VHInputMultiple"
              });
            }

            break;
        }
      }
    }));
  }));
};

VHInputMultiple.defaultProps = {
  type: "text",
  disabled: false,
  autoFocus: false,
  className: '',
  noBorder: false
};
VHInputMultiple.propTypes = {
  disabled: _propTypes.default.bool,
  autoFocus: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  noBorder: _propTypes.default.bool
};
var _default = VHInputMultiple;
exports.default = _default;