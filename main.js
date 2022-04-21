/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n}\n.modal{\n    display: none;\n    position:fixed;\n    z-index: 1;\n    left:0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.1);\n}\n.modalContent{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    margin: 10% auto;\n    background-color: white;\n    padding: 20px;\n    width: 50%;\n    border: 3px solid rgba(255, 255, 255, 0.7);\n    box-shadow: 0px 3px 8px black;\n}\n.modalContent>input{\n    height: 3rem;\n    width: 50%;\n    margin: 10px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n    border-radius: 5px;\n\n}\n.content{\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 10fr;\n}\n.header{\n    grid-column: 1 / span 2;\n    background-color: rgba(85, 85, 221, 0.767);\n    box-shadow: 0px 3px 10px rgba(37, 37, 37, 0.7) ;\n    display: flex;\n    align-items: center;\n    padding-left: 50px;\n}\n.heading{\n    color: white;\n    font-size: 4rem;\n}\n.searchBar{\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: none;\n    height: 2rem;\n    width: 30%;\n    padding: 0 20px;\n    font-size: 1rem;\n}\n.searchBar:hover{\n    background-color: rgb(221, 221, 221);\n}\n.sidebar{\n    box-shadow: 3px 3px 10px rgba(37, 37, 37, 0.7) ;\n    background-color: white;\n    padding:20px;\n    display: flex;\n    flex-direction: column;\n}\n.taskArea{\n    max-height: 700px;\n    overflow-y: auto;\n}\n.task{\n    box-sizing: border-box;\n    padding: 20px 40px;\n    margin: 20px;\n    box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.7);\n    text-align: center;\n    border-radius: 15px;\n    max-width: 500px;\n    overflow-x:hidden;\n}\n.task:hover{\n    background-color: rgb(236, 235, 235);\n    cursor: pointer;\n}\n.activeClass{\n    background-color: rgb(236, 235, 235);\n}\n.sideHeading{\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n    font-weight: lighter;\n    color: rgba(0, 0, 0, 0.5);\n}\n.createContainer{\n    margin-top: auto;\n}\n.createText{\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    padding:0 20px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n}\n.createText:hover{\n    background-color: rgb(221, 221, 221);\n}\n.createButton{\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(9, 177, 9);\n    border: none;\n    margin-top: 5px;\n    font-size: 1rem;\n    color: white;\n}\n.createButton:hover{\n    background-color: rgb(8, 153, 8);\n    cursor: pointer;\n    box-shadow: 0px 0px 3px black;\n}\n.deleteButton{\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(201, 9, 9);\n    border: none;\n    margin-top: 5px;\n    font-size: 1rem;\n    color: white;\n}\n.deleteButton:hover{\n    cursor: pointer;\n    background-color: rgb(173, 7, 7);\n    box-shadow: 0px 0px 3px black;\n}\n.mainContent{\n    box-sizing: border-box;\n    padding: 20px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));\n    grid-auto-rows: 30%;\n    gap:20px;\n    overflow-y: auto;\n}\n.card{\n    box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.7) ;\n    border-radius: 5px;\n\n}\n.addBtn{\n    position:fixed;\n    bottom: 50px;\n    right: 50px;\n    height: 4rem;\n    width: 4rem;\n    border: none;\n    border-radius: 50px;\n    background-color: rgb(9, 177, 9);\n    font-size: 3rem;\n    color: white;\n}\n.addBtn:hover{\n    cursor: pointer;\n    background-color: rgb(8, 153, 8);\n    box-shadow: 0px 0px 3px black;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,iCAAiC;AACrC;AACA;IACI,aAAa;IACb,cAAc;IACd,UAAU;IACV,MAAM;IACN,MAAM;IACN,YAAY;IACZ,WAAW;IACX,cAAc;IACd,oCAAoC;AACxC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,aAAa;IACb,UAAU;IACV,0CAA0C;IAC1C,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,mCAAmC;IACnC,kBAAkB;;AAEtB;AACA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;AAChC;AACA;IACI,uBAAuB;IACvB,0CAA0C;IAC1C,+CAA+C;IAC/C,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,eAAe;IACf,eAAe;AACnB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,+CAA+C;IAC/C,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,8CAA8C;IAC9C,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,oCAAoC;IACpC,eAAe;AACnB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,2CAA2C;IAC3C,oBAAoB;IACpB,yBAAyB;AAC7B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,sBAAsB;IACtB,WAAW;IACX,mBAAmB;IACnB,cAAc;IACd,cAAc;IACd,YAAY;IACZ,mCAAmC;AACvC;AACA;IACI,oCAAoC;AACxC;AACA;IACI,WAAW;IACX,mBAAmB;IACnB,cAAc;IACd,gCAAgC;IAChC,YAAY;IACZ,eAAe;IACf,eAAe;IACf,YAAY;AAChB;AACA;IACI,gCAAgC;IAChC,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,WAAW;IACX,mBAAmB;IACnB,cAAc;IACd,gCAAgC;IAChC,YAAY;IACZ,eAAe;IACf,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,gCAAgC;IAChC,6BAA6B;AACjC;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,2DAA2D;IAC3D,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;AACpB;AACA;IACI,+CAA+C;IAC/C,kBAAkB;;AAEtB;AACA;IACI,cAAc;IACd,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,gCAAgC;IAChC,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,gCAAgC;IAChC,6BAA6B;AACjC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');\n\n*{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n}\n.modal{\n    display: none;\n    position:fixed;\n    z-index: 1;\n    left:0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.1);\n}\n.modalContent{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    margin: 10% auto;\n    background-color: white;\n    padding: 20px;\n    width: 50%;\n    border: 3px solid rgba(255, 255, 255, 0.7);\n    box-shadow: 0px 3px 8px black;\n}\n.modalContent>input{\n    height: 3rem;\n    width: 50%;\n    margin: 10px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n    border-radius: 5px;\n\n}\n.content{\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 10fr;\n}\n.header{\n    grid-column: 1 / span 2;\n    background-color: rgba(85, 85, 221, 0.767);\n    box-shadow: 0px 3px 10px rgba(37, 37, 37, 0.7) ;\n    display: flex;\n    align-items: center;\n    padding-left: 50px;\n}\n.heading{\n    color: white;\n    font-size: 4rem;\n}\n.searchBar{\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: none;\n    height: 2rem;\n    width: 30%;\n    padding: 0 20px;\n    font-size: 1rem;\n}\n.searchBar:hover{\n    background-color: rgb(221, 221, 221);\n}\n.sidebar{\n    box-shadow: 3px 3px 10px rgba(37, 37, 37, 0.7) ;\n    background-color: white;\n    padding:20px;\n    display: flex;\n    flex-direction: column;\n}\n.taskArea{\n    max-height: 700px;\n    overflow-y: auto;\n}\n.task{\n    box-sizing: border-box;\n    padding: 20px 40px;\n    margin: 20px;\n    box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.7);\n    text-align: center;\n    border-radius: 15px;\n    max-width: 500px;\n    overflow-x:hidden;\n}\n.task:hover{\n    background-color: rgb(236, 235, 235);\n    cursor: pointer;\n}\n.activeClass{\n    background-color: rgb(236, 235, 235);\n}\n.sideHeading{\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n    font-weight: lighter;\n    color: rgba(0, 0, 0, 0.5);\n}\n.createContainer{\n    margin-top: auto;\n}\n.createText{\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    padding:0 20px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n}\n.createText:hover{\n    background-color: rgb(221, 221, 221);\n}\n.createButton{\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(9, 177, 9);\n    border: none;\n    margin-top: 5px;\n    font-size: 1rem;\n    color: white;\n}\n.createButton:hover{\n    background-color: rgb(8, 153, 8);\n    cursor: pointer;\n    box-shadow: 0px 0px 3px black;\n}\n.deleteButton{\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(201, 9, 9);\n    border: none;\n    margin-top: 5px;\n    font-size: 1rem;\n    color: white;\n}\n.deleteButton:hover{\n    cursor: pointer;\n    background-color: rgb(173, 7, 7);\n    box-shadow: 0px 0px 3px black;\n}\n.mainContent{\n    box-sizing: border-box;\n    padding: 20px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));\n    grid-auto-rows: 30%;\n    gap:20px;\n    overflow-y: auto;\n}\n.card{\n    box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.7) ;\n    border-radius: 5px;\n\n}\n.addBtn{\n    position:fixed;\n    bottom: 50px;\n    right: 50px;\n    height: 4rem;\n    width: 4rem;\n    border: none;\n    border-radius: 50px;\n    background-color: rgb(9, 177, 9);\n    font-size: 3rem;\n    color: white;\n}\n.addBtn:hover{\n    cursor: pointer;\n    background-color: rgb(8, 153, 8);\n    box-shadow: 0px 0px 3px black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add-todo.js":
/*!*************************!*\
  !*** ./src/add-todo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTodo": () => (/* binding */ displayTodo),
/* harmony export */   "remover": () => (/* binding */ remover),
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task */ "./src/create-task.js");

let todoArr = [];
let taskArr = [];
let activeId;

//factory constructor
const newTodo = (title,description,dueDate,priority,notes) => {
    return{title,description,dueDate,priority,notes,addTodo};
}
//adds obj to array
function addTodo(obj){
    const activeTask = document.querySelector(".activeClass");
    let id =parseInt(activeTask.id);
    if (activeId!=activeTask.id){todoArr = []; activeId=activeTask.id};
    if (taskArr[id]!=undefined){todoArr=taskArr[id];}
    todoArr.push(obj);
    taskArr[id]=todoArr;
    console.log(taskArr);
}
//creates new todo
function todo(title,description,dueDate,priority,notes){
    let obj = newTodo(title,description,dueDate,priority,notes);
    addTodo(obj);
    console.log(todoArr);
    displayTodo();
}
function displayTodo(){
    const activeTask = document.querySelector(".activeClass");
    let id =parseInt(activeTask.id);
    todoArr=taskArr[id];
    const container = document.querySelector(".mainContent");
    empty(container);
    if(todoArr!=undefined){
    for(let i=0;i<todoArr.length;i++){
        createCard(i); 
    }
}
}
function createCard(i){
    let obj = todoArr[i];
    let card = document.createElement("div");
    card.classList.add("card")
    card.setAttribute('id',i);
    let title = document.createElement("p");
    title.textContent=obj.title;
    appendChild(card,title)

}
function appendChild(card,title){
    const container = document.querySelector(".mainContent");
    container.appendChild(card)
    card.appendChild(title)
}
//removes cards from dom
function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
  }

  function remover(id){
    taskArr.splice(id,1);
    activeId=undefined;
    console.log(taskArr)
    const projects = document.querySelectorAll(".task");
    for(let i=0;i<projects.length;i++){
        projects[i].setAttribute("id",i)
    }
}



/***/ }),

/***/ "./src/clear-modal.js":
/*!****************************!*\
  !*** ./src/clear-modal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function clear(title,description,dueDate,priority,notes){
    title.value='';
    description.value='';
    dueDate.value='';
    priority.value='';
    notes.value='';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clear);

/***/ }),

/***/ "./src/create-modal.js":
/*!*****************************!*\
  !*** ./src/create-modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");
/* harmony import */ var _clear_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clear-modal */ "./src/clear-modal.js");


//creates hidden modal on page
function createModal(body){
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modalContent");
    ceateModalContent(modalContent,modal);
    modal.appendChild(modalContent);
    body.appendChild(modal);
}
//creates modal content
function ceateModalContent(modalContent,modal){
    const title = document.createElement("input");
    title.type="text";
    title.placeholder="Enter Title"
    const description = document.createElement("input");
    description.type="text";
    description.placeholder="Description"
    const dueDate = document.createElement("input");
    dueDate.type="date";
    const priority = document.createElement("input");
    priority.type="select";
    const notes = document.createElement("input");
    notes.type="text";
    const submit = document.createElement("button");
    submit.textContent="submit";
    const cancel = document.createElement("button");
    cancel.textContent="cancel";
    cancel.classList.add("closeModal");
    modalContent.appendChild(title);
    modalContent.appendChild(description);
    modalContent.appendChild(dueDate);
    modalContent.appendChild(priority);
    modalContent.appendChild(notes);
    modalContent.appendChild(submit);
    modalContent.appendChild(cancel);
    cancel.addEventListener('click', () => {
        modal.style.display='none';
        (0,_clear_modal__WEBPACK_IMPORTED_MODULE_1__["default"])(title,description,dueDate,priority,notes);
    })
    submit.addEventListener('click', () => {
        ;(0,_add_todo__WEBPACK_IMPORTED_MODULE_0__.todo)(title.value,description.value,dueDate.value,priority.value,notes.value);
        modal.style.display='none';
        (0,_clear_modal__WEBPACK_IMPORTED_MODULE_1__["default"])(title,description,dueDate,priority,notes);
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createModal);

/***/ }),

/***/ "./src/create-task.js":
/*!****************************!*\
  !*** ./src/create-task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");

function appendTask(area,title){
    if(checkTask(title)!=1){
        const task = document.createElement("div");
        task.classList.add("task");
        const taskTitle =document.createElement("h1");
        taskTitle.textContent=title;
        task.appendChild(taskTitle);
        area.appendChild(task);
        labelProjects();
        task.addEventListener("click", ()=>{taskActive(task)})
        clearTaskText();
    }
}
//checks if such project already exists
function checkTask(title){
    let a=0;
    const projects = document.querySelectorAll(".task");
    for(let i=0;i<projects.length;i++){
        if (projects[i].firstChild.textContent==title || title==""){a=1}
    }
    if(a==1){console.log(a);return 1;}
}
function clearTaskText(){
    const taskText = document.querySelector(".createText")
    taskText.value="";
}
function taskActive(task){
    const projects = document.querySelectorAll(".task");
    for(let i=0;i<projects.length;i++){
        if (projects[i].classList.contains('activeClass')){projects[i].classList.remove("activeClass");}
    }
    task.classList.add("activeClass");
    (0,_add_todo__WEBPACK_IMPORTED_MODULE_0__.displayTodo)();
}
function labelProjects(){
    const projects = document.querySelectorAll(".task");
    for(let i=0;i<projects.length;i++){
        projects[i].setAttribute("id",i)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendTask);


/***/ }),

/***/ "./src/delete-project.js":
/*!*******************************!*\
  !*** ./src/delete-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");

function deleteTask(){
const activeTask = document.querySelector(".activeClass")
let id = parseInt(activeTask.id);
(0,_add_todo__WEBPACK_IMPORTED_MODULE_0__.remover)(id);
// console.log("wha");
activeTask.remove();
const projects = document.querySelectorAll(".task");
for(let i=0;i<projects.length;i++){
    projects[i].setAttribute("id",i)
}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);

/***/ }),

/***/ "./src/main-dom.js":
/*!*************************!*\
  !*** ./src/main-dom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-modal */ "./src/create-modal.js");

const content = document.querySelector(".content");
function createHeader(){
    const header = document.createElement('div');
    header.classList.add("header");
    content.appendChild(header);
    headerContent(header);
}
function headerContent(header){
    const heading = document.createElement("h1");
    heading.textContent="Todo List";
    heading.classList.add("heading");
    header.appendChild(heading);
    const searchBar = document.createElement("input");
    searchBar.type="search";
    searchBar.placeholder="search";
    searchBar.classList.add("searchBar");
    header.appendChild(searchBar);
}

function createSidebar(){
    const sidebar = document.createElement('div');
    sidebar.classList.add("sidebar");
    content.appendChild(sidebar);
    sidebarHeading(sidebar);
    taskArea(sidebar);
    createProject(sidebar);

}

function sidebarHeading(sidebar){
    const sideHeading = document.createElement("h1");
    sideHeading.textContent="My Projects";
    sideHeading.classList.add("sideHeading");
    sidebar.appendChild(sideHeading);
}
function taskArea(sidebar){
    const area = document.createElement("div");
    area.classList.add("taskArea");
    sidebar.appendChild(area);
}

function createProject(sidebar){
    const createContainer = document.createElement("div");
    createContainer.classList.add("createContainer");
    const createText = document.createElement("input");
    createText.type="text";
    createText.placeholder="Project Name..";
    createText.classList.add("createText");
    createContainer.appendChild(createText);
    const createButton = document.createElement("button");
    createButton.textContent="Create Project";
    createButton.classList.add("createButton");
    const deleteButton = document.createElement("button");
    deleteButton.textContent="Delete Project";
    deleteButton.classList.add("deleteButton");
    createContainer.appendChild(createButton);
    createContainer.appendChild(deleteButton);
    sidebar.appendChild(createContainer);
}

function contentSpace(){
    const mainContent = document.createElement('div');
    mainContent.classList.add("mainContent");
    content.appendChild(mainContent);
    addButton(mainContent);
    (0,_create_modal__WEBPACK_IMPORTED_MODULE_0__["default"])(content);
}
function addButton(div){
    const addBtn = document.createElement("button");
    addBtn.classList.add("addBtn");
    addBtn.textContent="+";
    content.appendChild(addBtn);
}
function createMain(){
    createHeader();
    createSidebar();
    contentSpace();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-dom */ "./src/main-dom.js");
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task */ "./src/create-task.js");
/* harmony import */ var _delete_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-project */ "./src/delete-project.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");




(0,_main_dom__WEBPACK_IMPORTED_MODULE_0__["default"])();
const body = document.querySelector("body");
const title= document.querySelector(".createText");
const submit= document.querySelector(".createButton");
const area = document.querySelector(".taskArea");
const add = document.querySelector(".addBtn");
const modal = document.querySelector(".modal");
const deleteButton = document.querySelector(".deleteButton");
submit.addEventListener("click", () =>{ (0,_create_task__WEBPACK_IMPORTED_MODULE_1__["default"])(area,title.value);});
deleteButton.addEventListener('click', () =>{ (0,_delete_project__WEBPACK_IMPORTED_MODULE_2__["default"])()});
add.addEventListener("click", () =>{ modal.style.display='block';});
console.log("Hello World!")
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDZIQUE2SDtBQUM3SDtBQUNBLDRDQUE0QyxnQkFBZ0IsaUJBQWlCLHdDQUF3QyxHQUFHLFNBQVMsb0JBQW9CLHFCQUFxQixpQkFBaUIsYUFBYSxhQUFhLG1CQUFtQixrQkFBa0IscUJBQXFCLDJDQUEyQyxHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLHlCQUF5Qiw4QkFBOEIsMEJBQTBCLHVCQUF1Qiw4QkFBOEIsb0JBQW9CLGlCQUFpQixpREFBaUQsb0NBQW9DLEdBQUcsc0JBQXNCLG1CQUFtQixpQkFBaUIsbUJBQW1CLG1CQUFtQiwwQ0FBMEMseUJBQXlCLEtBQUssV0FBVyxvQkFBb0Isb0JBQW9CLHFDQUFxQyxtQ0FBbUMsR0FBRyxVQUFVLDhCQUE4QixpREFBaUQsc0RBQXNELG9CQUFvQiwwQkFBMEIseUJBQXlCLEdBQUcsV0FBVyxtQkFBbUIsc0JBQXNCLEdBQUcsYUFBYSx3QkFBd0IseUJBQXlCLDBCQUEwQixtQkFBbUIsbUJBQW1CLGlCQUFpQixzQkFBc0Isc0JBQXNCLEdBQUcsbUJBQW1CLDJDQUEyQyxHQUFHLFdBQVcsc0RBQXNELDhCQUE4QixtQkFBbUIsb0JBQW9CLDZCQUE2QixHQUFHLFlBQVksd0JBQXdCLHVCQUF1QixHQUFHLFFBQVEsNkJBQTZCLHlCQUF5QixtQkFBbUIscURBQXFELHlCQUF5QiwwQkFBMEIsdUJBQXVCLHdCQUF3QixHQUFHLGNBQWMsMkNBQTJDLHNCQUFzQixHQUFHLGVBQWUsMkNBQTJDLEdBQUcsZUFBZSxrREFBa0QsMkJBQTJCLGdDQUFnQyxHQUFHLG1CQUFtQix1QkFBdUIsR0FBRyxjQUFjLDZCQUE2QixrQkFBa0IsMEJBQTBCLHFCQUFxQixxQkFBcUIsbUJBQW1CLDBDQUEwQyxHQUFHLG9CQUFvQiwyQ0FBMkMsR0FBRyxnQkFBZ0Isa0JBQWtCLDBCQUEwQixxQkFBcUIsdUNBQXVDLG1CQUFtQixzQkFBc0Isc0JBQXNCLG1CQUFtQixHQUFHLHNCQUFzQix1Q0FBdUMsc0JBQXNCLG9DQUFvQyxHQUFHLGdCQUFnQixrQkFBa0IsMEJBQTBCLHFCQUFxQix1Q0FBdUMsbUJBQW1CLHNCQUFzQixzQkFBc0IsbUJBQW1CLEdBQUcsc0JBQXNCLHNCQUFzQix1Q0FBdUMsb0NBQW9DLEdBQUcsZUFBZSw2QkFBNkIsb0JBQW9CLG9CQUFvQixrRUFBa0UsMEJBQTBCLGVBQWUsdUJBQXVCLEdBQUcsUUFBUSxzREFBc0QseUJBQXlCLEtBQUssVUFBVSxxQkFBcUIsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQiwwQkFBMEIsdUNBQXVDLHNCQUFzQixtQkFBbUIsR0FBRyxnQkFBZ0Isc0JBQXNCLHVDQUF1QyxvQ0FBb0MsR0FBRyxPQUFPLHdGQUF3RixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxjQUFjLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSwrR0FBK0csTUFBTSxnQkFBZ0IsaUJBQWlCLHdDQUF3QyxHQUFHLFNBQVMsb0JBQW9CLHFCQUFxQixpQkFBaUIsYUFBYSxhQUFhLG1CQUFtQixrQkFBa0IscUJBQXFCLDJDQUEyQyxHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLHlCQUF5Qiw4QkFBOEIsMEJBQTBCLHVCQUF1Qiw4QkFBOEIsb0JBQW9CLGlCQUFpQixpREFBaUQsb0NBQW9DLEdBQUcsc0JBQXNCLG1CQUFtQixpQkFBaUIsbUJBQW1CLG1CQUFtQiwwQ0FBMEMseUJBQXlCLEtBQUssV0FBVyxvQkFBb0Isb0JBQW9CLHFDQUFxQyxtQ0FBbUMsR0FBRyxVQUFVLDhCQUE4QixpREFBaUQsc0RBQXNELG9CQUFvQiwwQkFBMEIseUJBQXlCLEdBQUcsV0FBVyxtQkFBbUIsc0JBQXNCLEdBQUcsYUFBYSx3QkFBd0IseUJBQXlCLDBCQUEwQixtQkFBbUIsbUJBQW1CLGlCQUFpQixzQkFBc0Isc0JBQXNCLEdBQUcsbUJBQW1CLDJDQUEyQyxHQUFHLFdBQVcsc0RBQXNELDhCQUE4QixtQkFBbUIsb0JBQW9CLDZCQUE2QixHQUFHLFlBQVksd0JBQXdCLHVCQUF1QixHQUFHLFFBQVEsNkJBQTZCLHlCQUF5QixtQkFBbUIscURBQXFELHlCQUF5QiwwQkFBMEIsdUJBQXVCLHdCQUF3QixHQUFHLGNBQWMsMkNBQTJDLHNCQUFzQixHQUFHLGVBQWUsMkNBQTJDLEdBQUcsZUFBZSxrREFBa0QsMkJBQTJCLGdDQUFnQyxHQUFHLG1CQUFtQix1QkFBdUIsR0FBRyxjQUFjLDZCQUE2QixrQkFBa0IsMEJBQTBCLHFCQUFxQixxQkFBcUIsbUJBQW1CLDBDQUEwQyxHQUFHLG9CQUFvQiwyQ0FBMkMsR0FBRyxnQkFBZ0Isa0JBQWtCLDBCQUEwQixxQkFBcUIsdUNBQXVDLG1CQUFtQixzQkFBc0Isc0JBQXNCLG1CQUFtQixHQUFHLHNCQUFzQix1Q0FBdUMsc0JBQXNCLG9DQUFvQyxHQUFHLGdCQUFnQixrQkFBa0IsMEJBQTBCLHFCQUFxQix1Q0FBdUMsbUJBQW1CLHNCQUFzQixzQkFBc0IsbUJBQW1CLEdBQUcsc0JBQXNCLHNCQUFzQix1Q0FBdUMsb0NBQW9DLEdBQUcsZUFBZSw2QkFBNkIsb0JBQW9CLG9CQUFvQixrRUFBa0UsMEJBQTBCLGVBQWUsdUJBQXVCLEdBQUcsUUFBUSxzREFBc0QseUJBQXlCLEtBQUssVUFBVSxxQkFBcUIsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQiwwQkFBMEIsdUNBQXVDLHNCQUFzQixtQkFBbUIsR0FBRyxnQkFBZ0Isc0JBQXNCLHVDQUF1QyxvQ0FBb0MsR0FBRyxtQkFBbUI7QUFDdnhTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBdUc7QUFDdkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlpRDtBQUN6RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZm9DO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQyxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDUHlCO0FBQ047QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQUs7QUFDYixLQUFLO0FBQ0w7QUFDQSxRQUFRLGdEQUFJO0FBQ1o7QUFDQSxRQUFRLHdEQUFLO0FBQ2IsS0FBSztBQUNMOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNqRDBCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpQkFBaUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDLG9FQUFvRTtBQUNwRTtBQUNBLGFBQWEsZUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEMsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQSxJQUFJLHNEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7OztBQzFDaUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0Esa0RBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ2IwQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7OztVQ2hGZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ0c7QUFDSTtBQUNkO0FBQzVCLHFEQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msd0RBQVUsb0JBQW9CO0FBQ3RFLDhDQUE4QywyREFBVSxHQUFHO0FBQzNELHFDQUFxQyw2QkFBNkI7QUFDbEUsMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2xlYXItbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS1tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG4ubW9kYWx7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OjA7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLm1vZGFsQ29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggYmxhY2s7XFxufVxcbi5tb2RhbENvbnRlbnQ+aW5wdXR7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggM3B4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxufVxcbi5jb250ZW50e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxufVxcbi5oZWFkZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg1LCA4NSwgMjIxLCAwLjc2Nyk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDM3LCAzNywgMzcsIDAuNykgO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxufVxcbi5oZWFkaW5ne1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuLnNlYXJjaEJhcntcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uc2VhcmNoQmFyOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxufVxcbi5zaWRlYmFye1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgzNywgMzcsIDM3LCAwLjcpIDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6MjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRhc2tBcmVhe1xcbiAgICBtYXgtaGVpZ2h0OiA3MDBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLnRhc2t7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgzNywgMzcsIDM3LCAwLjcpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xcbn1cXG4udGFzazpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM1LCAyMzUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hY3RpdmVDbGFzc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM1LCAyMzUpO1xcbn1cXG4uc2lkZUhlYWRpbmd7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4uY3JlYXRlQ29udGFpbmVye1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG4uY3JlYXRlVGV4dHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBwYWRkaW5nOjAgMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDNweCBibGFjaztcXG59XFxuLmNyZWF0ZVRleHQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcXG59XFxuLmNyZWF0ZUJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMTc3LCA5KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY3JlYXRlQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgMTUzLCA4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBibGFjaztcXG59XFxuLmRlbGV0ZUJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCA5LCA5KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZGVsZXRlQnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDcsIDcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBibGFjaztcXG59XFxuLm1haW5Db250ZW50e1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDMwJTtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5jYXJke1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgzNywgMzcsIDM3LCAwLjcpIDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbn1cXG4uYWRkQnRue1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgYm90dG9tOiA1MHB4O1xcbiAgICByaWdodDogNTBweDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMTc3LCA5KTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5hZGRCdG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDE1MywgOCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxVQUFVO0lBQ1YsTUFBTTtJQUNOLE1BQU07SUFDTixZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsVUFBVTtJQUNWLDBDQUEwQztJQUMxQyw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLCtDQUErQztJQUMvQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLCtDQUErQztJQUMvQyx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDhDQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLDJDQUEyQztJQUMzQyxvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxjQUFjO0lBQ2QsWUFBWTtJQUNaLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwrQ0FBK0M7SUFDL0Msa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG4ubW9kYWx7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OjA7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLm1vZGFsQ29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggYmxhY2s7XFxufVxcbi5tb2RhbENvbnRlbnQ+aW5wdXR7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggM3B4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxufVxcbi5jb250ZW50e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxufVxcbi5oZWFkZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg1LCA4NSwgMjIxLCAwLjc2Nyk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDM3LCAzNywgMzcsIDAuNykgO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxufVxcbi5oZWFkaW5ne1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuLnNlYXJjaEJhcntcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uc2VhcmNoQmFyOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxufVxcbi5zaWRlYmFye1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgzNywgMzcsIDM3LCAwLjcpIDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6MjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRhc2tBcmVhe1xcbiAgICBtYXgtaGVpZ2h0OiA3MDBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLnRhc2t7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgzNywgMzcsIDM3LCAwLjcpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xcbn1cXG4udGFzazpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM1LCAyMzUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hY3RpdmVDbGFzc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM1LCAyMzUpO1xcbn1cXG4uc2lkZUhlYWRpbmd7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4uY3JlYXRlQ29udGFpbmVye1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG4uY3JlYXRlVGV4dHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBwYWRkaW5nOjAgMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDNweCBibGFjaztcXG59XFxuLmNyZWF0ZVRleHQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcXG59XFxuLmNyZWF0ZUJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMTc3LCA5KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY3JlYXRlQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgMTUzLCA4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBibGFjaztcXG59XFxuLmRlbGV0ZUJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCA5LCA5KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZGVsZXRlQnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDcsIDcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBibGFjaztcXG59XFxuLm1haW5Db250ZW50e1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDMwJTtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5jYXJke1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgzNywgMzcsIDM3LCAwLjcpIDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbn1cXG4uYWRkQnRue1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgYm90dG9tOiA1MHB4O1xcbiAgICByaWdodDogNTBweDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMTc3LCA5KTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5hZGRCdG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDE1MywgOCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHRhc2tQdXNoIGZyb20gXCIuL2NyZWF0ZS10YXNrXCJcbmxldCB0b2RvQXJyID0gW107XG5sZXQgdGFza0FyciA9IFtdO1xubGV0IGFjdGl2ZUlkO1xuXG4vL2ZhY3RvcnkgY29uc3RydWN0b3JcbmNvbnN0IG5ld1RvZG8gPSAodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxub3RlcykgPT4ge1xuICAgIHJldHVybnt0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LG5vdGVzLGFkZFRvZG99O1xufVxuLy9hZGRzIG9iaiB0byBhcnJheVxuZnVuY3Rpb24gYWRkVG9kbyhvYmope1xuICAgIGNvbnN0IGFjdGl2ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUNsYXNzXCIpO1xuICAgIGxldCBpZCA9cGFyc2VJbnQoYWN0aXZlVGFzay5pZCk7XG4gICAgaWYgKGFjdGl2ZUlkIT1hY3RpdmVUYXNrLmlkKXt0b2RvQXJyID0gW107IGFjdGl2ZUlkPWFjdGl2ZVRhc2suaWR9O1xuICAgIGlmICh0YXNrQXJyW2lkXSE9dW5kZWZpbmVkKXt0b2RvQXJyPXRhc2tBcnJbaWRdO31cbiAgICB0b2RvQXJyLnB1c2gob2JqKTtcbiAgICB0YXNrQXJyW2lkXT10b2RvQXJyO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnIpO1xufVxuLy9jcmVhdGVzIG5ldyB0b2RvXG5mdW5jdGlvbiB0b2RvKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksbm90ZXMpe1xuICAgIGxldCBvYmogPSBuZXdUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksbm90ZXMpO1xuICAgIGFkZFRvZG8ob2JqKTtcbiAgICBjb25zb2xlLmxvZyh0b2RvQXJyKTtcbiAgICBkaXNwbGF5VG9kbygpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUb2RvKCl7XG4gICAgY29uc3QgYWN0aXZlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlQ2xhc3NcIik7XG4gICAgbGV0IGlkID1wYXJzZUludChhY3RpdmVUYXNrLmlkKTtcbiAgICB0b2RvQXJyPXRhc2tBcnJbaWRdO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRlbnRcIik7XG4gICAgZW1wdHkoY29udGFpbmVyKTtcbiAgICBpZih0b2RvQXJyIT11bmRlZmluZWQpe1xuICAgIGZvcihsZXQgaT0wO2k8dG9kb0Fyci5sZW5ndGg7aSsrKXtcbiAgICAgICAgY3JlYXRlQ2FyZChpKTsgXG4gICAgfVxufVxufVxuZnVuY3Rpb24gY3JlYXRlQ2FyZChpKXtcbiAgICBsZXQgb2JqID0gdG9kb0FycltpXTtcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKVxuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdpZCcsaSk7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQ9b2JqLnRpdGxlO1xuICAgIGFwcGVuZENoaWxkKGNhcmQsdGl0bGUpXG5cbn1cbmZ1bmN0aW9uIGFwcGVuZENoaWxkKGNhcmQsdGl0bGUpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRlbnRcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSlcbn1cbi8vcmVtb3ZlcyBjYXJkcyBmcm9tIGRvbVxuZnVuY3Rpb24gZW1wdHkoZWxlbWVudCkge1xuICAgIHdoaWxlKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICBlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZXIoaWQpe1xuICAgIHRhc2tBcnIuc3BsaWNlKGlkLDEpO1xuICAgIGFjdGl2ZUlkPXVuZGVmaW5lZDtcbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyKVxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICAgIGZvcihsZXQgaT0wO2k8cHJvamVjdHMubGVuZ3RoO2krKyl7XG4gICAgICAgIHByb2plY3RzW2ldLnNldEF0dHJpYnV0ZShcImlkXCIsaSlcbiAgICB9XG59XG5cbmV4cG9ydCB7dG9kbyxyZW1vdmVyfSIsImZ1bmN0aW9uIGNsZWFyKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksbm90ZXMpe1xuICAgIHRpdGxlLnZhbHVlPScnO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlPScnO1xuICAgIGR1ZURhdGUudmFsdWU9Jyc7XG4gICAgcHJpb3JpdHkudmFsdWU9Jyc7XG4gICAgbm90ZXMudmFsdWU9Jyc7XG59XG5leHBvcnQgZGVmYXVsdCBjbGVhciIsImltcG9ydCB7dG9kbyxyZW1vdmVyfSBmcm9tIFwiLi9hZGQtdG9kb1wiO1xuaW1wb3J0IGNsZWFyIGZyb20gXCIuL2NsZWFyLW1vZGFsXCI7XG4vL2NyZWF0ZXMgaGlkZGVuIG1vZGFsIG9uIHBhZ2VcbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKGJvZHkpe1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsQ29udGVudFwiKTtcbiAgICBjZWF0ZU1vZGFsQ29udGVudChtb2RhbENvbnRlbnQsbW9kYWwpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG59XG4vL2NyZWF0ZXMgbW9kYWwgY29udGVudFxuZnVuY3Rpb24gY2VhdGVNb2RhbENvbnRlbnQobW9kYWxDb250ZW50LG1vZGFsKXtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZS50eXBlPVwidGV4dFwiO1xuICAgIHRpdGxlLnBsYWNlaG9sZGVyPVwiRW50ZXIgVGl0bGVcIlxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRlc2NyaXB0aW9uLnR5cGU9XCJ0ZXh0XCI7XG4gICAgZGVzY3JpcHRpb24ucGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkdWVEYXRlLnR5cGU9XCJkYXRlXCI7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJpb3JpdHkudHlwZT1cInNlbGVjdFwiO1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5vdGVzLnR5cGU9XCJ0ZXh0XCI7XG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXQudGV4dENvbnRlbnQ9XCJzdWJtaXRcIjtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbC50ZXh0Q29udGVudD1cImNhbmNlbFwiO1xuICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKFwiY2xvc2VNb2RhbFwiKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xuICAgICAgICBjbGVhcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LG5vdGVzKTtcbiAgICB9KVxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9kbyh0aXRsZS52YWx1ZSxkZXNjcmlwdGlvbi52YWx1ZSxkdWVEYXRlLnZhbHVlLHByaW9yaXR5LnZhbHVlLG5vdGVzLnZhbHVlKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheT0nbm9uZSc7XG4gICAgICAgIGNsZWFyKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksbm90ZXMpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1vZGFsIiwiaW1wb3J0IHsgZGlzcGxheVRvZG8gfSBmcm9tIFwiLi9hZGQtdG9kb1wiO1xuZnVuY3Rpb24gYXBwZW5kVGFzayhhcmVhLHRpdGxlKXtcbiAgICBpZihjaGVja1Rhc2sodGl0bGUpIT0xKXtcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQ9dGl0bGU7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgYXJlYS5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgbGFiZWxQcm9qZWN0cygpO1xuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e3Rhc2tBY3RpdmUodGFzayl9KVxuICAgICAgICBjbGVhclRhc2tUZXh0KCk7XG4gICAgfVxufVxuLy9jaGVja3MgaWYgc3VjaCBwcm9qZWN0IGFscmVhZHkgZXhpc3RzXG5mdW5jdGlvbiBjaGVja1Rhc2sodGl0bGUpe1xuICAgIGxldCBhPTA7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gICAgZm9yKGxldCBpPTA7aTxwcm9qZWN0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ9PXRpdGxlIHx8IHRpdGxlPT1cIlwiKXthPTF9XG4gICAgfVxuICAgIGlmKGE9PTEpe2NvbnNvbGUubG9nKGEpO3JldHVybiAxO31cbn1cbmZ1bmN0aW9uIGNsZWFyVGFza1RleHQoKXtcbiAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlVGV4dFwiKVxuICAgIHRhc2tUZXh0LnZhbHVlPVwiXCI7XG59XG5mdW5jdGlvbiB0YXNrQWN0aXZlKHRhc2spe1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICAgIGZvcihsZXQgaT0wO2k8cHJvamVjdHMubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZUNsYXNzJykpe3Byb2plY3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVDbGFzc1wiKTt9XG4gICAgfVxuICAgIHRhc2suY2xhc3NMaXN0LmFkZChcImFjdGl2ZUNsYXNzXCIpO1xuICAgIGRpc3BsYXlUb2RvKCk7XG59XG5mdW5jdGlvbiBsYWJlbFByb2plY3RzKCl7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gICAgZm9yKGxldCBpPTA7aTxwcm9qZWN0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgcHJvamVjdHNbaV0uc2V0QXR0cmlidXRlKFwiaWRcIixpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwZW5kVGFza1xuIiwiaW1wb3J0IHsgdG9kbywgcmVtb3ZlciB9IGZyb20gXCIuL2FkZC10b2RvXCJcbmZ1bmN0aW9uIGRlbGV0ZVRhc2soKXtcbmNvbnN0IGFjdGl2ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUNsYXNzXCIpXG5sZXQgaWQgPSBwYXJzZUludChhY3RpdmVUYXNrLmlkKTtcbnJlbW92ZXIoaWQpO1xuLy8gY29uc29sZS5sb2coXCJ3aGFcIik7XG5hY3RpdmVUYXNrLnJlbW92ZSgpO1xuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG5mb3IobGV0IGk9MDtpPHByb2plY3RzLmxlbmd0aDtpKyspe1xuICAgIHByb2plY3RzW2ldLnNldEF0dHJpYnV0ZShcImlkXCIsaSlcbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlVGFzayIsImltcG9ydCBjcmVhdGVNb2RhbCBmcm9tIFwiLi9jcmVhdGUtbW9kYWxcIjtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgaGVhZGVyQ29udGVudChoZWFkZXIpO1xufVxuZnVuY3Rpb24gaGVhZGVyQ29udGVudChoZWFkZXIpe1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudD1cIlRvZG8gTGlzdFwiO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzZWFyY2hCYXIudHlwZT1cInNlYXJjaFwiO1xuICAgIHNlYXJjaEJhci5wbGFjZWhvbGRlcj1cInNlYXJjaFwiO1xuICAgIHNlYXJjaEJhci5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQmFyXCIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hCYXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFyKCl7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgICBzaWRlYmFySGVhZGluZyhzaWRlYmFyKTtcbiAgICB0YXNrQXJlYShzaWRlYmFyKTtcbiAgICBjcmVhdGVQcm9qZWN0KHNpZGViYXIpO1xuXG59XG5cbmZ1bmN0aW9uIHNpZGViYXJIZWFkaW5nKHNpZGViYXIpe1xuICAgIGNvbnN0IHNpZGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHNpZGVIZWFkaW5nLnRleHRDb250ZW50PVwiTXkgUHJvamVjdHNcIjtcbiAgICBzaWRlSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwic2lkZUhlYWRpbmdcIik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlSGVhZGluZyk7XG59XG5mdW5jdGlvbiB0YXNrQXJlYShzaWRlYmFyKXtcbiAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhcmVhLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQXJlYVwiKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFyZWEpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHNpZGViYXIpe1xuICAgIGNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3JlYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVDb250YWluZXJcIik7XG4gICAgY29uc3QgY3JlYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjcmVhdGVUZXh0LnR5cGU9XCJ0ZXh0XCI7XG4gICAgY3JlYXRlVGV4dC5wbGFjZWhvbGRlcj1cIlByb2plY3QgTmFtZS4uXCI7XG4gICAgY3JlYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlVGV4dFwiKTtcbiAgICBjcmVhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCk7XG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQ9XCJDcmVhdGUgUHJvamVjdFwiO1xuICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlQnV0dG9uXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50PVwiRGVsZXRlIFByb2plY3RcIjtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZUJ1dHRvblwiKTtcbiAgICBjcmVhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKTtcbiAgICBjcmVhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRTcGFjZSgpe1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW5Db250ZW50XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuICAgIGFkZEJ1dHRvbihtYWluQ29udGVudCk7XG4gICAgY3JlYXRlTW9kYWwoY29udGVudCk7XG59XG5mdW5jdGlvbiBhZGRCdXR0b24oZGl2KXtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkQnRuXCIpO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudD1cIitcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZEJ0bik7XG59XG5mdW5jdGlvbiBjcmVhdGVNYWluKCl7XG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgY3JlYXRlU2lkZWJhcigpO1xuICAgIGNvbnRlbnRTcGFjZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVNYWluIGZyb20gXCIuL21haW4tZG9tXCJcbmltcG9ydCBhcHBlbmRUYXNrIGZyb20gXCIuL2NyZWF0ZS10YXNrXCJcbmltcG9ydCBkZWxldGVUYXNrIGZyb20gXCIuL2RlbGV0ZS1wcm9qZWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCJcbmNyZWF0ZU1haW4oKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IHRpdGxlPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZVRleHRcIik7XG5jb25zdCBzdWJtaXQ9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlQnV0dG9uXCIpO1xuY29uc3QgYXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0FyZWFcIik7XG5jb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZEJ0blwiKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbmNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlQnV0dG9uXCIpO1xuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PnsgYXBwZW5kVGFzayhhcmVhLHRpdGxlLnZhbHVlKTt9KTtcbmRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+eyBkZWxldGVUYXNrKCl9KTtcbmFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57IG1vZGFsLnN0eWxlLmRpc3BsYXk9J2Jsb2NrJzt9KTtcbmNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGQhXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9