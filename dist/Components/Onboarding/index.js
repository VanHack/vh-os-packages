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
var VanhackLogo = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE3OXB4IiBoZWlnaHQ9IjM4cHgiIHZpZXdCb3g9IjAgMCAxNzkgMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Ny4xICg4MzA4OCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+DQogICAgPHRpdGxlPnZhbmhhY2stbG9nby1saWdodDwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5LjAwMDAwMCwgLTI1Ni4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4NCiAgICAgICAgICAgIDxnIGlkPSJ2aC0vLWJyYW5kLS8tdmFuaGFjay1sb2dvLS8tbGlnaHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5LjAwMDAwMCwgMjU2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSJ2aC0vLWJyYW5kLS8tdmFuaGFjay1sb2dvLS8td2hpdGUiPg0KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iVmFuSGFjay1sb2dvIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2MS40NTcxMDEsMTQuNzc3Mjc4MSBDMTYxLjkwNzIwNSwxNC45NjM5MDUzIDE2Mi4wMTA3MywxNS4xNjg1MjA3IDE2MS44MTk0MzUsMTUuNjMxNzE2IEMxNjEuNDg0MTA3LDE2LjQzNjY4NjQgMTYxLjIwMDU0MSwxNy4yNjQxNDIgMTYwLjkzNzIzLDE4LjEwNTA4ODggQzE2MC43OTc2OTcsMTguNTU0NzkyOSAxNjAuNjA2NDAzLDE4LjYzNTczOTYgMTYwLjE2OTgwMSwxOC40NjcxMDA2IEMxNTkuMDMwODc4LDE4LjA1NTI0NjQgMTU3LjgxNjg2MywxNy44OTE5MzczIDE1Ni42MDk0NzIsMTcuOTg4MTY1NyBDMTU0LjY2MDUxOCwxOC4wODQ4NTIxIDE1My40MDQ3MjUsMTkuMjM2MDk0NyAxNTMuMDk4NjU0LDIxLjE0NzMzNzMgQzE1Mi45NTA1NjksMjIuMTI5NTY3IDE1Mi45NTg5MjUsMjMuMTI5MDE3NyAxNTMuMTIzNDEsMjQuMTA4NjM5MSBDMTUzLjM2NDIxNiwyNS42NTU2MjEzIDE1NC4yODQ2OCwyNi41MTQ1NTYyIDE1NS45MDI4MDcsMjYuNzg2NjI3MiBDMTU3LjQ0OTQyNiwyNy4wMTEzODQgMTU5LjAyNDMyNywyNi45NDgxMDg1IDE2MC41NDc4ODksMjYuNiBDMTYxLjAyNSwyNi41MDMzMTM2IDE2MS4xNjIyODIsMjYuNiAxNjEuMjIzMDQ2LDI3LjA3NDQzNzkgQzE2MS4zNDQ1NzQsMjcuOTYyNjAzNiAxNjEuNTA2NjEyLDI4Ljg0NDAyMzcgMTYxLjcwMjQwOCwyOS43MTg2OTgyIEMxNjEuNzk0Njc5LDMwLjEyNzkyOSAxNjEuNzM4NDE2LDMwLjI4MzA3NjkgMTYxLjI5NzMxMywzMC4zOTMyNTQ0IEMxNTguNjQ3NTkyLDMxLjA0OTEyNTggMTU1Ljg3OTY1NywzMS4wNjUzMTE3IDE1My4yMjI0MzMsMzAuNDQwNDczNCBDMTUwLjEwMDk1NiwyOS43MTQyMDEyIDE0OC4zNjEzMDEsMjcuNjU0NTU2MiAxNDguMDAzNDY4LDI0LjQyNzkyOSBDMTQ3LjgyNzkyNywyMi44NTM5NjQ1IDE0Ny43Nzg0MTUsMjEuMjggMTQ4LjIyODUyLDE5LjcxOTUyNjYgQzE0OS4xMjg3MywxNi40NzA0MTQyIDE1MS45MzA2MzIsMTQuMjY0NjE1NCAxNTUuNDcyOTU3LDE0LjAxOTUyNjYgQzE1NS45NjgwNzIsMTMuOTg1Nzk4OCAxNTYuNDY1NDM4LDE0LjAxOTUyNjYgMTU2Ljk2MDU1MywxNC4wMTk1MjY2IEwxNTYuOTU2MDUyLDE0LjAwMTUzODUgQzE1OC40OTU4ODcsMTMuOTE1NDExOSAxNjAuMDM1MTM4LDE0LjE4MDY5NjIgMTYxLjQ1NzEwMSwxNC43NzcyNzgxIFogTTE2Ny43MDY4MDYsOC4xNjIxMzAxOCBDMTY4LjIzNzkzLDguMTQ2MzkwNTMgMTY4LjMxNDQ0OCw4LjM1MTAwNTkyIDE2OC4zMTIxOTcsOC44MTQyMDExOCBDMTY4LjI5NDE5MywxMi4zNjAxMTgzIDE2OC4zMTIxOTcsMTUuOTA2MDM1NSAxNjguMzEyMTk3LDE5LjQ1MTk1MjcgTDE2OC4zMTIxOTcsMjAuMzUxMzYwOSBDMTY5LjA1MjYxOSwxOS4zNjg3NTc0IDE2OS42NjI1MTIsMTguNTUyNTQ0NCAxNzAuMjg1OTA3LDE3LjczMTgzNDMgQzE3MS4wMjI1NzgsMTYuNzQ4NDgxMyAxNzEuNzU4NSwxNS43NjM2MjkyIDE3Mi40OTM2NzEsMTQuNzc3Mjc4MSBDMTcyLjYzMzIwMywxNC41OTA2NTA5IDE3Mi43NTAyMzEsMTQuMzgzNzg3IDE3My4wNDA1NDgsMTQuMzg2MDM1NSBMMTc4LjEzNTczNSwxNC4zODYwMzU1IEwxNzUuMDYxNTE5LDE4LjI1MTI0MjYgQzE3NC4yMzU1NzcsMTkuMjg1NTYyMSAxNzMuNDE4NjM2LDIwLjMyODg3NTcgMTcyLjU4NTk0MiwyMS4zNDk3MDQxIEMxNzIuMzIyNjMxLDIxLjY3MTI0MjYgMTcyLjI1NTExNSwyMS44OTM4NDYyIDE3Mi41ODU5NDIsMjIuMjQ5MTEyNCBDMTczLjQ2MTM5NiwyMy4xNzc3NTE1IDE3NC4yODk1ODksMjQuMTUxMzYwOSAxNzUuMTQyNTM4LDI1LjEwMDIzNjcgQzE3Ni4xMDU3NjIsMjYuMTcyNzgxMSAxNzcuMzU3MDUzLDI2Ljc2NDE0MiAxNzguNjk2MTE1LDI3LjIwNDg1MjEgTDE3OC42OTYxMTUsMjcuOTEzMTM2MSBMMTc4LjY4MDM2MiwyNy45MDQxNDIgQzE3OC4zNTE3ODUsMjguNjIxNDIwMSAxNzguMzQ5NTM1LDI5LjQwMzkwNTMgMTc4LjI1MDUxMiwzMC4xNTI2NjI3IEMxNzguMTgwNzQ1LDMwLjY4MTA2NTEgMTc4LjAyNTQ1OSwzMC45MDM2Njg2IDE3Ny40MjQ1NjksMzAuODY5OTQwOCBDMTc0LjcyMzk0LDMwLjcyMTUzODUgMTcyLjU0OTkzNCwyOS42OTg0NjE1IDE3MC45NzY4MTgsMjcuNDQ1NDQzOCBDMTcwLjE4MjM4MywyNi4zMDc2OTIzIDE2OS4yODg5MjUsMjUuMjM5NjQ1IDE2OC4zMTIxOTcsMjMuOTcxNDc5MyBMMTY4LjMxMjE5NywyNC44OTMzNzI4IEMxNjguMzEyMTk3LDI2LjU3MzAxNzggMTY4LjI5NjQ0MywyOC4yNTA0MTQyIDE2OC4zMTIxOTcsMjkuOTMwMDU5MiBDMTY4LjMxMjE5NywzMC4zNzk3NjMzIDE2OC4xOTUxNywzMC41NTczOTY0IDE2Ny43MjI1NiwzMC41NDYxNTM4IEMxNjYuNDQ2NTEzLDMwLjUyMTQyMDEgMTY1LjE2NTk2NCwzMC41MjM2Njg2IDE2My44OTY2NjksMzAuNTQ2MTUzOCBDMTYzLjQ4MDMyMiwzMC41NDYxNTM4IDE2My4zMjA1MzUsMzAuNDQ3MjE4OSAxNjMuMzIwNTM1LDI5Ljk5NTI2NjMgQzE2My4zMzI1MzcsMjIuOTAzNDMyIDE2My4zMzI1MzcsMTUuODEwODQ4MSAxNjMuMzIwNTM1LDguNzE3NTE0NzkgQzE2My4zMjA1MzUsOC4yNjc4MTA2NSAxNjMuNDQ2NTY0LDguMTUzMTM2MDkgMTYzLjg4MDkxNSw4LjE2MjEzMDE4IEMxNjUuMTU2OTYyLDguMTg5MTEyNDMgMTY2LjQzNzUxLDguMTk4MTA2NTEgMTY3LjcwNjgwNiw4LjE2MjEzMDE4IFogTTg1Ljk2Nzc3MDQsMTQuMzYxMzAxOCBDODguMjE4Mjk0NSwxNC45MDA5NDY3IDg5LjI4MDU0MTksMTYuMzI4NzU3NCA4OS4zNDM1NTY2LDE4LjY2MDQ3MzQgQzg5LjM2MzA2MTEsMTkuNDYzOTQ0OCA4OS4zNTY1NTk2LDIwLjI2NzQxNjIgODkuMzUwMDU4MSwyMS4wNzE1NTM4IEw4OS4zNDM1NTY2LDIyLjI3ODM0MzIgTDg5LjM0NTgwNzEsMjIuMjg5NTg1OCBDODkuMzQ1ODA3MSwyMy40NDc1NzQgODkuMzg2MzE2NiwyNC42MDc4MTA3IDg5LjMzMDA1MzUsMjUuNzY1Nzk4OCBDODkuMjk2Mjk1NiwyNi40ODc1NzQgODkuNTY4NjA5LDI2Ljg2MDgyODQgOTAuMjYxNzcwNCwyNi44NzY1NjggQzkwLjcxMTg3NTMsMjYuODc2NTY4IDkwLjgwNjM5NzMsMjcuMDcyMTg5MyA5MC43NzcxNDA1LDI3LjQ3OTE3MTYgQzkwLjcwOTYyNDcsMjguMzk2NTY4IDkwLjY3MzYxNjQsMjkuMzE4NDYxNSA5MC42Mzc2MDgsMzAuMjQwMzU1IEM5MC42Mzc2MDgsMzAuNDgwOTQ2NyA5MC41ODU4NDU5LDMwLjY1MTgzNDMgOTAuMjk1NTI4MywzMC42NjA4Mjg0IEM4OC43Nzg2NzUxLDMwLjcxMDI5NTkgODcuMjYxODIxOCwzMC43MzA1MzI1IDg1Ljg2MTk5NTgsMzAuMDA4NzU3NCBDODUuNjIwMDgxMiwyOS45MDkyNzg2IDg1LjQxMzgwODIsMjkuNzM5MjM1MyA4NS4yNzAxMDgsMjkuNTIwODI4NCBDODQuOTgyMDQwOSwyOC45MDQ3MzM3IDg0LjY5Mzk3MzgsMjkuMTQ3NTc0IDg0LjMwOTEzNDIsMjkuNDEyODk5NCBDODIuNDM3ODg1MiwzMC43NzI2MTE4IDgwLjAzMTY1NjgsMzEuMTYzOTc0NyA3Ny44MjUzNzQyLDMwLjQ2NzQ1NTYgQzc1Ljg4MzE3MTksMjkuODk2MzMxNCA3NC44MTE5MjI0LDI4LjUgNzQuNjkwMzk0MSwyNi40Njk1ODU4IEM3NC41NDg2MTExLDI0LjEwMTg5MzUgNzUuMzY1NTUxNCwyMi41OTc2MzMxIDc3LjI4NzQ5OSwyMS43NDc2OTIzIEM3OC41NDMyOTE0LDIxLjE3NjU2OCA3OS44OTM2MDU5LDIxLjAyNTkxNzIgODEuMjQzOTIwMywyMC45Nzg2OTgyIEM4Mi4xNjY2MzUyLDIwLjk0NDk3MDQgODMuMDg5MzUwMSwyMC45NTM5NjQ1IDg0LjAxMjA2NSwyMC45Nzg2OTgyIEM4NC4zODExNTA5LDIwLjk3ODY5ODIgODQuNDkxNDI2NiwyMC44NTk1MjY2IDg0LjUwNzE4MDMsMjAuNDkwNzY5MiBDODQuNTU4OTQyMywxOC45OTc3NTE1IDg0LjA5NzU4NDksMTguNDM3ODY5OCA4Mi41OTQyMzQ4LDE4LjIxMzAxNzggQzgwLjc3NTgxMTMsMTcuOTU4OTM0OSA3OS4wMTM2NTA5LDE4LjM0NzkyOSA3Ny4yNjA0OTI3LDE4LjcyNzkyOSBDNzYuNzc2NjMsMTguODMzNjA5NSA3Ni41ODUzMzU0LDE4Ljc3Mjg5OTQgNzYuNDc5NTYwOCwxOC4yNzgyMjQ5IEM3Ni4yNzkyNjQyLDE3LjQwNTc5ODggNzYuMDI5NDU2LDE2LjU0NDYxNTQgNzUuNzcwNjQ1NywxNS42ODM0MzIgQzc1LjY3NjEyMzcsMTUuMzY2MzkwNSA3NS43NDgxNDA1LDE1LjIxNTczOTYgNzYuMDY1NDY0NCwxNS4xMDEwNjUxIEM3OS4yOTQ5NjY1LDEzLjkxODM0MzIgODIuNTkxOTg0MywxMy41NjA4Mjg0IDg1Ljk2Nzc3MDQsMTQuMzYxMzAxOCBaIE0xNDEuNjkyOTk4LDE0LjI3MzYwOTUgQzE0NC4wODc1NTYsMTQuNzUwMjk1OSAxNDUuMjY2ODMsMTYuMTgyNjAzNiAxNDUuMzI3NTk0LDE4LjYzMTI0MjYgQzE0NS4zNTY4NTEsMTkuNzg5MjMwOCAxNDUuMzI3NTk0LDIwLjk0NzIxODkgMTQ1LjMyNzU5NCwyMi4xMDUyMDcxIEwxNDUuMzQxMDk3LDIyLjEwNTIwNzEgTDE0NS4zNDEwOTcsMjIuMTE4Njk4MiBDMTQ1LjM0MTA5NywyMy4zMjM5MDUzIDE0NS4zNzkzNTYsMjQuNTMxMzYwOSAxNDUuMzI3NTk0LDI1LjczMjA3MSBDMTQ1LjI5MzgzNiwyNi40ODUzMjU0IDE0NS41OTMxNTYsMjYuODU2MzMxNCAxNDYuMzE1NTc0LDI2Ljg3ODgxNjYgQzE0Ni43ODM2ODMsMjYuODc4ODE2NiAxNDYuODMwOTQ0LDI3LjA2NzY5MjMgMTQ2Ljc5NDkzNiwyNy40ODgxNjU3IEMxNDYuNzE2MTY4LDI4LjM1NjA5NDcgMTQ2LjcwNzE2NiwyOS4yMzMwMTc4IDE0Ni42ODQ2NiwzMC4xMDc2OTIzIEMxNDYuNjg0NjYsMzAuNDc0MjAxMiAxNDYuNTQyODc3LDMwLjY3MjA3MSAxNDYuMTQ0NTM1LDMwLjY4MTA2NTEgQzE0NC44ODg3NDIsMzAuNzA1Nzk4OCAxNDMuNjM5NzAxLDMwLjY4MTA2NTEgMTQyLjQzMzQyLDMwLjI3MTgzNDMgQzE0MS45NTYzMDksMzAuMTE0NDM3OSAxNDEuNDcyNDQ3LDI5Ljg4NTA4ODggMTQxLjIzNjE0MiwyOS40MzUzODQ2IEMxNDAuOTY4MzI5LDI4LjkyNDk3MDQgMTQwLjczNjUyNSwyOS4xMjczMzczIDE0MC40MzI3MDQsMjkuMzQzMTk1MyBDMTM4LjQzNjQ5LDMwLjc1MDc2OTIgMTM2LjI1NTczMiwzMS4xNTc3NTE1IDEzMy45MDYxODQsMzAuNDY3NDU1NiBDMTMxLjkyNzk3NCwyOS44OTQwODI4IDEzMC44MjUyMTcsMjguNDk1NTAzIDEzMC42OTI0MzYsMjYuNDUxNTk3NiBDMTMwLjUzMDM5OCwyNC4xMjg4NzU3IDEzMS40MzA2MDgsMjIuNTUyNjYyNyAxMzMuMzc1MDYxLDIxLjcwOTQ2NzUgQzEzNC43NDU2MywyMS4xMTgxMDY1IDEzNi4yMDM5NywyMC45OTY2ODY0IDEzNy42NzU4MTIsMjAuOTcxOTUyNyBDMTM4LjQzMTk4OCwyMC45NTg0NjE1IDEzOS4xOTA0MTUsMjAuOTQyNzIxOSAxMzkuOTQ2NTkxLDIwLjk3MTk1MjcgQzE0MC4zOTY2OTYsMjAuOTk0NDM3OSAxNDAuNDkxMjE4LDIwLjgyMzU1MDMgMTQwLjQ5NTcxOSwyMC40MDUzMjU0IEMxNDAuNDk1NzE5LDE4Ljg5MjA3MSAxNDAuMTM3ODg2LDE4LjQyODg3NTcgMTM4LjYxNjUzMSwxOC4yMTMwMTc4IEMxMzYuODAyNjA5LDE3Ljk1NDQzNzkgMTM1LjA0MDQ0OSwxOC4zNTAxNzc1IDEzMy4yODcyOSwxOC43MjU2ODA1IEMxMzIuODE0NjgsMTguODI2ODYzOSAxMzIuNjEyMTMzLDE4Ljc4NDE0MiAxMzIuNTA0MTA4LDE4LjI3NTk3NjMgQzEzMi4zMTczMTQsMTcuNDI2MDM1NSAxMzIuMDU0MDAzLDE2LjU4OTU4NTggMTMxLjgxNTQ0OCwxNS43NTA4ODc2IEMxMzEuNzE0MTc0LDE1LjQwNjg2MzkgMTMxLjczNDQyOSwxNS4yMjY5ODIyIDEzMi4xNDE3NzQsMTUuMDc2MzMxNCBDMTM1LjE4ODM4MywxMy45MjQ0Nzk0IDEzOC40OTY2MDYsMTMuNjQ2NDQzNCAxNDEuNjkyOTk4LDE0LjI3MzYwOTUgWiBNNTcuNjQyNjc0LDkuNTc2NDQ5NyBDNTguMTEwNzgzLDkuNTc2NDQ5NyA1OC4yOTMwNzU1LDkuNzI5MzQ5MTEgNTguNDIxMzU1MywxMC4xNTg4MTY2IEM1OS45NzU3MTczLDE1LjMzMzQxMjIgNjEuNTQxMzMxOSwyMC41MDUwMDk5IDYzLjExODE5OTIsMjUuNjczNjA5NSBDNjMuMjA1OTY5NiwyNS45NjU5MTcyIDYzLjMwNDk5MjcsMjYuMjUzNzI3OCA2My40NTM1MjczLDI2LjcwNzkyOSBDNjMuOTM1MTM5NCwyNS4zOTQ3OTI5IDY0LjM2NzI0LDI0LjIzNDU1NjIgNjQuNzkwMzM4NiwyMy4wNTQwODI4IEM2Ni4zMjY2OTY0LDE4Ljc5MjM4NjYgNjcuODU3ODAyOSwxNC41Mjg0NDE4IDY5LjM4MzY1ODMsMTAuMjYyMjQ4NSBDNjkuNTU5MTk5Miw5Ljc3MjA3MTAxIDY5Ljc3NTI0OTUsOS41NTYyMTMwMiA3MC4zMzExMjg5LDkuNTg3NjkyMzEgQzcxLjU4MjQyMDMsOS42MzQ5MTEyNCA3Mi44MzgyMTI4LDkuNjI4MTY1NjggNzQuMDkxNzU0Nyw5LjU4NzY5MjMxIEM3NC42OTcxNDU3LDkuNTY5NzA0MTQgNzQuNzk2MTY4OCw5LjY5Nzg2OTgyIDc0LjU2NjYxNTMsMTAuMjc1NzM5NiBDNzIuNzM2OTM5MiwxNC44ODA3MTAxIDcwLjkzODc3MDQsMTkuNDk0Njc0NiA2OS4xMzE1OTk2LDI0LjExMzEzNjEgQzY4LjM4MjE3NTEsMjYuMDI0Mzc4NyA2Ny42MjM3NDg0LDI3LjkzNTYyMTMgNjYuODk5MDc5NywyOS44NTM2MDk1IEM2Ni43MTAwMzU2LDMwLjM1NzI3ODEgNjYuNDc4MjMxNywzMC41OTMzNzI4IDY1Ljg4NjM0MzgsMzAuNTc1Mzg0NiBDNjQuMTg0OTQ3NiwzMC41MjgxNjU3IDYyLjQ3OTA1MDMsMzAuNTM0OTExMiA2MC43Nzc2NTQxLDMwLjU3NTM4NDYgQzYwLjIyNjI3NTcsMzAuNTg2NjI3MiA2MC4wMDc5NzQ4LDMwLjM5MzI1NDQgNTkuODM2OTM1LDI5Ljg4NzMzNzMgQzU3LjYxOTQxODYsMjMuMzY1MTI4MiA1NS4zODc2NDg4LDE2Ljg0NDQxODEgNTMuMTQxNjI1OCwxMC4zMjUyMDcxIEM1My4wNzQxMTAxLDEwLjEyNzMzNzMgNTIuOTcyODM2NSw5Ljk0MDcxMDA2IDUyLjg4NzMxNjYsOS43NDk1ODU4IEw1Mi44ODczMTY2LDkuNjA3OTI4OTkgQzU0LjQ2MjY4MzQsOS42MDM0MzE5NSA1Ni4wNTgzMDUsOS42MDM0MzE5NSA1Ny42NDI2NzQsOS41NzY0NDk3IFogTTEwNC4yNDIwMjYsMTQuMDgyNDg1MiBDMTA2LjUzNzU2MSwxNC41MTg2OTgyIDEwNy41OTMwNTcsMTUuNzY4ODc1NyAxMDcuODE4MTA5LDE4LjEwMDU5MTcgQzEwNy45OTU5LDE5LjkzOTg4MTcgMTA3LjkxNDg4MiwyMS43ODM2Njg2IDEwNy45MzA2MzUsMjMuNjI1MjA3MSBDMTA3Ljk0NjM4OSwyNS43MDI4NDAyIDEwNy45MTcxMzIsMjcuNzg0OTcwNCAxMDcuOTQ2Mzg5LDI5Ljg2MjYwMzYgQzEwNy45NDYzODksMzAuMzczMDE3OCAxMDcuODM4MzY0LDMwLjU3NzYzMzEgMTA3LjI4NDczNSwzMC41NTk2NDUgQzEwNi4wNTU5NDksMzAuNTIxNDIwMSAxMDQuODI0OTEyLDMwLjUyNTkxNzIgMTAzLjU5NjEyNiwzMC41NTk2NDUgQzEwMy4xMDMyNjEsMzAuNTczMTM2MSAxMDIuOTU0NzI2LDMwLjQyNjk4MjIgMTAyLjk1Njk3NywyOS45Mjc4MTA3IEMxMDIuOTc5NDgyLDI2Ljk1MDc2OTIgMTAyLjk1Njk3NywyMy45NzM3Mjc4IDEwMi45NjgyMywyMC45OTY2ODY0IEMxMDIuOTgwOTU1LDIwLjUwMDc4MzIgMTAyLjk0MTczMywyMC4wMDQ5MTAxIDEwMi44NTEyMDIsMTkuNTE3MTU5OCBDMTAyLjY3MTE2LDE4LjY2NzIxODkgMTAyLjI3OTU2OSwxOC4zMTQyMDEyIDEwMS4zOTczNjQsMTguMjQ4OTk0MSBDMTAwLjE5MTI3OSwxOC4xNjk4NTMgOTguOTgyMDI4MiwxOC4zNDUyOTQ5IDk3Ljg0ODI4NzIsMTguNzYzOTA1MyBDOTcuMzM1MTY3NywxOC45NDM3ODcgOTcuMTI1ODY5LDE5LjE3OTg4MTcgOTcuMTMyNjIwNSwxOS43Njg5OTQxIEM5Ny4xNjg2Mjg5LDIzLjEyMzc4NyA5Ny4xMzI2MjA1LDI2LjQ3ODU3OTkgOTcuMTYxODc3NCwyOS44MzU2MjEzIEM5Ny4xNjE4Nzc0LDMwLjM3NTI2NjMgOTcuMDQyNTk5NiwzMC41ODIxMzAyIDk2LjQ2NDIxNDksMzAuNTY0MTQyIEM5NS4yMzU0Mjg3LDMwLjUyMzY2ODYgOTQuMDA0MzkyLDMwLjUzNzE1OTggOTIuNzc1NjA1OSwzMC41NjQxNDIgQzkyLjM0MTI1NDcsMzAuNTY0MTQyIDkyLjE1NjcxMTcsMzAuNDgzMTk1MyA5Mi4xNTY3MTE3LDI5Ljk4MTc3NTEgQzkyLjE3NjIxNjMsMjQuOTQ5NTg1OCA5Mi4xNzYyMTYzLDE5LjkxNjY0NjkgOTIuMTU2NzExNywxNC44ODI5NTg2IEM5Mi4xNTY3MTE3LDE0LjQzMzI1NDQgOTIuMzA1MjQ2MywxNC4zMjA4Mjg0IDkyLjcyODM0NDksMTQuMzI3NTc0IEM5My45NTcxMzEsMTQuMzUwMDU5MiA5NS4xODgxNjc3LDE0LjM2ODA0NzMgOTYuNDE2OTUzOSwxNC4zMjc1NzQgQzk3LjAxMzM0MjgsMTQuMzA1MDg4OCA5Ny4yMjcxNDI2LDE0LjQ4NDk3MDQgOTcuMTU3Mzc2MywxNS4wNzQwODI4IEM5Ny4wOTUxNDk0LDE1LjMzNzY1MTUgOTcuMTIyMDU2NiwxNS42MTQzOTA1IDk3LjIzMzg5NDEsMTUuODYxMDY1MSBMOTcuMjQ3Mzk3MywxNS44NDc1NzQgQzk3Ljc4NTI3MjUsMTUuNTM3Mjc4MSA5OC4zMDI4OTMxLDE1LjIyNDczMzcgOTguODIyNzY0MiwxNC45MzQ2NzQ2IEMxMDAuNDY5MDE2LDE0LjAxMjEzNTkgMTAyLjM5MTczMywxMy43MDk3ODUgMTA0LjI0MjAyNiwxNC4wODI0ODUyIFogTTEyOC4xNTM4NDUsOS41NjA3MTAwNiBDMTI4LjU0MDkzNSw5LjU2MDcxMDA2IDEyOC42ODcyMTksOS42NTA2NTA4OSAxMjguNjg3MjE5LDEwLjA2ODg3NTcgQzEyOC42NzUyMTYsMTYuNzExMDA1OSAxMjguNjc1MjE2LDIzLjM1Mzg4NTYgMTI4LjY4NzIxOSwyOS45OTc1MTQ4IEMxMjguNjg3MjE5LDMwLjQ2NzQ1NTYgMTI4LjUwMjY3NiwzMC41Mzk0MDgzIDEyOC4xMDIwODMsMzAuNTM0OTExMiBDMTI2LjgwMTI4LDMwLjUxNjkyMzEgMTI1LjUwMDQ3NywzMC41MDc5MjkgMTI0LjE5NzQyMywzMC41MzQ5MTEyIEMxMjMuNjc3NTUyLDMwLjU0ODQwMjQgMTIzLjU3MTc3OCwzMC4zNDM3ODcgMTIzLjU3NjI3OSwyOS44NjAzNTUgQzEyMy41OTY1MzQsMjcuNDI1MjA3MSAxMjMuNTc2Mjc5LDI0Ljk5MDA1OTIgMTIzLjU5NjUzNCwyMi41NTQ5MTEyIEMxMjMuNTk2NTM0LDIyLjAzMzI1NDQgMTIzLjQ3Mjc1NSwyMS44ODAzNTUgMTIyLjkyMTM3NiwyMS44ODAzNTUgQzEyMC4zNzA3ODIsMjEuOTEwMzM1MyAxMTcuODE1Njg3LDIxLjkxMDMzNTMgMTE1LjI1NjA5MSwyMS44ODAzNTUgQzExNC43NTE5NzQsMjEuODgwMzU1IDExNC42MjE0NDMsMjIuMDM1NTAzIDExNC42MjU5NDQsMjIuNTIzNDMyIEMxMTQuNjQ4NDUsMjQuOTM2MDk0NyAxMTQuNjEwMTkxLDI3LjM0NjUwODkgMTE0LjY1Mjk1MSwyOS43NTY5MjMxIEMxMTQuNjY0MjAzLDMwLjQwODk5NDEgMTE0LjQ1NzE1NSwzMC41NTA2NTA5IDExMy44NTE3NjQsMzAuNTI1OTE3MiBDMTEyLjY3MDIzOSwzMC40Nzg2OTgyIDExMS40ODQyMTMsMzAuNDcxOTUyNyAxMTAuMzAyNjg4LDMwLjUyNTkxNzIgQzEwOS42Mjc1MywzMC41NTk2NDUgMTA5LjUzMDc1OCwzMC4zMDEwNjUxIDEwOS41Mzc1MDksMjkuNzA5NzA0MSBDMTA5LjU2MjI2NSwyNi40Njk1ODU4IDEwOS41NDg3NjIsMjMuMjMxNzE2IDEwOS41NDg3NjIsMTkuOTkzODQ2MiBMMTA5LjU3MzUxOCwyMC4wMjk4MjI1IEMxMDkuNTczNTE4LDE2Ljc2NzIxODkgMTA5LjU4NzAyMSwxMy41MDkxMTI0IDEwOS41NjIyNjUsMTAuMjQyMDExOCBDMTA5LjU2MjI2NSw5LjcwNDYxNTM4IDEwOS43MTMwNSw5LjU2NzQ1NTYyIDExMC4yMzc0MjIsOS41Njc0NTU2MiBDMTExLjUxMzQ3LDkuNjA1NjgwNDcgMTEyLjc5MTc2Nyw5LjU5ODkzNDkxIDExNC4wNjMzMTMsOS41Njc0NTU2MiBDMTE0LjUzMTQyMiw5LjU2NzQ1NTYyIDExNC42NjQyMDMsOS43MDIzNjY4NiAxMTQuNjU5NzAyLDEwLjE2NTU2MjEgQzExNC42Mzk0NDgsMTIuNTUzNDkxMSAxMTQuNjc1NDU2LDE0Ljk0MTQyMDEgMTE0LjYzMjY5NiwxNy4zMjkzNDkxIEMxMTQuNjIxNDQzLDE3Ljk3OTE3MTYgMTE0LjgyNjI0MSwxOC4xMDczMzczIDExNS40MzE2MzIsMTguMDk4MzQzMiBDMTE3LjkwNzIwOSwxOC4wNjQ2MTU0IDEyMC40MDA3ODksMTguMDY5MTEyNCAxMjIuODg1MzY4LDE4LjA5ODM0MzIgQzEyMy40MzIyNDUsMTguMDk4MzQzMiAxMjMuNjEyMjg3LDE3Ljk3MjQyNiAxMjMuNjAzMjg1LDE3LjM5OTA1MzMgQzEyMy41Njk1MjcsMTUuMDExMTI0MyAxMjMuNjAzMjg1LDEyLjYyMzE5NTMgMTIzLjU3NjI3OSwxMC4yMzUyNjYzIEMxMjMuNTc2Mjc5LDkuNjk3ODY5ODIgMTIzLjcyMjU2Myw5LjU2MDcxMDA2IDEyNC4yNTE0MzYsOS41NjA3MTAwNiBDMTI1LjU1MjIzOSw5LjU5ODkzNDkxIDEyNi44NTMwNDIsOS41ODU0NDM3OSAxMjguMTUzODQ1LDkuNTYwNzEwMDYgWiBNODQuMTgzMTA0OCwyMy45MDg1MjA3IEM4Mi45OTAzMjcsMjMuOTgwNDczNCA4MS43NzA1NDMsMjMuNzY5MTEyNCA4MC42MDQ3NzE1LDI0LjE3ODM0MzIgQzc5LjgwMzU4NDksMjQuNDU5NDA4MyA3OS40NDEyNTA1LDI1LjAyNjAzNTUgNzkuNTMxMjcxNSwyNS43OTA1MzI1IEM3OS42MDMyODgzLDI2LjQxNTYyMTMgODAuMTM2NjYyNSwyNi44NTQwODI4IDgwLjk0NDYwMDYsMjYuOTM1MDI5NiBDODEuNzIyODkwMywyNi45ODY0NjE1IDgyLjUwNDM2MjMsMjYuOTEwNTEwNSA4My4yNTgxMzk0LDI2LjcxMDE3NzUgQzg0LjQ5MTQyNjYsMjYuNDI0NjE1NCA4NC40OTE0MjY2LDI2LjQyNjg2MzkgODQuNDg5MTc2MSwyNS4xOTQ2NzQ2IEw4NC40ODkxNzYxLDI0LjI4NDAyMzcgQzg0LjQ4OTE3NjEsMjQuMDcyNjYyNyA4NC40Mzc0MTQsMjMuODkyNzgxMSA4NC4xODMxMDQ4LDIzLjkwODUyMDcgWiBNMTM2LjcxNDgzOSwyNC4xMjQzNzg3IEwxMzYuNzEyNTg4LDI0LjEyNDM3ODcgQzEzNS44ODIxNDUsMjQuMzk4Njk4MiAxMzUuNDM0MjksMjUuMDEwMjk1OSAxMzUuNTE5ODEsMjUuNzQ1NTYyMSBDMTM1LjU5ODU3OSwyNi40MjAxMTgzIDEzNi4xNzkyMTQsMjYuODY5ODIyNSAxMzcuMDU2OTE4LDI2LjkzNTAyOTYgQzEzNy45MzQ2MjMsMjcuMDAwMjM2NyAxMzguNzg3NTcxLDI2Ljc5NTYyMTMgMTM5LjY0NzI3MSwyNi42MzgyMjQ5IEMxNDAuMjc1MTY4LDI2LjUyMzU1MDMgMTQwLjUzNjIyOSwyNi4yOTQyMDEyIDE0MC41MDY5NzIsMjUuNTg4MTY1NyBDMTQwLjQzOTQ1NiwyMy44OTUwMjk2IDE0MC40ODY3MTcsMjMuODk1MDI5NiAxMzguNTE1MjU4LDIzLjkyNDI2MDQgQzEzNy45MDgyNTgsMjMuODkzOTk3OCAxMzcuMzAwMzQsMjMuOTYxNTY4NCAxMzYuNzE0ODM5LDI0LjEyNDM3ODcgWiIgaWQ9IlZhbkhhY2siPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMy42ODYzNTg0OSw5LjQyNTc5ODgyIEw5LjkyNDgxMTMyLDIxLjYzNTI2NjMgQzEwLjE0OTg2MzcsMjAuODY0MDIzNyAxMC4zNDc5MDk5LDIwLjI1MjQyNiAxMC41Mjc5NTE4LDE5LjYzNjMzMTQgQzEyLjM5ODg4NzUsMTMuMjkxMDA1OSAxNC4yNjQ1NzIsNi45NDc5Mjg5OSAxNi4xMjUwMDUyLDAuNjA3MTAwNTkyIEMxNi4yNjY3ODgzLDAuMTE5MTcxNTk4IDE2LjQ2OTMzNTQsMCAxNi45NTU0NDg2LDAgQzE5LjY1NjA3NzYsMC4wMjQ3MzM3Mjc4IDIyLjM3MDIwOTYsMC4wMTEyNDI2MDM2IDI1LjA3NzU5MDEsMC4wMTEyNDI2MDM2IEwyNS43MTY3MzksMC4wMTEyNDI2MDM2IEMyNS4yMzI4NzYzLDEuNjU5NDA4MjggMjQuNzY5MjY4MywzLjI0Njg2MzkxIDI0LjMwMTE1OTMsNC44MzIwNzEwMSBDMjEuMTIzNDE5MywxNS41OTk0ODcyIDE3Ljk1MDE4MDMsMjYuMzY3NjUyOSAxNC43ODE0NDIzLDM3LjEzNjU2OCBDMTQuNjEyNjUzLDM3LjcxNDQzNzkgMTQuMzg3NjAwNiwzNy44ODk4MjI1IDEzLjc4ODk2MTIsMzcuODc4NTc5OSBDMTEuNTA5MTgwMywzNy44MzgxMDY1IDkuMjI3MTQ4ODUsMzcuODUxNTk3NiA2Ljk0NTExNzQsMzcuODc4NTc5OSBDNi42MDY1NTQ0NywzNy45MjIzMTIgNi4yODU1Njg1NSwzNy43MTY0MTg3IDYuMTg0NDQwMjUsMzcuMzkwNjUwOSBDNC4yNDc0ODkxNywzMy4wNiAyLjI5NzAzNDk0LDI4LjczNDU5NTcgMC4zMzMwNzc1NjgsMjQuNDE0NDM3OSBDMC4yMTY0OTMzODcsMjQuMTkwMjI3MSAwLjE4NTMwNjI1LDIzLjkzMTM2NDYgMC4yNDUzMDcxMjgsMjMuNjg1OTE3MiBDMS4zOTUzMjQ5NSwxOC45ODg3NTc0IDIuNTE4MzM2NDgsMTQuMjk2MDk0NyAzLjY4NjM1ODQ5LDkuNDI1Nzk4ODIiIGlkPSJwYXRoMTgiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDYuNTk5MzUyMiwwLjA3NDIwMTE4MzQgQzQ2LjE3MTc1MjYsMS41Mzc5ODgxNyA0NS43NTA5MDQ2LDIuOTk3Mjc4MTEgNDUuMzE4ODA0LDQuNDY1NTYyMTMgQzQyLjA5MTU1MjQsMTUuMzkxODczOCAzOC44NjU4MDEyLDI2LjMxODkzNDkgMzUuNjQxNTUwMywzNy4yNDY3NDU2IEMzNS41MDQyNjgzLDM3LjcxNjY4NjQgMzUuMzE5NzI1NCwzNy44NzQwODI4IDM0LjgyMDEwOSwzNy44Njk1ODU4IEMzMi4wMjcyMDg2LDM3Ljg0MjYwMzYgMjkuMjM0MzA4MiwzNy44NTYwOTQ3IDI2LjQ0MTQwNzgsMzcuODU2MDk0NyBDMjYuMzM3ODgzNiwzNy44NTYwOTQ3IDI2LjIzMjEwOSwzNy44NDAzNTUgMjYuMDU2NTY4MSwzNy44MjkxMTI0IEMyNi40NjYxNjM1LDM2LjQzNTAyOTYgMjYuODY2NzU2OCwzNS4wNzQ2NzQ2IDI3LjI2NzM1MDEsMzMuNzE0MzE5NSBDMjguMTc4ODEyNCwzMC42MTU4NTggMjkuMDgxMjcyNSwyNy41MTI4OTk0IDMwLjAxNTI0LDI0LjQyMTE4MzQgQzMwLjE3NTAyNzMsMjMuODk1MDI5NiAzMC4wODI3NTU4LDIzLjc2MjM2NjkgMjkuNTM1ODc4NCwyMy43NjY4NjM5IEMyNy4xMjc4MTc2LDIzLjc4OTM0OTEgMjQuNzE3NTA2MywyMy43NjY4NjM5IDIyLjMwOTQ0NTUsMjMuNzY2ODYzOSBDMjEuNDY1NDk5LDIzLjc2Njg2MzkgMjEuNDU4NzQ3NCwyMy43NjY4NjM5IDIxLjY4MTU0OTMsMjIuOTI1OTE3MiBDMjIuMzU2NzA2NSwyMC40MDA4Mjg0IDIzLjA0MzExNjQsMTcuODc3OTg4MiAyMy43MDcwMjEsMTUuMzQ4NDAyNCBDMjMuODI0MDQ4MiwxNC44OTg2OTgyIDI0LjAxNzU5MzMsMTQuNzMyMzA3NyAyNC40ODc5NTI4LDE0LjczOTA1MzMgQzI3LjA0NDU0ODIsMTQuNzc5NTI2NiAyOS42MDExNDM2LDE0Ljc3Mjc4MTEgMzIuMTU3NzM5LDE0LjgyNjc0NTYgQzMyLjcxODExOTUsMTQuODM3OTg4MiAzMi45MjA2NjY3LDE0LjYzNTYyMTMgMzMuMDU3OTQ4NiwxNC4xMjc0NTU2IEMzNC4zNzY3NTU4LDkuNTc0MjAxMTggMzUuNzIyNTY5Miw1LjAyOTk0MDgzIDM3LjA1OTM4MDUsMC40ODM0MzE5NTMgQzM3LjE0MDM5OTQsMC4yMDkxMTI0MjYgMzcuMjEyNDE2MSwtMC4wMDIyNDg1MjA3MSAzNy41OTcyNTU4LDcuNjg4NzkyNWUtMTUgQzQwLjU0NTQ0MjMsMC4wMjI0ODUyMDcxIDQzLjQ4Njg3NzQsMC4wMTc5ODgxNjU3IDQ2LjQyODMxMjQsMC4wMjI0ODUyMDcxIEM0Ni40ODcwMDkxLDAuMDMzNTc3NzEwOCA0Ni41NDQzNDg5LDAuMDUwOTE1MTEwNCA0Ni41OTkzNTIyLDAuMDc0MjAxMTgzNCIgaWQ9InBhdGgyMCI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+";

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
    if (props.positionId === null || props.positionId === undefined || props.positionId === '') {
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
    maxWidth: "780px",
    width: "100%",
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
      padding: '0'
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