(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-signup-signup-module"],{

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n   \n    min-height: 600px;\n    max-width: 100%;\n    color: white;\n    background-image: url('seafood-watermark.png'), linear-gradient(-168deg, #4C6677 0%, #293545 100%);\n    background-size: cover;\n}\n.signupLogo{\n    background-image: url('logo.PNG');\n    height: 25px;\n    width: 100%;\n    background-position: center;\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n.signupBox {\n    /* border: 10px solid #2a4058; */\n    background-image: url('overview-seafood-bg.jpg'); \n    background-size: cover;\n    padding: 5% 3% 5% 3%;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);\n    border-radius: 25px;\n\n}\n.col-md-6 {\n    border: 10px solid #2a4058;\n   \n    background-color: #18518a70;\n  \n    margin-top: 20  px;\n}\nh3{\ntext-align: center;\ncolor: white\n\n}\n.jumbotron {\n \n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0dBQWdIO0lBQ2hILHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUNBQStDO0lBQy9DLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnREFBOEQ7SUFDOUQsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDJHQUEyRztJQUMzRyxtQkFBbUI7O0FBRXZCO0FBRUE7SUFDSSwwQkFBMEI7O0lBRTFCLDJCQUEyQjs7SUFFM0Isa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTs7SUFFSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICBcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvc2VhZm9vZC13YXRlcm1hcmsucG5nKSwgbGluZWFyLWdyYWRpZW50KC0xNjhkZWcsICM0QzY2NzcgMCUsICMyOTM1NDUgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5zaWdudXBMb2dve1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvbG9nby5QTkcpO1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5zaWdudXBCb3gge1xuICAgIC8qIGJvcmRlcjogMTBweCBzb2xpZCAjMmE0MDU4OyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvb3ZlcnZpZXctc2VhZm9vZC1iZy5qcGcpOyBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmc6IDUlIDMlIDUlIDMlO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksIDAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksIDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuXG59XG5cbi5jb2wtbWQtNiB7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICMyYTQwNTg7XG4gICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg1MThhNzA7XG4gIFxuICAgIG1hcmdpbi10b3A6IDIwICBweDtcbn1cbmgze1xudGV4dC1hbGlnbjogY2VudGVyO1xuY29sb3I6IHdoaXRlXG5cbn1cbi5qdW1ib3Ryb24ge1xuIFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4\"></div>\n        <div class=\"col-md-4 signupBox\">\n            <div class=\"form-group signupLogo\">\n            </div>\n            <h3>Sign Up</h3>\n            <form class=\"mt-4\" [formGroup]=\"registerForm\"\n                (ngSubmit)=\"onSignup(fname.value,lname.value,role.value,mobile.value,location.value,email.value,pass.value)\"\n                name=\"registration\">\n                <div class=\"row\">\n                    <div class=\"form-group col-6\">\n                        <label>First Name</label>\n                        <input #fname type=\"text\" formControlName=\"firstName\" class=\"form-control custom-input\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-6\">\n                        <label>Last Name</label>\n                        <input #lname type=\"text\" formControlName=\"lastName\" class=\"form-control custom-input\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>Role</label>\n                    <select #role formControlName=\"role\" [ngClass]=\"{ 'is-invalid': submitted && f.role.errors }\"\n                        class=\"form-control custom-input\">\n                        <option class=\"custom-select\" value=\"1\">Admin</option>\n                        <option class=\"custom-select\" value=\"2\">Manufacture</option>\n                        <option class=\"custom-select\" value=\"3\">Wholesaler</option>\n                        <option class=\"custom-select\" value=\"4\">Distributor</option>\n                        <option class=\"custom-select\" value=\"5\">Pharma</option>\n                        <option class=\"custom-select\" value=\"7\">Transporter</option>\n                    </select>\n                    <div *ngIf=\"submitted && f.role.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.role.errors.required\">Role is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n\n                    <label>Mobile No.</label>\n                    <input #mobile type=\"number\" pattern=\"[1-9]{1}[0-9]{9}\" formControlName=\"mobile\"\n                        class=\"form-control custom-input required\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\" min=0 max=\"100000000000\"\n                        oninput=\"validity.valid||(value='');\" />\n                    <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.mobile.errors.required\">Mobile No. is required</div>\n                        <div *ngIf=\"f.mobile.errors.minlength\">Mobile No. must be at least 10 characters\n                        </div>\n                        <div *ngIf=\"f.mobile.errors.maxlength\">Mobile No. must be less than 11 characters\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group \">\n                    <label>Location</label>\n                    <input #location type=\"text\" formControlName=\"location\" class=\"form-control custom-input\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\" />\n                    <div *ngIf=\"submitted && f.location.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.location.errors.required\">Location is required</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Email</label>\n                    <input #email type=\"email\" formControlName=\"email\" class=\"form-control custom-input\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                        <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                    </div>\n\n                </div>\n                <div class=\"form-group\">\n                    <label>Password</label>\n                    <input #pass type=\"password\" formControlName=\"password\" class=\"form-control custom-input\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                        <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group mt-4 text-center\">\n                    <button\n                        class=\"btn btn-primary gradient-btn align-items-center btn btn-primary d-flex gradient-btn justify-content-center\">\n                        <div class=\"text mr-2 ml-2\" *ngIf=\"!loading\">\n                            Register\n                        </div>\n                        <div class=\"d-flex align-items-center\" *ngIf=\"loading\">\n                            <div class=\"spinner-border text-secondary\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                            <div class=\"text mr-2 ml-2\">\n                                Loading...\n                            </div>\n                        </div>\n                    </button>\n                </div>\n            </form>\n            <p class=\"text-center\"> Already signed click for:<a class=\"link\" [routerLink]=\"'/login'\"\n                    style=\"margin-left:10px\"> Login</a></p>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _signuplog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signuplog */ "./src/app/user/signup/signuplog.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, formBuilder, router, http) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.status = [];
        this.resvalue = [];
        this.itemId = [];
        this.keys = [];
        this.myid = [];
        this.adminres = [];
        this.submitted = false;
        this.blockchainUrl = this.auth.blockchainUrl;
        this.loading = false;
        //file download code
        this.setting = {
            element: {
                dynamicDownload: null
            }
        };
    }
    SignupComponent.prototype.onSignup = function (fName, lName, role, mobile, location, email, pass, pkey, userId, transectionId) {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        var data = new _signuplog__WEBPACK_IMPORTED_MODULE_3__["register"](fName, lName, role, mobile, location, email, pass, pkey, userId, transectionId);
        this.auth.signup(data).subscribe(function (res) {
            _this.keys = res;
            console.log(_this.keys);
            //commmeting blockchain api
            //if (this.keys.role == 1) {
            // const Metadata = {
            //   "action": "createAdmin",
            //   "payloaddata": {
            //     "name": this.keys.firstName + ' ' + this.keys.lastName,
            //     "location": {
            //       "type": 1,
            //       "body": {
            //         "address": this.keys.location
            //       }
            //     },
            //     "email": this.keys.email
            //   },
            //   "private": this.keys.privateKey,
            //   "public": this.keys.publicKey
            // }
            // const httpOptions = {
            //   headers: new HttpHeaders({
            //     'Content-Type': 'application/json'
            //   })
            // };
            // var x = this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
            //   (val) => {
            //     console.log(val);
            //     this.resvalue = val;
            //     this.status = JSON.parse(this.resvalue.response.body);
            //     console.log('json value2', this.status.data[0].status);
            //     this.statusValue = this.status.data[0].status;
            //     this.itemId = this.status.data[0].id;
            //     this.myid = JSON.stringify(this.keys) + "'transectionId':" + (this.itemId);
            //     this.dyanmicDownloadByHtmlTag({
            //       fileName: this.keys.firstName + ' ' + this.keys.lastName,
            //       text: this.myid
            //     });
            //     alert(' User Successfully Registered!!');
            //     this.router.navigate(['/login']);
            //   });
            // }
            //else {
            // this.dyanmicDownloadByHtmlTag({
            //   fileName: this.keys.firstName + ' ' + this.keys.lastName,
            //   text: JSON.stringify(res)
            // });
            alert('Successfully Registered!!');
            _this.router.navigate(['/login']);
            // }
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            alert(JSON.stringify(err));
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
        });
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        // stop here if form is invalid
    };
    SignupComponent.prototype.dyanmicDownloadByHtmlTag = function (arg) {
        if (!this.setting.element.dynamicDownload) {
            this.setting.element.dynamicDownload = document.createElement('a');
        }
        var element = this.setting.element.dynamicDownload;
        var fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
        element.setAttribute('href', "data:" + fileType + ";charset=utf-8," + encodeURIComponent(arg.text));
        element.setAttribute('download', arg.fileName);
        var event = new MouseEvent("click");
        element.dispatchEvent(event);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.module.ts":
/*!**********************************************!*\
  !*** ./src/app/user/signup/signup.module.ts ***!
  \**********************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.component */ "./src/app/user/signup/signup.component.ts");






var routes = [
    {
        path: '',
        component: _signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    },
];
var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-signup-signup-module.js.map