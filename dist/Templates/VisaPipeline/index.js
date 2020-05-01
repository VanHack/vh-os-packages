"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../../Components/Column/index"));

var S = _interopRequireWildcard(require("./styles"));

var _Grid = require("../../Grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VHVisaPipelineTemplate = /*#__PURE__*/function (_Component) {
  _inherits(VHVisaPipelineTemplate, _Component);

  var _super = _createSuper(VHVisaPipelineTemplate);

  function VHVisaPipelineTemplate(props) {
    var _this;

    _classCallCheck(this, VHVisaPipelineTemplate);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function (np, ne) {
      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "_resetActionsHandle", function () {
      _this.setState({
        currentPosition: 0,
        currentIndex: -1,
        droppedBoard: -1,
        draggedBoard: -1,
        draggedTarget: '',
        droppedTarget: '',
        currentDrag: -1,
        addPosition: 'fistAll',
        render: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_eventHandle", function (e) {
      _this.props.appHandleEvents(e); // switch (true) {
      // }

    });

    _defineProperty(_assertThisInitialized(_this), "_onDragOver", function (ev) {
      ev.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "_onDragStart", function (ev, id, index, draggedBoard, draggedTarget) {
      _this.setState({
        currentDrag: id,
        currentIndex: index,
        draggedBoard: draggedBoard,
        draggedTarget: draggedTarget
      });

      ev.dataTransfer.setData("text", ev.target.id);
      ev.dataTransfer.dropEffect = "move";
    });

    _defineProperty(_assertThisInitialized(_this), "_onDragEnter", function (droppedBoard, droppedTarget) {
      _this.setState({
        droppedBoard: droppedBoard,
        droppedTarget: droppedTarget
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_onDragLeave", function (ev) {
      // console.log('dragLeave', ev.target.offsetTop, ev.clientY)
      if (ev.target.offsetTop < ev.clientY) {
        // console.log('vou inserir em baixo')
        _this.setState({
          addPosition: 'bottom'
        });
      } else {
        // console.log('vou inserir em cima')
        _this.setState({
          addPosition: 'top'
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onDrop", function (ev) {
      ev.preventDefault();

      _this.props.changeVisaPipelineCardPosirion(_this.state.addPosition, _this.state.draggedBoard, _this.state.draggedTarget, _this.state.currentIndex, _this.state.droppedTarget, _this.state.droppedBoard, _this.state.currentPosition);
    });

    _this.state = {
      currentPosition: 0,
      currentIndex: -1,
      droppedBoard: -1,
      draggedBoard: -1,
      draggedTarget: '',
      droppedTarget: '',
      currentDrag: -1,
      addPosition: 'fistAll',
      render: true
    };
    return _this;
  }

  _createClass(VHVisaPipelineTemplate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row'
        }
      }, this.props.data.map(function (column) {
        return /*#__PURE__*/_react.default.createElement(_index.default, {
          column: column,
          onDrop: _this2._onDrop,
          onDragLeave: _this2._onDragLeave,
          onDragOver: _this2._onDragOver,
          onDragStart: _this2._onDragStart,
          onDragEnter: _this2._onDragEnter
        });
      })));
    }
  }]);

  return VHVisaPipelineTemplate;
}(_react.Component);

VHVisaPipelineTemplate.defaultProps = {};
VHVisaPipelineTemplate.propTypes = {};
var _default = VHVisaPipelineTemplate;
exports.default = _default;