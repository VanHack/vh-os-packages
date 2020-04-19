"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  items: [{
    id: 0,
    name: "Carlos",
    email: "carlos@gmail.com",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
  }, {
    id: 1,
    name: "Fabio",
    email: "fabio@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  }, {
    id: 2,
    name: "Fred",
    email: "fred@gmail.com",
    avatar: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg"
  }, {
    id: 3,
    name: "Jose",
    email: "jose@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg"
  }]
};
(0, _react2.storiesOf)("Components|Assign", module).add("VHAssign", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "300px",
      padding: "60px 24px 24px 24px",
      height: "450px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    items: data.items,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
});