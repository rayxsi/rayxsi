"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./view/assets/css/Counter.module.css":
/*!********************************************!*\
  !*** ./view/assets/css/Counter.module.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"main\":\"Counter-module__main--aLE2DBO9tJYvDNbSuDng4cQUJRGXCE__mechanix\"});\n\n//# sourceURL=webpack:///./view/assets/css/Counter.module.css?");

/***/ }),

/***/ "./view/js/components/404/404.module.css":
/*!***********************************************!*\
  !*** ./view/js/components/404/404.module.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"_404\":\"_404-module___404--vjP76RDMlU66OBpHS0EQUATfZr9UHv__mechanix\"});\n\n//# sourceURL=webpack:///./view/js/components/404/404.module.css?");

/***/ }),

/***/ "./view/js/components/eshop/eshop.css":
/*!********************************************!*\
  !*** ./view/js/components/eshop/eshop.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./view/js/components/eshop/eshop.css?");

/***/ }),

/***/ "./view/js/components/signup/Signup.module.css":
/*!*****************************************************!*\
  !*** ./view/js/components/signup/Signup.module.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"form\":\"Signup-module__form--IQJg33wTadU8axzcRdki_QJlZTNMFy__mechanix\"});\n\n//# sourceURL=webpack:///./view/js/components/signup/Signup.module.css?");

/***/ }),

/***/ "./view/js/components/users/user.css":
/*!*******************************************!*\
  !*** ./view/js/components/users/user.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./view/js/components/users/user.css?");

/***/ }),

/***/ "./view/js/browser.js":
/*!****************************!*\
  !*** ./view/js/browser.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./view/js/components/App.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux */ \"./view/js/redux/index.js\");\n\n\n\n\n\n\n\n/**\n * Pre-state.\n *\n *@var __usdx96\n */\n\nvar run = function run() {\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_5__.createStore)(_redux__WEBPACK_IMPORTED_MODULE_4__.rootReducer, window.__usdx96);\n  delete window.__usdx96;\n  react_dom__WEBPACK_IMPORTED_MODULE_1__.hydrate( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))), document.getElementById('root'));\n}; //This configuration for @mui\n//\n// import React from 'react';\n// import ReactDom from 'react-dom';\n// import CssBaseline from '@mui/material/CssBaseline'\n// import { ThemeProvider } from '@mui/material/styles';\n// import { CacheProvider } from '@emotion/react';\n// import createEmotionCache from \"./components/createEmotionCache\";\n// import MuiTheme from \"./components/MuiTheme\";\n// import App from \"./components/App\";\n//\n// const  run = () => {\n//     const cache = createEmotionCache();\n//\n//     ReactDom.hydrate(\n//         <CacheProvider value={cache}>\n//             <ThemeProvider theme={MuiTheme}>\n//                 <CssBaseline/>\n//                 <App/>\n//             </ThemeProvider>\n//         </CacheProvider>,\n//         document.getElementById('root')\n//     );\n// }\n\n\nrun();\n\n//# sourceURL=webpack:///./view/js/browser.js?");

/***/ }),

/***/ "./view/js/components/404/Page404.jsx":
/*!********************************************!*\
  !*** ./view/js/components/404/Page404.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _404_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.module.css */ \"./view/js/components/404/404.module.css\");\n\n\n\nfunction Page404(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _404_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]._404\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Page not found\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page404);\n\n//# sourceURL=webpack:///./view/js/components/404/Page404.jsx?");

/***/ }),

/***/ "./view/js/components/404/index.js":
/*!*****************************************!*\
  !*** ./view/js/components/404/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _Page404__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Page404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page404 */ \"./view/js/components/404/Page404.jsx\");\n\n\n//# sourceURL=webpack:///./view/js/components/404/index.js?");

/***/ }),

/***/ "./view/js/components/App.js":
/*!***********************************!*\
  !*** ./view/js/components/App.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _assets_css_Counter_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/css/Counter.module.css */ \"./view/assets/css/Counter.module.css\");\n/* harmony import */ var _eshop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eshop */ \"./view/js/components/eshop/index.js\");\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users */ \"./view/js/components/users/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ \"./view/js/components/header/index.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ \"./view/js/components/home/index.js\");\n/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./404 */ \"./view/js/components/404/index.js\");\n/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup */ \"./view/js/components/signup/index.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction App(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: '/',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_home__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: '/products',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_eshop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: '/users',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_users__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: '/signup',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_signup__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: '/*',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_404__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack:///./view/js/components/App.js?");

/***/ }),

/***/ "./view/js/components/eshop/Eshop.jsx":
/*!********************************************!*\
  !*** ./view/js/components/eshop/Eshop.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _oreodusk_pre_api_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @oreodusk/pre-api-loader */ \"./node_modules/@oreodusk/pre-api-loader/dist/esm/index.esm.js\");\n/* harmony import */ var _container_eshop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../container/eshop */ \"./view/js/container/eshop/index.js\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux */ \"./view/js/redux/index.js\");\n/* harmony import */ var _eshop_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eshop.css */ \"./view/js/components/eshop/eshop.css\");\n\n\n\n\n\n(0,_redux__WEBPACK_IMPORTED_MODULE_3__.getSsrPreLoad)(function () {\n  return (0,_oreodusk_pre_api_loader__WEBPACK_IMPORTED_MODULE_1__.getPreState)((0,_container_eshop__WEBPACK_IMPORTED_MODULE_2__.fetchProducts)());\n});\n\nfunction Eshop(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    className: 'eshop_style'\n  }, \"e shop\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Eshop);\n\n//# sourceURL=webpack:///./view/js/components/eshop/Eshop.jsx?");

/***/ }),

/***/ "./view/js/components/eshop/index.js":
/*!*******************************************!*\
  !*** ./view/js/components/eshop/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _Eshop__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Eshop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Eshop */ \"./view/js/components/eshop/Eshop.jsx\");\n\n\n//# sourceURL=webpack:///./view/js/components/eshop/index.js?");

/***/ }),

/***/ "./view/js/components/header/Header.jsx":
/*!**********************************************!*\
  !*** ./view/js/components/header/Header.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\n\n\n\n\nfunction Header(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    bg: \"light\",\n    expand: \"lg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Brand, {\n    href: \"#home\"\n  }, \"RayXsi\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Toggle, {\n    \"aria-controls\": \"basic-navbar-nav\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Collapse, {\n    id: \"basic-navbar-nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: \"me-auto\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link,\n    to: '/'\n  }, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link,\n    to: '/products'\n  }, \"Eshop\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link,\n    to: '/users'\n  }, \"Users\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link,\n    to: '/signup'\n  }, \"Sign up\")))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack:///./view/js/components/header/Header.jsx?");

/***/ }),

/***/ "./view/js/components/header/index.js":
/*!********************************************!*\
  !*** ./view/js/components/header/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./view/js/components/header/Header.jsx\");\n\n\n//# sourceURL=webpack:///./view/js/components/header/index.js?");

/***/ }),

/***/ "./view/js/components/home/Home.jsx":
/*!******************************************!*\
  !*** ./view/js/components/home/Home.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction Home(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Home\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack:///./view/js/components/home/Home.jsx?");

/***/ }),

/***/ "./view/js/components/home/index.js":
/*!******************************************!*\
  !*** ./view/js/components/home/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./view/js/components/home/Home.jsx\");\n\n\n//# sourceURL=webpack:///./view/js/components/home/index.js?");

/***/ }),

/***/ "./view/js/components/signup/SignUp.jsx":
/*!**********************************************!*\
  !*** ./view/js/components/signup/SignUp.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _Signup_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Signup.module.css */ \"./view/js/components/signup/Signup.module.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nfunction SignUp(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      firstname = _useState2[0],\n      setFirstname = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState3, 2),\n      lastname = _useState4[0],\n      setLastname = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState5, 2),\n      email = _useState6[0],\n      setEmail = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState7, 2),\n      password = _useState8[0],\n      setPassword = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState9, 2),\n      confirmPassword = _useState10[0],\n      setConfirmPassword = _useState10[1];\n\n  var submitData = /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {\n      var data, response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              data = {\n                firstname: firstname,\n                lastname: lastname,\n                email: email,\n                password: password,\n                confirmPassword: confirmPassword\n              };\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default().post('http://localhost:5050/adduser', data);\n\n            case 4:\n              response = _context.sent;\n\n              if (response.status === 200) {\n                setFirstname('');\n                setLastname('');\n                setEmail('');\n                setPassword('');\n                setConfirmPassword('');\n              }\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function submitData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: \"\".concat(_Signup_module_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].form)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, {\n    className: \"mb-3\",\n    controlId: \"formBasicEmail\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Label, null, \"Fist name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Control, {\n    type: \"text\",\n    placeholder: \"Enter first name\",\n    value: firstname,\n    onChange: function onChange(e) {\n      return setFirstname(e.target.value);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, {\n    className: \"mb-3\",\n    controlId: \"formBasicEmail\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Label, null, \"Last name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Control, {\n    type: \"text\",\n    placeholder: \"Enter last name\",\n    value: lastname,\n    onChange: function onChange(e) {\n      return setLastname(e.target.value);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, {\n    className: \"mb-3\",\n    controlId: \"formBasicEmail\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Label, null, \"Email address\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Control, {\n    type: \"email\",\n    placeholder: \"Enter email\",\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Text, {\n    className: \"text-muted\"\n  }, \"We'll never share your email with anyone else.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, {\n    className: \"mb-3\",\n    controlId: \"formBasicPassword\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Label, null, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Control, {\n    type: \"password\",\n    placeholder: \"Password\",\n    value: password,\n    onChange: function onChange(e) {\n      return setPassword(e.target.value);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, {\n    className: \"mb-3\",\n    controlId: \"formBasicPassword\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Label, null, \"Confirm password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Control, {\n    type: \"password\",\n    placeholder: \"Confirm password\",\n    value: confirmPassword,\n    onChange: function onChange(e) {\n      return setConfirmPassword(e.target.value);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, {\n    className: \"mb-3\",\n    controlId: \"formBasicCheckbox\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Check, {\n    type: \"checkbox\",\n    label: \"Check me out\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    variant: \"primary\",\n    type: \"submit\",\n    onClick: submitData\n  }, \"Submit\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);\n\n//# sourceURL=webpack:///./view/js/components/signup/SignUp.jsx?");

/***/ }),

/***/ "./view/js/components/signup/index.js":
/*!********************************************!*\
  !*** ./view/js/components/signup/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _SignUp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp */ \"./view/js/components/signup/SignUp.jsx\");\n\n\n//# sourceURL=webpack:///./view/js/components/signup/index.js?");

/***/ }),

/***/ "./view/js/components/users/Users.jsx":
/*!********************************************!*\
  !*** ./view/js/components/users/Users.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _container_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../container/users */ \"./view/js/container/users/index.js\");\n/* harmony import */ var _oreodusk_pre_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @oreodusk/pre-api-loader */ \"./node_modules/@oreodusk/pre-api-loader/dist/esm/index.esm.js\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux */ \"./view/js/redux/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _user_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.css */ \"./view/js/components/users/user.css\");\n\n\n\n\n\n\n(0,_redux__WEBPACK_IMPORTED_MODULE_3__.getSsrPreLoad)(function () {\n  return (0,_oreodusk_pre_api_loader__WEBPACK_IMPORTED_MODULE_2__.getPreState)((0,_container_users__WEBPACK_IMPORTED_MODULE_1__.fetchUsers)());\n});\n\nfunction Users(props) {\n  var users = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.users;\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, users.data.map(function (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h5\", {\n      key: user.id\n    }, user.name);\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n\n//# sourceURL=webpack:///./view/js/components/users/Users.jsx?");

/***/ }),

/***/ "./view/js/components/users/index.js":
/*!*******************************************!*\
  !*** ./view/js/components/users/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _Users__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users */ \"./view/js/components/users/Users.jsx\");\n\n\n//# sourceURL=webpack:///./view/js/components/users/index.js?");

/***/ }),

/***/ "./view/js/container/eshop/action.js":
/*!*******************************************!*\
  !*** ./view/js/container/eshop/action.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchProducts\": () => (/* binding */ fetchProducts),\n/* harmony export */   \"prodFetchError\": () => (/* binding */ prodFetchError),\n/* harmony export */   \"prodFetchRequest\": () => (/* binding */ prodFetchRequest),\n/* harmony export */   \"prodFetchSuccess\": () => (/* binding */ prodFetchSuccess)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionType */ \"./view/js/container/eshop/actionType.js\");\n\n\n\n\nfunction prodFetchRequest() {\n  return {\n    type: _actionType__WEBPACK_IMPORTED_MODULE_3__.FETCH_PRODUCT_REQUEST\n  };\n}\nfunction prodFetchSuccess(data) {\n  return {\n    type: _actionType__WEBPACK_IMPORTED_MODULE_3__.FETCH_PRODUCT_SUCCESS,\n    payload: data\n  };\n}\nfunction prodFetchError(err) {\n  return {\n    type: _actionType__WEBPACK_IMPORTED_MODULE_3__.FETCH_PRODUCT_ERROR,\n    payload: err\n  };\n}\nfunction fetchProducts() {\n  return /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {\n      var url, response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              dispatch(prodFetchRequest());\n              url = 'https://fakestoreapi.com/products?limit=5';\n              _context.next = 5;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default().get(url);\n\n            case 5:\n              response = _context.sent;\n              dispatch(prodFetchSuccess(response.data));\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](0);\n              dispatch(prodFetchError(_context.t0.message));\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 9]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n}\n\n//# sourceURL=webpack:///./view/js/container/eshop/action.js?");

/***/ }),

/***/ "./view/js/container/eshop/actionType.js":
/*!***********************************************!*\
  !*** ./view/js/container/eshop/actionType.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FETCH_PRODUCT_ERROR\": () => (/* binding */ FETCH_PRODUCT_ERROR),\n/* harmony export */   \"FETCH_PRODUCT_REQUEST\": () => (/* binding */ FETCH_PRODUCT_REQUEST),\n/* harmony export */   \"FETCH_PRODUCT_SUCCESS\": () => (/* binding */ FETCH_PRODUCT_SUCCESS)\n/* harmony export */ });\nvar FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';\nvar FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';\nvar FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';\n\n//# sourceURL=webpack:///./view/js/container/eshop/actionType.js?");

/***/ }),

/***/ "./view/js/container/eshop/index.js":
/*!******************************************!*\
  !*** ./view/js/container/eshop/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"fetchProducts\": () => (/* reexport safe */ _action__WEBPACK_IMPORTED_MODULE_1__.fetchProducts)\n/* harmony export */ });\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./view/js/container/eshop/reducer.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ \"./view/js/container/eshop/action.js\");\n\n\n\n//# sourceURL=webpack:///./view/js/container/eshop/index.js?");

/***/ }),

/***/ "./view/js/container/eshop/reducer.js":
/*!********************************************!*\
  !*** ./view/js/container/eshop/reducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionType */ \"./view/js/container/eshop/actionType.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\nvar initialState = {\n  loading: false,\n  data: [],\n  error: ''\n};\n\nfunction productsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionType__WEBPACK_IMPORTED_MODULE_1__.FETCH_PRODUCT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true\n      });\n\n    case _actionType__WEBPACK_IMPORTED_MODULE_1__.FETCH_PRODUCT_SUCCESS:\n      return {\n        loading: false,\n        data: action.payload,\n        error: ''\n      };\n\n    case _actionType__WEBPACK_IMPORTED_MODULE_1__.FETCH_PRODUCT_ERROR:\n      return {\n        loading: false,\n        data: [],\n        error: action.payload\n      };\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsReducer);\n\n//# sourceURL=webpack:///./view/js/container/eshop/reducer.js?");

/***/ }),

/***/ "./view/js/container/users/actionType.js":
/*!***********************************************!*\
  !*** ./view/js/container/users/actionType.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FETCH_USER_ERROR\": () => (/* binding */ FETCH_USER_ERROR),\n/* harmony export */   \"FETCH_USER_REQUEST\": () => (/* binding */ FETCH_USER_REQUEST),\n/* harmony export */   \"FETCH_USER_SUCCESS\": () => (/* binding */ FETCH_USER_SUCCESS)\n/* harmony export */ });\nvar FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';\nvar FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';\nvar FETCH_USER_ERROR = 'FETCH_USER_ERROR';\n\n//# sourceURL=webpack:///./view/js/container/users/actionType.js?");

/***/ }),

/***/ "./view/js/container/users/actions.js":
/*!********************************************!*\
  !*** ./view/js/container/users/actions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchUsers\": () => (/* binding */ fetchUsers),\n/* harmony export */   \"userFetchError\": () => (/* binding */ userFetchError),\n/* harmony export */   \"userFetchRequest\": () => (/* binding */ userFetchRequest),\n/* harmony export */   \"userFetchSuccess\": () => (/* binding */ userFetchSuccess)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionType */ \"./view/js/container/users/actionType.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction userFetchRequest() {\n  return {\n    type: _actionType__WEBPACK_IMPORTED_MODULE_2__.FETCH_USER_REQUEST\n  };\n}\nfunction userFetchSuccess(data) {\n  return {\n    type: _actionType__WEBPACK_IMPORTED_MODULE_2__.FETCH_USER_SUCCESS,\n    payload: data\n  };\n}\nfunction userFetchError(err) {\n  return {\n    type: _actionType__WEBPACK_IMPORTED_MODULE_2__.FETCH_USER_ERROR,\n    payload: err\n  };\n}\nfunction fetchUsers() {\n  return /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {\n      var url, response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              dispatch(userFetchRequest());\n              url = 'https://jsonplaceholder.typicode.com/users';\n              _context.next = 5;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default().get(url);\n\n            case 5:\n              response = _context.sent;\n              dispatch(userFetchSuccess(response.data));\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](0);\n              dispatch(userFetchError(_context.t0.message));\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 9]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n}\n\n//# sourceURL=webpack:///./view/js/container/users/actions.js?");

/***/ }),

/***/ "./view/js/container/users/index.js":
/*!******************************************!*\
  !*** ./view/js/container/users/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"fetchUsers\": () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.fetchUsers)\n/* harmony export */ });\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./view/js/container/users/reducer.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./view/js/container/users/actions.js\");\n\n\n\n//# sourceURL=webpack:///./view/js/container/users/index.js?");

/***/ }),

/***/ "./view/js/container/users/reducer.js":
/*!********************************************!*\
  !*** ./view/js/container/users/reducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionType */ \"./view/js/container/users/actionType.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\nvar initialState = {\n  loading: false,\n  data: [],\n  error: ''\n};\n\nfunction userReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionType__WEBPACK_IMPORTED_MODULE_1__.FETCH_USER_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true\n      });\n\n    case _actionType__WEBPACK_IMPORTED_MODULE_1__.FETCH_USER_SUCCESS:\n      return {\n        loading: false,\n        data: action.payload,\n        error: ''\n      };\n\n    case _actionType__WEBPACK_IMPORTED_MODULE_1__.FETCH_USER_ERROR:\n      return {\n        loading: false,\n        data: [],\n        error: action.payload\n      };\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userReducer);\n\n//# sourceURL=webpack:///./view/js/container/users/reducer.js?");

/***/ }),

/***/ "./view/js/redux/index.js":
/*!********************************!*\
  !*** ./view/js/redux/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StartApiLoader\": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.StartApiLoader),\n/* harmony export */   \"default\": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"getSsrPreLoad\": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.getSsrPreLoad),\n/* harmony export */   \"rootReducer\": () => (/* reexport safe */ _rootReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rootReducer */ \"./view/js/redux/rootReducer.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./view/js/redux/store.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./view/js/redux/index.js?");

/***/ }),

/***/ "./view/js/redux/rootReducer.js":
/*!**************************************!*\
  !*** ./view/js/redux/rootReducer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _container_eshop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/eshop */ \"./view/js/container/eshop/index.js\");\n/* harmony import */ var _container_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/users */ \"./view/js/container/users/index.js\");\n\n\n //********************** important concern *************************//\n// combineReducers combine the all the reducers//\n//Here you have to add all your reducer//\n\nvar rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({\n  users: _container_users__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  eshop: _container_eshop__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n\n//# sourceURL=webpack:///./view/js/redux/rootReducer.js?");

/***/ }),

/***/ "./view/js/redux/store.js":
/*!********************************!*\
  !*** ./view/js/redux/store.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StartApiLoader\": () => (/* binding */ StartApiLoader),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getSsrPreLoad\": () => (/* binding */ getSsrPreLoad)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rootReducer */ \"./view/js/redux/rootReducer.js\");\n/* harmony import */ var _oreodusk_pre_api_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @oreodusk/pre-api-loader */ \"./node_modules/@oreodusk/pre-api-loader/dist/esm/index.esm.js\");\n\n\n\n //******************** important concern ***************************//\n// redux-thunk uses for asynchronous tasks ***************************//\n// applyMiddleware uses for applying third party middlewares to redux store//\n//********************************************************************//\n\nvar store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_rootReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"], (0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\n\nvar _createLoader = (0,_oreodusk_pre_api_loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(store),\n    StartApiLoader = _createLoader.StartApiLoader,\n    getSsrPreLoad = _createLoader.getSsrPreLoad;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n//# sourceURL=webpack:///./view/js/redux/store.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_a","vendors-node_modules_bootstrap_dist_css_bootstrap_min_css-bf6770a8","vendors-node_modules_history_index_js-25124d18","vendors-node_modules_h","vendors-node_modules_r","reactBootstrap","react&dom-node_modules_react-dom_cjs_react-dom_development_js-61bb2bf2","react&dom-node_modules_react-","react&dom-node_modules_react_c","vendors-node_modules_react-lifecycles-compat_react-lifecycles-compat_es_js-node_modules_react-de3ee2","vendors-node_modules_react-router-dom_index_js-node_modules_react-transition-group_esm_Transi-f882d7"], () => (__webpack_exec__("./view/js/browser.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);