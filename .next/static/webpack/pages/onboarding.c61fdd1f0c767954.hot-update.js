"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/onboarding",{

/***/ "./src/components/common/Avatar.jsx":
/*!******************************************!*\
  !*** ./src/components/common/Avatar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n/* harmony import */ var _PhotoPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoPicker */ \"./src/components/common/PhotoPicker.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [contextMenuCoordinates, setContextMenuCoordinates] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [graphPhoto, setGraphPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        console.log(e.pageX, e.pageY);\n        setIsContextMenuVisible(true);\n        setContextMenuCoordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n    };\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{\n                setGraphPhoto(true);\n            }\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default_avatar.png\");\n            }\n        }\n    ];\n    const photoPickerHandleChange = async (e)=>{\n        console.log(\"photoPickerHandleChange\", e.target);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (graphPhoto) {\n            const data = document.getElementById(\"photo-picker\");\n            data.click();\n        }\n        document.body.onfocus = (e)=>{\n            setGraphPhoto(false);\n        };\n    }, [\n        graphPhoto\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-10 h-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative z-0 cursor-pointer\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(hover ? \"visible\" : \"hidden\", \" z-10 absolute top-0 bottom-0 bg-photopicker-overlay-background h-60 w-60 flex items-center justify-center flex-col text-center gap-2\"),\n                                id: \"context-opener\",\n                                onClick: (e)=>showContextMenu(e),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaCamera, {\n                                        className: \"text-2xl text-white\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-white\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e),\n                                        children: [\n                                            \"Change \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 24\n                                            }, this),\n                                            \" Your \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 36\n                                            }, this),\n                                            \" Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center h-60 w-60\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: image,\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                coordinates: contextMenuCoordinates,\n                contextMenu: isContextMenuVisible,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, this),\n            graphPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: photoPickerHandleChange\n            }, void 0, false, {\n                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 111,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"RZbDubQYe8uBCi0RfCZnKscaqOM=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVOzBDQUNiLDRFQUFDeEMsbURBQUtBO29DQUFDeUMsS0FBS2hDO29DQUFPaUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLOUI3QixzQ0FDQyw4REFBQ1Isb0RBQVdBO2dCQUNWNEMsU0FBU3JCO2dCQUNUc0IsYUFBYW5DO2dCQUNib0MsYUFBYXRDO2dCQUNidUMsZ0JBQWdCdEM7Ozs7OztZQUluQkssNEJBQWMsOERBQUNiLG9EQUFXQTtnQkFBQytDLFVBQVV0Qjs7Ozs7Ozs7QUFHNUM7R0EzR1N4QjtLQUFBQTtBQTZHVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeD8wMTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGYUNhbWVyYSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSBcIi4vQ29udGV4dE1lbnVcIjtcclxuaW1wb3J0IFBob3RvUGlja2VyIGZyb20gXCIuL1Bob3RvUGlja2VyXCI7XHJcblxyXG5mdW5jdGlvbiBBdmF0YXIoeyB0eXBlLCBpbWFnZSwgc2V0SW1hZ2UgfSkge1xyXG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0NvbnRleHRNZW51VmlzaWJsZSwgc2V0SXNDb250ZXh0TWVudVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb250ZXh0TWVudUNvb3JkaW5hdGVzLCBzZXRDb250ZXh0TWVudUNvb3JkaW5hdGVzXSA9IHVzZVN0YXRlKHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbZ3JhcGhQaG90bywgc2V0R3JhcGhQaG90b10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNob3dDb250ZXh0TWVudSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhlLnBhZ2VYLCBlLnBhZ2VZKTtcclxuICAgIHNldElzQ29udGV4dE1lbnVWaXNpYmxlKHRydWUpO1xyXG4gICAgc2V0Q29udGV4dE1lbnVDb29yZGluYXRlcyh7IHg6IGUucGFnZVgsIHk6IGUucGFnZVkgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udGV4dE1lbnVPcHRpb25zID0gW1xyXG4gICAgeyBuYW1lOiBcIlRha2UgUGhvdG9cIiwgY2FsbGJhY2s6ICgpID0+IHt9IH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hvb3NlIEZyb20gTGlicmFyeVwiLCBjYWxsYmFjazogKCkgPT4ge30gfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJVcGxvYWQgUGhvdG9cIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICBzZXRHcmFwaFBob3RvKHRydWUpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZW1vdmUgUGhvdG9cIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICBzZXRJbWFnZShcIi9kZWZhdWx0X2F2YXRhci5wbmdcIik7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHBob3RvUGlja2VySGFuZGxlQ2hhbmdlID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJwaG90b1BpY2tlckhhbmRsZUNoYW5nZVwiLGUudGFyZ2V0KVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZ3JhcGhQaG90bykge1xyXG4gICAgICBjb25zdCBkYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG90by1waWNrZXJcIik7XHJcbiAgICAgIGRhdGEuY2xpY2soKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmJvZHkub25mb2N1cyA9IChlKSA9PiB7XHJcbiAgICAgIHNldEdyYXBoUGhvdG8oZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbZ3JhcGhQaG90b10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIHt0eXBlID09PSBcInNtXCIgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTEwIGgtMTBcIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGZpbGwgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHt0eXBlID09PSBcImxnXCIgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTE0IHctMTRcIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGZpbGwgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHt0eXBlID09PSBcInhsXCIgJiYgKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyKHRydWUpfVxyXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyKGZhbHNlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICBob3ZlciA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgIH0gei0xMCBhYnNvbHV0ZSB0b3AtMCBib3R0b20tMCBiZy1waG90b3BpY2tlci1vdmVybGF5LWJhY2tncm91bmQgaC02MCB3LTYwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtY29sIHRleHQtY2VudGVyIGdhcC0yYH1cclxuICAgICAgICAgICAgICBpZD1cImNvbnRleHQtb3BlbmVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2hvd0NvbnRleHRNZW51KGUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZhQ2FtZXJhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiY29udGV4dC1vcGVuZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNob3dDb250ZXh0TWVudShlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiY29udGV4dC1vcGVuZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNob3dDb250ZXh0TWVudShlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDaGFuZ2UgPGJyIC8+IFlvdXIgPGJyIC8+IFBob3RvXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTYwIHctNjBcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gZmlsbCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNDb250ZXh0TWVudVZpc2libGUgJiYgKFxyXG4gICAgICAgIDxDb250ZXh0TWVudVxyXG4gICAgICAgICAgb3B0aW9ucz17Y29udGV4dE1lbnVPcHRpb25zfVxyXG4gICAgICAgICAgY29vcmRpbmF0ZXM9e2NvbnRleHRNZW51Q29vcmRpbmF0ZXN9XHJcbiAgICAgICAgICBjb250ZXh0TWVudT17aXNDb250ZXh0TWVudVZpc2libGV9XHJcbiAgICAgICAgICBzZXRDb250ZXh0TWVudT17c2V0SXNDb250ZXh0TWVudVZpc2libGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtncmFwaFBob3RvICYmIDxQaG90b1BpY2tlciBvbkNoYW5nZT17cGhvdG9QaWNrZXJIYW5kbGVDaGFuZ2V9IC8+fVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmFDYW1lcmEiLCJDb250ZXh0TWVudSIsIlBob3RvUGlja2VyIiwiQXZhdGFyIiwidHlwZSIsImltYWdlIiwic2V0SW1hZ2UiLCJob3ZlciIsInNldEhvdmVyIiwiaXNDb250ZXh0TWVudVZpc2libGUiLCJzZXRJc0NvbnRleHRNZW51VmlzaWJsZSIsImNvbnRleHRNZW51Q29vcmRpbmF0ZXMiLCJzZXRDb250ZXh0TWVudUNvb3JkaW5hdGVzIiwieCIsInkiLCJncmFwaFBob3RvIiwic2V0R3JhcGhQaG90byIsInNob3dDb250ZXh0TWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlWCIsInBhZ2VZIiwiY29udGV4dE1lbnVPcHRpb25zIiwibmFtZSIsImNhbGxiYWNrIiwicGhvdG9QaWNrZXJIYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJkYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWNrIiwiYm9keSIsIm9uZm9jdXMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJmaWxsIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaWQiLCJvbkNsaWNrIiwic3BhbiIsImJyIiwib3B0aW9ucyIsImNvb3JkaW5hdGVzIiwiY29udGV4dE1lbnUiLCJzZXRDb250ZXh0TWVudSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});