"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  value: 'ocean',
  label: 'Ocean',
  color: '#00B8D9',
  isFixed: true
}, {
  value: 'blue',
  label: 'Blue',
  color: '#0052CC',
  isDisabled: true
}, {
  value: 'purple',
  label: 'Purple',
  color: '#5243AA'
}, {
  value: 'red',
  label: 'Red',
  color: '#FF5630',
  isFixed: true
}, {
  value: 'orange',
  label: 'Orange',
  color: '#FF8B00'
}, {
  value: 'yellow',
  label: 'Yellow',
  color: '#FFC400'
}, {
  value: 'green',
  label: 'Green',
  color: '#36B37E'
}, {
  value: 'forest',
  label: 'Forest',
  color: '#00875A'
}, {
  value: 'slate',
  label: 'Slate',
  color: '#253858'
}, {
  value: 'silver',
  label: 'Silver',
  color: '#666666'
}];
var currentItem = [items[4], items[5]];
(0, _react2.storiesOf)("Components|Input/Select", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    caption: "Annual salary expectation",
    captionColor: "gray-90",
    data: 'AnyObjectOrString',
    className: 'AnyObjectOrString',
    currentItem: currentItem,
    items: items,
    isMulti: true,
    description: "See salaries for this position",
    descriptionColor: "primary",
    leftText: "$CAD",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("single", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    caption: "Annual salary expectation",
    captionColor: "gray-90",
    placeholder: "Annual salary expectation",
    data: 'AnyObjectOrString',
    className: 'AnyObjectOrString',
    currentItem: currentItem,
    items: items,
    description: "See salaries for this position",
    descriptionColor: "primary",
    leftText: "$CAD",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("single clear indicator", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    removeIndicator: true,
    caption: "Annual salary expectation",
    data: 'AnyObjectOrString',
    className: 'AnyObjectOrString',
    currentItem: currentItem,
    items: items,
    description: "See salaries for this position",
    descriptionColor: "primary",
    leftText: "$CAD",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("border remover", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    removeBorder: true,
    placeholder: "Select an option",
    caption: "Annual salary expectation",
    data: 'AnyObjectOrString',
    className: 'AnyObjectOrString',
    currentItem: currentItem,
    items: items,
    description: "See salaries for this position",
    descriptionColor: "primary",
    leftText: "$CAD",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});