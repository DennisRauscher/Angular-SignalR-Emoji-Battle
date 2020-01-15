(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout>\r\n  <nb-layout-header fixed>💣 Emoji Battle | 2019 🌍</nb-layout-header>\r\n\r\n  <nb-sidebar>\r\n\r\n  </nb-sidebar>\r\n\r\n  <nb-layout-column>\r\n    <router-outlet></router-outlet>\r\n  </nb-layout-column>\r\n</nb-layout>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_view_search_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-view/search-view.component */ "./src/app/search-view/search-view.component.ts");
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/game.service */ "./src/app/shared/game.service.ts");









var appRoutes = [
    { path: 'search', component: _search_view_search_view_component__WEBPACK_IMPORTED_MODULE_7__["SearchViewComponent"] },
    { path: '', redirectTo: '/search', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _search_view_search_view_component__WEBPACK_IMPORTED_MODULE_7__["SearchViewComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbProgressBarModule"]
            ],
            providers: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"], _shared_game_service__WEBPACK_IMPORTED_MODULE_8__["GameService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/search-view/search-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-view/search-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card [nbSpinner]=\"searchingForOpponent\" nbSpinnerStatus=\"danger\" *ngIf=\"state == 0\">\r\n  <nb-card-header>\r\n    Search\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <p>\r\n      Currently {{gameService.currentPlayersOnline}} players online 👨‍👩‍👦‍👦\r\n    </p>\r\n    <button nbButton shape=\"rectangle\" hero status=\"primary\" (click)=\"aiActivated = false; searchForOpponent()\">Search Opponent 💪</button>\r\n    <button nbButton shape=\"rectangle\" hero status=\"primary\" (click)=\"aiActivated = true; searchForOpponent();\">Vs Evil AI 👿</button>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n<div *ngIf=\"state > 0\">\r\n  <nb-card nbSpinnerStatus=\"danger\">\r\n    <nb-card-header>\r\n      You 👦\r\n    </nb-card-header>\r\n    <nb-card-body>\r\n      <button nbButton shape=\"round\" status=\"primary\" [disabled]=\"choosen != 0 && choosen != 1\" [hero]=\"choosen == 1\"\r\n        (click)=\"choose(1)\">👻</button>\r\n      <button nbButton shape=\"round\" status=\"primary\" [disabled]=\"choosen != 0 && choosen != 2\" [hero]=\"choosen == 2\"\r\n        (click)=\"choose(2)\">👽</button>\r\n      <button nbButton shape=\"round\" status=\"primary\" [disabled]=\"choosen != 0 && choosen != 3\" [hero]=\"choosen == 3\"\r\n        (click)=\"choose(3)\">🤖</button>\r\n    </nb-card-body>\r\n  </nb-card>\r\n  <nb-card nbSpinnerStatus=\"danger\">\r\n    <nb-card-header>\r\n      {{status}}\r\n    </nb-card-header>\r\n    <nb-card-body>\r\n      <nb-progress-bar [value]=\"getRemainingTimePrec()\" status=\"primary\">{{remainingTime}}s left</nb-progress-bar>\r\n    </nb-card-body>\r\n  </nb-card>\r\n  <nb-card nbSpinnerStatus=\"danger\">\r\n    <nb-card-header>\r\n      <span *ngIf=\"!aiActivated\">Opponent 👨‍</span>\r\n      <span *ngIf=\"aiActivated\">AI 🤖</span>\r\n    </nb-card-header>\r\n    <nb-card-body>\r\n      <button nbButton shape=\"round\" status=\"danger\" [hero]=\"opponentChoosen == 1\"\r\n        [disabled]=\"opponentChoosen != 1\">👻</button>\r\n      <button nbButton shape=\"round\" status=\"danger\" [hero]=\"opponentChoosen == 2\"\r\n        [disabled]=\"opponentChoosen != 2\">👽</button>\r\n      <button nbButton shape=\"round\" status=\"danger\" [hero]=\"opponentChoosen == 3\"\r\n        [disabled]=\"opponentChoosen != 3\">🤖</button>\r\n    </nb-card-body>\r\n  </nb-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/search-view/search-view.component.scss":
/*!********************************************************!*\
  !*** ./src/app/search-view/search-view.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXZpZXcvQzpcXEVudHdpY2tsdW5nXFxWaXN1YWwgU3R1ZGlvIENvZGVcXFNpZGVQcm9qZWN0c1xcRW1vamktQmF0dGxlXFxjbGllbnQvc3JjXFxhcHBcXHNlYXJjaC12aWV3XFxzZWFyY2gtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC12aWV3L3NlYXJjaC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/search-view/search-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-view/search-view.component.ts ***!
  \******************************************************/
/*! exports provided: SearchViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchViewComponent", function() { return SearchViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/game.service */ "./src/app/shared/game.service.ts");



var SearchViewComponent = /** @class */ (function () {
    function SearchViewComponent(gameService) {
        this.gameService = gameService;
        this.searchingForOpponent = false;
        this.choosen = 0;
        this.opponentChoosen = 0;
        this.status = 'Pick something! 🙌🏻';
        this.remainingTime = 30;
        this.state = 0; // 0 = befor search; 1 = match begin; 2 = match end
        this.outcome = 0; // 0 = draw; 1 = win; 2 = lose
        this.aiActivated = false;
    }
    SearchViewComponent.prototype.reset = function () {
        this.state = 0;
        this.remainingTime = 30;
        this.outcome = 0;
        this.choosen = 0;
        this.opponentChoosen = 0;
        this.status = 'Pick something! 🙌🏻';
        clearInterval(this.countdownInterv);
    };
    SearchViewComponent.prototype.searchForOpponent = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.searchingForOpponent = true;
                        if (!this.aiActivated) return [3 /*break*/, 1];
                        this.startGame();
                        return [3 /*break*/, 3];
                    case 1:
                        this.gameService.connection.on('StartGame', function () {
                            console.log('Found enemy!');
                            _this.startGame();
                        });
                        this.gameService.connection.on('FinishGame', function (choice) {
                            console.log('Game finished!');
                            _this.finishGame(choice);
                        });
                        return [4 /*yield*/, this.gameService.enterSearch()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SearchViewComponent.prototype.startGame = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.state = 1;
                this.searchingForOpponent = false;
                this.countdownInterv = setInterval(function () {
                    _this.remainingTime -= 1;
                    if (_this.remainingTime === 0) {
                        clearInterval(_this.countdownInterv);
                    }
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    SearchViewComponent.prototype.choose = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.choosen === 0) {
                    this.choosen = id;
                    this.status = 'Waiting for opponent! 😵';
                    if (this.aiActivated) {
                        setTimeout(function () { return _this.finishGame(Math.floor(Math.random() * 3) + 1); }, 2000);
                    }
                    else {
                        this.gameService.setChoice(id);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    SearchViewComponent.prototype.getRemainingTimePrec = function () {
        return Math.floor(this.remainingTime / 30 * 100);
    };
    SearchViewComponent.prototype.finishGame = function (opponentChoosen) {
        var _this = this;
        this.state = 2;
        clearInterval(this.countdownInterv);
        this.opponentChoosen = opponentChoosen;
        this.outcome = this.getOutcome(this.choosen, opponentChoosen);
        switch (this.outcome) {
            case 0:
                this.status = 'Draw, try again.. 🤯';
                setTimeout(function () { _this.reset(); _this.startGame(); }, 5000);
                break;
            case 1:
                this.status = 'You won! 👑';
                setTimeout(function () { _this.reset(); }, 5000);
                break;
            case 2:
                this.status = 'Your enemy won! 💀';
                setTimeout(function () { _this.reset(); }, 5000);
                break;
            default:
                break;
        }
    };
    SearchViewComponent.prototype.getOutcome = function (myChoice, enemyChoice) {
        if (myChoice === enemyChoice) {
            return 0;
        }
        if (myChoice === 1 && enemyChoice === 2) {
            return 1;
        }
        if (enemyChoice === 1 && myChoice === 2) {
            return 2;
        }
        if (myChoice === 2 && enemyChoice === 3) {
            return 1;
        }
        if (enemyChoice === 2 && myChoice === 3) {
            return 2;
        }
        if (myChoice === 3 && enemyChoice === 1) {
            return 1;
        }
        if (enemyChoice === 3 && myChoice === 1) {
            return 2;
        }
    };
    SearchViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-view',
            template: __webpack_require__(/*! ./search-view.component.html */ "./src/app/search-view/search-view.component.html"),
            styles: [__webpack_require__(/*! ./search-view.component.scss */ "./src/app/search-view/search-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], SearchViewComponent);
    return SearchViewComponent;
}());



/***/ }),

/***/ "./src/app/shared/game.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/game.service.ts ***!
  \****************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");



var GameService = /** @class */ (function () {
    function GameService() {
        this.currentPlayersOnline = 0;
        this.initConnection();
    }
    GameService.prototype.initConnection = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]().withUrl('/gamehub').build();
                        this.connection.on('UpdatePlayers', function (numPlayers) {
                            _this.currentPlayersOnline = numPlayers;
                        });
                        return [4 /*yield*/, this.connection.start().catch(function (error) { return console.log(error); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameService.prototype.enterSearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.send('EnterSearch')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameService.prototype.setChoice = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.send('SetChoice', id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Entwicklung\Visual Studio Code\SideProjects\Emoji-Battle\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map