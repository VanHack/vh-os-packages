"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  value: 0,
  label: 'No degree'
}, {
  value: 1,
  label: 'College (two-year degree)'
}, {
  value: 2,
  label: 'Bachelor’s'
}, {
  value: 3,
  label: 'Master’s'
}, {
  value: 4,
  label: 'PhD'
}];
var currentItem = [items[4]];
var controls = {
  degree: {
    loading: false,
    success: true,
    error: false
  }
};
(0, _react2.storiesOf)('Components|Modal Education', module).add('VHModalEducation', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
    currentItem: currentItem,
    items: items,
    controls: controls,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});