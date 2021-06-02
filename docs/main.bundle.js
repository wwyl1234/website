webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Style the top section of the website. */\n#top-section {\n    background-color: #f5c050;\n    text-align: center;\n}\n/* Style the title */\n#title {\n    color: brown;\n    padding: 1em;\n    font-size: 5em;\n    font-family: 'IBM Plex Mono', monospace;\n}\n\n/* Style the footer */\nfooter {\n    padding: 1em;\n    color: white;\n    background-color: black;\n    clear: left;\n    text-align: center;\n}\n\n/* Style the container that holds the main section */\n.w3-container {\n    border-top: 1px solid black;\n}\n\n/* Style the container */\ndiv.container {\n    width: 100%; \n}\n\n/* Style the nav */\nnav {\n    float: left;\n    width: 10em;\n    height: 20em;\n    margin: 0;\n    padding: 1em;\n    background-color: lightcoral;\n}\n\n/* Style the nav ul */\nnav ul {\n    list-style-type: none;\n    padding: 1em;\n}\n\n/* Style the nav li elements to give spacing between the links. */\nnav li {\n    margin-top: 1em;\n    margin-bottom: 1em;\n}\n\n/* Style the links under nav */\nnav ul a {\n    text-decoration: none;\n    font-family: 'Fjalla One', sans-serif;\n    font-size: 1.5em;\n}\n\n/* To increase font-size of links when user hovers over the links. */\nnav ul a:hover {\n    font-size: 2em; \n}\n\n/* Style the article */\narticle {\n    margin-left: 100px;\n    border-left: 10px solid gray;\n    padding-left: 2em;\n    padding-right: 2em;\n    overflow-y: auto;\n    position: relative;\n    font-size: 1.3em;\n    font-family: 'Barlow', sans-serif;\n}\n\n/* Style the image */\nimg {\n    /* Makes each image the same size */\n    width: 10em;\n    height: 10em;\n    object-fit: cover;\n}\n\n/* Style hideLink */\n#hideLink {\n    /* Gets rid of underline from anchor tags */\n    text-decoration: none;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id='top-section'>\n  <header id='title'>\n    {{title}}\n  </header>\n  <!-- <img width=\"300\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"> -->\n</div>\n\n<div class=\"w3-container\">\n<nav>\n  <ul>\n    <li><a href=\"https://www.linkedin.com/in/lamwinnie1/\">LinkedIn</a></li>\n    <li><a href=\"https://github.com/wwyl1234\">Github</a></li>\n    <li><a href=\"https://twitter.com/wwyl1234\">Twitter</a></li>\n    <li><a href=\"mailto:winnie.lam1234@gmail.com\">Contact</a></li>\n  </ul>\n</nav>\n<article>\n  <p>Hello! I am Winnie Lam!</p>\n\n  <p>I have a M.Math of Computer Science at University of Waterloo. \n    I also have a M.Math of Pure Mathematics at University of Waterloo. \n    Furthermore, I have a B.Ed. and a H.B.Sc at University of Toronto. \n    In my undergraduate days, I took a bunch of math and computer science courses and\n    I also worked part-time in various jobs like tutor and teaching assistant.\n  </p>\n  <p>\n    After my intensive education, I worked in the telecommunication industry as a software \n    developer in test role. Some people would call this test engineer, software quality\n    assurance analyst and so forth. I can test and I can code. I am familar with Linux\n    and networking tools (like ping, iperf). I am also familar with Python and recently added\n    JavaScript to my tools belt.\n  </p>\n  <p>\n    If you want to check what I have been up to, you can check my Twitter.\n  </p>\n  <p>\n    I am a goal-oriented person and enjoys trying new things and completing tasks.\n  </p>\n  <p>I currently enjoy the following activities which I self-taught:\n  </p>\n <div class=\"w3-row\">\n   <div class=\"w3-row-padding w3-padding-16 w3-center\">\n     <div class=\"w3-quarter\">\n       <h1>Painting</h1>\n       <img src=\"assets/painting.jpg\" align=\"center\">\n     </div>\n     <div class=\"w3-quarter\">\n       <h1>Drawing</h1>\n       <img src=\"assets/clothdrawing.jpg\" align=\"center\">\n     </div>\n     <div class=\"w3-quarter\">\n       <h1>Knitting</h1>\n       <img src=\"assets/knittedheadband.jpg\" align=\"center\">\n     </div>\n     <div class=\"w3-quarter\">\n       <h1>Playing Guitar</h1>\n       <img src=\"assets/guitar.jpg\" align=\"center\">\n     </div>\n   </div>\n </div>\n\n</article>\n\n\n\n</div>\n\n<footer>Copyright &copy; Winnie Lam</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Winnie Lam';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map