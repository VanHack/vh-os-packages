"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactImageCrop = _interopRequireDefault(require("react-image-crop"));

var _styledComponents = require("styled-components");

var _Modal = _interopRequireDefault(require("../Modal"));

var _Grid = require("../../Grid");

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _ButtonNew = _interopRequireDefault(require("../Button-New"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n.ReactCrop {\n  position: relative;\n  display: inline-block;\n  cursor: crosshair;\n  overflow: hidden;\n  max-width: 100%; }\n  .ReactCrop:focus {\n    outline: none; }\n  .ReactCrop--disabled, .ReactCrop--locked {\n    cursor: inherit; }\n  .ReactCrop__image {\n    display: block;\n    max-width: 100%;\n    touch-action: manipulation; }\n  .ReactCrop--crop-invisible .ReactCrop__image {\n    opacity: 0.5; }\n  .ReactCrop__crop-selection {\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translate3d(0, 0, 0);\n    box-sizing: border-box;\n    cursor: move;\n    box-shadow: 0 0 0 9999em rgba(0, 0, 0, 0.5);\n    touch-action: manipulation;\n    border: 1px solid;\n    border-image-source: url(\"data:image/gif;base64,R0lGODlhCgAKAJECAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI5RDc5MTFDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI5RDc5MTBDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQoAAgAsAAAAAAoACgAAAhWEERkn7W3ei7KlagMWF/dKgYeyGAUAIfkEBQoAAgAsAAAAAAoACgAAAg+UYwLJ7RnQm7QmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYgLJHdiinNSAVfOEKoUCACH5BAUKAAIALAAAAAAKAAoAAAIRVISAdusPo3RAzYtjaMIaUQAAIfkEBQoAAgAsAAAAAAoACgAAAg+MDiem7Q8bSLFaG5il6xQAIfkEBQoAAgAsAAAAAAoACgAAAg+UYRLJ7QnQm7SmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYBLJDdiinNSEVfOEKoECACH5BAUKAAIALAAAAAAKAAoAAAIRFISBdusPo3RBzYsjaMIaUQAAOw==\");\n    border-image-slice: 1;\n    border-image-repeat: repeat; }\n    .ReactCrop--disabled .ReactCrop__crop-selection {\n      cursor: inherit; }\n    .ReactCrop--circular-crop .ReactCrop__crop-selection {\n      border-radius: 50%;\n      box-shadow: 0px 0px 1px 1px white, 0 0 0 9999em rgba(0, 0, 0, 0.5); }\n  .ReactCrop__rule-of-thirds-vt::before, .ReactCrop__rule-of-thirds-vt::after, .ReactCrop__rule-of-thirds-hz::before, .ReactCrop__rule-of-thirds-hz::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.4); }\n  .ReactCrop__rule-of-thirds-vt::before, .ReactCrop__rule-of-thirds-vt::after {\n    width: 1px;\n    top: 0;\n    bottom: 0; }\n  .ReactCrop__rule-of-thirds-vt::before {\n    left: 33.3333%;\n    left: calc(100% / 3); }\n  .ReactCrop__rule-of-thirds-vt::after {\n    left: 66.6666%;\n    left: calc(100% / 3 * 2); }\n  .ReactCrop__rule-of-thirds-hz::before, .ReactCrop__rule-of-thirds-hz::after {\n    left: 0;\n    right: 0;\n    height: 1px; }\n  .ReactCrop__rule-of-thirds-hz::before {\n    top: 33.3333%;\n    top: calc(100% / 3); }\n  .ReactCrop__rule-of-thirds-hz::after {\n    top: 66.6666%;\n    top: calc(100% / 3 * 2); }\n  .ReactCrop__drag-handle {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background-color: rgba(0, 0, 0, 0.2);\n    border: 1px solid rgba(255, 255, 255, 0.7);\n    box-sizing: border-box;\n    outline: 1px solid transparent; }\n  .ReactCrop .ord-nw {\n    top: 0;\n    left: 0;\n    margin-top: -5px;\n    margin-left: -5px;\n    cursor: nw-resize; }\n  .ReactCrop .ord-n {\n    top: 0;\n    left: 50%;\n    margin-top: -5px;\n    margin-left: -5px;\n    cursor: n-resize; }\n  .ReactCrop .ord-ne {\n    top: 0;\n    right: 0;\n    margin-top: -5px;\n    margin-right: -5px;\n    cursor: ne-resize; }\n  .ReactCrop .ord-e {\n    top: 50%;\n    right: 0;\n    margin-top: -5px;\n    margin-right: -5px;\n    cursor: e-resize; }\n  .ReactCrop .ord-se {\n    bottom: 0;\n    right: 0;\n    margin-bottom: -5px;\n    margin-right: -5px;\n    cursor: se-resize; }\n  .ReactCrop .ord-s {\n    bottom: 0;\n    left: 50%;\n    margin-bottom: -5px;\n    margin-left: -5px;\n    cursor: s-resize; }\n  .ReactCrop .ord-sw {\n    bottom: 0;\n    left: 0;\n    margin-bottom: -5px;\n    margin-left: -5px;\n    cursor: sw-resize; }\n  .ReactCrop .ord-w {\n    top: 50%;\n    left: 0;\n    margin-top: -5px;\n    margin-left: -5px;\n    cursor: w-resize; }\n  .ReactCrop__disabled .ReactCrop__drag-handle {\n    cursor: inherit; }\n  .ReactCrop__drag-bar {\n    position: absolute; }\n    .ReactCrop__drag-bar.ord-n {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 6px;\n      margin-top: -3px; }\n    .ReactCrop__drag-bar.ord-e {\n      right: 0;\n      top: 0;\n      width: 6px;\n      height: 100%;\n      margin-right: -3px; }\n    .ReactCrop__drag-bar.ord-s {\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 6px;\n      margin-bottom: -3px; }\n    .ReactCrop__drag-bar.ord-w {\n      top: 0;\n      left: 0;\n      width: 6px;\n      height: 100%;\n      margin-left: -3px; }\n  .ReactCrop--new-crop .ReactCrop__drag-bar,\n  .ReactCrop--new-crop .ReactCrop__drag-handle,\n  .ReactCrop--fixed-aspect .ReactCrop__drag-bar {\n    display: none; }\n  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,\n  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,\n  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,\n  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w {\n    display: none; }\n  @media (pointer: coarse) {\n    .ReactCrop__drag-handle {\n      width: 34px;\n      height: 34px; }\n    .ReactCrop__drag-bar {\n      display: none; }\n    .ReactCrop .ord-nw,\n    .ReactCrop .ord-n,\n    .ReactCrop .ord-ne,\n    .ReactCrop .ord-e,\n    .ReactCrop .ord-s,\n    .ReactCrop .ord-sw,\n    .ReactCrop .ord-w {\n      display: none; }\n    .ReactCrop .ord-se {\n      margin-bottom: -1px;\n      margin-right: -1px; } }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());

var VHImgCrop = /*#__PURE__*/function (_PureComponent) {
  _inherits(VHImgCrop, _PureComponent);

  var _super = _createSuper(VHImgCrop);

  function VHImgCrop() {
    var _this;

    _classCallCheck(this, VHImgCrop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      src: null,
      croppedImageUrlSent: null,
      cropped: false,
      showCropper: false,
      fileName: '',
      crop: {
        unit: '%',
        width: 10,
        aspect: 1
      },
      inputFile: _react.default.createRef()
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectFile", function (e) {
      if (e.target.files && e.target.files.length > 0) {
        var reader = new FileReader();
        reader.addEventListener('load', function () {
          return _this.setState({
            src: reader.result
          });
        });
        reader.readAsDataURL(e.target.files[0]);

        _this.setState({
          fileName: e.target.files[0].name,
          mimeType: e.target.files[0].type
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onImageLoaded", function (image) {
      _this.setState({
        showCropper: true,
        cropped: false
      }, function () {
        _this.imageRef = image;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCropComplete", function (crop) {
      _this.makeClientCrop(crop);
    });

    _defineProperty(_assertThisInitialized(_this), "onCropChange", function (crop, percentCrop) {
      // You could also use percentCrop:
      // this.setState({ crop: percentCrop });
      _this.setState({
        crop: crop
      });
    });

    return _this;
  }

  _createClass(VHImgCrop, [{
    key: "makeClientCrop",
    value: function () {
      var _makeClientCrop = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(crop) {
        var croppedImageUrl;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.imageRef && crop.width && crop.height)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.getCroppedImg(this.imageRef, crop, 'newFile.jpeg');

              case 3:
                croppedImageUrl = _context.sent;
                this.setState({
                  croppedImageUrl: croppedImageUrl
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function makeClientCrop(_x) {
        return _makeClientCrop.apply(this, arguments);
      }

      return makeClientCrop;
    }()
  }, {
    key: "getCroppedImg",
    value: function getCroppedImg(image, crop, fileName) {
      var _this2 = this;

      var canvas = document.createElement('canvas');
      var scaleX = image.naturalWidth / image.width;
      var scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
      return new Promise(function (resolve, reject) {
        canvas.toBlob(function (blob) {
          if (!blob) {
            //reject(new Error('Canvas is empty'));
            console.error('Canvas is empty');
            return;
          }

          blob.name = fileName;
          window.URL.revokeObjectURL(_this2.fileUrl);
          _this2.fileUrl = window.URL.createObjectURL(blob);
          resolve(_this2.fileUrl);
        }, 'image/jpeg');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          crop = _this$state.crop,
          cropped = _this$state.cropped,
          croppedImageUrlSent = _this$state.croppedImageUrlSent,
          showCropper = _this$state.showCropper,
          croppedImageUrl = _this$state.croppedImageUrl,
          fileName = _this$state.fileName,
          src = _this$state.src; // console.log('reactImageCropCss', reactImageCropCss)

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "imgCrop"
      }, /*#__PURE__*/_react.default.createElement(GlobalStyle, null), /*#__PURE__*/_react.default.createElement(_Avatar.default, {
        content: "",
        image: croppedImageUrlSent || this.props.source,
        showCursor: true,
        uploading: this.props.uploading,
        size: "xl",
        onEvent: function onEvent(e) {
          _this3.setState({
            cropped: false,
            src: null,
            showCropper: false
          }, function () {
            _this3.state.inputFile.current.click();
          });
        }
      }), /*#__PURE__*/_react.default.createElement(_Modal.default, {
        marginTop: '50px',
        onClose: function onClose() {
          _this3.setState({
            showCropper: false
          });
        },
        content: /*#__PURE__*/_react.default.createElement(_Grid.Row, {
          className: "newModal",
          justifyCenter: true,
          column: true,
          responsive: true,
          alignItemsCenter: true
        }, showCropper && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
          justifyCenter: true,
          column: true,
          responsive: true,
          alignItemsCenter: true
        }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
          responsive: true,
          marginBottom: '10'
        }, /*#__PURE__*/_react.default.createElement(_Text.default, {
          variant: "h3",
          color: "gray-90",
          text: 'Crop your photo !'
        })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
          responsive: true,
          marginBottom: '10'
        }, /*#__PURE__*/_react.default.createElement(_ButtonNew.default, {
          className: "",
          label: "Send",
          onEvent: function onEvent(e) {
            _this3.setState({
              cropped: false,
              src: null,
              showCropper: false,
              croppedImageUrlSent: croppedImageUrl
            });

            fetch(croppedImageUrl).then(function (res) {
              return res.blob();
            }).then(function (res) {
              _this3.props.onEvent({
                data: _this3.props.data,
                src: res,
                fileName: fileName,
                type: 'onCropped',
                target: 'VHImgCrop'
              });
            });
          },
          primary: true
        }))), /*#__PURE__*/_react.default.createElement("div", {
          style: {
            display: 'none'
          }
        }, /*#__PURE__*/_react.default.createElement("input", {
          ref: this.state.inputFile,
          type: "file",
          accept: this.props.acceptTypes || 'image/*',
          onChange: this.onSelectFile
        })), src && !cropped && /*#__PURE__*/_react.default.createElement(_reactImageCrop.default, {
          src: src,
          crop: crop,
          ruleOfThirds: true,
          onImageLoaded: this.onImageLoaded,
          onComplete: this.onCropComplete,
          onChange: this.onCropChange
        })),
        onEvent: function noRefCheck() {},
        open: showCropper
      }), croppedImageUrl && cropped && /*#__PURE__*/_react.default.createElement("img", {
        alt: "Crop",
        style: {
          maxWidth: '100%'
        },
        src: croppedImageUrl
      }));
    }
  }]);

  return VHImgCrop;
}(_react.PureComponent);

var _default = VHImgCrop;
exports.default = _default;