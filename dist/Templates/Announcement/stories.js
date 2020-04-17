"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Templates|Announcement", module).add("default", function () {
  return _react.default.createElement(_.default, {
    title: "tiutloiasdfkjahs fkjash dfkadf asdfsadjfasdfasdf",
    subTitle: "tiutloiasdfkjahs fkjash dfkadf asdfsadjfasdfasdf",
    description: "Voluptate magna culpaculpaculpaculpaculpaculpaculpa culpaculpaculpaculpa culpaculpaculpa culpaculpa in dolore ut cupidatat qui sint culpa. Duis cupidatat in aliquip ad reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in.reprehenderit labore anim nulla qui."
  });
}).add("with cta", function () {
  return _react.default.createElement(_.default, {
    title: "tiutloiasdfkjahs fkjash dfkadf asdfsadjfasdfasdf",
    subTitle: "tiutloiasdfkjahs fkjash dfkadf asdfsadjfasdfasdf",
    description: "Voluptate magna culpaculpaculpaculpaculpaculpaculpa culpaculpaculpaculpa culpaculpaculpa culpaculpa in dolore ut cupidatat qui sint culpa. Duis cupidatat in aliquip ad reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in.reprehenderit labore anim nulla qui.",
    cta: "Start",
    loading: true,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  });
}).add("loading", function () {
  return _react.default.createElement(_.default, {
    title: "tiutloiasdfkjahs fkjash dfkadf asdfsadjfasdfasdf",
    subTitle: "tiutloiasdfkjahs fkjash dfkadf asdfsadjfasdfasdf",
    description: "Voluptate magna culpaculpaculpaculpaculpaculpaculpa culpaculpaculpaculpa culpaculpaculpa culpaculpa in dolore ut cupidatat qui sint culpa. Duis cupidatat in aliquip ad reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in.reprehenderit labore anim nulla qui.",
    loading: "Start",
    cta: true,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  });
});