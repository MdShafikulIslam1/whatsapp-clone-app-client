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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n/* harmony import */ var _PhotoPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoPicker */ \"./src/components/common/PhotoPicker.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [contextMenuCoordinates, setContextMenuCoordinates] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [graphPhoto, setGraphPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        console.log(e.pageX, e.pageY);\n        setIsContextMenuVisible(true);\n        setContextMenuCoordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n    };\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{\n                setGraphPhoto(true);\n            }\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default_avatar.png\");\n            }\n        }\n    ];\n    const photoPickerHandleChange = ()=>{\n        alert(\"Photo Picker handle change\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (graphPhoto) {\n            const data = document.getElementById(\"photo-picker\");\n        }\n    }, [\n        graphPhoto\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-10 h-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this),\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative z-0 cursor-pointer\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(hover ? \"visible\" : \"hidden\", \" z-10 absolute top-0 bottom-0 bg-photopicker-overlay-background h-60 w-60 flex items-center justify-center flex-col text-center gap-2\"),\n                                id: \"context-opener\",\n                                onClick: (e)=>showContextMenu(e),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaCamera, {\n                                        className: \"text-2xl text-white\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-white\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e),\n                                        children: [\n                                            \"Change \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 24\n                                            }, this),\n                                            \" Your \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 36\n                                            }, this),\n                                            \" Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center h-60 w-60\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: image,\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                coordinates: contextMenuCoordinates,\n                contextMenu: isContextMenuVisible,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this),\n            graphPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: photoPickerHandleChange\n            }, void 0, false, {\n                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 107,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"RZbDubQYe8uBCi0RfCZnKscaqOM=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNUbUIsYUFBYWhDO2dCQUNiaUMsYUFBYW5DO2dCQUNib0MsZ0JBQWdCbkM7Ozs7OztZQUluQkssNEJBQWMsOERBQUNiLG9EQUFXQTtnQkFBQzRDLFVBQVVuQjs7Ozs7Ozs7QUFHNUM7R0F2R1N4QjtLQUFBQTtBQXlHVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeD8wMTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGYUNhbWVyYSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSBcIi4vQ29udGV4dE1lbnVcIjtcclxuaW1wb3J0IFBob3RvUGlja2VyIGZyb20gXCIuL1Bob3RvUGlja2VyXCI7XHJcblxyXG5mdW5jdGlvbiBBdmF0YXIoeyB0eXBlLCBpbWFnZSwgc2V0SW1hZ2UgfSkge1xyXG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0NvbnRleHRNZW51VmlzaWJsZSwgc2V0SXNDb250ZXh0TWVudVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb250ZXh0TWVudUNvb3JkaW5hdGVzLCBzZXRDb250ZXh0TWVudUNvb3JkaW5hdGVzXSA9IHVzZVN0YXRlKHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbZ3JhcGhQaG90bywgc2V0R3JhcGhQaG90b10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNob3dDb250ZXh0TWVudSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhlLnBhZ2VYLCBlLnBhZ2VZKTtcclxuICAgIHNldElzQ29udGV4dE1lbnVWaXNpYmxlKHRydWUpO1xyXG4gICAgc2V0Q29udGV4dE1lbnVDb29yZGluYXRlcyh7IHg6IGUucGFnZVgsIHk6IGUucGFnZVkgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udGV4dE1lbnVPcHRpb25zID0gW1xyXG4gICAgeyBuYW1lOiBcIlRha2UgUGhvdG9cIiwgY2FsbGJhY2s6ICgpID0+IHt9IH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hvb3NlIEZyb20gTGlicmFyeVwiLCBjYWxsYmFjazogKCkgPT4ge30gfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJVcGxvYWQgUGhvdG9cIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICBzZXRHcmFwaFBob3RvKHRydWUpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZW1vdmUgUGhvdG9cIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICBzZXRJbWFnZShcIi9kZWZhdWx0X2F2YXRhci5wbmdcIik7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHBob3RvUGlja2VySGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgYWxlcnQoXCJQaG90byBQaWNrZXIgaGFuZGxlIGNoYW5nZVwiKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5pZiAoZ3JhcGhQaG90bykge1xyXG4gIGNvbnN0IGRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob3RvLXBpY2tlclwiKTtcclxufVxyXG4gIH0sW2dyYXBoUGhvdG9dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICB7dHlwZSA9PT0gXCJzbVwiICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0xMCBoLTEwXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBmaWxsIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7dHlwZSA9PT0gXCJsZ1wiICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xNCB3LTE0XCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBmaWxsIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7dHlwZSA9PT0gXCJ4bFwiICYmIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0wIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihmYWxzZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgaG92ZXIgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICB9IHotMTAgYWJzb2x1dGUgdG9wLTAgYm90dG9tLTAgYmctcGhvdG9waWNrZXItb3ZlcmxheS1iYWNrZ3JvdW5kIGgtNjAgdy02MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCB0ZXh0LWNlbnRlciBnYXAtMmB9XHJcbiAgICAgICAgICAgICAgaWQ9XCJjb250ZXh0LW9wZW5lclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNob3dDb250ZXh0TWVudShlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGYUNhbWVyYVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRleHQtb3BlbmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzaG93Q29udGV4dE1lbnUoZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRleHQtb3BlbmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzaG93Q29udGV4dE1lbnUoZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlIDxiciAvPiBZb3VyIDxiciAvPiBQaG90b1xyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC02MCB3LTYwXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGZpbGwgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2lzQ29udGV4dE1lbnVWaXNpYmxlICYmIChcclxuICAgICAgICA8Q29udGV4dE1lbnVcclxuICAgICAgICAgIG9wdGlvbnM9e2NvbnRleHRNZW51T3B0aW9uc31cclxuICAgICAgICAgIGNvb3JkaW5hdGVzPXtjb250ZXh0TWVudUNvb3JkaW5hdGVzfVxyXG4gICAgICAgICAgY29udGV4dE1lbnU9e2lzQ29udGV4dE1lbnVWaXNpYmxlfVxyXG4gICAgICAgICAgc2V0Q29udGV4dE1lbnU9e3NldElzQ29udGV4dE1lbnVWaXNpYmxlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7Z3JhcGhQaG90byAmJiA8UGhvdG9QaWNrZXIgb25DaGFuZ2U9e3Bob3RvUGlja2VySGFuZGxlQ2hhbmdlfSAvPn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZhQ2FtZXJhIiwiQ29udGV4dE1lbnUiLCJQaG90b1BpY2tlciIsIkF2YXRhciIsInR5cGUiLCJpbWFnZSIsInNldEltYWdlIiwiaG92ZXIiLCJzZXRIb3ZlciIsImlzQ29udGV4dE1lbnVWaXNpYmxlIiwic2V0SXNDb250ZXh0TWVudVZpc2libGUiLCJjb250ZXh0TWVudUNvb3JkaW5hdGVzIiwic2V0Q29udGV4dE1lbnVDb29yZGluYXRlcyIsIngiLCJ5IiwiZ3JhcGhQaG90byIsInNldEdyYXBoUGhvdG8iLCJzaG93Q29udGV4dE1lbnUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicGFnZVgiLCJwYWdlWSIsImNvbnRleHRNZW51T3B0aW9ucyIsIm5hbWUiLCJjYWxsYmFjayIsInBob3RvUGlja2VySGFuZGxlQ2hhbmdlIiwiYWxlcnQiLCJkYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImZpbGwiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJpZCIsIm9uQ2xpY2siLCJzcGFuIiwiYnIiLCJvcHRpb25zIiwiY29vcmRpbmF0ZXMiLCJjb250ZXh0TWVudSIsInNldENvbnRleHRNZW51Iiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});