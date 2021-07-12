"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function Button() {
  const [num, setNum] = (0, _react.useState)(0);

  function handleClick() {
    setNum(num + 1);
  }

  return /*#__PURE__*/_react.React.createElement(_react.React.Fragment, null, /*#__PURE__*/_react.React.createElement("h1", null, num), /*#__PURE__*/_react.React.createElement("button", {
    onClick: handleClick
  }, "Click me!"));
}