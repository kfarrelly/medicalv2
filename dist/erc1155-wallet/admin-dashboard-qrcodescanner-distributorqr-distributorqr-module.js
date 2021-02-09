(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-dashboard-qrcodescanner-distributorqr-distributorqr-module"],{

/***/ "./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container{\n    min-height: 100vh;\n    max-width: 100%;\n    color: white;\n    background-image: url('seafood-watermark.png'), linear-gradient(-168deg, #4C6677 0%, #293545 100%);\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.forgot-password-logo{\n    background-image: url('logo.PNG');\n    height: 25px;\n    width: 100%;\n    background-position: center;\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n\n.forgot-password-box {\n    /* border: 10px solid #2a4058; */\n    background-image: url('overview-seafood-bg.jpg'); \n    background-size: cover;\n    padding: 5% 3% 5% 3%;\n    /* margin-top: 100px; */\n    box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);\n    border-radius: 25px;\n}\n\nh3{\ntext-align: center;\ncolor: white\n\n}\n\n.jumbotron {\n \n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL3FyY29kZXNjYW5uZXIvZGlzdHJpYnV0b3Jxci9kaXN0cmlidXRvcnFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0dBQXNIO0lBQ3RILHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQ0FBcUQ7SUFDckQsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnREFBb0U7SUFDcEUsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsMkdBQTJHO0lBQzNHLG1CQUFtQjtBQUN2Qjs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTs7QUFDQTs7SUFFSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQvcXJjb2Rlc2Nhbm5lci9kaXN0cmlidXRvcnFyL2Rpc3RyaWJ1dG9ycXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lcntcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvc2VhZm9vZC13YXRlcm1hcmsucG5nKSwgbGluZWFyLWdyYWRpZW50KC0xNjhkZWcsICM0QzY2NzcgMCUsICMyOTM1NDUgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcmdvdC1wYXNzd29yZC1sb2dve1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvbG9nby5QTkcpO1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQtYm94IHtcbiAgICAvKiBib3JkZXI6IDEwcHggc29saWQgIzJhNDA1ODsgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL292ZXJ2aWV3LXNlYWZvb2QtYmcuanBnKTsgXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nOiA1JSAzJSA1JSAzJTtcbiAgICAvKiBtYXJnaW4tdG9wOiAxMDBweDsgKi9cbiAgICBib3gtc2hhZG93OiAwIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksIDAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksIDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuaDN7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5jb2xvcjogd2hpdGVcblxufVxuLmp1bWJvdHJvbiB7XG4gXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row w-100\">\n\t\t<div class=\"col-md-4\"></div>\n\t\t<div class=\"col-md-4 forgot-password-box\">\n\t\t\t<div class=\"form-group forgot-password-logo\">\n\t\t\t</div>\n\t\t\t<form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t<label style=\"color: white\">Email-Id</label><br>\n\n\t\t\t\t\t<input #br type=\"email\" placeholder=\"Enter Your Email Id\"\n\t\t\t\t\t\tclass=\"form-control required custom-input\">\n\t\t\t\t\t<br>\n\n\t\t\t\t\t<div class=\"error-message\"\n\t\t\t\t\t\t*ngIf=\"registrationForm.get('emailval').touched && registrationForm.get('email').hasError('required')\">\n\t\t\t\t\t\tThe email is required.\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"error-message\" *ngIf=\"registrationForm.get('emailval').touched && registrationForm.get('email').hasError('pattern')\">  \n\t\t\t\t\t\t\tThe email format should be <i>['@domain.com']</i>  </div> -->\n\t\t\t\t\t<div class=\"form-group mt-4 text-center\">\n\t\t\t\t\t\t<button (click)=\"sendRequest(br.value)\" (click)=\"validateform()\"\n\t\t\t\t\t\t\tclass=\"btn btn-primary gradient-btn align-items-center btn btn-primary d-flex gradient-btn justify-content-center\">\n\t\t\t\t\t\t\t<div class=\"text mr-2 ml-2\" *ngIf=\"!loading\">\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"d-flex align-items-center\" *ngIf=\"loading\">\n\t\t\t\t\t\t\t\t<div class=\"spinner-border text-secondary\" role=\"status\">\n\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Loading...</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"text mr-2 ml-2\">\n\t\t\t\t\t\t\t\t\tLoading...\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"text-center\">\n\t\t\t\t\t\t<a [routerLink]=\"'/login'\" class=\"link \" style=\"margin-left:10px\"> Click here to Login</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\n\n<!-- <div class=\"jumbotron\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-3\"></div>\n\t\t\t<div class=\"col-md-6 \">\n\t\t\n\t\t</div>\n\t</div>\n</div>\n </div> -->"

/***/ }),

/***/ "./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DistributorqrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorqrComponent", function() { return DistributorqrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _distributorqr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./distributorqr */ "./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var DistributorqrComponent = /** @class */ (function () {
    function DistributorqrComponent(httpuser, qrReader) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        // Write regular expression to validate email id
        this.EMAIL_REGEX = "[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*";
        this.pharma1 = _distributorqr__WEBPACK_IMPORTED_MODULE_4__["Distributor"];
        this.loading = false;
    }
    DistributorqrComponent.prototype.ngOnInit = function () {
        // Initilize formgroup throgh formcontrol and apply validations
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            emailval: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.EMAIL_REGEX)])
        });
    };
    DistributorqrComponent.prototype.validateform = function () {
        // As we know that when user does not fill any value and click on submit button in that 
        // condition form will be invalid 
        if (this.registrationForm.invalid) {
            // Validation errors are called when user put focus on control but does't fill any value or wrong values
            // So we are making our control touched
            this.registrationForm.get('emailval').markAsTouched();
            // return false to prevent form submit
            return false;
        }
    };
    DistributorqrComponent.prototype.onSubmit = function (formvalue) {
        console.log(formvalue);
        console.log(this.registrationForm.value);
    };
    DistributorqrComponent.prototype.sendRequest = function (mail) {
        var _this = this;
        if (mail == '' || !mail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert("Kindly add valid email address");
            return false;
        }
        this.loading = true;
        console.log(mail);
        // this.pharma1 = new Distributor(mail);
        this.base = this.httpuser.distributorqr(mail);
        this.call = this.base.subscribe(function (data) {
            alert("Mail has been Sent!!");
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            console.log(err);
        }, function () {
            console.log("Mail has been Sent!!");
        });
    };
    DistributorqrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distributorqr',
            template: __webpack_require__(/*! ./distributorqr.component.html */ "./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.component.html"),
            styles: [__webpack_require__(/*! ./distributorqr.component.css */ "./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"]])
    ], DistributorqrComponent);
    return DistributorqrComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DistributorqrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorqrModule", function() { return DistributorqrModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _distributorqr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./distributorqr.component */ "./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.component.ts");






var routes = [
    {
        path: '',
        component: _distributorqr_component__WEBPACK_IMPORTED_MODULE_5__["DistributorqrComponent"]
    },
];
var DistributorqrModule = /** @class */ (function () {
    function DistributorqrModule() {
    }
    DistributorqrModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_distributorqr_component__WEBPACK_IMPORTED_MODULE_5__["DistributorqrComponent"]]
        })
    ], DistributorqrModule);
    return DistributorqrModule;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.ts ***!
  \******************************************************************************/
/*! exports provided: Distributor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Distributor", function() { return Distributor; });
var Distributor = /** @class */ (function () {
    function Distributor(mailid) {
        this.mailid = mailid;
    }
    return Distributor;
}());



/***/ })

}]);
//# sourceMappingURL=admin-dashboard-qrcodescanner-distributorqr-distributorqr-module.js.map