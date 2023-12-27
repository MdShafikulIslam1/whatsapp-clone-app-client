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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n/* harmony import */ var _PhotoPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoPicker */ \"./src/components/common/PhotoPicker.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [contextMenuCoordinates, setContextMenuCoordinates] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [graphPhoto, setGraphPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        console.log(e.pageX, e.pageY);\n        setIsContextMenuVisible(true);\n        setContextMenuCoordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n    };\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{\n                setGraphPhoto(true);\n            }\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default_avatar.png\");\n            }\n        }\n    ];\n    const photoPickerHandleChange = async (e)=>{\n        alert(\"Photo Picker handle change\");\n        const file = e.target.files[0];\n        const reader = new FileReader();\n        const image = document.createElement(\"img\");\n        reader.onload = function(event) {\n            image.src = event.target.result;\n            image.setAttribute(\"image-src\", event.target.result);\n        };\n        reader.readAsDataURL(file);\n        setTimeout(()=>{\n            setImage(image.src);\n        }, 100);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (graphPhoto) {\n            const data = document.getElementById(\"photo-picker\");\n            data.click();\n        }\n        document.body.onfocus = (e)=>{\n            setTimeout(()=>{\n                setGraphPhoto(false);\n            }, 1000);\n        };\n    }, [\n        graphPhoto\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-10 h-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this),\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative z-0 cursor-pointer\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(hover ? \"visible\" : \"hidden\", \" z-10 absolute top-0 bottom-0 bg-photopicker-overlay-background h-60 w-60 flex items-center justify-center flex-col text-center gap-2\"),\n                                id: \"context-opener\",\n                                onClick: (e)=>showContextMenu(e),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaCamera, {\n                                        className: \"text-2xl text-white\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-white\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e),\n                                        children: [\n                                            \"Change \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 108,\n                                                columnNumber: 24\n                                            }, this),\n                                            \" Your \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 108,\n                                                columnNumber: 36\n                                            }, this),\n                                            \" Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center h-60 w-60\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: image,\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                coordinates: contextMenuCoordinates,\n                contextMenu: isContextMenuVisible,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 118,\n                columnNumber: 9\n            }, this),\n            graphPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: photoPickerHandleChange\n            }, void 0, false, {\n                fileName: \"D:\\\\SHOFIKUL D\\\\Next level\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 126,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"RZbDubQYe8uBCi0RfCZnKscaqOM=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsR0FFVixPQURDMUMsUUFBUSxZQUFZLFFBQVEsRUFDN0I7Z0NBQ0Q4QyxJQUFHO2dDQUNIQyxTQUFTLENBQUNwQyxJQUFNRCxnQkFBZ0JDOztrREFFaEMsOERBQUNsQixvREFBUUE7d0NBQ1BpRCxXQUFVO3dDQUNWSSxJQUFHO3dDQUNIQyxTQUFTLENBQUNwQyxJQUFNRCxnQkFBZ0JDOzs7Ozs7a0RBRWxDLDhEQUFDcUM7d0NBQ0NOLFdBQVU7d0NBQ1ZJLElBQUc7d0NBQ0hDLFNBQVMsQ0FBQ3BDLElBQU1ELGdCQUFnQkM7OzRDQUNqQzswREFDUSw4REFBQ3NDOzs7Ozs0Q0FBSzswREFBTSw4REFBQ0E7Ozs7OzRDQUFLOzs7Ozs7Ozs7Ozs7OzBDQUc3Qiw4REFBQ1I7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNyRCxtREFBS0E7b0NBQUMwQyxLQUFLakM7b0NBQU82QyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUs5QnpDLHNDQUNDLDhEQUFDUixvREFBV0E7Z0JBQ1Z3RCxTQUFTakM7Z0JBQ1RrQyxhQUFhL0M7Z0JBQ2JnRCxhQUFhbEQ7Z0JBQ2JtRCxnQkFBZ0JsRDs7Ozs7O1lBSW5CSyw0QkFBYyw4REFBQ2Isb0RBQVdBO2dCQUFDMkQsVUFBVWxDOzs7Ozs7OztBQUc1QztHQTFIU3hCO0tBQUFBO0FBNEhULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXIuanN4PzAxN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZhQ2FtZXJhIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tIFwiLi9Db250ZXh0TWVudVwiO1xyXG5pbXBvcnQgUGhvdG9QaWNrZXIgZnJvbSBcIi4vUGhvdG9QaWNrZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEF2YXRhcih7IHR5cGUsIGltYWdlLCBzZXRJbWFnZSB9KSB7XHJcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzQ29udGV4dE1lbnVWaXNpYmxlLCBzZXRJc0NvbnRleHRNZW51VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbnRleHRNZW51Q29vcmRpbmF0ZXMsIHNldENvbnRleHRNZW51Q29vcmRpbmF0ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgeDogMCxcclxuICAgIHk6IDAsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtncmFwaFBob3RvLCBzZXRHcmFwaFBob3RvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2hvd0NvbnRleHRNZW51ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGUucGFnZVgsIGUucGFnZVkpO1xyXG4gICAgc2V0SXNDb250ZXh0TWVudVZpc2libGUodHJ1ZSk7XHJcbiAgICBzZXRDb250ZXh0TWVudUNvb3JkaW5hdGVzKHsgeDogZS5wYWdlWCwgeTogZS5wYWdlWSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb250ZXh0TWVudU9wdGlvbnMgPSBbXHJcbiAgICB7IG5hbWU6IFwiVGFrZSBQaG90b1wiLCBjYWxsYmFjazogKCkgPT4ge30gfSxcclxuICAgIHsgbmFtZTogXCJDaG9vc2UgRnJvbSBMaWJyYXJ5XCIsIGNhbGxiYWNrOiAoKSA9PiB7fSB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlVwbG9hZCBQaG90b1wiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgIHNldEdyYXBoUGhvdG8odHJ1ZSk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlbW92ZSBQaG90b1wiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlKFwiL2RlZmF1bHRfYXZhdGFyLnBuZ1wiKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcGhvdG9QaWNrZXJIYW5kbGVDaGFuZ2UgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgYWxlcnQoXCJQaG90byBQaWNrZXIgaGFuZGxlIGNoYW5nZVwiKTtcclxuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpbWFnZS5zcmMgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJpbWFnZS1zcmNcIiwgZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldEltYWdlKGltYWdlLnNyYyk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZ3JhcGhQaG90bykge1xyXG4gICAgICBjb25zdCBkYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG90by1waWNrZXJcIik7XHJcbiAgICAgIGRhdGEuY2xpY2soKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmJvZHkub25mb2N1cyA9IChlKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldEdyYXBoUGhvdG8oZmFsc2UpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH07XHJcbiAgfSwgW2dyYXBoUGhvdG9dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICB7dHlwZSA9PT0gXCJzbVwiICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0xMCBoLTEwXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBmaWxsIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7dHlwZSA9PT0gXCJsZ1wiICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xNCB3LTE0XCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBmaWxsIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7dHlwZSA9PT0gXCJ4bFwiICYmIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0wIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihmYWxzZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgaG92ZXIgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICB9IHotMTAgYWJzb2x1dGUgdG9wLTAgYm90dG9tLTAgYmctcGhvdG9waWNrZXItb3ZlcmxheS1iYWNrZ3JvdW5kIGgtNjAgdy02MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCB0ZXh0LWNlbnRlciBnYXAtMmB9XHJcbiAgICAgICAgICAgICAgaWQ9XCJjb250ZXh0LW9wZW5lclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNob3dDb250ZXh0TWVudShlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGYUNhbWVyYVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRleHQtb3BlbmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzaG93Q29udGV4dE1lbnUoZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRleHQtb3BlbmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzaG93Q29udGV4dE1lbnUoZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlIDxiciAvPiBZb3VyIDxiciAvPiBQaG90b1xyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC02MCB3LTYwXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGZpbGwgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2lzQ29udGV4dE1lbnVWaXNpYmxlICYmIChcclxuICAgICAgICA8Q29udGV4dE1lbnVcclxuICAgICAgICAgIG9wdGlvbnM9e2NvbnRleHRNZW51T3B0aW9uc31cclxuICAgICAgICAgIGNvb3JkaW5hdGVzPXtjb250ZXh0TWVudUNvb3JkaW5hdGVzfVxyXG4gICAgICAgICAgY29udGV4dE1lbnU9e2lzQ29udGV4dE1lbnVWaXNpYmxlfVxyXG4gICAgICAgICAgc2V0Q29udGV4dE1lbnU9e3NldElzQ29udGV4dE1lbnVWaXNpYmxlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7Z3JhcGhQaG90byAmJiA8UGhvdG9QaWNrZXIgb25DaGFuZ2U9e3Bob3RvUGlja2VySGFuZGxlQ2hhbmdlfSAvPn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZhQ2FtZXJhIiwiQ29udGV4dE1lbnUiLCJQaG90b1BpY2tlciIsIkF2YXRhciIsInR5cGUiLCJpbWFnZSIsInNldEltYWdlIiwiaG92ZXIiLCJzZXRIb3ZlciIsImlzQ29udGV4dE1lbnVWaXNpYmxlIiwic2V0SXNDb250ZXh0TWVudVZpc2libGUiLCJjb250ZXh0TWVudUNvb3JkaW5hdGVzIiwic2V0Q29udGV4dE1lbnVDb29yZGluYXRlcyIsIngiLCJ5IiwiZ3JhcGhQaG90byIsInNldEdyYXBoUGhvdG8iLCJzaG93Q29udGV4dE1lbnUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicGFnZVgiLCJwYWdlWSIsImNvbnRleHRNZW51T3B0aW9ucyIsIm5hbWUiLCJjYWxsYmFjayIsInBob3RvUGlja2VySGFuZGxlQ2hhbmdlIiwiYWxlcnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwib25sb2FkIiwiZXZlbnQiLCJzcmMiLCJyZXN1bHQiLCJzZXRBdHRyaWJ1dGUiLCJyZWFkQXNEYXRhVVJMIiwic2V0VGltZW91dCIsImRhdGEiLCJnZXRFbGVtZW50QnlJZCIsImNsaWNrIiwiYm9keSIsIm9uZm9jdXMiLCJkaXYiLCJjbGFzc05hbWUiLCJmaWxsIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaWQiLCJvbkNsaWNrIiwic3BhbiIsImJyIiwib3B0aW9ucyIsImNvb3JkaW5hdGVzIiwiY29udGV4dE1lbnUiLCJzZXRDb250ZXh0TWVudSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});