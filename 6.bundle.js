(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./example/src/examples/selectors.js":
/*!*******************************************!*\
  !*** ./example/src/examples/selectors.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/styles/prism/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src */ \"./src/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nconst InputsForm = () => {\n  console.log('InputsForm');\n\n  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n        _useState2 = _slicedToArray(_useState, 2),\n        data = _useState2[0],\n        setData = _useState2[1];\n\n  const codeString = `\n  import React, { Component, createRef } from 'react'\n  import {\n    Form,\n    Meter,\n    Progress,\n  } from 'react-form-elements'\n\n  export default () =>\n    (<Form>\n      <DropDown name=\"dropdown\" label=\"Drop Down\" initialValue=\"2\">\n        <OptionGroup label=\"First Group\">\n          <Option initialValue=\"1\">First</Option>\n          <Option initialValue=\"2\">Second</Option>\n          <Option initialValue=\"3\" label=\"Third\" />\n        </OptionGroup>\n        <OptionGroup label=\"Second Group\">\n          <Option initialValue=\"11\">Second First</Option>\n          <Option initialValue=\"12\">Second Second</Option>\n          <Option initialValue=\"13\" label=\"Second Third\" />\n        </OptionGroup>\n      </DropDown>\n      <RadioGroup\n        name=\"radioGroup\"\n        label=\"The Radio\"\n        initialChecked=\"first\"\n        options={[\n          { value: 'first', label: 'First' },\n          { value: 'second', label: 'Second' },\n        ]}\n      />\n      <CheckBox\n        label=\"A Checkbox\"\n        isChecked={true}\n        name=\"checkbox\"\n        value=\"checkbox value\"\n      />\n      <ColorInput\n        label=\"Color\"\n        name=\"color\"\n        initialValue=\"#0668fa\"\n        required\n      />\n      <Range\n        label=\"My Range\"\n        name=\"range\"\n        min={0}\n        max={50}\n        step={2}\n        initialValue={24}\n      />\n    </Form>)\n  `;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"mar-b-md mar-t-md\"\n  }, \"Submitted Data\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"DropDown: \", data.formValues.dropdown), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"RadioGroup: \", data.formValues.radioGroup), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"CheckBox: \", data.formValues.checkbox), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Color: \", data.formValues.color), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Range: \", data.formValues.range))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"mar-b-md mar-t-md\"\n  }, \"Text Inputs\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n    name: \"inputsForm\",\n    onSubmit: values => {\n      console.log('DropDown', values.dropdown);\n      console.log('RadioGroup', values.radioGroup);\n      console.log('CheckBox', values.checkbox);\n      console.log('Color', values.color);\n      console.log('Range', values.range);\n      setData({\n        formValues: values\n      });\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"DropDown\"], {\n    name: \"dropdown\",\n    label: \"Drop Down\",\n    initialValue: \"2\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"OptionGroup\"], {\n    label: \"First Group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Option\"], {\n    initialValue: \"1\"\n  }, \"First\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Option\"], {\n    initialValue: \"2\"\n  }, \"Second\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Option\"], {\n    initialValue: \"3\",\n    label: \"Third\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"OptionGroup\"], {\n    label: \"Second Group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Option\"], {\n    initialValue: \"11\"\n  }, \"Second First\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Option\"], {\n    initialValue: \"12\"\n  }, \"Second Second\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Option\"], {\n    initialValue: \"13\",\n    label: \"Second Third\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"OptionGroup\"], {\n    label: \"Third Group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Option\"], {\n    initialValue: \"21\"\n  }, \"Third First\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Option\"], {\n    initialValue: \"22\"\n  }, \"Third Second\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Option\"], {\n    initialValue: \"23\",\n    label: \"Third Third\"\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"RadioGroup\"], {\n    name: \"radioGroup\",\n    label: \"The Radio\",\n    initialChecked: \"first\",\n    options: [{\n      value: 'first',\n      label: 'First'\n    }, {\n      value: 'second',\n      label: 'Second'\n    }]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"CheckBox\"], {\n    label: \"A Checkbox\",\n    isChecked: true,\n    name: \"checkbox\",\n    value: \"checkbox value\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"ColorInput\"], {\n    label: \"Color\",\n    name: \"color\",\n    initialValue: \"#0668fa\",\n    required: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Range\"], {\n    label: \"My Range\",\n    name: \"range\",\n    min: 0,\n    max: 50,\n    step: 2,\n    initialValue: 24\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], null, \"Send\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mar-b-md mar-t-md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"mar-b-md\"\n  }, \"Code from Example\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__[\"Prism\"], {\n    language: \"jsx\",\n    style: react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__[\"tomorrow\"]\n  }, codeString))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputsForm);\n\n//# sourceURL=webpack:///./example/src/examples/selectors.js?");

/***/ })

}]);