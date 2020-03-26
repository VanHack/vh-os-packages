"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* babel-plugin-inline-import '../../../assets/images/img_bubble.svg' */
var imgBubble = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjkiIGhlaWdodD0iMzMwIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMzI5IDMzMCI+CiAgICA8cGF0aCBmaWxsPSIjMjVDMUNCIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNDMuODIzIDMzLjMyNWMtMjguODA5LTE5LjQ5My01OC41NzEtMzkuNjMtOTEuNzUtMzEuNDU3QzExOS45NTIgOS43ODIgOTUuMzkzIDMzLjIwNiA3OC41IDYxLjc3Yy0zMC45NzggOC4xOC01OC43ODUgMzEuMTctNzEuMTE5IDYwLjUxNS0xMC43MjMgMjUuNTEyLjQ0NiA1MS44OTggMTEuNTU0IDc4LjEzNiAzLjE5NyA3LjU1MiA2LjM4OSAxNS4wOTIgOS4wNTIgMjIuNTk2IDEuMjE4IDMuNDMyIDIuNDA0IDYuODgxIDMuNTg3IDEwLjMyNyA4LjgwMyAyNS42MTkgMTcuNTMgNTEuMDIxIDM5LjEyNyA2Ny4zNDEgMjcuNDU3IDIwLjc1IDYxLjk0NiAzNC4wNDcgOTUuNjE3IDI2Ljg3MSAzNC44MDEtNy40MTcgNjIuMjE3LTMzLjUzMSA4MC4wODUtNjQuMzE4IDUuMjExLTguOTggOS44OTgtMTguNTY4IDEzLjU3LTI4LjQ1OSA5LjgzNC00LjE5MiAxOS4wMDYtOS44NzIgMjcuMjExLTE3LjU3OCAyNy42Ni0yNS45NzUgNDcuMTMyLTYyLjk1OSA0MC41Mi0xMDAuMzIzLTUuODA4LTMyLjgyNC0zNS4zNzYtNTEuOTE3LTYzLjcxMS03MC4yMTQtMi42NDktMS43MS01LjI4Ni0zLjQxMy03Ljg5Mi01LjEyLTQuMDc4LTIuNjctOC4xNjgtNS40MzgtMTIuMjc4LTguMjE4eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8ZyBmaWxsPSIjNTBFOEYyIiBvcGFjaXR5PSIuMzYiPgogICAgICAgIDxjaXJjbGUgY3g9IjIuOTY2IiBjeT0iMTg3Ljc2NCIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyLjk2NiIgY3k9IjE5NS44NTMiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMi45NjYiIGN5PSIyMDQuNDgyIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjIuOTY2IiBjeT0iMjEyLjU3MSIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyLjk2NiIgY3k9IjIyMS4yIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjMzLjE2NiIgY3k9IjE4Ny43NjQiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMzMuMTY2IiBjeT0iMTk1Ljg1MyIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzMy4xNjYiIGN5PSIyMDQuNDgyIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjMzLjE2NiIgY3k9IjIxMi41NzEiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMzMuMTY2IiBjeT0iMjIxLjIiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTAuNTE2IiBjeT0iMTg3Ljc2NCIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMC41MTYiIGN5PSIxOTUuODUzIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjEwLjUxNiIgY3k9IjIwNC40ODIiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTAuNTE2IiBjeT0iMjEyLjU3MSIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMC41MTYiIGN5PSIyMjEuMiIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI0MC43MTYiIGN5PSIxODcuNzY0IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQwLjcxNiIgY3k9IjE5NS44NTMiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNDAuNzE2IiBjeT0iMjA0LjQ4MiIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI0MC43MTYiIGN5PSIyMTIuNTcxIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQwLjcxNiIgY3k9IjIyMS4yIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjE4LjA2NiIgY3k9IjE4Ny43NjQiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTguMDY2IiBjeT0iMTk1Ljg1MyIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxOC4wNjYiIGN5PSIyMDQuNDgyIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjE4LjA2NiIgY3k9IjIxMi41NzEiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTguMDY2IiBjeT0iMjIxLjIiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMjUuNjE2IiBjeT0iMTg3Ljc2NCIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyNS42MTYiIGN5PSIxOTUuODUzIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI1LjYxNiIgY3k9IjIwNC40ODIiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMjUuNjE2IiBjeT0iMjEyLjU3MSIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyNS42MTYiIGN5PSIyMjEuMiIgcj0iMi45NjYiLz4KICAgIDwvZz4KICAgIDxnIGZpbGw9IiM1MEU4RjIiIG9wYWNpdHk9Ii4zNiI+CiAgICAgICAgPGNpcmNsZSBjeD0iNDguMzU5IiBjeT0iMTg3Ljc2NCIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI0OC4zNTkiIGN5PSIxOTUuODUzIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQ4LjM1OSIgY3k9IjIwNC40ODIiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNDguMzU5IiBjeT0iMjEyLjU3MSIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI0OC4zNTkiIGN5PSIyMjEuMiIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI3OC41NTkiIGN5PSIxODcuNzY0IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9Ijc4LjU1OSIgY3k9IjE5NS44NTMiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNzguNTU5IiBjeT0iMjA0LjQ4MiIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI3OC41NTkiIGN5PSIyMTIuNTcxIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9Ijc4LjU1OSIgY3k9IjIyMS4yIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjU1LjkwOCIgY3k9IjE4Ny43NjQiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNTUuOTA4IiBjeT0iMTk1Ljg1MyIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI1NS45MDgiIGN5PSIyMDQuNDgyIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjU1LjkwOCIgY3k9IjIxMi41NzEiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNTUuOTA4IiBjeT0iMjIxLjIiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iODYuMTA5IiBjeT0iMTg3Ljc2NCIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI4Ni4xMDkiIGN5PSIxOTUuODUzIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9Ijg2LjEwOSIgY3k9IjIwNC40ODIiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iODYuMTA5IiBjeT0iMjEyLjU3MSIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI4Ni4xMDkiIGN5PSIyMjEuMiIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI2My40NTkiIGN5PSIxODcuNzY0IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYzLjQ1OSIgY3k9IjE5NS44NTMiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNjMuNDU5IiBjeT0iMjA0LjQ4MiIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI2My40NTkiIGN5PSIyMTIuNTcxIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYzLjQ1OSIgY3k9IjIyMS4yIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjcxLjAwOSIgY3k9IjE4Ny43NjQiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNzEuMDA5IiBjeT0iMTk1Ljg1MyIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI3MS4wMDkiIGN5PSIyMDQuNDgyIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjcxLjAwOSIgY3k9IjIxMi41NzEiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNzEuMDA5IiBjeT0iMjIxLjIiIHI9IjIuOTY2Ii8+CiAgICA8L2c+CiAgICA8ZyBmaWxsPSIjNTBFOEYyIiBvcGFjaXR5PSIuMzYiPgogICAgICAgIDxjaXJjbGUgY3g9IjIuOTY2IiBjeT0iMjI5Ljc3OCIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyLjk2NiIgY3k9IjIzNy44NjciIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMi45NjYiIGN5PSIyNDYuNDk2IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjIuOTY2IiBjeT0iMjU0LjU4NSIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyLjk2NiIgY3k9IjI2My4yMTMiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMzMuMTY2IiBjeT0iMjI5Ljc3OCIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzMy4xNjYiIGN5PSIyMzcuODY3IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjMzLjE2NiIgY3k9IjI0Ni40OTYiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMzMuMTY2IiBjeT0iMjU0LjU4NSIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzMy4xNjYiIGN5PSIyNjMuMjEzIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjEwLjUxNiIgY3k9IjIyOS43NzgiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTAuNTE2IiBjeT0iMjM3Ljg2NyIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMC41MTYiIGN5PSIyNDYuNDk2IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjEwLjUxNiIgY3k9IjI1NC41ODUiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTAuNTE2IiBjeT0iMjYzLjIxMyIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI0MC43MTYiIGN5PSIyMjkuNzc4IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQwLjcxNiIgY3k9IjIzNy44NjciIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNDAuNzE2IiBjeT0iMjQ2LjQ5NiIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI0MC43MTYiIGN5PSIyNTQuNTg1IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQwLjcxNiIgY3k9IjI2My4yMTMiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTguMDY2IiBjeT0iMjI5Ljc3OCIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxOC4wNjYiIGN5PSIyMzcuODY3IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjE4LjA2NiIgY3k9IjI0Ni40OTYiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTguMDY2IiBjeT0iMjU0LjU4NSIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxOC4wNjYiIGN5PSIyNjMuMjEzIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI1LjYxNiIgY3k9IjIyOS43NzgiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMjUuNjE2IiBjeT0iMjM3Ljg2NyIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyNS42MTYiIGN5PSIyNDYuNDk2IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI1LjYxNiIgY3k9IjI1NC41ODUiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMjUuNjE2IiBjeT0iMjYzLjIxMyIgcj0iMi45NjYiLz4KICAgIDwvZz4KICAgIDxnIGZpbGw9IiM1MEU4RjIiIG9wYWNpdHk9Ii4zNiI+CiAgICAgICAgPGNpcmNsZSBjeD0iNDguMzU5IiBjeT0iMjI5Ljc3OCIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI0OC4zNTkiIGN5PSIyMzcuODY3IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQ4LjM1OSIgY3k9IjI0Ni40OTYiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNDguMzU5IiBjeT0iMjU0LjU4NSIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI0OC4zNTkiIGN5PSIyNjMuMjEzIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9Ijc4LjU1OSIgY3k9IjIyOS43NzgiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNzguNTU5IiBjeT0iMjM3Ljg2NyIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI3OC41NTkiIGN5PSIyNDYuNDk2IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9Ijc4LjU1OSIgY3k9IjI1NC41ODUiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNzguNTU5IiBjeT0iMjYzLjIxMyIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI1NS45MDgiIGN5PSIyMjkuNzc4IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjU1LjkwOCIgY3k9IjIzNy44NjciIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNTUuOTA4IiBjeT0iMjQ2LjQ5NiIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI1NS45MDgiIGN5PSIyNTQuNTg1IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjU1LjkwOCIgY3k9IjI2My4yMTMiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iODYuMTA5IiBjeT0iMjI5Ljc3OCIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI4Ni4xMDkiIGN5PSIyMzcuODY3IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9Ijg2LjEwOSIgY3k9IjI0Ni40OTYiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iODYuMTA5IiBjeT0iMjU0LjU4NSIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI4Ni4xMDkiIGN5PSIyNjMuMjEzIiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYzLjQ1OSIgY3k9IjIyOS43NzgiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNjMuNDU5IiBjeT0iMjM3Ljg2NyIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI2My40NTkiIGN5PSIyNDYuNDk2IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYzLjQ1OSIgY3k9IjI1NC41ODUiIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNjMuNDU5IiBjeT0iMjYzLjIxMyIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI3MS4wMDkiIGN5PSIyMjkuNzc4IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjcxLjAwOSIgY3k9IjIzNy44NjciIHI9IjIuOTY2Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNzEuMDA5IiBjeT0iMjQ2LjQ5NiIgcj0iMi45NjYiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI3MS4wMDkiIGN5PSIyNTQuNTg1IiByPSIyLjk2NiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjcxLjAwOSIgY3k9IjI2My4yMTMiIHI9IjIuOTY2Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=";
var items = {
  cardLeft: {
    title: "250+",
    description: "VanHack Premium Members have been hired internationally"
  },
  cardRight: {
    title: "80%",
    description: "of Premium Members recommend Premium to their friends"
  }
};
(0, _react2.storiesOf)("Components|Img Cards Overlay", module).add("Default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#fff",
      width: '50%',
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    cardLeftTitle: items.cardLeft.title,
    cardLeftDescription: items.cardLeft.description,
    cardRightTitle: items.cardRight.title,
    cardRightDescription: items.cardRight.description,
    image: imgBubble
  }));
});