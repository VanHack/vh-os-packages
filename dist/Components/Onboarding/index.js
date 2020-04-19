"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Base = _interopRequireDefault(require("../Cards/Base"));

var _ProgressBar = _interopRequireDefault(require("../ProgressBar"));

var _ButtonNew = _interopRequireDefault(require("../Button-New"));

var _Text = _interopRequireDefault(require("../Text"));

var _Preloader = _interopRequireDefault(require("../Preloader"));

var _FirstStep = _interopRequireDefault(require("./FirstStep"));

var _SecondStep = _interopRequireDefault(require("./SecondStep"));

var _ThirdStep = _interopRequireDefault(require("./ThirdStep"));

var _FourthStep = _interopRequireDefault(require("./FourthStep"));

var _FifthStep = _interopRequireDefault(require("./FifthStep"));

var _SixStep = _interopRequireDefault(require("./SixStep"));

var _StartStep = _interopRequireDefault(require("./StartStep"));

var _FinishStep = _interopRequireDefault(require("./FinishStep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* babel-plugin-inline-import '../../../assets/images/vanhack-logo-light.svg' */
var VanhackLogo = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTc5cHgiIGhlaWdodD0iMzhweCIgdmlld0JveD0iMCAwIDE3OSAzOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTcuMSAoODMwODgpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPnZhbmhhY2stbG9nby1saWdodDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5LjAwMDAwMCwgLTI1Ni4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9InZoLS8tYnJhbmQtLy12YW5oYWNrLWxvZ28tLy1saWdodCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkuMDAwMDAwLCAyNTYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0idmgtLy1icmFuZC0vLXZhbmhhY2stbG9nby0vLXdoaXRlIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iVmFuSGFjay1sb2dvIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYxLjQ1NzEwMSwxNC43NzcyNzgxIEMxNjEuOTA3MjA1LDE0Ljk2MzkwNTMgMTYyLjAxMDczLDE1LjE2ODUyMDcgMTYxLjgxOTQzNSwxNS42MzE3MTYgQzE2MS40ODQxMDcsMTYuNDM2Njg2NCAxNjEuMjAwNTQxLDE3LjI2NDE0MiAxNjAuOTM3MjMsMTguMTA1MDg4OCBDMTYwLjc5NzY5NywxOC41NTQ3OTI5IDE2MC42MDY0MDMsMTguNjM1NzM5NiAxNjAuMTY5ODAxLDE4LjQ2NzEwMDYgQzE1OS4wMzA4NzgsMTguMDU1MjQ2NCAxNTcuODE2ODYzLDE3Ljg5MTkzNzMgMTU2LjYwOTQ3MiwxNy45ODgxNjU3IEMxNTQuNjYwNTE4LDE4LjA4NDg1MjEgMTUzLjQwNDcyNSwxOS4yMzYwOTQ3IDE1My4wOTg2NTQsMjEuMTQ3MzM3MyBDMTUyLjk1MDU2OSwyMi4xMjk1NjcgMTUyLjk1ODkyNSwyMy4xMjkwMTc3IDE1My4xMjM0MSwyNC4xMDg2MzkxIEMxNTMuMzY0MjE2LDI1LjY1NTYyMTMgMTU0LjI4NDY4LDI2LjUxNDU1NjIgMTU1LjkwMjgwNywyNi43ODY2MjcyIEMxNTcuNDQ5NDI2LDI3LjAxMTM4NCAxNTkuMDI0MzI3LDI2Ljk0ODEwODUgMTYwLjU0Nzg4OSwyNi42IEMxNjEuMDI1LDI2LjUwMzMxMzYgMTYxLjE2MjI4MiwyNi42IDE2MS4yMjMwNDYsMjcuMDc0NDM3OSBDMTYxLjM0NDU3NCwyNy45NjI2MDM2IDE2MS41MDY2MTIsMjguODQ0MDIzNyAxNjEuNzAyNDA4LDI5LjcxODY5ODIgQzE2MS43OTQ2NzksMzAuMTI3OTI5IDE2MS43Mzg0MTYsMzAuMjgzMDc2OSAxNjEuMjk3MzEzLDMwLjM5MzI1NDQgQzE1OC42NDc1OTIsMzEuMDQ5MTI1OCAxNTUuODc5NjU3LDMxLjA2NTMxMTcgMTUzLjIyMjQzMywzMC40NDA0NzM0IEMxNTAuMTAwOTU2LDI5LjcxNDIwMTIgMTQ4LjM2MTMwMSwyNy42NTQ1NTYyIDE0OC4wMDM0NjgsMjQuNDI3OTI5IEMxNDcuODI3OTI3LDIyLjg1Mzk2NDUgMTQ3Ljc3ODQxNSwyMS4yOCAxNDguMjI4NTIsMTkuNzE5NTI2NiBDMTQ5LjEyODczLDE2LjQ3MDQxNDIgMTUxLjkzMDYzMiwxNC4yNjQ2MTU0IDE1NS40NzI5NTcsMTQuMDE5NTI2NiBDMTU1Ljk2ODA3MiwxMy45ODU3OTg4IDE1Ni40NjU0MzgsMTQuMDE5NTI2NiAxNTYuOTYwNTUzLDE0LjAxOTUyNjYgTDE1Ni45NTYwNTIsMTQuMDAxNTM4NSBDMTU4LjQ5NTg4NywxMy45MTU0MTE5IDE2MC4wMzUxMzgsMTQuMTgwNjk2MiAxNjEuNDU3MTAxLDE0Ljc3NzI3ODEgWiBNMTY3LjcwNjgwNiw4LjE2MjEzMDE4IEMxNjguMjM3OTMsOC4xNDYzOTA1MyAxNjguMzE0NDQ4LDguMzUxMDA1OTIgMTY4LjMxMjE5Nyw4LjgxNDIwMTE4IEMxNjguMjk0MTkzLDEyLjM2MDExODMgMTY4LjMxMjE5NywxNS45MDYwMzU1IDE2OC4zMTIxOTcsMTkuNDUxOTUyNyBMMTY4LjMxMjE5NywyMC4zNTEzNjA5IEMxNjkuMDUyNjE5LDE5LjM2ODc1NzQgMTY5LjY2MjUxMiwxOC41NTI1NDQ0IDE3MC4yODU5MDcsMTcuNzMxODM0MyBDMTcxLjAyMjU3OCwxNi43NDg0ODEzIDE3MS43NTg1LDE1Ljc2MzYyOTIgMTcyLjQ5MzY3MSwxNC43NzcyNzgxIEMxNzIuNjMzMjAzLDE0LjU5MDY1MDkgMTcyLjc1MDIzMSwxNC4zODM3ODcgMTczLjA0MDU0OCwxNC4zODYwMzU1IEwxNzguMTM1NzM1LDE0LjM4NjAzNTUgTDE3NS4wNjE1MTksMTguMjUxMjQyNiBDMTc0LjIzNTU3NywxOS4yODU1NjIxIDE3My40MTg2MzYsMjAuMzI4ODc1NyAxNzIuNTg1OTQyLDIxLjM0OTcwNDEgQzE3Mi4zMjI2MzEsMjEuNjcxMjQyNiAxNzIuMjU1MTE1LDIxLjg5Mzg0NjIgMTcyLjU4NTk0MiwyMi4yNDkxMTI0IEMxNzMuNDYxMzk2LDIzLjE3Nzc1MTUgMTc0LjI4OTU4OSwyNC4xNTEzNjA5IDE3NS4xNDI1MzgsMjUuMTAwMjM2NyBDMTc2LjEwNTc2MiwyNi4xNzI3ODExIDE3Ny4zNTcwNTMsMjYuNzY0MTQyIDE3OC42OTYxMTUsMjcuMjA0ODUyMSBMMTc4LjY5NjExNSwyNy45MTMxMzYxIEwxNzguNjgwMzYyLDI3LjkwNDE0MiBDMTc4LjM1MTc4NSwyOC42MjE0MjAxIDE3OC4zNDk1MzUsMjkuNDAzOTA1MyAxNzguMjUwNTEyLDMwLjE1MjY2MjcgQzE3OC4xODA3NDUsMzAuNjgxMDY1MSAxNzguMDI1NDU5LDMwLjkwMzY2ODYgMTc3LjQyNDU2OSwzMC44Njk5NDA4IEMxNzQuNzIzOTQsMzAuNzIxNTM4NSAxNzIuNTQ5OTM0LDI5LjY5ODQ2MTUgMTcwLjk3NjgxOCwyNy40NDU0NDM4IEMxNzAuMTgyMzgzLDI2LjMwNzY5MjMgMTY5LjI4ODkyNSwyNS4yMzk2NDUgMTY4LjMxMjE5NywyMy45NzE0NzkzIEwxNjguMzEyMTk3LDI0Ljg5MzM3MjggQzE2OC4zMTIxOTcsMjYuNTczMDE3OCAxNjguMjk2NDQzLDI4LjI1MDQxNDIgMTY4LjMxMjE5NywyOS45MzAwNTkyIEMxNjguMzEyMTk3LDMwLjM3OTc2MzMgMTY4LjE5NTE3LDMwLjU1NzM5NjQgMTY3LjcyMjU2LDMwLjU0NjE1MzggQzE2Ni40NDY1MTMsMzAuNTIxNDIwMSAxNjUuMTY1OTY0LDMwLjUyMzY2ODYgMTYzLjg5NjY2OSwzMC41NDYxNTM4IEMxNjMuNDgwMzIyLDMwLjU0NjE1MzggMTYzLjMyMDUzNSwzMC40NDcyMTg5IDE2My4zMjA1MzUsMjkuOTk1MjY2MyBDMTYzLjMzMjUzNywyMi45MDM0MzIgMTYzLjMzMjUzNywxNS44MTA4NDgxIDE2My4zMjA1MzUsOC43MTc1MTQ3OSBDMTYzLjMyMDUzNSw4LjI2NzgxMDY1IDE2My40NDY1NjQsOC4xNTMxMzYwOSAxNjMuODgwOTE1LDguMTYyMTMwMTggQzE2NS4xNTY5NjIsOC4xODkxMTI0MyAxNjYuNDM3NTEsOC4xOTgxMDY1MSAxNjcuNzA2ODA2LDguMTYyMTMwMTggWiBNODUuOTY3NzcwNCwxNC4zNjEzMDE4IEM4OC4yMTgyOTQ1LDE0LjkwMDk0NjcgODkuMjgwNTQxOSwxNi4zMjg3NTc0IDg5LjM0MzU1NjYsMTguNjYwNDczNCBDODkuMzYzMDYxMSwxOS40NjM5NDQ4IDg5LjM1NjU1OTYsMjAuMjY3NDE2MiA4OS4zNTAwNTgxLDIxLjA3MTU1MzggTDg5LjM0MzU1NjYsMjIuMjc4MzQzMiBMODkuMzQ1ODA3MSwyMi4yODk1ODU4IEM4OS4zNDU4MDcxLDIzLjQ0NzU3NCA4OS4zODYzMTY2LDI0LjYwNzgxMDcgODkuMzMwMDUzNSwyNS43NjU3OTg4IEM4OS4yOTYyOTU2LDI2LjQ4NzU3NCA4OS41Njg2MDksMjYuODYwODI4NCA5MC4yNjE3NzA0LDI2Ljg3NjU2OCBDOTAuNzExODc1MywyNi44NzY1NjggOTAuODA2Mzk3MywyNy4wNzIxODkzIDkwLjc3NzE0MDUsMjcuNDc5MTcxNiBDOTAuNzA5NjI0NywyOC4zOTY1NjggOTAuNjczNjE2NCwyOS4zMTg0NjE1IDkwLjYzNzYwOCwzMC4yNDAzNTUgQzkwLjYzNzYwOCwzMC40ODA5NDY3IDkwLjU4NTg0NTksMzAuNjUxODM0MyA5MC4yOTU1MjgzLDMwLjY2MDgyODQgQzg4Ljc3ODY3NTEsMzAuNzEwMjk1OSA4Ny4yNjE4MjE4LDMwLjczMDUzMjUgODUuODYxOTk1OCwzMC4wMDg3NTc0IEM4NS42MjAwODEyLDI5LjkwOTI3ODYgODUuNDEzODA4MiwyOS43MzkyMzUzIDg1LjI3MDEwOCwyOS41MjA4Mjg0IEM4NC45ODIwNDA5LDI4LjkwNDczMzcgODQuNjkzOTczOCwyOS4xNDc1NzQgODQuMzA5MTM0MiwyOS40MTI4OTk0IEM4Mi40Mzc4ODUyLDMwLjc3MjYxMTggODAuMDMxNjU2OCwzMS4xNjM5NzQ3IDc3LjgyNTM3NDIsMzAuNDY3NDU1NiBDNzUuODgzMTcxOSwyOS44OTYzMzE0IDc0LjgxMTkyMjQsMjguNSA3NC42OTAzOTQxLDI2LjQ2OTU4NTggQzc0LjU0ODYxMTEsMjQuMTAxODkzNSA3NS4zNjU1NTE0LDIyLjU5NzYzMzEgNzcuMjg3NDk5LDIxLjc0NzY5MjMgQzc4LjU0MzI5MTQsMjEuMTc2NTY4IDc5Ljg5MzYwNTksMjEuMDI1OTE3MiA4MS4yNDM5MjAzLDIwLjk3ODY5ODIgQzgyLjE2NjYzNTIsMjAuOTQ0OTcwNCA4My4wODkzNTAxLDIwLjk1Mzk2NDUgODQuMDEyMDY1LDIwLjk3ODY5ODIgQzg0LjM4MTE1MDksMjAuOTc4Njk4MiA4NC40OTE0MjY2LDIwLjg1OTUyNjYgODQuNTA3MTgwMywyMC40OTA3NjkyIEM4NC41NTg5NDIzLDE4Ljk5Nzc1MTUgODQuMDk3NTg0OSwxOC40Mzc4Njk4IDgyLjU5NDIzNDgsMTguMjEzMDE3OCBDODAuNzc1ODExMywxNy45NTg5MzQ5IDc5LjAxMzY1MDksMTguMzQ3OTI5IDc3LjI2MDQ5MjcsMTguNzI3OTI5IEM3Ni43NzY2MywxOC44MzM2MDk1IDc2LjU4NTMzNTQsMTguNzcyODk5NCA3Ni40Nzk1NjA4LDE4LjI3ODIyNDkgQzc2LjI3OTI2NDIsMTcuNDA1Nzk4OCA3Ni4wMjk0NTYsMTYuNTQ0NjE1NCA3NS43NzA2NDU3LDE1LjY4MzQzMiBDNzUuNjc2MTIzNywxNS4zNjYzOTA1IDc1Ljc0ODE0MDUsMTUuMjE1NzM5NiA3Ni4wNjU0NjQ0LDE1LjEwMTA2NTEgQzc5LjI5NDk2NjUsMTMuOTE4MzQzMiA4Mi41OTE5ODQzLDEzLjU2MDgyODQgODUuOTY3NzcwNCwxNC4zNjEzMDE4IFogTTE0MS42OTI5OTgsMTQuMjczNjA5NSBDMTQ0LjA4NzU1NiwxNC43NTAyOTU5IDE0NS4yNjY4MywxNi4xODI2MDM2IDE0NS4zMjc1OTQsMTguNjMxMjQyNiBDMTQ1LjM1Njg1MSwxOS43ODkyMzA4IDE0NS4zMjc1OTQsMjAuOTQ3MjE4OSAxNDUuMzI3NTk0LDIyLjEwNTIwNzEgTDE0NS4zNDEwOTcsMjIuMTA1MjA3MSBMMTQ1LjM0MTA5NywyMi4xMTg2OTgyIEMxNDUuMzQxMDk3LDIzLjMyMzkwNTMgMTQ1LjM3OTM1NiwyNC41MzEzNjA5IDE0NS4zMjc1OTQsMjUuNzMyMDcxIEMxNDUuMjkzODM2LDI2LjQ4NTMyNTQgMTQ1LjU5MzE1NiwyNi44NTYzMzE0IDE0Ni4zMTU1NzQsMjYuODc4ODE2NiBDMTQ2Ljc4MzY4MywyNi44Nzg4MTY2IDE0Ni44MzA5NDQsMjcuMDY3NjkyMyAxNDYuNzk0OTM2LDI3LjQ4ODE2NTcgQzE0Ni43MTYxNjgsMjguMzU2MDk0NyAxNDYuNzA3MTY2LDI5LjIzMzAxNzggMTQ2LjY4NDY2LDMwLjEwNzY5MjMgQzE0Ni42ODQ2NiwzMC40NzQyMDEyIDE0Ni41NDI4NzcsMzAuNjcyMDcxIDE0Ni4xNDQ1MzUsMzAuNjgxMDY1MSBDMTQ0Ljg4ODc0MiwzMC43MDU3OTg4IDE0My42Mzk3MDEsMzAuNjgxMDY1MSAxNDIuNDMzNDIsMzAuMjcxODM0MyBDMTQxLjk1NjMwOSwzMC4xMTQ0Mzc5IDE0MS40NzI0NDcsMjkuODg1MDg4OCAxNDEuMjM2MTQyLDI5LjQzNTM4NDYgQzE0MC45NjgzMjksMjguOTI0OTcwNCAxNDAuNzM2NTI1LDI5LjEyNzMzNzMgMTQwLjQzMjcwNCwyOS4zNDMxOTUzIEMxMzguNDM2NDksMzAuNzUwNzY5MiAxMzYuMjU1NzMyLDMxLjE1Nzc1MTUgMTMzLjkwNjE4NCwzMC40Njc0NTU2IEMxMzEuOTI3OTc0LDI5Ljg5NDA4MjggMTMwLjgyNTIxNywyOC40OTU1MDMgMTMwLjY5MjQzNiwyNi40NTE1OTc2IEMxMzAuNTMwMzk4LDI0LjEyODg3NTcgMTMxLjQzMDYwOCwyMi41NTI2NjI3IDEzMy4zNzUwNjEsMjEuNzA5NDY3NSBDMTM0Ljc0NTYzLDIxLjExODEwNjUgMTM2LjIwMzk3LDIwLjk5NjY4NjQgMTM3LjY3NTgxMiwyMC45NzE5NTI3IEMxMzguNDMxOTg4LDIwLjk1ODQ2MTUgMTM5LjE5MDQxNSwyMC45NDI3MjE5IDEzOS45NDY1OTEsMjAuOTcxOTUyNyBDMTQwLjM5NjY5NiwyMC45OTQ0Mzc5IDE0MC40OTEyMTgsMjAuODIzNTUwMyAxNDAuNDk1NzE5LDIwLjQwNTMyNTQgQzE0MC40OTU3MTksMTguODkyMDcxIDE0MC4xMzc4ODYsMTguNDI4ODc1NyAxMzguNjE2NTMxLDE4LjIxMzAxNzggQzEzNi44MDI2MDksMTcuOTU0NDM3OSAxMzUuMDQwNDQ5LDE4LjM1MDE3NzUgMTMzLjI4NzI5LDE4LjcyNTY4MDUgQzEzMi44MTQ2OCwxOC44MjY4NjM5IDEzMi42MTIxMzMsMTguNzg0MTQyIDEzMi41MDQxMDgsMTguMjc1OTc2MyBDMTMyLjMxNzMxNCwxNy40MjYwMzU1IDEzMi4wNTQwMDMsMTYuNTg5NTg1OCAxMzEuODE1NDQ4LDE1Ljc1MDg4NzYgQzEzMS43MTQxNzQsMTUuNDA2ODYzOSAxMzEuNzM0NDI5LDE1LjIyNjk4MjIgMTMyLjE0MTc3NCwxNS4wNzYzMzE0IEMxMzUuMTg4MzgzLDEzLjkyNDQ3OTQgMTM4LjQ5NjYwNiwxMy42NDY0NDM0IDE0MS42OTI5OTgsMTQuMjczNjA5NSBaIE01Ny42NDI2NzQsOS41NzY0NDk3IEM1OC4xMTA3ODMsOS41NzY0NDk3IDU4LjI5MzA3NTUsOS43MjkzNDkxMSA1OC40MjEzNTUzLDEwLjE1ODgxNjYgQzU5Ljk3NTcxNzMsMTUuMzMzNDEyMiA2MS41NDEzMzE5LDIwLjUwNTAwOTkgNjMuMTE4MTk5MiwyNS42NzM2MDk1IEM2My4yMDU5Njk2LDI1Ljk2NTkxNzIgNjMuMzA0OTkyNywyNi4yNTM3Mjc4IDYzLjQ1MzUyNzMsMjYuNzA3OTI5IEM2My45MzUxMzk0LDI1LjM5NDc5MjkgNjQuMzY3MjQsMjQuMjM0NTU2MiA2NC43OTAzMzg2LDIzLjA1NDA4MjggQzY2LjMyNjY5NjQsMTguNzkyMzg2NiA2Ny44NTc4MDI5LDE0LjUyODQ0MTggNjkuMzgzNjU4MywxMC4yNjIyNDg1IEM2OS41NTkxOTkyLDkuNzcyMDcxMDEgNjkuNzc1MjQ5NSw5LjU1NjIxMzAyIDcwLjMzMTEyODksOS41ODc2OTIzMSBDNzEuNTgyNDIwMyw5LjYzNDkxMTI0IDcyLjgzODIxMjgsOS42MjgxNjU2OCA3NC4wOTE3NTQ3LDkuNTg3NjkyMzEgQzc0LjY5NzE0NTcsOS41Njk3MDQxNCA3NC43OTYxNjg4LDkuNjk3ODY5ODIgNzQuNTY2NjE1MywxMC4yNzU3Mzk2IEM3Mi43MzY5MzkyLDE0Ljg4MDcxMDEgNzAuOTM4NzcwNCwxOS40OTQ2NzQ2IDY5LjEzMTU5OTYsMjQuMTEzMTM2MSBDNjguMzgyMTc1MSwyNi4wMjQzNzg3IDY3LjYyMzc0ODQsMjcuOTM1NjIxMyA2Ni44OTkwNzk3LDI5Ljg1MzYwOTUgQzY2LjcxMDAzNTYsMzAuMzU3Mjc4MSA2Ni40NzgyMzE3LDMwLjU5MzM3MjggNjUuODg2MzQzOCwzMC41NzUzODQ2IEM2NC4xODQ5NDc2LDMwLjUyODE2NTcgNjIuNDc5MDUwMywzMC41MzQ5MTEyIDYwLjc3NzY1NDEsMzAuNTc1Mzg0NiBDNjAuMjI2Mjc1NywzMC41ODY2MjcyIDYwLjAwNzk3NDgsMzAuMzkzMjU0NCA1OS44MzY5MzUsMjkuODg3MzM3MyBDNTcuNjE5NDE4NiwyMy4zNjUxMjgyIDU1LjM4NzY0ODgsMTYuODQ0NDE4MSA1My4xNDE2MjU4LDEwLjMyNTIwNzEgQzUzLjA3NDExMDEsMTAuMTI3MzM3MyA1Mi45NzI4MzY1LDkuOTQwNzEwMDYgNTIuODg3MzE2Niw5Ljc0OTU4NTggTDUyLjg4NzMxNjYsOS42MDc5Mjg5OSBDNTQuNDYyNjgzNCw5LjYwMzQzMTk1IDU2LjA1ODMwNSw5LjYwMzQzMTk1IDU3LjY0MjY3NCw5LjU3NjQ0OTcgWiBNMTA0LjI0MjAyNiwxNC4wODI0ODUyIEMxMDYuNTM3NTYxLDE0LjUxODY5ODIgMTA3LjU5MzA1NywxNS43Njg4NzU3IDEwNy44MTgxMDksMTguMTAwNTkxNyBDMTA3Ljk5NTksMTkuOTM5ODgxNyAxMDcuOTE0ODgyLDIxLjc4MzY2ODYgMTA3LjkzMDYzNSwyMy42MjUyMDcxIEMxMDcuOTQ2Mzg5LDI1LjcwMjg0MDIgMTA3LjkxNzEzMiwyNy43ODQ5NzA0IDEwNy45NDYzODksMjkuODYyNjAzNiBDMTA3Ljk0NjM4OSwzMC4zNzMwMTc4IDEwNy44MzgzNjQsMzAuNTc3NjMzMSAxMDcuMjg0NzM1LDMwLjU1OTY0NSBDMTA2LjA1NTk0OSwzMC41MjE0MjAxIDEwNC44MjQ5MTIsMzAuNTI1OTE3MiAxMDMuNTk2MTI2LDMwLjU1OTY0NSBDMTAzLjEwMzI2MSwzMC41NzMxMzYxIDEwMi45NTQ3MjYsMzAuNDI2OTgyMiAxMDIuOTU2OTc3LDI5LjkyNzgxMDcgQzEwMi45Nzk0ODIsMjYuOTUwNzY5MiAxMDIuOTU2OTc3LDIzLjk3MzcyNzggMTAyLjk2ODIzLDIwLjk5NjY4NjQgQzEwMi45ODA5NTUsMjAuNTAwNzgzMiAxMDIuOTQxNzMzLDIwLjAwNDkxMDEgMTAyLjg1MTIwMiwxOS41MTcxNTk4IEMxMDIuNjcxMTYsMTguNjY3MjE4OSAxMDIuMjc5NTY5LDE4LjMxNDIwMTIgMTAxLjM5NzM2NCwxOC4yNDg5OTQxIEMxMDAuMTkxMjc5LDE4LjE2OTg1MyA5OC45ODIwMjgyLDE4LjM0NTI5NDkgOTcuODQ4Mjg3MiwxOC43NjM5MDUzIEM5Ny4zMzUxNjc3LDE4Ljk0Mzc4NyA5Ny4xMjU4NjksMTkuMTc5ODgxNyA5Ny4xMzI2MjA1LDE5Ljc2ODk5NDEgQzk3LjE2ODYyODksMjMuMTIzNzg3IDk3LjEzMjYyMDUsMjYuNDc4NTc5OSA5Ny4xNjE4Nzc0LDI5LjgzNTYyMTMgQzk3LjE2MTg3NzQsMzAuMzc1MjY2MyA5Ny4wNDI1OTk2LDMwLjU4MjEzMDIgOTYuNDY0MjE0OSwzMC41NjQxNDIgQzk1LjIzNTQyODcsMzAuNTIzNjY4NiA5NC4wMDQzOTIsMzAuNTM3MTU5OCA5Mi43NzU2MDU5LDMwLjU2NDE0MiBDOTIuMzQxMjU0NywzMC41NjQxNDIgOTIuMTU2NzExNywzMC40ODMxOTUzIDkyLjE1NjcxMTcsMjkuOTgxNzc1MSBDOTIuMTc2MjE2MywyNC45NDk1ODU4IDkyLjE3NjIxNjMsMTkuOTE2NjQ2OSA5Mi4xNTY3MTE3LDE0Ljg4Mjk1ODYgQzkyLjE1NjcxMTcsMTQuNDMzMjU0NCA5Mi4zMDUyNDYzLDE0LjMyMDgyODQgOTIuNzI4MzQ0OSwxNC4zMjc1NzQgQzkzLjk1NzEzMSwxNC4zNTAwNTkyIDk1LjE4ODE2NzcsMTQuMzY4MDQ3MyA5Ni40MTY5NTM5LDE0LjMyNzU3NCBDOTcuMDEzMzQyOCwxNC4zMDUwODg4IDk3LjIyNzE0MjYsMTQuNDg0OTcwNCA5Ny4xNTczNzYzLDE1LjA3NDA4MjggQzk3LjA5NTE0OTQsMTUuMzM3NjUxNSA5Ny4xMjIwNTY2LDE1LjYxNDM5MDUgOTcuMjMzODk0MSwxNS44NjEwNjUxIEw5Ny4yNDczOTczLDE1Ljg0NzU3NCBDOTcuNzg1MjcyNSwxNS41MzcyNzgxIDk4LjMwMjg5MzEsMTUuMjI0NzMzNyA5OC44MjI3NjQyLDE0LjkzNDY3NDYgQzEwMC40NjkwMTYsMTQuMDEyMTM1OSAxMDIuMzkxNzMzLDEzLjcwOTc4NSAxMDQuMjQyMDI2LDE0LjA4MjQ4NTIgWiBNMTI4LjE1Mzg0NSw5LjU2MDcxMDA2IEMxMjguNTQwOTM1LDkuNTYwNzEwMDYgMTI4LjY4NzIxOSw5LjY1MDY1MDg5IDEyOC42ODcyMTksMTAuMDY4ODc1NyBDMTI4LjY3NTIxNiwxNi43MTEwMDU5IDEyOC42NzUyMTYsMjMuMzUzODg1NiAxMjguNjg3MjE5LDI5Ljk5NzUxNDggQzEyOC42ODcyMTksMzAuNDY3NDU1NiAxMjguNTAyNjc2LDMwLjUzOTQwODMgMTI4LjEwMjA4MywzMC41MzQ5MTEyIEMxMjYuODAxMjgsMzAuNTE2OTIzMSAxMjUuNTAwNDc3LDMwLjUwNzkyOSAxMjQuMTk3NDIzLDMwLjUzNDkxMTIgQzEyMy42Nzc1NTIsMzAuNTQ4NDAyNCAxMjMuNTcxNzc4LDMwLjM0Mzc4NyAxMjMuNTc2Mjc5LDI5Ljg2MDM1NSBDMTIzLjU5NjUzNCwyNy40MjUyMDcxIDEyMy41NzYyNzksMjQuOTkwMDU5MiAxMjMuNTk2NTM0LDIyLjU1NDkxMTIgQzEyMy41OTY1MzQsMjIuMDMzMjU0NCAxMjMuNDcyNzU1LDIxLjg4MDM1NSAxMjIuOTIxMzc2LDIxLjg4MDM1NSBDMTIwLjM3MDc4MiwyMS45MTAzMzUzIDExNy44MTU2ODcsMjEuOTEwMzM1MyAxMTUuMjU2MDkxLDIxLjg4MDM1NSBDMTE0Ljc1MTk3NCwyMS44ODAzNTUgMTE0LjYyMTQ0MywyMi4wMzU1MDMgMTE0LjYyNTk0NCwyMi41MjM0MzIgQzExNC42NDg0NSwyNC45MzYwOTQ3IDExNC42MTAxOTEsMjcuMzQ2NTA4OSAxMTQuNjUyOTUxLDI5Ljc1NjkyMzEgQzExNC42NjQyMDMsMzAuNDA4OTk0MSAxMTQuNDU3MTU1LDMwLjU1MDY1MDkgMTEzLjg1MTc2NCwzMC41MjU5MTcyIEMxMTIuNjcwMjM5LDMwLjQ3ODY5ODIgMTExLjQ4NDIxMywzMC40NzE5NTI3IDExMC4zMDI2ODgsMzAuNTI1OTE3MiBDMTA5LjYyNzUzLDMwLjU1OTY0NSAxMDkuNTMwNzU4LDMwLjMwMTA2NTEgMTA5LjUzNzUwOSwyOS43MDk3MDQxIEMxMDkuNTYyMjY1LDI2LjQ2OTU4NTggMTA5LjU0ODc2MiwyMy4yMzE3MTYgMTA5LjU0ODc2MiwxOS45OTM4NDYyIEwxMDkuNTczNTE4LDIwLjAyOTgyMjUgQzEwOS41NzM1MTgsMTYuNzY3MjE4OSAxMDkuNTg3MDIxLDEzLjUwOTExMjQgMTA5LjU2MjI2NSwxMC4yNDIwMTE4IEMxMDkuNTYyMjY1LDkuNzA0NjE1MzggMTA5LjcxMzA1LDkuNTY3NDU1NjIgMTEwLjIzNzQyMiw5LjU2NzQ1NTYyIEMxMTEuNTEzNDcsOS42MDU2ODA0NyAxMTIuNzkxNzY3LDkuNTk4OTM0OTEgMTE0LjA2MzMxMyw5LjU2NzQ1NTYyIEMxMTQuNTMxNDIyLDkuNTY3NDU1NjIgMTE0LjY2NDIwMyw5LjcwMjM2Njg2IDExNC42NTk3MDIsMTAuMTY1NTYyMSBDMTE0LjYzOTQ0OCwxMi41NTM0OTExIDExNC42NzU0NTYsMTQuOTQxNDIwMSAxMTQuNjMyNjk2LDE3LjMyOTM0OTEgQzExNC42MjE0NDMsMTcuOTc5MTcxNiAxMTQuODI2MjQxLDE4LjEwNzMzNzMgMTE1LjQzMTYzMiwxOC4wOTgzNDMyIEMxMTcuOTA3MjA5LDE4LjA2NDYxNTQgMTIwLjQwMDc4OSwxOC4wNjkxMTI0IDEyMi44ODUzNjgsMTguMDk4MzQzMiBDMTIzLjQzMjI0NSwxOC4wOTgzNDMyIDEyMy42MTIyODcsMTcuOTcyNDI2IDEyMy42MDMyODUsMTcuMzk5MDUzMyBDMTIzLjU2OTUyNywxNS4wMTExMjQzIDEyMy42MDMyODUsMTIuNjIzMTk1MyAxMjMuNTc2Mjc5LDEwLjIzNTI2NjMgQzEyMy41NzYyNzksOS42OTc4Njk4MiAxMjMuNzIyNTYzLDkuNTYwNzEwMDYgMTI0LjI1MTQzNiw5LjU2MDcxMDA2IEMxMjUuNTUyMjM5LDkuNTk4OTM0OTEgMTI2Ljg1MzA0Miw5LjU4NTQ0Mzc5IDEyOC4xNTM4NDUsOS41NjA3MTAwNiBaIE04NC4xODMxMDQ4LDIzLjkwODUyMDcgQzgyLjk5MDMyNywyMy45ODA0NzM0IDgxLjc3MDU0MywyMy43NjkxMTI0IDgwLjYwNDc3MTUsMjQuMTc4MzQzMiBDNzkuODAzNTg0OSwyNC40NTk0MDgzIDc5LjQ0MTI1MDUsMjUuMDI2MDM1NSA3OS41MzEyNzE1LDI1Ljc5MDUzMjUgQzc5LjYwMzI4ODMsMjYuNDE1NjIxMyA4MC4xMzY2NjI1LDI2Ljg1NDA4MjggODAuOTQ0NjAwNiwyNi45MzUwMjk2IEM4MS43MjI4OTAzLDI2Ljk4NjQ2MTUgODIuNTA0MzYyMywyNi45MTA1MTA1IDgzLjI1ODEzOTQsMjYuNzEwMTc3NSBDODQuNDkxNDI2NiwyNi40MjQ2MTU0IDg0LjQ5MTQyNjYsMjYuNDI2ODYzOSA4NC40ODkxNzYxLDI1LjE5NDY3NDYgTDg0LjQ4OTE3NjEsMjQuMjg0MDIzNyBDODQuNDg5MTc2MSwyNC4wNzI2NjI3IDg0LjQzNzQxNCwyMy44OTI3ODExIDg0LjE4MzEwNDgsMjMuOTA4NTIwNyBaIE0xMzYuNzE0ODM5LDI0LjEyNDM3ODcgTDEzNi43MTI1ODgsMjQuMTI0Mzc4NyBDMTM1Ljg4MjE0NSwyNC4zOTg2OTgyIDEzNS40MzQyOSwyNS4wMTAyOTU5IDEzNS41MTk4MSwyNS43NDU1NjIxIEMxMzUuNTk4NTc5LDI2LjQyMDExODMgMTM2LjE3OTIxNCwyNi44Njk4MjI1IDEzNy4wNTY5MTgsMjYuOTM1MDI5NiBDMTM3LjkzNDYyMywyNy4wMDAyMzY3IDEzOC43ODc1NzEsMjYuNzk1NjIxMyAxMzkuNjQ3MjcxLDI2LjYzODIyNDkgQzE0MC4yNzUxNjgsMjYuNTIzNTUwMyAxNDAuNTM2MjI5LDI2LjI5NDIwMTIgMTQwLjUwNjk3MiwyNS41ODgxNjU3IEMxNDAuNDM5NDU2LDIzLjg5NTAyOTYgMTQwLjQ4NjcxNywyMy44OTUwMjk2IDEzOC41MTUyNTgsMjMuOTI0MjYwNCBDMTM3LjkwODI1OCwyMy44OTM5OTc4IDEzNy4zMDAzNCwyMy45NjE1Njg0IDEzNi43MTQ4MzksMjQuMTI0Mzc4NyBaIiBpZD0iVmFuSGFjayI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMy42ODYzNTg0OSw5LjQyNTc5ODgyIEw5LjkyNDgxMTMyLDIxLjYzNTI2NjMgQzEwLjE0OTg2MzcsMjAuODY0MDIzNyAxMC4zNDc5MDk5LDIwLjI1MjQyNiAxMC41Mjc5NTE4LDE5LjYzNjMzMTQgQzEyLjM5ODg4NzUsMTMuMjkxMDA1OSAxNC4yNjQ1NzIsNi45NDc5Mjg5OSAxNi4xMjUwMDUyLDAuNjA3MTAwNTkyIEMxNi4yNjY3ODgzLDAuMTE5MTcxNTk4IDE2LjQ2OTMzNTQsMCAxNi45NTU0NDg2LDAgQzE5LjY1NjA3NzYsMC4wMjQ3MzM3Mjc4IDIyLjM3MDIwOTYsMC4wMTEyNDI2MDM2IDI1LjA3NzU5MDEsMC4wMTEyNDI2MDM2IEwyNS43MTY3MzksMC4wMTEyNDI2MDM2IEMyNS4yMzI4NzYzLDEuNjU5NDA4MjggMjQuNzY5MjY4MywzLjI0Njg2MzkxIDI0LjMwMTE1OTMsNC44MzIwNzEwMSBDMjEuMTIzNDE5MywxNS41OTk0ODcyIDE3Ljk1MDE4MDMsMjYuMzY3NjUyOSAxNC43ODE0NDIzLDM3LjEzNjU2OCBDMTQuNjEyNjUzLDM3LjcxNDQzNzkgMTQuMzg3NjAwNiwzNy44ODk4MjI1IDEzLjc4ODk2MTIsMzcuODc4NTc5OSBDMTEuNTA5MTgwMywzNy44MzgxMDY1IDkuMjI3MTQ4ODUsMzcuODUxNTk3NiA2Ljk0NTExNzQsMzcuODc4NTc5OSBDNi42MDY1NTQ0NywzNy45MjIzMTIgNi4yODU1Njg1NSwzNy43MTY0MTg3IDYuMTg0NDQwMjUsMzcuMzkwNjUwOSBDNC4yNDc0ODkxNywzMy4wNiAyLjI5NzAzNDk0LDI4LjczNDU5NTcgMC4zMzMwNzc1NjgsMjQuNDE0NDM3OSBDMC4yMTY0OTMzODcsMjQuMTkwMjI3MSAwLjE4NTMwNjI1LDIzLjkzMTM2NDYgMC4yNDUzMDcxMjgsMjMuNjg1OTE3MiBDMS4zOTUzMjQ5NSwxOC45ODg3NTc0IDIuNTE4MzM2NDgsMTQuMjk2MDk0NyAzLjY4NjM1ODQ5LDkuNDI1Nzk4ODIiIGlkPSJwYXRoMTgiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ni41OTkzNTIyLDAuMDc0MjAxMTgzNCBDNDYuMTcxNzUyNiwxLjUzNzk4ODE3IDQ1Ljc1MDkwNDYsMi45OTcyNzgxMSA0NS4zMTg4MDQsNC40NjU1NjIxMyBDNDIuMDkxNTUyNCwxNS4zOTE4NzM4IDM4Ljg2NTgwMTIsMjYuMzE4OTM0OSAzNS42NDE1NTAzLDM3LjI0Njc0NTYgQzM1LjUwNDI2ODMsMzcuNzE2Njg2NCAzNS4zMTk3MjU0LDM3Ljg3NDA4MjggMzQuODIwMTA5LDM3Ljg2OTU4NTggQzMyLjAyNzIwODYsMzcuODQyNjAzNiAyOS4yMzQzMDgyLDM3Ljg1NjA5NDcgMjYuNDQxNDA3OCwzNy44NTYwOTQ3IEMyNi4zMzc4ODM2LDM3Ljg1NjA5NDcgMjYuMjMyMTA5LDM3Ljg0MDM1NSAyNi4wNTY1NjgxLDM3LjgyOTExMjQgQzI2LjQ2NjE2MzUsMzYuNDM1MDI5NiAyNi44NjY3NTY4LDM1LjA3NDY3NDYgMjcuMjY3MzUwMSwzMy43MTQzMTk1IEMyOC4xNzg4MTI0LDMwLjYxNTg1OCAyOS4wODEyNzI1LDI3LjUxMjg5OTQgMzAuMDE1MjQsMjQuNDIxMTgzNCBDMzAuMTc1MDI3MywyMy44OTUwMjk2IDMwLjA4Mjc1NTgsMjMuNzYyMzY2OSAyOS41MzU4Nzg0LDIzLjc2Njg2MzkgQzI3LjEyNzgxNzYsMjMuNzg5MzQ5MSAyNC43MTc1MDYzLDIzLjc2Njg2MzkgMjIuMzA5NDQ1NSwyMy43NjY4NjM5IEMyMS40NjU0OTksMjMuNzY2ODYzOSAyMS40NTg3NDc0LDIzLjc2Njg2MzkgMjEuNjgxNTQ5MywyMi45MjU5MTcyIEMyMi4zNTY3MDY1LDIwLjQwMDgyODQgMjMuMDQzMTE2NCwxNy44Nzc5ODgyIDIzLjcwNzAyMSwxNS4zNDg0MDI0IEMyMy44MjQwNDgyLDE0Ljg5ODY5ODIgMjQuMDE3NTkzMywxNC43MzIzMDc3IDI0LjQ4Nzk1MjgsMTQuNzM5MDUzMyBDMjcuMDQ0NTQ4MiwxNC43Nzk1MjY2IDI5LjYwMTE0MzYsMTQuNzcyNzgxMSAzMi4xNTc3MzksMTQuODI2NzQ1NiBDMzIuNzE4MTE5NSwxNC44Mzc5ODgyIDMyLjkyMDY2NjcsMTQuNjM1NjIxMyAzMy4wNTc5NDg2LDE0LjEyNzQ1NTYgQzM0LjM3Njc1NTgsOS41NzQyMDExOCAzNS43MjI1NjkyLDUuMDI5OTQwODMgMzcuMDU5MzgwNSwwLjQ4MzQzMTk1MyBDMzcuMTQwMzk5NCwwLjIwOTExMjQyNiAzNy4yMTI0MTYxLC0wLjAwMjI0ODUyMDcxIDM3LjU5NzI1NTgsNy42ODg3OTI1ZS0xNSBDNDAuNTQ1NDQyMywwLjAyMjQ4NTIwNzEgNDMuNDg2ODc3NCwwLjAxNzk4ODE2NTcgNDYuNDI4MzEyNCwwLjAyMjQ4NTIwNzEgQzQ2LjQ4NzAwOTEsMC4wMzM1Nzc3MTA4IDQ2LjU0NDM0ODksMC4wNTA5MTUxMTA0IDQ2LjU5OTM1MjIsMC4wNzQyMDExODM0IiBpZD0icGF0aDIwIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";

var VHOnboarding = function VHOnboarding(props) {
  var _useState = (0, _react.useState)(props.currentStep),
      _useState2 = _slicedToArray(_useState, 2),
      currentStep = _useState2[0],
      _setCurrentStep = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      displayNone = _useState4[0],
      setDisplayNone = _useState4[1];

  _react.default.useEffect(function () {
    _setCurrentStep(props.currentStep);
  }, [props.currentStep]);

  var disabled = false;

  if (currentStep === 1) {
    if (props.positionSkill === null || props.positionSkill === undefined || props.positionSkill === '') {
      disabled = true;
    }
  } else if (currentStep === 2) {
    if (props.topSkill.length < 3) {
      disabled = true;
    } else {
      props.topSkill.map(function (skill) {
        if (skill.yearsOfExperience === '') {
          disabled = true;
        }
      });
    }
  } else if (currentStep === 3) {
    if (props.secondarySkill.length < 5) {
      disabled = true;
    } else {
      props.secondarySkill.map(function (skill) {
        if (skill.yearsOfExperience === '') {
          disabled = true;
        }
      });
    }
  } else if (currentStep === 4) {
    if (props.openForRemoteJobs === null || props.visaStatusCanadian === null || props.visaStatusEU === null) {
      disabled = true;
    }
  } else if (currentStep === 5) {
    if (props.citizenship === null || props.location === null || props.gender === null || props.phone === null || props.phone === '' || props.linkedin === null || props.linkedin === '') {
      disabled = true;
    }
  } else if (currentStep === 6) {
    props.languages.map(function (language) {
      if (language.code === undefined || language.code === null || language.code === '' || language.level === undefined || language.level === null || language.level === '') {
        disabled = true;
      }
    });
  } else if (currentStep >= 7) {
    disabled = true;
  }

  return /*#__PURE__*/_react.default.createElement(_Grid.Container, {
    displayNone: displayNone,
    currentStep: currentStep,
    animation: true,
    justifyCenter: true,
    fullHeight: true,
    style: {
      backgroundImage: 'linear-gradient(to bottom right, #56CCF2, #0675CE)'
    },
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      marginBottom: '50px'
    },
    src: VanhackLogo
  }), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Base.default, {
    noPadding: true,
    width: "730px",
    height: "580px",
    id: "onboarding"
  }, props.controls.language.loading ? /*#__PURE__*/_react.default.createElement(_Preloader.default, {
    type: "fullPage",
    size: "md"
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentStep > 0 && /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    steps: props.steps,
    currentStep: currentStep,
    onEvent: props.onEvent
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      width: '100%',
      height: 'calc(100% - 10px)',
      boxSizing: 'border-box',
      padding: '33px'
    }
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      height: '100%',
      overflow: 'auto',
      boxSizing: 'border-box',
      padding: '0 3px'
    }
  }, currentStep === 0 && /*#__PURE__*/_react.default.createElement(_StartStep.default, _extends({}, props, {
    onEvent: props.onEvent,
    setCurrentStep: function setCurrentStep() {
      return _setCurrentStep(1);
    }
  })), currentStep === 1 && /*#__PURE__*/_react.default.createElement(_FirstStep.default, props), currentStep === 2 && /*#__PURE__*/_react.default.createElement(_SecondStep.default, props), currentStep === 3 && /*#__PURE__*/_react.default.createElement(_ThirdStep.default, props), currentStep === 4 && /*#__PURE__*/_react.default.createElement(_FourthStep.default, props), currentStep === 5 && /*#__PURE__*/_react.default.createElement(_FifthStep.default, props), currentStep === 6 && /*#__PURE__*/_react.default.createElement(_SixStep.default, props), currentStep > 6 && /*#__PURE__*/_react.default.createElement(_FinishStep.default, props)), currentStep > 0 && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    justifySpaceBetween: true,
    alignItemsCenter: true,
    style: {
      padding: '12px 0'
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, currentStep > 1 && /*#__PURE__*/_react.default.createElement(_ButtonNew.default, {
    className: "",
    textButton: true,
    label: "Back",
    onEvent: function onEvent(e) {
      props.onEvent({
        type: "OnChangeStep",
        origin: "VHOnboarding",
        props: {
          data: {
            stepMinor: currentStep - 2,
            step: currentStep - 1,
            stepPlus: currentStep
          }
        }
      });

      _setCurrentStep(currentStep - 1);
    },
    primary: true,
    data: props
  })), /*#__PURE__*/_react.default.createElement(_Text.default, {
    text: "".concat(currentStep, " / ").concat(props.steps),
    variant: "platform1",
    color: "gray-60"
  }), currentStep < 7 && /*#__PURE__*/_react.default.createElement(_ButtonNew.default, {
    className: "",
    label: currentStep < 6 ? "Next" : "Finish",
    disabled: disabled,
    onEvent: function onEvent(e) {
      props.onEvent({
        type: "OnChangeStep",
        origin: "VHOnboarding",
        props: {
          data: {
            stepMinor: currentStep,
            step: currentStep + 1,
            stepPlus: currentStep + 2
          }
        }
      });

      _setCurrentStep(currentStep + 1);

      if (currentStep >= 6) {
        setDisplayNone(true);
      }
    },
    primary: true,
    data: props
  }))))))));
};

VHOnboarding.defaultProps = {
  className: ""
};
VHOnboarding.propTypes = {
  steps: _propTypes.default.number.isRequired,
  currentStep: _propTypes.default.number.isRequired,
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = VHOnboarding;
exports.default = _default;