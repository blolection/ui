webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BallotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vote_vote__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BallotPage = (function () {
    function BallotPage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.candidates = [
            { name: "Vasundhara Raje", img: "http://vasundhararaje.in/wp-content/uploads/2016/06/vasundhara-raje-vidyanjali-homepage.jpg", symbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Lotos_flower_symbol.svg/150px-Lotos_flower_symbol.svg.png", description: "Blah, blah, Blah" },
            { name: "Bhanu", img: "https://timesofindia.indiatimes.com/photo/msid-58915663/58915663.jpg?143864", description: "Tata tata tata" },
            { name: "Manohar Lal", img: "", description: "Ola Gama beta tata" }
        ];
        storage.ready().then(function () {
            storage.get('user').then(function (user) {
                _this.user = JSON.parse(user);
                console.log("This is user data");
                console.log(_this.user);
            }).catch(console.log);
        });
    }
    BallotPage.prototype.vote = function (name) {
        var _this = this;
        console.log(name + " got the vote");
        this.user.vote = name;
        this.storage.set('user', JSON.stringify(this.user));
        this.storage.ready().then(function () {
            _this.storage.get('user').then(function (user) {
                _this.user = JSON.parse(user);
                console.log("This is user data");
                console.log(_this.user);
            }).catch(console.log);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__vote_vote__["a" /* VotePage */]);
    };
    BallotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ballot',template:/*ion-inline-start:"/home/harish/election/src/pages/ballot/ballot.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ballot\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <!-- <ion-list>\n        <ion-item *ngFor="let c of candidates" >\n            <ion-label>{{c.name}} </ion-label> \n            <ion-toggle [(ngModel)]="c.vote"  (ngModelChange)="vote(c.name,c.vote)"></ion-toggle>\n\n\n        </ion-item>\n        \n      </ion-list> -->\n<div *ngFor="let c of candidates; let i = index" >\n      <ion-card >\n          <ion-card-content>\n            <ion-card-title>\n                <ion-label>\n                    <ion-img width="8" height="8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Lotos_flower_symbol.svg/150px-Lotos_flower_symbol.svg.png"></ion-img> \n                    {{c.name}} \n                    \n                </ion-label> \n                <!-- <ion-toggle [(ngModel)]="c.vote"  (ngModelChange)="vote(c.name,c.vote)"></ion-toggle>                   -->\n              </ion-card-title>\n              <ion-grid>\n                  <ion-row>\n                    <ion-col col-1></ion-col>\n                    <ion-col col-10>\n                        <img src={{c.img}}>            \n                      </ion-col>\n                    <ion-col>\n                        <button ion-button (click)="vote(c.name)" full>Vote</button>\n                      </ion-col>\n                  </ion-row>\n              </ion-grid>\n            <p>\n              {{c.description}}\n            </p>\n     \n\n          </ion-card-content>\n        </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/harish/election/src/pages/ballot/ballot.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], BallotPage);
    return BallotPage;
}());

//# sourceMappingURL=ballot.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/vote/vote.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ballot_ballot__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(navCtrl, storage, auth) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.auth = auth;
        this.otpNow = false;
        this.otpAttempt = 0;
    }
    SignupPage.prototype.GetOTP = function () {
        var _this = this;
        this.response = {};
        if ((Number(this.phone) / 1000000000 >= 1)) {
            if (this.otpAttempt == 0) {
                this.auth.getOTP(Number(this.phone)).then(function (res) {
                    _this.response = res;
                    console.log("This is response", _this.response);
                    if (_this.response.status) {
                        _this.otpNow = true;
                        _this.otpAttempt = 1;
                    }
                });
            }
            // this.usersService.getUsers().then((res)=>{
            //   this.userList=res;
            //   console.log(res)
            // }, (err)=>{
            //   console.log(err);
            // });
        }
        else {
            console.log("incorrect number");
        }
    };
    SignupPage.prototype.SubmitOTP = function () {
        var _this = this;
        this.response = {};
        if (Number(this.otp) / 10000 >= 1) {
            this.auth.getToken(this.phone, this.otp).then(function (res) {
                _this.response = res;
                console.log("This is response", _this.response);
                if (_this.response.status) {
                    _this.storage.set('user', JSON.stringify({ phone: _this.phone, token: _this.response.token, vote: '' }));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ballot_ballot__["a" /* BallotPage */]);
                }
            });
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/harish/election/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Signup\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <img src="assets/img/banner.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <form id="signup-form9">\n    <div id="signup-markdown2" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Enter your\n        <strong>\n          Phone No.\n        </strong>\n        to Signup:\n      </p>\n    </div>\n    <ion-item id="signup-input8" phone="">\n      <ion-label>+91</ion-label>\n      <ion-input  [(ngModel)]="phone" [ngModelOptions]="{standalone:true}" type="tel" placeholder="9876543210"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button full (click)="GetOTP()">Signup</button>\n    <br>  \n    <div *ngIf="otpNow">\n    <div id="signup-markdown3" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Enter the\n        <strong>\n          OTP\n        </strong>\n        you just received\n      </p>\n    </div>\n    <ion-item id="signup-input9" [(ngModel)]="otp" [ngModelOptions]="{standalone:true}">\n      <ion-label></ion-label>\n      <ion-input type="tel" placeholder="OTP"></ion-input>\n    </ion-item>\n    <button ion-button full (click)="SubmitOTP()">Submit</button>\n    \n  </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/harish/election/src/pages/signup/signup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.getOTP = function (phone) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://192.168.43.25:4567/api/getotp', { number: phone })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.getToken = function (phone, otp) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://192.168.43.25:4567/api/verifyotp', { number: phone, otp: otp })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_ballot_ballot__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_vote_vote__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_ballot_ballot__["a" /* BallotPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_vote_vote__["a" /* VotePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/vote/vote.module#VotePageModule', name: 'VotePage', segment: 'vote', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_ballot_ballot__["a" /* BallotPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_vote_vote__["a" /* VotePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_ballot_ballot__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_vote_vote__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__["a" /* SignupPage */];
        });
        storage.ready().then(function () {
            storage.get('user').then(function (user) {
                console.log('Getting storage');
                _this.user = JSON.parse(user);
                console.log("This is user data");
                console.log(_this.user);
                if (_this.user) {
                    if (_this.user.token.length && _this.user.vote.length > 0) {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_vote_vote__["a" /* VotePage */];
                    }
                    else if (_this.user.token.length) {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_ballot_ballot__["a" /* BallotPage */];
                    }
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__["a" /* SignupPage */];
                }
            }).catch(console.log);
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/harish/election/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/harish/election/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VotePage = (function () {
    function VotePage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        storage.get('user').then(function (user) {
            _this.user = JSON.parse(user);
            console.log("This is user data");
            console.log(_this.user);
            _this.vote = _this.user.vote;
            console.log("Vote is:", _this.vote);
        }).catch(console.log);
    }
    VotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VotePage');
    };
    VotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vote',template:/*ion-inline-start:"/home/harish/election/src/pages/vote/vote.html"*/'<!--\n  Generated template for the VotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Vote</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card >\n    <ion-card-content>\n      <ion-card-title>\n          <ion-label>\n              Your vote counts!  \n          </ion-label> \n        </ion-card-title>\n      <p>\n        You voted for           <span style="font-size: 150%; background: inherit;">\n          {{vote}}\n          \n          </span>   \n      </p>\n\n        \n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/harish/election/src/pages/vote/vote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], VotePage);
    return VotePage;
}());

//# sourceMappingURL=vote.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map