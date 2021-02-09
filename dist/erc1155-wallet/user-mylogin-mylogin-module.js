(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-mylogin-mylogin-module"],{

/***/ "./src/app/user/mylogin/mylogin.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/mylogin/mylogin.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.container{\n   \n    height: 100vh;\n    max-width: 100%;\n    color: white;\n    background-image: url('seafood-watermark.png'), linear-gradient(-168deg, #4C6677 0%, #293545 100%);\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.loginLogo{\n    background-image: url('logo.PNG');\n    height: 25px;\n    width: 100%;\n    background-position: center;\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n\n.loginBox {\n    /* border: 10px solid #2a4058; */\n    background-image: url('overview-seafood-bg.jpg'); \n    background-size: cover;\n    padding: 5% 3% 5% 3%;\n    box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);\n    border-radius: 25px;\n\n}\n\n.forget{\n    margin-left: 8vh;\n}\n\n.col-md-12{\n    text-align: -webkit-center;\n}\n\nbutton{\n    /* margin-left: 25%; */\n    width: 55%;\n    margin: 5%;\n}\n\ninput{\n    margin-top : 8%;\n}\n\nh3{\n    text-align: center;\n    color: white;\n    padding-bottom: 10px;\n    margin-top: 10%;\n    font-size: 17px;\n    font-family: revert;\n}\n\n.jumbotron {\n    background-image: url('overview-seafood-bg.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9teWxvZ2luL215bG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOztJQUVJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtHQUFnSDtJQUNoSCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUNBQStDO0lBQy9DLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0RBQThEO0lBQzlELHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsMkdBQTJHO0lBQzNHLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdEQUE4RDtBQUNsRSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXlsb2dpbi9teWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNvbnRhaW5lcntcbiAgIFxuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3NlYWZvb2Qtd2F0ZXJtYXJrLnBuZyksIGxpbmVhci1ncmFkaWVudCgtMTY4ZGVnLCAjNEM2Njc3IDAlLCAjMjkzNTQ1IDEwMCUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dpbkxvZ297XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9sb2dvLlBORyk7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmxvZ2luQm94IHtcbiAgICAvKiBib3JkZXI6IDEwcHggc29saWQgIzJhNDA1ODsgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL292ZXJ2aWV3LXNlYWZvb2QtYmcuanBnKTsgXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nOiA1JSAzJSA1JSAzJTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksIDAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksIDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuXG59XG5cbi5mb3JnZXR7XG4gICAgbWFyZ2luLWxlZnQ6IDh2aDtcbn1cblxuLmNvbC1tZC0xMntcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuYnV0dG9ue1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAyNSU7ICovXG4gICAgd2lkdGg6IDU1JTtcbiAgICBtYXJnaW46IDUlO1xufVxuXG5pbnB1dHtcbiAgICBtYXJnaW4tdG9wIDogOCU7XG59XG5cbmgze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogcmV2ZXJ0O1xufVxuXG4uanVtYm90cm9uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL292ZXJ2aWV3LXNlYWZvb2QtYmcuanBnKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/mylogin/mylogin.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/mylogin/mylogin.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<div class=\"container\">\n    <div class=\"row w-100\">\n        <div class=\"col-md-4\"></div>\n        <div class=\"col-md-4 loginBox\">\n            <div class=\"form-group loginLogo\">\n\n            </div>\n            <h3>LOGIN TO YOUR ACCOUNT</h3>\n            <form [formGroup]=\"signinform\" (ngSubmit)=\"onSubmit(email.value,password.value)\">\n                <div class=\"form-group\">\n                    <!-- <label>Email</label> -->\n                    <input #email type=\"text\" placeholder=\"Email\" formControlName=\"email\"\n                        class=\"form-control custom-input\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                        <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <!-- <label>Password</label> -->\n                    <input #password type=\"password\" placeholder=\"Password\" formControlName=\"password\"\n                        class=\"form-control custom-input\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                        <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                    </div>\n                </div>\n                <div class=\"form-group col-md-12\">\n                    <button\n                        class=\"btn btn-primary gradient-btn align-items-center btn btn-primary d-flex gradient-btn justify-content-center\">\n                        <div class=\"text mr-2 ml-2\" *ngIf=\"!loading\">\n                            Login\n                        </div>\n                        <div class=\"d-flex align-items-center\" *ngIf=\"loading\">\n                            <div class=\"spinner-border text-secondary\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                            <div class=\"text mr-2 ml-2\">\n                                Loading...\n                            </div>\n                        </div>\n                    </button>\n                    <p><a [routerLink]=\"'/distributorqr'\" class=\"link\">Forget Password</a></p>\n                </div>\n            </form>\n            <p class=\"col-md-12\"> Click Here to <a [routerLink]=\"'/signup'\" class=\"link\">Sign up</a></p>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/mylogin/mylogin.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/mylogin/mylogin.component.ts ***!
  \***************************************************/
/*! exports provided: MyloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyloginComponent", function() { return MyloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userlog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userlog */ "./src/app/user/mylogin/userlog.ts");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var MyloginComponent = /** @class */ (function () {
    function MyloginComponent(route, httplog, formBuilder) {
        this.route = route;
        this.httplog = httplog;
        this.formBuilder = formBuilder;
        this.signinform = _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"];
        this.submitted = false;
        this.loading = false;
    }
    MyloginComponent.prototype.onSubmit = function (x, y) {
        var _this = this;
        this.submitted = true;
        if (this.signinform.invalid) {
            return;
        }
        else {
            this.loading = true;
            this.userlog = new _userlog__WEBPACK_IMPORTED_MODULE_3__["UserLog"](x, y);
            this.user = this.httplog.userlog(this.userlog);
            this.sub = this.user.subscribe(function (data) {
                var myrole = data.body;
                _this.tempToken = data.headers.get('x-token');
                _this.httplog.setTkn(_this.tempToken);
                localStorage.setItem("user", x);
                localStorage.setItem("pass", y);
                localStorage.setItem("id_token", _this.tempToken);
                localStorage.setItem("publicKey", 'privateKey');
                localStorage.setItem("role", myrole.role);
                localStorage.setItem("email", myrole.email);
                localStorage.setItem("userId", myrole.userId);
                localStorage.setItem("firstName", myrole.firstName);
                localStorage.setItem("lastName", myrole.lastName);
                console.log("User Data", myrole);
                console.log("User publicKey", myrole.publicKey);
                console.log(myrole.firstName, myrole.lastName);
                _this.loading = false;
                switch (myrole.role) {
                    case "1": {
                        _this.route.navigate(['/medicinedashboard']);
                        break;
                    }
                    case "2": {
                        //this.route.navigate(['/manufacture']);
                        _this.route.navigate(['/medicinedashboard']);
                        break;
                    }
                    case "3": {
                        _this.route.navigate(['/wholesalerdashboard1']);
                        break;
                    }
                    case "4": {
                        _this.route.navigate(['/distributordashboard1']);
                        break;
                    }
                    case "5": {
                        _this.route.navigate(['/sendpharma']);
                        break;
                    }
                    case "7": {
                        _this.route.navigate(['/transporter']);
                        break;
                    }
                    default: {
                        alert("User role not define");
                        break;
                    }
                }
            }, function (err) {
                _this.loading = false;
                console.log(err);
                alert("Email or password does not match or You are not a verified user");
            }, function () {
                console.log("User Data Checks Out");
            });
        }
    };
    MyloginComponent.prototype.ngOnInit = function () {
        var user = localStorage.getItem('user');
        var pass = localStorage.getItem("pass");
        if (pass != null) {
            this.onSubmit(user, pass);
        }
        else {
            console.log("not Available");
            this.signinform = this.formBuilder.group({
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]]
            });
        }
    };
    Object.defineProperty(MyloginComponent.prototype, "f", {
        get: function () { return this.signinform.controls; },
        enumerable: true,
        configurable: true
    });
    MyloginComponent.prototype.ngOnDestroy = function () {
        if (this.sub !== undefined) {
            this.sub.unsubscribe();
        }
    };
    MyloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mylogin',
            template: __webpack_require__(/*! ./mylogin.component.html */ "./src/app/user/mylogin/mylogin.component.html"),
            styles: [__webpack_require__(/*! ./mylogin.component.css */ "./src/app/user/mylogin/mylogin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], MyloginComponent);
    return MyloginComponent;
}());



/***/ }),

/***/ "./src/app/user/mylogin/mylogin.module.ts":
/*!************************************************!*\
  !*** ./src/app/user/mylogin/mylogin.module.ts ***!
  \************************************************/
/*! exports provided: MyloginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyloginModule", function() { return MyloginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mylogin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mylogin.component */ "./src/app/user/mylogin/mylogin.component.ts");






var routes = [
    {
        path: '',
        component: _mylogin_component__WEBPACK_IMPORTED_MODULE_5__["MyloginComponent"]
    },
];
var MyloginModule = /** @class */ (function () {
    function MyloginModule() {
    }
    MyloginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mylogin_component__WEBPACK_IMPORTED_MODULE_5__["MyloginComponent"]]
        })
    ], MyloginModule);
    return MyloginModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-mylogin-mylogin-module.js.map