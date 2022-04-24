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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n}\n.modal{\n    display: none;\n    position:fixed;\n    z-index: 1;\n    left:0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.1);\n}\n.modalContent{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    margin: 10% auto;\n    background-color: white;\n    padding: 20px;\n    width: 50%;\n    border: 3px solid rgba(255, 255, 255, 0.7);\n    box-shadow: 0px 3px 8px black;\n}\n.modalContent>input{\n    height: 4rem;\n    width: 50%;\n    margin: 10px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 20px;\n\n}\nselect{\n    height: 3rem;\n    width: 50%;\n    margin: 10px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 0 20px;\n    background-color: white;\n    font-size: 1rem;\n\n}\ntextarea{\n    height: 6rem;\n    width: 50%;\n    margin: 10px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 20px;\n    font-size: 1rem;\n\n}\n.buttonContainer{\n    display: flex;\n}\n.buttonContainer>button{\n    margin:20px;\n    height: 3rem;\n    width: 10rem;\n    border-radius: 30px;\n    border:none;\n    font-size: 1rem;\n    color: white;\n}\n.buttonContainer>button:hover{\n    box-shadow: 0px 0px 3px black;\n    filter: brightness(85%);\n    cursor: pointer;\n}\n.modalSubmit{\n    background-color: rgb(9, 177, 9);\n}\n.modalCancel{\n    background-color: rgb(201, 9, 9);\n}\n.content{\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 10fr;\n}\n.header{\n    grid-column: 1 / span 2;\n    background-color: rgba(85, 85, 221, 0.767);\n    box-shadow: 0px 3px 10px rgba(37, 37, 37, 0.7) ;\n    display: flex;\n    align-items: center;\n    padding-left: 50px;\n}\n.heading{\n    color: white;\n    font-size: 4rem;\n}\n.searchBar{\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: none;\n    height: 2rem;\n    width: 30%;\n    padding: 0 20px;\n    font-size: 1rem;\n}\n.searchBar:hover{\n    background-color: rgb(221, 221, 221);\n}\n.sidebar{\n    box-shadow: 3px 3px 10px rgba(37, 37, 37, 0.7) ;\n    background-color: white;\n    padding:20px;\n    display: flex;\n    flex-direction: column;\n}\n.taskArea{\n    max-height: 700px;\n    overflow-y: auto;\n}\n.task{\n    box-sizing: border-box;\n    padding: 20px 40px;\n    margin: 20px;\n    box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.7);\n    text-align: center;\n    border-radius: 15px;\n    max-width: 500px;\n    overflow-x:hidden;\n}\n.task:hover{\n    background-color: rgb(236, 235, 235);\n    cursor: pointer;\n}\n.activeClass{\n    background-color: rgb(236, 235, 235);\n}\n.sideHeading{\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n    font-weight: lighter;\n    color: rgba(0, 0, 0, 0.5);\n}\n.createContainer{\n    margin-top: auto;\n}\n.createText{\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    padding:0 20px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n}\n.createText:hover{\n    background-color: rgb(221, 221, 221);\n}\n.createButton{\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(9, 177, 9);\n    border: none;\n    margin-top: 5px;\n    font-size: 1rem;\n    color: white;\n}\n.createButton:hover{\n    background-color: rgb(8, 153, 8);\n    cursor: pointer;\n    box-shadow: 0px 0px 3px black;\n}\n.deleteButton{\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(201, 9, 9);\n    border: none;\n    margin-top: 5px;\n    font-size: 1rem;\n    color: white;\n}\n.deleteButton:hover{\n    cursor: pointer;\n    background-color: rgb(173, 7, 7);\n    box-shadow: 0px 0px 3px black;\n}\n.mainContent{\n    box-sizing: border-box;\n    display: grid;\n    padding: 20px;\n    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));\n    grid-template-rows: 50px;\n    grid-auto-rows: 30%;\n    gap:20px;\n    overflow-y: auto;\n    height: 100%;\n}\n.contentHeading{\n    grid-column: 1 / span 4;\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n    font-weight: lighter;\n    color: rgba(0, 0, 0, 0.5);\n}\n.card{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.7) ;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 20px;\n\n}\n.card:hover{\n    background-color: rgb(236, 235, 235);\n    cursor: pointer;\n}\n.card>h1{\n    font-size: 3rem;\n}\n.card>p{\n    margin-right: auto;\n}\n.deleteCard{\n    margin-top: auto;\n    margin-left: auto;\n    width: 20%;\n    min-width: 100px;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(201, 9, 9);\n    border: none;\n    color: white;\n}\n.deleteCard:hover{\n    cursor: pointer;\n    background-color: rgb(173, 7, 7);\n    box-shadow: 0px 0px 3px black;\n}\n.addBtn{\n    position:fixed;\n    bottom: 50px;\n    right: 50px;\n    height: 4rem;\n    width: 4rem;\n    border: none;\n    border-radius: 50px;\n    background-color: rgb(9, 177, 9);\n    font-size: 3rem;\n    color: white;\n}\n.addBtn:hover{\n    cursor: pointer;\n    background-color: rgb(8, 153, 8);\n    box-shadow: 0px 0px 3px black;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');\n\n*{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n}\n.modal{\n    display: none;\n    position:fixed;\n    z-index: 1;\n    left:0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.1);\n}\n.modalContent{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    margin: 10% auto;\n    background-color: white;\n    padding: 20px;\n    width: 50%;\n    border: 3px solid rgba(255, 255, 255, 0.7);\n    box-shadow: 0px 3px 8px black;\n}\n.modalContent>input{\n    height: 4rem;\n    width: 50%;\n    margin: 10px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 20px;\n\n}\nselect{\n    height: 3rem;\n    width: 50%;\n    margin: 10px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 0 20px;\n    background-color: white;\n    font-size: 1rem;\n\n}\ntextarea{\n    height: 6rem;\n    width: 50%;\n    margin: 10px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 20px;\n    font-size: 1rem;\n\n}\n.buttonContainer{\n    display: flex;\n}\n.buttonContainer>button{\n    margin:20px;\n    height: 3rem;\n    width: 10rem;\n    border-radius: 30px;\n    border:none;\n    font-size: 1rem;\n    color: white;\n}\n.buttonContainer>button:hover{\n    box-shadow: 0px 0px 3px black;\n    filter: brightness(85%);\n    cursor: pointer;\n}\n.modalSubmit{\n    background-color: rgb(9, 177, 9);\n}\n.modalCancel{\n    background-color: rgb(201, 9, 9);\n}\n.content{\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 10fr;\n}\n.header{\n    grid-column: 1 / span 2;\n    background-color: rgba(85, 85, 221, 0.767);\n    box-shadow: 0px 3px 10px rgba(37, 37, 37, 0.7) ;\n    display: flex;\n    align-items: center;\n    padding-left: 50px;\n}\n.heading{\n    color: white;\n    font-size: 4rem;\n}\n.searchBar{\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: none;\n    height: 2rem;\n    width: 30%;\n    padding: 0 20px;\n    font-size: 1rem;\n}\n.searchBar:hover{\n    background-color: rgb(221, 221, 221);\n}\n.sidebar{\n    box-shadow: 3px 3px 10px rgba(37, 37, 37, 0.7) ;\n    background-color: white;\n    padding:20px;\n    display: flex;\n    flex-direction: column;\n}\n.taskArea{\n    max-height: 700px;\n    overflow-y: auto;\n}\n.task{\n    box-sizing: border-box;\n    padding: 20px 40px;\n    margin: 20px;\n    box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.7);\n    text-align: center;\n    border-radius: 15px;\n    max-width: 500px;\n    overflow-x:hidden;\n}\n.task:hover{\n    background-color: rgb(236, 235, 235);\n    cursor: pointer;\n}\n.activeClass{\n    background-color: rgb(236, 235, 235);\n}\n.sideHeading{\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n    font-weight: lighter;\n    color: rgba(0, 0, 0, 0.5);\n}\n.createContainer{\n    margin-top: auto;\n}\n.createText{\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    padding:0 20px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n}\n.createText:hover{\n    background-color: rgb(221, 221, 221);\n}\n.createButton{\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(9, 177, 9);\n    border: none;\n    margin-top: 5px;\n    font-size: 1rem;\n    color: white;\n}\n.createButton:hover{\n    background-color: rgb(8, 153, 8);\n    cursor: pointer;\n    box-shadow: 0px 0px 3px black;\n}\n.deleteButton{\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(201, 9, 9);\n    border: none;\n    margin-top: 5px;\n    font-size: 1rem;\n    color: white;\n}\n.deleteButton:hover{\n    cursor: pointer;\n    background-color: rgb(173, 7, 7);\n    box-shadow: 0px 0px 3px black;\n}\n.mainContent{\n    box-sizing: border-box;\n    display: grid;\n    padding: 20px;\n    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));\n    grid-template-rows: 50px;\n    grid-auto-rows: 30%;\n    gap:20px;\n    overflow-y: auto;\n    height: 100%;\n}\n.contentHeading{\n    grid-column: 1 / span 4;\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n    font-weight: lighter;\n    color: rgba(0, 0, 0, 0.5);\n}\n.card{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.7) ;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 20px;\n\n}\n.card:hover{\n    background-color: rgb(236, 235, 235);\n    cursor: pointer;\n}\n.card>h1{\n    font-size: 3rem;\n}\n.card>p{\n    margin-right: auto;\n}\n.deleteCard{\n    margin-top: auto;\n    margin-left: auto;\n    width: 20%;\n    min-width: 100px;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(201, 9, 9);\n    border: none;\n    color: white;\n}\n.deleteCard:hover{\n    cursor: pointer;\n    background-color: rgb(173, 7, 7);\n    box-shadow: 0px 0px 3px black;\n}\n.addBtn{\n    position:fixed;\n    bottom: 50px;\n    right: 50px;\n    height: 4rem;\n    width: 4rem;\n    border: none;\n    border-radius: 50px;\n    background-color: rgb(9, 177, 9);\n    font-size: 3rem;\n    color: white;\n}\n.addBtn:hover{\n    cursor: pointer;\n    background-color: rgb(8, 153, 8);\n    box-shadow: 0px 0px 3px black;\n}"],"sourceRoot":""}]);
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
if(JSON.parse(localStorage.getItem("projectArray"))!=null){
taskArr=JSON.parse(localStorage.getItem("projectArray"));
}
let activeId;

//factory constructor
const newTodo = (title,description,dueDate,priority,notes) => {
    return{title,description,dueDate,priority,notes,addTodo};
}
//adds obj to array
function addTodo(obj){
    console.log(taskArr);
    const activeTask = document.querySelector(".activeClass");
    const activeCard = document.querySelector(".activeTask");
    let id =parseInt(activeTask.id);
    if (activeId!=activeTask.id){todoArr = []; activeId=activeTask.id};
    if (taskArr[id]!=undefined){todoArr=taskArr[id];}
    if(activeCard!=undefined){
        todoArr[parseInt(activeCard.id)]=obj;
    }
    else{
    todoArr.push(obj);
    }
    taskArr[id]=todoArr;
    localStorage.setItem('projectArray', JSON.stringify(taskArr));
}
//creates new todo
function todo(title,description,dueDate,priority,notes){
    let obj = newTodo(title,description,dueDate,priority,notes);
    addTodo(obj);
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
//creates task cards
function createCard(i){
    let obj = todoArr[i];
    let card = document.createElement("div");
    card.classList.add("card")
    card.setAttribute('id',i);
    let title = document.createElement("h1");
    title.textContent=obj.title;
    let description = document.createElement("p");
    description.textContent=obj.description;
    let priority = obj.priority;
    let deleteCard = document.createElement("button")
    deleteCard.classList.add("deleteCard");
    deleteCard.textContent="Delete";
    deleteCard.addEventListener("click", ()=>{ cardRemove(card);})
    let date = document.createElement("p");
    date.textContent=`Due Date ${obj.dueDate}`;
    setPriority(card,priority);
    card.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        const tasks = document.querySelectorAll(".card");
        for(let i=0;i<tasks.length;i++){
            if (tasks[i].classList.contains('activeTask')){tasks[i].classList.remove("activeTask");}
        }
        card.classList.add("activeTask");
        populateModal(parseInt(card.id));
        modal.style.display="block";

    })
    appendChild(card,title,description,date,deleteCard);


}
function populateModal(id){
    const active = document.querySelector(".activeClass");
    const projId = parseInt(active.id);
    const title = document.querySelector(".title");
    title.value=taskArr[projId][id].title;
    const description = document.querySelector(".description");
    description.value = taskArr[projId][id].description;
    const Date = document.querySelector(".dueDate");
    Date.value = taskArr[projId][id].dueDate;
    const priority = document.querySelector(".priority");
    priority.value = taskArr[projId][id].priority;
    const notes = document.querySelector(".notes");
    notes.value = taskArr[projId][id].notes;
}
function cardRemove(card,e){
    if (!e) var e = window.event
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    const activeTask = document.querySelector(".activeClass");
    const cards = document.querySelectorAll(".card");
    for(let i=0;i<todoArr.length;i++){
        cards[i].setAttribute("id",i);
    }
    let i = parseInt(card.id);;
    let id = parseInt(activeTask.id);
    taskArr[id].splice(i,1);
    localStorage.setItem('projectArray', JSON.stringify(taskArr));
    todoArr
    card.remove();
}
//sets priority color on cards
function setPriority(card, priority){
    if (priority=="High"){card.style.borderLeft="10px solid rgb(201, 9, 9)"}
    else if (priority=="Medium"){card.style.borderLeft="10px solid yellow"}
    else{card.style.borderLeft="10px solid rgb(8, 153, 8)"}
}
function appendChild(card,title,description,date,deleteCard){
    const container = document.querySelector(".mainContent");
    container.appendChild(card)
    card.appendChild(title)
    card.appendChild(description)
    card.appendChild(date)
    card.appendChild(deleteCard)
}
//removes cards from dom
function empty(element) {
    while(element.childNodes.length>1) {
       element.removeChild(element.lastChild);
    }
  }

function remover(id){
    taskArr.splice(id,1);
    activeId=undefined;
    console.log(taskArr);
    const container = document.querySelector(".mainContent");
    empty(container);
    localStorage.setItem('projectArray', JSON.stringify(taskArr));
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
    const activeTask = document.querySelector(".activeTask");
    if(activeTask!=undefined){
        activeTask.classList.remove("activeTask");
    }
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
    const modalContent = document.createElement("form");
    modalContent.classList.add("modalContent");
    ceateModalContent(modalContent,modal);
    modal.appendChild(modalContent);
    body.appendChild(modal);
}
//creates modal content
function ceateModalContent(modalContent,modal){
    var array = ["High","Medium","Low"];
    const title = document.createElement("input");
    title.type="text";
    title.placeholder="Enter Title";
    title.classList.add("title");
    title.setAttribute("required", "");
    const description = document.createElement("input");
    description.type="text";
    description.placeholder="Description";
    description.required=true;
    description.classList.add("description");
    const dueDate = document.createElement("input");
    dueDate.type="date";
    dueDate.setAttribute("required", "");
    dueDate.classList.add("dueDate");
    const priority = document.createElement("select");
    priority.id = "priority";
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        priority.appendChild(option);
    }
    priority.required="true";
    priority.classList.add("priority");
    const notes = document.createElement("textarea");
    notes.placeholder="Take Notes..";
    notes.classList.add("notes");
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer")
    const submit = document.createElement("button");
    submit.textContent="submit";
    submit.classList.add("modalSubmit");
    const cancel = document.createElement("button");
    cancel.textContent="cancel";
    cancel.classList.add("modalCancel");
    cancel.classList.add("closeModal");
    buttonContainer.appendChild(submit);
    buttonContainer.appendChild(cancel);
    modalContent.appendChild(title);
    modalContent.appendChild(description);
    modalContent.appendChild(dueDate);
    modalContent.appendChild(priority);
    modalContent.appendChild(notes);
    modalContent.appendChild(buttonContainer);
    cancel.addEventListener('click', () => {
        modal.style.display='none';
        (0,_clear_modal__WEBPACK_IMPORTED_MODULE_1__["default"])(title,description,dueDate,priority,notes);
    })
    submit.addEventListener('click', () => {
        if(title.value!="" && description.value!="" && dueDate.value!="" && priority.value!=""){
        (0,_add_todo__WEBPACK_IMPORTED_MODULE_0__.todo)(title.value,description.value,dueDate.value,priority.value,notes.value);
        modal.style.display='none';
        (0,_clear_modal__WEBPACK_IMPORTED_MODULE_1__["default"])(title,description,dueDate,priority,notes);
        }
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
/* harmony export */   "appendTask": () => (/* binding */ appendTask),
/* harmony export */   "reloadProjects": () => (/* binding */ reloadProjects),
/* harmony export */   "reloadRemover": () => (/* binding */ reloadRemover)
/* harmony export */ });
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");

let projectArr = []; 
if (JSON.parse(localStorage.getItem("projectDisplay"))!=null){
    projectArr=JSON.parse(localStorage.getItem("projectDisplay"));
}
function reloadProjects(){
    console.log(typeof(projectArr))
    const area = document.querySelector(".taskArea");
    for(let i=0;i<projectArr.length;i++){
        appendTask(area,projectArr[i]);
    }
}
function reloadRemover(id){
    projectArr.splice(id,1);
    localStorage.setItem('projectDisplay', JSON.stringify(projectArr));
}
//appends projects to project area
function appendTask(area,title){
    if(checkTask(title)!=1){
        if(!projectArr.includes(title)){
            projectArr.push(title);
            localStorage.setItem('projectDisplay', JSON.stringify(projectArr));
        }
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
//clears task text
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
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task */ "./src/create-task.js");


function deleteTask(){
const activeTask = document.querySelector(".activeClass")
let id = parseInt(activeTask.id);
(0,_add_todo__WEBPACK_IMPORTED_MODULE_0__.remover)(id);
(0,_create_task__WEBPACK_IMPORTED_MODULE_1__.reloadRemover)(id);
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
    const contentHeading = document.createElement("h1");
    contentHeading.textContent="My Tasks";
    contentHeading.classList.add("contentHeading");
    mainContent.classList.add("mainContent");
    mainContent.appendChild(contentHeading);
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
(0,_create_task__WEBPACK_IMPORTED_MODULE_1__.reloadProjects)();
const body = document.querySelector("body");
const title= document.querySelector(".createText");
const submit= document.querySelector(".createButton");
const area = document.querySelector(".taskArea");
const add = document.querySelector(".addBtn");
const modal = document.querySelector(".modal");
const deleteButton = document.querySelector(".deleteButton");
submit.addEventListener("click", () =>{ (0,_create_task__WEBPACK_IMPORTED_MODULE_1__.appendTask)(area,title.value);});
deleteButton.addEventListener('click', () =>{ (0,_delete_project__WEBPACK_IMPORTED_MODULE_2__["default"])()});
add.addEventListener("click", () =>{ modal.style.display='block';});
console.log("Hello World!")
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBbUIsR0FBRyxnQkFBZ0Isc0JBQXNCLHVDQUF1QyxvQ0FBb0MsR0FBRyxPQUFPLHdGQUF3RixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFX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Tm1DO0FBQ29CO0FBQ2I7QUFDZDtBQUM1QixxREFBVTtBQUNWLDREQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msd0RBQVUsb0JBQW9CO0FBQ3RFLDhDQUE4QywyREFBVSxHQUFHO0FBQzNELHFDQUFxQyw2QkFBNkI7QUFDbEUsMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2xlYXItbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS1tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG4ubW9kYWx7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OjA7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLm1vZGFsQ29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggYmxhY2s7XFxufVxcbi5tb2RhbENvbnRlbnQ+aW5wdXR7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggM3B4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxufVxcbnNlbGVjdHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAzcHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbn1cXG50ZXh0YXJlYXtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAzcHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbn1cXG4uYnV0dG9uQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYnV0dG9uQ29udGFpbmVyPmJ1dHRvbntcXG4gICAgbWFyZ2luOjIwcHg7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5idXR0b25Db250YWluZXI+YnV0dG9uOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBibGFjaztcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vZGFsU3VibWl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMTc3LCA5KTtcXG59XFxuLm1vZGFsQ2FuY2Vse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCA5LCA5KTtcXG59XFxuLmNvbnRlbnR7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG59XFxuLmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODUsIDg1LCAyMjEsIDAuNzY3KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IHJnYmEoMzcsIDM3LCAzNywgMC43KSA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG59XFxuLmhlYWRpbmd7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG4uc2VhcmNoQmFye1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbi5zZWFyY2hCYXI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcXG59XFxuLnNpZGViYXJ7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDM3LCAzNywgMzcsIDAuNykgO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzoyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4udGFza0FyZWF7XFxuICAgIG1heC1oZWlnaHQ6IDcwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4udGFza3tcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDM3LCAzNywgMzcsIDAuNyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XFxufVxcbi50YXNrOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzUsIDIzNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFjdGl2ZUNsYXNze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzUsIDIzNSk7XFxufVxcbi5zaWRlSGVhZGluZ3tcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbi5jcmVhdGVDb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbi5jcmVhdGVUZXh0e1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHBhZGRpbmc6MCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggM3B4IGJsYWNrO1xcbn1cXG4uY3JlYXRlVGV4dDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xcbn1cXG4uY3JlYXRlQnV0dG9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCAxNzcsIDkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5jcmVhdGVCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCAxNTMsIDgpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xcbn1cXG4uZGVsZXRlQnV0dG9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDksIDkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5kZWxldGVCdXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgNywgNyk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xcbn1cXG4ubWFpbkNvbnRlbnR7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHg7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAzMCU7XFxuICAgIGdhcDoyMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250ZW50SGVhZGluZ3tcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4uY2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMzcsIDM3LCAzNywgMC43KSA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG59XFxuLmNhcmQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNSwgMjM1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FyZD5oMXtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4uY2FyZD5we1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5kZWxldGVDYXJke1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDksIDkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmRlbGV0ZUNhcmQ6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgNywgNyk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xcbn1cXG4uYWRkQnRue1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgYm90dG9tOiA1MHB4O1xcbiAgICByaWdodDogNTBweDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMTc3LCA5KTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5hZGRCdG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDE1MywgOCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxVQUFVO0lBQ1YsTUFBTTtJQUNOLE1BQU07SUFDTixZ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LDJEQUEyRDtJQUMzRCx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDJDQUEyQztJQUMzQyxvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwrQ0FBK0M7SUFDL0Msa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG4ubW9kYWx7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OjA7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLm1vZGFsQ29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggYmxhY2s7XFxufVxcbi5tb2RhbENvbnRlbnQ+aW5wdXR7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggM3B4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxufVxcbnNlbGVjdHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAzcHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbn1cXG50ZXh0YXJlYXtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAzcHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbn1cXG4uYnV0dG9uQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYnV0dG9uQ29udGFpbmVyPmJ1dHRvbntcXG4gICAgbWFyZ2luOjIwcHg7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5idXR0b25Db250YWluZXI+YnV0dG9uOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBibGFjaztcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vZGFsU3VibWl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMTc3LCA5KTtcXG59XFxuLm1vZGFsQ2FuY2Vse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCA5LCA5KTtcXG59XFxuLmNvbnRlbnR7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG59XFxuLmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODUsIDg1LCAyMjEsIDAuNzY3KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IHJnYmEoMzcsIDM3LCAzNywgMC43KSA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG59XFxuLmhlYWRpbmd7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG4uc2VhcmNoQmFye1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbi5zZWFyY2hCYXI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcXG59XFxuLnNpZGViYXJ7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDM3LCAzNywgMzcsIDAuNykgO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzoyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4udGFza0FyZWF7XFxuICAgIG1heC1oZWlnaHQ6IDcwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4udGFza3tcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDM3LCAzNywgMzcsIDAuNyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XFxufVxcbi50YXNrOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzUsIDIzNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFjdGl2ZUNsYXNze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzUsIDIzNSk7XFxufVxcbi5zaWRlSGVhZGluZ3tcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbi5jcmVhdGVDb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbi5jcmVhdGVUZXh0e1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHBhZGRpbmc6MCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggM3B4IGJsYWNrO1xcbn1cXG4uY3JlYXRlVGV4dDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xcbn1cXG4uY3JlYXRlQnV0dG9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCAxNzcsIDkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5jcmVhdGVCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCAxNTMsIDgpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xcbn1cXG4uZGVsZXRlQnV0dG9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDksIDkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5kZWxldGVCdXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgNywgNyk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xcbn1cXG4ubWFpbkNvbnRlbnR7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHg7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAzMCU7XFxuICAgIGdhcDoyMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250ZW50SGVhZGluZ3tcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4uY2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMzcsIDM3LCAzNywgMC43KSA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG59XFxuLmNhcmQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNSwgMjM1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FyZD5oMXtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4uY2FyZD5we1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5kZWxldGVDYXJke1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDksIDkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmRlbGV0ZUNhcmQ6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgNywgNyk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xcbn1cXG4uYWRkQnRue1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgYm90dG9tOiA1MHB4O1xcbiAgICByaWdodDogNTBweDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMTc3LCA5KTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5hZGRCdG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDE1MywgOCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHRhc2tQdXNoIGZyb20gXCIuL2NyZWF0ZS10YXNrXCJcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tICdkYXRlLWZucydcbmxldCB0b2RvQXJyID0gW107XG5sZXQgdGFza0FyciA9IFtdO1xuaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RBcnJheVwiKSkhPW51bGwpe1xudGFza0Fycj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEFycmF5XCIpKTtcbn1cbmxldCBhY3RpdmVJZDtcblxuLy9mYWN0b3J5IGNvbnN0cnVjdG9yXG5jb25zdCBuZXdUb2RvID0gKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksbm90ZXMpID0+IHtcbiAgICByZXR1cm57dGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxub3RlcyxhZGRUb2RvfTtcbn1cbi8vYWRkcyBvYmogdG8gYXJyYXlcbmZ1bmN0aW9uIGFkZFRvZG8ob2JqKXtcbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyKTtcbiAgICBjb25zdCBhY3RpdmVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVDbGFzc1wiKTtcbiAgICBjb25zdCBhY3RpdmVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVUYXNrXCIpO1xuICAgIGxldCBpZCA9cGFyc2VJbnQoYWN0aXZlVGFzay5pZCk7XG4gICAgaWYgKGFjdGl2ZUlkIT1hY3RpdmVUYXNrLmlkKXt0b2RvQXJyID0gW107IGFjdGl2ZUlkPWFjdGl2ZVRhc2suaWR9O1xuICAgIGlmICh0YXNrQXJyW2lkXSE9dW5kZWZpbmVkKXt0b2RvQXJyPXRhc2tBcnJbaWRdO31cbiAgICBpZihhY3RpdmVDYXJkIT11bmRlZmluZWQpe1xuICAgICAgICB0b2RvQXJyW3BhcnNlSW50KGFjdGl2ZUNhcmQuaWQpXT1vYmo7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgdG9kb0Fyci5wdXNoKG9iaik7XG4gICAgfVxuICAgIHRhc2tBcnJbaWRdPXRvZG9BcnI7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RBcnJheScsIEpTT04uc3RyaW5naWZ5KHRhc2tBcnIpKTtcbn1cbi8vY3JlYXRlcyBuZXcgdG9kb1xuZnVuY3Rpb24gdG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LG5vdGVzKXtcbiAgICBsZXQgb2JqID0gbmV3VG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LG5vdGVzKTtcbiAgICBhZGRUb2RvKG9iaik7XG4gICAgZGlzcGxheVRvZG8oKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VG9kbygpe1xuICAgIGNvbnN0IGFjdGl2ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUNsYXNzXCIpO1xuICAgIGxldCBpZCA9cGFyc2VJbnQoYWN0aXZlVGFzay5pZCk7XG4gICAgdG9kb0Fycj10YXNrQXJyW2lkXTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250ZW50XCIpO1xuICAgIGVtcHR5KGNvbnRhaW5lcik7XG4gICAgaWYodG9kb0FyciE9dW5kZWZpbmVkKXtcbiAgICBmb3IobGV0IGk9MDtpPHRvZG9BcnIubGVuZ3RoO2krKyl7XG4gICAgICAgIGNyZWF0ZUNhcmQoaSk7IFxuICAgIH1cbn1cbn1cbi8vY3JlYXRlcyB0YXNrIGNhcmRzXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGkpe1xuICAgIGxldCBvYmogPSB0b2RvQXJyW2ldO1xuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpXG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJyxpKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQ9b2JqLnRpdGxlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50PW9iai5kZXNjcmlwdGlvbjtcbiAgICBsZXQgcHJpb3JpdHkgPSBvYmoucHJpb3JpdHk7XG4gICAgbGV0IGRlbGV0ZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgZGVsZXRlQ2FyZC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlQ2FyZFwiKTtcbiAgICBkZWxldGVDYXJkLnRleHRDb250ZW50PVwiRGVsZXRlXCI7XG4gICAgZGVsZXRlQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PnsgY2FyZFJlbW92ZShjYXJkKTt9KVxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGF0ZS50ZXh0Q29udGVudD1gRHVlIERhdGUgJHtvYmouZHVlRGF0ZX1gO1xuICAgIHNldFByaW9yaXR5KGNhcmQscHJpb3JpdHkpO1xuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpO1xuICAgICAgICBmb3IobGV0IGk9MDtpPHRhc2tzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYgKHRhc2tzW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlVGFzaycpKXt0YXNrc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlVGFza1wiKTt9XG4gICAgICAgIH1cbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlVGFza1wiKTtcbiAgICAgICAgcG9wdWxhdGVNb2RhbChwYXJzZUludChjYXJkLmlkKSk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuXG4gICAgfSlcbiAgICBhcHBlbmRDaGlsZChjYXJkLHRpdGxlLGRlc2NyaXB0aW9uLGRhdGUsZGVsZXRlQ2FyZCk7XG5cblxufVxuZnVuY3Rpb24gcG9wdWxhdGVNb2RhbChpZCl7XG4gICAgY29uc3QgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVDbGFzc1wiKTtcbiAgICBjb25zdCBwcm9qSWQgPSBwYXJzZUludChhY3RpdmUuaWQpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgICB0aXRsZS52YWx1ZT10YXNrQXJyW3Byb2pJZF1baWRdLnRpdGxlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2tBcnJbcHJvaklkXVtpZF0uZGVzY3JpcHRpb247XG4gICAgY29uc3QgRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlRGF0ZVwiKTtcbiAgICBEYXRlLnZhbHVlID0gdGFza0Fycltwcm9qSWRdW2lkXS5kdWVEYXRlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eS52YWx1ZSA9IHRhc2tBcnJbcHJvaklkXVtpZF0ucHJpb3JpdHk7XG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzXCIpO1xuICAgIG5vdGVzLnZhbHVlID0gdGFza0Fycltwcm9qSWRdW2lkXS5ub3Rlcztcbn1cbmZ1bmN0aW9uIGNhcmRSZW1vdmUoY2FyZCxlKXtcbiAgICBpZiAoIWUpIHZhciBlID0gd2luZG93LmV2ZW50XG4gICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBhY3RpdmVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVDbGFzc1wiKTtcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKTtcbiAgICBmb3IobGV0IGk9MDtpPHRvZG9BcnIubGVuZ3RoO2krKyl7XG4gICAgICAgIGNhcmRzW2ldLnNldEF0dHJpYnV0ZShcImlkXCIsaSk7XG4gICAgfVxuICAgIGxldCBpID0gcGFyc2VJbnQoY2FyZC5pZCk7O1xuICAgIGxldCBpZCA9IHBhcnNlSW50KGFjdGl2ZVRhc2suaWQpO1xuICAgIHRhc2tBcnJbaWRdLnNwbGljZShpLDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0QXJyYXknLCBKU09OLnN0cmluZ2lmeSh0YXNrQXJyKSk7XG4gICAgdG9kb0FyclxuICAgIGNhcmQucmVtb3ZlKCk7XG59XG4vL3NldHMgcHJpb3JpdHkgY29sb3Igb24gY2FyZHNcbmZ1bmN0aW9uIHNldFByaW9yaXR5KGNhcmQsIHByaW9yaXR5KXtcbiAgICBpZiAocHJpb3JpdHk9PVwiSGlnaFwiKXtjYXJkLnN0eWxlLmJvcmRlckxlZnQ9XCIxMHB4IHNvbGlkIHJnYigyMDEsIDksIDkpXCJ9XG4gICAgZWxzZSBpZiAocHJpb3JpdHk9PVwiTWVkaXVtXCIpe2NhcmQuc3R5bGUuYm9yZGVyTGVmdD1cIjEwcHggc29saWQgeWVsbG93XCJ9XG4gICAgZWxzZXtjYXJkLnN0eWxlLmJvcmRlckxlZnQ9XCIxMHB4IHNvbGlkIHJnYig4LCAxNTMsIDgpXCJ9XG59XG5mdW5jdGlvbiBhcHBlbmRDaGlsZChjYXJkLHRpdGxlLGRlc2NyaXB0aW9uLGRhdGUsZGVsZXRlQ2FyZCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudFwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY2FyZC5hcHBlbmRDaGlsZChkYXRlKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQ2FyZClcbn1cbi8vcmVtb3ZlcyBjYXJkcyBmcm9tIGRvbVxuZnVuY3Rpb24gZW1wdHkoZWxlbWVudCkge1xuICAgIHdoaWxlKGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg+MSkge1xuICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG5mdW5jdGlvbiByZW1vdmVyKGlkKXtcbiAgICB0YXNrQXJyLnNwbGljZShpZCwxKTtcbiAgICBhY3RpdmVJZD11bmRlZmluZWQ7XG4gICAgY29uc29sZS5sb2codGFza0Fycik7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudFwiKTtcbiAgICBlbXB0eShjb250YWluZXIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0QXJyYXknLCBKU09OLnN0cmluZ2lmeSh0YXNrQXJyKSk7XG59XG5cbmV4cG9ydCB7dG9kbyxyZW1vdmVyfSIsImZ1bmN0aW9uIGNsZWFyKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksbm90ZXMpe1xuICAgIHRpdGxlLnZhbHVlPScnO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlPScnO1xuICAgIGR1ZURhdGUudmFsdWU9Jyc7XG4gICAgcHJpb3JpdHkudmFsdWU9Jyc7XG4gICAgbm90ZXMudmFsdWU9Jyc7XG4gICAgY29uc3QgYWN0aXZlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlVGFza1wiKTtcbiAgICBpZihhY3RpdmVUYXNrIT11bmRlZmluZWQpe1xuICAgICAgICBhY3RpdmVUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVUYXNrXCIpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsZWFyIiwiaW1wb3J0IHt0b2RvLHJlbW92ZXJ9IGZyb20gXCIuL2FkZC10b2RvXCI7XG5pbXBvcnQgY2xlYXIgZnJvbSBcIi4vY2xlYXItbW9kYWxcIjtcbi8vY3JlYXRlcyBoaWRkZW4gbW9kYWwgb24gcGFnZVxuZnVuY3Rpb24gY3JlYXRlTW9kYWwoYm9keSl7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsQ29udGVudFwiKTtcbiAgICBjZWF0ZU1vZGFsQ29udGVudChtb2RhbENvbnRlbnQsbW9kYWwpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG59XG4vL2NyZWF0ZXMgbW9kYWwgY29udGVudFxuZnVuY3Rpb24gY2VhdGVNb2RhbENvbnRlbnQobW9kYWxDb250ZW50LG1vZGFsKXtcbiAgICB2YXIgYXJyYXkgPSBbXCJIaWdoXCIsXCJNZWRpdW1cIixcIkxvd1wiXTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZS50eXBlPVwidGV4dFwiO1xuICAgIHRpdGxlLnBsYWNlaG9sZGVyPVwiRW50ZXIgVGl0bGVcIjtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGVzY3JpcHRpb24udHlwZT1cInRleHRcIjtcbiAgICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb24ucmVxdWlyZWQ9dHJ1ZTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkdWVEYXRlLnR5cGU9XCJkYXRlXCI7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcmlvcml0eS5pZCA9IFwicHJpb3JpdHlcIjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBhcnJheVtpXTtcbiAgICAgICAgb3B0aW9uLnRleHQgPSBhcnJheVtpXTtcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG4gICAgcHJpb3JpdHkucmVxdWlyZWQ9XCJ0cnVlXCI7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIG5vdGVzLnBsYWNlaG9sZGVyPVwiVGFrZSBOb3Rlcy4uXCI7XG4gICAgbm90ZXMuY2xhc3NMaXN0LmFkZChcIm5vdGVzXCIpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25Db250YWluZXJcIilcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudD1cInN1Ym1pdFwiO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwibW9kYWxTdWJtaXRcIik7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWwudGV4dENvbnRlbnQ9XCJjYW5jZWxcIjtcbiAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsQ2FuY2VsXCIpO1xuICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKFwiY2xvc2VNb2RhbFwiKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xuICAgICAgICBjbGVhcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LG5vdGVzKTtcbiAgICB9KVxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYodGl0bGUudmFsdWUhPVwiXCIgJiYgZGVzY3JpcHRpb24udmFsdWUhPVwiXCIgJiYgZHVlRGF0ZS52YWx1ZSE9XCJcIiAmJiBwcmlvcml0eS52YWx1ZSE9XCJcIil7XG4gICAgICAgIHRvZG8odGl0bGUudmFsdWUsZGVzY3JpcHRpb24udmFsdWUsZHVlRGF0ZS52YWx1ZSxwcmlvcml0eS52YWx1ZSxub3Rlcy52YWx1ZSk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xuICAgICAgICBjbGVhcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LG5vdGVzKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1vZGFsIiwiaW1wb3J0IHsgZGlzcGxheVRvZG8gfSBmcm9tIFwiLi9hZGQtdG9kb1wiO1xubGV0IHByb2plY3RBcnIgPSBbXTsgXG5pZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3REaXNwbGF5XCIpKSE9bnVsbCl7XG4gICAgcHJvamVjdEFycj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdERpc3BsYXlcIikpO1xufVxuZnVuY3Rpb24gcmVsb2FkUHJvamVjdHMoKXtcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YocHJvamVjdEFycikpXG4gICAgY29uc3QgYXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0FyZWFcIik7XG4gICAgZm9yKGxldCBpPTA7aTxwcm9qZWN0QXJyLmxlbmd0aDtpKyspe1xuICAgICAgICBhcHBlbmRUYXNrKGFyZWEscHJvamVjdEFycltpXSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbG9hZFJlbW92ZXIoaWQpe1xuICAgIHByb2plY3RBcnIuc3BsaWNlKGlkLDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0RGlzcGxheScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnIpKTtcbn1cbi8vYXBwZW5kcyBwcm9qZWN0cyB0byBwcm9qZWN0IGFyZWFcbmZ1bmN0aW9uIGFwcGVuZFRhc2soYXJlYSx0aXRsZSl7XG4gICAgaWYoY2hlY2tUYXNrKHRpdGxlKSE9MSl7XG4gICAgICAgIGlmKCFwcm9qZWN0QXJyLmluY2x1ZGVzKHRpdGxlKSl7XG4gICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2godGl0bGUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3REaXNwbGF5JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycikpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50PXRpdGxlO1xuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgICAgIGFyZWEuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgIGxhYmVsUHJvamVjdHMoKTtcbiAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9Pnt0YXNrQWN0aXZlKHRhc2spfSlcbiAgICAgICAgY2xlYXJUYXNrVGV4dCgpO1xuICAgIH1cbn1cbi8vY2hlY2tzIGlmIHN1Y2ggcHJvamVjdCBhbHJlYWR5IGV4aXN0c1xuZnVuY3Rpb24gY2hlY2tUYXNrKHRpdGxlKXtcbiAgICBsZXQgYT0wO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICAgIGZvcihsZXQgaT0wO2k8cHJvamVjdHMubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS5maXJzdENoaWxkLnRleHRDb250ZW50PT10aXRsZSB8fCB0aXRsZT09XCJcIil7YT0xfVxuICAgIH1cbiAgICBpZihhPT0xKXtjb25zb2xlLmxvZyhhKTtyZXR1cm4gMTt9XG59XG4vL2NsZWFycyB0YXNrIHRleHRcbmZ1bmN0aW9uIGNsZWFyVGFza1RleHQoKXtcbiAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlVGV4dFwiKVxuICAgIHRhc2tUZXh0LnZhbHVlPVwiXCI7XG59XG5mdW5jdGlvbiB0YXNrQWN0aXZlKHRhc2spe1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICAgIGZvcihsZXQgaT0wO2k8cHJvamVjdHMubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZUNsYXNzJykpe3Byb2plY3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVDbGFzc1wiKTt9XG4gICAgfVxuICAgIHRhc2suY2xhc3NMaXN0LmFkZChcImFjdGl2ZUNsYXNzXCIpO1xuICAgIGRpc3BsYXlUb2RvKCk7XG59XG5mdW5jdGlvbiBsYWJlbFByb2plY3RzKCl7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gICAgZm9yKGxldCBpPTA7aTxwcm9qZWN0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgcHJvamVjdHNbaV0uc2V0QXR0cmlidXRlKFwiaWRcIixpKVxuICAgIH1cbn1cblxuZXhwb3J0IHthcHBlbmRUYXNrLHJlbG9hZFByb2plY3RzfVxuIiwiaW1wb3J0IHsgdG9kbywgcmVtb3ZlciB9IGZyb20gXCIuL2FkZC10b2RvXCJcbmltcG9ydCB7IHJlbG9hZFJlbW92ZXIgfSBmcm9tIFwiLi9jcmVhdGUtdGFza1wiO1xuZnVuY3Rpb24gZGVsZXRlVGFzaygpe1xuY29uc3QgYWN0aXZlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlQ2xhc3NcIilcbmxldCBpZCA9IHBhcnNlSW50KGFjdGl2ZVRhc2suaWQpO1xucmVtb3ZlcihpZCk7XG5yZWxvYWRSZW1vdmVyKGlkKTtcbi8vIGNvbnNvbGUubG9nKFwid2hhXCIpO1xuYWN0aXZlVGFzay5yZW1vdmUoKTtcbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuZm9yKGxldCBpPTA7aTxwcm9qZWN0cy5sZW5ndGg7aSsrKXtcbiAgICBwcm9qZWN0c1tpXS5zZXRBdHRyaWJ1dGUoXCJpZFwiLGkpXG59XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVRhc2siLCJpbXBvcnQgY3JlYXRlTW9kYWwgZnJvbSBcIi4vY3JlYXRlLW1vZGFsXCI7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGhlYWRlckNvbnRlbnQoaGVhZGVyKTtcbn1cbmZ1bmN0aW9uIGhlYWRlckNvbnRlbnQoaGVhZGVyKXtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQ9XCJUb2RvIExpc3RcIjtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc2VhcmNoQmFyLnR5cGU9XCJzZWFyY2hcIjtcbiAgICBzZWFyY2hCYXIucGxhY2Vob2xkZXI9XCJzZWFyY2hcIjtcbiAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZChcInNlYXJjaEJhclwiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpe1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gICAgc2lkZWJhckhlYWRpbmcoc2lkZWJhcik7XG4gICAgdGFza0FyZWEoc2lkZWJhcik7XG4gICAgY3JlYXRlUHJvamVjdChzaWRlYmFyKTtcblxufVxuXG5mdW5jdGlvbiBzaWRlYmFySGVhZGluZyhzaWRlYmFyKXtcbiAgICBjb25zdCBzaWRlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBzaWRlSGVhZGluZy50ZXh0Q29udGVudD1cIk15IFByb2plY3RzXCI7XG4gICAgc2lkZUhlYWRpbmcuY2xhc3NMaXN0LmFkZChcInNpZGVIZWFkaW5nXCIpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZUhlYWRpbmcpO1xufVxuZnVuY3Rpb24gdGFza0FyZWEoc2lkZWJhcil7XG4gICAgY29uc3QgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXJlYS5jbGFzc0xpc3QuYWRkKFwidGFza0FyZWFcIik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhcmVhKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChzaWRlYmFyKXtcbiAgICBjb25zdCBjcmVhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNyZWF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNyZWF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY3JlYXRlVGV4dC50eXBlPVwidGV4dFwiO1xuICAgIGNyZWF0ZVRleHQucGxhY2Vob2xkZXI9XCJQcm9qZWN0IE5hbWUuLlwiO1xuICAgIGNyZWF0ZVRleHQuY2xhc3NMaXN0LmFkZChcImNyZWF0ZVRleHRcIik7XG4gICAgY3JlYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQpO1xuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50PVwiQ3JlYXRlIFByb2plY3RcIjtcbiAgICBjcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImNyZWF0ZUJ1dHRvblwiKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudD1cIkRlbGV0ZSBQcm9qZWN0XCI7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVCdXR0b25cIik7XG4gICAgY3JlYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbik7XG4gICAgY3JlYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjb250ZW50U3BhY2UoKXtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnRlbnRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnRlbnRIZWFkaW5nLnRleHRDb250ZW50PVwiTXkgVGFza3NcIjtcbiAgICBjb250ZW50SGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiY29udGVudEhlYWRpbmdcIik7XG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW5Db250ZW50XCIpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkaW5nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbiAgICBhZGRCdXR0b24obWFpbkNvbnRlbnQpO1xuICAgIGNyZWF0ZU1vZGFsKGNvbnRlbnQpO1xufVxuZnVuY3Rpb24gYWRkQnV0dG9uKGRpdil7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZChcImFkZEJ0blwiKTtcbiAgICBhZGRCdG4udGV4dENvbnRlbnQ9XCIrXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRCdG4pO1xufVxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICAgIGNyZWF0ZUhlYWRlcigpO1xuICAgIGNyZWF0ZVNpZGViYXIoKTtcbiAgICBjb250ZW50U3BhY2UoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWFpbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlTWFpbiBmcm9tIFwiLi9tYWluLWRvbVwiXG5pbXBvcnQge2FwcGVuZFRhc2sscmVsb2FkUHJvamVjdHN9IGZyb20gXCIuL2NyZWF0ZS10YXNrXCJcbmltcG9ydCBkZWxldGVUYXNrIGZyb20gXCIuL2RlbGV0ZS1wcm9qZWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCJcbmNyZWF0ZU1haW4oKTtcbnJlbG9hZFByb2plY3RzKCk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCB0aXRsZT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVUZXh0XCIpO1xuY29uc3Qgc3VibWl0PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZUJ1dHRvblwiKTtcbmNvbnN0IGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tBcmVhXCIpO1xuY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRCdG5cIik7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5jb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZUJ1dHRvblwiKTtcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57IGFwcGVuZFRhc2soYXJlYSx0aXRsZS52YWx1ZSk7fSk7XG5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PnsgZGVsZXRlVGFzaygpfSk7XG5hZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+eyBtb2RhbC5zdHlsZS5kaXNwbGF5PSdibG9jayc7fSk7XG5jb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkIVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==