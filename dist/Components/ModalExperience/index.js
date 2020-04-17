"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Modal = _interopRequireDefault(require("../Modal"));

var _TitleDescription = _interopRequireDefault(require("../TitleDescription"));

var _Select = _interopRequireDefault(require("../../Components/Input/Select"));

var _Simple = _interopRequireDefault(require("../../Components/Input/Simple"));

var _index = _interopRequireDefault(require("../../Components/Text/index"));

var _index2 = _interopRequireDefault(require("../../Components/Button-New/index"));

var _checkbox = _interopRequireDefault(require("../../Components/Input/checkbox"));

var _Multiple = _interopRequireDefault(require("../../Components/Input/Multiple"));

var _IconText = _interopRequireDefault(require("../../Components/IconText/"));

var _index3 = require("../../util/index");

var S = _interopRequireWildcard(require("./styles.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHModalExperience = function VHModalExperience(props) {
  var item = props.modalExperience;
  var currentItem = props.currentItem ? props.currentItem : {};
  return _react.default.createElement(_Modal.default, {
    width: "732",
    minWidth: "660",
    open: true,
    onClose: props.onClose,
    onEvent: props.onEvent,
    header: _react.default.createElement(_Grid.Row, {
      row: true
    }, _react.default.createElement(_TitleDescription.default, {
      title: 'Add Experience',
      description: '',
      titleVariant: "h3",
      titleColor: "black-50",
      descriptionColor: "gray-90",
      descriptionVariant: "platform",
      onEvent: props.onEvent
    })),
    content: _react.default.createElement(_Grid.Row, {
      column: true
    }, _react.default.createElement(_Grid.Row, {
      row: true,
      justifySpaceBetween: true
    }, _react.default.createElement(_Grid.Row, {
      style: {
        width: '50%'
      },
      marginRight: 2,
      id: "company-name"
    }, _react.default.createElement(_Grid.Row, {
      marginBottom: 2
    }, _react.default.createElement(_index.default, {
      color: "gray-90",
      variant: 'platform',
      text: "Company Name"
    })), _react.default.createElement(_Simple.default, {
      placeholder: "Ex: VanHack",
      onEvent: props.onEvent,
      value: item.companyName.value,
      data: {
        id: "ModalExperience",
        field: "companyName"
      }
    })), _react.default.createElement(_Grid.Row, {
      style: {
        width: '50%'
      },
      marginLeft: 2,
      id: "company-location"
    }, _react.default.createElement(_Select.default, {
      caption: "Location",
      captionColor: "gray-90",
      className: "vh-general-section-location ".concat(props.className ? props.className : ''),
      currentItem: item.countryId.value ? props.countries.find(function (element) {
        return element.value === item.countryId.value;
      }) : {},
      data: {
        id: "ModalExperience",
        field: "countryId"
      },
      onEvent: props.onEvent,
      items: props.countries,
      descriptionColor: "red",
      placeholder: "Select an country"
    }), item.countryId.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required"))), _react.default.createElement(_Grid.Row, {
      row: true,
      justifySpaceBetween: true
    }, _react.default.createElement(_Grid.Row, {
      style: {
        width: '50%'
      },
      id: "company-size-modal",
      marginRight: 2
    }, _react.default.createElement(_Select.default, {
      caption: "Company Size",
      captionColor: "gray-90",
      className: "vh-general-section-company-size ".concat(props.className ? props.className : ''),
      currentItem: item.companySize.value ? props.companyList.find(function (element) {
        return element.value === item.companySize.value;
      }) : {},
      data: {
        id: "ModalExperience",
        field: "companySize"
      },
      onEvent: props.onEvent,
      items: props.companyList,
      descriptionColor: "red",
      placeholder: "select an option"
    }), item.companySize.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), _react.default.createElement(_Grid.Row, {
      style: {
        width: '50%'
      },
      id: "company-industry-modal",
      marginLeft: 2
    }, _react.default.createElement(_Select.default, {
      caption: "Industry",
      captionColor: "gray-90",
      className: "vh-general-section-industry ".concat(props.className ? props.className : ''),
      currentItem: {
        value: item.industryId.value,
        label: item.industryId.value ? props.industryList[item.industryId.value].label : ''
      },
      data: {
        id: "ModalExperience",
        field: "industryId"
      },
      onEvent: props.onEvent,
      items: props.industryList,
      descriptionColor: "red"
    }), item.industryId.messageError && /*#__PURE__*/_react.default.createElement(S.ErrorMessage, null, "Field required"))), item.workExperiences.map(function (experience, index) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        row: true
      }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        width: '50%',
        marginRight: 2
      }, /*#__PURE__*/_react.default.createElement(_Select.default, {
        caption: "Role Title",
        captionColor: "gray-90",
        className: "vh-general-section-position ".concat(props.className ? props.className : ''),
        currentItem: experience.positionId.value !== undefined ? props.positions.find(function (element) {
          return element.value === experience.positionId.value;
        }) : {},
        data: {
          id: "ModalExperience",
          field: "positionId",
          index: index
        },
        onEvent: props.onEvent,
        items: props.positions,
        descriptionColor: "red"
      }), experience.positionId.messageError && /*#__PURE__*/_react.default.createElement(S.ErrorMessage, null, "Field required")), experience.positionId && experience.positionId.value === 37 && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        style: {
          width: '50%'
        },
        id: "other-role"
      }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        marginBottom: 2
      }, /*#__PURE__*/_react.default.createElement(_index.default, {
        color: "gray-90",
        variant: 'platform',
        text: "Other Role"
      })), /*#__PURE__*/_react.default.createElement(_Simple.default, {
        placeholder: "Ex: Developer",
        onEvent: props.onEvent,
        value: experience.otherPosition.value,
        data: {
          id: "ModalExperience",
          field: "otherPosition",
          index: index
        }
      }), experience.otherPosition.messageError && /*#__PURE__*/_react.default.createElement(S.ErrorMessage, null, "Field required"))), index === 0 && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        marginBottom5: true
      }, _react.default.createElement(_checkbox.default, {
        title: 'I am currently working in this role',
        color: "gray-90",
        variant: "platform1",
        data: {
          modal: 'ModalExperience',
          checked: experience.isCurrentRole,
          id: 'isCurrentRole',
          index: index
        },
        checked: experience.isCurrentRole,
        value: '',
        name: 'working-role'.concat("-input-checkbox"),
        id: 'working-role'.concat("-vh-input-checkbox"),
        onEvent: props.onEvent
      })), _react.default.createElement(_Grid.Row, {
        marginBottom5: true,
        row: true,
        justifySpaceBetween: true
      }, _react.default.createElement(_Grid.Row, {
        width: '50%',
        marginRight: 2
      }, _react.default.createElement(_index.default, {
        color: "gray-90",
        variant: 'platform',
        text: "Start Date"
      }), _react.default.createElement(_Simple.default, {
        placeholder: "",
        type: 'date',
        onEvent: props.onEvent,
        value: (0, _index3.getFormatedDate)(experience.startDate.value),
        data: {
          id: "ModalExperience",
          field: "startDate",
          index: index
        }
      }), experience.startDate.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), _react.default.createElement(_Grid.Row, {
        width: '50%',
        marginLeft: 2
      }, _react.default.createElement(_index.default, {
        color: "gray-90",
        variant: 'platform',
        text: "End Date"
      }), _react.default.createElement(_Simple.default, {
        placeholder: "",
        type: 'date',
        onEvent: props.onEvent,
        value: (0, _index3.getFormatedDate)(experience.endDate.value),
        data: {
          id: "ModalExperience",
          field: "endDate",
          index: index
        }
      }))), _react.default.createElement(_Grid.Row, {
        marginBottom5: true,
        paddingBottom: true,
        borderBottom: true
      }, _react.default.createElement(_index.default, {
        color: "gray-90",
        variant: 'platform',
        text: "Description"
      }), _react.default.createElement(_Multiple.default, {
        max: 5,
        items: experience.description,
        placeholder: "Job Experience",
        data: {
          id: 'multipleInput',
          order: index
        },
        onEvent: props.onEvent
      }), experience.description.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), index === item.workExperiences.length - 1 && _react.default.createElement(_Grid.Row, {
        marginBottom5: true
      }, _react.default.createElement(_index.default, {
        color: "gradient-primary",
        onEvent: props.onEvent,
        data: 'addRole',
        variant: 'platform',
        text: "+ Add other role for this company",
        cursor: true
      })));
    }), _react.default.createElement(_Grid.Row, {
      row: true
    }, currentItem.id && _react.default.createElement(_Grid.Row, {
      alignItemsLeft: true
    }, _react.default.createElement(_IconText.default, {
      cursor: true,
      iconColor: "gray-60",
      textColor: "gray-60",
      text: 'Delete',
      icon: "delete",
      className: "vh-delete-education ".concat(props.className ? props.className : ''),
      variant: "platform",
      data: {
        action: 'deleteExperience',
        id: currentItem.id
      },
      onEvent: props.onEvent,
      onClose: props.onClose
    })), _react.default.createElement(_Grid.Row, {
      alignItemsRight: true
    }, _react.default.createElement(_index2.default, {
      primary: true,
      data: {
        action: 'saveExperience',
        id: currentItem.id
      },
      onEvent: props.onEvent,
      onClose: props.onClose,
      closeModal: props.closeModalExperience,
      label: "Save"
    }))))
  });
};

VHModalExperience.defaultProps = {
  onEvent: null,
  className: ""
};
VHModalExperience.propTypes = {
  onEvent: _propTypes.default.func,
  className: _propTypes.default.stringc
};
var _default = VHModalExperience;
exports.default = _default;