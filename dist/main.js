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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n}\n.modal{\n    display: none;\n    position:fixed;\n    z-index: 1;\n    left:0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.1);\n}\n.modalContent{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    margin: 10% auto;\n    background-color: white;\n    padding: 20px;\n    width: 50%;\n    border: 3px solid rgba(255, 255, 255, 0.7);\n    box-shadow: 0px 3px 8px black;\n}\n.modalContent>input{\n    height: 4rem;\n    width: 50%;\n    margin: 10px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 20px;\n\n}\nselect{\n    height: 3rem;\n    width: 50%;\n    margin: 10px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 0 20px;\n    background-color: white;\n    font-size: 1rem;\n\n}\ntextarea{\n    height: 6rem;\n    width: 50%;\n    margin: 10px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 20px;\n    font-size: 1rem;\n\n}\n.buttonContainer{\n    display: flex;\n}\n.buttonContainer>button{\n    margin:20px;\n    height: 3rem;\n    width: 10rem;\n    border-radius: 30px;\n    border:none;\n    font-size: 1rem;\n    color: white;\n}\n.buttonContainer>button:hover{\n    box-shadow: 0px 0px 3px black;\n    filter: brightness(85%);\n    cursor: pointer;\n}\n.modalSubmit{\n    background-color: rgb(9, 177, 9);\n}\n.modalCancel{\n    background-color: rgb(201, 9, 9);\n}\n.content{\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 10fr;\n}\n.header{\n    grid-column: 1 / span 2;\n    background-color: rgba(85, 85, 221, 0.767);\n    box-shadow: 0px 3px 10px rgba(37, 37, 37, 0.7) ;\n    display: flex;\n    align-items: center;\n    padding-left: 50px;\n}\n.heading{\n    color: white;\n    font-size: 4rem;\n}\n.searchBar{\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: none;\n    height: 2rem;\n    width: 30%;\n    padding: 0 20px;\n    font-size: 1rem;\n}\n.searchBar:hover{\n    background-color: rgb(221, 221, 221);\n}\n.sidebar{\n    box-shadow: 3px 3px 10px rgba(37, 37, 37, 0.7) ;\n    background-color: white;\n    padding:20px;\n    display: flex;\n    flex-direction: column;\n}\n.taskArea{\n    max-height: 700px;\n    overflow-y: auto;\n}\n.task{\n    box-sizing: border-box;\n    padding: 20px 40px;\n    margin: 20px;\n    box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.7);\n    text-align: center;\n    border-radius: 15px;\n    max-width: 500px;\n    overflow-x:hidden;\n}\n.task:hover{\n    background-color: rgb(236, 235, 235);\n    cursor: pointer;\n}\n.activeClass{\n    background-color: rgb(236, 235, 235);\n}\n.sideHeading{\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n    font-weight: lighter;\n    color: rgba(0, 0, 0, 0.5);\n}\n.createContainer{\n    margin-top: auto;\n}\n.createText{\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    padding:0 20px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n}\n.createText:hover{\n    background-color: rgb(221, 221, 221);\n}\n.createButton{\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(9, 177, 9);\n    border: none;\n    margin-top: 5px;\n    font-size: 1rem;\n    color: white;\n}\n.createButton:hover{\n    background-color: rgb(8, 153, 8);\n    cursor: pointer;\n    box-shadow: 0px 0px 3px black;\n}\n.deleteButton{\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(201, 9, 9);\n    border: none;\n    margin-top: 5px;\n    font-size: 1rem;\n    color: white;\n}\n.deleteButton:hover{\n    cursor: pointer;\n    background-color: rgb(173, 7, 7);\n    box-shadow: 0px 0px 3px black;\n}\n.mainContent{\n    box-sizing: border-box;\n    display: grid;\n    padding: 20px;\n    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));\n    grid-template-rows: 50px;\n    grid-auto-rows: 30%;\n    gap:20px;\n    overflow-y: auto;\n    height: 100%;\n}\n.contentHeading{\n    grid-column: 1 / span 4;\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n    font-weight: lighter;\n    color: rgba(0, 0, 0, 0.5);\n}\n.card{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.7) ;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 20px;\n\n}\n.card>h1{\n    font-size: 3rem;\n}\n.card>p{\n    margin-right: auto;\n}\n.deleteCard{\n    margin-top: auto;\n    margin-left: auto;\n    width: 20%;\n    min-width: 100px;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(201, 9, 9);\n    border: none;\n}\n.deleteCard:hover{\n    cursor: pointer;\n    background-color: rgb(173, 7, 7);\n    box-shadow: 0px 0px 3px black;\n}\n.addBtn{\n    position:fixed;\n    bottom: 50px;\n    right: 50px;\n    height: 4rem;\n    width: 4rem;\n    border: none;\n    border-radius: 50px;\n    background-color: rgb(9, 177, 9);\n    font-size: 3rem;\n    color: white;\n}\n.addBtn:hover{\n    cursor: pointer;\n    background-color: rgb(8, 153, 8);\n    box-shadow: 0px 0px 3px black;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,iCAAiC;AACrC;AACA;IACI,aAAa;IACb,cAAc;IACd,UAAU;IACV,MAAM;IACN,MAAM;IACN,YAAY;IACZ,WAAW;IACX,cAAc;IACd,oCAAoC;AACxC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,aAAa;IACb,UAAU;IACV,0CAA0C;IAC1C,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,mCAAmC;IACnC,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;;AAEjB;AACA;IACI,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,mCAAmC;IACnC,kBAAkB;IAClB,sBAAsB;IACtB,eAAe;IACf,uBAAuB;IACvB,eAAe;;AAEnB;AACA;IACI,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,mCAAmC;IACnC,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,eAAe;;AAEnB;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,eAAe;IACf,YAAY;AAChB;AACA;IACI,6BAA6B;IAC7B,uBAAuB;IACvB,eAAe;AACnB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,gCAAgC;AACpC;AACA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;AAChC;AACA;IACI,uBAAuB;IACvB,0CAA0C;IAC1C,+CAA+C;IAC/C,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,eAAe;IACf,eAAe;AACnB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,+CAA+C;IAC/C,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,8CAA8C;IAC9C,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,oCAAoC;IACpC,eAAe;AACnB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,2CAA2C;IAC3C,oBAAoB;IACpB,yBAAyB;AAC7B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,sBAAsB;IACtB,WAAW;IACX,mBAAmB;IACnB,cAAc;IACd,cAAc;IACd,YAAY;IACZ,mCAAmC;AACvC;AACA;IACI,oCAAoC;AACxC;AACA;IACI,WAAW;IACX,mBAAmB;IACnB,cAAc;IACd,gCAAgC;IAChC,YAAY;IACZ,eAAe;IACf,eAAe;IACf,YAAY;AAChB;AACA;IACI,gCAAgC;IAChC,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,WAAW;IACX,mBAAmB;IACnB,cAAc;IACd,gCAAgC;IAChC,YAAY;IACZ,eAAe;IACf,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,gCAAgC;IAChC,6BAA6B;AACjC;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,2DAA2D;IAC3D,wBAAwB;IACxB,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,2CAA2C;IAC3C,oBAAoB;IACpB,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,+CAA+C;IAC/C,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;;AAEjB;AACA;IACI,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,UAAU;IACV,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;IACd,gCAAgC;IAChC,YAAY;AAChB;AACA;IACI,eAAe;IACf,gCAAgC;IAChC,6BAA6B;AACjC;AACA;IACI,cAAc;IACd,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,gCAAgC;IAChC,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,gCAAgC;IAChC,6BAA6B;AACjC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');\n\n*{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n}\n.modal{\n    display: none;\n    position:fixed;\n    z-index: 1;\n    left:0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.1);\n}\n.modalContent{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    margin: 10% auto;\n    background-color: white;\n    padding: 20px;\n    width: 50%;\n    border: 3px solid rgba(255, 255, 255, 0.7);\n    box-shadow: 0px 3px 8px black;\n}\n.modalContent>input{\n    height: 4rem;\n    width: 50%;\n    margin: 10px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 20px;\n\n}\nselect{\n    height: 3rem;\n    width: 50%;\n    margin: 10px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 0 20px;\n    background-color: white;\n    font-size: 1rem;\n\n}\ntextarea{\n    height: 6rem;\n    width: 50%;\n    margin: 10px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 20px;\n    font-size: 1rem;\n\n}\n.buttonContainer{\n    display: flex;\n}\n.buttonContainer>button{\n    margin:20px;\n    height: 3rem;\n    width: 10rem;\n    border-radius: 30px;\n    border:none;\n    font-size: 1rem;\n    color: white;\n}\n.buttonContainer>button:hover{\n    box-shadow: 0px 0px 3px black;\n    filter: brightness(85%);\n    cursor: pointer;\n}\n.modalSubmit{\n    background-color: rgb(9, 177, 9);\n}\n.modalCancel{\n    background-color: rgb(201, 9, 9);\n}\n.content{\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 10fr;\n}\n.header{\n    grid-column: 1 / span 2;\n    background-color: rgba(85, 85, 221, 0.767);\n    box-shadow: 0px 3px 10px rgba(37, 37, 37, 0.7) ;\n    display: flex;\n    align-items: center;\n    padding-left: 50px;\n}\n.heading{\n    color: white;\n    font-size: 4rem;\n}\n.searchBar{\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: none;\n    height: 2rem;\n    width: 30%;\n    padding: 0 20px;\n    font-size: 1rem;\n}\n.searchBar:hover{\n    background-color: rgb(221, 221, 221);\n}\n.sidebar{\n    box-shadow: 3px 3px 10px rgba(37, 37, 37, 0.7) ;\n    background-color: white;\n    padding:20px;\n    display: flex;\n    flex-direction: column;\n}\n.taskArea{\n    max-height: 700px;\n    overflow-y: auto;\n}\n.task{\n    box-sizing: border-box;\n    padding: 20px 40px;\n    margin: 20px;\n    box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.7);\n    text-align: center;\n    border-radius: 15px;\n    max-width: 500px;\n    overflow-x:hidden;\n}\n.task:hover{\n    background-color: rgb(236, 235, 235);\n    cursor: pointer;\n}\n.activeClass{\n    background-color: rgb(236, 235, 235);\n}\n.sideHeading{\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n    font-weight: lighter;\n    color: rgba(0, 0, 0, 0.5);\n}\n.createContainer{\n    margin-top: auto;\n}\n.createText{\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    padding:0 20px;\n    border: none;\n    box-shadow: inset 0px 0px 3px black;\n}\n.createText:hover{\n    background-color: rgb(221, 221, 221);\n}\n.createButton{\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(9, 177, 9);\n    border: none;\n    margin-top: 5px;\n    font-size: 1rem;\n    color: white;\n}\n.createButton:hover{\n    background-color: rgb(8, 153, 8);\n    cursor: pointer;\n    box-shadow: 0px 0px 3px black;\n}\n.deleteButton{\n    width: 100%;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(201, 9, 9);\n    border: none;\n    margin-top: 5px;\n    font-size: 1rem;\n    color: white;\n}\n.deleteButton:hover{\n    cursor: pointer;\n    background-color: rgb(173, 7, 7);\n    box-shadow: 0px 0px 3px black;\n}\n.mainContent{\n    box-sizing: border-box;\n    display: grid;\n    padding: 20px;\n    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));\n    grid-template-rows: 50px;\n    grid-auto-rows: 30%;\n    gap:20px;\n    overflow-y: auto;\n    height: 100%;\n}\n.contentHeading{\n    grid-column: 1 / span 4;\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n    font-weight: lighter;\n    color: rgba(0, 0, 0, 0.5);\n}\n.card{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.7) ;\n    border-radius: 5px;\n    box-sizing: border-box;\n    padding: 20px;\n\n}\n.card>h1{\n    font-size: 3rem;\n}\n.card>p{\n    margin-right: auto;\n}\n.deleteCard{\n    margin-top: auto;\n    margin-left: auto;\n    width: 20%;\n    min-width: 100px;\n    border-radius: 30px;\n    height: 2.5rem;\n    background-color: rgb(201, 9, 9);\n    border: none;\n}\n.deleteCard:hover{\n    cursor: pointer;\n    background-color: rgb(173, 7, 7);\n    box-shadow: 0px 0px 3px black;\n}\n.addBtn{\n    position:fixed;\n    bottom: 50px;\n    right: 50px;\n    height: 4rem;\n    width: 4rem;\n    border: none;\n    border-radius: 50px;\n    background-color: rgb(9, 177, 9);\n    font-size: 3rem;\n    color: white;\n}\n.addBtn:hover{\n    cursor: pointer;\n    background-color: rgb(8, 153, 8);\n    box-shadow: 0px 0px 3px black;\n}"],"sourceRoot":""}]);
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
    let title = document.createElement("h1");
    title.textContent=obj.title;
    let description = document.createElement("p");
    description.textContent=obj.description;
    let priority = obj.priority;
    let deleteCard = document.createElement("button")
    deleteCard.classList.add("deleteCard");
    deleteCard.textContent="Delete";
    deleteCard.addEventListener("click", ()=>{ cardRemove(card,i)})
    let date = document.createElement("p");
    date.textContent=`Due Date ${obj.dueDate}`;
    setPriority(card,priority);
    appendChild(card,title,description,date,deleteCard)


}
function cardRemove(card){
    const activeTask = document.querySelector(".activeClass");
    const cards = document.querySelectorAll(".card");
    for(let i=0;i<todoArr.length;i++){
        cards[i].setAttribute("id",i);
    }
    let i = parseInt(card.id);;
    let id = parseInt(activeTask.id);
    taskArr[id].splice(i,1);
    todoArr
    card.remove();
    console.log();
    console.log(taskArr);
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
    title.setAttribute("required", "");
    const description = document.createElement("input");
    description.type="text";
    description.placeholder="Description"
    description.required=true;
    const dueDate = document.createElement("input");
    dueDate.type="date";
    dueDate.setAttribute("required", "");
    const priority = document.createElement("select");
    priority.id = "priority";
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        priority.appendChild(option);
    }
    priority.required="true";
    const notes = document.createElement("textarea");
    notes.placeholder="Take Notes..";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG9DQUFvQyxHQUFHLE9BQU8sd0ZBQXdGLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVks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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7O1VDcEZmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDRztBQUNJO0FBQ2Q7QUFDNUIscURBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx3REFBVSxvQkFBb0I7QUFDdEUsOENBQThDLDJEQUFVLEdBQUc7QUFDM0QscUNBQXFDLDZCQUE2QjtBQUNsRSwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZC10b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jbGVhci1tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLW1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVsZXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4tZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbi5tb2RhbHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6MDtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG4ubW9kYWxDb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDhweCBibGFjaztcXG59XFxuLm1vZGFsQ29udGVudD5pbnB1dHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAzcHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG59XFxuc2VsZWN0e1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDNweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxufVxcbnRleHRhcmVhe1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDNweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxufVxcbi5idXR0b25Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5idXR0b25Db250YWluZXI+YnV0dG9ue1xcbiAgICBtYXJnaW46MjBweDtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmJ1dHRvbkNvbnRhaW5lcj5idXR0b246aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9kYWxTdWJtaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCAxNzcsIDkpO1xcbn1cXG4ubW9kYWxDYW5jZWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDksIDkpO1xcbn1cXG4uY29udGVudHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbn1cXG4uaGVhZGVye1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NSwgODUsIDIyMSwgMC43NjcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggcmdiYSgzNywgMzcsIDM3LCAwLjcpIDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG4uaGVhZGluZ3tcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcbi5zZWFyY2hCYXJ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLnNlYXJjaEJhcjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xcbn1cXG4uc2lkZWJhcntcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMzcsIDM3LCAzNywgMC43KSA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOjIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50YXNrQXJlYXtcXG4gICAgbWF4LWhlaWdodDogNzAwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi50YXNre1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMzcsIDM3LCAzNywgMC43KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcXG59XFxuLnRhc2s6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNSwgMjM1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWN0aXZlQ2xhc3N7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNSwgMjM1KTtcXG59XFxuLnNpZGVIZWFkaW5ne1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLmNyZWF0ZUNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuLmNyZWF0ZVRleHR7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgcGFkZGluZzowIDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAzcHggYmxhY2s7XFxufVxcbi5jcmVhdGVUZXh0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxufVxcbi5jcmVhdGVCdXR0b257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDE3NywgOSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNyZWF0ZUJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDE1MywgOCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggYmxhY2s7XFxufVxcbi5kZWxldGVCdXR0b257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgOSwgOSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmRlbGV0ZUJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCA3LCA3KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggYmxhY2s7XFxufVxcbi5tYWluQ29udGVudHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDMwJTtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLmNvbnRlbnRIZWFkaW5ne1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbi5jYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgzNywgMzcsIDM3LCAwLjcpIDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbn1cXG4uY2FyZD5oMXtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4uY2FyZD5we1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5kZWxldGVDYXJke1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDksIDkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5kZWxldGVDYXJkOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDcsIDcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBibGFjaztcXG59XFxuLmFkZEJ0bntcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIGJvdHRvbTogNTBweDtcXG4gICAgcmlnaHQ6IDUwcHg7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDE3NywgOSk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYWRkQnRuOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCAxNTMsIDgpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBibGFjaztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsVUFBVTtJQUNWLE1BQU07SUFDTixNQUFNO0lBQ04sWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFVBQVU7SUFDViwwQ0FBMEM7SUFDMUMsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTs7QUFFakI7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7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Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbi5tb2RhbHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6MDtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG4ubW9kYWxDb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDhweCBibGFjaztcXG59XFxuLm1vZGFsQ29udGVudD5pbnB1dHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAzcHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG59XFxuc2VsZWN0e1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDNweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxufVxcbnRleHRhcmVhe1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDNweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxufVxcbi5idXR0b25Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5idXR0b25Db250YWluZXI+YnV0dG9ue1xcbiAgICBtYXJnaW46MjBweDtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmJ1dHRvbkNvbnRhaW5lcj5idXR0b246aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9kYWxTdWJtaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCAxNzcsIDkpO1xcbn1cXG4ubW9kYWxDYW5jZWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDksIDkpO1xcbn1cXG4uY29udGVudHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbn1cXG4uaGVhZGVye1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NSwgODUsIDIyMSwgMC43NjcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggcmdiYSgzNywgMzcsIDM3LCAwLjcpIDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG4uaGVhZGluZ3tcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcbi5zZWFyY2hCYXJ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLnNlYXJjaEJhcjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xcbn1cXG4uc2lkZWJhcntcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMzcsIDM3LCAzNywgMC43KSA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOjIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50YXNrQXJlYXtcXG4gICAgbWF4LWhlaWdodDogNzAwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi50YXNre1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMzcsIDM3LCAzNywgMC43KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcXG59XFxuLnRhc2s6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNSwgMjM1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWN0aXZlQ2xhc3N7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNSwgMjM1KTtcXG59XFxuLnNpZGVIZWFkaW5ne1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLmNyZWF0ZUNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuLmNyZWF0ZVRleHR7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgcGFkZGluZzowIDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAzcHggYmxhY2s7XFxufVxcbi5jcmVhdGVUZXh0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxufVxcbi5jcmVhdGVCdXR0b257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDE3NywgOSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNyZWF0ZUJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDE1MywgOCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggYmxhY2s7XFxufVxcbi5kZWxldGVCdXR0b257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgOSwgOSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmRlbGV0ZUJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCA3LCA3KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggYmxhY2s7XFxufVxcbi5tYWluQ29udGVudHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDMwJTtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLmNvbnRlbnRIZWFkaW5ne1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbi5jYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgzNywgMzcsIDM3LCAwLjcpIDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbn1cXG4uY2FyZD5oMXtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4uY2FyZD5we1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5kZWxldGVDYXJke1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDksIDkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5kZWxldGVDYXJkOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDcsIDcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBibGFjaztcXG59XFxuLmFkZEJ0bntcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIGJvdHRvbTogNTBweDtcXG4gICAgcmlnaHQ6IDUwcHg7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDE3NywgOSk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYWRkQnRuOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCAxNTMsIDgpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBibGFjaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0YXNrUHVzaCBmcm9tIFwiLi9jcmVhdGUtdGFza1wiXG5pbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSAnZGF0ZS1mbnMnXG5sZXQgdG9kb0FyciA9IFtdO1xubGV0IHRhc2tBcnIgPSBbXTtcbmxldCBhY3RpdmVJZDtcblxuLy9mYWN0b3J5IGNvbnN0cnVjdG9yXG5jb25zdCBuZXdUb2RvID0gKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksbm90ZXMpID0+IHtcbiAgICByZXR1cm57dGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxub3RlcyxhZGRUb2RvfTtcbn1cbi8vYWRkcyBvYmogdG8gYXJyYXlcbmZ1bmN0aW9uIGFkZFRvZG8ob2JqKXtcbiAgICBjb25zdCBhY3RpdmVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVDbGFzc1wiKTtcbiAgICBsZXQgaWQgPXBhcnNlSW50KGFjdGl2ZVRhc2suaWQpO1xuICAgIGlmIChhY3RpdmVJZCE9YWN0aXZlVGFzay5pZCl7dG9kb0FyciA9IFtdOyBhY3RpdmVJZD1hY3RpdmVUYXNrLmlkfTtcbiAgICBpZiAodGFza0FycltpZF0hPXVuZGVmaW5lZCl7dG9kb0Fycj10YXNrQXJyW2lkXTt9XG4gICAgdG9kb0Fyci5wdXNoKG9iaik7XG4gICAgdGFza0FycltpZF09dG9kb0FycjtcbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyKTtcbn1cbi8vY3JlYXRlcyBuZXcgdG9kb1xuZnVuY3Rpb24gdG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LG5vdGVzKXtcbiAgICBsZXQgb2JqID0gbmV3VG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LG5vdGVzKTtcbiAgICBhZGRUb2RvKG9iaik7XG4gICAgY29uc29sZS5sb2codG9kb0Fycik7XG4gICAgZGlzcGxheVRvZG8oKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VG9kbygpe1xuICAgIGNvbnN0IGFjdGl2ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUNsYXNzXCIpO1xuICAgIGxldCBpZCA9cGFyc2VJbnQoYWN0aXZlVGFzay5pZCk7XG4gICAgdG9kb0Fycj10YXNrQXJyW2lkXTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250ZW50XCIpO1xuICAgIGVtcHR5KGNvbnRhaW5lcik7XG4gICAgaWYodG9kb0FyciE9dW5kZWZpbmVkKXtcbiAgICBmb3IobGV0IGk9MDtpPHRvZG9BcnIubGVuZ3RoO2krKyl7XG4gICAgICAgIGNyZWF0ZUNhcmQoaSk7IFxuICAgIH1cbn1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoaSl7XG4gICAgbGV0IG9iaiA9IHRvZG9BcnJbaV07XG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIilcbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnaWQnLGkpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudD1vYmoudGl0bGU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQ9b2JqLmRlc2NyaXB0aW9uO1xuICAgIGxldCBwcmlvcml0eSA9IG9iai5wcmlvcml0eTtcbiAgICBsZXQgZGVsZXRlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBkZWxldGVDYXJkLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVDYXJkXCIpO1xuICAgIGRlbGV0ZUNhcmQudGV4dENvbnRlbnQ9XCJEZWxldGVcIjtcbiAgICBkZWxldGVDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+eyBjYXJkUmVtb3ZlKGNhcmQsaSl9KVxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGF0ZS50ZXh0Q29udGVudD1gRHVlIERhdGUgJHtvYmouZHVlRGF0ZX1gO1xuICAgIHNldFByaW9yaXR5KGNhcmQscHJpb3JpdHkpO1xuICAgIGFwcGVuZENoaWxkKGNhcmQsdGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxkZWxldGVDYXJkKVxuXG5cbn1cbmZ1bmN0aW9uIGNhcmRSZW1vdmUoY2FyZCl7XG4gICAgY29uc3QgYWN0aXZlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlQ2xhc3NcIik7XG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIik7XG4gICAgZm9yKGxldCBpPTA7aTx0b2RvQXJyLmxlbmd0aDtpKyspe1xuICAgICAgICBjYXJkc1tpXS5zZXRBdHRyaWJ1dGUoXCJpZFwiLGkpO1xuICAgIH1cbiAgICBsZXQgaSA9IHBhcnNlSW50KGNhcmQuaWQpOztcbiAgICBsZXQgaWQgPSBwYXJzZUludChhY3RpdmVUYXNrLmlkKTtcbiAgICB0YXNrQXJyW2lkXS5zcGxpY2UoaSwxKTtcbiAgICB0b2RvQXJyXG4gICAgY2FyZC5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZygpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnIpO1xufVxuLy9zZXRzIHByaW9yaXR5IGNvbG9yIG9uIGNhcmRzXG5mdW5jdGlvbiBzZXRQcmlvcml0eShjYXJkLCBwcmlvcml0eSl7XG4gICAgaWYgKHByaW9yaXR5PT1cIkhpZ2hcIil7Y2FyZC5zdHlsZS5ib3JkZXJMZWZ0PVwiMTBweCBzb2xpZCByZ2IoMjAxLCA5LCA5KVwifVxuICAgIGVsc2UgaWYgKHByaW9yaXR5PT1cIk1lZGl1bVwiKXtjYXJkLnN0eWxlLmJvcmRlckxlZnQ9XCIxMHB4IHNvbGlkIHllbGxvd1wifVxuICAgIGVsc2V7Y2FyZC5zdHlsZS5ib3JkZXJMZWZ0PVwiMTBweCBzb2xpZCByZ2IoOCwgMTUzLCA4KVwifVxufVxuZnVuY3Rpb24gYXBwZW5kQ2hpbGQoY2FyZCx0aXRsZSxkZXNjcmlwdGlvbixkYXRlLGRlbGV0ZUNhcmQpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRlbnRcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUNhcmQpXG59XG4vL3JlbW92ZXMgY2FyZHMgZnJvbSBkb21cbmZ1bmN0aW9uIGVtcHR5KGVsZW1lbnQpIHtcbiAgICB3aGlsZShlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoPjEpIHtcbiAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuZnVuY3Rpb24gcmVtb3ZlcihpZCl7XG4gICAgdGFza0Fyci5zcGxpY2UoaWQsMSk7XG4gICAgYWN0aXZlSWQ9dW5kZWZpbmVkO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnIpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRlbnRcIik7XG4gICAgZW1wdHkoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHt0b2RvLHJlbW92ZXJ9IiwiZnVuY3Rpb24gY2xlYXIodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxub3Rlcyl7XG4gICAgdGl0bGUudmFsdWU9Jyc7XG4gICAgZGVzY3JpcHRpb24udmFsdWU9Jyc7XG4gICAgZHVlRGF0ZS52YWx1ZT0nJztcbiAgICBwcmlvcml0eS52YWx1ZT0nJztcbiAgICBub3Rlcy52YWx1ZT0nJztcbn1cbmV4cG9ydCBkZWZhdWx0IGNsZWFyIiwiaW1wb3J0IHt0b2RvLHJlbW92ZXJ9IGZyb20gXCIuL2FkZC10b2RvXCI7XG5pbXBvcnQgY2xlYXIgZnJvbSBcIi4vY2xlYXItbW9kYWxcIjtcbi8vY3JlYXRlcyBoaWRkZW4gbW9kYWwgb24gcGFnZVxuZnVuY3Rpb24gY3JlYXRlTW9kYWwoYm9keSl7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsQ29udGVudFwiKTtcbiAgICBjZWF0ZU1vZGFsQ29udGVudChtb2RhbENvbnRlbnQsbW9kYWwpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG59XG4vL2NyZWF0ZXMgbW9kYWwgY29udGVudFxuZnVuY3Rpb24gY2VhdGVNb2RhbENvbnRlbnQobW9kYWxDb250ZW50LG1vZGFsKXtcbiAgICB2YXIgYXJyYXkgPSBbXCJIaWdoXCIsXCJNZWRpdW1cIixcIkxvd1wiXTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZS50eXBlPVwidGV4dFwiO1xuICAgIHRpdGxlLnBsYWNlaG9sZGVyPVwiRW50ZXIgVGl0bGVcIjtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXNjcmlwdGlvbi50eXBlPVwidGV4dFwiO1xuICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxuICAgIGRlc2NyaXB0aW9uLnJlcXVpcmVkPXRydWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkdWVEYXRlLnR5cGU9XCJkYXRlXCI7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHkuaWQgPSBcInByaW9yaXR5XCI7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gYXJyYXlbaV07XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gYXJyYXlbaV07XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuICAgIHByaW9yaXR5LnJlcXVpcmVkPVwidHJ1ZVwiO1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIG5vdGVzLnBsYWNlaG9sZGVyPVwiVGFrZSBOb3Rlcy4uXCI7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbkNvbnRhaW5lclwiKVxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0LnRleHRDb250ZW50PVwic3VibWl0XCI7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJtb2RhbFN1Ym1pdFwiKTtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbC50ZXh0Q29udGVudD1cImNhbmNlbFwiO1xuICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxDYW5jZWxcIik7XG4gICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoXCJjbG9zZU1vZGFsXCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobm90ZXMpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheT0nbm9uZSc7XG4gICAgICAgIGNsZWFyKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksbm90ZXMpO1xuICAgIH0pXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZih0aXRsZS52YWx1ZSE9XCJcIiAmJiBkZXNjcmlwdGlvbi52YWx1ZSE9XCJcIiAmJiBkdWVEYXRlLnZhbHVlIT1cIlwiICYmIHByaW9yaXR5LnZhbHVlIT1cIlwiKXtcbiAgICAgICAgdG9kbyh0aXRsZS52YWx1ZSxkZXNjcmlwdGlvbi52YWx1ZSxkdWVEYXRlLnZhbHVlLHByaW9yaXR5LnZhbHVlLG5vdGVzLnZhbHVlKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheT0nbm9uZSc7XG4gICAgICAgIGNsZWFyKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksbm90ZXMpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTW9kYWwiLCJpbXBvcnQgeyBkaXNwbGF5VG9kbyB9IGZyb20gXCIuL2FkZC10b2RvXCI7XG5mdW5jdGlvbiBhcHBlbmRUYXNrKGFyZWEsdGl0bGUpe1xuICAgIGlmKGNoZWNrVGFzayh0aXRsZSkhPTEpe1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudD10aXRsZTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICBhcmVhLmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICBsYWJlbFByb2plY3RzKCk7XG4gICAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57dGFza0FjdGl2ZSh0YXNrKX0pXG4gICAgICAgIGNsZWFyVGFza1RleHQoKTtcbiAgICB9XG59XG4vL2NoZWNrcyBpZiBzdWNoIHByb2plY3QgYWxyZWFkeSBleGlzdHNcbmZ1bmN0aW9uIGNoZWNrVGFzayh0aXRsZSl7XG4gICAgbGV0IGE9MDtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgICBmb3IobGV0IGk9MDtpPHByb2plY3RzLmxlbmd0aDtpKyspe1xuICAgICAgICBpZiAocHJvamVjdHNbaV0uZmlyc3RDaGlsZC50ZXh0Q29udGVudD09dGl0bGUgfHwgdGl0bGU9PVwiXCIpe2E9MX1cbiAgICB9XG4gICAgaWYoYT09MSl7Y29uc29sZS5sb2coYSk7cmV0dXJuIDE7fVxufVxuZnVuY3Rpb24gY2xlYXJUYXNrVGV4dCgpe1xuICAgIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVUZXh0XCIpXG4gICAgdGFza1RleHQudmFsdWU9XCJcIjtcbn1cbmZ1bmN0aW9uIHRhc2tBY3RpdmUodGFzayl7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gICAgZm9yKGxldCBpPTA7aTxwcm9qZWN0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlQ2xhc3MnKSl7cHJvamVjdHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZUNsYXNzXCIpO31cbiAgICB9XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlQ2xhc3NcIik7XG4gICAgZGlzcGxheVRvZG8oKTtcbn1cbmZ1bmN0aW9uIGxhYmVsUHJvamVjdHMoKXtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgICBmb3IobGV0IGk9MDtpPHByb2plY3RzLmxlbmd0aDtpKyspe1xuICAgICAgICBwcm9qZWN0c1tpXS5zZXRBdHRyaWJ1dGUoXCJpZFwiLGkpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRUYXNrXG4iLCJpbXBvcnQgeyB0b2RvLCByZW1vdmVyIH0gZnJvbSBcIi4vYWRkLXRvZG9cIlxuZnVuY3Rpb24gZGVsZXRlVGFzaygpe1xuY29uc3QgYWN0aXZlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlQ2xhc3NcIilcbmxldCBpZCA9IHBhcnNlSW50KGFjdGl2ZVRhc2suaWQpO1xucmVtb3ZlcihpZCk7XG4vLyBjb25zb2xlLmxvZyhcIndoYVwiKTtcbmFjdGl2ZVRhc2sucmVtb3ZlKCk7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbmZvcihsZXQgaT0wO2k8cHJvamVjdHMubGVuZ3RoO2krKyl7XG4gICAgcHJvamVjdHNbaV0uc2V0QXR0cmlidXRlKFwiaWRcIixpKVxufVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVUYXNrIiwiaW1wb3J0IGNyZWF0ZU1vZGFsIGZyb20gXCIuL2NyZWF0ZS1tb2RhbFwiO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBoZWFkZXJDb250ZW50KGhlYWRlcik7XG59XG5mdW5jdGlvbiBoZWFkZXJDb250ZW50KGhlYWRlcil7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50PVwiVG9kbyBMaXN0XCI7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHNlYXJjaEJhci50eXBlPVwic2VhcmNoXCI7XG4gICAgc2VhcmNoQmFyLnBsYWNlaG9sZGVyPVwic2VhcmNoXCI7XG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hCYXJcIik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaEJhcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKXtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgIHNpZGViYXJIZWFkaW5nKHNpZGViYXIpO1xuICAgIHRhc2tBcmVhKHNpZGViYXIpO1xuICAgIGNyZWF0ZVByb2plY3Qoc2lkZWJhcik7XG5cbn1cblxuZnVuY3Rpb24gc2lkZWJhckhlYWRpbmcoc2lkZWJhcil7XG4gICAgY29uc3Qgc2lkZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgc2lkZUhlYWRpbmcudGV4dENvbnRlbnQ9XCJNeSBQcm9qZWN0c1wiO1xuICAgIHNpZGVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJzaWRlSGVhZGluZ1wiKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGVIZWFkaW5nKTtcbn1cbmZ1bmN0aW9uIHRhc2tBcmVhKHNpZGViYXIpe1xuICAgIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFyZWEuY2xhc3NMaXN0LmFkZChcInRhc2tBcmVhXCIpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYXJlYSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3Qoc2lkZWJhcil7XG4gICAgY29uc3QgY3JlYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjcmVhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNyZWF0ZUNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjcmVhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNyZWF0ZVRleHQudHlwZT1cInRleHRcIjtcbiAgICBjcmVhdGVUZXh0LnBsYWNlaG9sZGVyPVwiUHJvamVjdCBOYW1lLi5cIjtcbiAgICBjcmVhdGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVUZXh0XCIpO1xuICAgIGNyZWF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KTtcbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNyZWF0ZUJ1dHRvbi50ZXh0Q29udGVudD1cIkNyZWF0ZSBQcm9qZWN0XCI7XG4gICAgY3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVCdXR0b25cIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQ9XCJEZWxldGUgUHJvamVjdFwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlQnV0dG9uXCIpO1xuICAgIGNyZWF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24pO1xuICAgIGNyZWF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY29udGVudFNwYWNlKCl7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250ZW50SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb250ZW50SGVhZGluZy50ZXh0Q29udGVudD1cIk15IFRhc2tzXCI7XG4gICAgY29udGVudEhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRIZWFkaW5nXCIpO1xuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluQ29udGVudFwiKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjb250ZW50SGVhZGluZyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG4gICAgYWRkQnV0dG9uKG1haW5Db250ZW50KTtcbiAgICBjcmVhdGVNb2RhbChjb250ZW50KTtcbn1cbmZ1bmN0aW9uIGFkZEJ1dHRvbihkaXYpe1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRCdG5cIik7XG4gICAgYWRkQnRuLnRleHRDb250ZW50PVwiK1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKXtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVTaWRlYmFyKCk7XG4gICAgY29udGVudFNwYWNlKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZU1haW4gZnJvbSBcIi4vbWFpbi1kb21cIlxuaW1wb3J0IGFwcGVuZFRhc2sgZnJvbSBcIi4vY3JlYXRlLXRhc2tcIlxuaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSBcIi4vZGVsZXRlLXByb2plY3RcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlcy5jc3NcIlxuY3JlYXRlTWFpbigpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgdGl0bGU9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlVGV4dFwiKTtcbmNvbnN0IHN1Ym1pdD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVCdXR0b25cIik7XG5jb25zdCBhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrQXJlYVwiKTtcbmNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkQnRuXCIpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGVCdXR0b25cIik7XG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+eyBhcHBlbmRUYXNrKGFyZWEsdGl0bGUudmFsdWUpO30pO1xuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57IGRlbGV0ZVRhc2soKX0pO1xuYWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PnsgbW9kYWwuc3R5bGUuZGlzcGxheT0nYmxvY2snO30pO1xuY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZCFcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=