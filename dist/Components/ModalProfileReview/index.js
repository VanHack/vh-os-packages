"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Modal = _interopRequireDefault(require("../Modal"));

var _TitleDescription = _interopRequireDefault(require("../TitleDescription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHModalProfileReview = function VHModalProfileReview(props) {
  console.log(props.notes);
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    width: "732",
    minWidth: "660",
    open: props.openModal,
    onClose: props.onClose,
    onEvent: props.onEvent,
    header: /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true
    }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
      title: 'Profile Review',
      description: '',
      titleVariant: "h3",
      titleColor: "black-50",
      descriptionColor: "gray-90",
      descriptionVariant: "platform",
      onEvent: props.onEvent
    })),
    content: /*#__PURE__*/_react.default.createElement(_Grid.Row, null, props.notes.map(function (item) {
      return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        style: {
          fontFamily: 'Roboto',
          lineHeight: '21.5px',
          wordBreak: 'break-word',
          color: '#4f4f4f'
        },
        marginBottom5: true,
        column: true,
        dangerouslySetInnerHTML: {
          __html: item.note
        }
      });
    }))
  });
};

VHModalProfileReview.defaultProps = {
  onEvent: null,
  className: ""
};
VHModalProfileReview.propTypes = {
  onEvent: _propTypes.default.func,
  className: _propTypes.default.stringc
};
var _default = VHModalProfileReview;
exports.default = _default;