(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/dashboard/qrcodescanner/distributorqr/distributorqr.module": [
		"./src/app/admin/dashboard/qrcodescanner/distributorqr/distributorqr.module.ts",
		"admin-dashboard-qrcodescanner-distributorqr-distributorqr-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	],
	"./user/mylogin/mylogin.module": [
		"./src/app/user/mylogin/mylogin.module.ts",
		"user-mylogin-mylogin-module"
	],
	"./user/signup/signup.module": [
		"./src/app/user/signup/signup.module.ts",
		"user-signup-signup-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/agent/agent-create/agent-create.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/agent/agent-create/agent-create.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-top:50px;\n}\ntable{\n    width: 100%;\n    background-color: white;\n}\ntd {\n    /* width: 100%; */\n    /* background: white; */\n    border-bottom-color: #b5b3b3;\n    border-color: #454d55 !important;\n    color: #13343c;\n}\nth{\n  border: none !important;\n  background-color: #2a6371; \n  color:White;\n  font-family: Muli,Helvetica Neue,Arial,sans-serif;\n  font-weight: 600;\n}\nbutton:hover{\n    border: 1.5px solid #454d55;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWdlbnQvYWdlbnQtY3JlYXRlL2FnZW50LWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLGNBQWM7QUFDbEI7QUFHQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlEQUFpRDtFQUNqRCxnQkFBZ0I7QUFDbEI7QUFFQTtJQUNJLDJCQUEyQjs7QUFFL0IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZ2VudC9hZ2VudC1jcmVhdGUvYWdlbnQtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6NTBweDtcbn1cbnRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG50ZCB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2I1YjNiMztcbiAgICBib3JkZXItY29sb3I6ICM0NTRkNTUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzEzMzQzYztcbn1cblxuIFxudGh7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE2MzcxOyBcbiAgY29sb3I6V2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBNdWxpLEhlbHZldGljYSBOZXVlLEFyaWFsLHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM0NTRkNTU7XG4gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/agent/agent-create/agent-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/agent/agent-create/agent-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\"> \n  <div class=\"table-responsive\">\n    <table class=\"table table-striped table-hover text-center\">\n      <thead class=\"theme-table\">\n        <tr>\n          <th>User Name</th>\n          <th>Mobile No.</th>\n          <th>Email</th>\n          <th>Role</th>\n          <th>Email Verified</th>\n          <th></th>\n          <th></th>\n        </tr>\n      </thead>\n    \n      <tbody>\n        <tr *ngFor=\"let distdata  of user\">\n            <td>{{distdata.firstName}} {{distdata.lastName}}</td>\n            <td>{{distdata.mobileNo}}</td>\n            <td>{{distdata.email}}</td>\n            <td>{{distdata.role}}</td>\n            <td><span *ngIf=\"distdata.status==1\">Yes</span><span *ngIf=\"distdata.status==0\">No</span></td>\n            <td><button type=\"button\"  (click)=\"saveUser(distdata.firstName,distdata.lastName,distdata.role,distdata.mobileNo,distdata.location,distdata.email,distdata.password,distdata.publicKey,distdata.userId)\" class=\"btn btn-success\">Accept</button></td>\n            <td><button (click)=\"deleteUser(distdata._id)\" #completeModal class=\"btn btn-danger\">Reject</button></td>\n        </tr>\n      </tbody>\n      \n      <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></tfoot>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/agent/agent-create/agent-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/agent/agent-create/agent-create.component.ts ***!
  \********************************************************************/
/*! exports provided: AgentCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentCreateComponent", function() { return AgentCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_user_signup_signuplog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/signup/signuplog */ "./src/app/user/signup/signuplog.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AgentCreateComponent = /** @class */ (function () {
    function AgentCreateComponent(http, router, http1) {
        this.http = http;
        this.router = router;
        this.http1 = http1;
        this.user = [];
        this.itemId = [];
        this.itemId1 = [];
        this.status = [];
        this.transId = [];
        this.blockchain = [];
        this.blockchain2 = [];
        this.submitted = false;
        this.blockchainUrl = this.http.blockchainUrl;
        this.batchUrl = this.http;
    }
    AgentCreateComponent.prototype.ngOnInit = function () {
        this.allUser();
    };
    AgentCreateComponent.prototype.createmedicine = function () {
        alert("Successfully created");
    };
    AgentCreateComponent.prototype.saveUser = function (fName, lName, role, mobile, location, email, pass, pkey, userId, transectionId) {
        var _this = this;
        var that = this;
        var data = new src_app_user_signup_signuplog__WEBPACK_IMPORTED_MODULE_4__["register"](fName, lName, role, mobile, location, email, pass, pkey, userId, transectionId);
        this.http.saveSignup(data).subscribe(function (res) {
            alert('Request Accepted...');
            var el = _this.completeModal.nativeElement;
            el.click();
        });
        if (role == 1) {
            var data_1 = new src_app_user_signup_signuplog__WEBPACK_IMPORTED_MODULE_4__["register"](fName, lName, role, mobile, location, email, pass, pkey, userId, transectionId);
            this.http.saveSignup(data_1).subscribe(function (res) {
                alert('Request Accepted...');
                var el = _this.completeModal.nativeElement;
                el.click();
            });
        }
        else {
            console.log('if the role is not 1', fName, lName);
            var data_2 = new src_app_user_signup_signuplog__WEBPACK_IMPORTED_MODULE_4__["register"](fName, lName, role, mobile, location, email, pass, pkey, userId, this.itemId);
            this.http.saveSignup(data_2).subscribe(function (res) {
                alert('Request Accepted');
            });
            this.mypublickey = localStorage.getItem("publicKey");
            this.privateKey = localStorage.getItem("privateKey");
            this.submitted = true;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            // const Metadata = {
            //   "action": "registerUsers",
            //   "payloaddata": {
            //     "name": fName + ' ' + lName,
            //     "email": email,
            //     "contactNumber": mobile,
            //     "role": role,
            //     "location": {
            //       "type": 1,
            //       "body": {
            //         "address": location
            //       }
            //     },
            //     "publicKey": pkey
            //   },
            //   "private": this.privateKey,
            //   "public": this.mypublickey
            // }
            // const httpOptions = {
            //   headers: new HttpHeaders({
            //     'Content-Type': 'application/json'
            //   })
            // };
            // var x = this.http1.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
            //   (val) => {
            //     console.log("POST call successful value returned in body", val);
            //     this.blockchain = val;
            //     if (that.http.IsJsonString(this.blockchain.response.body)) {
            //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //       this.status = JSON.parse(this.blockchain.response.body);            
            //       this.statusValue = this.status.data[0].status;
            //       this.itemId = this.status.data[0].id;
            //       if (this.statusValue == 'COMMITTED') {
            //         console.log('saving data to database',fName,lName);
            //         let data = new register(fName, lName, role, mobile, location, email, pass, pkey, userId, this.itemId);
            //         this.http.saveSignup(data).subscribe((res) => {
            //           alert('Request Accepted');
            //           let el: HTMLElement = this.completeModal.nativeElement;
            //           el.click(); 
            //         });
            //       }
            //       else {
            //         alert('Request Rejected');
            //       }
            //     } else {
            //       that.http1.get(this.http.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //         this.blockchain2 =val
            //         if (that.http.IsJsonString(this.blockchain2.body)) {
            //           this.status = JSON.parse(this.blockchain2.body);
            //           console.log('json value2', this.status.data[0].status);
            //           this.statusValue = this.status.data[0].status;
            //           this.itemId = this.status.data[0].id;
            //           if (this.statusValue == 'COMMITTED') {
            //             console.log('else saving data to database',fName,lName);
            //             let data = new register(fName, lName, role, mobile, location, email, pass, pkey, userId, this.itemId);
            //             this.http.saveSignup(data).subscribe((res) => {
            //               alert('Request Accepted');
            //             });
            //           }
            //           else {
            //             alert('Request Rejected');
            //           }
            //         }
            //       })
            //     }
            //   // }).catch(function (err) {
            //   //   console.log(err.message);
            //   });
        }
    };
    AgentCreateComponent.prototype.allUser = function () {
        var _this = this;
        this.http.getallUser().subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
        });
    };
    AgentCreateComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.http.deleteUser(id).subscribe(function (res) {
            _this.allUser();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AgentCreateComponent.prototype, "completeModal", void 0);
    AgentCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agent-create',
            template: __webpack_require__(/*! ./agent-create.component.html */ "./src/app/admin/agent/agent-create/agent-create.component.html"),
            styles: [__webpack_require__(/*! ./agent-create.component.css */ "./src/app/admin/agent/agent-create/agent-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AgentCreateComponent);
    return AgentCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/agent/agent-detail/agent-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/agent/agent-detail/agent-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FnZW50L2FnZW50LWRldGFpbC9hZ2VudC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/agent/agent-detail/agent-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/agent/agent-detail/agent-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  agent-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/agent/agent-detail/agent-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/agent/agent-detail/agent-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: AgentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentDetailComponent", function() { return AgentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AgentDetailComponent = /** @class */ (function () {
    function AgentDetailComponent() {
    }
    AgentDetailComponent.prototype.ngOnInit = function () {
    };
    AgentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agent-detail',
            template: __webpack_require__(/*! ./agent-detail.component.html */ "./src/app/admin/agent/agent-detail/agent-detail.component.html"),
            styles: [__webpack_require__(/*! ./agent-detail.component.css */ "./src/app/admin/agent/agent-detail/agent-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AgentDetailComponent);
    return AgentDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/agent/agent-edit/agent-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/agent/agent-edit/agent-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FnZW50L2FnZW50LWVkaXQvYWdlbnQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/agent/agent-edit/agent-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/agent/agent-edit/agent-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  agent-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/agent/agent-edit/agent-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/agent/agent-edit/agent-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: AgentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentEditComponent", function() { return AgentEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AgentEditComponent = /** @class */ (function () {
    function AgentEditComponent() {
    }
    AgentEditComponent.prototype.ngOnInit = function () {
    };
    AgentEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agent-edit',
            template: __webpack_require__(/*! ./agent-edit.component.html */ "./src/app/admin/agent/agent-edit/agent-edit.component.html"),
            styles: [__webpack_require__(/*! ./agent-edit.component.css */ "./src/app/admin/agent/agent-edit/agent-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AgentEditComponent);
    return AgentEditComponent;
}());



/***/ }),

/***/ "./src/app/admin/agent/agent-list/agent-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/agent/agent-list/agent-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    background-color: white;\n  }\n\n  \n\ntd {\n  background: none;\n  border-bottom-color: #b5b3b3;\n  border-color: #454d55 !important;\n}\n\n  \n\nth{\n  border: none !important;\n  background-color: #3d6d79; \n  color:White;\n  font-family: Muli,Helvetica Neue,Arial,sans-serif;\n  font-weight: 600;\n}\n\n  \n\nbutton:hover{\n  border: 1px #454d55;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWdlbnQvYWdlbnQtbGlzdC9hZ2VudC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCOzs7O0FBSUY7RUFDRSxnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGdDQUFnQztBQUNsQzs7OztBQUdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsaURBQWlEO0VBQ2pELGdCQUFnQjtBQUNsQjs7OztBQUVBO0VBQ0UsbUJBQW1COztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FnZW50L2FnZW50LWxpc3QvYWdlbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgXG5cbnRkIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2I1YjNiMztcbiAgYm9yZGVyLWNvbG9yOiAjNDU0ZDU1ICFpbXBvcnRhbnQ7XG59XG5cbiBcbnRoe1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNmQ3OTsgXG4gIGNvbG9yOldoaXRlO1xuICBmb250LWZhbWlseTogTXVsaSxIZWx2ZXRpY2EgTmV1ZSxBcmlhbCxzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5idXR0b246aG92ZXJ7XG4gIGJvcmRlcjogMXB4ICM0NTRkNTU7XG4gIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/agent/agent-list/agent-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/agent/agent-list/agent-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\"> \n  <div class=\"table-responsive\">\n    <table class=\"table table-striped table-hover text-center\">\n      <thead class=\"theme-table\">\n            <tr>\n              <th>User Name</th>\n              <th>Mobile No.</th>\n              <th>Email</th>\n              <th>Role</th>\n              <th></th>\n            </tr>  \n      </thead> \n      <tbody>\n        <tr *ngFor=\"let distdata of user\" >\n          <td>{{distdata.firstName}} {{distdata.lastName}}</td>\n          <td>{{distdata.mobileNo}}</td>\n          <td>{{distdata.email}}</td>\n          <td>{{distdata.role}}</td>       \n          <td><button  (click)=\"deletevalidUser(distdata._id,distdata.role)\" class=\"btn btn-danger\">Delete user</button></td>\n        </tr>\n      </tbody>\n      <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th><th></th></tr></tfoot>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/agent/agent-list/agent-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/agent/agent-list/agent-list.component.ts ***!
  \****************************************************************/
/*! exports provided: AgentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentListComponent", function() { return AgentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");



var AgentListComponent = /** @class */ (function () {
    function AgentListComponent(http) {
        this.http = http;
        this.user = [];
    }
    AgentListComponent.prototype.ngOnInit = function () {
        this.validUser();
    };
    AgentListComponent.prototype.validUser = function () {
        var _this = this;
        this.http.getvalidUser().subscribe(function (data) {
            _this.user = data;
        });
    };
    // YOu can delete admin by removin comment in below... deletevalidUser() function...
    AgentListComponent.prototype.deletevalidUser = function (id, role) {
        var _this = this;
        console.log('userId', role);
        if (role == 1) {
            if (confirm('This is Admin User, Do you Really want to Delete it?')) {
                alert('You can not Delete Admin User');
                // this.http.deletevalidUser(id).subscribe(res => {
                //  alert('Deleted');
                //  this.validUser();
                //  });
            }
        }
        else {
            if (confirm('Do you Really want to Delete it?')) {
                this.http.deletevalidUser(id).subscribe(function (res) {
                    alert('Deleted');
                    _this.validUser();
                });
            }
        }
    };
    AgentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agent-list',
            template: __webpack_require__(/*! ./agent-list.component.html */ "./src/app/admin/agent/agent-list/agent-list.component.html"),
            styles: [__webpack_require__(/*! ./agent-list.component.css */ "./src/app/admin/agent/agent-list/agent-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AgentListComponent);
    return AgentListComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/create-user/create-user.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/dashboard/create-user/create-user.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-top:50px;\n}\nh4{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDo1MHB4O1xufVxuaDR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/dashboard/create-user/create-user.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/dashboard/create-user/create-user.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\"> \n    <h4>Fill User Details</h4>\n    <form>\n        <div class=\"row\">\n            <div class=\"col\">\n               <div class=\"form-group\">\n                  <label>EthAddress</label>\n                  <input type=\"text\" class=\"form-control required\" maxlength=\"30\">\n                </div>\n             </div>\n          </div>\n\n      <div class=\"row\">\n        <div class=\"col\"><div class=\"form-group\">\n            <label>Name</label>\n            <input #name type=\"text\" class=\"form-control required\" maxlength=\"30\">\n          </div>\n        </div>\n\n       <div class=\"col\"><div class=\"form-group\">\n            <label>Location</label>\n            <input #location type=\"text\" class=\"form-control required\" maxlength=\"30\">\n          </div>\n        </div>\n      </div>    \n           \n      <div class=\"row\">\n         <div class=\"col-md-4\">\n             <label>Role</label>\n             <div class=\"form-group\">                        \n                <select #role  class=\"form-control\">\n                    <option value=\"manufacture\">Manufacture</option>\n                    <option value=\"wholesaler\">Wholesaler</option>\n                    <option value=\"distrubuter\">Distrubuter</option>\n                    <option value=\"pharma\">Pharma</option>                          \n                  </select>                        \n            </div>                \n          </div>\n       </div>  \n        <div class=\"row text-right\">\n          <div class=\"col\"><div class=\"form-group\">\n              <button class=\"btn btn-primary\" (click)=\"createuser(name.value,location.value,role.value)\">Create User</button>\n          </div>\n        </div>\n      </div>\n\n </form>\n</div>"

/***/ }),

/***/ "./src/app/admin/dashboard/create-user/create-user.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/dashboard/create-user/create-user.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _newuser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newuser */ "./src/app/admin/dashboard/create-user/newuser.ts");





var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(r, httpser) {
        this.r = r;
        this.httpser = httpser;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
    };
    CreateUserComponent.prototype.createuser = function (x, y, z) {
        this.newuser = new _newuser__WEBPACK_IMPORTED_MODULE_4__["newUser"](x, y, z);
        this.base = this.httpser.createuser(this.newuser);
        this.call = this.base.subscribe(function (data) {
            alert("User created");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    CreateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/admin/dashboard/create-user/create-user.component.html"),
            styles: [__webpack_require__(/*! ./create-user.component.css */ "./src/app/admin/dashboard/create-user/create-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/create-user/newuser.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/create-user/newuser.ts ***!
  \********************************************************/
/*! exports provided: newUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newUser", function() { return newUser; });
var newUser = /** @class */ (function () {
    function newUser(name, location, role) {
        this.name = name;
        this.location = location;
        this.role = role;
    }
    return newUser;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    background-color: #4a858b !important;\n    /* background-image: url(../../../assets/overview-seafood-bg.jpg); */\n    /* background-size: cover; */\n    color: white;\n}\n.name{\n    font-weight: 800;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n.navBarSec{\n    /* padding-top: 3vh; */\n    padding-top: 1.5vh;\n    padding-bottom: 1.5vh;\n    padding-left: 35%;\n}\n/* body{\n    background-color: rgb(206, 223, 255) !important;\n} */\n.notiBadge{\n    background-color: red;\n    color: white;\n    border-radius: 100%;\n    font-size: 70%;\n    padding: 2px 3px 2px 3px;\n    bottom: 34px;\n\n}\n/* .nav-item:hover{\n    border-bottom: solid;\n    border-color: #f4a018;\n} */\na{\n    height: 40px;\n}\na:hover{\n    border-bottom: solid;\n    border-color: #f4a018;\n}\n.logoutBtn{\n    background-color: #F4A018;\n    color: white;\n    height: 35px;\n    width: 80px;\n    margin: 5px;\n}\nbutton:hover{\n    border: 1.5px solid white;\n}\n.navItemNew{\n    color: white !important;\n    font-weight: 500;\n    font-family: system-ui;\n    margin-left: 5px;\n\n}\n.profileForm{\n    margin-top: 0px !important;\n    margin-left: 2vh;\n}\n.navSelectItem{\n    color: white ;\n    font-weight: 500;\n    font-family: system-ui;\n    background: rgba(0,0,0, 0.0);\n    border: none;\n    padding: 0%;\n    width: 70px;\n}\noption{\n    background-color:#17586a ;\n    font-size: 12px;\n}\nselect:hover{\n    border:  solid;\n    border-color: #f4a018;\n}\n/* .navbar-dark .navbar-nav .nav-link.bellicon{\n font-size: 0px;\n    background-image: url(notification-icon.png);\n    background-repeat: no-repeat;\n    background-size: 29px;\n    padding: 18px 25px;\n    background-position: center;\n    position: relative;\n}\n.navbar-dark .navbar-nav .nav-link.bellicon span {\n    position: absolute;\n    font-size: 10px;\n    background-color: #930e07;\n    width: 20px;\n    height: 20px;\n    text-align: center;\n    line-height: 19px;\n    border-radius: 100%;\n    border: 1px solid #fff;\n    top: 0;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLG9FQUFvRTtJQUNwRSw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDREQUE0RDtBQUNoRTtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBRUE7O0dBRUc7QUFFSDtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsWUFBWTs7QUFFaEI7QUFFQTs7O0dBR0c7QUFFSDtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZ0JBQWdCOztBQUVwQjtBQUdBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjtBQUdBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTg1OGIgIWltcG9ydGFudDtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL292ZXJ2aWV3LXNlYWZvb2QtYmcuanBnKTsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5uYW1le1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG4ubmF2QmFyU2Vje1xuICAgIC8qIHBhZGRpbmctdG9wOiAzdmg7ICovXG4gICAgcGFkZGluZy10b3A6IDEuNXZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjV2aDtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1JTtcbn1cblxuLyogYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAyMjMsIDI1NSkgIWltcG9ydGFudDtcbn0gKi9cblxuLm5vdGlCYWRnZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZm9udC1zaXplOiA3MCU7XG4gICAgcGFkZGluZzogMnB4IDNweCAycHggM3B4O1xuICAgIGJvdHRvbTogMzRweDtcblxufVxuXG4vKiAubmF2LWl0ZW06aG92ZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjRhMDE4O1xufSAqL1xuXG5he1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuYTpob3ZlcntcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICNmNGEwMTg7XG59XG5cbi5sb2dvdXRCdG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QTAxODtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG5idXR0b246aG92ZXJ7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB3aGl0ZTtcbn1cblxuXG4ubmF2SXRlbU5ld3tcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcblxufVxuXG5cbi5wcm9maWxlRm9ybXtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMnZoO1xufVxuXG5cbi5uYXZTZWxlY3RJdGVte1xuICAgIGNvbG9yOiB3aGl0ZSA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIDAuMCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAlO1xuICAgIHdpZHRoOiA3MHB4O1xufVxuXG5cbm9wdGlvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxNzU4NmEgO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuc2VsZWN0OmhvdmVye1xuICAgIGJvcmRlcjogIHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI2Y0YTAxODtcbn1cblxuXG5cblxuXG5cbi8qIC5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsuYmVsbGljb257XG4gZm9udC1zaXplOiAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKG5vdGlmaWNhdGlvbi1pY29uLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI5cHg7XG4gICAgcGFkZGluZzogMThweCAyNXB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rLmJlbGxpY29uIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzMGUwNztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICB0b3A6IDA7XG59ICovIl19 */"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-black\">\n  <!-- <a class=\"navbar-brand\" class=\"name\"> -->\n  <!-- </a> -->\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" [ngClass]=\"{ 'show': isShown }\"\n    data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div>\n    <img style=\"height: 30px; width: 100%;  padding-left: 5vh;\" src=\"../../../assets/logo.PNG\">\n  </div>\n\n  <div class=\"collapse navbar-collapse navBarSec\" id=\"navbarSupportedContent\">\n    <ul *ngIf=\"rolevalue\" class=\"navbar-nav mr-auto align-items-center\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link navItemNew\" routerLink=\"/medicinedashboard\" routerLinkActive=\"active\"> Dashboard</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link navItemNew\" routerLink=\"/agent/request\" routerLinkActive=\"active\"> Request</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link navItemNew\" routerLink=\"/agent/list\" routerLinkActive=\"active\"> Users</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link navItemNew\" routerLink=\"/medicine/list\" routerLinkActive=\"active\"> Medicines</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link navItemNew\" routerLink=\"/notification\" routerLinkActive=\"active\"> Notifications <span\n            class=\"notiBadge\">{{list.length}}</span></a>\n      </li>\n\n      <li class=\"nav-item\">\n        <div class=\"form-group mb-0\">\n          <select class=\"form-control navSelectItem\" (change)=\"navigate($event.target.value)\">\n            <option value=\"null\">Roles</option>\n            <option value=\"manufacturedashboard\">Manufacture</option>\n            <option value=\"wholesalerdashboard\">Wholesaler</option>\n            <option value=\"distributordashboard\">Distrubuter</option>\n            <option value=\"pharmadashboard\">Pharma</option>\n            <option value=\"transporterdashboard\">Transporte</option>\n          </select>\n        </div>\n      </li>\n\n      <li class=\"nav-item\">\n        <a [routerLink]=\"'/profile'\" class=\"nav-link navItemNew\">PROFILE </a>\n      </li>\n\n      <button (click)=\"logout()\" class=\"btn btn-outline-primary my-2 my-sm-0 logoutBtn\" *ngIf=\"flayg\"\n        type=\"submit\">LOGOUT</button>\n\n\n\n\n\n\n      <!-- <form class=\"form-inline my-2 my-lg- profileForm\">\n          <a [routerLink]=\"'/profile'\" class=\"navItemNew\">PROFILE </a>\n          <button (click)=\"logout()\" class=\"btn btn-outline-primary my-2 my-sm-0 logoutBtn\" *ngIf=\"flayg\" type=\"submit\">Logout</button>\n        </form> -->\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/distributordashboard\" routerLinkActive=\"active\" >View Distributor</a>\n      </li> \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/manufacturedashboard\" routerLinkActive=\"active\" >View Manufacture</a>\n      </li> \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/pharmadashboard\" routerLinkActive=\"active\" >View Pharma</a>\n      </li> \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/transporterdashboard\" routerLinkActive=\"active\" >View Transporter</a>\n      </li> \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/wholesalerdashboard\" routerLinkActive=\"active\" >View Wholesaler</a>\n      </li>  -->\n\n    </ul>\n    <ul *ngIf=\"Mrolevalue\" class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/medicinedashboard\" routerLinkActive=\"active\">DashBoard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/medicine/add\" routerLinkActive=\"active\">Add Medicine</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/medicine/list\" routerLinkActive=\"active\">View Medicine</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/package/add\" routerLinkActive=\"active\">Add Package</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/package/list\" routerLinkActive=\"active\">View Package</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link bellicon\" routerLink=\"/notification\" routerLinkActive=\"active\">View\n          Notifications<span>{{list.length}}</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/medicinereport\" routerLinkActive=\"active\">Medicine Report</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/package/report\" routerLinkActive=\"active\">Package Report</a>\n      </li>\n      <button (click)=\"logout()\" class=\"btn btn-outline-primary my-2 my-sm-0 logoutBtn\" *ngIf=\"flayg\"\n        type=\"submit\">LOGOUT</button>\n    </ul>\n    <ul *ngIf=\"Wrolevalue\" class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/wholesalerdashboard1\" routerLinkActive=\"active\">DashBoard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sendwholesaler\" routerLinkActive=\"active\">View Medicine</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/recievepackagewholesaler\" routerLinkActive=\"active\">View Package</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sendwholesalerreport\" routerLinkActive=\"active\">Medicine Report</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/recievepackagewholesalerreport\" routerLinkActive=\"active\">Package Report</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link bellicon\" routerLink=\"/notification\" routerLinkActive=\"active\">View\n          Notifications<span>{{list.length}}</span></a>\n      </li>\n      <button (click)=\"logout()\" class=\"btn btn-outline-primary my-2 my-sm-0 logoutBtn\" *ngIf=\"flayg\"\n        type=\"submit\">LOGOUT</button>\n    </ul>\n    <ul *ngIf=\"Drolevalue\" class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/distributordashboard1\" routerLinkActive=\"active\">DashBoard</a>\n\n      </li>\n\n      <li>\n        <a class=\"nav-link\" routerLink=\"/senddistributor\" routerLinkActive=\"active\">View Medicine</a>\n      </li>\n      <li>\n        <a class=\"nav-link\" routerLink=\"/recievepackage\" routerLinkActive=\"active\">View Package</a>\n      </li>\n      <li>\n        <a class=\"nav-link\" routerLink=\"/senddistributorreport\" routerLinkActive=\"active\">Medicine Report</a>\n      </li>\n      <li>\n        <a class=\"nav-link\" routerLink=\"/recievepackagereport\" routerLinkActive=\"active\">Package Report</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link bellicon\" routerLink=\"/notification\" routerLinkActive=\"active\">View\n          Notifications<span>{{list.length}}</span></a>\n      </li>\n      <button (click)=\"logout()\" class=\"btn btn-outline-primary my-2 my-sm-0 logoutBtn\" *ngIf=\"flayg\"\n        type=\"submit\">LOGOUT</button>\n    </ul>\n    <ul *ngIf=\"Prolevalue\" class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sendpharma\" routerLinkActive=\"active\">Pharma</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/recievepackagepharma\" routerLinkActive=\"active\">View Package</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sendpharmareport\" routerLinkActive=\"active\">Medicine Report</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/recievepackagepharmareport\" routerLinkActive=\"active\">Packages Report</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link bellicon\" routerLink=\"/notification\" routerLinkActive=\"active\">View\n          Notifications<span>{{list.length}}</span></a>\n      </li>\n      <button (click)=\"logout()\" class=\"btn btn-outline-primary my-2 my-sm-0 logoutBtn\" *ngIf=\"flayg\"\n        type=\"submit\">LOGOUT</button>\n    </ul>\n    <ul *ngIf=\"Trolevalue\" class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/transporter\" routerLinkActive=\"active\">Transporter</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/packagetransporter\" routerLinkActive=\"active\">Package Transporter</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link bellicon\" routerLink=\"/notification\" routerLinkActive=\"active\">View\n          Notifications<span>5</span></a>\n      </li>\n      <button (click)=\"logout()\" class=\"btn btn-outline-primary my-2 my-sm-0 logoutBtn\" *ngIf=\"flayg\"\n        type=\"submit\">LOGOUT</button>\n    </ul>\n\n\n  </div>\n\n\n\n\n\n</nav>\n\n\n<!-- private key Modal -->\n\n<div *ngIf=\"popuptask\" _ngcontent-c1 aria-labelledby=\"exampleModalLabel\" class=\"modal fade {{button1}}\"\n  id=\"basicExampleModal\" role=\"dialog\" tabindex=\"-1\" style=\"display: block; background-color: rgba(17, 16, 16, 0.82);\"\n  aria-modal=\"true\">\n  <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <form [formGroup]=\"privateKeyForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"modal-header\" style=\"    border-bottom: 1px solid #ffffff;\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Private Key</h5>\n        </div>\n        <div class=\"modal-body\">\n          <h6 style=\"color:red; float: right;\">Chance {{ 3 - count}}</h6>\n          <span style=\"color:green; text-align: right;\">You have only 3 chance to enter your valid Key</span>\n          <input type=\"text\" #privateK class=\"form-control required\" formControlName=\"key\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.key.errors }\" placeholder=\"Enter your private Key\">\n          <div *ngIf=\"submitted && f.key.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.key.errors.required\">Key is required</div>\n          </div>\n        </div>\n        <div class=\"modal-footer\" style=\"border-top: 1px solid #ffffff;\">\n          <button type=\"button\" class=\"btn btn-primary\" type=\"submit\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, httpuser, formBuilder) {
        this.router = router;
        this.httpuser = httpuser;
        this.formBuilder = formBuilder;
        this.primerykeyinput = [];
        this.count = 0;
        this.list = [];
        this.user = [];
        this.isShown = false;
        this.popuptask = false;
        this.submitted = false;
    }
    DashboardComponent.prototype.navigate = function (value) {
        if (value) {
            this.router.navigate([value]);
        }
        return false;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.privateKeyForm = this.formBuilder.group({
            key: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.button1 = 'show';
        //this.onloadcheckKey();
        this.myrole = localStorage.getItem("role");
        this.Manufacturerole();
        this.Wholesalerrole();
        this.Wholesalerrole1();
        this.Distributorrole();
        this.Pharmarole();
        this.Transporterrole();
        if (this.myrole == "1") {
            this.rolevalue = true;
        }
        else {
            this.rolevalue = false;
        }
        this.takenToken = this.httpuser.getTkn();
        if (!this.takenToken) {
            this.router.navigate(['/home']);
        }
        this.notification();
    };
    DashboardComponent.prototype.notification = function () {
        var _this = this;
        this.myrole = localStorage.getItem("role");
        if (this.myrole == 1) {
            this.httpuser.getvalidUser().subscribe(function (data) {
                _this.user = data;
            });
            return this.httpuser.getNotification().subscribe(function (data) {
                _this.list = data;
                console.log("All Notification", _this.list);
            });
        }
        else {
            return this.httpuser.getNotificationUserId().subscribe(function (data) {
                console.log(data);
                _this.list = data;
                console.log("user Notification", _this.list);
            });
        }
    };
    //propup for private key........
    DashboardComponent.prototype.onloadcheckKey = function () {
        this.mypublickey1 = localStorage.getItem("generatedPublickey");
        this.mypublickey = localStorage.getItem("publicKey");
        if (this.mypublickey1 == this.mypublickey) {
            this.button1 = "hide";
            this.popuptask = false;
        }
        else {
            return;
        }
    };
    DashboardComponent.prototype.postPrivateKey = function (keystring) {
    };
    //button enable by their role assign start..........
    DashboardComponent.prototype.Manufacturerole = function () {
        if (this.myrole == "2") {
            this.Mrolevalue = true;
        }
        else {
            this.Mrolevalue = false;
        }
    };
    DashboardComponent.prototype.Wholesalerrole = function () {
        if (this.myrole == "3") {
            this.Wrolevalue1 = true;
        }
        else {
            this.Wrolevalue1 = false;
        }
    };
    DashboardComponent.prototype.Wholesalerrole1 = function () {
        if (this.myrole == "3") {
            this.Wrolevalue = true;
        }
        else {
            this.Wrolevalue = false;
        }
    };
    DashboardComponent.prototype.Distributorrole = function () {
        if (this.myrole == "4") {
            this.Drolevalue = true;
        }
        else {
            this.Drolevalue = false;
        }
    };
    DashboardComponent.prototype.Pharmarole = function () {
        if (this.myrole == "5") {
            this.Prolevalue = true;
        }
        else {
            this.Prolevalue = false;
        }
    };
    DashboardComponent.prototype.Transporterrole = function () {
        if (this.myrole == "7") {
            this.Trolevalue = true;
        }
        else {
            this.Trolevalue = false;
        }
    };
    // button role ends.........
    DashboardComponent.prototype.ngDoCheck = function () {
        this.flayg = this.httpuser.getTkn();
    };
    Object.defineProperty(DashboardComponent.prototype, "f", {
        get: function () { return this.privateKeyForm.controls; },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('log me');
        this.submitted = true;
        if (this.privateKeyForm.invalid) {
            return;
        }
        this.count++;
        console.log('count number', this.count);
        if (this.count == 3) {
            this.logout();
        }
        else {
            var keystring = this.f.key.value;
            console.log('keystring: ', keystring);
            return this.httpuser.getpublickey(keystring).subscribe(function (result) {
                _this.primerykeyinput = result;
                _this.mypublickey = localStorage.getItem("publicKey");
                //alert(this.mypublickey+"======"+this.primerykeyinput);
                if (_this.primerykeyinput == _this.mypublickey) {
                    _this.newpublickey = localStorage.setItem('privateKey', 'privateKey');
                    _this.newpublickey = localStorage.setItem('generatedPublickey', 'privateKey');
                    _this.button1 = "hide";
                    _this.popuptask = false;
                }
                else {
                    console.log('count number', _this.count);
                    _this.button1 = 'show';
                }
            });
        }
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        localStorage.removeItem("id_token");
        localStorage.removeItem("publicKey");
        localStorage.removeItem("generatedPublickey");
        localStorage.removeItem("privateKey");
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        localStorage.removeItem("user");
        localStorage.removeItem("pass");
        this.la = this.httpuser.lout();
        this.lb = this.la.subscribe(function (data) {
            console.log("logout");
        }, function (err) {
            console.log(err);
            _this.router.navigate(['/home']);
        }, function () {
            _this.router.navigate(['/home']);
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.lb !== undefined) {
            this.lb.unsubscribe();
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/admin/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/distrubuter/dist.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/dashboard/distrubuter/dist.ts ***!
  \*****************************************************/
/*! exports provided: Distrubuter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Distrubuter", function() { return Distrubuter; });
var Distrubuter = /** @class */ (function () {
    function Distrubuter(batchid, shipper, reciver) {
        this.batchid = batchid;
        this.shipper = shipper;
        this.reciver = reciver;
    }
    return Distrubuter;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/distrubuter/distrubuter.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/dashboard/distrubuter/distrubuter.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n   \n    background-color: rgb(0, 0, 0) !important;   \n    margin-top: 35px;   \n    border-top-right-radius: 70px;\n    border-top-left-radius: 70px;\n}\n\nbody{\n    background-color: rgb(7, 71, 167) !important;\n}\n\nh4{\n    border-radius: 38px;\n    border: 12px solid black;\n    border-bottom-width: 13px;\n    margin-top: -24px;\n    background-color: rgb(23, 0, 222);\n    color: white;\n    font-family: fantasy;\n    font-size: 30px;\n    text-align: center;\n    margin-bottom: 25px;\n}\n\nh2{\n    font-size: 2rem;\n    color: white;\n    font-family: inherit;\n    padding: 12px;\n    border-top: 2px solid indianred;\n    border-bottom: 2px solid indianred;\n    border-right: 2px solid indianred;\n    border-right-width: 12px;\n    border-left: 2px solid indianred;\n    border-left-width: 12px;\n}\n\n.col{\n    flex-basis: 0;\n    flex-grow: 1;\n    background-color: ghostwhite;\n    margin-left: 5%;   \n    max-width: 90%;\n}\n\n#rows{\n\t padding: 2px;\n}\n\n#content{\n    background-color: ghostwhite !important;   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2Rpc3RydWJ1dGVyL2Rpc3RydWJ1dGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUkseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQvZGlzdHJ1YnV0ZXIvZGlzdHJ1YnV0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCkgIWltcG9ydGFudDsgICBcbiAgICBtYXJnaW4tdG9wOiAzNXB4OyAgIFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3MHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDcwcHg7XG59XG5cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDcxLCAxNjcpICFpbXBvcnRhbnQ7XG59XG5oNHtcbiAgICBib3JkZXItcmFkaXVzOiAzOHB4O1xuICAgIGJvcmRlcjogMTJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMCwgMjIyKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5oMntcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGluZGlhbnJlZDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgaW5kaWFucmVkO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGluZGlhbnJlZDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDEycHg7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBpbmRpYW5yZWQ7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDEycHg7XG59XG4uY29se1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlOyAgIFxuICAgIG1heC13aWR0aDogOTAlO1xufVxuICAgXG4jcm93c3tcblx0IHBhZGRpbmc6IDJweDtcbn1cblxuI2NvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZSAhaW1wb3J0YW50OyAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/dashboard/distrubuter/distrubuter.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/dashboard/distrubuter/distrubuter.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-dashboard></app-dashboard>\n\n<div class=\"container\"> \n    \n    <form id=\"content\" [formGroup]=\"registerForm1\" (ngSubmit)=\"distributer(bId.value,shipper.value,reciver.value)\">\n      <br>\n      <h4>Distributor</h4>\n        <div class=\"row\">\n          \n              <div class=\"col\"><div class=\"form-group\">\n                <label>Batch ID</label><span style=\"color: red\">*</span> \n                <input #bId type=\"text\" class=\"form-control  required\" formControlName=\"bId011\" [ngClass]=\"{ 'is-invalid': submitted1 && f1.bId011.errors }\" maxlength=\"30\" >\n                <div *ngIf=\"submitted1 && f1.bId011.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f1.bId011.errors.required\">Batch ID required</div>\n                </div>\n              </div></div>\n          </div>\n\n\n    \n\n      <div class=\"row\">\n          <div class=\"col\"><div class=\"form-group\">\n              <label>Shipper</label><span style=\"color: red\">*</span>\n              <input #shipper type=\"text\" class=\"form-control required\"  formControlName=\"shipper011\" [ngClass]=\"{ 'is-invalid': submitted1 && f1.shipper011.errors }\" maxlength=\"30\">\n              <div *ngIf=\"submitted1 && f1.shipper011.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f1.shipper011.errors.required\">Shipper required</div>\n              </div>\n            </div></div>           \n        </div>     \n\n        <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Receiver</label><span style=\"color: red\">*</span>\n                <input #reciver type=\"text\" class=\"form-control required\" formControlName=\"reciver011\" [ngClass]=\"{ 'is-invalid': submitted1 && f1.reciver011.errors }\" maxlength=\"30\">\n                <div *ngIf=\"submitted1 && f1.reciver011.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f1.reciver011.errors.required\">Receiver required</div>\n                </div>\n              </div></div>            \n          </div>     \n              \n            \n           \n            <div class=\"row text-right\">\n                <div class=\"col\"><div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-success\" >Create Records</button>\n                    </div></div>\n              </div> \n                <div class=\"row text-right\">\n                <div class=\"col\"><div class=\"form-group\">\n                  <a [routerLink]=\"'/senddistributor'\" class=\"btn btn-success\">Send Medicine Info </a>\n                    </div></div>\n              </div> \t\t\t  \n                  \n    </form>\n\n\n\n\n    <div class=\"container\">\n      <h2>List Of Distributor</h2>\n      <div class=\"table-responsive\">\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n              <thead class=\"theme-table\">\n                <tr>\n                  <th >Batch ID</th>\n                  <th>Shipper</th>\n                  <th>Receiver</th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                </tr>\n              </thead>\n  \n          \n  \n  \n          <tbody>\n          <tr *ngFor=\"let distdata  of list\">\n              <td>{{distdata.batchid}}</td>\n              <td style=\"width:10px;height: 20px\">{{distdata.shipper}}</td>\n              <td>{{distdata.reciver}}</td>\n              <td></td>\n              <td><button type=\"button\"  class=\"btn btn-primary\" (click)=\"editDistributor(distdata._id)\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Edit</button></td>\n              <td><button  type=\"button\" (click)=\"deletedistributer(distdata._id)\" class=\"btn btn-danger\">Delete</button></td>\n          </tr>\n          </tbody>\n          <tfoot class=\"theme-table\">\n              <tr>\n                <th></th>\n                <th></th>\n                <th></th>\n                <th></th>\n                <th></th>\n                <th></th>\n              </tr>\n            </tfoot>\n          \n      </table>\n      \n      </div>\n  </div>\n\n\n<div class=\"container\">\n\n    <!-- The Modal -->\n    <div class=\"modal fade\" id=\"exampleModalCenter\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n  \n  \n          <!-- Modal body -->\n          <div class=\"modal-body\">\n            <form [formGroup]=\"registerForm\"\n              (ngSubmit)=\"onSubmit(bId1.value,shipper1.value, reciver1.value,editlist._id)\">\n  \n  \n              \n  \n  \n  \n              <div class=\"form-group\">\n                <label>Batch ID</label>\n                <input type=\"text\" formControlName=\"batchid0\" #bId1 class=\"form-control required\"\n                  [(ngModel)]=\"editlist.batchid\" [ngClass]=\"{ 'is-invalid': submitted && f.batchid0.errors }\">\n                <div *ngIf=\"submitted && f.batchid0.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.batchid0.errors.required\">Batch ID required</div>\n                </div>\n              </div>\n  \n              <div class=\"form-group\">\n                <label>Shipper</label>\n                <input #shipper1 type=\"text\" formControlName=\"medicineStatus0\" class=\"form-control required\"\n                  [(ngModel)]=\"editlist.shipper\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.medicineStatus0.errors }\">\n                <div *ngIf=\"submitted && f.medicineStatus0.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.medicineStatus0.errors.required\">Shipper required </div>\n                </div>\n              </div>\n  \n              <div class=\"form-group\">\n                <label>Receiver</label>\n                <input #reciver1 type=\"text\" formControlName=\"medicineQuality0\" class=\"form-control required\"\n                  [(ngModel)]=\"editlist.reciver\" maxlength=\"30\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.medicineQuality0.errors }\">\n                <div *ngIf=\"submitted && f.medicineQuality0.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.medicineQuality0.errors.required\">Receiver required </div>\n                </div>\n  \n  \n              </div>\n  \n              <!-- Modal footer -->\n              <div class=\"modal-footer\">\n                <div class=\"form-group\">\n                  <button type=\"button\" #completeModal class=\"btn btn-danger\" (click)=\"distributerList()\" data-dismiss=\"modal\">Close</button>\n                </div>\n  \n                <div class=\"form-group\">\n                  <button class=\"btn btn-primary\">Save changes</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n \n"

/***/ }),

/***/ "./src/app/admin/dashboard/distrubuter/distrubuter.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/dashboard/distrubuter/distrubuter.component.ts ***!
  \**********************************************************************/
/*! exports provided: DistrubuterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrubuterComponent", function() { return DistrubuterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dist */ "./src/app/admin/dashboard/distrubuter/dist.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var DistrubuterComponent = /** @class */ (function () {
    function DistrubuterComponent(httpuser, route, router, formBuilder) {
        this.httpuser = httpuser;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.submitted1 = false;
        this.list = [];
        this.distributor1 = _dist__WEBPACK_IMPORTED_MODULE_2__["Distrubuter"];
        this.editlist = [];
    }
    //button1:any;
    //popuptask:boolean=true;
    DistrubuterComponent.prototype.log = function (x) {
        console.log(x);
    };
    DistrubuterComponent.prototype.ngOnInit = function () {
        this.distributerList();
        //this.button1='show';
        this.registerForm = this.formBuilder.group({
            batchid0: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            medicineStatus0: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            medicineQuality0: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.registerForm1 = this.formBuilder.group({
            bId011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            shipper011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            reciver011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    // postPrivateKey(a){
    //  console.log(a);
    // this.button1="hide";
    // this.popuptask=false;	  
    //	}
    DistrubuterComponent.prototype.distributerList = function () {
        var _this = this;
        return this.httpuser.getDistributerList().subscribe(function (data) {
            _this.list = data;
        });
    };
    Object.defineProperty(DistrubuterComponent.prototype, "f1", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm1.controls; },
        enumerable: true,
        configurable: true
    });
    DistrubuterComponent.prototype.distributer = function (x, y, z) {
        var _this = this;
        this.submitted1 = true;
        // stop here if form is invalid
        if (this.registerForm1.invalid) {
            return;
        }
        console.log(x, y, z);
        this.distributor1 = new _dist__WEBPACK_IMPORTED_MODULE_2__["Distrubuter"](x, y, z);
        this.base = this.httpuser.distributer(this.distributor1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
            _this.distributerList();
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    DistrubuterComponent.prototype.deletedistributer = function (id) {
        var _this = this;
        if (confirm('Are sure to delete ?')) {
            this.httpuser.deleteDistributer(id).subscribe(function (res) {
                _this.distributerList();
            });
        }
    };
    DistrubuterComponent.prototype.editDistributor = function (id) {
        var _this = this;
        this.httpuser.editDistributor(id).subscribe(function (res) {
            _this.editlist = res;
        });
    };
    //UpdateDistributor
    DistrubuterComponent.prototype.updateDistributor = function (batchid, shipper, reciver, id) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.httpuser.updateDistributor(batchid, shipper, reciver, id);
            alert("Data Updated");
        });
    };
    Object.defineProperty(DistrubuterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    DistrubuterComponent.prototype.onSubmit = function (batchid1, shipper1, reciver1, id1) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(batchid1, shipper1, reciver1, id1);
        this.route.params.subscribe(function (params) {
            _this.httpuser.updateDistributor(batchid1, shipper1, reciver1, id1);
            var el = _this.completeModal.nativeElement;
            el.click();
            var x = setTimeout(function () { _this.distributerList(); }, 100);
            alert("Data Updated");
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DistrubuterComponent.prototype, "completeModal", void 0);
    DistrubuterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-distrubuter",
            template: __webpack_require__(/*! ./distrubuter.component.html */ "./src/app/admin/dashboard/distrubuter/distrubuter.component.html"),
            styles: [__webpack_require__(/*! ./distrubuter.component.css */ "./src/app/admin/dashboard/distrubuter/distrubuter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], DistrubuterComponent);
    return DistrubuterComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/manufacturer/manufacture.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/dashboard/manufacturer/manufacture.ts ***!
  \*************************************************************/
/*! exports provided: Manufacture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manufacture", function() { return Manufacture; });
var Manufacture = /** @class */ (function () {
    function Manufacture(medicinedescription, medicineStatus, pickdate, packdate, reciver, quality, recivertype) {
        this.medicinedescription = medicinedescription;
        this.medicineStatus = medicineStatus;
        this.pickdate = pickdate;
        this.packdate = packdate;
        this.reciver = reciver;
        this.quality = quality;
        this.recivertype = recivertype;
    }
    return Manufacture;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/manufacturer/manufacturer.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin/dashboard/manufacturer/manufacturer.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n   \n    background-color: rgb(0, 0, 0) !important;   \n    margin-top: 35px;   \n    border-top-right-radius: 70px;\n    border-top-left-radius: 70px;\n}\n\nbody{\n    background-color: rgb(7, 71, 167) !important;\n}\n\nh4{\n    border-radius: 38px;\n    border: 12px solid black;\n    border-bottom-width: 13px;\n    margin-top: -24px;\n    background-color: rgb(23, 0, 222);\n    color: white;\n    font-family: fantasy;\n    font-size: 30px;\n    text-align: center;\n    margin-bottom: 25px;\n}\n\nh2{\n    font-size: 2rem;\n    color: white;\n    font-family: inherit;\n    padding: 12px;\n    border-top: 2px solid indianred;\n    border-bottom: 2px solid indianred;\n    border-right: 2px solid indianred;\n    border-right-width: 12px;\n    border-left: 2px solid indianred;\n    border-left-width: 12px;\n}\n\n.col{\n    flex-basis: 0;\n    flex-grow: 1;\n    background-color: ghostwhite;\n   \n}\n\n.row {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: 0px;\n    margin-left: 1px;\n}\n\n#rows{\n\t     margin-right: 0px;\n    margin-left: 0px;\n\n}\n\n#content{\n    background-color: ghostwhite !important;   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL21hbnVmYWN0dXJlci9tYW51ZmFjdHVyZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDRCQUE0Qjs7QUFFaEM7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7TUFDTSxpQkFBaUI7SUFDbkIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9tYW51ZmFjdHVyZXIvbWFudWZhY3R1cmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7ICAgXG4gICAgbWFyZ2luLXRvcDogMzVweDsgICBcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNzBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3MHB4O1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCA3MSwgMTY3KSAhaW1wb3J0YW50O1xufVxuaDR7XG4gICAgYm9yZGVyLXJhZGl1czogMzhweDtcbiAgICBib3JkZXI6IDEycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTNweDtcbiAgICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDAsIDIyMik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuaDJ7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBpbmRpYW5yZWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGluZGlhbnJlZDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBpbmRpYW5yZWQ7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxMnB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgaW5kaWFucmVkO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxMnB4O1xufVxuLmNvbHtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xuICAgXG59XG4ucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xufVxuICAgXG4jcm93c3tcblx0ICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuXG59XG5cbiNjb250ZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGUgIWltcG9ydGFudDsgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/dashboard/manufacturer/manufacturer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/dashboard/manufacturer/manufacturer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<!-- <div class=\"container\">  -->\n<!-- <form id=\"content\" [formGroup]=\"registerForm1\"  (ngSubmit)=\"manufacture(md.value,sh.value,pid.value,pad.value,re.value,qu.value,rt.value)\">\n        <br>\n       <h4>Manufacture Details</h4>\n        <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Medicine Description</label>\n                <textarea #md cols=\"60\" rows=\"3\" class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted1 && f1.md011.errors }\" formControlName=\"md011\"></textarea>\n                <div *ngIf=\"submitted1 && f1.md011.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f1.md011.errors.required\">Medicine Description required </div>\n                </div>\n                \n              </div></div>\n              <div class=\"col\"><div class=\"form-group\">\n                <label>Shipper</label>\n                <input #sh type=\"text\" class=\"form-control required\" formControlName=\"sh011\" [ngClass]=\"{ 'is-invalid': submitted1 && f1.sh011.errors }\" maxlength=\"30\" >\n                <div *ngIf=\"submitted1 && f1.sh011.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f1.sh011.errors.required\">Shipper required </div>\n                </div>\n                \n              </div></div>\n          </div>\n\n      <div class=\"row\" >\n        <div class=\"col-md-3\"><div class=\"form-group\" >\n            <label>Pick Date</label>\n            <input #pid type=\"date\" onkeydown=\"return false\" class=\"form-control required\"  formControlName=\"pid011\" [ngClass]=\"{ 'is-invalid': submitted1 && f1.pid011.errors }\" maxlength=\"30\" >\n            <div *ngIf=\"submitted1 && f1.pid011.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f1.pid011.errors.required\">Pick Date required </div>\n            </div>\n            \n          </div></div>\n        <div class=\"col-md-3\"><div class=\"form-group\">\n            <label>Pack Date</label>\n            <input #pad type=\"date\" onkeydown=\"return false\" class=\"form-control required\" formControlName=\"pad011\" [ngClass]=\"{ 'is-invalid': submitted1 && f1.pad011.errors }\" maxlength=\"30\" >\n            <div *ngIf=\"submitted1 && f1.pad011.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f1.pad011.errors.required\">Pack Date required </div>\n            </div>\n            \n          </div></div>\n          <div class=\"col-md-6\"><div class=\"form-group\">\n            <label>Receiver</label>\n            <input #re type=\"text\" class=\"form-control required\"  formControlName=\"re011\" [ngClass]=\"{ 'is-invalid': submitted1 && f1.re011.errors }\" maxlength=\"30\" >\n            <div *ngIf=\"submitted1 && f1.re011.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f1.re011.errors.required\">Receiver required </div>\n            </div>\n            \n          </div></div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col\"><div class=\"form-group\">\n              <label>Quality</label>\n              <input #qu type=\"text\" class=\"form-control required\" formControlName=\"qu011\" [ngClass]=\"{ 'is-invalid': submitted1 && f1.qu011.errors }\"  maxlength=\"30\" >\n              <div *ngIf=\"submitted1 && f1.qu011.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f1.qu011.errors.required\">Quality required </div>\n              </div>\n              \n            </div></div>\n          <div class=\"col\"><div class=\"form-group\">\n              <label>Receiver Type</label>\n              <div class=\"form-group\">                        \n                  <select #rt class=\"form-control required\" formControlName=\"rt011\" [ngClass]=\"{ 'is-invalid': submitted1 && f1.rt011.errors }\" maxlength=\"30\" >\n                    <option></option>\n                    <option>Wholesaler</option>\n                    <option>Distributor</option>\n                    \n                  </select>\n                  <div *ngIf=\"submitted1 && f1.rt011.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f1.rt011.errors.required\">Receiver Type required </div>\n                  </div>\n                 \n                </div>\n            </div></div>          \n        </div>\n        <div class=\"row text-right\" >\n          <div class=\"col\"><div class=\"form-group\">\n            <button type=\"Submit\"  class=\"btn btn-primary\">Create Records</button>\n              </div></div>\n        </div>\n  <br clear=\"all\">\n  </form>\n\n\n\n  \n   -->\n  \n\n      \n            \n<!--            \n           \n\n\t <div class=\"container\">\n                 <h2>List Of Manufacture</h2>\n                <div class=\"table-responsive\">\n                <table id=\"table_id\" class=\"table table-striped table-dark table-hover text-center\">\n                 \n                  <thead class=\"theme-table\">\n                \n                    <tr>\n                      <th>Medicine Description</th>\n                      <th>Shipper</th>\n                      <th>Pick Date</th>\n                      <th>Pack Date</th>\n                      <th>Receiver</th>\n                      <th>Quality</th>\n                      <th>Receiver Type</th>\n                      <th>Edit</th>\n                      <th>Delete</th>\n                    </tr>\n                \n                  </thead>\n                \n                  <tbody>\n                    \n                    \n                    <tr *ngFor=\"let distdata of list\">\n                      <td>{{ distdata.medicinedescription }}</td>\n                      <td>{{ distdata.medicineStatus }}</td>\n                      <td>{{ distdata.pickdate | date:'MM/dd/yyyy' }}</td>\n                      <td>{{ distdata.packdate | date:'MM/dd/yyyy'}}</td>\n                      <td>{{ distdata.reciver }}</td>\n                      <td>{{ distdata.quality }}</td>\n                      <td>{{ distdata.recivertype }}</td>\n                      <td>\n                        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"editManufacture(distdata._id)\" data-target=\"#exampleModalCenter\">Edit</button>\n                      </td>\n                \n                      <td>\n                        <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\"  (click)=\"deletemanufacture(distdata._id)\" >Delete</button>\n                      </td>\n                    </tr>\n                    \n                \n                  </tbody>\n                  <tfoot class=\"theme-table\">\n                    <tr>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                    </tr>\n                  </tfoot>\n                </table>\n                </div>\n                \n            </div>\n\n \n\n<div class=\"modal fade\" id=\"exampleModalCenter1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Edit Data</h5>\n        \n      </div>\n      <div class=\"modal-body\">\n        <form>\n           <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Medicine Description</label>\n                <textarea  cols=\"60\" rows=\"3\" #md1 class=\"form-control required\"  [(ngModel)]=\"editlist.medicinedescription\" name=\"medicinedescription\" required></textarea>\n              \n              </div></div>\n              <div class=\"col\"><div class=\"form-group\">\n                <label>Shipper</label>\n                <input  type=\"text\" #sh1 class=\"form-control required \" [(ngModel)]=\"editlist.medicineStatus\" name=\"medicineStatus\" maxlength=\"30\" required>\n              </div></div>\n          </div>\n\n        <div class=\"row\">\n        <div class=\"col-md-3\"><div class=\"form-group\">\n            <label>Pick Date</label>\n            <input  type=\"date\" #pid1  class=\"form-control required \" [(ngModel)]=\"editlist.pickdate\" name=\"pickdate\" maxlength=\"30\" >\n          </div></div>\n        <div class=\"col-md-3\"><div class=\"form-group\">\n            <label>Pack Date</label>\n            <input  type=\"date\" #pad1 class=\"form-control required \" [(ngModel)]=\"editlist.packdate\" name=\"packdate\" maxlength=\"30\" >\n          </div></div>\n          <div class=\"col-md-6\"><div class=\"form-group\">\n            <label>Receiver</label>\n            <input  type=\"text\" #re1 class=\"form-control required\" [required]=\"true\" [(ngModel)]=\"editlist.reciver\" name=\"reciver\" maxlength=\"30\" >\n          </div></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\"><div class=\"form-group\">\n              <label>Quality</label>\n              <input  type=\"text\" #qu1 class=\"form-control required \" [(ngModel)]=\"editlist.quality\" name=\"quality\" maxlength=\"30\" >\n            </div></div>\n          <div class=\"col\"><div class=\"form-group\">\n              <label>Receiver Type</label>\n              <div class=\"form-group\">                        \n                  <select #rt1 class=\"form-control required \" [(ngModel)]=\"editlist.recivertype\" name=\"recivertype\" maxlength=\"30\" >\n                    <option>Select field</option>\n                    <option>Wholesaler</option>\n                    <option>Distributor</option>\n                  </select>\n                </div>\n            </div></div>          \n        </div>\n        \n      \n          <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" #completeModal (click)=\"manufactureList();\" data-dismiss=\"modal\">Close</button>\n          <button type=\"reset\" class=\"btn btn-primary\" (click)=\"updatManufacture(md1.value, sh1.value,pid1.value,pad1.value,re1.value,qu1.value,rt1.value,editlist._id)\">Save changes</button>\n          </div>\n        </form>\n      </div>\n  </div>\n</div>\n  </div> -->\n  \n  \n\n\n<!-- private key Modal -->\n<!--\n<div *ngIf=\"popuptask\" _ngcontent-c1 aria-labelledby=\"exampleModalLabel\" class=\"modal fade {{button1}}\" id=\"basicExampleModal\" role=\"dialog\" tabindex=\"-1\" style=\"display: block; background-color: rgba(17, 16, 16, 0.82);\" aria-modal=\"true\">\n  <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"    border-bottom: 1px solid #ffffff;\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Private Key</h5>\n      </div>\n      <div class=\"modal-body\">\n       <input type=\"text\" #privateK class=\"form-control required\" placeholder=\"Enter your public Key\">\n      </div>\n      <div class=\"modal-footer\" style=\"border-top: 1px solid #ffffff;\">       \n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"postPrivateKey(privateK.value)\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n-->\n \n<!--   ===============================================================================  -->\n\n<!-- Update Manufacture -->\n<!-- <div class=\"container\">\n\n    \n    <div class=\"modal fade\" id=\"exampleModalCenter\">\n      <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n  \n  \n          \n          <div class=\"modal-body\">\n            <form [formGroup]=\"registerForm\"\n            (ngSubmit)=\"onSubmit(md1.value, sh1.value,pid1.value,pad1.value,re1.value,qu1.value,rt1.value,editlist._id)\">\n\n            <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Medicine Description</label>\n                <textarea  cols=\"60\" rows=\"3\" #md1 [ngClass]=\"{ 'is-invalid': submitted && f.md10.errors }\" formControlName=\"md10\" class=\"form-control required\"  [(ngModel)]=\"editlist.medicinedescription\" name=\"medicinedescription\"></textarea>\n                <div *ngIf=\"submitted && f.md10.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.md10.errors.required\">Medicine Description required </div>\n                </div>\n              </div></div>\n              <div class=\"col\"><div class=\"form-group\">\n                <label>Shipper</label>\n                <input  type=\"text\" #sh1  formControlName=\"sh10\"  class=\"form-control required \" [(ngModel)]=\"editlist.medicineStatus\" [ngClass]=\"{ 'is-invalid': submitted && f.sh10.errors }\" name=\"medicineStatus\" maxlength=\"30\">\n                <div *ngIf=\"submitted && f.sh10.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.sh10.errors.required\">Shipper required </div>\n                </div>\n              </div></div>\n          </div>\n\n            <div class=\"row\">\n            <div class=\"col-md-3\"><div class=\"form-group\">\n            <label>Pick Date</label>\n            <input  type=\"date\" onkeydown=\"return false\"  #pid1  formControlName=\"pid10\"  [ngClass]=\"{ 'is-invalid': submitted && f.pid10.errors }\"  class=\"form-control required \" [(ngModel)]=\"editlist.pickdate\" name=\"pickdate\" maxlength=\"30\" >\n            \n            <div *ngIf=\"submitted && f.pid10.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.pid10.errors.required\">Pick Date required </div>\n            </div>\n          </div></div>\n          <div class=\"col-md-3\"><div class=\"form-group\">\n            <label>Pack Date</label>\n            <input  type=\"date\" onkeydown=\"return false\"  #pad1  formControlName=\"pad10\" [ngClass]=\"{ 'is-invalid': submitted && f.pad10.errors }\"  class=\"form-control required \" [(ngModel)]=\"editlist.packdate\" name=\"packdate\" maxlength=\"30\" >\n            <div *ngIf=\"submitted && f.pad10.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.pad10.errors.required\">Pack Date required </div>\n            </div>\n          </div></div>\n          <div class=\"col-md-6\"><div class=\"form-group\">\n            <label>Receiver</label>\n            <input  type=\"text\" #re1 formControlName=\"re10\" [ngClass]=\"{ 'is-invalid': submitted && f.re10.errors }\" class=\"form-control required\" [required]=\"true\" [(ngModel)]=\"editlist.reciver\" name=\"reciver\" maxlength=\"30\" >\n            <div *ngIf=\"submitted && f.re10.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.re10.errors.required\">Receiver required </div>\n            </div>\n          </div></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\"><div class=\"form-group\">\n              <label>Quality</label>\n              <input  type=\"text\" #qu1 formControlName=\"qu10\" [ngClass]=\"{ 'is-invalid': submitted && f.qu10.errors }\" class=\"form-control required \" [(ngModel)]=\"editlist.quality\" name=\"quality\" maxlength=\"30\" >\n              <div *ngIf=\"submitted && f.qu10.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.qu10.errors.required\">Quality required </div>\n              </div>\n            </div></div>\n          <div class=\"col\"><div class=\"form-group\">\n              <label>Receiver Type</label>\n              <div class=\"form-group\">                        \n                  <select #rt1  formControlName=\"rt10\" [ngClass]=\"{ 'is-invalid': submitted && f.rt10.errors }\" class=\"form-control required \" [(ngModel)]=\"editlist.recivertype\" name=\"recivertype\" maxlength=\"30\" >\n                      \n                    <option></option>\n                  \n                    <option>Wholesaler</option>\n                    <option>Distributor</option>\n                  </select>\n                  <div *ngIf=\"submitted && f.rt10.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.rt10.errors.required\">Receiver Type required </div>\n                    </div>\n                </div>\n            </div></div>          \n        </div>\n        \n  \n              \n              <div class=\"modal-footer\">\n                <div class=\"form-group\">\n                  <button type=\"submit\" #completeModal class=\"btn btn-danger\" (click)=\"manufactureList()\"   data-dismiss=\"modal\">Close</button>\n                </div>\n  \n                <div class=\"form-group\">\n                  <button class=\"btn btn-primary\">Save changes</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> \n  -->\n\n\n \n\n  "

/***/ }),

/***/ "./src/app/admin/dashboard/manufacturer/manufacturer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/dashboard/manufacturer/manufacturer.component.ts ***!
  \************************************************************************/
/*! exports provided: ManufacturerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerComponent", function() { return ManufacturerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _manufacture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manufacture */ "./src/app/admin/dashboard/manufacturer/manufacture.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ManufacturerComponent = /** @class */ (function () {
    //button1:any;
    //popuptask:boolean=true;
    function ManufacturerComponent(httpuser, route, router, formBuilder) {
        this.httpuser = httpuser;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.submitted1 = false;
        this.qrdata = null;
        this.manufacture1 = _manufacture__WEBPACK_IMPORTED_MODULE_3__["Manufacture"];
        this.list = [];
        this.editlist = [];
        console.log('AppComponent running');
        this.qrdata = ' ';
    }
    ManufacturerComponent.prototype.changeValue = function (newValue) {
        this.qrdata = newValue;
    };
    ManufacturerComponent.prototype.ngOnInit = function () {
        this.manufactureList();
        this.userId = localStorage.getItem("userId");
        console.log("User Id is", this.userId);
        //this.button1='show';
        this.registerForm = this.formBuilder.group({
            md10: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            sh10: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            pid10: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            pad10: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            re10: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            qu10: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            rt10: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.registerForm1 = this.formBuilder.group({
            md011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            sh011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            pid011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            pad011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            re011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            qu011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            rt011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    };
    /* postPrivateKey(a){
          console.log(a);
          this.button1="hide";
          this.popuptask=false;
            } */
    ManufacturerComponent.prototype.manufactureList = function () {
        var _this = this;
        return this.httpuser.getManufactureList().subscribe(function (data) {
            _this.list = data;
        });
    };
    Object.defineProperty(ManufacturerComponent.prototype, "f1", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm1.controls; },
        enumerable: true,
        configurable: true
    });
    ManufacturerComponent.prototype.manufacture = function (a, b, c, d, e, f, g) {
        var _this = this;
        console.log(c);
        console.log(d);
        console.log("User Id is", this.userId);
        this.submitted1 = true;
        // stop here if form is invalid
        if (this.registerForm1.invalid) {
            return;
        }
        console.log(a, b, c, d, e, f, g);
        this.manufacture1 = new _manufacture__WEBPACK_IMPORTED_MODULE_3__["Manufacture"](a, b, c, d, e, f, g);
        this.base = this.httpuser.manufacture(this.manufacture1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
            _this.manufactureList();
        });
    };
    ManufacturerComponent.prototype.deletemanufacture = function (id) {
        var _this = this;
        if (confirm("Are you sure to delete ?")) {
            this.httpuser.deleteManufacture(id).subscribe(function (res) {
                _this.manufactureList();
            });
        }
    };
    ManufacturerComponent.prototype.editManufacture = function (id) {
        var _this = this;
        this.httpuser.editManufacture(id).subscribe(function (res) {
            _this.editlist = res;
        });
    };
    Object.defineProperty(ManufacturerComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    ManufacturerComponent.prototype.onSubmit = function (medicinedescription1, medicineStatus1, pickdate1, packdate1, reciver1, quality1, recivertype1, id1) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(medicinedescription1, medicineStatus1, pickdate1, packdate1, reciver1, quality1, recivertype1, id1);
        this.route.params.subscribe(function (params) {
            _this.httpuser.updatManufacture(medicinedescription1, medicineStatus1, pickdate1, packdate1, reciver1, quality1, recivertype1, id1);
            alert("Data Successfully Updated");
            var el = _this.completeModal.nativeElement;
            el.click();
            var x = setTimeout(function () { _this.manufactureList(); }, 100);
            _this.router.navigate(["manufacture"]);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ManufacturerComponent.prototype, "completeModal", void 0);
    ManufacturerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-manufacturer",
            template: __webpack_require__(/*! ./manufacturer.component.html */ "./src/app/admin/dashboard/manufacturer/manufacturer.component.html"),
            styles: [__webpack_require__(/*! ./manufacturer.component.css */ "./src/app/admin/dashboard/manufacturer/manufacturer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ManufacturerComponent);
    return ManufacturerComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/packagetransporter/packagetransporter.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/dashboard/packagetransporter/packagetransporter.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9wYWNrYWdldHJhbnNwb3J0ZXIvcGFja2FnZXRyYW5zcG9ydGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/dashboard/packagetransporter/packagetransporter.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/dashboard/packagetransporter/packagetransporter.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n\t<br>\n\t<br>\n\n\t<form>\n\t\n        <div class=\"row\"> \n          <div class=\"col\"><div class=\"form-group\">\n            <label>Packing Barcode</label>\n\t\t\t<input type=\"file\" style=\"margin-left:20px;\" accept=\"image/*\" (change)=\"onFileChange($event)\">\n            <input #br type=\"text\" value=\"{{barcodevalue}}\" class=\"form-control required\" >\n          </div>\n        </div>   \n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label>Current Status</label>\n                <select #status class=\"form-control\" >\n                  <option >Manufecturer package Picked-up</option>\n                  <option >Wholesaler package Picked-up</option>\n                  <option >Distributer package Picked-up</option>\n                    </select>   \n              </div>\n            </div>\n          </div>\n            <div class=\"row text-right\">\n             \t\t<div class=\"col\">\n             \t\t\t<div class=\"form-group\">\n                  \t\t\t<button type=\"reset\" (click)=\"getByPackageId(br.value, status.value,4)\" class=\"btn btn-primary\">Submit</button>\n\t\t\t\t\t\t\t&nbsp; &nbsp;\n\t\t\t\t\t\t\t<!-- <button type=\"reset\" (click)=\"getByPackageId(br.value, status.value,5)\" class=\"btn btn-primary\">Reject</button> -->\n                \t\t</div>\n                </div>\n             </div>\n\t</form>\n\n\n  <div *ngIf=\"displayTable\" class=\"table-responsive\">\n    <br>\n    <table class=\"table table-striped table-dark table-hover text-center\">\n      \n        <thead class=\"theme-table\">\n            <tr>            \n                <th> Serial Number</th>\n                <th>Level</th>\n                <th>Location</th>             \n            </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><a [routerLink]=\"['/package/details',mlist[0].serial]\">{{mlist[0].serial}}</a></td>\n            <td>{{mlist[0].level}}</td>\n            <td>{{mlist[0].location}}</td>\n            </tr>\n         \n        </tbody>\n        <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th></tr></tfoot>\n      </table>\n    </div>\n\n\n\n<div  class=\"table-responsive\">\n  <br>\n  <table class=\"table table-striped table-dark table-hover text-center\">\n    \n      <thead class=\"theme-table\">\n          <tr>            \n              <th>Serial Number</th>\n              <th>Level</th>\n              <th>Location</th>          \n          </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let list of TMlist\">\n          <td><a [routerLink]=\"['/package/details',list.serial]\">{{list.serial}}</a></td>\n          <td>{{list.level}}</td>\n          <td>{{list.location}}</td>\n          </tr>\n       \n      </tbody>\n      <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th></tr></tfoot>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/dashboard/packagetransporter/packagetransporter.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/dashboard/packagetransporter/packagetransporter.component.ts ***!
  \************************************************************************************/
/*! exports provided: PackagetransporterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagetransporterComponent", function() { return PackagetransporterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../medicine/package-create/addpackage2 */ "./src/app/admin/medicine/package-create/addpackage2.ts");






var PackagetransporterComponent = /** @class */ (function () {
    function PackagetransporterComponent(httpuser, qrReader, http) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.transporter1 = _medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__["Package2"];
        this.list = [];
        this.mlist = [];
        // dlist:any=[];
        // plist:any=[];
        this.TMlist = [];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status2 = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    PackagetransporterComponent.prototype.ngOnInit = function () {
        this.packageStatus = "Recived by Transporter";
        this.mypublickey = localStorage.getItem("publicKey");
        this.transporterPackageId(this.mypublickey);
    };
    PackagetransporterComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    //post data api
    PackagetransporterComponent.prototype.packagetransporterList = function () {
        var _this = this;
        return this.httpuser.getPackagetransporterList().subscribe(function (data) {
            _this.list = data;
        });
    };
    //   allDistributer() {
    //     return this.http.getallWholesalerUser().subscribe(data => {
    //       this.dlist = data; 
    // console.log(this.dlist);	  
    //     });
    //   }
    //   allPharma() {
    //     return this.http.getallWholesalerUser().subscribe(data => {
    //       this.plist = data; 
    // console.log(this.plist);	  
    //     });
    //   }
    PackagetransporterComponent.prototype.transporterPackageId = function (id) {
        var _this = this;
        return this.httpuser.transporterPackage(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log(_this.TMlist);
        });
    };
    PackagetransporterComponent.prototype.getByPackageId = function (id, status, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            console.log(_this.mlist);
            if (statusid == 5)
                _this.packageStatus = "Rejected from Distributer";
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicines, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].level, _this.mlist[0].packages, _this.mlist[0].PackageId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.packageStatus);
            if (statusid == 5)
                alert("Package Returned ");
            else
                alert("Package piked ");
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            // const Metadata = {
            //   "action": "pickPackage",
            //   "payloaddata": {
            //     "serialNumber": this.mlist[0].serial,
            //     "comment": status,
            //     "level": this.mlist[0].level
            //   },
            //   "private": this.privateKey,
            //   "public": this.mypublickey
            // }
            // const httpOptions = {
            //   headers: new HttpHeaders({
            //     'Content-Type': 'application/json'
            //   })
            // }
            // return this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
            //   (val) => {
            //     console.log("POST call successful value returned in body", val);
            //     this.blockchain = val;
            //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //       this.status2 = JSON.parse(this.blockchain.response.body);
            //       this.statusValue = this.status2.data[0].status;
            //       this.itemId = this.status2.data[0].id;
            //       if (this.statusValue == 'COMMITTED') {
            //         this.displayTable = true;
            //         if (statusid == 5) this.packageStatus = "Rejected from Distributer";
            //         this.transporter(this.mlist[0].serial, this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey, this.packageStatus);
            //         if (statusid == 5)
            //           alert("Package Returned ");
            //         else
            //           alert("Package piked ");
            //       }
            //       else {
            //         alert("Process not completed");
            //       }
            //     }
            //     else {
            //       that.http.get(this.httpuser.batchUrl + "/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //         this.blockchain2 = val
            //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //           this.status2 = JSON.parse(this.blockchain2.body);
            //           console.log('json value2', this.status2.data[0].status);
            //           this.statusValue = this.status2.data[0].status;
            //           this.itemId = this.status2.data[0].id;
            //           if (this.statusValue == 'COMMITTED') {
            //             if (statusid == 5) this.packageStatus = "Rejected to Distributer";
            //             this.transporter(this.mlist[0].serial, this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey, this.packageStatus);
            //             if (statusid == 5)
            //               alert("Package Returned ");
            //             else
            //               alert("Package picked");
            //           }
            //           else {
            //             alert('Request Rejected');
            //           }
            //         }
            //       })
            //     }
            // }).catch(function (err) {
            //   console.log(err.message);
            // });
        });
    };
    PackagetransporterComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k) {
        this.transporter1 = new _medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__["Package2"](a, b, c, d, e, f, g, h, i, j, k);
        this.base = this.httpuser.packagetransporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    PackagetransporterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-packagetransporter',
            template: __webpack_require__(/*! ./packagetransporter.component.html */ "./src/app/admin/dashboard/packagetransporter/packagetransporter.component.html"),
            styles: [__webpack_require__(/*! ./packagetransporter.component.css */ "./src/app/admin/dashboard/packagetransporter/packagetransporter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], PackagetransporterComponent);
    return PackagetransporterComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/pharma/pharma.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/dashboard/pharma/pharma.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n   \n    background-color: rgb(0, 0, 0) !important;   \n    margin-top: 35px;   \n    border-top-right-radius: 70px;\n    border-top-left-radius: 70px;\n}\n\nbody{\n    background-color: rgb(7, 71, 167) !important;\n}\n\nh4{\n    border-radius: 38px;\n    border: 12px solid black;\n    border-bottom-width: 13px;\n    margin-top: -24px;\n    background-color: rgb(23, 0, 222);\n    color: white;\n    font-family: fantasy;\n    font-size: 30px;\n    text-align: center;\n    margin-bottom: 25px;\n}\n\nh2{\n    font-size: 2rem;\n    color: white;\n    font-family: inherit;\n    padding: 12px;\n    border-top: 2px solid indianred;\n    border-bottom: 2px solid indianred;\n    border-right: 2px solid indianred;\n    border-right-width: 12px;\n    border-left: 2px solid indianred;\n    border-left-width: 12px;\n}\n\n.col{\n    flex-basis: 0;\n    flex-grow: 1;\n    background-color: ghostwhite;\n    margin-left: 5%;   \n    max-width: 90%;\n}\n\n.row{\n\t padding: 10px;\n}\n\n#content{\n   background-color: ghostwhite !important;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL3BoYXJtYS9waGFybWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtHQUNHLHVDQUF1QztBQUMxQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9waGFybWEvcGhhcm1hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7ICAgXG4gICAgbWFyZ2luLXRvcDogMzVweDsgICBcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNzBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3MHB4O1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCA3MSwgMTY3KSAhaW1wb3J0YW50O1xufVxuaDR7XG4gICAgYm9yZGVyLXJhZGl1czogMzhweDtcbiAgICBib3JkZXI6IDEycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTNweDtcbiAgICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDAsIDIyMik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuaDJ7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBpbmRpYW5yZWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGluZGlhbnJlZDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBpbmRpYW5yZWQ7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxMnB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgaW5kaWFucmVkO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxMnB4O1xufVxuLmNvbHtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTsgICBcbiAgICBtYXgtd2lkdGg6IDkwJTtcbn1cbiAgIFxuLnJvd3tcblx0IHBhZGRpbmc6IDEwcHg7XG59XG5cbiNjb250ZW50e1xuICAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/dashboard/pharma/pharma.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/dashboard/pharma/pharma.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n  <h4>Pharma Details</h4>\n  <form id=\"content\" [formGroup]=\"registerForm1\" (ngSubmit)=\"pharma(bId.value,mediStatus.value,mediQuality.value)\">\n    <div class=\"row\">\n\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label>Batch ID</label><span style=\"color: red\">*</span>\n          <input #bId type=\"text\" formControlName=\"batchid011\" class=\"form-control required\"\n            [ngClass]=\"{ 'is-invalid': submitted1 && f1.batchid011.errors }\" maxlength=\"30\">\n          <div *ngIf=\"submitted1 && f1.batchid011.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f1.batchid011.errors.required\">Batch ID required </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label>Medicine Status</label><span style=\"color: red\">*</span>\n          <input #mediStatus type=\"text\" formControlName=\"mediStatus011\"\n            [ngClass]=\"{ 'is-invalid': submitted1 && f1.mediStatus011.errors }\" class=\"form-control required\"\n            maxlength=\"30\">\n          <div *ngIf=\"submitted1 && f1.mediStatus011.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f1.mediStatus011.errors.required\">Medicine Status required </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label>Medicine Quality</label><span style=\"color: red\">*</span>\n          <input #mediQuality type=\"text\" formControlName=\"mediQuality011\" class=\"form-control required\"\n            [ngClass]=\"{ 'is-invalid': submitted1 && f1.mediQuality011.errors }\" maxlength=\"30\">\n          <div *ngIf=\"submitted1 && f1.mediQuality011.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f1.mediQuality011.errors.required\">Medicine Quality required </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row text-right\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row text-right\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n         <a [routerLink]=\"'/sendpharma'\" class=\"btn btn-success\">Send Medicine Info </a>\n        </div>\n      </div>\n    </div>\n  </form>\n\n\n\n\n  <div class=\"container\">\n    <h2>List Of Pharma</h2>\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        <thead class=\"theme-table\">\n\n          <tr>\n            <th>Batch ID</th>\n            <th>Medicine Status</th>\n            <th>Medicine Quality</th>\n            <th>Edit</th>\n            <th>Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let distdata  of list\">\n            <td>{{distdata.batchid}}</td>\n            <td>{{distdata.medicineStatus}}</td>\n            <td>{{distdata.medicineQuality}}</td>\n            <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"editPharma(distdata._id)\" data-toggle=\"modal\"\n                data-target=\"#exampleModalCenter\">Edit</button></td>\n            <td><button type=\"submit\" (click)=\"deletePharma(distdata._id)\" class=\"btn btn-danger\">Delete</button></td>\n\n          </tr>\n\n        </tbody>\n        <tfoot class=\"theme-table\">\n          <tr>\n            <th></th>\n            <th></th>\n            <th></th>\n            <th>\n            <th></th>\n          </tr>\n        </tfoot>\n      </table>\n    </div>\n\n  </div>\n</div>\n\n\n<!-- Update Pharma -->\n<div class=\"container\">\n\n  <!-- The Modal -->\n  <div class=\"modal fade\" id=\"exampleModalCenter\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <form [formGroup]=\"registerForm\"\n            (ngSubmit)=\"onSubmit(batchid.value, medicineStatus.value,medicineQuality.value,editlist._id)\">\n          \n            <div class=\"form-group\">\n              <label>Batch ID</label>\n              <input type=\"text\" formControlName=\"batchid0\" #batchid class=\"form-control required\"\n                [(ngModel)]=\"editlist.batchid\" [ngClass]=\"{ 'is-invalid': submitted && f.batchid0.errors }\">\n              <div *ngIf=\"submitted && f.batchid0.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.batchid0.errors.required\">Batch ID required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Medicine Status</label>\n              <input #medicineStatus type=\"text\" formControlName=\"medicineStatus0\" class=\"form-control required\"\n                [(ngModel)]=\"editlist.medicineStatus\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.medicineStatus0.errors }\">\n              <div *ngIf=\"submitted && f.medicineStatus0.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.medicineStatus0.errors.required\">Medicine Status required </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Medicine Quality</label>\n              <input #medicineQuality type=\"text\" formControlName=\"medicineQuality0\" class=\"form-control required\"\n                [(ngModel)]=\"editlist.medicineQuality\" maxlength=\"30\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.medicineQuality0.errors }\">\n              <div *ngIf=\"submitted && f.medicineQuality0.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.medicineQuality0.errors.required\">Medicine Quality required </div>\n              </div>\n\n\n            </div>\n\n            <!-- Modal footer -->\n            <div class=\"modal-footer\">\n              <div class=\"form-group\">\n                <button type=\"button\" #completeModal class=\"btn btn-danger\" (click)=\"pharmaList();\" data-dismiss=\"modal\">Close</button>\n              </div>\n\n              <div class=\"form-group\">\n                <button class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/admin/dashboard/pharma/pharma.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/dashboard/pharma/pharma.component.ts ***!
  \************************************************************/
/*! exports provided: PharmaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaComponent", function() { return PharmaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _pharma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pharma */ "./src/app/admin/dashboard/pharma/pharma.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var PharmaComponent = /** @class */ (function () {
    //  button1:any;
    // popuptask:boolean=true;
    function PharmaComponent(httpuser, route, router, formBuilder) {
        this.httpuser = httpuser;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.submitted1 = false;
        this.pharma1 = _pharma__WEBPACK_IMPORTED_MODULE_3__["Pharma"];
        this.list = [];
        this.editlist = [];
        this.var1 = "";
    }
    PharmaComponent.prototype.ngOnInit = function () {
        this.pharmaList();
        //this.button1='show';
        this.registerForm = this.formBuilder.group({
            batchid0: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            medicineStatus0: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            medicineQuality0: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.registerForm1 = this.formBuilder.group({
            batchid011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            mediStatus011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            mediQuality011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    /* postPrivateKey(a){
        console.log(a);
        this.button1="hide";
        this.popuptask=false;
        }
        */
    //post data api
    PharmaComponent.prototype.pharmaList = function () {
        var _this = this;
        return this.httpuser.getPharmaList().subscribe(function (data) {
            _this.list = data;
        });
    };
    Object.defineProperty(PharmaComponent.prototype, "f1", {
        get: function () { return this.registerForm1.controls; },
        enumerable: true,
        configurable: true
    });
    PharmaComponent.prototype.pharma = function (x, y, z) {
        var _this = this;
        console.log("Pharma called");
        this.submitted1 = true;
        // stop here if form is invalid
        if (this.registerForm1.invalid) {
            return;
        }
        console.log(x, y, z);
        this.pharma1 = new _pharma__WEBPACK_IMPORTED_MODULE_3__["Pharma"](x, y, z);
        this.base = this.httpuser.pharma(this.pharma1);
        this.call = this.base.subscribe(function (data) {
            alert("Done");
            _this.pharmaList();
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    //delete pharam api
    PharmaComponent.prototype.deletePharma = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete ?')) {
            this.httpuser.deletePharma(id).subscribe(function (res) {
                _this.pharmaList();
            });
        }
    };
    //edit get pharma detail api
    PharmaComponent.prototype.editPharma = function (id) {
        var _this = this;
        this.httpuser.editPharma(id).subscribe(function (res) {
            _this.editlist = res;
        });
    };
    //update edited api
    PharmaComponent.prototype.updatepharma = function (batchid, medicineStatus, medicineQuality, id) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.httpuser.updatePharma(batchid, medicineStatus, medicineQuality, id);
            alert("Data Successfully Udated");
            _this.router.navigate(['pharma']);
        });
    };
    Object.defineProperty(PharmaComponent.prototype, "f", {
        //---------------------------------------
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    PharmaComponent.prototype.onSubmit = function (batchid1, medicineStatus1, medicineQuality1, id1) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(batchid1, medicineStatus1, medicineQuality1, id1);
        this.route.params.subscribe(function (params) {
            _this.httpuser.updatePharma(batchid1, medicineStatus1, medicineQuality1, id1);
            alert("Data Successfully Udated");
            var el = _this.completeModal.nativeElement;
            el.click();
            var x = setTimeout(function () { _this.pharmaList(); }, 100);
            _this.router.navigate(['pharma']);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PharmaComponent.prototype, "completeModal", void 0);
    PharmaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-pharma",
            template: __webpack_require__(/*! ./pharma.component.html */ "./src/app/admin/dashboard/pharma/pharma.component.html"),
            styles: [__webpack_require__(/*! ./pharma.component.css */ "./src/app/admin/dashboard/pharma/pharma.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], PharmaComponent);
    return PharmaComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/pharma/pharma.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/dashboard/pharma/pharma.ts ***!
  \**************************************************/
/*! exports provided: Pharma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pharma", function() { return Pharma; });
var Pharma = /** @class */ (function () {
    function Pharma(batchid, medicineStatus, medicineQuality) {
        this.batchid = batchid;
        this.medicineStatus = medicineStatus;
        this.medicineQuality = medicineQuality;
    }
    return Pharma;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/qrcodescanner/pharmaqr/pharmaqr.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/dashboard/qrcodescanner/pharmaqr/pharmaqr.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9xcmNvZGVzY2FubmVyL3BoYXJtYXFyL3BoYXJtYXFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/dashboard/qrcodescanner/pharmaqr/pharmaqr.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/dashboard/qrcodescanner/pharmaqr/pharmaqr.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div style=\"width: 500px;margin: 0 auto\">\n  <label>Scan Barcode</label>\n  <input class=\"btn btn-primary\" type=\"file\" style=\"margin-left:20px;color:aquamarine\" accept=\"image/*\" (change)=\"onFileChange($event)\">\n  <br><br>\n  <input #br type=\"text\" value=\"{{barcodevalue}}\" class=\"form-control required\" >\n</div>\n"

/***/ }),

/***/ "./src/app/admin/dashboard/qrcodescanner/pharmaqr/pharmaqr.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/dashboard/qrcodescanner/pharmaqr/pharmaqr.component.ts ***!
  \******************************************************************************/
/*! exports provided: PharmaqrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaqrComponent", function() { return PharmaqrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");




var PharmaqrComponent = /** @class */ (function () {
    function PharmaqrComponent(httpuser, qrReader) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
    }
    PharmaqrComponent.prototype.ngOnInit = function () {
    };
    PharmaqrComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    PharmaqrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pharmaqr',
            template: __webpack_require__(/*! ./pharmaqr.component.html */ "./src/app/admin/dashboard/qrcodescanner/pharmaqr/pharmaqr.component.html"),
            styles: [__webpack_require__(/*! ./pharmaqr.component.css */ "./src/app/admin/dashboard/qrcodescanner/pharmaqr/pharmaqr.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"]])
    ], PharmaqrComponent);
    return PharmaqrComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/qrcodescanner/transporterqr/transporterqr.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/dashboard/qrcodescanner/transporterqr/transporterqr.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9xcmNvZGVzY2FubmVyL3RyYW5zcG9ydGVycXIvdHJhbnNwb3J0ZXJxci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/dashboard/qrcodescanner/transporterqr/transporterqr.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/dashboard/qrcodescanner/transporterqr/transporterqr.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div style=\"width: 500px;margin: 0 auto\">\n  <label>Scan Barcode</label>\n  <input class=\"btn btn-primary\" type=\"file\" style=\"margin-left:20px;color:aquamarine\" accept=\"image/*\" (change)=\"onFileChange($event)\">\n  <br><br>\n  <input #br type=\"text\" value=\"{{barcodevalue}}\" class=\"form-control required\" >\n</div>\n"

/***/ }),

/***/ "./src/app/admin/dashboard/qrcodescanner/transporterqr/transporterqr.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/dashboard/qrcodescanner/transporterqr/transporterqr.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TransporterqrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransporterqrComponent", function() { return TransporterqrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");




var TransporterqrComponent = /** @class */ (function () {
    function TransporterqrComponent(httpuser, qrReader) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
    }
    TransporterqrComponent.prototype.ngOnInit = function () {
    };
    TransporterqrComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    TransporterqrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transporterqr',
            template: __webpack_require__(/*! ./transporterqr.component.html */ "./src/app/admin/dashboard/qrcodescanner/transporterqr/transporterqr.component.html"),
            styles: [__webpack_require__(/*! ./transporterqr.component.css */ "./src/app/admin/dashboard/qrcodescanner/transporterqr/transporterqr.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"]])
    ], TransporterqrComponent);
    return TransporterqrComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/qrcodescanner/wholesalerqr/wholesalerqr.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/dashboard/qrcodescanner/wholesalerqr/wholesalerqr.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.container{\n   \n    min-height: 580px;\n    max-width: 100%;\n    color: white;\n    background-color: black;\n}\n.col-md-6 {\n    border: 10px solid #2a4058;\n   \n    background-color: #18518a70;\n  \n    margin-top: 20  px;\n}\nh3{\ntext-align: center;\ncolor: white\n\n}\n.jumbotron {\n \n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL3FyY29kZXNjYW5uZXIvd2hvbGVzYWxlcnFyL3dob2xlc2FsZXJxci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwwQkFBMEI7O0lBRTFCLDJCQUEyQjs7SUFFM0Isa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTs7SUFFSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQvcXJjb2Rlc2Nhbm5lci93aG9sZXNhbGVycXIvd2hvbGVzYWxlcnFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNvbnRhaW5lcntcbiAgIFxuICAgIG1pbi1oZWlnaHQ6IDU4MHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uY29sLW1kLTYge1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjMmE0MDU4O1xuICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NTE4YTcwO1xuICBcbiAgICBtYXJnaW4tdG9wOiAyMCAgcHg7XG59XG5oM3tcbnRleHQtYWxpZ246IGNlbnRlcjtcbmNvbG9yOiB3aGl0ZVxuXG59XG4uanVtYm90cm9uIHtcbiBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/dashboard/qrcodescanner/wholesalerqr/wholesalerqr.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/dashboard/qrcodescanner/wholesalerqr/wholesalerqr.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-3\"></div>\n\t\t\t<div class=\"col-md-6 \">\n\t\t\t\t<label style=\"color: white\">Email-Id</label><br>\n\t\t\t\t\n\t\t\t\t<input #eid type=\"text\" placeholder=\"Enter Your Email Id\" class=\"form-control required\" style=\"border: 2px solid green\" >\n\t\t\t\t<br>\n\t\t\t\t<label style=\"color: white\">Enter New Password</label><br>\n\t\t\t\t<input #pass type=\"password\" placeholder=\"Enter New Password\" class=\"form-control required\" style=\"border: 2px solid green\" >\n\t\t\t\t<br>\n\t\t\t\t<button type=\"submit\" (click)=\"sendRequest(eid.value,pass.value)\" class=\"btn btn-success\">Submit</button>\n\t\t\t\t\n\t\t\t\t<p> <a [routerLink]=\"'/login'\" style=\"margin-left:10px\"> Click here to Login</a></p>\n\t\t\t  </div>\n\t\t</div>\n\t</div>\n</div> \n  \n\n  "

/***/ }),

/***/ "./src/app/admin/dashboard/qrcodescanner/wholesalerqr/wholesalerqr.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/dashboard/qrcodescanner/wholesalerqr/wholesalerqr.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WholesalerqrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WholesalerqrComponent", function() { return WholesalerqrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WholesalerqrComponent = /** @class */ (function () {
    function WholesalerqrComponent(route, httpuser, qrReader) {
        this.route = route;
        this.httpuser = httpuser;
        this.qrReader = qrReader;
    }
    WholesalerqrComponent.prototype.ngOnInit = function () {
        this.actcode = this.route.snapshot.params['id'];
    };
    WholesalerqrComponent.prototype.sendRequest = function (eid, pass) {
        console.log(eid, pass);
        if (this.actcode == '') {
            alert("Invalid Reset password URL !!");
            return false;
        }
        this.base = this.httpuser.wholesalerqr(eid, pass, this.actcode);
        this.call = this.base.subscribe(function (data) {
            alert("Password had been Changed!!");
        }, function (err) {
            alert("It is either invalid or already used Reset password URL");
            console.log(err);
        }, function () {
            console.log("Password had been Changed!!");
        });
    };
    WholesalerqrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wholesalerqr',
            template: __webpack_require__(/*! ./wholesalerqr.component.html */ "./src/app/admin/dashboard/qrcodescanner/wholesalerqr/wholesalerqr.component.html"),
            styles: [__webpack_require__(/*! ./wholesalerqr.component.css */ "./src/app/admin/dashboard/qrcodescanner/wholesalerqr/wholesalerqr.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"]])
    ], WholesalerqrComponent);
    return WholesalerqrComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/transporter/transporter.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/dashboard/transporter/transporter.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC90cmFuc3BvcnRlci90cmFuc3BvcnRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/dashboard/transporter/transporter.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/dashboard/transporter/transporter.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n\t<br>\n\t<br>\n\n\t<form>\n\t\n        <div class=\"row\"> \n          <div class=\"col\"><div class=\"form-group\">\n            <label>Packing Barcode</label>\n\t\t\t<input type=\"file\" style=\"margin-left:20px;\" accept=\"image/*\" (change)=\"onFileChange($event)\">\n            <input #br type=\"text\" value=\"{{barcodevalue}}\" class=\"form-control required\" >\n          </div>\n        </div>   \n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label>Current Status</label>\n                <select #status class=\"form-control\" >\n                  <option >Manufecturer package Picked-up</option>\n                  <option >Wholesaler package Picked-up</option>\n                  <option >Distributer package Picked-up</option>\n                    </select>   \n              </div>\n            </div>\n          </div>\n            <div class=\"row text-right\">\n             \t\t<div class=\"col\">\n             \t\t\t<div class=\"form-group\">\n                  \t\t\t<button type=\"reset\" (click)=\"getByMedicineId(br.value, status.value)\" class=\"btn btn-primary\">Submit</button>\n                \t\t</div>\n                </div>\n             </div>\n\t</form>\n\n\n  <div *ngIf=\"displayTable\" class=\"table-responsive\">\n    <br>\n    <table class=\"table table-striped table-dark table-hover text-center\">\n      \n        <thead class=\"theme-table\">\n            <tr>            \n                <th> Serial Number</th>\n                <th>Medicine</th>\n                <th>Add</th>\n                <th>Update</th>\n                <th>Updates</th>                \n            </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><a [routerLink]=\"['/medicine/details',mlist[0].serial]\">{{mlist[0].serial}}</a></td>\n            <td>{{mlist[0].medicine}}</td>\n            <td>{{mlist[0].Mdate}}</td>\n            <td>{{mlist[0].location}}</td>\n            <td>{{mlist[0].weight}}</td>\n            </tr>\n         \n        </tbody>\n        <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th><th></th></tr></tfoot>\n      </table>\n    </div>\n\n\n\n<div  class=\"table-responsive\">\n  <br>\n  <table class=\"table table-striped table-dark table-hover text-center\">\n    \n      <thead class=\"theme-table\">\n          <tr>            \n              <th> Serial Number</th>\n              <th>Medicine</th>\n              <th>Manufacture Date</th>\n              <th>Location</th>\n              <th>Weight(Kg)</th>                \n          </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let list of TMlist\">\n          <td><a [routerLink]=\"['/medicine/details',list.serial]\">{{list.serial}}</a></td>\n          <td>{{list.medicine}}</td>\n          <td>{{list.Mdate}}</td>\n          <td>{{list.location}}</td>\n          <td>{{list.weight}}</td>\n          </tr>\n       \n      </tbody>\n      <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th><th></th></tr></tfoot>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/dashboard/transporter/transporter.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/dashboard/transporter/transporter.component.ts ***!
  \**********************************************************************/
/*! exports provided: TransporterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransporterComponent", function() { return TransporterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");






var TransporterComponent = /** @class */ (function () {
    function TransporterComponent(httpuser, qrReader, http) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.transporter1 = _medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"];
        this.list = [];
        this.mlist = [];
        // dlist:any=[];
        // plist:any=[];
        this.TMlist = [];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status2 = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    TransporterComponent.prototype.ngOnInit = function () {
        this.Medistatus = "Recived by Transporter";
        this.mypublickey = localStorage.getItem("publicKey");
        this.transporterMedicineId(this.mypublickey);
    };
    TransporterComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    //post data api
    TransporterComponent.prototype.transporterList = function () {
        var _this = this;
        return this.httpuser.getTransporterList().subscribe(function (data) {
            _this.list = data;
        });
    };
    //   allDistributer() {
    //     return this.http.getallWholesalerUser().subscribe(data => {
    //       this.dlist = data; 
    // console.log(this.dlist);	  
    //     });
    //   }
    //   allPharma() {
    //     return this.http.getallWholesalerUser().subscribe(data => {
    //       this.plist = data; 
    // console.log(this.plist);	  
    //     });
    //   }
    TransporterComponent.prototype.transporterMedicineId = function (id) {
        var _this = this;
        return this.httpuser.transporterMedicine(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log(_this.TMlist);
        });
    };
    TransporterComponent.prototype.getByMedicineId = function (id, status) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getMedicineId(id).subscribe(function (data) {
            _this.mlist = data;
            console.log(_this.mlist);
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicine, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].weight, _this.mlist[0].Edate, _this.mlist[0].Mdate, _this.mlist[0].MedicineId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.Medistatus);
            alert("Package piked ");
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            //  const Metadata = {
            //   "action": "pickPackage",
            //   "payloaddata": {
            //       "serialNumber": this.mlist[0].serial,
            //       "comment": status
            //   },
            //   "private":this.privateKey,
            //   "public": this.mypublickey
            //     }	    
            // const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json'
            // })
            // }
            //     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
            //  (val) => {	
            //   console.log("POST call successful value returned in body", val);
            //   this.blockchain = val;
            //   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //     this.status2 = JSON.parse(this.blockchain.response.body);            
            //     this.statusValue = this.status2.data[0].status;
            //     this.itemId = this.status2.data[0].id;
            //     if (this.statusValue == 'COMMITTED') {
            //    this.displayTable=true; 
            //    this.transporter(this.mlist[0].serial,this.mlist[0].medicine,this.mlist[0].barcode,this.mlist[0].location,this.mlist[0].weight,this.mlist[0].Edate,this.mlist[0].Mdate,
            //     this.mlist[0].MedicineId,this.mlist[0].role,this.mlist[0].time,this.mypublickey,this.Medistatus);
            //    alert("Package piked ");
            //   }
            //   else{
            // 	  alert("Process not completed");
            //   }
            // }
            //   else {
            //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //       this.blockchain2 =val
            //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //         this.status2 = JSON.parse(this.blockchain2.body);
            //         console.log('json value2', this.status2.data[0].status);
            //         this.statusValue = this.status2.data[0].status;
            //         this.itemId = this.status2.data[0].id;
            //         if (this.statusValue == 'COMMITTED') {
            //           this.transporter(this.mlist[0].serial,this.mlist[0].medicine,this.mlist[0].barcode,this.mlist[0].location,this.mlist[0].weight,this.mlist[0].Edate,this.mlist[0].Mdate,
            //             this.mlist[0].MedicineId,this.mlist[0].role,this.mlist[0].time,this.mypublickey,this.Medistatus);
            //             alert("Package piked ");
            //         }
            //         else {
            //           alert('Request Rejected');
            //         }
            //       }
            //     })
            //   }
            // // }).catch(function (err) {
            // //   console.log(err.message);
            // });
        });
    };
    TransporterComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new _medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    TransporterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transporter',
            template: __webpack_require__(/*! ./transporter.component.html */ "./src/app/admin/dashboard/transporter/transporter.component.html"),
            styles: [__webpack_require__(/*! ./transporter.component.css */ "./src/app/admin/dashboard/transporter/transporter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], TransporterComponent);
    return TransporterComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/wholesaler/wholesaler.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/dashboard/wholesaler/wholesaler.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n   \n    background-color: rgb(0, 0, 0) !important;   \n    margin-top: 35px;   \n    border-top-right-radius: 70px;\n    border-top-left-radius: 70px;\n}\n\nbody{\n    background-color: rgb(7, 71, 167) !important;\n}\n\nh4{\n    border-radius: 38px;\n    border: 12px solid black;\n    border-bottom-width: 13px;\n    margin-top: -24px;\n    background-color: rgb(23, 0, 222);\n    color: white;\n    font-family: fantasy;\n    font-size: 30px;\n    text-align: center;\n    margin-bottom: 25px;\n}\n\nh2{\n    font-size: 2rem;\n    color: white;\n    font-family: inherit;\n    padding: 12px;\n    border-top: 2px solid indianred;\n    border-bottom: 2px solid indianred;\n    border-right: 2px solid indianred;\n    border-right-width: 12px;\n    border-left: 2px solid indianred;\n    border-left-width: 12px;\n}\n\n.col{\n    flex-basis: 0;\n    flex-grow: 1;\n    background-color: ghostwhite;\n    margin-left: 5%;   \n    max-width: 90%;\n}\n\n.row{\n\t padding: 10px;\n}\n\n#content{\n    background-color: ghostwhite !important;   \n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL3dob2xlc2FsZXIvd2hvbGVzYWxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL3dob2xlc2FsZXIvd2hvbGVzYWxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKSAhaW1wb3J0YW50OyAgIFxuICAgIG1hcmdpbi10b3A6IDM1cHg7ICAgXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDcwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNzBweDtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgNzEsIDE2NykgIWltcG9ydGFudDtcbn1cbmg0e1xuICAgIGJvcmRlci1yYWRpdXM6IDM4cHg7XG4gICAgYm9yZGVyOiAxMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAwLCAyMjIpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogZmFudGFzeTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbmgye1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgaW5kaWFucmVkO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBpbmRpYW5yZWQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgaW5kaWFucmVkO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMTJweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGluZGlhbnJlZDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMTJweDtcbn1cbi5jb2x7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNSU7ICAgXG4gICAgbWF4LXdpZHRoOiA5MCU7XG59XG4gICBcbi5yb3d7XG5cdCBwYWRkaW5nOiAxMHB4O1xufVxuXG4jY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlICFpbXBvcnRhbnQ7ICAgXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/dashboard/wholesaler/wholesaler.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/dashboard/wholesaler/wholesaler.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<!-- <div class=\"container\">\n  <h4>Wholesaler Details</h4>\n  <form id=\"content\" [formGroup]=\"registerForm1\" (ngSubmit)=\"wholesaler(bId.value,shipper.value,reciver.value)\">\n    <div class=\"row\">\n\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label>Batch ID</label><span style=\"color: red\">*</span>\n          <input #bId type=\"text\" class=\"form-control required\" formControlName=\"bId011\"\n            [ngClass]=\"{ 'is-invalid': submitted1 && f1.bId011.errors }\" maxlength=\"30\">\n          <div *ngIf=\"submitted1 && f1.bId011.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f1.bId011.errors.required\">Batch ID required</div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label>Shipper</label><span style=\"color: red\">*</span>\n          <input #shipper type=\"text\" class=\"form-control required\" formControlName=\"shipper011\"\n            [ngClass]=\"{ 'is-invalid': submitted1 && f1.shipper011.errors }\" maxlength=\"30\">\n          <div *ngIf=\"submitted1 && f1.shipper011.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f1.shipper011.errors.required\">Shipper required</div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label>Receiver</label><span style=\"color: red\">*</span>\n          <input #reciver type=\"text\" class=\"form-control required\" formControlName=\"reciver011\"\n            [ngClass]=\"{ 'is-invalid': submitted1 && f1.reciver011.errors }\" maxlength=\"30\">\n          <div *ngIf=\"submitted1 && f1.reciver011.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f1.reciver011.errors.required\">Receiver required</div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"row text-right\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary\">Create Records</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row text-right\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <a [routerLink]=\"'/sendwholesaler'\" class=\"btn btn-success\"> Send Medicine</a>\n        </div>\n      </div>\n    </div>\n  </form>\n\n\n  <div class=\"container-fulid\">\n    <h2>List Of Wholesaler</h2>\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped table-dark table-hover text-center\">\n\n        <thead class=\"bg-success\">\n          <tr>\n            <th>Batch ID</th>\n            <th>Shipper</th>\n            <th>Receiver</th>\n            <th>Edit</th>\n            <th>Delete</th>\n          </tr>\n\n        </thead>\n\n\n        <tbody>\n          <tr *ngFor=\"let distdata  of list\">\n            <td>{{distdata.batchid}}</td>\n            <td>{{distdata.shipper}}</td>\n            <td>{{distdata.reciver}}</td>\n            <td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"editWholesaler(distdata._id)\"\n                data-target=\"#exampleModalCenter\" data-dismiss=\"exampleModalCenter\">Edit</button></td>\n            <td><button type=\"button\" (click)=\"deleteWholesaler(distdata._id)\" class=\"btn btn-danger\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n        <tfoot class=\"bg-success\">\n          <tr>\n            <th></th>\n            <th></th>\n            <th></th>\n            <th></th>\n            <th></th>\n\n          </tr>\n        </tfoot>\n      </table>\n    </div>\n  </div> -->\n\n\n\n  <!-- Modal \n<div class=\"modal fade\" id=\"exampleModalCenter1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Edit Data</h5>\n        \n      </div>\n      <div class=\"modal-body\">\n        <form>\n           <div class=\"row\">\n           <div class=\"col\"><div class=\"form-group\">\n                <label>Batch ID</label>\n                <input type=\"text\"  #bId1 class=\"form-control required\" [(ngModel)]=\"editlist.batchid\" name=\"batchid\" maxlength=\"30\"  >\n              </div></div>\n          </div>\n\n      <div class=\"row\">\n          <div class=\"col\"><div class=\"form-group\">\n              <label>Shipper</label>\n              <input  type=\"text\" #shipper1 class=\"form-control required\" [(ngModel)]=\"editlist.shipper\" name=\"reciver\" maxlength=\"30\"  >\n            </div></div>           \n        </div>     \n\n        <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Receiver</label>\n                <input  type=\"text\" #reciver1 class=\"form-control \" [required]=\"true\" [(ngModel)]=\"editlist.reciver\" name=\"shipper\" maxlength=\"30\"  >\n              </div></div>            \n          </div>    \n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"wholesalerList()\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateWholesaler(bId1.value, shipper1.value,reciver1.value,editlist._id)\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>  \n\n</div>-->\n\n\n  <!-- private key Modal \n<div *ngIf=\"popuptask\" _ngcontent-c1 aria-labelledby=\"exampleModalLabel\" class=\"modal fade {{button1}}\" id=\"basicExampleModal\" role=\"dialog\" tabindex=\"-1\" style=\"display: block; background-color: rgba(17, 16, 16, 0.82);\" aria-modal=\"true\">\n    <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\" style=\"    border-bottom: 1px solid #ffffff;\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Private Key</h5>\n        </div>\n        <div class=\"modal-body\">\n          <h6 style=\"color:red; float: right;\">Chance {{count+1}}</h6>\n          <span style=\"color:green; text-align: right;\">You have only 3 chance to enter your valid Key</span>\n         <input type=\"text\" #privateK class=\"form-control required\" placeholder=\"Enter your private Key\">\n        </div>\n        <div class=\"modal-footer\" style=\"border-top: 1px solid #ffffff;\">       \n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"postPrivateKey(privateK.value)\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div> -->\n\n\n<!-- \n\n  <div class=\"container\">\n\n    \n    <div class=\"modal fade\" id=\"exampleModalCenter\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n\n          \n          <div class=\"modal-body\">\n            <form [formGroup]=\"registerForm\"\n              (ngSubmit)=\"onSubmit(bId1.value,shipper1.value, reciver1.value,editlist._id)\">\n\n\n              \n\n\n              <div class=\"form-group\">\n                <label>Batch ID</label>\n                <input type=\"text\" formControlName=\"batchid0\" #bId1 class=\"form-control required\"\n                  [(ngModel)]=\"editlist.batchid\" [ngClass]=\"{ 'is-invalid': submitted && f.batchid0.errors }\">\n                <div *ngIf=\"submitted && f.batchid0.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.batchid0.errors.required\">Batch ID required</div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label>Shipper</label>\n                <input #shipper1 type=\"text\" formControlName=\"medicineStatus0\" class=\"form-control required\"\n                  [(ngModel)]=\"editlist.shipper\" [ngClass]=\"{ 'is-invalid': submitted && f.medicineStatus0.errors }\">\n                <div *ngIf=\"submitted && f.medicineStatus0.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.medicineStatus0.errors.required\">Shipper required </div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label>Receiver</label>\n                <input #reciver1 type=\"text\" formControlName=\"medicineQuality0\" class=\"form-control required\"\n                  [(ngModel)]=\"editlist.reciver\" maxlength=\"30\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.medicineQuality0.errors }\">\n                <div *ngIf=\"submitted && f.medicineQuality0.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.medicineQuality0.errors.required\">Receiver required </div>\n                </div>\n\n\n              </div>\n\n              \n              <div class=\"modal-footer\">\n                <div class=\"form-group\">\n                  <button type=\"button\" class=\"btn btn-danger\" #completeModal (click)=\"wholesalerList()\"\n                    data-dismiss=\"modal\">Close</button>\n                </div>\n\n                <div class=\"form-group\">\n                  <button class=\"btn btn-primary\">Save changes</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->"

/***/ }),

/***/ "./src/app/admin/dashboard/wholesaler/wholesaler.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/dashboard/wholesaler/wholesaler.component.ts ***!
  \********************************************************************/
/*! exports provided: WholesalerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WholesalerComponent", function() { return WholesalerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wholesaler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wholesaler */ "./src/app/admin/dashboard/wholesaler/wholesaler.ts");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WholesalerComponent = /** @class */ (function () {
    function WholesalerComponent(httpuser, route, router, formBuilder) {
        this.httpuser = httpuser;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.submitted1 = false;
        this.list = [];
        this.editlist = [];
        this.primerykeyinput = [];
        this.count = 0;
        this.isShown = false;
        this.popuptask = true;
    }
    WholesalerComponent.prototype.ngOnInit = function () {
        this.button1 = 'show';
        this.onloadcheckKey();
        this.wholesalerList();
        // this.button1='show';
        this.registerForm = this.formBuilder.group({
            batchid0: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            medicineStatus0: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            medicineQuality0: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.registerForm1 = this.formBuilder.group({
            bId011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            shipper011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            reciver011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    /* postPrivateKey(a){
        console.log(a);
        this.button1="hide";
        this.popuptask=false;
      
    } */
    WholesalerComponent.prototype.wholesalerList = function () {
        var _this = this;
        return this.httpuser.getWholesalerList().subscribe(function (data) {
            _this.list = data;
        });
    };
    Object.defineProperty(WholesalerComponent.prototype, "f1", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm1.controls; },
        enumerable: true,
        configurable: true
    });
    WholesalerComponent.prototype.wholesaler = function (x, y, z) {
        var _this = this;
        this.submitted1 = true;
        // stop here if form is invalid
        if (this.registerForm1.invalid) {
            return;
        }
        console.log(x, y, z);
        this.wholeSaler = new _wholesaler__WEBPACK_IMPORTED_MODULE_2__["Wholesaler"](x, y, z);
        this.base = this.httpuser.wholesaler(this.wholeSaler);
        this.call = this.base.subscribe(function (data) {
            alert("Done");
            _this.wholesalerList();
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    WholesalerComponent.prototype.deleteWholesaler = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete?')) {
            this.httpuser.deletewholesaler(id).subscribe(function (res) {
                _this.wholesalerList();
            });
        }
    };
    WholesalerComponent.prototype.editWholesaler = function (id) {
        var _this = this;
        this.httpuser.editWholesaler(id).subscribe(function (res) {
            _this.editlist = res;
        });
    };
    WholesalerComponent.prototype.updateWholesaler = function (batchid, shipper, reciver, id) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.httpuser.updateWholesaler(batchid, shipper, reciver, id);
            alert("Data Successfully Updated");
            _this.router.navigate(["wholesaler"]);
        });
    };
    Object.defineProperty(WholesalerComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    WholesalerComponent.prototype.onSubmit = function (batchid1, shipper1, reciver1, id1) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(batchid1, shipper1, reciver1, id1);
        this.route.params.subscribe(function (params) {
            _this.httpuser.updateWholesaler(batchid1, shipper1, reciver1, id1);
            alert("Data Successfully Updated");
            var el = _this.completeModal.nativeElement;
            el.click();
            var x = setTimeout(function () { _this.wholesalerList(); }, 100);
            _this.router.navigate(["wholesaler"]);
        });
    };
    //propup for private key........
    WholesalerComponent.prototype.onloadcheckKey = function () {
        this.mypublickey1 = localStorage.getItem("generatedPublickey");
        this.mypublickey = localStorage.getItem("publicKey");
        if (this.mypublickey1 == this.mypublickey) {
            this.button1 = "hide";
            this.popuptask = false;
        }
        else {
            return;
        }
    };
    //private key post method..............
    WholesalerComponent.prototype.postPrivateKey = function (keystring) {
        var _this = this;
        this.count++;
        if (this.count == 3) {
            this.logout();
        }
        else {
            return this.httpuser.getpublickey(keystring).subscribe(function (result) {
                _this.primerykeyinput = result;
                _this.mypublickey = localStorage.getItem("publicKey");
                if (_this.primerykeyinput == _this.mypublickey) {
                    _this.newpublickey = localStorage.setItem('generatedPublickey', _this.primerykeyinput);
                    _this.button1 = "hide";
                    _this.popuptask = false;
                }
                else {
                    console.log('count number', _this.count);
                    _this.button1 = 'show';
                }
            });
        }
    };
    //logout
    WholesalerComponent.prototype.logout = function () {
        localStorage.removeItem("id_token");
        localStorage.removeItem("publicKey");
        localStorage.removeItem("generatedPublickey");
        localStorage.removeItem("role");
        localStorage.removeItem("x-token");
        this.router.navigate(['/home']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], WholesalerComponent.prototype, "completeModal", void 0);
    WholesalerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-wholesaler",
            template: __webpack_require__(/*! ./wholesaler.component.html */ "./src/app/admin/dashboard/wholesaler/wholesaler.component.html"),
            styles: [__webpack_require__(/*! ./wholesaler.component.css */ "./src/app/admin/dashboard/wholesaler/wholesaler.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], WholesalerComponent);
    return WholesalerComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/wholesaler/wholesaler.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/wholesaler/wholesaler.ts ***!
  \**********************************************************/
/*! exports provided: Wholesaler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wholesaler", function() { return Wholesaler; });
var Wholesaler = /** @class */ (function () {
    function Wholesaler(batchid, shipper, reciver) {
        this.batchid = batchid;
        this.shipper = shipper;
        this.reciver = reciver;
    }
    return Wholesaler;
}());



/***/ }),

/***/ "./src/app/admin/medicine/medicine-create/addmedicine.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-create/addmedicine.ts ***!
  \***************************************************************/
/*! exports provided: Medicine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Medicine", function() { return Medicine; });
var Medicine = /** @class */ (function () {
    function Medicine(serial, medicine, MedicineCurrentTempurature, location, weight, reporter, status, userId, customern, customername, shipton, countrycode, shiptoparty, pharmadeliveryno, salesorderendcustomer, purchaseorderendcustomer, shippedquantity, unit, aproductname, dosageform, packagetype, packagesize, globelmaterialno, plocalmaterialno, batchn, dateofmanufecture, releasedate, expirydate, productionqty, pproductname, pglobelmaterialno, apackagingsite, manufacturinglicense, gmvcertificateno, certificateno, productn, globalmaterialn, localmaterialn, areleasedate, abatchn, amanufacturingsite, amanufacturinglicense, Mdate, Edate, localmaterialno, barcode) {
        this.serial = serial;
        this.medicine = medicine;
        this.MedicineCurrentTempurature = MedicineCurrentTempurature;
        this.location = location;
        this.weight = weight;
        this.reporter = reporter;
        this.status = status;
        this.userId = userId;
        this.customern = customern;
        this.customername = customername;
        this.shipton = shipton;
        this.countrycode = countrycode;
        this.shiptoparty = shiptoparty;
        this.pharmadeliveryno = pharmadeliveryno;
        this.salesorderendcustomer = salesorderendcustomer;
        this.purchaseorderendcustomer = purchaseorderendcustomer;
        this.shippedquantity = shippedquantity;
        this.unit = unit;
        this.aproductname = aproductname;
        this.dosageform = dosageform;
        this.packagetype = packagetype;
        this.packagesize = packagesize;
        this.globelmaterialno = globelmaterialno;
        this.plocalmaterialno = plocalmaterialno;
        this.batchn = batchn;
        this.dateofmanufecture = dateofmanufecture;
        this.releasedate = releasedate;
        this.expirydate = expirydate;
        this.productionqty = productionqty;
        this.pproductname = pproductname;
        this.pglobelmaterialno = pglobelmaterialno;
        this.apackagingsite = apackagingsite;
        this.manufacturinglicense = manufacturinglicense;
        this.gmvcertificateno = gmvcertificateno;
        this.certificateno = certificateno;
        this.productn = productn;
        this.globalmaterialn = globalmaterialn;
        this.localmaterialn = localmaterialn;
        this.areleasedate = areleasedate;
        this.abatchn = abatchn;
        this.amanufacturingsite = amanufacturingsite;
        this.amanufacturinglicense = amanufacturinglicense;
        this.Mdate = Mdate;
        this.Edate = Edate;
        this.localmaterialno = localmaterialno;
        this.barcode = barcode;
    }
    return Medicine;
}());



/***/ }),

/***/ "./src/app/admin/medicine/medicine-create/addmedicine2.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-create/addmedicine2.ts ***!
  \****************************************************************/
/*! exports provided: Medicine2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Medicine2", function() { return Medicine2; });
var Medicine2 = /** @class */ (function () {
    // customern:string;
    // customername:string;
    // shipton :string;
    // countrycode:string;
    // shiptoparty:string;
    // pharmadeliveryno:string;
    // salesorderendcustomer:string;
    // purchaseorderendcustomer:string;
    // shippedquantity:string;
    // unit:string;
    // aproductname:string;
    // dosageform:string;
    // packagetype:string;
    // packagesize:string;
    // globelmaterialno:string;
    // batchn:string;
    // dateofmanufecture:string;
    // releasedate:string;
    // expirydate:string;
    // productionqty:string;
    // pproductname:string;
    // pglobelmaterialno:string;
    // apackagingsite:string;
    // manufacturinglicense:string;
    // gmvcertificateno:string;
    // certificateno:string;
    // productn:string;
    // globalmaterialn:string;
    // localmaterialn:string;
    // areleasedate:string;
    // abatchn:string;
    // amanufacturingsite:string;
    // amanufacturinglicense:string;
    function Medicine2(serial, medicine, barcode, location, weight, Mdate, Edate, MedicineId, role, time, publickey, status) {
        this.serial = serial;
        this.medicine = medicine;
        this.barcode = barcode;
        this.location = location;
        this.weight = weight;
        this.Mdate = Mdate;
        this.Edate = Edate;
        this.MedicineId = MedicineId;
        this.role = role;
        this.time = time;
        this.publickey = publickey;
        this.status = status;
        // this.customern=customern;
        // this.customername=customername;
        // this.shipton=shipton ;
        // this.countrycode=countrycode;
        // this.shiptoparty=shiptoparty;
        // this.pharmadeliveryno=pharmadeliveryno;
        // this.salesorderendcustomer=salesorderendcustomer;
        // this.purchaseorderendcustomer=purchaseorderendcustomer;
        // this.shippedquantity=shippedquantity;
        // this.unit=unit;
        // this.aproductname=aproductname;
        // this.dosageform=dosageform;
        // this.packagetype=packagetype;
        // this.packagesize=packagesize;
        // this.globelmaterialno=globelmaterialno;
        // this.batchn=batchn;
        // this.dateofmanufecture=dateofmanufecture;
        // this.releasedate=releasedate;
        // this.expirydate=expirydate;
        // this.productionqty=productionqty;
        // this.pproductname=pproductname;
        // this.pglobelmaterialno=pglobelmaterialno;
        // this.apackagingsite=apackagingsite;
        // this.manufacturinglicense=manufacturinglicense;
        // this.gmvcertificateno=gmvcertificateno;
        // this.certificateno=certificateno;
        // this.productn=productn;
        // this.globalmaterialn=globalmaterialn;
        // this.localmaterialn=localmaterialn;
        // this.areleasedate=areleasedate;
        // this.abatchn=abatchn;
        // this.amanufacturingsite=amanufacturingsite;
        // this.amanufacturinglicense=amanufacturinglicense;
    }
    return Medicine2;
}());



/***/ }),

/***/ "./src/app/admin/medicine/medicine-create/medicine-create.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-create/medicine-create.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-top:50px;\n    color: navy;\n}\n\nh4{\ncolor: navy;\n    margin-left: 20px;\n}\n\nbody{\n    color: navy;\n}\n\n.cen{\n    text-align: center;\n}\n\n.width-100px{\n    min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvbWVkaWNpbmUtY3JlYXRlL21lZGljaW5lLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtBQUNBLFdBQVc7SUFDUCxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9tZWRpY2luZS9tZWRpY2luZS1jcmVhdGUvbWVkaWNpbmUtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6NTBweDtcbiAgICBjb2xvcjogbmF2eTtcbn1cblxuaDR7XG5jb2xvcjogbmF2eTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbmJvZHl7XG4gICAgY29sb3I6IG5hdnk7XG59XG4uY2Vue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53aWR0aC0xMDBweHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/medicine/medicine-create/medicine-create.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-create/medicine-create.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<div class=\"container\">\n  <h4>Logistic Cover Sheet NCH010400787797 to Batch Certificate</h4>\n  <mat-horizontal-stepper linear #stepper>\n    <mat-step>\n      <form [formGroup]=\"basicLogisticInformation\" (ngSubmit)=\"onBasicInfoSubmit(stepper)\">\n        <div class=\"row mb-3 justify-content-center\"><b>Basic Logistic Information</b></div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Product Name:</label>\n              <input #se type=\"text\" formControlName=\"SerialNumber\" name=\"SerialNumber\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.SerialNumber.errors }\"\n                class=\"form-control required\" maxlength=\"30\" required>\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.SerialNumber.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.SerialNumber.errors.required\">Product Name required </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Customer's Product Name:</label>\n              <input #me type=\"name\" formControlName=\"Medicine\" name=\"Medicine\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.Medicine.errors }\"\n                class=\"form-control required\" maxlength=\"30\">\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.Medicine.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.Medicine.errors.required\">Customer's Product required </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Batch N:</label>\n              <input #lo type=\"text\" formControlName=\"Location\" name=\"Location\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.Location.errors }\"\n                class=\"form-control required\" maxlength=\"30\">\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.Location.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.Location.errors.required\">Batch N required </div>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Global Valuated Material N:</label>\n              <input #br type=\"number\" pattern=\"[0-9]*\"\n                oninput=\"javascript: if (this.value != this.number) this.value = this.value.slice(null);\" min=\"0\"\n                max=\"99\" formControlName=\"MedicineCurrentTempurature\" name=\"MedicineCurrentTempurature\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.MedicineCurrentTempurature.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.MedicineCurrentTempurature.errors\"\n                class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.MedicineCurrentTempurature.errors.required\">Global Valuated Material\n                  required </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Batch Certificate N</label>\n              <input #we type=\"text\" formControlName=\"Weight\" name=\"Weight\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.Weight.errors }\"\n                class=\"form-control required\" min=0 oninput=\"validity.valid||(value='');\">\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.Weight.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.Weight.errors.required\">Batch Certificate required </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Customer N</label>\n              <input #cn type=\"text\" formControlName=\"customern\" name=\"customern\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.customern.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.customern.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.customern.errors.required\">Customer N required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Customer Name:</label>\n              <input #cusn type=\"text\" name=\"customername\" formControlName=\"customername\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.customername.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.customername.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.customername.errors.required\">Customer Name required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Ship to N</label>\n              <input #stn type=\"text\" name=\"shipton\" formControlName=\"shipton\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.shipton.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.shipton.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.shipton.errors.required\">Ship N required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Country Code</label>\n              <input #cc type=\"text\" name=\"countrycode\" formControlName=\"countrycode\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.countrycode.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.countrycode.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.countrycode.errors.required\">Country Code required</div>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Ship to Party:</label>\n              <input #stp type=\"text\" name=\"shiptoparty\" formControlName=\"shiptoparty\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.shiptoparty.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.shiptoparty.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.shiptoparty.errors.required\">Ship to Party required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Pharma Outbound Delivery No:</label>\n              <input #podn type=\"text\" name=\"pharmadeliveryno\" formControlName=\"pharmadeliveryno\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.pharmadeliveryno.errors }\"\n                class=\"form-control required\" maxlength=\"30\">\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.pharmadeliveryno.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.pharmadeliveryno.errors.required\">Pharma Outbound Delivery No. required\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Sales Order No vs. End Customer:</label>\n              <input #sonec type=\"text\" name=\"salesorderendcustomer\" formControlName=\"salesorderendcustomer\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.salesorderendcustomer.errors }\"\n                class=\"form-control required\" maxlength=\"30\">\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.salesorderendcustomer.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.salesorderendcustomer.errors.required\"></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Purchase Order N of End Customer:</label>\n              <input #ponec type=\"text\" name=\"purchaseorderendcustomer\" formControlName=\"purchaseorderendcustomer\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.purchaseorderendcustomer.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.purchaseorderendcustomer.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.purchaseorderendcustomer.errors.required\">Purchase Order N of End\n                  Customer required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Shipped Quantity:</label>\n              <input #sq type=\"text\" name=\"shippedquantity\" formControlName=\"shippedquantity\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.shippedquantity.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.shippedquantity.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.shippedquantity.errors.required\">Shipped Quantity required</div>\n              </div>\n\n\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Unit:</label>\n              <input #unit type=\"text\" name=\"unit\" formControlName=\"unit\"\n                [ngClass]=\"{ 'is-invalid': basicSubmit && basicInfoFormControl.unit.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"basicSubmit && basicInfoFormControl.unit.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"basicInfoFormControl.unit.errors.required\"> Unit required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col col d-flex justify-content-end\">\n            <button class=\"btn btn-primary width-100px\" type=\"submit\">Next</button>\n          </div>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step>\n      <form [formGroup]=\"additionalLogisticInformation\" (ngSubmit)=\"onAdditionalInfoSubmit(stepper)\">\n        <div class=\"row mb-3 justify-content-center\"><b>Additional Logistic Information</b></div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Product Name:</label>\n              <input #apn type=\"text\" name=\"aproductname\" formControlName=\"aproductname\"\n                [ngClass]=\"{ 'is-invalid': additionalSubmit && additionalInfoFormControl.aproductname.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"additionalSubmit && additionalInfoFormControl.aproductname.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"additionalInfoFormControl.aproductname.errors.required\">Product Name required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Dosage Form:</label>\n              <input #df type=\"text\" name=\"dosageform\" formControlName=\"dosageform\"\n                [ngClass]=\"{ 'is-invalid': additionalSubmit && additionalInfoFormControl.dosageform.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"additionalSubmit && additionalInfoFormControl.dosageform.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"additionalInfoFormControl.dosageform.errors.required\">Dosage Form required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Package type:</label>\n              <input #pt type=\"text\" onkeypress=\"return /[a-z]/i.test(event.key)\" formControlName=\"packagetype\"\n                name=\"packagetype\"\n                [ngClass]=\"{ 'is-invalid': additionalSubmit && additionalInfoFormControl.packagetype.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"additionalSubmit && additionalInfoFormControl.packagetype.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"additionalInfoFormControl.packagetype.errors.required\"> Package Type required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Package Size:</label>\n              <input #pcsi type=\"text\" class=\"form-control\" formControlName=\"packagesize\" name=\"packagesize\">\n              <div *ngIf=\"\" class=\"invalid-feedback\">\n                <div *ngIf=\"\">Package Size required</div>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Global Material No.:</label>\n              <input #gm type=\"number\" pattern=\"[0-9]*\"\n                oninput=\"javascript: if (this.value != this.number) this.value = this.value.slice(null);\" min=\"0\"\n                max=\"99\" formControlName=\"globelmaterialno\" name=\"globelmaterialno\"\n                [ngClass]=\"{ 'is-invalid': additionalSubmit && additionalInfoFormControl.globelmaterialno.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"additionalSubmit && additionalInfoFormControl.globelmaterialno.errors\"\n                class=\"invalid-feedback\">\n                <div *ngIf=\"additionalInfoFormControl.globelmaterialno.errors.required\"> Global Material No. required\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Batch N:</label>\n              <input #bn type=\"text\" name=\"batchn\" formControlName=\"batchn\"\n                [ngClass]=\"{ 'is-invalid': additionalSubmit && additionalInfoFormControl.batchn.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"additionalSubmit && additionalInfoFormControl.batchn.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"additionalInfoFormControl.batchn.errors.required\">Batch N Quantity required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Date of Manufacturing:</label>\n              <input #dom type=\"date\" name=\"dateofmanufecture\" formControlName=\"dateofmanufecture\"\n                [ngClass]=\"{ 'is-invalid': additionalSubmit && additionalInfoFormControl.dateofmanufecture.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"additionalSubmit && additionalInfoFormControl.dateofmanufecture.errors\"\n                class=\"invalid-feedback\">\n                <div *ngIf=\"additionalInfoFormControl.dateofmanufecture.errors.required\">Date of Manufacturing required\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Release Date:</label>\n              <input #rd type=\"date\" name=\"releasedate\" formControlName=\"releasedate\"\n                [ngClass]=\"{ 'is-invalid': additionalSubmit && additionalInfoFormControl.releasedate.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"additionalSubmit && additionalInfoFormControl.releasedate.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"additionalInfoFormControl.releasedate.errors.required\">Release Date required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Production Qty:</label><span>PC</span>\n              <input #pq type=\"number\" pattern=\"[0-9]*\"\n                oninput=\"javascript: if (this.value != this.number) this.value = this.value.slice(null);\" min=\"0\"\n                max=\"99\" name=\"productionqty\" formControlName=\"productionqty\"\n                [ngClass]=\"{ 'is-invalid': additionalSubmit && additionalInfoFormControl.productionqty.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"additionalSubmit && additionalInfoFormControl.productionqty.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"additionalInfoFormControl.productionqty.errors.required\"> Production Qty required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col col d-flex justify-content-end\">\n            <button class=\"btn btn-primary width-100px\" type=\"submit\">Next</button>\n          </div>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step>\n      <form [formGroup]=\"packagingInformation\" (ngSubmit)=\"onPackagingInfoSubmit(stepper)\">\n        <div class=\"row mb-3 justify-content-center\"><b>Packaging Logistic Information</b></div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Product Name:</label>\n              <input #ppn type=\"text\" name=\"pproductname\" formControlName=\"pproductname\"\n                [ngClass]=\"{ 'is-invalid': packagingSubmit && packagingInfoFormControl.pproductname.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"packagingSubmit && packagingInfoFormControl.pproductname.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"packagingInfoFormControl.pproductname.errors.required\">Product Name required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Global Material No.:</label>\n              <input #gmn type=\"number\" pattern=\"[0-9]*\"\n                oninput=\"javascript: if (this.value != this.number) this.value = this.value.slice(null);\" min=\"0\"\n                max=\"99\" name=\"pglobelmaterialno\" formControlName=\"pglobelmaterialno\"\n                [ngClass]=\"{ 'is-invalid': packagingSubmit && packagingInfoFormControl.pglobelmaterialno.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"packagingSubmit && packagingInfoFormControl.pglobelmaterialno.errors\"\n                class=\"invalid-feedback\">\n                <div *ngIf=\"packagingInfoFormControl.pglobelmaterialno.errors.required\"> Global Material No. required\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Local Material No:</label>\n              <input #localm type=\"number\" pattern=\"[0-9]*\"\n                oninput=\"javascript: if (this.value != this.number) this.value = this.value.slice(null);\" min=\"0\"\n                max=\"99\" name=\"plocalmaterialno\" formControlName=\"plocalmaterialno\"\n                [ngClass]=\"{ 'is-invalid': packagingSubmit && packagingInfoFormControl.plocalmaterialno.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"packagingSubmit && packagingInfoFormControl.plocalmaterialno.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"packagingInfoFormControl.plocalmaterialno.errors.required\">Local Material No. required</div>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Packaging Site:</label>\n              <input #pcsi type=\"text\" name=\"apackagingsite\" formControlName=\"apackagingsite\"\n                [ngClass]=\"{ 'is-invalid': packagingSubmit && packagingInfoFormControl.apackagingsite.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"packagingSubmit && packagingInfoFormControl.apackagingsite.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"packagingInfoFormControl.apackagingsite.errors.required\"> Packaging Site required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Manufacturing License:</label>\n              <input #ml type=\"text\" name=\"manufacturinglicense\" formControlName=\"manufacturinglicense\"\n                [ngClass]=\"{ 'is-invalid': packagingSubmit && packagingInfoFormControl.manufacturinglicense.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"packagingSubmit && packagingInfoFormControl.manufacturinglicense.errors\"\n                class=\"invalid-feedback\">\n                <div *ngIf=\"packagingInfoFormControl.manufacturinglicense.errors.required\">Manufacturing License\n                  required</div>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>GMV Certificate No:</label>\n              <input #gmvc type=\"text\" name=\"gmvcertificateno\" formControlName=\"gmvcertificateno\"\n                [ngClass]=\"{ 'is-invalid': packagingSubmit && packagingInfoFormControl.gmvcertificateno.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"packagingSubmit && packagingInfoFormControl.gmvcertificateno.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"packagingInfoFormControl.gmvcertificateno.errors.required\"> GMV Certificate No required\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col col d-flex justify-content-end\">\n            <button class=\"btn btn-primary width-100px\" type=\"submit\">Next</button>\n          </div>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step>\n      <form [formGroup]=\"requirementInformation\" (ngSubmit)=\"onRequirementInfoSubmit(stepper)\">\n        <div class=\"row mb-3 justify-content-center\"><b>For Tests, Requirments,Results and Conclusion refer to the\n            following\n            Certificate(s)</b></div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Certificate No:</label>\n              <input #cern type=\"text\" min=\"0\" max=\"99\" formControlName=\"certificateno\" name=\"certificateno\"\n                [ngClass]=\"{ 'is-invalid': requirementSubmit && requirementInfoFormControl.certificateno.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"requirementSubmit && requirementInfoFormControl.certificateno.errors\"\n                class=\"invalid-feedback\">\n                <div *ngIf=\"requirementInfoFormControl.certificateno.errors.required\">Certificate No required</div>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Product Name:</label>\n              <input #prn type=\"text\" name=\"productn\" formControlName=\"productn\"\n                [ngClass]=\"{ 'is-invalid': requirementSubmit && requirementInfoFormControl.productn.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"requirementSubmit && requirementInfoFormControl.productn.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"requirementInfoFormControl.productn.errors.required\"> Product Name required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Global Material N:</label>\n              <input #glm type=\"number\" pattern=\"[0-9]*\"\n                oninput=\"javascript: if (this.value != this.number) this.value = this.value.slice(null);\" min=\"0\"\n                max=\"99\" name=\"globalmaterialn\" formControlName=\"globalmaterialn\"\n                [ngClass]=\"{ 'is-invalid': requirementSubmit && requirementInfoFormControl.globalmaterialn.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"requirementSubmit && requirementInfoFormControl.globalmaterialn.errors\"\n                class=\"invalid-feedback\">\n                <div *ngIf=\"requirementInfoFormControl.globalmaterialn.errors.required\">Global Material N required</div>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Local Material N:</label>\n              <input #lmn type=\"number\" pattern=\"[0-9]*\"\n                oninput=\"javascript: if (this.value != this.number) this.value = this.value.slice(null);\" min=\"0\"\n                max=\"99\" name=\"localmaterialn\" formControlName=\"localmaterialn\"\n                [ngClass]=\"{ 'is-invalid': requirementSubmit && requirementInfoFormControl.localmaterialn.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"requirementSubmit && requirementInfoFormControl.localmaterialn.errors\"\n                class=\"invalid-feedback\">\n                <div *ngIf=\"requirementInfoFormControl.localmaterialn.errors.required\">Local Material N required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Release Date:</label>\n              <input #rld type=\"date\" name=\"areleasedate\" formControlName=\"areleasedate\"\n                [ngClass]=\"{ 'is-invalid': requirementSubmit && requirementInfoFormControl.areleasedate.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"requirementSubmit && requirementInfoFormControl.areleasedate.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"requirementInfoFormControl.areleasedate.errors.required\">Release Date required</div>\n              </div>\n\n\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Batch N:</label>\n              <input #abn type=\"number\" pattern=\"[0-9]*\"\n                oninput=\"javascript: if (this.value != this.number) this.value = this.value.slice(null);\" min=\"0\"\n                max=\"99\" name=\"abatchn\" formControlName=\"abatchn\"\n                [ngClass]=\"{ 'is-invalid': requirementSubmit && requirementInfoFormControl.abatchn.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"requirementSubmit && requirementInfoFormControl.abatchn.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"requirementInfoFormControl.abatchn.errors.required\">Batch N required</div>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Manufacturing Site:</label>\n              <input #ams type=\"text\" name=\"amanufacturingsite\" formControlName=\"amanufacturingsite\"\n                [ngClass]=\"{ 'is-invalid': requirementSubmit && requirementInfoFormControl.amanufacturingsite.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"requirementSubmit && requirementInfoFormControl.amanufacturingsite.errors\"\n                class=\"invalid-feedback\">\n                <div *ngIf=\"requirementInfoFormControl.amanufacturingsite.errors.required\"> Manufacturing Site required\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Manufacturing License:</label>\n              <input #amn type=\"text\" name=\"amanufacturinglicense\" formControlName=\"amanufacturinglicense\"\n                [ngClass]=\"{ 'is-invalid': requirementSubmit && requirementInfoFormControl.amanufacturinglicense.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"requirementSubmit && requirementInfoFormControl.amanufacturinglicense.errors\"\n                class=\"invalid-feedback\">\n                <div *ngIf=\"requirementInfoFormControl.amanufacturinglicense.errors.required\">Manufacturing License\n                  required</div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Local Material No:</label>\n              <input #rld type=\"text\" name=\"localmaterialno\" formControlName=\"localmaterialno\"\n                [ngClass]=\"{ 'is-invalid': requirementSubmit && requirementInfoFormControl.localmaterialno.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"requirementSubmit && requirementInfoFormControl.localmaterialno.errors\"\n                class=\"invalid-feedback\">\n                <div *ngIf=\"requirementInfoFormControl.localmaterialno.errors.required\">localmaterialno required</div>\n              </div>\n\n\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Manufactured Date:</label>\n              <input #rld type=\"date\" name=\"ManufacturedDate\" formControlName=\"ManufacturedDate\"\n                [ngClass]=\"{ 'is-invalid': requirementSubmit && requirementInfoFormControl.ManufacturedDate.errors }\"\n                class=\"form-control required\">\n              <div *ngIf=\"requirementSubmit && requirementInfoFormControl.ManufacturedDate.errors\"\n                class=\"invalid-feedback\">\n                <div *ngIf=\"requirementInfoFormControl.ManufacturedDate.errors.required\">Manufactured Date required\n                </div>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col col d-flex justify-content-end\">\n            <button class=\"btn btn-primary width-100px\" type=\"submit\">Create Records</button>\n          </div>\n        </div>\n        <div class=\"row text-left\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <button type=\"button\" #completeModal style=\" margin: 0px; display: none\" class=\"btn btn-primary\"\n                data-toggle=\"modal\" data-target=\"#myModal\">\n                Generate QR Code\n              </button>\n\n            </div>\n          </div>\n        </div>\n</form>\n</mat-step>\n</mat-horizontal-stepper>\n<!-- The Modal -->\n<div class=\"modal fade\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header QR Code Generator Start -->\n      <div class=\"modal-header\">\n\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"margin-left:125px\">\n        <div>\n          <h3>Medicine QR Code Image</h3>\n          <qrcode #parent [qrdata]=\"medicineid\" [size]=\"256\" [level]=\"'M'\"></qrcode>\n        </div>\n\n        <br>\n\n        <div class=\"text\">\n\n          <button (click)=\"saveAsImage(parent)\">Download QR Code Image</button>\n        </div>\n      </div>\n\n      <!-- Modal footer  QR Code Generator End-->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/medicine/medicine-create/medicine-create.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-create/medicine-create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MedicineCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineCreateComponent", function() { return MedicineCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _addmedicine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addmedicine */ "./src/app/admin/medicine/medicine-create/addmedicine.ts");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var MedicineCreateComponent = /** @class */ (function () {
    function MedicineCreateComponent(httpuser, qrReader, http, formBuilder) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.qrdata = null;
        this.itemId = [];
        this.itemId1 = [];
        this.status = [];
        this.transId = [];
        this.medicineid = [];
        this.blockchain = [];
        this.blockchain2 = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
        this.basicSubmit = false;
        this.additionalSubmit = false;
        this.packagingSubmit = false;
        this.requirementSubmit = false;
        console.log('AppComponent running');
        this.qrdata = ' ';
    }
    MedicineCreateComponent.prototype.changeValue = function (newValue) {
        this.qrdata = newValue;
    };
    MedicineCreateComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Medicine Created by Wholesaler";
        this.userId = localStorage.getItem("userId");
        console.log("User ID", this.userId);
        this.myrole = localStorage.getItem("role");
        this.myrole1 = localStorage.getItem("email");
        console.log("User Role", this.myrole1);
        console.log("User Role", this.myrole);
        this.firstname = localStorage.getItem("firstName");
        this.lastname = localStorage.getItem("lastName");
        console.log("User name", this.firstname, this.lastname);
        this.basicLogisticInformation = this.formBuilder.group({
            SerialNumber: ['SerialNumber', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Medicine: ['Medicine', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            MedicineCurrentTempurature: ['21', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Location: ['12', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Weight: ['Weight', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            customern: ['customern', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            customername: ['customername', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            shipton: ['shipton', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            countrycode: ['countrycode', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            shiptoparty: ['shiptoparty', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            pharmadeliveryno: ['pharmadeliveryno', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            salesorderendcustomer: ['salesorderendcustomer', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            purchaseorderendcustomer: ['purchaseorderendcustomer', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            shippedquantity: ['shippedquantity', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            unit: ['unit', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.additionalLogisticInformation = this.formBuilder.group({
            aproductname: ['aproductname', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            dosageform: ['dosageform', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            packagetype: ['packagetype', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            packagesize: ['packagesize'],
            globelmaterialno: [88, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            batchn: ['batchn', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            dateofmanufecture: ['dateofmanufecture', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            releasedate: ['01/27/2021', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            expirydate: ['01/28/2021', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            productionqty: [34, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.packagingInformation = this.formBuilder.group({
            pproductname: ['das', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            pglobelmaterialno: [45, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            plocalmaterialno: [434],
            apackagingsite: ['apackagingsite', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            manufacturinglicense: ['manufacturinglicense', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            gmvcertificateno: [231, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.requirementInformation = this.formBuilder.group({
            certificateno: ['certificateno', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            productn: ['productn', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            globalmaterialn: [222, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            localmaterialn: [333, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            areleasedate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            abatchn: [444, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            amanufacturingsite: ['amanufacturingsite', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            amanufacturinglicense: ['amanufacturinglicense', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ManufacturedDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            localmaterialno: ['localmaterialno', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        //this.medicineid = '92516006ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b5';
        this.registerForm = this.formBuilder.group({
        // SerialNumber: ['', Validators.required],
        // Medicine: ['', Validators.required],
        // MedicineCurrentTempurature: ['', Validators.required],
        // Location: ['', Validators.required],
        // Weight: ['', Validators.required],
        // customern: ['', Validators.required],
        // customername: ['', Validators.required],
        // shipton: ['', Validators.required],
        // countrycode: ['', Validators.required],
        // shiptoparty: ['', Validators.required],
        // pharmadeliveryno: ['', Validators.required],
        // salesorderendcustomer: ['', Validators.required],
        // purchaseorderendcustomer: ['', Validators.required],
        // shippedquantity: ['', Validators.required],
        // unit: ['', Validators.required],
        // aproductname: ['', Validators.required],
        // dosageform: ['', Validators.required],
        // packagetype: ['', Validators.required],
        // packagesize: [''],
        // globelmaterialno: ['', Validators.required],
        // plocalmaterialno:[''],
        // batchn: ['', Validators.required],
        // dateofmanufecture: ['', Validators.required],
        // releasedate: ['', Validators.required],
        // expirydate: ['', Validators.required],
        // productionqty: ['', Validators.required],
        // pproductname: ['', Validators.required],
        // pglobelmaterialno: ['', Validators.required],
        // apackagingsite: ['', Validators.required],
        // manufacturinglicense: ['', Validators.required],
        // gmvcertificateno: ['', Validators.required],
        // certificateno: ['', Validators.required],
        // productn: ['', Validators.required],
        // globalmaterialn: ['', Validators.required],
        // localmaterialn: ['', Validators.required],
        // areleasedate: ['', Validators.required],
        // abatchn: ['', Validators.required],
        // amanufacturingsite: ['', Validators.required],
        // amanufacturinglicense: ['', Validators.required],
        // ManufacturedDate: ['', Validators.required],
        // ExpiryDate: [''],
        // localmaterialno: ['', Validators.required],
        // AuthorizeReporters: ['', Validators.required],
        // Selectfield: ['', Validators.required],
        });
    };
    MedicineCreateComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    //saving image file of Qr code 
    // qrdata2 = this.medicineid;
    MedicineCreateComponent.prototype.saveAsImage = function (parent) {
        // fetches base 64 date from image
        var parentElement = parent.el.nativeElement.querySelector("img").src;
        // converts base 64 encoded image to blobData
        var blobData = this.convertBase64ToBlob(parentElement);
        // saves as image
        if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
            window.navigator.msSaveOrOpenBlob(blobData, 'Qrcode');
        }
        else { // chrome
            var blob = new Blob([blobData], { type: "image/png" });
            var url = window.URL.createObjectURL(blob);
            // window.open(url);
            var link = document.createElement('a');
            link.href = url;
            link.download = this.medicineserial;
            link.click();
        }
    };
    MedicineCreateComponent.prototype.convertBase64ToBlob = function (Base64Image) {
        // SPLIT INTO TWO PARTS
        var parts = Base64Image.split(';base64,');
        // HOLD THE CONTENT TYPE
        var imageType = parts[0].split(':')[1];
        // DECODE BASE64 STRING
        var decodedData = window.atob(parts[1]);
        // CREATE UNIT8ARRAY OF SIZE SAME AS ROW DATA LENGTH
        var uInt8Array = new Uint8Array(decodedData.length);
        // INSERT ALL CHARACTER CODE INTO UINT8ARRAY
        for (var i = 0; i < decodedData.length; ++i) {
            uInt8Array[i] = decodedData.charCodeAt(i);
        }
        // RETURN BLOB IMAGE AFTER CONVERSION
        return new Blob([uInt8Array], { type: imageType });
    };
    MedicineCreateComponent.prototype.ngOnDestroy = function () {
    };
    Object.defineProperty(MedicineCreateComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    // serialNo: string, medicine: string, location: string, MedicineCurrentTempurature: string, weight: string, customern: string, customername: string, shipton: string, countrycode: string, shiptoparty: string, pharmadeliveryno: string, salesorderendcustomer: string, purchaseorderendcustomer: string, shippedquantity: string, unit: string, aproductname: string, dosageform: string, packagetype: string, packagesize: string, globelmaterialno: string, batchn: string, dateofmanufecture: string, releasedate: string, expirydate: string, productionqty: string, pproductname: string, pglobelmaterialno: string, plocalmaterialno: string, apackagingsite: string, manufacturinglicense: string, gmvcertificateno: string, certificateno: string, productn: string, globalmaterialn: string, localmaterialn: string, areleasedate: string, abatchn: string, amanufacturingsite: string, amanufacturinglicense: string, mdate: string, edate: string,
    // localmaterialno: string, barcode: string,
    MedicineCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        var serialNo = this.basicLogisticInformation.value.SerialNumber;
        console.log(serialNo);
        var medicine = this.basicLogisticInformation.value.Medicine;
        var MedicineCurrentTempurature = this.basicLogisticInformation.value.MedicineCurrentTempurature;
        var location = this.basicLogisticInformation.value.Location;
        var weight = this.basicLogisticInformation.value.Weight;
        var customern = this.basicLogisticInformation.value.customern;
        var customername = this.basicLogisticInformation.value.customername;
        var shipton = this.basicLogisticInformation.value.shipton;
        var countrycode = this.basicLogisticInformation.value.countrycode;
        var shiptoparty = this.basicLogisticInformation.value.shiptoparty;
        var pharmadeliveryno = this.basicLogisticInformation.value.pharmadeliveryno;
        var salesorderendcustomer = this.basicLogisticInformation.value.salesorderendcustomer;
        var purchaseorderendcustomer = this.basicLogisticInformation.value.purchaseorderendcustomer;
        var shippedquantity = this.basicLogisticInformation.value.shippedquantity;
        var unit = this.basicLogisticInformation.value.unit;
        var aproductname = this.additionalLogisticInformation.value.aproductname;
        var dosageform = this.additionalLogisticInformation.value.dosageform;
        var packagetype = this.additionalLogisticInformation.value.packagetype;
        var packagesize = this.additionalLogisticInformation.value.packagesize;
        var globelmaterialno = this.additionalLogisticInformation.value.globelmaterialno;
        var batchn = this.additionalLogisticInformation.value.batchn;
        var dateofmanufecture = this.additionalLogisticInformation.value.dateofmanufecture;
        var releasedate = this.additionalLogisticInformation.value.releasedate;
        var expirydate = this.additionalLogisticInformation.value.expirydate;
        var productionqty = this.additionalLogisticInformation.value.productionqty;
        var pproductname = this.packagingInformation.value.pproductname;
        var pglobelmaterialno = this.packagingInformation.value.pglobelmaterialno;
        var apackagingsite = this.packagingInformation.value.apackagingsite;
        var manufacturinglicense = this.packagingInformation.value.manufacturinglicense;
        var gmvcertificateno = this.packagingInformation.value.gmvcertificateno;
        var certificateno = this.requirementInformation.value.certificateno;
        var productn = this.requirementInformation.value.productn;
        var globalmaterialn = this.requirementInformation.value.globalmaterialn;
        var localmaterialn = this.requirementInformation.value.localmaterialn;
        var plocalmaterialno = this.packagingInformation.value.plocalmaterialno;
        var areleasedate = this.requirementInformation.value.areleasedate;
        var abatchn = this.requirementInformation.value.abatchn;
        var amanufacturingsite = this.requirementInformation.value.amanufacturingsite;
        var amanufacturinglicense = this.requirementInformation.value.amanufacturinglicense;
        var mdate = this.requirementInformation.value.ManufacturedDate;
        var localmaterialno = this.requirementInformation.value.localmaterialno;
        var barcode = '';
        if (serialNo == '' || typeof serialNo == 'undefined') {
            alert('serial is empty!');
            return false;
        }
        else if (medicine == '' || typeof medicine == 'undefined') {
            alert('Customers Product Name is empty!');
            return false;
        }
        else if (location == '' || typeof location == 'undefined') {
            alert('Batch N required is empty!');
            return false;
        }
        else if (weight == '' || typeof weight == 'undefined') {
            alert('Batch Certificate N is empty!');
            return false;
        }
        else if (customern == '' || typeof customern == 'undefined') {
            alert('Customer N is empty!');
            return false;
        }
        else if (customername == '' || typeof customername == 'undefined') {
            alert('Customer Name is empty!');
            return false;
        }
        else if (shipton == '' || typeof shipton == 'undefined') {
            alert('Ship to N is empty!');
            return false;
        }
        else if (countrycode == '' || typeof countrycode == 'undefined') {
            alert('Country Code is empty!');
            return false;
        }
        else if (shiptoparty == '' || typeof shiptoparty == 'undefined') {
            alert('Ship to Party is empty!');
            return false;
        }
        else if (pharmadeliveryno == '' || typeof pharmadeliveryno == 'undefined') {
            alert('Pharma Outbound Delivery No is empty!');
            return false;
        }
        else if (salesorderendcustomer == '' || typeof salesorderendcustomer == 'undefined') {
            alert('Sales Order No vs. End Customer is empty!');
            return false;
        }
        else if (purchaseorderendcustomer == '' || typeof purchaseorderendcustomer == 'undefined') {
            alert('Purchase Order N of End Customer is empty!');
            return false;
        }
        else if (shippedquantity == '' || typeof shippedquantity == 'undefined') {
            alert('Shipped Quantity is empty!');
            return false;
        }
        else if (unit == '' || typeof unit == 'undefined') {
            alert('unit is empty!');
            return false;
        }
        else if (aproductname == '' || typeof aproductname == 'undefined') {
            alert('Product Name is empty!');
            return false;
        }
        else if (dosageform == '' || typeof dosageform == 'undefined') {
            alert('Dosage Form is empty!');
            return false;
        }
        else if (packagetype == '' || typeof packagetype == 'undefined') {
            alert('Package type is empty!');
            return false;
        }
        else if (globelmaterialno == '' || typeof globelmaterialno == 'undefined') {
            alert('Global Material No. is empty!');
            return false;
        }
        else if (batchn == '' || typeof batchn == 'undefined') {
            alert('Batch N is empty!');
            return false;
        }
        else if (dateofmanufecture == '' || typeof dateofmanufecture == 'undefined') {
            alert('Date of Manufacturing is empty!');
            return false;
        }
        else if (releasedate == '' || typeof releasedate == 'undefined') {
            alert('Release Date is empty!');
            return false;
        }
        else if (expirydate == '' || typeof expirydate == 'undefined') {
            alert('Expiry Date is empty!');
            return false;
        }
        else if (productionqty == '' || typeof productionqty == 'undefined') {
            alert('Production Qty is empty!');
            return false;
        }
        else if (pproductname == '' || typeof pproductname == 'undefined') {
            alert('Product Name is empty!');
            return false;
        }
        else if (pglobelmaterialno == '' || typeof pglobelmaterialno == 'undefined') {
            alert('Global Material No is empty!');
            return false;
        }
        else if (apackagingsite == '' || typeof apackagingsite == 'undefined') {
            alert('Packaging Site No is empty!');
            return false;
        }
        else if (manufacturinglicense == '' || typeof manufacturinglicense == 'undefined') {
            alert('Manufacturing License is empty!');
            return false;
        }
        else if (gmvcertificateno == '' || typeof gmvcertificateno == 'undefined') {
            alert('GMV Certificate No is empty!');
            return false;
        }
        else if (certificateno == '' || typeof certificateno == 'undefined') {
            alert('Certificate No is empty!');
            return false;
        }
        else if (productn == '' || typeof productn == 'undefined') {
            alert('Product Name is empty!');
            return false;
        }
        else if (globalmaterialn == '' || typeof globalmaterialn == 'undefined') {
            alert('Global Material N is empty!');
            return false;
        }
        else if (localmaterialn == '' || typeof localmaterialn == 'undefined') {
            alert('Local Material N is empty!');
            return false;
        }
        else if (plocalmaterialno == '' || typeof plocalmaterialno == 'undefined') {
            alert('Local Material No is empty!');
            return false;
        }
        else if (areleasedate == '' || typeof areleasedate == 'undefined') {
            alert(' Release Date is empty!');
            return false;
        }
        else if (abatchn == '' || typeof abatchn == 'undefined') {
            alert('Batch N is empty!');
            return false;
        }
        else if (amanufacturingsite == '' || typeof amanufacturingsite == 'undefined') {
            alert('Manufacturing Site is empty!');
            return false;
        }
        else if (amanufacturinglicense == '' || typeof amanufacturinglicense == 'undefined') {
            alert('Manufacturing License is empty!');
            return false;
        }
        var that = this;
        this.submitted = true;
        console.log("User ID", this.userId);
        /* 	Object.keys(this.registerForm.controls).forEach(field => { // {1}
            const control = this.registerForm.get(field);
            control.markAsUntouched({ onlySelf: true });
            console.log(control.touched);
            control.markAsTouched({ onlySelf: true });       // {3}
          });
            // stop here if form is invalid
             if (!this.registerForm.valid) {
               alert("wrong");
               return;
             } */
        //CREATE MEDICINE CODE
        this.medicineStatus = this.firstname + " " + this.lastname + " " + "[Manufacturer]";
        console.log(this.medicineStatus);
        this.mypublickey = localStorage.getItem("publicKey");
        console.log("MedicineStatus", this.mypublickey);
        this.privateKey = localStorage.getItem("privateKey");
        console.log("Private Key", this.privateKey);
        this.createmedicne = new _addmedicine__WEBPACK_IMPORTED_MODULE_2__["Medicine"](serialNo, medicine, MedicineCurrentTempurature, location, weight, '', this.medicineStatus, this.userId, customern, customername, shipton, countrycode, shiptoparty, pharmadeliveryno, salesorderendcustomer, purchaseorderendcustomer, shippedquantity, unit, aproductname, dosageform, packagetype, packagesize, globelmaterialno, plocalmaterialno, batchn, dateofmanufecture, releasedate, expirydate, productionqty, pproductname, pglobelmaterialno, apackagingsite, manufacturinglicense, gmvcertificateno, certificateno, productn, globalmaterialn, localmaterialn, areleasedate, abatchn, amanufacturingsite, amanufacturinglicense, mdate, expirydate, localmaterialno, barcode);
        console.log('createmedicne object => console of data', JSON.stringify(this.createmedicne));
        this.base = this.httpuser.createmedicine(this.createmedicne);
        this.call = this.base.subscribe(function (data) {
            console.log("AT = " + JSON.stringify(data));
            _this.medicineid = data.MedicineId;
            _this.medicineserial = data.serial;
            alert('Request Accepted');
            var el = _this.completeModal.nativeElement;
            el.click();
            //this.registerForm.reset();
        });
        //blockcahin
        // const Metadata = {
        //   "action": "createMedicine",
        //   "payloaddata": {
        //     "serialNumber": serialNo,
        //     "description": medicine + " " + weight + " " + mdate + " " + edate,
        //     "location": {
        //       "type": 1,
        //       "body": {
        //         "address": location
        //       }
        //     },
        //     "uintDescription": {
        //       "units": 12
        //     }
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.base = this.httpuser.createmedicine(this.createmedicne);
        //         this.call = this.base.subscribe((data) => {
        //           console.log(JSON.stringify(data));
        //           this.medicineid = data.MedicineId;
        //           this.medicineserial = data.serial;
        //           alert('Request Accepted');
        //           let el: HTMLElement = this.completeModal.nativeElement;
        //           el.click();
        //           //this.registerForm.reset();
        //         });
        //       }
        //       else {
        //         alert('Request Rejected');
        //       }
        //     } else {
        //       that.http.get(this.httpuser.batchUrl + "/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);
        //           console.log('json value2', this.status.data[0].status);
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.base = this.httpuser.createmedicine(this.createmedicne);
        //             this.call = this.base.subscribe((data) => {
        //               console.log("AT = " + JSON.stringify(data));
        //               this.medicineid = data.MedicineId;
        //               this.medicineserial = data.serial;
        //               alert('Request Accepted');
        //               //this.registerForm.reset();
        //             });
        //           }
        //           else {
        //             alert('Request Rejected');
        //           }
        //         }
        //       })
        //     }
        //     // }).catch(function (err) {
        //     //   console.log(err.message);
        //   });
    };
    Object.defineProperty(MedicineCreateComponent.prototype, "basicInfoFormControl", {
        // convenience getter for easy access to form fields
        get: function () { return this.basicLogisticInformation.controls; },
        enumerable: true,
        configurable: true
    });
    MedicineCreateComponent.prototype.onBasicInfoSubmit = function (stepper) {
        this.basicSubmit = true;
        if (this.basicLogisticInformation.invalid) {
            return;
        }
        console.log(this.basicLogisticInformation.value);
        console.log(this.basicLogisticInformation.value.SerialNumber);
        console.log('basic value', this.basicInfoFormControl);
        stepper.next();
    };
    Object.defineProperty(MedicineCreateComponent.prototype, "additionalInfoFormControl", {
        get: function () { return this.additionalLogisticInformation.controls; },
        enumerable: true,
        configurable: true
    });
    MedicineCreateComponent.prototype.onAdditionalInfoSubmit = function (stepper) {
        this.additionalSubmit = true;
        if (this.additionalLogisticInformation.invalid) {
            return;
        }
        console.log('additional value', this.additionalInfoFormControl);
        stepper.next();
    };
    Object.defineProperty(MedicineCreateComponent.prototype, "packagingInfoFormControl", {
        get: function () { return this.packagingInformation.controls; },
        enumerable: true,
        configurable: true
    });
    MedicineCreateComponent.prototype.onPackagingInfoSubmit = function (stepper) {
        this.packagingSubmit = true;
        if (this.packagingInformation.invalid) {
            return;
        }
        console.log('packaging value', this.packagingInfoFormControl);
        stepper.next();
    };
    Object.defineProperty(MedicineCreateComponent.prototype, "requirementInfoFormControl", {
        get: function () { return this.requirementInformation.controls; },
        enumerable: true,
        configurable: true
    });
    MedicineCreateComponent.prototype.onRequirementInfoSubmit = function (stepper) {
        this.requirementSubmit = true;
        console.log('requirementInformation', this.requirementInformation);
        if (this.requirementInformation.invalid) {
            return;
        }
        console.log('onRequirementInfoSubmit', this.requirementInfoFormControl);
        this.onSubmit();
        console.log('stepper', stepper);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MedicineCreateComponent.prototype, "completeModal", void 0);
    MedicineCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medicine-create',
            template: __webpack_require__(/*! ./medicine-create.component.html */ "./src/app/admin/medicine/medicine-create/medicine-create.component.html"),
            styles: [__webpack_require__(/*! ./medicine-create.component.css */ "./src/app/admin/medicine/medicine-create/medicine-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_4__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], MedicineCreateComponent);
    return MedicineCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/medicine/medicine-dashboard/medicine-dashboard.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-dashboard/medicine-dashboard.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    background-color: white;\n  }\n\n \n#heading{\n    background-color: rgb(18, 50, 190); \n    color:white;\n}\n\n \n.pd{\n  background: navy;\n}\n\n \na{\n  color: #3d6d79;\n}\n\n \ntd {\n    width: 100%;\n    border-bottom-color: #b5b3b3;\n    border-color: #454d55 !important;\n    color: #13343c;\n}\n\n \nth{\n  border: none !important;\n  background-color: #3d6d79; \n  color:White;\n  font-family: Muli,Helvetica Neue,Arial,sans-serif;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvbWVkaWNpbmUtZGFzaGJvYXJkL21lZGljaW5lLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtFQUN6Qjs7O0FBR0Y7SUFDSSxrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOzs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLGNBQWM7QUFDbEI7OztBQUdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsaURBQWlEO0VBQ2pELGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21lZGljaW5lL21lZGljaW5lLWRhc2hib2FyZC9tZWRpY2luZS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gXG4jaGVhZGluZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDUwLCAxOTApOyBcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5wZHtcbiAgYmFja2dyb3VuZDogbmF2eTtcbn1cblxuYXtcbiAgY29sb3I6ICMzZDZkNzk7XG59XG5cbnRkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjYjViM2IzO1xuICAgIGJvcmRlci1jb2xvcjogIzQ1NGQ1NSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMTMzNDNjO1xufVxuXG4gXG50aHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDZkNzk7IFxuICBjb2xvcjpXaGl0ZTtcbiAgZm9udC1mYW1pbHk6IE11bGksSGVsdmV0aWNhIE5ldWUsQXJpYWwsc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/medicine/medicine-dashboard/medicine-dashboard.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-dashboard/medicine-dashboard.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n    \n<div class=\"container\" style=\" width: 100%; padding: 2%;\" >\n  <div class=\"row\">\n    <!--br table-responsive  -->\n\t<div class=\"col-xs-6 col-md-4 col-sm-4\">\n    <table class=\"table table-striped table-hover text-center\"> \n\n      <thead class=\"theme-table\">\n        <tr>\n          <th> Serial Number</th>\n          <!-- <th>Medicine code</th>\n          <th>Manufactured Date</th>\n          <th>Location</th>\n          <th>Weight(Kg)</th> -->\n          <!-- <th></th>\n          <th></th> -->\n        </tr>\n      </thead>\n      <tbody>\n          <ng-container *ngFor=\"let x of list; let i = index\" >\n            <tr *ngIf=\"x.serial\">\n            <td><a [routerLink]=\"['/medicinedetailsdashboard',x.serial]\">{{x.serial}}</a></td>\n          <!-- <td>{{x.medicine}}</td>\n          <td>{{x.Mdate}}</td>\n          <td>{{x.location}}</td>\n          <td>{{x.weight}}</td> -->\n          <!-- <td><button type=\"button\" *ngIf=\"myrole>1\" (click)=\"deleteMedicine(x._id)\" class=\"btn btn-danger\">Delete</button></td>\n          <td><button type=\"button\" (click)=\"serialId(x.serial)\" class=\"btn btn-info\" data-toggle=\"modal\"\n              data-target=\"#exampleModalCenter\" *ngIf=\"myrole>1\">Send to Wholesaler</button></td> -->\n            </tr>\n          </ng-container>\n          <tr><th></th></tr>\n      </tbody>\n      <tfoot class=\"theme-table\">\n        <tr>\n          <!-- <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th> -->\n        </tr>\n      </tfoot>\n    </table>\n\t </div>\n\t \n\t <div class=\"col-xs-12 col-md-8 col-sm-8\">\n    <table class=\"table table-striped table-hover text-center\">\n\n      <thead class=\"theme-table\">\n        <tr>\n          <th> Serial</th>\n          <th>Sent to</th>\n          <th>Transporter</th>\n          <th>Date</th>\n          <!-- <th>Medicine code</th>\n          <th>Manufactured Date</th>\n          <th>Location</th>\n          <th>Weight(Kg)</th> -->\n          <!-- <th></th>\n          <th></th> -->\n        </tr>\n      </thead>\n      <tbody>\n          <ng-container *ngFor=\"let tr of trans; let i = index\" >\n            <!-- <tr *ngIf=\"tr.serial\"> -->\n            <tr>\n              <td><a [routerLink]=\"['/medicinedetailsdashboard',tr.serial]\" style=\"color:white\"> {{tr.serial}} </a></td>\n              <td><p *ngFor=\"let u of wlist;\"><span *ngIf=\"u.userId==tr.wholesalerId || u.publicKey==tr.wholesalerId \">{{u.firstName}} {{u.lastName}}</span></p></td>\n              <td><p *ngFor=\"let t of tlist;\"><span *ngIf=\"t.userId==tr.transporterId  || t.publicKey==tr.wholesalerId \t\">{{t.firstName}} {{t.lastName}}</span></p></td>\n              <td><span *ngIf=\"tr.edate\">{{tr.edate | date: 'dd/MM/yyyy h:mm:ss a'}}</span></td>\n            </tr>\n          </ng-container>\n      </tbody>\n    </table>\n\t </div>\n  </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Medicine Transportation</h5>\n\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Serial</label>\n              <input #serial type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Wholesailer</label>\n              <select [(ngModel)]=\"wId1\" class=\"form-control\">\n                <option *ngFor=\"let wid of wlist\" [value]=\"wid.publicKey\">{{wid.firstName}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Transporter</label>\n              <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" #completeModal data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/medicine/medicine-dashboard/medicine-dashboard.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-dashboard/medicine-dashboard.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MedicineDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineDashboardComponent", function() { return MedicineDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _transection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transection */ "./src/app/admin/medicine/medicine-dashboard/transection.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import { Medicine } from '../medicine-create/addmedicine';



var MedicineDashboardComponent = /** @class */ (function () {
    function MedicineDashboardComponent(http, http1, router) {
        this.http = http;
        this.http1 = http1;
        this.router = router;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.wlist = [];
        this.tlist = [];
        this.wid1 = '';
        this.tid1 = '';
        this.list = [];
        this.trans = [];
        this.users = [];
        this.transporters = [];
        this.transection = _transection__WEBPACK_IMPORTED_MODULE_3__["Transection"];
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.http.blockchainUrl;
    }
    ;
    MedicineDashboardComponent.prototype.ngOnInit = function () {
        this.medicinelist();
        this.medicinetransactions();
        this.allWholesaler();
        this.allTransporter();
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.myrole = localStorage.getItem("role");
        this.userId = localStorage.getItem("userId");
        console.log("User Idhhhhhhh", this.userId);
        console.log(this.myrole);
    };
    MedicineDashboardComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    MedicineDashboardComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    MedicineDashboardComponent.prototype.serialId = function (serialId) {
        this.serialvalue = serialId;
    };
    MedicineDashboardComponent.prototype.medicinelist = function () {
        var _this = this;
        this.myrole = localStorage.getItem("role");
        if (this.myrole == 1) {
            return this.http.getMedicineList().subscribe(function (data) {
                _this.list = data;
                console.log("All Medicine", _this.list);
            });
        }
        else {
            return this.http.getMedicineUserId().subscribe(function (data) {
                console.log(data);
                _this.list = data;
                console.log("user Medicine", _this.list);
            });
        }
    };
    MedicineDashboardComponent.prototype.medicinetransactions = function () {
        var _this = this;
        return this.http.getMedicineTransection().subscribe(function (data) {
            _this.trans = data;
            console.log("All Medicine trans", _this.trans);
        });
    };
    MedicineDashboardComponent.prototype.deleteMedicine = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete')) {
            this.http.deleteMedicine(id).subscribe(function (res) {
                _this.medicinelist();
            });
        }
    };
    MedicineDashboardComponent.prototype.allWholesaler = function () {
        var _this = this;
        return this.http.getallWholesalerUser().subscribe(function (data) {
            _this.wlist = data;
            console.log(_this.wlist);
        });
    };
    MedicineDashboardComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.http.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    MedicineDashboardComponent.prototype.mTransection = function (serial, wholesalerId, transpoterId) {
        var _this = this;
        var that = this;
        console.log(serial, wholesalerId, transpoterId);
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        this.transection = new _transection__WEBPACK_IMPORTED_MODULE_3__["Transection"](serial, wholesalerId, transpoterId);
        this.base = this.http.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
            var el = _this.completeModal.nativeElement;
            el.click();
        });
        // const Metadata = {
        //   "action": "sendToWholesaler",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "wholesaler": {
        //       "address": wholesalerId,
        //       "comment": "In Transaction"
        //     },
        //     "transporterid": transpoterId
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http1.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.http.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       console.log(JSON.parse);
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.transection = new Transection(serial, wholesalerId, transpoterId);
        //         this.base = this.http.medicineTransection(this.transection);
        //         this.call = this.base.subscribe(
        //           data => {
        //             alert('Request Accepted');
        //             let el: HTMLElement = this.completeModal.nativeElement;
        //             el.click();
        //           });
        //       }
        //       else {
        //         alert('Request Rejected');
        //         let el: HTMLElement = this.completeModal.nativeElement;
        //         el.click();
        //       }
        //     } else {
        //       that.http1.get(this.http.blockchainUrl+"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.http.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);
        //           console.log('json value2', this.status.data[0].status);
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.base = this.http.medicineTransection(this.transection);
        //             this.call = this.base.subscribe(
        //               data => {
        //                 alert('Request Accepted');
        //                 let el: HTMLElement = this.completeModal.nativeElement;
        //                 el.click();
        //               });
        //           }
        //           else {
        //             alert('Request Rejected');
        //             let el: HTMLElement = this.completeModal.nativeElement;
        //             el.click();
        //           }
        //         }
        //       })
        //     }
        //     // }).catch(function (err) {
        //     //   console.log(err.message);
        //   });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MedicineDashboardComponent.prototype, "completeModal", void 0);
    MedicineDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medicine-dashboard',
            template: __webpack_require__(/*! ./medicine-dashboard.component.html */ "./src/app/admin/medicine/medicine-dashboard/medicine-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./medicine-dashboard.component.css */ "./src/app/admin/medicine/medicine-dashboard/medicine-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MedicineDashboardComponent);
    return MedicineDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/medicine/medicine-dashboard/transection.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-dashboard/transection.ts ***!
  \******************************************************************/
/*! exports provided: Transection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transection", function() { return Transection; });
var Transection = /** @class */ (function () {
    function Transection(serial, wholesalerId, transporterId) {
        this.serial = serial;
        this.wholesalerId = wholesalerId;
        this.transporterId = transporterId;
    }
    return Transection;
}());



/***/ }),

/***/ "./src/app/admin/medicine/medicine-detail/medicine-detail.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-detail/medicine-detail.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n    /* margin-top: 10px;\n    margin-left: 8%;\n    margin-right: 15%;\n    display: block;\n    width: 87%; */\n    background: #f4a018;\n    color: white;\n    width: 200px;\n}\n\n#styleStatus{\n    color: white;\n    background-color: #4a858b;\n    border-radius: 8px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 4px;\n    padding-bottom: 4px;\n    height: 30px;\n    display: inline-block;\n    justify-content: center;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvbWVkaWNpbmUtZGV0YWlsL21lZGljaW5lLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7Ozs7aUJBSWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvbWVkaWNpbmUtZGV0YWlsL21lZGljaW5lLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbCB7XG4gICAgLyogbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogOCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDg3JTsgKi9cbiAgICBiYWNrZ3JvdW5kOiAjZjRhMDE4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbiNzdHlsZVN0YXR1c3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhODU4YjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/medicine/medicine-detail/medicine-detail.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-detail/medicine-detail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<br>\n<div class=\"container\">\n<div class=\"row\" *ngFor=\"let distdata  of list\"> \n  <div class=\"col\">\n    <div class=\"card custom-card\" style=\"padding:18px;\">\n      <p style=\"text-align:center\"><b>Medicine Id: </b> {{list[0].MedicineId}}</p>\n      <div class=\"row\">\n\t  <div class=\"col\" ><b>Product Name: </b> {{distdata.serial}}</div>\n\t  <div class=\"col\"><b>Batch N: </b> {{distdata.location}}</div>\n\t  <div class=\"col\"><b>Global Valuated Material N: </b> {{distdata.MedicineCurrentTempurature}}<sup>o</sup>C</div>\n    </div><br>\n\n\t  <div class=\"row\">\n    <div class=\"col\"><b>Customer's Product Name: </b> {{distdata.medicine}}</div>\n\t  <div class=\"col\"><b>Batch Certificate N: </b> {{distdata.weight}}</div>\n\t  <div class=\"col\"><b>Customer N: </b> {{distdata.customern}}</div>\n    </div><br>\n\n    <div class=\"row\">\n      <div class=\"col\"><b>Customer Name: </b> {{distdata.customername}}</div>\n      <div class=\"col\"><b>Ship to N: </b> {{distdata.shipton}}</div>  \n      <div class=\"col\"><b>Country Code: </b> {{distdata.countrycode}}</div>\n      </div><br>\n\n      <div class=\"row\">\n      <div class=\"col\"><b>Ship to Party: </b> {{distdata.shiptoparty}}</div>\n      <div class=\"col\"><b>Pharma Outbound Delivery No: </b> {{distdata.pharmadeliveryno}}</div>\n      <div class=\"col\"><b>Sales Order No vs. End Customer: </b> {{distdata.salesorderendcustomer}}</div>\n      </div><br>\n\n      <div class=\"row\">\n        <div class=\"col\"><b>Purchase Order N of End Customer: </b> {{distdata.purchaseorderendcustomer}}</div>\n        <div class=\"col\"><b>Shipped Quantity: </b> {{distdata.shippedquantity}}</div>\n        <div class=\"col\"><b>Unit: </b> {{distdata.unit}}</div>\n        </div><br>\n\n        <div class=\"row\">\n          <div class=\"col col-4\"></div>\n          <div class=\"col col-5\"><b>Additional Logistic Information</b></div>\n          <div class=\"col col-3\"></div>\n        </div><br>\n\n        <div class=\"row\">\n          <div class=\"col\"><b>Product Name: </b> {{distdata.aproductname}}</div>\n          <div class=\"col\"><b>Dosage Form: </b> {{distdata.dosageform}}</div>\n          <div class=\"col\"><b>Package type: </b> {{distdata.packagetype}}</div>\n          </div><br>\n\n\n            <div class=\"row\">\n              <div class=\"col\"><b>Package Size: </b> {{distdata.packagesize}}</div>\n              <div class=\"col\"><b>Global Material No.: </b> {{distdata.globelmaterialno}}</div>\n              <div class=\"col\"><b>Batch N: </b> {{distdata.batchn}}</div>\n              </div><br>\n\n              <div class=\"row\">\n                <div class=\"col\"><b>Date of Manufacturing: </b> {{distdata.dateofmanufecture}}</div>\n                <div class=\"col\"><b>Release Date: </b> {{distdata.releasedate}}</div>\n                <div class=\"col\"><b> Expiry Date:</b>{{distdata.expirydate}}</div>\n                </div><br>\n\n                <div class=\"row\">\n                  <div class=\"col\"><b>Production Qty: </b> {{distdata.productionqty}}</div>\n                  <div class=\"col\"><b> </b> </div>\n                  <div class=\"col\"><b> </b></div>\n                  </div><br>\n\n                <div class=\"row\">\n                  <div class=\"col col-4\"></div>\n                  <div class=\"col col-5\"><b>Packaging Information</b></div>\n                  <div class=\"col col-3\"></div>\n                </div><br>\n\n                <div class=\"row\">\n                  <div class=\"col\"><b>Product Name: </b> {{distdata.pproductname}}</div>\n                  <div class=\"col\"><b>Global Material No.: </b> {{distdata.pglobelmaterialno}}</div>\n                  <div class=\"col\"><b>Local Material No: </b> {{distdata.plocalmaterialno}}</div>\n                  </div><br>\n\n                  <div class=\"row\">\n                    <div class=\"col\"><b>Packaging Site: </b> {{distdata.apackagingsite}}</div>\n                    <div class=\"col\"><b>Manufacturing License: </b> {{distdata.manufacturinglicense}}</div>\n                    <div class=\"col\"><b>GMV Certificate No: </b> {{distdata.gmvcertificateno}}</div>\n                    </div><br>\n\n                    <div class=\"row\">\n                      <div class=\"col col-4\"></div>\n                      <div class=\"col col-5\"><b>For Tests, Requirments,Results and Conclusion refer to the following Certificate(s)</b></div>\n                      <div class=\"col col-3\"></div>\n                    </div><br>\n\n                    <div class=\"row\">\n                      <div class=\"col\"><b>Certificate No: </b> {{distdata.certificateno}}</div>\n                      <div class=\"col\"><b>Product Name: </b> {{distdata.productn}}</div>\n                      <div class=\"col\"><b>Global Material N: </b> {{distdata.globalmaterialn}}</div>\n                      </div><br>\n\n                      <div class=\"row\">\n                        <div class=\"col\"><b>Local Material N: </b> {{distdata.localmaterialn}}</div>\n                        <div class=\"col\"><b>Release Date: </b> {{distdata.releasedate}}</div>\n                        <div class=\"col\"><b>Batch N: </b> {{distdata.abatchn}}</div>\n                        </div><br>\n\n                        <div class=\"row\">\n                          <div class=\"col\"><b>Manufacturing Site: </b> {{distdata.amanufacturingsite}}</div>\n                          <div class=\"col\"><b>Manufacturing License: </b> {{distdata.amanufacturinglicense}}</div>\n                          <div class=\"col\"><b> </b></div>\n                          </div><br>\n    <div class=\"row  mb-3\">\n      <div class=\"col\"  style=\"margin-left:25%; text-align: left\">\n        <b style=\"color:blue;text-align: center\">Medicine Owner </b>\n        <div id=\"styleStatus\">{{distdata.status}}</div>\n      </div>\n    </div>\n\t  <div class=\"row\">\n\t\t<div class=\"col\" style=\"text-align:center;\">\n    <button class=\"form-control btn-defult m-auto\" *ngIf=\"myrole>1\" (click)=\"editMedicine(distdata._id)\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"> <b>Update Status</b> </button>\n    \n    \n\t\t</div>\n\t\t</div>\n    </div>\n  </div>  \n  </div>\n  \n  <!-- part 2 for medicine status -->\n  <div class=\"row\" *ngFor=\"let distdata  of list2\"> \n  <div class=\"col\">\n    <div class=\"card\" style=\"padding:18px;\">\n    <!--  <p style=\"text-align:center\"><b>Medicne Id:</b> {{distdata.MedicineId}}</p> -->\n    <div class=\"row\">\n      <div class=\"col\" style=\"margin-left:8%; text-align: left\">\n        <b>Date:</b>{{distdata.time | date:'dd/MM/yyyy'}}\n      </div>\n      <div class=\"col\"></div>\n      <div class=\"col\" >\n        <b>Time:</b>{{distdata.time | date:'hh:mm:ss'}}\n      </div>\n    </div>\n      <div class=\"row\">\n\t  <div class=\"col\"  style=\"margin-left:8%;\"><b>Serial No: </b> {{distdata.serial}} </div>\n\t  <div class=\"col\"><b>Location: </b> {{distdata.location}}</div>\n\t  <div class=\"col\"><b>Temperature: </b> {{distdata.barcode}}<sup>o</sup>C</div>\n\t  </div>\n\t  <div class=\"row\">\n\t  <div class=\"col\"   style=\"margin-left:8%;\"><b>Weight: </b> {{distdata.weight}}</div>\n\t  <div class=\"col\"><b>Manufacture Date: </b> {{distdata.Mdate}}</div>\n\t  <div class=\"col\"><b>Expiry Date: </b> {{distdata.Edate}}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\" style=\"margin-left:8%; text-align: left;\">\n        <b>Medicine Status: </b>\n        <span id='styleStatus'>{{distdata.status}}</span>\n      </div>\n    </div>\t  \n    </div>\n  </div>  \n  </div>\n  \n  \n  \n  \n  \n  \n  </div>\n  \n  \n  <!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Status Update</h5>\n        \n      </div>\n      <form [formGroup]=\"registerForm1\" (ngSubmit)=\"medicineUpdate(editlist.serial,editlist.medicine,temperature.value,location.value,editlist.weight,editlist.Mdate,editlist.Edate,editlist.MedicineId,editlist.role,now)\">\n      <div class=\"modal-body\">\n\t  \n\t        <div class=\"row\">\n          <div class=\"col\"><div class=\"form-group\">\n              <label style=\"margin-left: 35px\">Temperature</label>\n              <input #temperature  formControlName=\"temperature011\" type=\"number\" class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted && f1.temperature011.errors }\" placeholder=\" Enter Current Temperature\" maxlength=\"5\">\n              <div *ngIf=\"submitted && f1.temperature011.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f1.temperature011.errors.required\" style=\"margin-left: 35px\">Temperature required </div>\n              </div>\n            </div></div>           \n            </div>   \n         <div class=\"row\">          \n              <div class=\"col\"><div class=\"form-group\">\n                <label style=\"margin-left: 35px\">Location</label>\n                <input  type=\"text\" #location formControlName=\"location011\" class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted && f1.location011.errors }\" placeholder=\"Enter Current Location\" maxlength=\"30\">\n                <div *ngIf=\"submitted && f1.location011.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f1.location011.errors.required\" style=\"margin-left: 35px\">Location required </div>\n                  </div>\n                \n              </div></div>\n          </div>       \t\n\n          \n       </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" #completeModal  data-dismiss=\"modal\">Close</button>\n        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n         </div>\n        </form>\n      \n    </div>\n  </div>\n</div>\n\n\n\n  \n  \n  "

/***/ }),

/***/ "./src/app/admin/medicine/medicine-detail/medicine-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-detail/medicine-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MedicineDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineDetailComponent", function() { return MedicineDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var MedicineDetailComponent = /** @class */ (function () {
    function MedicineDetailComponent(route, router, http, http1, formBuilder) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.http1 = http1;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.now = new Date();
        this.mStatus = _medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_4__["Medicine2"];
        this.list = [];
        this.list2 = [];
        this.editlist = [];
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.myrole = [];
        this.itemId = [];
        this.blockchainUrl = this.http.blockchainUrl;
    }
    MedicineDetailComponent.prototype.ngOnInit = function () {
        this.myrole = localStorage.getItem("role");
        this.myrole1 = localStorage.getItem("email");
        console.log("Email", this.myrole1);
        this.firstname = localStorage.getItem("firstName");
        this.lastname = localStorage.getItem("lastName");
        console.log("User name", this.firstname, this.lastname);
        console.log("User Role " + this.myrole);
        switch (this.myrole) {
            case "1": {
                this.updateStatus = "User is Admin";
                break;
            }
            case "2": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Manufacturer]";
                break;
            }
            case "3": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Wholesaler]";
                break;
            }
            case "4": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Distributor]";
                break;
            }
            case "5": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Pharma]";
                break;
            }
            case "7": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Transporter]";
                break;
            }
            default: {
                console.log("User role not define");
                break;
            }
        }
        this.serialNo = this.route.snapshot.params['id'];
        this.medicineStatus(this.serialNo);
        this.medicineStatus2(this.serialNo);
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.registerForm1 = this.formBuilder.group({
            temperature011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            location011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    };
    MedicineDetailComponent.prototype.medicineStatus = function (id) {
        var _this = this;
        return this.http.getMedicineStatus(id).subscribe(function (data) {
            _this.list = data;
            console.log('list data', _this.list);
        });
    };
    MedicineDetailComponent.prototype.medicineStatus2 = function (id) {
        var _this = this;
        return this.http.getMedicineStatus2(id).subscribe(function (data) {
            _this.list2 = data;
        });
    };
    MedicineDetailComponent.prototype.editMedicine = function (id) {
        var _this = this;
        this.http.editMedicineStatus(id).subscribe(function (res) {
            _this.editlist = res;
        });
    };
    Object.defineProperty(MedicineDetailComponent.prototype, "f1", {
        get: function () { return this.registerForm1.controls; },
        enumerable: true,
        configurable: true
    });
    MedicineDetailComponent.prototype.medicineUpdate = function (serial, me, br, location, we, md, ed, mid, ro, time, mypublickey, updateStatus) {
        var _this = this;
        console.log("Data", this.myrole);
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm1.invalid) {
            return;
        }
        var that = this;
        this.mStatus = new _medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_4__["Medicine2"](serial, me, br, location, we, md, ed, mid, ro, this.now, this.mypublickey, this.updateStatus);
        this.base = this.http.createmedicine2(this.mStatus);
        this.call = this.base.subscribe(function (data) {
            alert('Status Updated');
            var el = _this.completeModal.nativeElement;
            el.click();
            _this.medicineStatus2(_this.serialNo);
        });
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        // const Metadata = {
        //   "action": "medicineStatusUpdate",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "physicalState": {
        //       "timestamp": this.now,
        //       "location": {
        //         "type": 1,
        //         "body": {
        //           "address": location
        //         }
        //       },
        //       "temprature": 12,
        //     },
        //     "userRole" :this.myrole,
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http1.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.http.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.mStatus = new Medicine2(serial, me, br, location, we, md, ed, mid, ro, this.now, this.mypublickey, this.updateStatus);
        //         this.base = this.http.createmedicine2(this.mStatus);
        //         this.call = this.base.subscribe(data => {
        //           alert('Status Updated');
        //           let el: HTMLElement = this.completeModal.nativeElement;
        //           el.click(); 
        //           this.medicineStatus2(this.serialNo);
        //         });
        //       }
        //       else {
        //         alert('Request Rejected');
        //         let el: HTMLElement = this.completeModal.nativeElement;
        //          el.click(); 
        //       }
        //     } else {
        //       that.http1.get(this.http.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.http.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);              
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.mStatus = new Medicine2(serial, me, br, location, we, md, ed, mid, ro, this.now, this.mypublickey, this.updateStatus);
        //             this.base = this.http.createmedicine2(this.mStatus);
        //             this.call = this.base.subscribe(data => {
        //               alert('Status Updated');
        //               let el: HTMLElement = this.completeModal.nativeElement;
        //               el.click(); 
        //               this.medicineStatus2(this.serialNo);
        //             });
        //           }
        //           else {
        //             alert('Request Rejected');
        //             let el: HTMLElement = this.completeModal.nativeElement;
        //             el.click(); 
        //           }
        //         }
        //       })
        //     }        
        //   });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MedicineDetailComponent.prototype, "completeModal", void 0);
    MedicineDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medicine-detail',
            template: __webpack_require__(/*! ./medicine-detail.component.html */ "./src/app/admin/medicine/medicine-detail/medicine-detail.component.html"),
            styles: [__webpack_require__(/*! ./medicine-detail.component.css */ "./src/app/admin/medicine/medicine-detail/medicine-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], MedicineDetailComponent);
    return MedicineDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/medicine/medicine-details-dashboard/medicine-details-dashboard.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-details-dashboard/medicine-details-dashboard.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n    margin-top: 10px;\n    margin-left: 8%;\n    margin-right: 15%;\n    display: block;\n    width: 87%;\n}\n\ntable {\n    width: 100%;\n    background-color: white;   \n  }\n\ntd {\n  background: none;\n  border-bottom-color: #b5b3b3;\n  border-color: #454d55 !important;\n}\n\nth{\n  border: none !important;\n  background-color: #3d6d79; \n  color:White;\n  font-family: Muli,Helvetica Neue,Arial,sans-serif;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvbWVkaWNpbmUtZGV0YWlscy1kYXNoYm9hcmQvbWVkaWNpbmUtZGV0YWlscy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCOztBQUdGO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixnQ0FBZ0M7QUFDbEM7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpREFBaUQ7RUFDakQsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvbWVkaWNpbmUtZGV0YWlscy1kYXNoYm9hcmQvbWVkaWNpbmUtZGV0YWlscy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xuICAgIG1hcmdpbi1yaWdodDogMTUlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA4NyU7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgICBcbiAgfSBcblxuXG50ZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNiNWIzYjM7XG4gIGJvcmRlci1jb2xvcjogIzQ1NGQ1NSAhaW1wb3J0YW50O1xufVxuXG4gIFxudGh7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q2ZDc5OyBcbiAgY29sb3I6V2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBNdWxpLEhlbHZldGljYSBOZXVlLEFyaWFsLHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/medicine/medicine-details-dashboard/medicine-details-dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-details-dashboard/medicine-details-dashboard.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<br>\n<div class=\"container\">\n<div class=\"row\" *ngFor=\"let distdata  of list\"> \n  <div class=\"col\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped table-hover\">\n        <tr>\n          <th>{{serial}}</th>\n        </tr>\n        <tr>\n          <td>\n            <p><b>Medicine Id: </b><span>{{list[0].MedicineId}}</span></p>\n            <p><b>Serial No: </b> {{distdata.serial}}</p>\n            <p><b>Location: </b> {{distdata.location}}</p>\n            <p><b>Temperature: </b> {{distdata.barcode}}<sup>o</sup>C</p>\n            <p><th style=\"border-radius: 5px;\">Medicine Description</th></p>\n            <p><b>Medicine Name: </b> {{distdata.medicine}}</p>\n            <p><b>Weight(Kg): </b> {{distdata.weight}}</p>\n            <p><b>Manufacture: </b> {{distdata.Mdate}}</p>\n            <p><b>Manufacture: </b> {{distdata.Mdate}}</p>\n            <p><b>Expiry: </b> {{distdata.Edate}}</p>\n          </td>\n        </tr>\n        <tr>\n          <th style=\"padding: 5px;\">Medicine Owner :: <span>{{distdata.status}}</span></th>\n        </tr>\n      </table>\n    </div>\n   \n   \n   \n    <!-- <div class=\"card\" style=\"padding:18px; border: 1px solid;\">\n\t\t</div> -->\n    </div>\n  </div>  \n  </div>\n  \n\n <!-- <p style=\"text-align:center\"><b>Medicine Id: </b> {{list[0].MedicineId}}</p>\n    <div class=\"row\">\n      <div class=\"col\"  style=\"margin-left:8%;\"><b>Serial No: </b> {{distdata.serial}}</div>\n      <div class=\"col\"><b>Location: </b> {{distdata.location}}</div>\n      <div class=\"col\"><b>Temperature: </b> {{distdata.barcode}}<sup>o</sup>C</div>\n    </div><br>\n    <div class=\"row\">\n        <div class=\"col col-4\"></div>\n        <div class=\"col col-5\"><b>Medicine Description</b></div>\n        <div class=\"col col-3\"></div>\n      </div><br>\n\t  <div class=\"row\">\n    <div class=\"col\"><b>Medicine Name: </b> {{distdata.medicine}}</div>\n\t  <div class=\"col\"><b>Weight(Kg): </b> {{distdata.weight}}</div>\n\t  <div class=\"col\"><b>Manufacture: </b> {{distdata.Mdate}}</div>\n\t  <div class=\"col\"><b>Expiry: </b> {{distdata.Edate}}</div>\n    </div><br>\n \n    <div class=\"row\">\n      <div class=\"col\"  style=\"margin-left:25%; text-align: left\">\n        <b style=\"color:blue\">Medicine Owner </b>\n        <span id=\"styleStatus\">{{distdata.status}}</span>\n      </div>\n    </div> \n\t  <div class=\"row\">\n\t\t<div class=\"col\" style=\"text-align:center;\">\n    </div> -->\n    \n\n<!-- ===================================================================================================== -->\n\n   <!-- <button class=\"form-control btn-defult\" *ngIf=\"myrole>1\" (click)=\"editMedicine(distdata._id)\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"> <b>Update Status</b> </button> -->\n  <!-- part 2 for medicine status -->\n  <!-- <div class=\"row\" *ngFor=\"let distdata  of list2\"> \n  <div class=\"col\">\n    <div class=\"card\" style=\"padding:18px;\">\n     <p style=\"text-align:center\"><b>Medicne Id:</b> {{distdata.MedicineId}}</p> \n    <div class=\"row\">\n      <div class=\"col\" style=\"margin-left:8%; text-align: left\">\n        <b>Date:</b>{{distdata.time | date:'dd/MM/yyyy'}}\n      </div>\n      <div class=\"col\"></div>\n      <div class=\"col\" >\n        <b>Time:</b>{{distdata.time | date:'hh:mm:ss'}}\n      </div>\n    </div>\n      <div class=\"row\">\n\t  <div class=\"col\"  style=\"margin-left:8%;\"><b>Serial No: </b> {{distdata.serial}} </div>\n\t  <div class=\"col\"><b>Location: </b> {{distdata.location}}</div>\n\t  <div class=\"col\"><b>Temperature: </b> {{distdata.barcode}}<sup>o</sup>C</div>\n\t  </div>\n\t  <div class=\"row\">\n\t  <div class=\"col\"   style=\"margin-left:8%;\"><b>Weight: </b> {{distdata.weight}}</div>\n\t  <div class=\"col\"><b>Manufacture: </b> {{distdata.Mdate}}</div>\n\t  <div class=\"col\"><b>Expiry: </b> {{distdata.Edate}}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\" style=\"margin-left:8%; text-align: left;\">\n        <b>Medicine Status: </b>\n        <span id='styleStatus'>{{distdata.status}}</span>\n      </div>\n    </div>\t   \n    </div>\n  </div>  \n  </div>\n  \n  \n  \n  \n  \n  \n  </div>\n   -->\n  \n  <!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Status Update</h5>\n        \n      </div>\n      <form [formGroup]=\"registerForm1\" (ngSubmit)=\"medicineUpdate(editlist.serial,editlist.medicine,temperature.value,location.value,editlist.weight,editlist.Mdate,editlist.Edate,editlist.MedicineId,editlist.role,now)\">\n      <div class=\"modal-body\">\n\t  \n\t        <div class=\"row\">\n          <div class=\"col\"><div class=\"form-group\">\n              <label style=\"margin-left: 35px\">Temperature</label>\n              <input #temperature  formControlName=\"temperature011\" type=\"number\" class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted && f1.temperature011.errors }\" placeholder=\" Enter Current Temperature\" maxlength=\"5\">\n              <div *ngIf=\"submitted && f1.temperature011.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f1.temperature011.errors.required\" style=\"margin-left: 35px\">Temperature required </div>\n              </div>\n            </div></div>           \n            </div>   \n         <div class=\"row\">          \n              <div class=\"col\"><div class=\"form-group\">\n                <label style=\"margin-left: 35px\">Location</label>\n                <input  type=\"text\" #location formControlName=\"location011\" class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted && f1.location011.errors }\" placeholder=\"Enter Current Location\" maxlength=\"30\">\n                <div *ngIf=\"submitted && f1.location011.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f1.location011.errors.required\" style=\"margin-left: 35px\">Location required </div>\n                  </div>\n                \n              </div></div>\n          </div>       \t\n\n          \n       </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" #completeModal  data-dismiss=\"modal\">Close</button>\n        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n         </div>\n        </form>\n      \n    </div>\n  </div>\n</div>\n\n\n\n  \n  \n  "

/***/ }),

/***/ "./src/app/admin/medicine/medicine-details-dashboard/medicine-details-dashboard.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-details-dashboard/medicine-details-dashboard.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: MedicineDetailsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineDetailsDashboardComponent", function() { return MedicineDetailsDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var MedicineDetailsDashboardComponent = /** @class */ (function () {
    function MedicineDetailsDashboardComponent(route, router, http, http1, formBuilder) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.http1 = http1;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.now = new Date();
        this.mStatus = _medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_4__["Medicine2"];
        this.list = [];
        this.list2 = [];
        this.editlist = [];
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.myrole = [];
        this.itemId = [];
        this.blockchainUrl = this.http.blockchainUrl;
    }
    MedicineDetailsDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.serial = param.id;
        });
        this.myrole = localStorage.getItem("role");
        this.myrole1 = localStorage.getItem("email");
        console.log("Email", this.myrole1);
        this.firstname = localStorage.getItem("firstName");
        this.lastname = localStorage.getItem("lastName");
        console.log("User name", this.firstname, this.lastname);
        console.log("User Role " + this.myrole);
        switch (this.myrole) {
            case "1": {
                this.updateStatus = "User is Admin";
                break;
            }
            case "2": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Manufacturer]";
                break;
            }
            case "3": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Wholesaler]";
                break;
            }
            case "4": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Distributor]";
                break;
            }
            case "5": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Pharma]";
                break;
            }
            case "7": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Transporter]";
                break;
            }
            default: {
                console.log("User role not define");
                break;
            }
        }
        this.serialNo = this.route.snapshot.params['id'];
        this.medicineStatus(this.serialNo);
        this.medicineStatus2(this.serialNo);
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.registerForm1 = this.formBuilder.group({
            temperature011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            location011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    };
    MedicineDetailsDashboardComponent.prototype.medicineStatus = function (id) {
        var _this = this;
        return this.http.getMedicineStatus(id).subscribe(function (data) {
            _this.list = data;
            console.log(_this.list);
        });
    };
    MedicineDetailsDashboardComponent.prototype.medicineStatus2 = function (id) {
        var _this = this;
        return this.http.getMedicineStatus2(id).subscribe(function (data) {
            _this.list2 = data;
        });
    };
    MedicineDetailsDashboardComponent.prototype.editMedicine = function (id) {
        var _this = this;
        this.http.editMedicineStatus(id).subscribe(function (res) {
            _this.editlist = res;
        });
    };
    Object.defineProperty(MedicineDetailsDashboardComponent.prototype, "f1", {
        get: function () { return this.registerForm1.controls; },
        enumerable: true,
        configurable: true
    });
    MedicineDetailsDashboardComponent.prototype.medicineUpdate = function (serial, me, br, location, we, md, ed, mid, ro, time, mypublickey, updateStatus) {
        var _this = this;
        console.log("Data", this.myrole);
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm1.invalid) {
            return;
        }
        var that = this;
        this.mStatus = new _medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_4__["Medicine2"](serial, me, br, location, we, md, ed, mid, ro, this.now, this.mypublickey, this.updateStatus);
        this.base = this.http.createmedicine2(this.mStatus);
        this.call = this.base.subscribe(function (data) {
            alert('Status Updated');
            var el = _this.completeModal.nativeElement;
            el.click();
            _this.medicineStatus2(_this.serialNo);
        });
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        // const Metadata = {
        //   "action": "medicineStatusUpdate",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "physicalState": {
        //       "timestamp": this.now,
        //       "location": {
        //         "type": 1,
        //         "body": {
        //           "address": location
        //         }
        //       },
        //       "temprature": 12,
        //     },
        //     "userRole" :this.myrole,
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http1.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.http.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.mStatus = new Medicine2(serial, me, br, location, we, md, ed, mid, ro, this.now, this.mypublickey, this.updateStatus);
        //         this.base = this.http.createmedicine2(this.mStatus);
        //         this.call = this.base.subscribe(data => {
        //           alert('Status Updated');
        //           let el: HTMLElement = this.completeModal.nativeElement;
        //           el.click(); 
        //           this.medicineStatus2(this.serialNo);
        //         });
        //       }
        //       else {
        //         alert('Request Rejected');
        //         let el: HTMLElement = this.completeModal.nativeElement;
        //          el.click(); 
        //       }
        //     } else {
        //       that.http1.get(this.http.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.http.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);              
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.mStatus = new Medicine2(serial, me, br, location, we, md, ed, mid, ro, this.now, this.mypublickey, this.updateStatus);
        //             this.base = this.http.createmedicine2(this.mStatus);
        //             this.call = this.base.subscribe(data => {
        //               alert('Status Updated');
        //               let el: HTMLElement = this.completeModal.nativeElement;
        //               el.click(); 
        //               this.medicineStatus2(this.serialNo);
        //             });
        //           }
        //           else {
        //             alert('Request Rejected');
        //             let el: HTMLElement = this.completeModal.nativeElement;
        //             el.click(); 
        //           }
        //         }
        //       })
        //     }        
        //   });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MedicineDetailsDashboardComponent.prototype, "completeModal", void 0);
    MedicineDetailsDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medicine-details-dashboard',
            template: __webpack_require__(/*! ./medicine-details-dashboard.component.html */ "./src/app/admin/medicine/medicine-details-dashboard/medicine-details-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./medicine-details-dashboard.component.css */ "./src/app/admin/medicine/medicine-details-dashboard/medicine-details-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], MedicineDetailsDashboardComponent);
    return MedicineDetailsDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/medicine/medicine-edit/medicine-edit.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-edit/medicine-edit.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21lZGljaW5lL21lZGljaW5lLWVkaXQvbWVkaWNpbmUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/medicine/medicine-edit/medicine-edit.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-edit/medicine-edit.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  medicine-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/medicine/medicine-edit/medicine-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-edit/medicine-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: MedicineEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineEditComponent", function() { return MedicineEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MedicineEditComponent = /** @class */ (function () {
    function MedicineEditComponent() {
    }
    MedicineEditComponent.prototype.ngOnInit = function () {
    };
    MedicineEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medicine-edit',
            template: __webpack_require__(/*! ./medicine-edit.component.html */ "./src/app/admin/medicine/medicine-edit/medicine-edit.component.html"),
            styles: [__webpack_require__(/*! ./medicine-edit.component.css */ "./src/app/admin/medicine/medicine-edit/medicine-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MedicineEditComponent);
    return MedicineEditComponent;
}());



/***/ }),

/***/ "./src/app/admin/medicine/medicine-list/medicine-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-list/medicine-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    background-color: white;   \n  }\n\n \n\n\n  td {\n    background: none;\n    border-bottom-color: #b5b3b3;\n    border-color: #454d55 !important;\n  }\n\n \n\n\n  th{\n    border: none !important;\n    background-color: #3d6d79; \n    color:White;\n    font-family: Muli,Helvetica Neue,Arial,sans-serif;\n    font-weight: 600;\n  }\n\n \n\n\n  button:hover{\n    border: 1px #454d55;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvbWVkaWNpbmUtbGlzdC9tZWRpY2luZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCOzs7OztFQUtBO0lBQ0UsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixnQ0FBZ0M7RUFDbEM7Ozs7O0VBR0E7SUFDRSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpREFBaUQ7SUFDakQsZ0JBQWdCO0VBQ2xCOzs7OztFQUVBO0lBQ0UsbUJBQW1COztFQUVyQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21lZGljaW5lL21lZGljaW5lLWxpc3QvbWVkaWNpbmUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgIFxuICB9XG5cbiBcblxuXG4gIHRkIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNiNWIzYjM7XG4gICAgYm9yZGVyLWNvbG9yOiAjNDU0ZDU1ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gICBcbiAgdGh7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkNmQ3OTsgXG4gICAgY29sb3I6V2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IE11bGksSGVsdmV0aWNhIE5ldWUsQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIFxuICBidXR0b246aG92ZXJ7XG4gICAgYm9yZGVyOiAxcHggIzQ1NGQ1NTtcbiAgICBcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/medicine/medicine-list/medicine-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-list/medicine-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<div class=\"container\">\n  <div class=\"table-responsive\">\n    <br>\n    <table class=\"table table-striped table-hover text-center\">\n      <thead>\n        <tr>\n          <th>Serial Number</th>\n          <th>Medicine Name</th>\n          <th>Manufactured Date</th>\n          <th>Location</th>\n          <th>Weight (Kg)</th>\n          <th>Action</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngIf=\" list && list.length===0\">\n          <tr>\n            <td colspan=\"7\"> \n              Data not found\n            </td>\n          </tr>\n        </ng-container>\n        <ng-container *ngIf=\" list && list.length > 0\">\n        <tr *ngFor=\"let x of list; let i = index\">\n\t\t      <ng-container *ngIf=\"((x.parent==0 || !x.parent) && x.serial)\">\n            <td><a [routerLink]=\"['/medicine/details',x.serial]\" style=\"color:blue\">{{x.serial}}</a></td>\n            <td>{{x.medicine}}</td>\n            <td>{{x.Mdate}}</td>\n            <td>{{x.location}}</td>\n            <td>{{x.weight}}</td>\n            <td><button type=\"button\" *ngIf=\"myrole>1\" (click)=\"deleteMedicine(x._id)\" class=\"btn btn-danger\">Delete</button></td>\n            <td><button type=\"button\" (click)=\"serialId(x.serial)\" class=\"btn btn-info\" data-toggle=\"modal\"\n              data-target=\"#exampleModalCenter\" *ngIf=\"myrole>1\">Send to Wholesaler</button></td>\n\t\t      </ng-container>\n        </tr>\n        </ng-container>\n      </tbody>\n      <tfoot >\n        <tr>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Medicine Transportation</h5>\n\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Serial</label>\n              <input #serial type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Wholesaler</label>\n              <select [(ngModel)]=\"wId1\" class=\"form-control\">\n                <option *ngFor=\"let wid of wlist\" [value]=\"wid.publicKey\">{{wid.firstName}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Transporter</label>\n              <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" #completeModal data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/medicine/medicine-list/medicine-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-list/medicine-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: MedicineListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineListComponent", function() { return MedicineListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _transection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transection */ "./src/app/admin/medicine/medicine-list/transection.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import { Medicine } from '../medicine-create/addmedicine';



var MedicineListComponent = /** @class */ (function () {
    function MedicineListComponent(http, http1, router) {
        this.http = http;
        this.http1 = http1;
        this.router = router;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.wlist = [];
        this.tlist = [];
        this.wid1 = '';
        this.tid1 = '';
        this.list = [];
        this.transection = _transection__WEBPACK_IMPORTED_MODULE_3__["Transection"];
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.http.blockchainUrl;
    }
    MedicineListComponent.prototype.ngOnInit = function () {
        this.medicinelist();
        this.allWholesaler();
        this.allTransporter();
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.myrole = localStorage.getItem("role");
        this.userId = localStorage.getItem("userId");
        console.log("User Idhhhhhhh", this.userId);
        console.log(this.myrole);
    };
    MedicineListComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    MedicineListComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    MedicineListComponent.prototype.serialId = function (serialId) {
        this.serialvalue = serialId;
    };
    MedicineListComponent.prototype.medicinelist = function () {
        var _this = this;
        this.myrole = localStorage.getItem("role");
        if (this.myrole == 1) {
            return this.http.getMedicineList().subscribe(function (data) {
                _this.list = data;
                console.log("All Medicine", _this.list);
            });
        }
        else {
            return this.http.getMedicineUserId().subscribe(function (data) {
                console.log(data);
                _this.list = data;
                console.log("user Medicine", _this.list);
            });
        }
    };
    MedicineListComponent.prototype.deleteMedicine = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete')) {
            this.http.deleteMedicine(id).subscribe(function (res) {
                _this.medicinelist();
            });
        }
    };
    MedicineListComponent.prototype.allWholesaler = function () {
        var _this = this;
        return this.http.getallWholesalerUser().subscribe(function (data) {
            _this.wlist = data;
            console.log(_this.wlist);
        });
    };
    MedicineListComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.http.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    MedicineListComponent.prototype.mTransection = function (serial, wholesalerId, transpoterId) {
        var _this = this;
        var that = this;
        console.log(serial, wholesalerId, transpoterId);
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        this.transection = new _transection__WEBPACK_IMPORTED_MODULE_3__["Transection"](serial, wholesalerId, transpoterId);
        this.base = this.http.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
            var el = _this.completeModal.nativeElement;
            el.click();
        });
        // const Metadata = {
        //   "action": "sendToWholesaler",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "wholesaler": {
        //       "address": wholesalerId,
        //       "comment": "In Transaction"
        //     },
        //     "transporterid": transpoterId
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http1.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.http.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       console.log(JSON.parse);
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.transection = new Transection(serial, wholesalerId, transpoterId);
        //         this.base = this.http.medicineTransection(this.transection);
        //         this.call = this.base.subscribe(
        //           data => {
        //             alert('Request Accepted');
        //             let el: HTMLElement = this.completeModal.nativeElement;
        //             el.click();
        //           });
        //       }
        //       else {
        //         alert('Request Rejected');
        //         let el: HTMLElement = this.completeModal.nativeElement;
        //         el.click();
        //       }
        //     } else {
        //       that.http1.get(this.blockchainUrl + "/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.http.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);
        //           console.log('json value2', this.status.data[0].status);
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        // 		   this.transection = new Transection(serial, wholesalerId, transpoterId);
        //             this.base = this.http.medicineTransection(this.transection);
        //             this.call = this.base.subscribe(
        //               data => {
        //                 alert('Request Accepted');
        //                 let el: HTMLElement = this.completeModal.nativeElement;
        //                 el.click();
        //               });
        //           }
        //           else {
        //             alert('Request Rejected');
        //             let el: HTMLElement = this.completeModal.nativeElement;
        //             el.click();
        //           }
        //         }
        //       })
        //     }
        //     // }).catch(function (err) {
        //     //   console.log(err.message);
        //   });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MedicineListComponent.prototype, "completeModal", void 0);
    MedicineListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medicine-list',
            template: __webpack_require__(/*! ./medicine-list.component.html */ "./src/app/admin/medicine/medicine-list/medicine-list.component.html"),
            styles: [__webpack_require__(/*! ./medicine-list.component.css */ "./src/app/admin/medicine/medicine-list/medicine-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MedicineListComponent);
    return MedicineListComponent;
}());



/***/ }),

/***/ "./src/app/admin/medicine/medicine-list/transection.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-list/transection.ts ***!
  \*************************************************************/
/*! exports provided: Transection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transection", function() { return Transection; });
var Transection = /** @class */ (function () {
    function Transection(serial, wholesalerId, transporterId) {
        this.serial = serial;
        this.wholesalerId = wholesalerId;
        this.transporterId = transporterId;
        this.senderId = localStorage.getItem("userId");
    }
    return Transection;
}());



/***/ }),

/***/ "./src/app/admin/medicine/medicine-report/medicine-report.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-report/medicine-report.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    \n  }\n\n \n#heading{\n    background-color: rgb(18, 50, 190); \n    color:white;\n}\n\n \n.pd{\n  background: navy;\n}\n\n \ntd a {\n  display:block;\n  width:100%;\n  background-clip: padding-box; \n  border-radius: 5px;\n  background-color: blue;\n  color: white;\n  border: 2px solid green;\n}\n\n \na {\n  text-decoration: none !important;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvbWVkaWNpbmUtcmVwb3J0L21lZGljaW5lLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVzs7RUFFYjs7O0FBR0Y7SUFDSSxrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOzs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7OztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvbWVkaWNpbmUtcmVwb3J0L21lZGljaW5lLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICB9XG5cbiBcbiNoZWFkaW5ne1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgNTAsIDE5MCk7IFxuICAgIGNvbG9yOndoaXRlO1xufVxuLnBke1xuICBiYWNrZ3JvdW5kOiBuYXZ5O1xufVxudGQgYSB7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IFxuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/admin/medicine/medicine-report/medicine-report.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-report/medicine-report.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<div class=\"container\">\n  <div class=\"table-responsive\">\n    <br>\n    <table class=\"table table-striped table-dark table-hover text-center\">\n\n      <thead class=\"theme-table\">\n\t\t<tr>\n\t\t<th colspan=\"4\"></th>\n\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t</tr>\n        <tr>\n          <th> Serial Number</th>\n          <th>Medicine code</th>\n          <th>Manufactured Date</th>\n          <th>Location</th>\n          <th>Weight</th> \n        </tr>\n\t\t\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let x of list; let i = index\">\n          <td><a [routerLink]=\"['/medicinedetailsdashboard',x.serial]\" style=\"color:blue\">{{x.serial}}</a></td>\n          <td>{{x.medicine}}</td>\n          <td>{{x.Mdate}}</td>\n          <td>{{x.location}}</td>\n          <td>{{x.weight}}</td>\n          <!-- <td><button type=\"button\" *ngIf=\"myrole>1\" (click)=\"deleteMedicine(x._id)\" class=\"btn btn-danger\">Delete</button></td>\n          <td><button type=\"button\" (click)=\"serialId(x.serial)\" class=\"btn btn-info\" data-toggle=\"modal\"\n              data-target=\"#exampleModalCenter\" *ngIf=\"myrole>1\">Send to Wholesaler</button></td> -->\n        </tr>\n\n      </tbody>\n      <tfoot class=\"theme-table\">\n        <tr>\n          <th colspan=\"4\"></th>\n\t\t  <th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export As CSV</button></th>\n          <!-- <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th> -->\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Medicine Transportation</h5>\n\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Serial</label>\n              <input #serial type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Wholesailer</label>\n              <select [(ngModel)]=\"wId1\" class=\"form-control\">\n                <option *ngFor=\"let wid of wlist\" [value]=\"wid.publicKey\">{{wid.firstName}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Transporter</label>\n              <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" #completeModal data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/medicine/medicine-report/medicine-report.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-report/medicine-report.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MedicineReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineReportComponent", function() { return MedicineReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _transection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transection */ "./src/app/admin/medicine/medicine-report/transection.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular5-csv/dist/Angular5-csv */ "./node_modules/angular5-csv/dist/Angular5-csv.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_6__);



// import { Medicine } from '../medicine-create/addmedicine';




var MedicineReportComponent = /** @class */ (function () {
    function MedicineReportComponent(http, http1, router) {
        this.http = http;
        this.http1 = http1;
        this.router = router;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.wlist = [];
        this.tlist = [];
        this.wid1 = '';
        this.tid1 = '';
        this.list = [];
        this.meds = [];
        this.transection = _transection__WEBPACK_IMPORTED_MODULE_3__["Transection"];
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.http.blockchainUrl;
    }
    MedicineReportComponent.prototype.ngOnInit = function () {
        this.medicinelist();
        this.allWholesaler();
        this.allTransporter();
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.myrole = localStorage.getItem("role");
        this.userId = localStorage.getItem("userId");
        console.log("User Idhhhhhhh", this.userId);
        console.log(this.myrole);
    };
    MedicineReportComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    MedicineReportComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    MedicineReportComponent.prototype.serialId = function (serialId) {
        this.serialvalue = serialId;
    };
    MedicineReportComponent.prototype.medicinelist = function () {
        var _this = this;
        this.myrole = localStorage.getItem("role");
        if (this.myrole == 1) {
            return this.http.getMedicineList().subscribe(function (data) {
                _this.list = data;
                //this.meds = data;
                console.log("All Medicine", _this.list);
            });
        }
        else {
            return this.http.getMedicineUserId().subscribe(function (data) {
                console.log(data);
                _this.list = data;
                //this.meds = data;
                console.log("user Medicine", _this.list);
            });
        }
    };
    MedicineReportComponent.prototype.deleteMedicine = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete')) {
            this.http.deleteMedicine(id).subscribe(function (res) {
                _this.medicinelist();
            });
        }
    };
    MedicineReportComponent.prototype.allWholesaler = function () {
        var _this = this;
        return this.http.getallWholesalerUser().subscribe(function (data) {
            _this.wlist = data;
            console.log(_this.wlist);
        });
    };
    MedicineReportComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.http.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    MedicineReportComponent.prototype.exporttocsv = function () {
        var data = [];
        var datarow = {};
        if (Array.isArray(this.list))
            this.meds = this.list;
        else
            this.meds = this.list.split(',');
        for (var i = 0; i <= this.meds.length; i++) {
            console.log("meds==" + this.meds[i]);
            if (typeof this.meds[i] != "undefined") {
                datarow = {
                    serial: this.meds[i].serial,
                    medicine: this.meds[i].medicine,
                    manufactured: this.meds[i].Mdate,
                    location: this.meds[i].location,
                    weight: this.meds[i].weight
                };
                data.push(datarow);
            }
        }
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            headers: ["Serial Number", "Medicine code", "Manufactured Date", "Location", "Weight"]
        };
        new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_6__["Angular5Csv"](data, 'Report1', options);
        return true;
    };
    MedicineReportComponent.prototype.mTransection = function (serial, wholesalerId, transpoterId) {
        var _this = this;
        var that = this;
        console.log(serial, wholesalerId, transpoterId);
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        this.transection = new _transection__WEBPACK_IMPORTED_MODULE_3__["Transection"](serial, wholesalerId, transpoterId);
        this.base = this.http.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
            var el = _this.completeModal.nativeElement;
            el.click();
        });
        // const Metadata = {
        //   "action": "sendToWholesaler",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "wholesaler": {
        //       "address": wholesalerId,
        //       "comment": "In Transaction"
        //     },
        //     "transporterid": transpoterId
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http1.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.http.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       console.log(JSON.parse);
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.transection = new Transection(serial, wholesalerId, transpoterId);
        //         this.base = this.http.medicineTransection(this.transection);
        //         this.call = this.base.subscribe(
        //           data => {
        //             alert('Request Accepted');
        //             let el: HTMLElement = this.completeModal.nativeElement;
        //             el.click();
        //           });
        //       }
        //       else {
        //         alert('Request Rejected');
        //         let el: HTMLElement = this.completeModal.nativeElement;
        //         el.click();
        //       }
        //     } else {
        //       that.http1.get(this.blockchainUrl+"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.http.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);
        //           console.log('json value2', this.status.data[0].status);
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.base = this.http.medicineTransection(this.transection);
        //             this.call = this.base.subscribe(
        //               data => {
        //                 alert('Request Accepted');
        //                 let el: HTMLElement = this.completeModal.nativeElement;
        //                 el.click();
        //               });
        //           }
        //           else {
        //             alert('Request Rejected');
        //             let el: HTMLElement = this.completeModal.nativeElement;
        //             el.click();
        //           }
        //         }
        //       })
        //     }
        //     // }).catch(function (err) {
        //     //   console.log(err.message);
        //   });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MedicineReportComponent.prototype, "completeModal", void 0);
    MedicineReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medicine-report',
            template: __webpack_require__(/*! ./medicine-report.component.html */ "./src/app/admin/medicine/medicine-report/medicine-report.component.html"),
            styles: [__webpack_require__(/*! ./medicine-report.component.css */ "./src/app/admin/medicine/medicine-report/medicine-report.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MedicineReportComponent);
    return MedicineReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/medicine/medicine-report/transection.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/medicine/medicine-report/transection.ts ***!
  \***************************************************************/
/*! exports provided: Transection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transection", function() { return Transection; });
var Transection = /** @class */ (function () {
    function Transection(serial, wholesalerId, transporterId) {
        this.serial = serial;
        this.wholesalerId = wholesalerId;
        this.transporterId = transporterId;
    }
    return Transection;
}());



/***/ }),

/***/ "./src/app/admin/medicine/package-create/addpackage.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/medicine/package-create/addpackage.ts ***!
  \*************************************************************/
/*! exports provided: Package */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Package", function() { return Package; });
var Package = /** @class */ (function () {
    function Package(serial, level, medicines, packages, location, userId) {
        this.serial = serial;
        this.level = level;
        this.medicines = Array.isArray(medicines) ? medicines.join(',') : medicines;
        this.location = location;
        this.packages = Array.isArray(packages) ? packages.join(',') : packages;
        this.userId = userId;
    }
    return Package;
}());



/***/ }),

/***/ "./src/app/admin/medicine/package-create/addpackage2.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/medicine/package-create/addpackage2.ts ***!
  \**************************************************************/
/*! exports provided: Package2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Package2", function() { return Package2; });
var Package2 = /** @class */ (function () {
    function Package2(serial, medicines, barcode, location, level, packages, PackageId, role, time, publickey, status) {
        this.serial = serial;
        this.medicines = medicines;
        this.barcode = barcode;
        this.location = location;
        this.level = level;
        this.packages = packages;
        this.PackageId = PackageId;
        this.role = role;
        this.time = time;
        this.publickey = publickey;
        this.status = status;
    }
    return Package2;
}());



/***/ }),

/***/ "./src/app/admin/medicine/package-create/package-create.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/admin/medicine/package-create/package-create.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-top:50px;\n    color: navy;\n}\n\nh4{\ncolor: navy;\n    margin-left: 20px;\n}\n\nbody{\n    color: navy;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvcGFja2FnZS1jcmVhdGUvcGFja2FnZS1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7QUFDQSxXQUFXO0lBQ1AsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvcGFja2FnZS1jcmVhdGUvcGFja2FnZS1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDo1MHB4O1xuICAgIGNvbG9yOiBuYXZ5O1xufVxuXG5oNHtcbmNvbG9yOiBuYXZ5O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuYm9keXtcbiAgICBjb2xvcjogbmF2eTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/medicine/package-create/package-create.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/medicine/package-create/package-create.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<div class=\"container\"> \n    <h4>Track New <span>Package</span></h4>\n    \n  <form [formGroup]=\"registerForm\"\n    (ngSubmit)=\"onSubmit()\" style=\"background-color: rgb(235,235,235); padding: 20px;\">\n        <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Serial Number</label>\n                <input type=\"text\" formControlName=\"SerialNumber\" [(ngModel)]=\"serialnum\" [ngClass]=\"{ 'is-invalid': submitted && f.SerialNumber.errors }\" class=\"form-control required\" maxlength=\"30\" >\n                <div *ngIf=\"submitted && f.SerialNumber.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.SerialNumber.errors.required\">Serial Number required </div>\n                </div>\n              </div></div>\n          <div class=\"col\"><div class=\"form-group\">\n            <label>Level</label>\t\t\t  \n            <input type=\"number\" formControlName=\"Level\"  [(ngModel)]=\"level\" [ngClass]=\"{ 'is-invalid': submitted && f.Level.errors }\" class=\"form-control required\"/>\n            <div *ngIf=\"submitted && f.Level.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.Level.errors.required\">Level required </div>\n              </div>\n          </div>\n        </div>\n       </div> \n      <div class=\"row\">\n         <div class=\"col\" *ngIf=\"(level<1)\"><div class=\"form-group\">\n            <label>Medicines</label>\n            <select  formControlName=\"Medicines\" [(ngModel)]=\"medicines\" class=\"form-control required\" multiple>\n\t\t\t<ng-container *ngFor=\"let x of list\" >\n\t\t\t<option [value]=\"x._id\" *ngIf=\"(x.parent=='0' || !x.parent)\">{{x.serial}}</option> \n\t\t\t\n\t\t\t</ng-container>\n\t\t\t</select>\n\t\t\t \n            </div>\n          </div>\n   \n\t\t\n      \n\t\t<div class=\"col\" *ngIf=\"(level>=1)\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>Packages</label>\n\t\t\t\t<select name=\"packages[]\" formControlName=\"Packages\"   [(ngModel)]=\"packages\" class=\"form-control required\" multiple>\n\t\t\t\t<ng-container *ngFor=\"let x of allpackage\" >\n\t\t\t\t\t<option [value]=\"x._id\" *ngIf=\"(x.level == (level-1) &&  (x.parent == '0' || !x.parent))\">{{x.serial}}</option> \n\t\t\t\n\t\t\t</ng-container>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"col\">\n\t\t\t<div class=\"form-group\">\n              <label>Location</label>\n              <input type=\"text\" formControlName=\"Location\"  [(ngModel)]=\"location\" [ngClass]=\"{ 'is-invalid': submitted && f.Location.errors }\" class=\"form-control required\" maxlength=\"30\">\n              <div *ngIf=\"submitted && f.Location.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.Location.errors.required\">Location required </div>\n                </div>\n            </div>\n          </div>\n\t</div>\n            <div class=\"row text-right\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary\">Create Records</button>\n                  <!-- <button type=\"reset\" class=\"btn btn-primary\" style=\"margin-left: 5px\">Reset From</button> -->\n                  </div></div>\n\t\t\t\t\t\t\t <!-- Button to Open the Modal -->\n\t\t\t  <div class=\"row text-left\">\n\t\t\t\t<div class=\"col\"><div class=\"form-group\">\n\t\t\t\t<button type=\"button\"  #completeModal style=\" margin: 0px; display: none\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n\t\t\t\t  Generate QR Code\n\t\t\t\t</button>\n  \n                      </div></div>\n                </div>\n              </div>\n\t\t\n     \n   </form>\n   <!-- The Modal -->\n   <div class=\"modal fade\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\"> \n      \n        <!-- Modal Header QR Code Generator Start -->\n        <div class=\"modal-header\">\n         \n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        \n        <!-- Modal body -->\n        <div class=\"modal-body\" style=\"margin-left:125px\">\n          <div>\n         <h3>Package Qr Code Image</h3>\n\t\t\t\t<qrcode #parent [qrdata]=\"packageid\" [size]=\"256\" [level]=\"'M'\"></qrcode>\n        </div>\n\n          <br>\n          \n          <div class=\"text\">           \n            \n          <button (click)=\"saveAsImage(parent)\">Download QR Code Image</button>\n          </div>\n        </div>\n        \n        <!-- Modal footer  QR Code Generator End-->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n  \n  </div>\n"

/***/ }),

/***/ "./src/app/admin/medicine/package-create/package-create.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/medicine/package-create/package-create.component.ts ***!
  \***************************************************************************/
/*! exports provided: PackageCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageCreateComponent", function() { return PackageCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _addpackage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addpackage */ "./src/app/admin/medicine/package-create/addpackage.ts");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var PackageCreateComponent = /** @class */ (function () {
    function PackageCreateComponent(httpuser, qrReader, http, formBuilder) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.qrdata = null;
        this.itemId = [];
        this.itemId1 = [];
        this.status = [];
        this.transId = [];
        this.level = '';
        this.location = '';
        this.serialnum = '';
        this.medicines = '';
        this.packages = [];
        this.packageid = [];
        this.blockchain = [];
        this.blockchain2 = [];
        this.list = [];
        this.allpackage = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
        console.log('AppComponent running');
        this.qrdata = ' ';
    }
    PackageCreateComponent.prototype.changeValue = function (newValue) {
        this.qrdata = newValue;
    };
    PackageCreateComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Package Created by Manufacturer";
        this.userId = localStorage.getItem("userId");
        console.log("User ID", this.userId);
        this.myrole = localStorage.getItem("role");
        this.myrole1 = localStorage.getItem("email");
        console.log("User Role", this.myrole1);
        console.log("User Role", this.myrole);
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.firstname = localStorage.getItem("firstName");
        this.lastname = localStorage.getItem("lastName");
        console.log("User name", this.firstname, this.lastname);
        //this.medicineid = '92516006ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b5';
        this.registerForm = this.formBuilder.group({
            SerialNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Level: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Medicines: [''],
            Packages: ['']
            // AuthorizeReporters: ['', Validators.required],
            // Selectfield: ['', Validators.required],
        });
        this.medicinelist();
        this.packagelist();
    };
    PackageCreateComponent.prototype.medicinelist = function () {
        var _this = this;
        this.myrole = localStorage.getItem("role");
        if (this.myrole == 1) {
            return this.httpuser.getMedicineList().subscribe(function (data) {
                _this.list = data;
                console.log("All Medicine", _this.list);
            });
        }
        else {
            return this.httpuser.getPkgMedicineUserId().subscribe(function (data) {
                console.log(data);
                _this.list = data;
                console.log("user Medicine", _this.list);
            });
        }
        for (var i = 0; i <= this.list.length; i++) {
            this.list[i].id = this.list[i]._id.toString();
        }
    };
    PackageCreateComponent.prototype.packagelist = function () {
        var _this = this;
        this.myrole = localStorage.getItem("role");
        if (this.myrole == 1) {
            return this.httpuser.getPackageList().subscribe(function (data) {
                _this.allpackage = data;
                console.log("All Medicine", _this.list);
            });
        }
        else {
            return this.httpuser.getPackageUserId().subscribe(function (data) {
                console.log(data);
                _this.allpackage = data;
                console.log("user Medicine", _this.list);
            });
        }
    };
    PackageCreateComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    //saving image file of Qr code 
    // qrdata2 = this.packageid;
    PackageCreateComponent.prototype.saveAsImage = function (parent) {
        // fetches base 64 date from image
        var parentElement = parent.el.nativeElement.querySelector("img").src;
        // converts base 64 encoded image to blobData
        var blobData = this.convertBase64ToBlob(parentElement);
        // saves as image
        if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
            window.navigator.msSaveOrOpenBlob(blobData, 'Qrcode');
        }
        else { // chrome
            var blob = new Blob([blobData], { type: "image/png" });
            var url = window.URL.createObjectURL(blob);
            // window.open(url);
            var link = document.createElement('a');
            link.href = url;
            link.download = this.packageserial;
            link.click();
        }
    };
    PackageCreateComponent.prototype.convertBase64ToBlob = function (Base64Image) {
        // SPLIT INTO TWO PARTS
        var parts = Base64Image.split(';base64,');
        // HOLD THE CONTENT TYPE
        var imageType = parts[0].split(':')[1];
        // DECODE BASE64 STRING
        var decodedData = window.atob(parts[1]);
        // CREATE UNIT8ARRAY OF SIZE SAME AS ROW DATA LENGTH
        var uInt8Array = new Uint8Array(decodedData.length);
        // INSERT ALL CHARACTER CODE INTO UINT8ARRAY
        for (var i = 0; i < decodedData.length; ++i) {
            uInt8Array[i] = decodedData.charCodeAt(i);
        }
        // RETURN BLOB IMAGE AFTER CONVERSION
        return new Blob([uInt8Array], { type: imageType });
    };
    PackageCreateComponent.prototype.ngOnDestroy = function () {
    };
    Object.defineProperty(PackageCreateComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    PackageCreateComponent.prototype.onSubmit = function () {
        // alert(this.medicines); return true;
        var _this = this;
        if (this.medicines.length <= 0 && this.level <= 0) {
            alert("Kindly select medicines for bundle");
            return false;
        }
        else if (this.packages.length <= 0 && this.level > 0) {
            alert("Kindly select packages for bundle");
            return false;
        }
        var that = this;
        this.submitted = true;
        console.log("User ID", this.userId);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.serialnum, this.level, this.medicines, this.packages, this.location, this.userId);
        //CREATE MEDICINE CODE
        this.medicineStatus = this.firstname + " " + this.lastname + " " + "[Manufacturer]";
        console.log(this.medicineStatus);
        this.mypublickey = localStorage.getItem("publicKey");
        console.log("MedicineStatus", this.mypublickey);
        this.privateKey = localStorage.getItem("privateKey");
        console.log("Private Key", this.privateKey);
        this.createpackage = new _addpackage__WEBPACK_IMPORTED_MODULE_2__["Package"](this.serialnum, this.level, this.medicines, this.packages, this.location, this.userId);
        console.log('console of data', this.createpackage);
        this.base = this.httpuser.createpackage(this.createpackage);
        this.call = this.base.subscribe(function (data) {
            console.log("AT = " + JSON.stringify(data));
            _this.packageid = data.PackageId;
            _this.packageserial = data.serial;
            alert('Request Accepted');
            var el = _this.completeModal.nativeElement;
            el.click();
            //this.registerForm.reset();
        });
        //blockcahin
        // if(this.level > 0)
        // 	var inbounds = this.medicines;
        // else
        // 	var inbounds = this.packages;
        //   const Metadata = {
        //     "action": "createPackages", 
        //     "payloaddata": {
        //       "serialNumber": this.serialnum,
        //       "description": this.serialnum+ this.level,
        //       "location": {
        //         "type": 1,
        //         "body": {
        //           "address": this.location
        //         }
        //       },
        //       "level": this.level,
        // 	"inbounds":inbounds
        //     },
        //     "private": this.privateKey,
        //     "public": this.mypublickey
        //   };
        //   const httpOptions = {
        //     headers: new HttpHeaders({
        //       'Content-Type': 'application/json'
        //     })
        //   };
        //   var x = this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //     (val) => {
        //       console.log("POST call successful value returned in body", val);
        //       this.blockchain = val;
        //       if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
        //         JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //         this.status = JSON.parse(this.blockchain.response.body);            
        //         this.statusValue = this.status.data[0].status;
        //         this.itemId = this.status.data[0].id;
        //         if (this.statusValue == 'COMMITTED') {
        //       this.base = this.httpuser.createpackage(this.createpackage);
        //       this.call = this.base.subscribe((data) => {     
        // 		console.log(JSON.stringify(data));
        //         this.packageid = data.PackageId;
        //         this.packageserial = data.serial;
        //         alert('Request Accepted');
        //         let el: HTMLElement = this.completeModal.nativeElement;
        //         el.click(); 
        //         //this.registerForm.reset();
        //       });
        //     }
        //     else {
        //       alert('Request Rejected');
        //     }
        //   } else {
        //     that.http.get(this.blockchainUrl+"/batch_statuses?"+ this.blockchain.id + "&wait").subscribe((val) => {
        //       this.blockchain2 =val
        //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
        //         this.status = JSON.parse(this.blockchain2.body);
        //         console.log('json value2', this.status.data[0].status);
        //         this.statusValue = this.status.data[0].status;
        //         this.itemId = this.status.data[0].id;
        //         if (this.statusValue == 'COMMITTED') {
        //           this.base = this.httpuser.createpackage(this.createpackage);
        //           this.call = this.base.subscribe((data) => {
        // 			console.log("AT = "+ JSON.stringify(data));
        //             this.packageid = data.PackageId;
        //             this.packageserial = data.serial; 
        //              alert('Request Accepted');
        //              //this.registerForm.reset();
        //           });
        //         }
        //         else {
        //           alert('Request Rejected');
        //         }
        //       }
        //     })
        //   }
        // // }).catch(function (err) {
        // //   console.log(err.message);
        // });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PackageCreateComponent.prototype, "completeModal", void 0);
    PackageCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-package-create',
            template: __webpack_require__(/*! ./package-create.component.html */ "./src/app/admin/medicine/package-create/package-create.component.html"),
            styles: [__webpack_require__(/*! ./package-create.component.css */ "./src/app/admin/medicine/package-create/package-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_4__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], PackageCreateComponent);
    return PackageCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/medicine/package-detail/package-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/admin/medicine/package-detail/package-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n    /* margin-top: 10px;\n    margin-left: 8%;\n    margin-right: 15%;\n    display: block;\n    width: 87%; */\n    background: #f4a018;\n    color: white;\n    width: 200px;\n}\n\n#styleStatus{\n    color: white;\n    background-color: #4a858b;\n    border-radius: 8px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 4px;\n    padding-bottom: 4px;\n    height: 30px;\n    display: inline-block;\n    justify-content: center;\n    align-items: center;\n}\n\n.package-id{\n    text-align: center;\n    border-bottom: 1px solid gainsboro;\n    padding-bottom: 8px;\n    margin-bottom: 0;\n}\n\n.custom-row{\n    border-bottom: 1px solid gainsboro;\n    padding: 8px;\n    margin-left: 0;\n    margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvcGFja2FnZS1kZXRhaWwvcGFja2FnZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJOzs7O2lCQUlhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9tZWRpY2luZS9wYWNrYWdlLWRldGFpbC9wYWNrYWdlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbCB7XG4gICAgLyogbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogOCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDg3JTsgKi9cbiAgICBiYWNrZ3JvdW5kOiAjZjRhMDE4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbiNzdHlsZVN0YXR1c3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhODU4YjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYWNrYWdlLWlke1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ2FpbnNib3JvO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jdXN0b20tcm93e1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnYWluc2Jvcm87XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/medicine/package-detail/package-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/medicine/package-detail/package-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<br>\n<div class=\"container\">\n  <div class=\"row\" *ngFor=\"let distdata  of list\">\n    <div class=\"col\">\n      <div class=\"card custom-card\" style=\"padding:18px;\">\n        <p style=\"text-align:center\" class=\"package-id\"><b>Package Id: </b> {{list[0].PackageId}}</p>\n        <div class=\"row custom-row\">\n          <div class=\"col\" style=\"margin-left:8%;\"><b>Serial No: </b> {{distdata.serial}}</div>\n          <div class=\"col\"><b>Location: </b> {{distdata.location}}</div>\n          <div class=\"col\"><b>Level: </b> {{distdata.level}}</div>\n        </div><br>\n        <div class=\"row\">\n          <div class=\"col col-5\"><b>Package Description</b></div>\n          <div class=\"col col-3\"></div>\n          <div class=\"col col-4\"></div>\n        </div><br>\n        <div class=\"row mb-3\">\n          <div class=\"col-6\">\n            <div class=\"row\">\n              <div class=\"col\" *ngIf=\"packagedetails.length\">\n                <p class=\"mb-1\">\n                  <b>Packages: </b>\n                </p>\n                <p *ngFor=\"let md of packagedetails; let i = index\">\n                  <span *ngFor=\"let mdd of md\">\n                    <a [routerLink]=\"['/package/details',mdd.serial]\" target=\"_blank\">{{mdd.serial}} </a>\n                  </span>\n                </p>\n              </div>\n              <div class=\"col\" *ngIf=\"medicinedetails.length\"><b>Medicine: </b>\n                <p class=\"mb-0\" *ngFor=\"let md of medicinedetails; let i = index\">\n                  <span *ngFor=\"let mdd of md\">\n                    <a [routerLink]=\"['/medicinedetailsdashboard',mdd.serial]\">{{mdd.serial}} </a>\n                  </span>\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <p class=\"mb-1\">\n                  <b>Package Owner </b>\n                </p>\n                <div id=\"styleStatus\">{{owner}}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align:center;\">\n            <button class=\"form-control btn-defult m-auto\" *ngIf=\"myrole>1\" (click)=\"editPackage(distdata._id)\"\n              data-toggle=\"modal\" data-target=\"#exampleModalCenter\"> <b>Update Status</b> </button>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- part 2 for medicine status -->\n    <div class=\"row\" *ngFor=\"let distdata  of list2\">\n      <div class=\"col\">\n        <div class=\"card\" style=\"padding:18px;\">\n          <!--  <p style=\"text-align:center\"><b>Medicne Id:</b> {{distdata.MedicineId}}</p> -->\n          <div class=\"row\">\n            <div class=\"col\" style=\"margin-left:8%; text-align: left\">\n              <b>Date:</b>{{distdata.time | date:'dd/MM/yyyy'}}\n            </div>\n            <div class=\"col\"></div>\n            <div class=\"col\">\n              <b>Time:</b>{{distdata.time | date:'hh:mm:ss'}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\" style=\"margin-left:8%;\"><b>Serial No: </b> {{distdata.serial}} </div>\n            <div class=\"col\"><b>Location: </b> {{distdata.location}}</div>\n            <div class=\"col\"><b>Level: </b> {{distdata.level}}</div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col\" style=\"margin-left:8%; text-align: left;\">\n              <b>Package Status: </b>\n              <span id='styleStatus'>{{distdata.status}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n\n\n\n  </div>\n\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Status Update</h5>\n\n        </div>\n        <form [formGroup]=\"registerForm1\"\n          (ngSubmit)=\"medicineUpdate(editlist.serial,editlist.medicines,12,location.value,editlist.level,editlist.packages,editlist.PackageId,editlist.role,now)\">\n          <div class=\"modal-body\">\n\n\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"form-group\">\n                  <label style=\"margin-left: 35px\">Location</label>\n                  <input type=\"text\" #location formControlName=\"location011\" class=\"form-control required\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f1.location011.errors }\"\n                    placeholder=\"Enter Current Location\" maxlength=\"30\">\n                  <div *ngIf=\"submitted && f1.location011.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f1.location011.errors.required\" style=\"margin-left: 35px\">Location required </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger\" #completeModal data-dismiss=\"modal\">Close</button>\n            <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin/medicine/package-detail/package-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/medicine/package-detail/package-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: PackageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageDetailComponent", function() { return PackageDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _package_create_addpackage2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../package-create/addpackage2 */ "./src/app/admin/medicine/package-create/addpackage2.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var PackageDetailComponent = /** @class */ (function () {
    function PackageDetailComponent(route, router, http, http1, formBuilder) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.http1 = http1;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.now = new Date();
        this.mStatus = _package_create_addpackage2__WEBPACK_IMPORTED_MODULE_4__["Package2"];
        this.list = [];
        this.list2 = [];
        this.packagedetails = [];
        this.medicinedetails = [];
        this.editlist = [];
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.myrole = [];
        this.itemId = [];
        this.blockchainUrl = this.http.blockchainUrl;
    }
    PackageDetailComponent.prototype.ngOnInit = function () {
        this.myrole = localStorage.getItem("role");
        this.myrole1 = localStorage.getItem("email");
        console.log("Email", this.myrole1);
        this.firstname = localStorage.getItem("firstName");
        this.lastname = localStorage.getItem("lastName");
        console.log("User name", this.firstname, this.lastname);
        console.log("User Role " + this.myrole);
        switch (this.myrole) {
            case "1": {
                this.updateStatus = "User is Admin";
                break;
            }
            case "2": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Manufacturer]";
                break;
            }
            case "3": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Wholesaler]";
                break;
            }
            case "4": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Distributor]";
                break;
            }
            case "5": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Pharma]";
                break;
            }
            case "7": {
                this.updateStatus = "Status Updated by" + " " + this.firstname + " " + this.lastname + " " + "[Transporter]";
                break;
            }
            default: {
                console.log("User role not define");
                break;
            }
        }
        this.serialNo = this.route.snapshot.params['id'];
        this.packageStatus(this.serialNo);
        this.packageStatus2(this.serialNo);
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.registerForm1 = this.formBuilder.group({
            location011: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    };
    PackageDetailComponent.prototype.packageStatus = function (id) {
        var _this = this;
        return this.http.getPackageStatus(id).subscribe(function (data) {
            _this.list = data;
            console.log(_this.list);
            for (var i = 0; i < _this.list.length; i++) {
                if (Array.isArray(_this.list[i].packages))
                    var meds = _this.list[i].packages;
                else
                    var meds = _this.list[i].packages.split(',');
                if (meds.length > 0) {
                    for (var j = 0; j < meds.length; j++) {
                        _this.http.getPackageStatus3(meds[j]).subscribe(function (pdata) {
                            _this.packagedetails.push(pdata);
                        });
                    }
                }
                if (Array.isArray(_this.list[i].medicines))
                    var meds = _this.list[i].medicines;
                else
                    var meds = _this.list[i].medicines.split(',');
                if (meds.length > 0) {
                    for (var j = 0; j < meds.length; j++) {
                        _this.http.getMedicineStatus3(meds[j]).subscribe(function (mdata) {
                            _this.medicinedetails.push(mdata);
                        });
                    }
                }
                _this.http.getUser(_this.list[i].userId).subscribe(function (udata) {
                    console.log(udata);
                    _this.owner = udata[0].firstName + " " + udata[0].lastName;
                });
            }
        });
    };
    PackageDetailComponent.prototype.packageStatus2 = function (id) {
        var _this = this;
        return this.http.getPackageStatus2(id).subscribe(function (data) {
            _this.list2 = data;
        });
    };
    PackageDetailComponent.prototype.editPackage = function (id) {
        var _this = this;
        this.http.editPackageStatus(id).subscribe(function (res) {
            _this.editlist = res;
        });
    };
    Object.defineProperty(PackageDetailComponent.prototype, "f1", {
        get: function () { return this.registerForm1.controls; },
        enumerable: true,
        configurable: true
    });
    PackageDetailComponent.prototype.medicineUpdate = function (serial, me, br, location, level, packages, pid, ro, time, mypublickey, updateStatus) {
        var _this = this;
        console.log("Data", this.myrole);
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm1.invalid) {
            return;
        }
        var that = this;
        this.mStatus = new _package_create_addpackage2__WEBPACK_IMPORTED_MODULE_4__["Package2"](serial, me, br, location, level, packages, pid, ro, this.now, this.mypublickey, this.updateStatus);
        this.base = this.http.createpackage2(this.mStatus);
        this.call = this.base.subscribe(function (data) {
            alert('Status Updated');
            var el = _this.completeModal.nativeElement;
            el.click();
            _this.packageStatus2(_this.serialNo);
        });
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        // const Metadata = {
        //   "action": "medicineStatusUpdate",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "physicalState": {
        //       "timestamp": this.now,
        //       "location": {
        //         "type": 1,
        //         "body": {
        //           "address": location
        //         }
        //       },
        //       "temprature": 12,
        //     },
        //     "userRole" :this.myrole,
        // "level":level
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http1.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.http.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.mStatus = new Package2(serial, me, br, location, level, packages, pid, ro, this.now, this.mypublickey, this.updateStatus);
        //         this.base = this.http.createpackage2(this.mStatus);
        //         this.call = this.base.subscribe(data => {
        //           alert('Status Updated');
        //           let el: HTMLElement = this.completeModal.nativeElement;
        //           el.click(); 
        //           this.packageStatus2(this.serialNo);
        //         });
        //       }
        //       else {
        //         alert('Request Rejected');
        //         let el: HTMLElement = this.completeModal.nativeElement;
        //          el.click(); 
        //       }
        //     } else {
        //       that.http1.get(this.http.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.http.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);              
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.mStatus = new Package2(serial, me, br, location, level, packages, pid, ro, this.now, this.mypublickey, this.updateStatus);
        //             this.base = this.http.createpackage2(this.mStatus);
        //             this.call = this.base.subscribe(data => {
        //               alert('Status Updated');
        //               let el: HTMLElement = this.completeModal.nativeElement;
        //               el.click(); 
        //               this.packageStatus2(this.serialNo);
        //             });
        //           }
        //           else {
        //             alert('Request Rejected');
        //             let el: HTMLElement = this.completeModal.nativeElement;
        //             el.click(); 
        //           }
        //         }
        //       })
        //     }        
        //   });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PackageDetailComponent.prototype, "completeModal", void 0);
    PackageDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-package-detail',
            template: __webpack_require__(/*! ./package-detail.component.html */ "./src/app/admin/medicine/package-detail/package-detail.component.html"),
            styles: [__webpack_require__(/*! ./package-detail.component.css */ "./src/app/admin/medicine/package-detail/package-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], PackageDetailComponent);
    return PackageDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/medicine/package-list/package-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/admin/medicine/package-list/package-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    \n  }\n\n \n#heading{\n    background-color: rgb(18, 50,190); \n    color:white;\n}\n\n \n.pd{\n  background: navy;\n}\n\n \ntd a {\n  display:block;\n  width:100%;\n  background-clip: padding-box; \n  border-radius: 5px;\n  background-color: blue;\n  color: white;\n  border: 2px solid green;\n}\n\n \na {\n  text-decoration: none !important;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvcGFja2FnZS1saXN0L3BhY2thZ2UtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVzs7RUFFYjs7O0FBR0Y7SUFDSSxpQ0FBaUM7SUFDakMsV0FBVztBQUNmOzs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7OztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvcGFja2FnZS1saXN0L3BhY2thZ2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICB9XG5cbiBcbiNoZWFkaW5ne1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgNTAsMTkwKTsgXG4gICAgY29sb3I6d2hpdGU7XG59XG4ucGR7XG4gIGJhY2tncm91bmQ6IG5hdnk7XG59XG50ZCBhIHtcbiAgZGlzcGxheTpibG9jaztcbiAgd2lkdGg6MTAwJTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDsgXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/medicine/package-list/package-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/medicine/package-list/package-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<div class=\"container\">\n  <div class=\"table-responsive\">\n    <br>\n    <table class=\"table table-striped table-dark table-hover text-center\">\n\n      <thead class=\"theme-table\">\n        <tr>\n          <th> Serial Number</th>\n          <th>Location</th>\n          <th>Level</th>\n         \n        \n          <th>Action</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let x of list; let i = index\">\n\t\t<ng-container *ngIf=\"(x.parent==0 || !x.parent)\">\n          <td><a [routerLink]=\"['/package/details',x.serial]\" style=\"color:blue\">{{x.serial}}</a></td>\n          <td>{{x.location}}</td>\n          <td>{{x.level}}</td>\n          <td><button type=\"button\" *ngIf=\"myrole>1\" (click)=\"deletePackage(x._id)\" class=\"btn btn-danger\">Delete</button></td>\n          <td><button type=\"button\" (click)=\"serialId(x.serial,x.level)\" class=\"btn btn-info\" data-toggle=\"modal\"\n              data-target=\"#exampleModalCenter\" *ngIf=\"myrole>1\">Send to Wholesaler</button></td>\n\t\t</ng-container>\n        </tr>\n\n      </tbody>\n      <tfoot class=\"theme-table\">\n        <tr>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n          <!-- <th></th> -->\n          <!-- <th></th> -->\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Package Transportation</h5>\n\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Serial</label>\n              <input #serial type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Wholesaler</label>\n              <select [(ngModel)]=\"wId1\" class=\"form-control\">\n                <option *ngFor=\"let wid of wlist\" [value]=\"wid.publicKey\">{{wid.firstName}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Transporter</label>\n              <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" #completeModal data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/medicine/package-list/package-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/medicine/package-list/package-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: PackageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageListComponent", function() { return PackageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _transection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transection */ "./src/app/admin/medicine/package-list/transection.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import { Medicine } from '../medicine-create/addmedicine';



var PackageListComponent = /** @class */ (function () {
    function PackageListComponent(http, http1, router) {
        this.http = http;
        this.http1 = http1;
        this.router = router;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.levelvalue = "";
        this.wlist = [];
        this.tlist = [];
        this.wid1 = '';
        this.tid1 = '';
        this.list = [];
        this.transection = _transection__WEBPACK_IMPORTED_MODULE_3__["Transection"];
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.http.blockchainUrl;
    }
    PackageListComponent.prototype.ngOnInit = function () {
        this.packagelist();
        this.allWholesaler();
        this.allTransporter();
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.myrole = localStorage.getItem("role");
        this.userId = localStorage.getItem("userId");
        console.log("User Idhhhhhhh", this.userId);
        console.log(this.myrole);
    };
    PackageListComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    PackageListComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    PackageListComponent.prototype.serialId = function (serialId, level) {
        this.serialvalue = serialId;
        this.levelvalue = level;
    };
    PackageListComponent.prototype.packagelist = function () {
        var _this = this;
        this.myrole = localStorage.getItem("role");
        if (this.myrole == 1) {
            return this.http.getPackageList().subscribe(function (data) {
                _this.list = data;
                console.log("All Package", _this.list);
            });
        }
        else {
            return this.http.getPackageUserId().subscribe(function (data) {
                console.log(data);
                _this.list = data;
                console.log("user Package", _this.list);
            });
        }
    };
    PackageListComponent.prototype.deletePackage = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete')) {
            this.http.deletePackage(id).subscribe(function (res) {
                _this.packagelist();
            });
        }
    };
    PackageListComponent.prototype.allWholesaler = function () {
        var _this = this;
        return this.http.getallWholesalerUser().subscribe(function (data) {
            _this.wlist = data;
            console.log(_this.wlist);
        });
    };
    PackageListComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.http.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    PackageListComponent.prototype.mTransection = function (serial, wholesalerId, transpoterId) {
        var _this = this;
        var that = this;
        console.log(serial, wholesalerId, transpoterId);
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        this.transection = new _transection__WEBPACK_IMPORTED_MODULE_3__["Transection"](serial, wholesalerId, transpoterId);
        this.base = this.http.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
            var el = _this.completeModal.nativeElement;
            el.click();
        });
        // const Metadata = {
        //   "action": "sendToWholesaler",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "wholesaler": {
        //       "address": wholesalerId,
        //       "comment": "In Transaction"
        //     },
        //     "transporterid": transpoterId,
        // "level":this.levelvalue
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http1.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.http.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       console.log(JSON.parse);
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.transection = new Transection(serial, wholesalerId, transpoterId);
        //         this.base = this.http.medicineTransection(this.transection);
        //         this.call = this.base.subscribe(
        //           data => {
        //             alert('Request Accepted');
        //             let el: HTMLElement = this.completeModal.nativeElement;
        //             el.click();
        //           });
        //       }
        //       else {
        //         alert('Request Rejected');
        //         let el: HTMLElement = this.completeModal.nativeElement;
        //         el.click();
        //       }
        //     } else {
        //       that.http1.get(this.blockchainUrl+"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.http.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);
        //           console.log('json value2', this.status.data[0].status);
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.base = this.http.medicineTransection(this.transection);
        //             this.call = this.base.subscribe(
        //               data => {
        //                 alert('Request Accepted');
        //                 let el: HTMLElement = this.completeModal.nativeElement;
        //                 el.click();
        //               });
        //           }
        //           else {
        //             alert('Request Rejected');
        //             let el: HTMLElement = this.completeModal.nativeElement;
        //             el.click();
        //           }
        //         }
        //       })
        //     }
        //     // }).catch(function (err) {
        //     //   console.log(err.message);
        //   });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PackageListComponent.prototype, "completeModal", void 0);
    PackageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-package-list',
            template: __webpack_require__(/*! ./package-list.component.html */ "./src/app/admin/medicine/package-list/package-list.component.html"),
            styles: [__webpack_require__(/*! ./package-list.component.css */ "./src/app/admin/medicine/package-list/package-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PackageListComponent);
    return PackageListComponent;
}());



/***/ }),

/***/ "./src/app/admin/medicine/package-list/transection.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/medicine/package-list/transection.ts ***!
  \************************************************************/
/*! exports provided: Transection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transection", function() { return Transection; });
var Transection = /** @class */ (function () {
    function Transection(serial, wholesalerId, transporterId) {
        this.serial = serial;
        this.wholesalerId = wholesalerId;
        this.transporterId = transporterId;
    }
    return Transection;
}());



/***/ }),

/***/ "./src/app/admin/medicine/package-report/package-report.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/admin/medicine/package-report/package-report.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    \n  }\n\n \n#heading{\n    background-color: rgb(18, 50,190); \n    color:white;\n}\n\n \n.pd{\n  background: navy;\n}\n\n \ntd a {\n  display:block;\n  width:100%;\n  background-clip: padding-box; \n  border-radius: 5px;\n  background-color: blue;\n  color: white;\n  border: 2px solid green;\n}\n\n \na {\n  text-decoration: none !important;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWVkaWNpbmUvcGFja2FnZS1yZXBvcnQvcGFja2FnZS1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7O0VBRWI7OztBQUdGO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZjs7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOzs7QUFDQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21lZGljaW5lL3BhY2thZ2UtcmVwb3J0L3BhY2thZ2UtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gIH1cblxuIFxuI2hlYWRpbmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCA1MCwxOTApOyBcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5wZHtcbiAgYmFja2dyb3VuZDogbmF2eTtcbn1cbnRkIGEge1xuICBkaXNwbGF5OmJsb2NrO1xuICB3aWR0aDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyBcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/medicine/package-report/package-report.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/medicine/package-report/package-report.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<div class=\"container\">\n  <div class=\"table-responsive\">\n    <br>\n    <table class=\"table table-striped table-dark table-hover text-center\">\n\n      <thead class=\"theme-table\">\n\t\t<tr>\n\t\t<th colspan=\"3\"></th>\n\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t</tr>\n        <tr>\n          <th> Serial Number</th>\n          <th>Location</th>\n          <th>Level</th>\n          <th>Time</th>\n          \n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let x of list; let i = index\">\n          <td><a [routerLink]=\"['/package/details',x.serial]\" style=\"color:blue\">{{x.serial}}</a></td>\n          <td>{{x.location}}</td>\n          <td>{{x.level}}</td>\n          <td>{{x.time | date: 'dd/MM/yyyy h:mm:ss a'}}</td>\n        </tr>\n\n      </tbody>\n      <tfoot class=\"theme-table\">\n        \t\t<tr>\n\t\t<th colspan=\"3\"></th>\n\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t</tr>\n\n      </tfoot>\n    </table>\n  </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Package Transportation</h5>\n\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Serial</label>\n              <input #serial type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Wholesailer</label>\n              <select [(ngModel)]=\"wId1\" class=\"form-control\">\n                <option *ngFor=\"let wid of wlist\" [value]=\"wid.publicKey\">{{wid.firstName}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Transporter</label>\n              <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" #completeModal data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/medicine/package-report/package-report.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/medicine/package-report/package-report.component.ts ***!
  \***************************************************************************/
/*! exports provided: PackageReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageReportComponent", function() { return PackageReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _transection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transection */ "./src/app/admin/medicine/package-report/transection.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular5-csv/dist/Angular5-csv */ "./node_modules/angular5-csv/dist/Angular5-csv.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_6__);



// import { Medicine } from '../medicine-create/addmedicine';




var PackageReportComponent = /** @class */ (function () {
    function PackageReportComponent(http, http1, router) {
        this.http = http;
        this.http1 = http1;
        this.router = router;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.levelvalue = "";
        this.wlist = [];
        this.tlist = [];
        this.wid1 = '';
        this.tid1 = '';
        this.list = [];
        this.meds = [];
        this.transection = _transection__WEBPACK_IMPORTED_MODULE_3__["Transection"];
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.http.blockchainUrl;
    }
    PackageReportComponent.prototype.ngOnInit = function () {
        this.packagelist();
        this.allWholesaler();
        this.allTransporter();
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.myrole = localStorage.getItem("role");
        this.userId = localStorage.getItem("userId");
        console.log("User Idhhhhhhh", this.userId);
        console.log(this.myrole);
    };
    PackageReportComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    PackageReportComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    PackageReportComponent.prototype.serialId = function (serialId, level) {
        this.serialvalue = serialId;
        this.levelvalue = level;
    };
    PackageReportComponent.prototype.packagelist = function () {
        var _this = this;
        this.myrole = localStorage.getItem("role");
        if (this.myrole == 1) {
            return this.http.getPackageList().subscribe(function (data) {
                _this.list = data;
                console.log("All Package", _this.list);
            });
        }
        else {
            return this.http.getPackageUserId().subscribe(function (data) {
                console.log(data);
                _this.list = data;
                console.log("user Package", _this.list);
            });
        }
    };
    PackageReportComponent.prototype.deletePackage = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete')) {
            this.http.deletePackage(id).subscribe(function (res) {
                _this.packagelist();
            });
        }
    };
    PackageReportComponent.prototype.allWholesaler = function () {
        var _this = this;
        return this.http.getallWholesalerUser().subscribe(function (data) {
            _this.wlist = data;
            console.log(_this.wlist);
        });
    };
    PackageReportComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.http.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    PackageReportComponent.prototype.exporttocsv = function () {
        var data = [];
        var datarow = {};
        if (Array.isArray(this.list))
            this.meds = this.list;
        else
            this.meds = this.list.split(',');
        for (var i = 0; i <= this.meds.length; i++) {
            console.log("meds==" + this.meds[i]);
            if (typeof this.meds[i] != "undefined") {
                datarow = {
                    serial: this.meds[i].serial,
                    location: this.meds[i].location,
                    level: this.meds[i].level,
                    time: this.meds[i].time,
                };
                data.push(datarow);
            }
        }
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            headers: ["Serial Number", "Location", "Level", "Date/Time"]
        };
        new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_6__["Angular5Csv"](data, 'Report1', options);
        return true;
    };
    PackageReportComponent.prototype.mTransection = function (serial, wholesalerId, transpoterId) {
        var _this = this;
        var that = this;
        console.log(serial, wholesalerId, transpoterId);
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        this.transection = new _transection__WEBPACK_IMPORTED_MODULE_3__["Transection"](serial, wholesalerId, transpoterId);
        this.base = this.http.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
            var el = _this.completeModal.nativeElement;
            el.click();
        });
        // const Metadata = {
        //   "action": "sendToWholesaler",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "wholesaler": {
        //       "address": wholesalerId,
        //       "comment": "In Transaction"
        //     },
        //     "transporterid": transpoterId,
        // "level":this.levelvalue
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http1.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.http.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       console.log(JSON.parse);
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.transection = new Transection(serial, wholesalerId, transpoterId);
        //         this.base = this.http.medicineTransection(this.transection);
        //         this.call = this.base.subscribe(
        //           data => {
        //             alert('Request Accepted');
        //             let el: HTMLElement = this.completeModal.nativeElement;
        //             el.click();
        //           });
        //       }
        //       else {
        //         alert('Request Rejected');
        //         let el: HTMLElement = this.completeModal.nativeElement;
        //         el.click();
        //       }
        //     } else {
        //       that.http1.get(this.blockchainUrl+"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.http.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);
        //           console.log('json value2', this.status.data[0].status);
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.base = this.http.medicineTransection(this.transection);
        //             this.call = this.base.subscribe(
        //               data => {
        //                 alert('Request Accepted');
        //                 let el: HTMLElement = this.completeModal.nativeElement;
        //                 el.click();
        //               });
        //           }
        //           else {
        //             alert('Request Rejected');
        //             let el: HTMLElement = this.completeModal.nativeElement;
        //             el.click();
        //           }
        //         }
        //       })
        //     }
        //     // }).catch(function (err) {
        //     //   console.log(err.message);
        //   });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PackageReportComponent.prototype, "completeModal", void 0);
    PackageReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-package-report',
            template: __webpack_require__(/*! ./package-report.component.html */ "./src/app/admin/medicine/package-report/package-report.component.html"),
            styles: [__webpack_require__(/*! ./package-report.component.css */ "./src/app/admin/medicine/package-report/package-report.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PackageReportComponent);
    return PackageReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/medicine/package-report/transection.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/medicine/package-report/transection.ts ***!
  \**************************************************************/
/*! exports provided: Transection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transection", function() { return Transection; });
var Transection = /** @class */ (function () {
    function Transection(serial, wholesalerId, transporterId) {
        this.serial = serial;
        this.wholesalerId = wholesalerId;
        this.transporterId = transporterId;
    }
    return Transection;
}());



/***/ }),

/***/ "./src/app/admin/notification/notification.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/notification/notification.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    background-color: white;\n\n  }\n\n \n#heading{\n    background-color: rgb(18, 50,190); \n    color:white;\n}\n\n \ntd {\n  background: none;\n  border-bottom-color: #b5b3b3;\n  border-color: #454d55 !important;\n  \n}\n\n \nth{\n  border: none !important;\n  background-color: #3d6d79; \n  color:White;\n  font-family: Muli,Helvetica Neue,Arial,sans-serif;\n  font-weight: 600;\n}\n\n \nbutton:hover{\n  border: 1px #454d55;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHVCQUF1Qjs7RUFFekI7OztBQUdGO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZjs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGdDQUFnQzs7QUFFbEM7OztBQUdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsaURBQWlEO0VBQ2pELGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxtQkFBbUI7O0FBRXJCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gIH1cblxuIFxuI2hlYWRpbmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCA1MCwxOTApOyBcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxudGQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjYjViM2IzO1xuICBib3JkZXItY29sb3I6ICM0NTRkNTUgIWltcG9ydGFudDtcbiAgXG59XG5cbiBcbnRoe1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNmQ3OTsgXG4gIGNvbG9yOldoaXRlO1xuICBmb250LWZhbWlseTogTXVsaSxIZWx2ZXRpY2EgTmV1ZSxBcmlhbCxzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5idXR0b246aG92ZXJ7XG4gIGJvcmRlcjogMXB4ICM0NTRkNTU7XG4gIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/notification/notification.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/notification/notification.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<div class=\"container\">\n  <div class=\"table-responsive\">\n    <br>\n    <table class=\"table table-striped table-hover text-center\">\n      <thead class=\"\">\n        <tr>\n          <th>Notification</th>\n          <th>Date</th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngIf=\"!loading && list && list.length===0\">\n          <tr>\n            <td colspan=\"3\"> \n              Notification not found\n            </td>\n          </tr>\n        </ng-container>\n        <ng-container *ngIf=\"!loading && list && list.length > 0\">\n          <tr *ngFor=\"let x of list; let i = index\">\n            <td style=\"width: 60%;\"><span>{{x.notification}}</span></td>\n            <td><span>{{x.edate | date: 'dd/MM/yyyy h:mm:ss a'}}</span></td>\n            <td><button type=\"button\" (click)=\"deleteNotification(x._id)\" class=\"btn btn-danger\">Delete</button></td>\n          </tr>\n        </ng-container>\n      </tbody>\n      <tfoot class=\"\">\n        <tr>\n          <th></th>\n          <th></th>\n          <th></th>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/notification/notification.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/notification/notification.component.ts ***!
  \**************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(http, http1, router) {
        this.http = http;
        this.http1 = http1;
        this.router = router;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.wlist = [];
        this.tlist = [];
        this.wid1 = '';
        this.tid1 = '';
        this.list = [];
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.user = [];
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.notification();
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.myrole = localStorage.getItem("role");
        this.userId = localStorage.getItem("userId");
        console.log("User Idhhhhhhh", this.userId);
        console.log(this.myrole);
    };
    NotificationComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    NotificationComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    NotificationComponent.prototype.serialId = function (serialId) {
        this.serialvalue = serialId;
    };
    NotificationComponent.prototype.notification = function () {
        var _this = this;
        this.myrole = localStorage.getItem("role");
        this.loading = true;
        if (this.myrole == 1) {
            this.loading = false;
            this.http.getvalidUser().subscribe(function (data) {
                _this.user = data;
            });
            return this.http.getNotification().subscribe(function (data) {
                _this.list = data;
                console.log("All Notification", _this.list);
            });
        }
        else {
            this.loading = false;
            return this.http.getNotificationUserId().subscribe(function (data) {
                console.log(data);
                _this.list = data;
                console.log("user Notification", _this.list);
            });
        }
    };
    NotificationComponent.prototype.deleteNotification = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete')) {
            this.http.deleteNotification(id).subscribe(function (res) {
                _this.notification();
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NotificationComponent.prototype, "completeModal", void 0);
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-list',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/admin/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/admin/notification/notification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/admin/userrole/distributordashboard/distributordashboard.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/userrole/distributordashboard/distributordashboard.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    background-color: white;\n  }\n\n  \n\ntd {\n  background: none;\n  border-bottom-color: #b5b3b3;\n  border-color: #454d55 !important;\n}\n\n  \n\nth{\n  border: none !important;\n  background-color: #3d6d79; \n  color:White;\n  font-family: Muli,Helvetica Neue,Arial,sans-serif;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcnJvbGUvZGlzdHJpYnV0b3JkYXNoYm9hcmQvZGlzdHJpYnV0b3JkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7RUFDekI7Ozs7QUFJRjtFQUNFLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0FBQ2xDOzs7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpREFBaUQ7RUFDakQsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdXNlcnJvbGUvZGlzdHJpYnV0b3JkYXNoYm9hcmQvZGlzdHJpYnV0b3JkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIFxuXG50ZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNiNWIzYjM7XG4gIGJvcmRlci1jb2xvcjogIzQ1NGQ1NSAhaW1wb3J0YW50O1xufVxuXG4gXG50aHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDZkNzk7IFxuICBjb2xvcjpXaGl0ZTtcbiAgZm9udC1mYW1pbHk6IE11bGksSGVsdmV0aWNhIE5ldWUsQXJpYWwsc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/userrole/distributordashboard/distributordashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/userrole/distributordashboard/distributordashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\"> \n  <h2 class=\"text-center\">List of Distributors</h2>\n  <div class=\"table-responsive\">\n  <table  class=\"table table-striped table-hover text-center\">\n  \t<thead class=\"theme-table\">\n      \n          <tr>\n              <th>User Name</th>\n              <th>Mobile No.</th>\n              <th>Email</th>\n              <th>Role</th>\n\t\t\t  \n              \n              \n          </tr>\n     </thead> \n  \t <tbody>\n  \t \t<tr *ngFor=\"let distdata of dlist\" >\n    \t\n        <td>{{distdata.firstName}} {{distdata.lastName}}</td>\n        <td>{{distdata.mobileNo}}</td>\n        <td>{{distdata.email}}</td>\n        <td>{{distdata.role}}</td>       \n        \n   \t\t </tr>\n\n   \t\t\n\n    \n  </tbody>\n   <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th></tr></tfoot>\n </table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/userrole/distributordashboard/distributordashboard.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/userrole/distributordashboard/distributordashboard.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DistributordashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributordashboardComponent", function() { return DistributordashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");



var DistributordashboardComponent = /** @class */ (function () {
    function DistributordashboardComponent(httpuser) {
        this.httpuser = httpuser;
        this.dlist = [];
    }
    DistributordashboardComponent.prototype.ngOnInit = function () {
        this.allDistributer();
    };
    DistributordashboardComponent.prototype.allDistributer = function () {
        var _this = this;
        return this.httpuser.getallDistributerUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    DistributordashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distributordashboard',
            template: __webpack_require__(/*! ./distributordashboard.component.html */ "./src/app/admin/userrole/distributordashboard/distributordashboard.component.html"),
            styles: [__webpack_require__(/*! ./distributordashboard.component.css */ "./src/app/admin/userrole/distributordashboard/distributordashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DistributordashboardComponent);
    return DistributordashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/userrole/manufacturedashboard/manufacturedashboard.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/userrole/manufacturedashboard/manufacturedashboard.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    background-color: white;\n  }\n\n  \n\ntd {\n  background: none;\n  border-bottom-color: #b5b3b3;\n  border-color: #454d55 !important;\n}\n\n  \n\nth{\n  border: none !important;\n  background-color: #3d6d79; \n  color:White;\n  font-family: Muli,Helvetica Neue,Arial,sans-serif;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcnJvbGUvbWFudWZhY3R1cmVkYXNoYm9hcmQvbWFudWZhY3R1cmVkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7RUFDekI7Ozs7QUFJRjtFQUNFLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0FBQ2xDOzs7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpREFBaUQ7RUFDakQsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdXNlcnJvbGUvbWFudWZhY3R1cmVkYXNoYm9hcmQvbWFudWZhY3R1cmVkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIFxuXG50ZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNiNWIzYjM7XG4gIGJvcmRlci1jb2xvcjogIzQ1NGQ1NSAhaW1wb3J0YW50O1xufVxuXG4gXG50aHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDZkNzk7IFxuICBjb2xvcjpXaGl0ZTtcbiAgZm9udC1mYW1pbHk6IE11bGksSGVsdmV0aWNhIE5ldWUsQXJpYWwsc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/userrole/manufacturedashboard/manufacturedashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/userrole/manufacturedashboard/manufacturedashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<div class=\"container\"> \n    <h2 class=\"text-center\">List of Manufactures</h2>\n    <div class=\"table-responsive\">\n    <table  class=\"table table-striped table-hover text-center\">\n        <thead class=\"theme-table\">\n            <tr>\n                <th>User Name</th>\n                <th>Mobile No.</th>\n                <th>Email</th>\n                <th>Role</th>\n            </tr>\n       </thead> \n         <tbody>\n             <tr *ngFor=\"let distdata of mlist\" >\n                <td>{{distdata.firstName}} {{distdata.lastName}}</td>\n                <td>{{distdata.mobileNo}}</td>\n                <td>{{distdata.email}}</td>\n                <td>{{distdata.role}}</td>       \n              </tr>\n    </tbody>\n     <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th></tr></tfoot>\n   </table>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin/userrole/manufacturedashboard/manufacturedashboard.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/userrole/manufacturedashboard/manufacturedashboard.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ManufacturedashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturedashboardComponent", function() { return ManufacturedashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");



var ManufacturedashboardComponent = /** @class */ (function () {
    function ManufacturedashboardComponent(httpuser) {
        this.httpuser = httpuser;
        this.mlist = [];
    }
    ManufacturedashboardComponent.prototype.ngOnInit = function () {
        this.allManufacture();
    };
    ManufacturedashboardComponent.prototype.allManufacture = function () {
        var _this = this;
        return this.httpuser.getallManufactureUser().subscribe(function (data) {
            _this.mlist = data;
            console.log(_this.mlist);
        });
    };
    ManufacturedashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manufacturedashboard',
            template: __webpack_require__(/*! ./manufacturedashboard.component.html */ "./src/app/admin/userrole/manufacturedashboard/manufacturedashboard.component.html"),
            styles: [__webpack_require__(/*! ./manufacturedashboard.component.css */ "./src/app/admin/userrole/manufacturedashboard/manufacturedashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ManufacturedashboardComponent);
    return ManufacturedashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/userrole/pharmadashboard/pharmadashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/userrole/pharmadashboard/pharmadashboard.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    background-color: white;\n  }\n\n  \n\ntd {\n  background: none;\n  border-bottom-color: #b5b3b3;\n  border-color: #454d55 !important;\n}\n\n  \n\nth{\n  border: none !important;\n  background-color: #3d6d79; \n  color:White;\n  font-family: Muli,Helvetica Neue,Arial,sans-serif;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcnJvbGUvcGhhcm1hZGFzaGJvYXJkL3BoYXJtYWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtFQUN6Qjs7OztBQUlGO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixnQ0FBZ0M7QUFDbEM7Ozs7QUFHQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlEQUFpRDtFQUNqRCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi91c2Vycm9sZS9waGFybWFkYXNoYm9hcmQvcGhhcm1hZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICBcblxudGQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjYjViM2IzO1xuICBib3JkZXItY29sb3I6ICM0NTRkNTUgIWltcG9ydGFudDtcbn1cblxuIFxudGh7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q2ZDc5OyBcbiAgY29sb3I6V2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBNdWxpLEhlbHZldGljYSBOZXVlLEFyaWFsLHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/userrole/pharmadashboard/pharmadashboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/userrole/pharmadashboard/pharmadashboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<div class=\"container\"> \n  <h2 class=\"text-center\">List of Pharmas</h2>\n  <div class=\"table-responsive\">\n  <table  class=\"table table-striped table-hover text-center\">\n  \t<thead class=\"bg-success\">\n      \n          <tr>\n              <th>User Name</th>\n              <th>Mobile No.</th>\n              <th>Email</th>\n              <th>Role</th>\n\t\t\t  \n              \n              \n          </tr>\n     </thead> \n  \t <tbody>\n  \t \t<tr *ngFor=\"let distdata of dlist\" >\n    \t\n        <td>{{distdata.firstName}} {{distdata.lastName}}</td>\n        <td>{{distdata.mobileNo}}</td>\n        <td>{{distdata.email}}</td>\n        <td>{{distdata.role}}</td>       \n          \n   \t\t </tr>\n\n   \t\t\n\n    \n  </tbody>\n   <tfoot class=\"bg-success\"><tr><th></th><th></th><th></th><th></th></tr></tfoot>\n </table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/userrole/pharmadashboard/pharmadashboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/userrole/pharmadashboard/pharmadashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PharmadashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmadashboardComponent", function() { return PharmadashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");



var PharmadashboardComponent = /** @class */ (function () {
    function PharmadashboardComponent(httpuser) {
        this.httpuser = httpuser;
        this.dlist = [];
    }
    PharmadashboardComponent.prototype.ngOnInit = function () {
        this.allPharma();
    };
    PharmadashboardComponent.prototype.allPharma = function () {
        var _this = this;
        return this.httpuser.getallPharmaUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    PharmadashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pharmadashboard',
            template: __webpack_require__(/*! ./pharmadashboard.component.html */ "./src/app/admin/userrole/pharmadashboard/pharmadashboard.component.html"),
            styles: [__webpack_require__(/*! ./pharmadashboard.component.css */ "./src/app/admin/userrole/pharmadashboard/pharmadashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], PharmadashboardComponent);
    return PharmadashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/userrole/transporterdashboard/transporterdashboard.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/userrole/transporterdashboard/transporterdashboard.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    background-color: white;\n  }\n\n  \n\ntd {\n  background: none;\n  border-bottom-color: #b5b3b3;\n  border-color: #454d55 !important;\n}\n\n  \n\nth{\n  border: none !important;\n  background-color: #3d6d79; \n  color:White;\n  font-family: Muli,Helvetica Neue,Arial,sans-serif;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcnJvbGUvdHJhbnNwb3J0ZXJkYXNoYm9hcmQvdHJhbnNwb3J0ZXJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7RUFDekI7Ozs7QUFJRjtFQUNFLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0FBQ2xDOzs7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpREFBaUQ7RUFDakQsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdXNlcnJvbGUvdHJhbnNwb3J0ZXJkYXNoYm9hcmQvdHJhbnNwb3J0ZXJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIFxuXG50ZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNiNWIzYjM7XG4gIGJvcmRlci1jb2xvcjogIzQ1NGQ1NSAhaW1wb3J0YW50O1xufVxuXG4gXG50aHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDZkNzk7IFxuICBjb2xvcjpXaGl0ZTtcbiAgZm9udC1mYW1pbHk6IE11bGksSGVsdmV0aWNhIE5ldWUsQXJpYWwsc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/userrole/transporterdashboard/transporterdashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/userrole/transporterdashboard/transporterdashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\"> \n  <h2 class=\"text-center\">List of Transporters</h2>\n  <div class=\"table-responsive\">\n  <table  class=\"table table-striped table-hover text-center\">\n  \t<thead class=\"theme-table\">\n      \n          <tr>\n              <th>User Name</th>\n              <th>Mobile No.</th>\n              <th>Email</th>\n              <th>Role</th>\n\t\t\t  \n              \n              \n          </tr>\n     </thead> \n  \t <tbody>\n  \t \t<tr *ngFor=\"let distdata of tlist\" >\n    \t\n        <td>{{distdata.firstName}} {{distdata.lastName}}</td>\n        <td>{{distdata.mobileNo}}</td>\n        <td>{{distdata.email}}</td>\n        <td>{{distdata.role}}</td>       \n        \n   \t\t </tr>\n\n   \t\t\n\n    \n  </tbody>\n   <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th></tr></tfoot>\n </table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/userrole/transporterdashboard/transporterdashboard.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/userrole/transporterdashboard/transporterdashboard.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TransporterdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransporterdashboardComponent", function() { return TransporterdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");



var TransporterdashboardComponent = /** @class */ (function () {
    function TransporterdashboardComponent(httpuser) {
        this.httpuser = httpuser;
        this.tlist = [];
    }
    TransporterdashboardComponent.prototype.ngOnInit = function () {
        this.allTransporter();
    };
    TransporterdashboardComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    TransporterdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transporterdashboard',
            template: __webpack_require__(/*! ./transporterdashboard.component.html */ "./src/app/admin/userrole/transporterdashboard/transporterdashboard.component.html"),
            styles: [__webpack_require__(/*! ./transporterdashboard.component.css */ "./src/app/admin/userrole/transporterdashboard/transporterdashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TransporterdashboardComponent);
    return TransporterdashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/userrole/wholesalerdashboard/wholesalerdashboard.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/userrole/wholesalerdashboard/wholesalerdashboard.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    background-color: white;\n  }\n\n  \n\ntd {\n  background: none;\n  border-bottom-color: #b5b3b3;\n  border-color: #454d55 !important;\n  /* color: #3d6d79; */\n}\n\n  \n\nth{\n  border: none !important;\n  background-color: #3d6d79; \n  color:White;\n  font-family: Muli,Helvetica Neue,Arial,sans-serif;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcnJvbGUvd2hvbGVzYWxlcmRhc2hib2FyZC93aG9sZXNhbGVyZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCOzs7O0FBSUY7RUFDRSxnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyxvQkFBb0I7QUFDdEI7Ozs7QUFHQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlEQUFpRDtFQUNqRCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi91c2Vycm9sZS93aG9sZXNhbGVyZGFzaGJvYXJkL3dob2xlc2FsZXJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIFxuXG50ZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNiNWIzYjM7XG4gIGJvcmRlci1jb2xvcjogIzQ1NGQ1NSAhaW1wb3J0YW50O1xuICAvKiBjb2xvcjogIzNkNmQ3OTsgKi9cbn1cblxuIFxudGh7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q2ZDc5OyBcbiAgY29sb3I6V2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBNdWxpLEhlbHZldGljYSBOZXVlLEFyaWFsLHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/userrole/wholesalerdashboard/wholesalerdashboard.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/userrole/wholesalerdashboard/wholesalerdashboard.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n<div class=\"container\"> \n  <h2 class=\"text-center\">List of Wholesalers</h2>\n  <div class=\"table-responsive\">\n  <table  class=\"table table-striped table-hover text-center\">\n  \t<thead class=\"theme-table\">\n      \n          <tr>\n              <th>User Name</th>\n              <th>Mobile No.</th>\n              <th>Email</th>\n              <th>Role</th>\n\t\t\t  \n              \n              \n          </tr>\n     </thead> \n  \t <tbody>\n  \t \t<tr *ngFor=\"let distdata of wlist\" >\n    \t\n        <td>{{distdata.firstName}} {{distdata.lastName}}</td>\n        <td>{{distdata.mobileNo}}</td>\n        <td>{{distdata.email}}</td>\n        <td>{{distdata.role}}</td>       \n          \n   \t\t </tr>\n\n   \t\t\n\n    \n  </tbody>\n   <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th></tr></tfoot>\n </table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/userrole/wholesalerdashboard/wholesalerdashboard.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/userrole/wholesalerdashboard/wholesalerdashboard.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WholesalerdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WholesalerdashboardComponent", function() { return WholesalerdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");



var WholesalerdashboardComponent = /** @class */ (function () {
    function WholesalerdashboardComponent(httpuser) {
        this.httpuser = httpuser;
        this.wlist = [];
    }
    WholesalerdashboardComponent.prototype.ngOnInit = function () {
        this.allWholesaler();
    };
    WholesalerdashboardComponent.prototype.allWholesaler = function () {
        var _this = this;
        return this.httpuser.getallWholesalerUser().subscribe(function (data) {
            _this.wlist = data;
            console.log(_this.wlist);
        });
    };
    WholesalerdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wholesalerdashboard',
            template: __webpack_require__(/*! ./wholesalerdashboard.component.html */ "./src/app/admin/userrole/wholesalerdashboard/wholesalerdashboard.component.html"),
            styles: [__webpack_require__(/*! ./wholesalerdashboard.component.css */ "./src/app/admin/userrole/wholesalerdashboard/wholesalerdashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], WholesalerdashboardComponent);
    return WholesalerdashboardComponent;
}());



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
/* harmony import */ var _user_signup_activation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/signup/activation.component */ "./src/app/user/signup/activation.component.ts");
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_medicine_medicine_detail_medicine_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/medicine/medicine-detail/medicine-detail.component */ "./src/app/admin/medicine/medicine-detail/medicine-detail.component.ts");
/* harmony import */ var _admin_medicine_package_detail_package_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/medicine/package-detail/package-detail.component */ "./src/app/admin/medicine/package-detail/package-detail.component.ts");
/* harmony import */ var _admin_medicine_medicine_dashboard_medicine_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/medicine/medicine-dashboard/medicine-dashboard.component */ "./src/app/admin/medicine/medicine-dashboard/medicine-dashboard.component.ts");
/* harmony import */ var _admin_medicine_medicine_report_medicine_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/medicine/medicine-report/medicine-report.component */ "./src/app/admin/medicine/medicine-report/medicine-report.component.ts");
/* harmony import */ var _admin_agent_agent_create_agent_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/agent/agent-create/agent-create.component */ "./src/app/admin/agent/agent-create/agent-create.component.ts");
/* harmony import */ var _admin_medicine_medicine_list_medicine_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/medicine/medicine-list/medicine-list.component */ "./src/app/admin/medicine/medicine-list/medicine-list.component.ts");
/* harmony import */ var _admin_medicine_package_list_package_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/medicine/package-list/package-list.component */ "./src/app/admin/medicine/package-list/package-list.component.ts");
/* harmony import */ var _admin_medicine_package_report_package_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/medicine/package-report/package-report.component */ "./src/app/admin/medicine/package-report/package-report.component.ts");
/* harmony import */ var _admin_notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/notification/notification.component */ "./src/app/admin/notification/notification.component.ts");
/* harmony import */ var _admin_medicine_medicine_create_medicine_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/medicine/medicine-create/medicine-create.component */ "./src/app/admin/medicine/medicine-create/medicine-create.component.ts");
/* harmony import */ var _admin_medicine_package_create_package_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/medicine/package-create/package-create.component */ "./src/app/admin/medicine/package-create/package-create.component.ts");
/* harmony import */ var _admin_medicine_medicine_edit_medicine_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/medicine/medicine-edit/medicine-edit.component */ "./src/app/admin/medicine/medicine-edit/medicine-edit.component.ts");
/* harmony import */ var _admin_agent_agent_list_agent_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/agent/agent-list/agent-list.component */ "./src/app/admin/agent/agent-list/agent-list.component.ts");
/* harmony import */ var _admin_agent_agent_detail_agent_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/agent/agent-detail/agent-detail.component */ "./src/app/admin/agent/agent-detail/agent-detail.component.ts");
/* harmony import */ var _admin_agent_agent_edit_agent_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/agent/agent-edit/agent-edit.component */ "./src/app/admin/agent/agent-edit/agent-edit.component.ts");
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/profile/profile.component */ "./src/app/user/profile/profile.component.ts");
/* harmony import */ var _admin_dashboard_pharma_pharma_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/dashboard/pharma/pharma.component */ "./src/app/admin/dashboard/pharma/pharma.component.ts");
/* harmony import */ var _admin_dashboard_distrubuter_distrubuter_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/dashboard/distrubuter/distrubuter.component */ "./src/app/admin/dashboard/distrubuter/distrubuter.component.ts");
/* harmony import */ var _admin_dashboard_wholesaler_wholesaler_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/dashboard/wholesaler/wholesaler.component */ "./src/app/admin/dashboard/wholesaler/wholesaler.component.ts");
/* harmony import */ var _admin_dashboard_manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/dashboard/manufacturer/manufacturer.component */ "./src/app/admin/dashboard/manufacturer/manufacturer.component.ts");
/* harmony import */ var _admin_dashboard_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/dashboard/create-user/create-user.component */ "./src/app/admin/dashboard/create-user/create-user.component.ts");
/* harmony import */ var _admin_dashboard_packagetransporter_packagetransporter_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/dashboard/packagetransporter/packagetransporter.component */ "./src/app/admin/dashboard/packagetransporter/packagetransporter.component.ts");
/* harmony import */ var _admin_dashboard_transporter_transporter_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/dashboard/transporter/transporter.component */ "./src/app/admin/dashboard/transporter/transporter.component.ts");
/* harmony import */ var _send_sendwholesaler_sendwholesaler_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./send/sendwholesaler/sendwholesaler.component */ "./src/app/send/sendwholesaler/sendwholesaler.component.ts");
/* harmony import */ var _send_sendwholesalerreport_sendwholesalerreport_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./send/sendwholesalerreport/sendwholesalerreport.component */ "./src/app/send/sendwholesalerreport/sendwholesalerreport.component.ts");
/* harmony import */ var _send_senddistributor_senddistributor_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./send/senddistributor/senddistributor.component */ "./src/app/send/senddistributor/senddistributor.component.ts");
/* harmony import */ var _send_senddistributorreport_senddistributorreport_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./send/senddistributorreport/senddistributorreport.component */ "./src/app/send/senddistributorreport/senddistributorreport.component.ts");
/* harmony import */ var _send_recievepackagedistributor_recievepackagedistributor_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./send/recievepackagedistributor/recievepackagedistributor.component */ "./src/app/send/recievepackagedistributor/recievepackagedistributor.component.ts");
/* harmony import */ var _send_recievepackagedistributorreport_recievepackagedistributorreport_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./send/recievepackagedistributorreport/recievepackagedistributorreport.component */ "./src/app/send/recievepackagedistributorreport/recievepackagedistributorreport.component.ts");
/* harmony import */ var _send_recievepackagewholesaler_recievepackagewholesaler_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./send/recievepackagewholesaler/recievepackagewholesaler.component */ "./src/app/send/recievepackagewholesaler/recievepackagewholesaler.component.ts");
/* harmony import */ var _send_recievepackagewholesalerreport_recievepackagewholesalerreport_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./send/recievepackagewholesalerreport/recievepackagewholesalerreport.component */ "./src/app/send/recievepackagewholesalerreport/recievepackagewholesalerreport.component.ts");
/* harmony import */ var _send_recievepackagepharma_recievepackagepharma_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./send/recievepackagepharma/recievepackagepharma.component */ "./src/app/send/recievepackagepharma/recievepackagepharma.component.ts");
/* harmony import */ var _send_recievepackagepharmareport_recievepackagepharmareport_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./send/recievepackagepharmareport/recievepackagepharmareport.component */ "./src/app/send/recievepackagepharmareport/recievepackagepharmareport.component.ts");
/* harmony import */ var _send_sendpharma_sendpharma_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./send/sendpharma/sendpharma.component */ "./src/app/send/sendpharma/sendpharma.component.ts");
/* harmony import */ var _send_sendpharmareport_sendpharmareport_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./send/sendpharmareport/sendpharmareport.component */ "./src/app/send/sendpharmareport/sendpharmareport.component.ts");
/* harmony import */ var _admin_dashboard_qrcodescanner_pharmaqr_pharmaqr_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin/dashboard/qrcodescanner/pharmaqr/pharmaqr.component */ "./src/app/admin/dashboard/qrcodescanner/pharmaqr/pharmaqr.component.ts");
/* harmony import */ var _admin_dashboard_qrcodescanner_wholesalerqr_wholesalerqr_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/dashboard/qrcodescanner/wholesalerqr/wholesalerqr.component */ "./src/app/admin/dashboard/qrcodescanner/wholesalerqr/wholesalerqr.component.ts");
/* harmony import */ var _admin_dashboard_qrcodescanner_transporterqr_transporterqr_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/dashboard/qrcodescanner/transporterqr/transporterqr.component */ "./src/app/admin/dashboard/qrcodescanner/transporterqr/transporterqr.component.ts");
/* harmony import */ var _admin_userrole_distributordashboard_distributordashboard_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./admin/userrole/distributordashboard/distributordashboard.component */ "./src/app/admin/userrole/distributordashboard/distributordashboard.component.ts");
/* harmony import */ var _admin_userrole_manufacturedashboard_manufacturedashboard_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin/userrole/manufacturedashboard/manufacturedashboard.component */ "./src/app/admin/userrole/manufacturedashboard/manufacturedashboard.component.ts");
/* harmony import */ var _admin_userrole_pharmadashboard_pharmadashboard_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin/userrole/pharmadashboard/pharmadashboard.component */ "./src/app/admin/userrole/pharmadashboard/pharmadashboard.component.ts");
/* harmony import */ var _admin_userrole_transporterdashboard_transporterdashboard_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./admin/userrole/transporterdashboard/transporterdashboard.component */ "./src/app/admin/userrole/transporterdashboard/transporterdashboard.component.ts");
/* harmony import */ var _admin_userrole_wholesalerdashboard_wholesalerdashboard_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./admin/userrole/wholesalerdashboard/wholesalerdashboard.component */ "./src/app/admin/userrole/wholesalerdashboard/wholesalerdashboard.component.ts");
/* harmony import */ var _admin_medicine_medicine_details_dashboard_medicine_details_dashboard_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./admin/medicine/medicine-details-dashboard/medicine-details-dashboard.component */ "./src/app/admin/medicine/medicine-details-dashboard/medicine-details-dashboard.component.ts");
/* harmony import */ var _send_sendwholesalerdashboard_sendwholesalerdashboard_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./send/sendwholesalerdashboard/sendwholesalerdashboard.component */ "./src/app/send/sendwholesalerdashboard/sendwholesalerdashboard.component.ts");
/* harmony import */ var _send_senddistributordashboard_senddistributordashboard_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./send/senddistributordashboard/senddistributordashboard.component */ "./src/app/send/senddistributordashboard/senddistributordashboard.component.ts");



















































var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'login',
        loadChildren: './user/mylogin/mylogin.module#MyloginModule'
    },
    {
        path: 'signup',
        loadChildren: './user/signup/signup.module#SignupModule'
    },
    {
        path: 'emailverification/:id',
        component: _user_signup_activation_component__WEBPACK_IMPORTED_MODULE_3__["ActivationComponent"]
    },
    {
        path: 'profile',
        component: _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"]
    },
    {
        path: 'dashboard',
        component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    },
    { path: 'createuser', component: _admin_dashboard_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_25__["CreateUserComponent"] },
    { path: 'manufacture', component: _admin_dashboard_manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_24__["ManufacturerComponent"] },
    { path: 'wholesaler', component: _admin_dashboard_wholesaler_wholesaler_component__WEBPACK_IMPORTED_MODULE_23__["WholesalerComponent"] },
    { path: 'distrubuter', component: _admin_dashboard_distrubuter_distrubuter_component__WEBPACK_IMPORTED_MODULE_22__["DistrubuterComponent"] },
    { path: 'pharma', component: _admin_dashboard_pharma_pharma_component__WEBPACK_IMPORTED_MODULE_21__["PharmaComponent"] },
    { path: 'agent/request', component: _admin_agent_agent_create_agent_create_component__WEBPACK_IMPORTED_MODULE_9__["AgentCreateComponent"] },
    { path: 'agent/list', component: _admin_agent_agent_list_agent_list_component__WEBPACK_IMPORTED_MODULE_17__["AgentListComponent"] },
    { path: 'agent/detail', component: _admin_agent_agent_detail_agent_detail_component__WEBPACK_IMPORTED_MODULE_18__["AgentDetailComponent"] },
    { path: 'agent/edit', component: _admin_agent_agent_edit_agent_edit_component__WEBPACK_IMPORTED_MODULE_19__["AgentEditComponent"] },
    { path: 'medicine/details/:id', component: _admin_medicine_medicine_detail_medicine_detail_component__WEBPACK_IMPORTED_MODULE_5__["MedicineDetailComponent"] },
    { path: 'package/details/:id', component: _admin_medicine_package_detail_package_detail_component__WEBPACK_IMPORTED_MODULE_6__["PackageDetailComponent"] },
    { path: 'medicine/list', component: _admin_medicine_medicine_list_medicine_list_component__WEBPACK_IMPORTED_MODULE_10__["MedicineListComponent"] },
    { path: 'medicine/add', component: _admin_medicine_medicine_create_medicine_create_component__WEBPACK_IMPORTED_MODULE_14__["MedicineCreateComponent"] },
    { path: 'package/add', component: _admin_medicine_package_create_package_create_component__WEBPACK_IMPORTED_MODULE_15__["PackageCreateComponent"] },
    { path: 'package/list', component: _admin_medicine_package_list_package_list_component__WEBPACK_IMPORTED_MODULE_11__["PackageListComponent"] },
    { path: 'package/report', component: _admin_medicine_package_report_package_report_component__WEBPACK_IMPORTED_MODULE_12__["PackageReportComponent"] },
    { path: 'medicine/edit', component: _admin_medicine_medicine_edit_medicine_edit_component__WEBPACK_IMPORTED_MODULE_16__["MedicineEditComponent"] },
    { path: 'transporter', component: _admin_dashboard_transporter_transporter_component__WEBPACK_IMPORTED_MODULE_27__["TransporterComponent"] },
    { path: 'packagetransporter', component: _admin_dashboard_packagetransporter_packagetransporter_component__WEBPACK_IMPORTED_MODULE_26__["PackagetransporterComponent"] },
    { path: 'notification', component: _admin_notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"] },
    { path: 'sendwholesaler', component: _send_sendwholesaler_sendwholesaler_component__WEBPACK_IMPORTED_MODULE_28__["SendwholesalerComponent"] },
    { path: 'sendwholesalerreport', component: _send_sendwholesalerreport_sendwholesalerreport_component__WEBPACK_IMPORTED_MODULE_29__["SendwholesalerreportComponent"] },
    { path: 'recievepackagewholesaler', component: _send_recievepackagewholesaler_recievepackagewholesaler_component__WEBPACK_IMPORTED_MODULE_34__["RecievepackagewholesalerComponent"] },
    { path: 'recievepackagewholesalerreport', component: _send_recievepackagewholesalerreport_recievepackagewholesalerreport_component__WEBPACK_IMPORTED_MODULE_35__["RecievepackagewholesalerreportComponent"] },
    { path: 'senddistributor', component: _send_senddistributor_senddistributor_component__WEBPACK_IMPORTED_MODULE_30__["SenddistributorComponent"] },
    { path: 'senddistributorreport', component: _send_senddistributorreport_senddistributorreport_component__WEBPACK_IMPORTED_MODULE_31__["SenddistributorreportComponent"] },
    { path: 'recievepackage', component: _send_recievepackagedistributor_recievepackagedistributor_component__WEBPACK_IMPORTED_MODULE_32__["RecievepackagedistributorComponent"] },
    { path: 'recievepackagereport', component: _send_recievepackagedistributorreport_recievepackagedistributorreport_component__WEBPACK_IMPORTED_MODULE_33__["RecievepackagedistributorreportComponent"] },
    { path: 'sendpharma', component: _send_sendpharma_sendpharma_component__WEBPACK_IMPORTED_MODULE_38__["SendpharmaComponent"] },
    { path: 'sendpharmareport', component: _send_sendpharmareport_sendpharmareport_component__WEBPACK_IMPORTED_MODULE_39__["SendpharmareportComponent"] },
    { path: 'recievepackagepharma', component: _send_recievepackagepharma_recievepackagepharma_component__WEBPACK_IMPORTED_MODULE_36__["RecievepackagepharmaComponent"] },
    { path: 'recievepackagepharmareport', component: _send_recievepackagepharmareport_recievepackagepharmareport_component__WEBPACK_IMPORTED_MODULE_37__["RecievepackagepharmareportComponent"] },
    { path: 'pharmaqr', component: _admin_dashboard_qrcodescanner_pharmaqr_pharmaqr_component__WEBPACK_IMPORTED_MODULE_40__["PharmaqrComponent"] },
    {
        path: 'distributorqr',
        loadChildren: './admin/dashboard/qrcodescanner/distributorqr/distributorqr.module#DistributorqrModule'
    },
    { path: 'wholesalerqr/:id', component: _admin_dashboard_qrcodescanner_wholesalerqr_wholesalerqr_component__WEBPACK_IMPORTED_MODULE_41__["WholesalerqrComponent"] },
    { path: 'transporterqr', component: _admin_dashboard_qrcodescanner_transporterqr_transporterqr_component__WEBPACK_IMPORTED_MODULE_42__["TransporterqrComponent"] },
    { path: 'distributordashboard', component: _admin_userrole_distributordashboard_distributordashboard_component__WEBPACK_IMPORTED_MODULE_43__["DistributordashboardComponent"] },
    { path: 'manufacturedashboard', component: _admin_userrole_manufacturedashboard_manufacturedashboard_component__WEBPACK_IMPORTED_MODULE_44__["ManufacturedashboardComponent"] },
    { path: 'pharmadashboard', component: _admin_userrole_pharmadashboard_pharmadashboard_component__WEBPACK_IMPORTED_MODULE_45__["PharmadashboardComponent"] },
    { path: 'transporterdashboard', component: _admin_userrole_transporterdashboard_transporterdashboard_component__WEBPACK_IMPORTED_MODULE_46__["TransporterdashboardComponent"] },
    { path: 'wholesalerdashboard', component: _admin_userrole_wholesalerdashboard_wholesalerdashboard_component__WEBPACK_IMPORTED_MODULE_47__["WholesalerdashboardComponent"] },
    { path: 'medicinedashboard', component: _admin_medicine_medicine_dashboard_medicine_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["MedicineDashboardComponent"] },
    { path: 'medicinereport', component: _admin_medicine_medicine_report_medicine_report_component__WEBPACK_IMPORTED_MODULE_8__["MedicineReportComponent"] },
    { path: 'medicinedetailsdashboard/:id', component: _admin_medicine_medicine_details_dashboard_medicine_details_dashboard_component__WEBPACK_IMPORTED_MODULE_48__["MedicineDetailsDashboardComponent"] },
    { path: 'wholesalerdashboard1', component: _send_sendwholesalerdashboard_sendwholesalerdashboard_component__WEBPACK_IMPORTED_MODULE_49__["SendwholesalerdashboardComponent"] },
    { path: 'distributordashboard1', component: _send_senddistributordashboard_senddistributordashboard_component__WEBPACK_IMPORTED_MODULE_50__["SenddistributordashboardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

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
        this.title = 'erc1155-wallet';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_signup_activation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/signup/activation.component */ "./src/app/user/signup/activation.component.ts");
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_medicine_medicine_detail_medicine_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/medicine/medicine-detail/medicine-detail.component */ "./src/app/admin/medicine/medicine-detail/medicine-detail.component.ts");
/* harmony import */ var _admin_medicine_package_detail_package_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/medicine/package-detail/package-detail.component */ "./src/app/admin/medicine/package-detail/package-detail.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _admin_agent_agent_create_agent_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/agent/agent-create/agent-create.component */ "./src/app/admin/agent/agent-create/agent-create.component.ts");
/* harmony import */ var _admin_medicine_medicine_list_medicine_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/medicine/medicine-list/medicine-list.component */ "./src/app/admin/medicine/medicine-list/medicine-list.component.ts");
/* harmony import */ var _admin_medicine_package_list_package_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/medicine/package-list/package-list.component */ "./src/app/admin/medicine/package-list/package-list.component.ts");
/* harmony import */ var _admin_medicine_package_report_package_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/medicine/package-report/package-report.component */ "./src/app/admin/medicine/package-report/package-report.component.ts");
/* harmony import */ var _admin_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/notification/notification.component */ "./src/app/admin/notification/notification.component.ts");
/* harmony import */ var _admin_medicine_medicine_create_medicine_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/medicine/medicine-create/medicine-create.component */ "./src/app/admin/medicine/medicine-create/medicine-create.component.ts");
/* harmony import */ var _admin_medicine_package_create_package_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/medicine/package-create/package-create.component */ "./src/app/admin/medicine/package-create/package-create.component.ts");
/* harmony import */ var _admin_medicine_medicine_edit_medicine_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/medicine/medicine-edit/medicine-edit.component */ "./src/app/admin/medicine/medicine-edit/medicine-edit.component.ts");
/* harmony import */ var _admin_agent_agent_edit_agent_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/agent/agent-edit/agent-edit.component */ "./src/app/admin/agent/agent-edit/agent-edit.component.ts");
/* harmony import */ var _admin_agent_agent_list_agent_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/agent/agent-list/agent-list.component */ "./src/app/admin/agent/agent-list/agent-list.component.ts");
/* harmony import */ var _admin_agent_agent_detail_agent_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/agent/agent-detail/agent-detail.component */ "./src/app/admin/agent/agent-detail/agent-detail.component.ts");
/* harmony import */ var _admin_medicine_medicine_dashboard_medicine_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/medicine/medicine-dashboard/medicine-dashboard.component */ "./src/app/admin/medicine/medicine-dashboard/medicine-dashboard.component.ts");
/* harmony import */ var _admin_medicine_medicine_report_medicine_report_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/medicine/medicine-report/medicine-report.component */ "./src/app/admin/medicine/medicine-report/medicine-report.component.ts");
/* harmony import */ var _admin_medicine_medicine_details_dashboard_medicine_details_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/medicine/medicine-details-dashboard/medicine-details-dashboard.component */ "./src/app/admin/medicine/medicine-details-dashboard/medicine-details-dashboard.component.ts");
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user/profile/profile.component */ "./src/app/user/profile/profile.component.ts");
/* harmony import */ var _admin_dashboard_manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/dashboard/manufacturer/manufacturer.component */ "./src/app/admin/dashboard/manufacturer/manufacturer.component.ts");
/* harmony import */ var _admin_dashboard_wholesaler_wholesaler_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/dashboard/wholesaler/wholesaler.component */ "./src/app/admin/dashboard/wholesaler/wholesaler.component.ts");
/* harmony import */ var _admin_dashboard_distrubuter_distrubuter_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/dashboard/distrubuter/distrubuter.component */ "./src/app/admin/dashboard/distrubuter/distrubuter.component.ts");
/* harmony import */ var _admin_dashboard_pharma_pharma_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/dashboard/pharma/pharma.component */ "./src/app/admin/dashboard/pharma/pharma.component.ts");
/* harmony import */ var _admin_dashboard_packagetransporter_packagetransporter_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/dashboard/packagetransporter/packagetransporter.component */ "./src/app/admin/dashboard/packagetransporter/packagetransporter.component.ts");
/* harmony import */ var _admin_dashboard_transporter_transporter_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/dashboard/transporter/transporter.component */ "./src/app/admin/dashboard/transporter/transporter.component.ts");
/* harmony import */ var _admin_dashboard_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/dashboard/create-user/create-user.component */ "./src/app/admin/dashboard/create-user/create-user.component.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _qr_code_reader_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _send_sendwholesaler_sendwholesaler_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./send/sendwholesaler/sendwholesaler.component */ "./src/app/send/sendwholesaler/sendwholesaler.component.ts");
/* harmony import */ var _send_sendwholesalerreport_sendwholesalerreport_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./send/sendwholesalerreport/sendwholesalerreport.component */ "./src/app/send/sendwholesalerreport/sendwholesalerreport.component.ts");
/* harmony import */ var _send_senddistributor_senddistributor_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./send/senddistributor/senddistributor.component */ "./src/app/send/senddistributor/senddistributor.component.ts");
/* harmony import */ var _send_senddistributorreport_senddistributorreport_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./send/senddistributorreport/senddistributorreport.component */ "./src/app/send/senddistributorreport/senddistributorreport.component.ts");
/* harmony import */ var _send_recievepackagedistributor_recievepackagedistributor_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./send/recievepackagedistributor/recievepackagedistributor.component */ "./src/app/send/recievepackagedistributor/recievepackagedistributor.component.ts");
/* harmony import */ var _send_recievepackagedistributorreport_recievepackagedistributorreport_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./send/recievepackagedistributorreport/recievepackagedistributorreport.component */ "./src/app/send/recievepackagedistributorreport/recievepackagedistributorreport.component.ts");
/* harmony import */ var _send_recievepackagewholesaler_recievepackagewholesaler_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./send/recievepackagewholesaler/recievepackagewholesaler.component */ "./src/app/send/recievepackagewholesaler/recievepackagewholesaler.component.ts");
/* harmony import */ var _send_recievepackagewholesalerreport_recievepackagewholesalerreport_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./send/recievepackagewholesalerreport/recievepackagewholesalerreport.component */ "./src/app/send/recievepackagewholesalerreport/recievepackagewholesalerreport.component.ts");
/* harmony import */ var _send_recievepackagepharma_recievepackagepharma_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./send/recievepackagepharma/recievepackagepharma.component */ "./src/app/send/recievepackagepharma/recievepackagepharma.component.ts");
/* harmony import */ var _send_recievepackagepharmareport_recievepackagepharmareport_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./send/recievepackagepharmareport/recievepackagepharmareport.component */ "./src/app/send/recievepackagepharmareport/recievepackagepharmareport.component.ts");
/* harmony import */ var _send_sendpharma_sendpharma_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./send/sendpharma/sendpharma.component */ "./src/app/send/sendpharma/sendpharma.component.ts");
/* harmony import */ var _send_sendpharmareport_sendpharmareport_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./send/sendpharmareport/sendpharmareport.component */ "./src/app/send/sendpharmareport/sendpharmareport.component.ts");
/* harmony import */ var _admin_dashboard_qrcodescanner_pharmaqr_pharmaqr_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./admin/dashboard/qrcodescanner/pharmaqr/pharmaqr.component */ "./src/app/admin/dashboard/qrcodescanner/pharmaqr/pharmaqr.component.ts");
/* harmony import */ var _admin_dashboard_qrcodescanner_wholesalerqr_wholesalerqr_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./admin/dashboard/qrcodescanner/wholesalerqr/wholesalerqr.component */ "./src/app/admin/dashboard/qrcodescanner/wholesalerqr/wholesalerqr.component.ts");
/* harmony import */ var _admin_dashboard_qrcodescanner_transporterqr_transporterqr_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./admin/dashboard/qrcodescanner/transporterqr/transporterqr.component */ "./src/app/admin/dashboard/qrcodescanner/transporterqr/transporterqr.component.ts");
/* harmony import */ var _admin_userrole_distributordashboard_distributordashboard_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./admin/userrole/distributordashboard/distributordashboard.component */ "./src/app/admin/userrole/distributordashboard/distributordashboard.component.ts");
/* harmony import */ var _admin_userrole_manufacturedashboard_manufacturedashboard_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./admin/userrole/manufacturedashboard/manufacturedashboard.component */ "./src/app/admin/userrole/manufacturedashboard/manufacturedashboard.component.ts");
/* harmony import */ var _admin_userrole_pharmadashboard_pharmadashboard_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./admin/userrole/pharmadashboard/pharmadashboard.component */ "./src/app/admin/userrole/pharmadashboard/pharmadashboard.component.ts");
/* harmony import */ var _admin_userrole_transporterdashboard_transporterdashboard_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./admin/userrole/transporterdashboard/transporterdashboard.component */ "./src/app/admin/userrole/transporterdashboard/transporterdashboard.component.ts");
/* harmony import */ var _admin_userrole_wholesalerdashboard_wholesalerdashboard_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./admin/userrole/wholesalerdashboard/wholesalerdashboard.component */ "./src/app/admin/userrole/wholesalerdashboard/wholesalerdashboard.component.ts");
/* harmony import */ var _send_sendwholesalerdashboard_sendwholesalerdashboard_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./send/sendwholesalerdashboard/sendwholesalerdashboard.component */ "./src/app/send/sendwholesalerdashboard/sendwholesalerdashboard.component.ts");
/* harmony import */ var _send_senddistributordashboard_senddistributordashboard_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./send/senddistributordashboard/senddistributordashboard.component */ "./src/app/send/senddistributordashboard/senddistributordashboard.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _send_sendpharmadashboard_sendpharmadashboard_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./send/sendpharmadashboard/sendpharmadashboard.component */ "./src/app/send/sendpharmadashboard/sendpharmadashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");































































//import { ZXingScannerModule } from './admin/dashboard/modules/zxing-scanner/zxing-scanner.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _user_signup_activation_component__WEBPACK_IMPORTED_MODULE_7__["ActivationComponent"],
                _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"],
                _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _admin_dashboard_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_33__["CreateUserComponent"],
                _admin_dashboard_manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_27__["ManufacturerComponent"],
                _admin_dashboard_wholesaler_wholesaler_component__WEBPACK_IMPORTED_MODULE_28__["WholesalerComponent"],
                _admin_dashboard_distrubuter_distrubuter_component__WEBPACK_IMPORTED_MODULE_29__["DistrubuterComponent"],
                _admin_dashboard_pharma_pharma_component__WEBPACK_IMPORTED_MODULE_30__["PharmaComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _admin_agent_agent_create_agent_create_component__WEBPACK_IMPORTED_MODULE_12__["AgentCreateComponent"],
                _admin_agent_agent_edit_agent_edit_component__WEBPACK_IMPORTED_MODULE_20__["AgentEditComponent"],
                _admin_agent_agent_list_agent_list_component__WEBPACK_IMPORTED_MODULE_21__["AgentListComponent"],
                _admin_agent_agent_detail_agent_detail_component__WEBPACK_IMPORTED_MODULE_22__["AgentDetailComponent"],
                _admin_medicine_medicine_list_medicine_list_component__WEBPACK_IMPORTED_MODULE_13__["MedicineListComponent"],
                _admin_medicine_package_list_package_list_component__WEBPACK_IMPORTED_MODULE_14__["PackageListComponent"],
                _admin_medicine_package_report_package_report_component__WEBPACK_IMPORTED_MODULE_15__["PackageReportComponent"],
                _admin_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__["NotificationComponent"],
                _admin_medicine_medicine_create_medicine_create_component__WEBPACK_IMPORTED_MODULE_17__["MedicineCreateComponent"],
                _admin_medicine_package_create_package_create_component__WEBPACK_IMPORTED_MODULE_18__["PackageCreateComponent"],
                _admin_medicine_medicine_edit_medicine_edit_component__WEBPACK_IMPORTED_MODULE_19__["MedicineEditComponent"],
                _admin_medicine_medicine_detail_medicine_detail_component__WEBPACK_IMPORTED_MODULE_9__["MedicineDetailComponent"],
                _admin_medicine_package_detail_package_detail_component__WEBPACK_IMPORTED_MODULE_10__["PackageDetailComponent"],
                _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"],
                _admin_dashboard_transporter_transporter_component__WEBPACK_IMPORTED_MODULE_32__["TransporterComponent"],
                _admin_dashboard_packagetransporter_packagetransporter_component__WEBPACK_IMPORTED_MODULE_31__["PackagetransporterComponent"],
                _send_sendwholesaler_sendwholesaler_component__WEBPACK_IMPORTED_MODULE_36__["SendwholesalerComponent"],
                _send_sendwholesalerreport_sendwholesalerreport_component__WEBPACK_IMPORTED_MODULE_37__["SendwholesalerreportComponent"],
                _send_senddistributor_senddistributor_component__WEBPACK_IMPORTED_MODULE_38__["SenddistributorComponent"],
                _send_senddistributorreport_senddistributorreport_component__WEBPACK_IMPORTED_MODULE_39__["SenddistributorreportComponent"],
                _send_recievepackagedistributor_recievepackagedistributor_component__WEBPACK_IMPORTED_MODULE_40__["RecievepackagedistributorComponent"],
                _send_recievepackagedistributorreport_recievepackagedistributorreport_component__WEBPACK_IMPORTED_MODULE_41__["RecievepackagedistributorreportComponent"],
                _send_recievepackagewholesaler_recievepackagewholesaler_component__WEBPACK_IMPORTED_MODULE_42__["RecievepackagewholesalerComponent"],
                _send_recievepackagewholesalerreport_recievepackagewholesalerreport_component__WEBPACK_IMPORTED_MODULE_43__["RecievepackagewholesalerreportComponent"],
                _send_recievepackagepharma_recievepackagepharma_component__WEBPACK_IMPORTED_MODULE_44__["RecievepackagepharmaComponent"],
                _send_recievepackagepharmareport_recievepackagepharmareport_component__WEBPACK_IMPORTED_MODULE_45__["RecievepackagepharmareportComponent"],
                _send_sendpharma_sendpharma_component__WEBPACK_IMPORTED_MODULE_46__["SendpharmaComponent"],
                _send_sendpharmareport_sendpharmareport_component__WEBPACK_IMPORTED_MODULE_47__["SendpharmareportComponent"],
                _admin_dashboard_qrcodescanner_pharmaqr_pharmaqr_component__WEBPACK_IMPORTED_MODULE_48__["PharmaqrComponent"],
                _admin_dashboard_qrcodescanner_wholesalerqr_wholesalerqr_component__WEBPACK_IMPORTED_MODULE_49__["WholesalerqrComponent"],
                _admin_dashboard_qrcodescanner_transporterqr_transporterqr_component__WEBPACK_IMPORTED_MODULE_50__["TransporterqrComponent"],
                _admin_userrole_distributordashboard_distributordashboard_component__WEBPACK_IMPORTED_MODULE_51__["DistributordashboardComponent"],
                _admin_userrole_manufacturedashboard_manufacturedashboard_component__WEBPACK_IMPORTED_MODULE_52__["ManufacturedashboardComponent"],
                _admin_userrole_pharmadashboard_pharmadashboard_component__WEBPACK_IMPORTED_MODULE_53__["PharmadashboardComponent"],
                _admin_userrole_transporterdashboard_transporterdashboard_component__WEBPACK_IMPORTED_MODULE_54__["TransporterdashboardComponent"],
                _admin_userrole_wholesalerdashboard_wholesalerdashboard_component__WEBPACK_IMPORTED_MODULE_55__["WholesalerdashboardComponent"],
                _admin_medicine_medicine_dashboard_medicine_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["MedicineDashboardComponent"],
                _admin_medicine_medicine_report_medicine_report_component__WEBPACK_IMPORTED_MODULE_24__["MedicineReportComponent"],
                _admin_medicine_medicine_details_dashboard_medicine_details_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["MedicineDetailsDashboardComponent"],
                _send_sendwholesalerdashboard_sendwholesalerdashboard_component__WEBPACK_IMPORTED_MODULE_56__["SendwholesalerdashboardComponent"],
                _send_senddistributordashboard_senddistributordashboard_component__WEBPACK_IMPORTED_MODULE_57__["SenddistributordashboardComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_58__["FooterComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_59__["NotFoundComponent"],
                _send_sendpharmadashboard_sendpharmadashboard_component__WEBPACK_IMPORTED_MODULE_60__["SendpharmadashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_34__["QRCodeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_61__["BrowserAnimationsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_62__["MatStepperModule"]
                //ZXingScannerModule.forRoot()
            ],
            exports: [],
            providers: [_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_35__["QrCodeReader"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Medicine</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/medicine\" routerLinkActive=\"active\" >View Medicine</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/agents\" routerLinkActive=\"active\">View Agents</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button routerLink=\"/login\" class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Login/Signup</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/qr-code-reader.service.ts":
/*!*******************************************!*\
  !*** ./src/app/qr-code-reader.service.ts ***!
  \*******************************************/
/*! exports provided: QrCodeReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrCodeReader", function() { return QrCodeReader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var QrCodeReader = /** @class */ (function () {
    function QrCodeReader() {
    }
    QrCodeReader.prototype.decode = function (file) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                var data = e.target.result;
                qrcode.callback = function (res) {
                    observer.next(res);
                    observer.complete();
                };
                qrcode.decode(data);
            };
        });
    };
    QrCodeReader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], QrCodeReader);
    return QrCodeReader;
}());



/***/ }),

/***/ "./src/app/send/recievepackagedistributor/recievepackagedistributor.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/send/recievepackagedistributor/recievepackagedistributor.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbmQvcmVjaWV2ZXBhY2thZ2VkaXN0cmlidXRvci9yZWNpZXZlcGFja2FnZWRpc3RyaWJ1dG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/send/recievepackagedistributor/recievepackagedistributor.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/send/recievepackagedistributor/recievepackagedistributor.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n\t<br>\n\t<br>\n\n\t<form>\n\t\n        <div class=\"row\"> \n          <div class=\"col\"><div class=\"form-group\">\n            <label>Packing Barcode</label>\n\t\t\t<input type=\"file\" style=\"margin-left:20px;\" accept=\"image/*\" (change)=\"onFileChange($event)\">\n            <input #br type=\"text\" value=\"{{barcodevalue}}\" class=\"form-control required\" >\n          </div>\n        </div>\n        \n            \n          </div>\n            <div class=\"row text-right\">\n             \t\t<div class=\"col\">\n             \t\t\t<div class=\"form-group\">\n                  \t\t\t<button type=\"button\" (click)=\"getByPackageId(br.value,4)\" class=\"btn btn-primary\">Accept</button>\n\t\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; &nbsp;\n                        <button type=\"button\" (click)=\"getByPackageId(br.value,5)\" class=\"btn btn-secondary\">Reject</button>\n                        &nbsp; &nbsp; &nbsp; &nbsp;\n                        <button type=\"reset\" (click)=\"getdetails(br.value,5)\" class=\"btn btn-primary\">Get Details</button>\n                \t\t</div>\n                </div>\n             </div>\n\t</form>\n\n\n  <div *ngIf=\"displayTable\" class=\"table-responsive\">\n    <br>\n    <table class=\"table table-striped table-dark table-hover text-center\">\n      \n        <thead class=\"theme-table\">\n            <tr>            \n              <th>Serial Number</th>\n              <th>Level</th>\n              <th>Location</th>   \n            </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><a [routerLink]=\"['/package/details',mlist[0].serial]\">{{mlist[0].serial}}</a></td>\n            <td>{{mlist[0].level}}</td>\n            <td>{{mlist[0].location}}</td>      \n          </tr>\n         \n        </tbody>\n        <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th><th></th></tr></tfoot>\n      </table>\n    </div>\n\n    <div  class=\"table-responsive\">\n      <br>\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n          <thead class=\"theme-table\">\n              <tr>            \n                  <th>Serial Number</th>\n                   <th>Level</th>\n\t\t\t\t\t<th>Location</th>  \n                  <th></th>             \n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of TMlist\">\n              <td><a [routerLink]=\"['/package/details',list.serial]\">{{list.serial}}</a></td>\n              <td>{{list.level}}</td>\n              <td>{{list.location}}</td>\n              <td><button type=\"button\"   (click)=\"serialId(list.serial,list.level)\"  class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Send to Pharma</button> &nbsp; &nbsp; &nbsp;  <button type=\"button\"   (click)=\"openpackage(list.PackageId,list.level)\"  class=\"btn btn-primary\" >Open Package</button></td>\n              </tr>\n           \n          </tbody>\n          <tfoot class=\"theme-table\"><tr><th></th>\n            <th></th>\n            <th></th>\n            <th></th>\n            <!-- <th></th>\n            <th></th> -->\n          </tr></tfoot>\n        </table>\n      </div>\n\n</div>\n\n\n   <!-- Modal -->\n   <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Medicine Transportation</h5>\n          \n        </div>\n        <div class=\"modal-body\">\n      \n      <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Serial</label>\n                <input #serial   type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n              </div></div>           \n          </div>   \n           <div class=\"row\">          \n                <div class=\"col\"><div class=\"form-group\">\n                  <label>DistributerId</label>\n           <select [(ngModel)]=\"wId1\" class=\"form-control\" >\n                <option    *ngFor=\"let wid of dlist\" [value]=\"wid.publicKey\">{{wid.firstName}}</option>\n                            </select>   \n                </div></div>\n            </div>       \n    <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>TransporterId</label>\n          <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option  *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n                            </select> \n              </div></div>           \n          </div> \t\t\n  \n            \n        </div>\n        <div class=\"modal-footer\"> \n        <button type=\"button\" class=\"btn btn-danger\" #completeModal  data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/send/recievepackagedistributor/recievepackagedistributor.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/send/recievepackagedistributor/recievepackagedistributor.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RecievepackagedistributorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecievepackagedistributorComponent", function() { return RecievepackagedistributorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/medicine/package-create/addpackage2 */ "./src/app/admin/medicine/package-create/addpackage2.ts");
/* harmony import */ var src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/medicine/medicine-list/transection */ "./src/app/admin/medicine/medicine-list/transection.ts");
/* harmony import */ var src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/admin/medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var RecievepackagedistributorComponent = /** @class */ (function () {
    function RecievepackagedistributorComponent(route, httpuser, qrReader, http) {
        this.route = route;
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.levelvalue = " ";
        this.transporter1 = src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__["Package2"];
        this.list = [];
        this.mlist = [];
        this.medlist = [];
        this.plist = [];
        this.dlist = [];
        this.tlist = [];
        this.TMlist = [];
        this.transection = src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    ;
    RecievepackagedistributorComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Recived to Distributer";
        this.packageStatus = "Recived to Distributer";
        this.myrole = localStorage.getItem("role");
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.transporterPackageId(this.mypublickey);
        this.allPharma();
        this.allTransporter();
    };
    RecievepackagedistributorComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    RecievepackagedistributorComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    RecievepackagedistributorComponent.prototype.serialId = function (serialId, level) {
        this.serialvalue = serialId;
        this.levelvalue = level;
    };
    RecievepackagedistributorComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    RecievepackagedistributorComponent.prototype.transporterPackageId = function (id) {
        var _this = this;
        return this.httpuser.transporterPackage(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log(_this.TMlist);
        });
    };
    RecievepackagedistributorComponent.prototype.getdetails = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            _this.route.navigate(['/package/details/' + _this.mlist[0].serial]);
        });
    };
    RecievepackagedistributorComponent.prototype.getByPackageId = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            _this.displayTable = true;
            if (statusid == 5)
                _this.packageStatus = "Rejected to Distributer";
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicines, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].level, _this.mlist[0].packages, _this.mlist[0].PackageId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.packageStatus);
            if (statusid == 5)
                alert("Package Returned ");
            else
                alert("Package piked ");
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            // const Metadata = {
            //   "action": "recieveFromWholesaler",
            //   "payloaddata": {
            //     "serialNumber": this.mlist[0].serial,
            //     "status": statusid,		  
            //     "comment": "Delivered",
            // "level":this.mlist[0].level
            //   },
            //   "private": this.privateKey,
            //   "public": this.mypublickey
            // }
            // const httpOptions = {
            //   headers: new HttpHeaders({
            //     'Content-Type': 'application/json'
            //   })
            // }
            // return this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
            //   (val) => {
            //     console.log("POST call successful value returned in body", val);
            //     this.blockchain = val;
            //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //       this.status = JSON.parse(this.blockchain.response.body);
            //       this.statusValue = this.status.data[0].status;
            //       this.itemId = this.status.data[0].id;
            // if (this.statusValue == 'COMMITTED') 
            // {
            // 	this.displayTable = true;
            // 	if(statusid == 5) this.packageStatus = "Rejected to Distributer";
            // 	this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
            // 	if(statusid == 5)
            // 		alert("Package Returned ");
            // 	else
            // 		alert("Package piked ");
            // }
            //       else 
            // {
            //         alert("Process not completed");
            //       }
            //     }
            //     else {
            //       that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //         this.blockchain2 = val
            //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //           this.status = JSON.parse(this.blockchain2.body);
            //           console.log('json value2', this.status.data[0].status);
            //           this.statusValue = this.status.data[0].status;
            //           this.itemId = this.status.data[0].id;
            //           if (this.statusValue == 'COMMITTED') {
            // 		if(statusid == 5) this.packageStatus = "Rejected to Distributer";
            //             this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
            //             if(statusid == 5)
            // 		alert("Package Returned ");
            // 	else
            // 		alert("Package picked");
            //           }
            //           else {
            //             alert('Request Rejected');
            //           }
            //         }
            //       })
            //     }
            //     // }).catch(function (err) {
            //     //   console.log(err.message);
            //   });
        });
    };
    RecievepackagedistributorComponent.prototype.allPharma = function () {
        var _this = this;
        return this.httpuser.getallPharmaUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    RecievepackagedistributorComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    RecievepackagedistributorComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k) {
        this.transporter1 = new src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__["Package2"](a, b, c, d, e, f, g, h, i, j, k);
        this.base = this.httpuser.packagetransporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    RecievepackagedistributorComponent.prototype.openpackage = function (id, level) {
        var _this = this;
        this.levelvalue = level;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            _this.displayTable = true;
            //this.openpackagecall(id,this.mypublickey);
            /*Transfer child packages to user account*/
            if (Array.isArray(_this.mlist[0].packages))
                var meds = _this.mlist[0].packages;
            else
                var meds = _this.mlist[0].packages.split(',');
            if (meds.length > 0) {
                for (var j = 0; j < meds.length; j++) {
                    _this.httpuser.getPackageStatus3(meds[j]).subscribe(function (pdata) {
                        _this.httpuser.getPackageId(id).subscribe(function (packagedata) {
                            _this.plist = packagedata;
                            _this.transporter(_this.plist[0].serial, _this.plist[0].medicines, _this.plist[0].barcode, _this.plist[0].location, _this.plist[0].level, _this.plist[0].packages, _this.plist[0].PackageId, _this.plist[0].role, _this.plist[0].time, _this.mypublickey, _this.packageStatus);
                        });
                        //this.getByPackageId(pdata.PackageId,'4');
                    });
                }
            }
            /*Transfer child medicines to user account*/
            if (Array.isArray(_this.mlist[0].medicines))
                var meds = _this.mlist[0].medicines;
            else
                var meds = _this.mlist[0].medicines.split(',');
            if (meds.length > 0) {
                for (var j = 0; j < meds.length; j++) {
                    _this.httpuser.getMedicineStatus3(meds[j]).subscribe(function (mdata) {
                        _this.httpuser.getMedicineId(id).subscribe(function (medicinedata) {
                            _this.medlist = medicinedata;
                            _this.medicineTransporter(_this.medlist[0].serial, _this.medlist[0].medicine, _this.medlist[0].barcode, _this.medlist[0].location, _this.medlist[0].weight, _this.medlist[0].Edate, _this.medlist[0].Mdate, _this.medlist[0].MedicineId, _this.medlist[0].role, _this.medlist[0].time, _this.mypublickey, _this.medicineStatus);
                        });
                        //this.medicinedetails.push(mdata);
                    });
                }
            }
            _this.httpuser.deletePackageTransport(id, _this.mypublickey).subscribe(function (res) {
                alert("Package Opened ");
            });
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            //  const Metadata = {
            //   "action": "openPackage",
            //   "payloaddata": {
            //       "serialNumber": this.mlist[0].serial,
            //       "userRole": this.myrole,
            //       "admin": false,
            // 	  "level":this.levelvalue
            //   },
            //   "private":this.privateKey,
            //   "public": this.mypublickey
            //     }	    
            // const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json'
            // })
            // }
            //     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
            //  (val) => {	
            //   console.log("POST call successful value returned in body", val);
            //   this.blockchain = val;
            //   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //     this.status = JSON.parse(this.blockchain.response.body);            
            //     this.statusValue = this.status.data[0].status;
            //     this.itemId = this.status.data[0].id;
            //     if (this.statusValue == 'COMMITTED') {   
            // 	   this.displayTable=true; 
            // 	  //this.openpackagecall(id,this.mypublickey);
            // 		/*Transfer child packages to user account*/
            // 			if(Array.isArray(this.mlist[0].packages))
            // 				var meds = this.mlist[0].packages;
            // 			else
            // 				var meds = this.mlist[0].packages.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getPackageStatus3(meds[j]).subscribe((pdata) =>{
            // 						  this.httpuser.getPackageId(id).subscribe(packagedata => {
            // 								this.plist=packagedata;
            // 								this.transporter(this.plist[0].serial,this.plist[0].medicines, this.plist[0].barcode, this.plist[0].location, this.plist[0].level, this.plist[0].packages, this.plist[0].PackageId, this.plist[0].role, this.plist[0].time, this.mypublickey,this.packageStatus);
            // 						});		
            // 						//this.getByPackageId(pdata.PackageId,'4');
            // 					});
            // 				}
            // 			}
            // 			/*Transfer child medicines to user account*/
            // 			if(Array.isArray(this.mlist[0].medicines))
            // 				var meds = this.mlist[0].medicines;
            // 			else
            // 				var meds = this.mlist[0].medicines.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getMedicineStatus3(meds[j]).subscribe((mdata) =>{
            // 							this.httpuser.getMedicineId(id).subscribe(medicinedata => {
            // 								this.medlist=medicinedata;
            // 								 this.medicineTransporter(this.medlist[0].serial,this.medlist[0].medicine,this.medlist[0].barcode,this.medlist[0].location,this.medlist[0].weight,this.medlist[0].Edate,this.medlist[0].Mdate,this.medlist[0].MedicineId,this.medlist[0].role,this.medlist[0].time,this.mypublickey,this.medicineStatus);
            // 						});
            // 							//this.medicinedetails.push(mdata);
            // 					});
            // 				}
            // 			}
            // 			this.httpuser.deletePackageTransport(id,this.mypublickey).subscribe(res => {
            // 				alert("Package Opened ");
            // 			 });
            // 			//alert("Package Opened ");
            //   }
            //   else{
            // 	  alert("Process not completed");
            //   }
            //   }
            //   else {
            //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //       this.blockchain2 =val
            //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //         this.status = JSON.parse(this.blockchain2.body);
            //         console.log('json value2', this.status.data[0].status);
            //         this.statusValue = this.status.data[0].status;
            //         this.itemId = this.status.data[0].id;
            //         if (this.statusValue == 'COMMITTED') {
            // 				/*Transfer child packages to user account*/
            // 			if(Array.isArray(this.mlist[0].packages))
            // 				var meds = this.mlist[0].packages;
            // 			else
            // 				var meds = this.mlist[0].packages.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getPackageStatus3(meds[j]).subscribe((pdata) =>{
            // 						  this.httpuser.getPackageId(id).subscribe(packagedata => {
            // 								this.plist=packagedata;
            // 								this.transporter(this.plist[0].serial,this.plist[0].medicines, this.plist[0].barcode, this.plist[0].location, this.plist[0].level, this.plist[0].packages, this.plist[0].PackageId, this.plist[0].role, this.plist[0].time, this.mypublickey,this.packageStatus);
            // 						});		
            // 						//this.getByPackageId(pdata.PackageId,'4');
            // 					});
            // 				}
            // 			}
            // 			/*Transfer child medicines to user account*/
            // 			if(Array.isArray(this.mlist[0].medicines))
            // 				var meds = this.mlist[0].medicines;
            // 			else
            // 				var meds = this.mlist[0].medicines.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getMedicineStatus3(meds[j]).subscribe((mdata) =>{
            // 							this.httpuser.getMedicineId(id).subscribe(medicinedata => {
            // 								this.medlist=medicinedata;
            // 								 this.medicineTransporter(this.medlist[0].serial,this.medlist[0].medicine,this.medlist[0].barcode,this.medlist[0].location,this.medlist[0].weight,this.medlist[0].Edate,this.medlist[0].Mdate,this.medlist[0].MedicineId,this.medlist[0].role,this.medlist[0].time,this.mypublickey,this.medicineStatus);
            // 						});
            // 							//this.medicinedetails.push(mdata);
            // 					});
            // 				}
            // 			}
            // 				this.httpuser.deletePackageTransport(id,this.mypublickey).subscribe(res => {
            // 				alert("Package Opened ");
            // 			 });
            //         }
            //         else {
            //           alert('Request Rejected');
            //         }
            //       }
            //     })
            //   }
            // // }).catch(function (err) {
            // //   console.log(err.message);
            // });
        });
    };
    RecievepackagedistributorComponent.prototype.medicineTransporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_7__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    RecievepackagedistributorComponent.prototype.mTransection = function (serial, wholesalerId, transpoterId) {
        var _this = this;
        var that = this;
        console.log("ID", wholesalerId);
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        this.transection = new src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"](serial, wholesalerId, transpoterId);
        this.base = this.httpuser.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
            var el = _this.completeModal.nativeElement;
            el.click();
        });
        // const Metadata = {
        //   "action": "sendToPharma",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "pharma": {
        //       "address": wholesalerId,
        //       "comment": "In Transaction"
        //     },
        //     "transporterid": transpoterId,
        // "level":this.levelvalue
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.transection = new Transection(serial, wholesalerId, transpoterId);
        //         this.base = this.httpuser.medicineTransection(this.transection);
        //         this.call = this.base.subscribe(data => {
        //           alert('Request Accepted');
        //           let el: HTMLElement = this.completeModal.nativeElement;
        //          el.click(); 
        //         });
        //       }
        //       else {
        //         alert('Request Rejected');
        //         let el: HTMLElement = this.completeModal.nativeElement;
        //          el.click(); 
        //       }
        //     } else {
        //       that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);
        //           console.log('json value2', this.status.data[0].status);
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.transection = new Transection(serial, wholesalerId, transpoterId);
        //             this.base = this.httpuser.medicineTransection(this.transection);
        //             this.call = this.base.subscribe(data => {
        //               alert('Request Accepted');
        //             });
        //           }
        //           else {
        //             alert('Request Rejected');
        //           }
        //         }
        //       })
        //     }
        //     // }).catch(function (err) {
        //     //   console.log(err.message);
        //   });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RecievepackagedistributorComponent.prototype, "completeModal", void 0);
    RecievepackagedistributorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recievepackagedistributor',
            template: __webpack_require__(/*! ./recievepackagedistributor.component.html */ "./src/app/send/recievepackagedistributor/recievepackagedistributor.component.html"),
            styles: [__webpack_require__(/*! ./recievepackagedistributor.component.css */ "./src/app/send/recievepackagedistributor/recievepackagedistributor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], RecievepackagedistributorComponent);
    return RecievepackagedistributorComponent;
}());



/***/ }),

/***/ "./src/app/send/recievepackagedistributorreport/recievepackagedistributorreport.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/send/recievepackagedistributorreport/recievepackagedistributorreport.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbmQvcmVjaWV2ZXBhY2thZ2VkaXN0cmlidXRvcnJlcG9ydC9yZWNpZXZlcGFja2FnZWRpc3RyaWJ1dG9ycmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/send/recievepackagedistributorreport/recievepackagedistributorreport.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/send/recievepackagedistributorreport/recievepackagedistributorreport.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n\t<br>\n\t<br>\n\n    <div  class=\"table-responsive\">\n      <br>\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n          <thead class=\"theme-table\">\n\t\t  \t\t  <tr>\n\t\t<th colspan=\"3\"></th>\n\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t</tr>\n              <tr>            \n                  <th>Serial Number</th>\n                   <th>Level</th>\n\t\t\t\t\t<th>Location</th>  \n                  <th>Date</th>             \n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of TMlist\">\n              <td><a [routerLink]=\"['/package/details',list.serial]\">{{list.serial}}</a></td>\n              <td>{{list.level}}</td>\n              <td>{{list.location}}</td>\n              <td>{{list.time | date: 'dd/MM/yyyy h:mm:ss a'}}</td>\n              </tr>\n           \n          </tbody>\n          <tfoot class=\"theme-table\">\t\t  <tr>\n\t\t<th colspan=\"3\"></th>\n\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t</tr></tfoot>\n        </table>\n      </div>\n\n</div>"

/***/ }),

/***/ "./src/app/send/recievepackagedistributorreport/recievepackagedistributorreport.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/send/recievepackagedistributorreport/recievepackagedistributorreport.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: RecievepackagedistributorreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecievepackagedistributorreportComponent", function() { return RecievepackagedistributorreportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/medicine/package-create/addpackage2 */ "./src/app/admin/medicine/package-create/addpackage2.ts");
/* harmony import */ var src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/medicine/medicine-list/transection */ "./src/app/admin/medicine/medicine-list/transection.ts");
/* harmony import */ var src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/admin/medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular5-csv/dist/Angular5-csv */ "./node_modules/angular5-csv/dist/Angular5-csv.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_8__);









var RecievepackagedistributorreportComponent = /** @class */ (function () {
    function RecievepackagedistributorreportComponent(httpuser, qrReader, http) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.levelvalue = " ";
        this.transporter1 = src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__["Package2"];
        this.list = [];
        this.mlist = [];
        this.medlist = [];
        this.plist = [];
        this.dlist = [];
        this.tlist = [];
        this.TMlist = [];
        this.meds = [];
        this.transection = src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    ;
    RecievepackagedistributorreportComponent.prototype.ngOnInit = function () {
        1;
        this.medicineStatus = "Recived to Distributer";
        this.packageStatus = "Recived to Distributer";
        this.myrole = localStorage.getItem("role");
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.transporterPackageId(this.mypublickey);
        this.allPharma();
        this.allTransporter();
    };
    RecievepackagedistributorreportComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    RecievepackagedistributorreportComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    RecievepackagedistributorreportComponent.prototype.serialId = function (serialId, level) {
        this.serialvalue = serialId;
        this.levelvalue = level;
    };
    RecievepackagedistributorreportComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    RecievepackagedistributorreportComponent.prototype.transporterPackageId = function (id) {
        var _this = this;
        return this.httpuser.transporterPackage(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log(_this.TMlist);
        });
    };
    RecievepackagedistributorreportComponent.prototype.getByPackageId = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            _this.displayTable = true;
            if (statusid == 5)
                _this.packageStatus = "Rejected to Distributer";
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicines, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].level, _this.mlist[0].packages, _this.mlist[0].PackageId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.packageStatus);
            if (statusid == 5)
                alert("Package Returned ");
            else
                alert("Package piked ");
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            // const Metadata = {
            //   "action": "recieveFromWholesaler",
            //   "payloaddata": {
            //     "serialNumber": this.mlist[0].serial,
            //     "status": statusid,		  
            //     "comment": "Delivered",
            // "level":this.mlist[0].level
            //   },
            //   "private": this.privateKey,
            //   "public": this.mypublickey
            // }
            // const httpOptions = {
            //   headers: new HttpHeaders({
            //     'Content-Type': 'application/json'
            //   })
            // }
            // return this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
            //   (val) => {
            //     console.log("POST call successful value returned in body", val);
            //     this.blockchain = val;
            //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //       this.status = JSON.parse(this.blockchain.response.body);
            //       this.statusValue = this.status.data[0].status;
            //       this.itemId = this.status.data[0].id;
            // if (this.statusValue == 'COMMITTED') 
            // {
            // 	this.displayTable = true;
            // 	if(statusid == 5) this.packageStatus = "Rejected to Distributer";
            // 	this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
            // 	if(statusid == 5)
            // 		alert("Package Returned ");
            // 	else
            // 		alert("Package piked ");
            // }
            //       else 
            // {
            //         alert("Process not completed");
            //       }
            //     }
            //     else {
            //       that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //         this.blockchain2 = val
            //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //           this.status = JSON.parse(this.blockchain2.body);
            //           console.log('json value2', this.status.data[0].status);
            //           this.statusValue = this.status.data[0].status;
            //           this.itemId = this.status.data[0].id;
            //           if (this.statusValue == 'COMMITTED') {
            // 		if(statusid == 5) this.packageStatus = "Rejected to Distributer";
            //             this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
            //             if(statusid == 5)
            // 		alert("Package Returned ");
            // 	else
            // 		alert("Package picked");
            //           }
            //           else {
            //             alert('Request Rejected');
            //           }
            //         }
            //       })
            //     }
            //     // }).catch(function (err) {
            //     //   console.log(err.message);
            //   });
        });
    };
    RecievepackagedistributorreportComponent.prototype.allPharma = function () {
        var _this = this;
        return this.httpuser.getallPharmaUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    RecievepackagedistributorreportComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    RecievepackagedistributorreportComponent.prototype.exporttocsv = function () {
        var data = [];
        var datarow = {};
        if (Array.isArray(this.TMlist))
            this.meds = this.TMlist;
        else
            this.meds = this.TMlist.split(',');
        for (var i = 0; i <= this.meds.length; i++) {
            console.log("meds==" + this.meds[i]);
            if (typeof this.meds[i] != "undefined") {
                datarow = {
                    serial: this.meds[i].serial,
                    location: this.meds[i].location,
                    level: this.meds[i].level,
                    time: this.meds[i].time,
                };
                data.push(datarow);
            }
        }
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            headers: ["Serial Number", "Location", "Level", "Date/Time"]
        };
        new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_8__["Angular5Csv"](data, 'Report1', options);
        return true;
    };
    RecievepackagedistributorreportComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k) {
        this.transporter1 = new src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__["Package2"](a, b, c, d, e, f, g, h, i, j, k);
        this.base = this.httpuser.packagetransporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    RecievepackagedistributorreportComponent.prototype.openpackage = function (id, level) {
        var _this = this;
        this.levelvalue = level;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            _this.displayTable = true;
            //this.openpackagecall(id,this.mypublickey);
            /*Transfer child packages to user account*/
            if (Array.isArray(_this.mlist[0].packages))
                var meds = _this.mlist[0].packages;
            else
                var meds = _this.mlist[0].packages.split(',');
            if (meds.length > 0) {
                for (var j = 0; j < meds.length; j++) {
                    _this.httpuser.getPackageStatus3(meds[j]).subscribe(function (pdata) {
                        _this.httpuser.getPackageId(id).subscribe(function (packagedata) {
                            _this.plist = packagedata;
                            _this.transporter(_this.plist[0].serial, _this.plist[0].medicines, _this.plist[0].barcode, _this.plist[0].location, _this.plist[0].level, _this.plist[0].packages, _this.plist[0].PackageId, _this.plist[0].role, _this.plist[0].time, _this.mypublickey, _this.packageStatus);
                        });
                        //this.getByPackageId(pdata.PackageId,'4');
                    });
                }
            }
            /*Transfer child medicines to user account*/
            if (Array.isArray(_this.mlist[0].medicines))
                var meds = _this.mlist[0].medicines;
            else
                var meds = _this.mlist[0].medicines.split(',');
            if (meds.length > 0) {
                for (var j = 0; j < meds.length; j++) {
                    _this.httpuser.getMedicineStatus3(meds[j]).subscribe(function (mdata) {
                        _this.httpuser.getMedicineId(id).subscribe(function (medicinedata) {
                            _this.medlist = medicinedata;
                            _this.medicineTransporter(_this.medlist[0].serial, _this.medlist[0].medicine, _this.medlist[0].barcode, _this.medlist[0].location, _this.medlist[0].weight, _this.medlist[0].Edate, _this.medlist[0].Mdate, _this.medlist[0].MedicineId, _this.medlist[0].role, _this.medlist[0].time, _this.mypublickey, _this.medicineStatus);
                        });
                        //this.medicinedetails.push(mdata);
                    });
                }
            }
            _this.httpuser.deletePackageTransport(id, _this.mypublickey).subscribe(function (res) {
                alert("Package Opened ");
            });
            //  const Metadata = {
            //   "action": "openPackage",
            //   "payloaddata": {
            //       "serialNumber": this.mlist[0].serial,
            //       "userRole": this.myrole,
            //       "admin": false,
            // 	  "level":this.levelvalue
            //   },
            //   "private":this.privateKey,
            //   "public": this.mypublickey
            //     }	    
            // const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json'
            // })
            // }
            //     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
            //  (val) => {	
            //   console.log("POST call successful value returned in body", val);
            //   this.blockchain = val;
            //   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //     this.status = JSON.parse(this.blockchain.response.body);            
            //     this.statusValue = this.status.data[0].status;
            //     this.itemId = this.status.data[0].id;
            //     if (this.statusValue == 'COMMITTED') {   
            // 	   this.displayTable=true; 
            // 	  //this.openpackagecall(id,this.mypublickey);
            // 		/*Transfer child packages to user account*/
            // 			if(Array.isArray(this.mlist[0].packages))
            // 				var meds = this.mlist[0].packages;
            // 			else
            // 				var meds = this.mlist[0].packages.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getPackageStatus3(meds[j]).subscribe((pdata) =>{
            // 						  this.httpuser.getPackageId(id).subscribe(packagedata => {
            // 								this.plist=packagedata;
            // 								this.transporter(this.plist[0].serial,this.plist[0].medicines, this.plist[0].barcode, this.plist[0].location, this.plist[0].level, this.plist[0].packages, this.plist[0].PackageId, this.plist[0].role, this.plist[0].time, this.mypublickey,this.packageStatus);
            // 						});		
            // 						//this.getByPackageId(pdata.PackageId,'4');
            // 					});
            // 				}
            // 			}
            // 			/*Transfer child medicines to user account*/
            // 			if(Array.isArray(this.mlist[0].medicines))
            // 				var meds = this.mlist[0].medicines;
            // 			else
            // 				var meds = this.mlist[0].medicines.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getMedicineStatus3(meds[j]).subscribe((mdata) =>{
            // 							this.httpuser.getMedicineId(id).subscribe(medicinedata => {
            // 								this.medlist=medicinedata;
            // 								 this.medicineTransporter(this.medlist[0].serial,this.medlist[0].medicine,this.medlist[0].barcode,this.medlist[0].location,this.medlist[0].weight,this.medlist[0].Edate,this.medlist[0].Mdate,this.medlist[0].MedicineId,this.medlist[0].role,this.medlist[0].time,this.mypublickey,this.medicineStatus);
            // 						});
            // 							//this.medicinedetails.push(mdata);
            // 					});
            // 				}
            // 			}
            // 			this.httpuser.deletePackageTransport(id,this.mypublickey).subscribe(res => {
            // 				alert("Package Opened ");
            // 			 });
            // 			//alert("Package Opened ");
            //   }
            //   else{
            // 	  alert("Process not completed");
            //   }
            //   }
            //   else {
            //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //       this.blockchain2 =val
            //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //         this.status = JSON.parse(this.blockchain2.body);
            //         console.log('json value2', this.status.data[0].status);
            //         this.statusValue = this.status.data[0].status;
            //         this.itemId = this.status.data[0].id;
            //         if (this.statusValue == 'COMMITTED') {
            // 				/*Transfer child packages to user account*/
            // 			if(Array.isArray(this.mlist[0].packages))
            // 				var meds = this.mlist[0].packages;
            // 			else
            // 				var meds = this.mlist[0].packages.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getPackageStatus3(meds[j]).subscribe((pdata) =>{
            // 						  this.httpuser.getPackageId(id).subscribe(packagedata => {
            // 								this.plist=packagedata;
            // 								this.transporter(this.plist[0].serial,this.plist[0].medicines, this.plist[0].barcode, this.plist[0].location, this.plist[0].level, this.plist[0].packages, this.plist[0].PackageId, this.plist[0].role, this.plist[0].time, this.mypublickey,this.packageStatus);
            // 						});		
            // 						//this.getByPackageId(pdata.PackageId,'4');
            // 					});
            // 				}
            // 			}
            // 			/*Transfer child medicines to user account*/
            // 			if(Array.isArray(this.mlist[0].medicines))
            // 				var meds = this.mlist[0].medicines;
            // 			else
            // 				var meds = this.mlist[0].medicines.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getMedicineStatus3(meds[j]).subscribe((mdata) =>{
            // 							this.httpuser.getMedicineId(id).subscribe(medicinedata => {
            // 								this.medlist=medicinedata;
            // 								 this.medicineTransporter(this.medlist[0].serial,this.medlist[0].medicine,this.medlist[0].barcode,this.medlist[0].location,this.medlist[0].weight,this.medlist[0].Edate,this.medlist[0].Mdate,this.medlist[0].MedicineId,this.medlist[0].role,this.medlist[0].time,this.mypublickey,this.medicineStatus);
            // 						});
            // 							//this.medicinedetails.push(mdata);
            // 					});
            // 				}
            // 			}
            // 				this.httpuser.deletePackageTransport(id,this.mypublickey).subscribe(res => {
            // 				alert("Package Opened ");
            // 			 });
            //         }
            //         else {
            //           alert('Request Rejected');
            //         }
            //       }
            //     })
            //   }
            // // }).catch(function (err) {
            // //   console.log(err.message);
            // });
        });
    };
    RecievepackagedistributorreportComponent.prototype.medicineTransporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_7__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    RecievepackagedistributorreportComponent.prototype.mTransection = function (serial, wholesalerId, transpoterId) {
        var _this = this;
        var that = this;
        console.log("ID", wholesalerId);
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        this.transection = new src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"](serial, wholesalerId, transpoterId);
        this.base = this.httpuser.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
            var el = _this.completeModal.nativeElement;
            el.click();
        });
        // const Metadata = {
        //   "action": "sendToPharma",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "pharma": {
        //       "address": wholesalerId,
        //       "comment": "In Transaction"
        //     },
        //     "transporterid": transpoterId,
        // "level":this.levelvalue
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.transection = new Transection(serial, wholesalerId, transpoterId);
        //         this.base = this.httpuser.medicineTransection(this.transection);
        //         this.call = this.base.subscribe(data => {
        //           alert('Request Accepted');
        //           let el: HTMLElement = this.completeModal.nativeElement;
        //          el.click(); 
        //         });
        //       }
        //       else {
        //         alert('Request Rejected');
        //         let el: HTMLElement = this.completeModal.nativeElement;
        //          el.click(); 
        //       }
        //     } else {
        //       that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);
        //           console.log('json value2', this.status.data[0].status);
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.transection = new Transection(serial, wholesalerId, transpoterId);
        //             this.base = this.httpuser.medicineTransection(this.transection);
        //             this.call = this.base.subscribe(data => {
        //               alert('Request Accepted');
        //             });
        //           }
        //           else {
        //             alert('Request Rejected');
        //           }
        //         }
        //       })
        //     }
        //     // }).catch(function (err) {
        //     //   console.log(err.message);
        //   });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RecievepackagedistributorreportComponent.prototype, "completeModal", void 0);
    RecievepackagedistributorreportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recievepackagedistributorreport',
            template: __webpack_require__(/*! ./recievepackagedistributorreport.component.html */ "./src/app/send/recievepackagedistributorreport/recievepackagedistributorreport.component.html"),
            styles: [__webpack_require__(/*! ./recievepackagedistributorreport.component.css */ "./src/app/send/recievepackagedistributorreport/recievepackagedistributorreport.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], RecievepackagedistributorreportComponent);
    return RecievepackagedistributorreportComponent;
}());



/***/ }),

/***/ "./src/app/send/recievepackagepharma/recievepackagepharma.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/send/recievepackagepharma/recievepackagepharma.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbmQvcmVjaWV2ZXBhY2thZ2VwaGFybWEvcmVjaWV2ZXBhY2thZ2VwaGFybWEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/send/recievepackagepharma/recievepackagepharma.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/send/recievepackagepharma/recievepackagepharma.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n\t<br>\n\t<br>\n\n\t<form>\n\t\n        <div class=\"row\"> \n          <div class=\"col\"><div class=\"form-group\">\n            <label>Packing Barcode</label>\n\t\t\t<input type=\"file\" style=\"margin-left:20px;\" accept=\"image/*\" (change)=\"onFileChange($event)\">\n            <input #br type=\"text\" value=\"{{barcodevalue}}\" class=\"form-control required\" >\n          </div>\n        </div>\n        \n            \n          </div>\n            <div class=\"row text-right\">\n             \t\t<div class=\"col\">\n             \t\t\t<div class=\"form-group\">\n                  \t\t\t\t<button type=\"reset\" (click)=\"getByPackageId(br.value,4)\" class=\"btn btn-primary\">Recieve</button>\n\t\t\t\t\t\t\t&nbsp; &nbsp;\n              <button type=\"reset\" (click)=\"getByPackageId(br.value,5)\" class=\"btn btn-secondary\">Reject</button>\n              &nbsp; &nbsp;\n              <button type=\"reset\" (click)=\"getdetails(br.value,5)\" class=\"btn btn-primary\">Get Details</button> \n                \t\t</div>\n                </div>\n             </div>\n\t</form>\n\n\n  <div *ngIf=\"displayTable\" class=\"table-responsive\">\n    <br>\n    <table class=\"table table-striped table-dark table-hover text-center\">\n      \n        <thead class=\"theme-table\">\n            <tr>            \n\t\t\t\t<th>Serial Number</th>\n\t\t\t\t<th>Level</th>\n\t\t\t\t<th>Location</th> \n              \n            </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><a [routerLink]=\"['/package/details',mlist[0].serial]\">{{mlist[0].serial}}</a></td>\n            <td>{{mlist[0].level}}</td>\n            <td>{{mlist[0].location}}</td>\n            </tr>\n         \n        </tbody>\n        <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th></tr></tfoot>\n      </table>\n    </div>\n\n    <div  class=\"table-responsive\">\n      <br>\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n          <thead class=\"theme-table\">\n              <tr>            \n\t\t\t\t<th>Serial Number</th>\n\t\t\t\t<th>Level</th>\n\t\t\t\t<th>Location</th> \n\t\t\t\t<th></th>\n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of TMlist\">\n              <td><a [routerLink]=\"['/package/details',list.serial]\">{{list.serial}}</a></td>\n              <td>{{list.level}}</td>\n              <td>{{list.location}}</td>       \n            <!-- <td><button type=\"button\"   (click)=\"serialId(list.serial)\"  class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Send to Customer</button></td> -->\n\t\t\t <td> <button type=\"button\"   (click)=\"openpackage(list.PackageId,list.level)\"  class=\"btn btn-primary\">Open Package</button></td>\n              </tr>\n           \n          </tbody>\n          <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th></tr></tfoot>\n        </table>\n      </div>\n    \n</div>\n\n\n   <!-- Modal -->\n   <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Package Transportation</h5>\n          \n        </div>\n        <div class=\"modal-body\">\n      \n      <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Serial</label>\n                <input #serial   type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n              </div></div>           \n          </div>   \n           <div class=\"row\">          \n                <div class=\"col\"><div class=\"form-group\">\n                  <label>PharmaId</label>\n           <select [(ngModel)]=\"wId1\" class=\"form-control\" >\n                <option    *ngFor=\"let wid of dlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n                            </select>   \n                </div></div>\n            </div>       \n    <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>TransporterId</label>\n          <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option  *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n                            </select> \n              </div></div>           \n          </div> \t\t\n  \n            \n        </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\"  data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/send/recievepackagepharma/recievepackagepharma.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/send/recievepackagepharma/recievepackagepharma.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RecievepackagepharmaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecievepackagepharmaComponent", function() { return RecievepackagepharmaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/medicine/package-create/addpackage2 */ "./src/app/admin/medicine/package-create/addpackage2.ts");
/* harmony import */ var src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/medicine/medicine-list/transection */ "./src/app/admin/medicine/medicine-list/transection.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/admin/medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");









var RecievepackagepharmaComponent = /** @class */ (function () {
    function RecievepackagepharmaComponent(route, httpuser, qrReader, http) {
        this.route = route;
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.levelvalue = " ";
        this.transporter1 = src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__["Package2"];
        this.list = [];
        this.mlist = [];
        this.medlist = [];
        this.plist = [];
        this.dlist = [];
        this.tlist = [];
        this.TMlist = [];
        this.transection = src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    RecievepackagepharmaComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Recived to Pharma";
        this.packageStatus = "Recived to Pharma";
        this.myrole = localStorage.getItem("role");
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.transporterPackageId(this.mypublickey);
        this.allPharma();
        this.allTransporter();
    };
    RecievepackagepharmaComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    RecievepackagepharmaComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    RecievepackagepharmaComponent.prototype.serialId = function (serialId, level) {
        this.serialvalue = serialId;
        this.levelvalue = level;
    };
    RecievepackagepharmaComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    RecievepackagepharmaComponent.prototype.transporterPackageId = function (id) {
        var _this = this;
        return this.httpuser.transporterPackage(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log(_this.TMlist);
        });
    };
    RecievepackagepharmaComponent.prototype.getdetails = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            _this.route.navigate(['/package/details/' + _this.mlist[0].serial]);
        });
    };
    RecievepackagepharmaComponent.prototype.getByPackageId = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            _this.displayTable = true;
            if (statusid == 5)
                _this.packageStatus = "Rejected from Distributer";
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicines, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].level, _this.mlist[0].packages, _this.mlist[0].PackageId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.packageStatus);
            if (statusid == 5)
                alert("Package Returned ");
            else
                alert("Package piked ");
            //  const Metadata = {
            //   "action": "recieveFromDistributer",
            //   "payloaddata": {
            //       "serialNumber": this.mlist[0].serial,
            //       "status": statusid,
            //       "comment": "Delivered",
            // 	  "level":this.mlist[0].level
            //   },
            //   "private":this.privateKey,
            //   "public": this.mypublickey
            //     }	    
            // const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json'
            // })
            // }
            //     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
            //  (val) => {	
            //   console.log("POST call successful value returned in body", val);
            //   this.blockchain = val;
            //   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //     this.status = JSON.parse(this.blockchain.response.body);            
            //     this.statusValue = this.status.data[0].status;
            //     this.itemId = this.status.data[0].id;
            //     if (this.statusValue == 'COMMITTED') {   
            //    this.displayTable=true; 
            //     if(statusid == 5) this.packageStatus = "Rejected from Distributer";
            // 		this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
            // 		if(statusid == 5)
            // 			alert("Package Returned ");
            // 		else
            // 			alert("Package piked ");
            //   }
            //   else{
            // 	  alert("Process not completed");
            //   }
            //   }
            //   else {
            //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //       this.blockchain2 =val
            //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //         this.status = JSON.parse(this.blockchain2.body);
            //         console.log('json value2', this.status.data[0].status);
            //         this.statusValue = this.status.data[0].status;
            //         this.itemId = this.status.data[0].id;
            //         if (this.statusValue == 'COMMITTED') {
            // 				if(statusid == 5) this.packageStatus = "Rejected to Distributer";
            //                   this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
            //                   if(statusid == 5)
            // 					alert("Package Returned ");
            // 				else
            // 					alert("Package picked");
            //         }
            //         else {
            //           alert('Request Rejected');
            //         }
            //       }
            //     })
            //   }
            // // }).catch(function (err) {
            // //   console.log(err.message);
            // });
        });
    };
    RecievepackagepharmaComponent.prototype.allPharma = function () {
        var _this = this;
        return this.httpuser.getallPharmaUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    RecievepackagepharmaComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    RecievepackagepharmaComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k) {
        this.transporter1 = new src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__["Package2"](a, b, c, d, e, f, g, h, i, j, k);
        this.base = this.httpuser.packagetransporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    RecievepackagepharmaComponent.prototype.openpackage = function (id, level) {
        var _this = this;
        this.levelvalue = level;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            _this.displayTable = true;
            //this.openpackagecall(id,this.mypublickey);
            /*Transfer child packages to user account*/
            if (Array.isArray(_this.mlist[0].packages))
                var meds = _this.mlist[0].packages;
            else
                var meds = _this.mlist[0].packages.split(',');
            if (meds.length > 0) {
                for (var j = 0; j < meds.length; j++) {
                    _this.httpuser.getPackageStatus3(meds[j]).subscribe(function (pdata) {
                        _this.httpuser.getPackageId(id).subscribe(function (packagedata) {
                            _this.plist = packagedata;
                            _this.transporter(_this.plist[0].serial, _this.plist[0].medicines, _this.plist[0].barcode, _this.plist[0].location, _this.plist[0].level, _this.plist[0].packages, _this.plist[0].PackageId, _this.plist[0].role, _this.plist[0].time, _this.mypublickey, _this.packageStatus);
                        });
                        //this.getByPackageId(pdata.PackageId,'4');
                    });
                }
            }
            /*Transfer child medicines to user account*/
            if (Array.isArray(_this.mlist[0].medicines))
                var meds = _this.mlist[0].medicines;
            else
                var meds = _this.mlist[0].medicines.split(',');
            if (meds.length > 0) {
                for (var j = 0; j < meds.length; j++) {
                    _this.httpuser.getMedicineStatus3(meds[j]).subscribe(function (mdata) {
                        _this.httpuser.getMedicineId(id).subscribe(function (medicinedata) {
                            _this.medlist = medicinedata;
                            _this.medicineTransporter(_this.medlist[0].serial, _this.medlist[0].medicine, _this.medlist[0].barcode, _this.medlist[0].location, _this.medlist[0].weight, _this.medlist[0].Edate, _this.medlist[0].Mdate, _this.medlist[0].MedicineId, _this.medlist[0].role, _this.medlist[0].time, _this.mypublickey, _this.medicineStatus);
                        });
                        //this.medicinedetails.push(mdata);
                    });
                }
            }
            _this.httpuser.deletePackageTransport(id, _this.mypublickey).subscribe(function (res) {
                alert("Package Opened ");
            });
            //  const Metadata = {
            //   "action": "openPackage",
            //   "payloaddata": {
            //       "serialNumber": this.mlist[0].serial,
            //       "userRole": this.myrole,
            //       "admin": false,
            // 	  "level":this.levelvalue
            //   },
            //   "private":this.privateKey,
            //   "public": this.mypublickey
            //     }	    
            // const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json'
            // })
            // }
            //     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
            //  (val) => {	
            //   console.log("POST call successful value returned in body", val);
            //   this.blockchain = val;
            //   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //     this.status = JSON.parse(this.blockchain.response.body);            
            //     this.statusValue = this.status.data[0].status;
            //     this.itemId = this.status.data[0].id;
            //     if (this.statusValue == 'COMMITTED') {   
            // 	   this.displayTable=true; 
            // 	  //this.openpackagecall(id,this.mypublickey);
            // 		/*Transfer child packages to user account*/
            // 			if(Array.isArray(this.mlist[0].packages))
            // 				var meds = this.mlist[0].packages;
            // 			else
            // 				var meds = this.mlist[0].packages.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getPackageStatus3(meds[j]).subscribe((pdata) =>{
            // 						  this.httpuser.getPackageId(id).subscribe(packagedata => {
            // 								this.plist=packagedata;
            // 								this.transporter(this.plist[0].serial,this.plist[0].medicines, this.plist[0].barcode, this.plist[0].location, this.plist[0].level, this.plist[0].packages, this.plist[0].PackageId, this.plist[0].role, this.plist[0].time, this.mypublickey,this.packageStatus);
            // 						});		
            // 						//this.getByPackageId(pdata.PackageId,'4');
            // 					});
            // 				}
            // 			}
            // 			/*Transfer child medicines to user account*/
            // 			if(Array.isArray(this.mlist[0].medicines))
            // 				var meds = this.mlist[0].medicines;
            // 			else
            // 				var meds = this.mlist[0].medicines.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getMedicineStatus3(meds[j]).subscribe((mdata) =>{
            // 							this.httpuser.getMedicineId(id).subscribe(medicinedata => {
            // 								this.medlist=medicinedata;
            // 								 this.medicineTransporter(this.medlist[0].serial,this.medlist[0].medicine,this.medlist[0].barcode,this.medlist[0].location,this.medlist[0].weight,this.medlist[0].Edate,this.medlist[0].Mdate,this.medlist[0].MedicineId,this.medlist[0].role,this.medlist[0].time,this.mypublickey,this.medicineStatus);
            // 						});
            // 							//this.medicinedetails.push(mdata);
            // 					});
            // 				}
            // 			}
            // 			this.httpuser.deletePackageTransport(id,this.mypublickey).subscribe(res => {
            // 				alert("Package Opened ");
            // 			 });
            // 			//alert("Package Opened ");
            //   }
            //   else{
            // 	  alert("Process not completed");
            //   }
            //   }
            //   else {
            //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //       this.blockchain2 =val
            //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //         this.status = JSON.parse(this.blockchain2.body);
            //         console.log('json value2', this.status.data[0].status);
            //         this.statusValue = this.status.data[0].status;
            //         this.itemId = this.status.data[0].id;
            //         if (this.statusValue == 'COMMITTED') {
            // 				/*Transfer child packages to user account*/
            // 			if(Array.isArray(this.mlist[0].packages))
            // 				var meds = this.mlist[0].packages;
            // 			else
            // 				var meds = this.mlist[0].packages.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getPackageStatus3(meds[j]).subscribe((pdata) =>{
            // 						  this.httpuser.getPackageId(id).subscribe(packagedata => {
            // 								this.plist=packagedata;
            // 								this.transporter(this.plist[0].serial,this.plist[0].medicines, this.plist[0].barcode, this.plist[0].location, this.plist[0].level, this.plist[0].packages, this.plist[0].PackageId, this.plist[0].role, this.plist[0].time, this.mypublickey,this.packageStatus);
            // 						});		
            // 						//this.getByPackageId(pdata.PackageId,'4');
            // 					});
            // 				}
            // 			}
            // 			/*Transfer child medicines to user account*/
            // 			if(Array.isArray(this.mlist[0].medicines))
            // 				var meds = this.mlist[0].medicines;
            // 			else
            // 				var meds = this.mlist[0].medicines.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getMedicineStatus3(meds[j]).subscribe((mdata) =>{
            // 							this.httpuser.getMedicineId(id).subscribe(medicinedata => {
            // 								this.medlist=medicinedata;
            // 								 this.medicineTransporter(this.medlist[0].serial,this.medlist[0].medicine,this.medlist[0].barcode,this.medlist[0].location,this.medlist[0].weight,this.medlist[0].Edate,this.medlist[0].Mdate,this.medlist[0].MedicineId,this.medlist[0].role,this.medlist[0].time,this.mypublickey,this.medicineStatus);
            // 						});
            // 							//this.medicinedetails.push(mdata);
            // 					});
            // 				}
            // 			}
            // 				this.httpuser.deletePackageTransport(id,this.mypublickey).subscribe(res => {
            // 				alert("Package Opened ");
            // 			 });
            //         }
            //         else {
            //           alert('Request Rejected');
            //         }
            //       }
            //     })
            //   }
            // // }).catch(function (err) {
            // //   console.log(err.message);
            // });
        });
    };
    RecievepackagepharmaComponent.prototype.medicineTransporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_8__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    RecievepackagepharmaComponent.prototype.mTransection = function (serial, wholesalerId, transpoterId) {
        var _this = this;
        console.log(serial, wholesalerId, transpoterId);
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        var Metadata = {
            "action": "sendToPharma",
            "payloaddata": {
                "serialNumber": serial,
                "wholesaler": {
                    "address": wholesalerId,
                    "comment": "In Transaction"
                },
                "transporterid": transpoterId,
                "level": this.levelvalue
            },
            "private": this.privateKey,
            "public": this.mypublickey
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var x = this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(function (val) {
            _this.blockchain = val;
            console.log("POST call successful value returned in body", val);
            if (_this.blockchain) {
                _this.transection = new src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"](serial, wholesalerId, transpoterId);
                _this.base = _this.httpuser.medicineTransection(_this.transection);
                _this.call = _this.base.subscribe(function (data) {
                    alert("done");
                }, function (err) {
                    console.log(err);
                }, function () {
                    console.log("Done");
                });
            }
            else {
                alert("Process not completed");
            }
        });
    };
    RecievepackagepharmaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recievepackagepharma',
            template: __webpack_require__(/*! ./recievepackagepharma.component.html */ "./src/app/send/recievepackagepharma/recievepackagepharma.component.html"),
            styles: [__webpack_require__(/*! ./recievepackagepharma.component.css */ "./src/app/send/recievepackagepharma/recievepackagepharma.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], RecievepackagepharmaComponent);
    return RecievepackagepharmaComponent;
}());



/***/ }),

/***/ "./src/app/send/recievepackagepharmareport/recievepackagepharmareport.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/send/recievepackagepharmareport/recievepackagepharmareport.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbmQvcmVjaWV2ZXBhY2thZ2VwaGFybWFyZXBvcnQvcmVjaWV2ZXBhY2thZ2VwaGFybWFyZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/send/recievepackagepharmareport/recievepackagepharmareport.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/send/recievepackagepharmareport/recievepackagepharmareport.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n\t<br>\n\t<br>\n\n    <div  class=\"table-responsive\">\n      <br>\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n          <thead class=\"theme-table\">\n\t\t  <tr>\n\t\t<th colspan=\"3\"></th>\n\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t</tr>\n              <tr>            \n\t\t\t\t<th>Serial Number</th>\n\t\t\t\t<th>Level</th>\n\t\t\t\t<th>Location</th> \n\t\t\t\t<th>Date</th>\n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of TMlist\">\n              <td><a [routerLink]=\"['/package/details',list.serial]\">{{list.serial}}</a></td>\n              <td>{{list.level}}</td>\n              <td>{{list.location}}</td>       \n           \n\t\t\t <td> {{list.time | date: 'dd/MM/yyyy h:mm:ss a'}}</td>\n              </tr>\n           \n          </tbody>\n          <tfoot class=\"theme-table\"><tr>\n\t\t<th colspan=\"3\"></th>\n\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t</tr></tfoot>\n        </table>\n      </div>\n    \n</div>\n"

/***/ }),

/***/ "./src/app/send/recievepackagepharmareport/recievepackagepharmareport.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/send/recievepackagepharmareport/recievepackagepharmareport.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RecievepackagepharmareportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecievepackagepharmareportComponent", function() { return RecievepackagepharmareportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/medicine/package-create/addpackage2 */ "./src/app/admin/medicine/package-create/addpackage2.ts");
/* harmony import */ var src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/medicine/medicine-list/transection */ "./src/app/admin/medicine/medicine-list/transection.ts");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular5-csv/dist/Angular5-csv */ "./node_modules/angular5-csv/dist/Angular5-csv.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/admin/medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");









var RecievepackagepharmareportComponent = /** @class */ (function () {
    function RecievepackagepharmareportComponent(httpuser, qrReader, http) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.levelvalue = " ";
        this.transporter1 = src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__["Package2"];
        this.list = [];
        this.mlist = [];
        this.medlist = [];
        this.plist = [];
        this.dlist = [];
        this.tlist = [];
        this.TMlist = [];
        this.meds = [];
        this.transection = src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    RecievepackagepharmareportComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Recived to Pharma";
        this.packageStatus = "Recived to Pharma";
        this.myrole = localStorage.getItem("role");
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.transporterPackageId(this.mypublickey);
        this.allPharma();
        this.allTransporter();
    };
    RecievepackagepharmareportComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    RecievepackagepharmareportComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    RecievepackagepharmareportComponent.prototype.serialId = function (serialId, level) {
        this.serialvalue = serialId;
        this.levelvalue = level;
    };
    RecievepackagepharmareportComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    RecievepackagepharmareportComponent.prototype.transporterPackageId = function (id) {
        var _this = this;
        return this.httpuser.transporterPackage(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log(_this.TMlist);
        });
    };
    RecievepackagepharmareportComponent.prototype.getByPackageId = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            _this.displayTable = true;
            if (statusid == 5)
                _this.packageStatus = "Rejected from Distributer";
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicines, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].level, _this.mlist[0].packages, _this.mlist[0].PackageId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.packageStatus);
            if (statusid == 5)
                alert("Package Returned ");
            else
                alert("Package piked ");
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            //  const Metadata = {
            //   "action": "recieveFromDistributer",
            //   "payloaddata": {
            //       "serialNumber": this.mlist[0].serial,
            //       "status": statusid,
            //       "comment": "Delivered",
            // 	  "level":this.levelvalue
            //   },
            //   "private":this.privateKey,
            //   "public": this.mypublickey
            //     }	    
            // const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json'
            // })
            // }
            //     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
            //  (val) => {	
            //   console.log("POST call successful value returned in body", val);
            //   this.blockchain = val;
            //   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //     this.status = JSON.parse(this.blockchain.response.body);            
            //     this.statusValue = this.status.data[0].status;
            //     this.itemId = this.status.data[0].id;
            //     if (this.statusValue == 'COMMITTED') {   
            //    this.displayTable=true; 
            //     if(statusid == 5) this.packageStatus = "Rejected from Distributer";
            // 		this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
            // 		if(statusid == 5)
            // 			alert("Package Returned ");
            // 		else
            // 			alert("Package piked ");
            //   }
            //   else{
            // 	  alert("Process not completed");
            //   }
            //   }
            //   else {
            //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //       this.blockchain2 =val
            //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //         this.status = JSON.parse(this.blockchain2.body);
            //         console.log('json value2', this.status.data[0].status);
            //         this.statusValue = this.status.data[0].status;
            //         this.itemId = this.status.data[0].id;
            //         if (this.statusValue == 'COMMITTED') {
            // 				if(statusid == 5) this.packageStatus = "Rejected to Distributer";
            //                   this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
            //                   if(statusid == 5)
            // 					alert("Package Returned ");
            // 				else
            // 					alert("Package picked");
            //         }
            //         else {
            //           alert('Request Rejected');
            //         }
            //       }
            //     })
            //   }
            // // }).catch(function (err) {
            // //   console.log(err.message);
            // });
        });
    };
    RecievepackagepharmareportComponent.prototype.allPharma = function () {
        var _this = this;
        return this.httpuser.getallPharmaUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    RecievepackagepharmareportComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    RecievepackagepharmareportComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k) {
        this.transporter1 = new src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__["Package2"](a, b, c, d, e, f, g, h, i, j, k);
        this.base = this.httpuser.packagetransporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    RecievepackagepharmareportComponent.prototype.openpackage = function (id, level) {
        var _this = this;
        this.levelvalue = level;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            if (Array.isArray(_this.mlist[0].packages))
                var meds = _this.mlist[0].packages;
            else
                var meds = _this.mlist[0].packages.split(',');
            if (meds.length > 0) {
                for (var j = 0; j < meds.length; j++) {
                    _this.httpuser.getPackageStatus3(meds[j]).subscribe(function (pdata) {
                        _this.httpuser.getPackageId(id).subscribe(function (packagedata) {
                            _this.plist = packagedata;
                            _this.transporter(_this.plist[0].serial, _this.plist[0].medicines, _this.plist[0].barcode, _this.plist[0].location, _this.plist[0].level, _this.plist[0].packages, _this.plist[0].PackageId, _this.plist[0].role, _this.plist[0].time, _this.mypublickey, _this.packageStatus);
                        });
                        //this.getByPackageId(pdata.PackageId,'4');
                    });
                }
            }
            /*Transfer child medicines to user account*/
            if (Array.isArray(_this.mlist[0].medicines))
                var meds = _this.mlist[0].medicines;
            else
                var meds = _this.mlist[0].medicines.split(',');
            if (meds.length > 0) {
                for (var j = 0; j < meds.length; j++) {
                    _this.httpuser.getMedicineStatus3(meds[j]).subscribe(function (mdata) {
                        _this.httpuser.getMedicineId(id).subscribe(function (medicinedata) {
                            _this.medlist = medicinedata;
                            _this.medicineTransporter(_this.medlist[0].serial, _this.medlist[0].medicine, _this.medlist[0].barcode, _this.medlist[0].location, _this.medlist[0].weight, _this.medlist[0].Edate, _this.medlist[0].Mdate, _this.medlist[0].MedicineId, _this.medlist[0].role, _this.medlist[0].time, _this.mypublickey, _this.medicineStatus);
                        });
                        //this.medicinedetails.push(mdata);
                    });
                }
            }
            _this.httpuser.deletePackageTransport(id, _this.mypublickey).subscribe(function (res) {
                alert("Package Opened ");
            });
            //  const Metadata = {
            //   "action": "openPackage",
            //   "payloaddata": {
            //       "serialNumber": this.mlist[0].serial,
            //       "userRole": this.myrole,
            //       "admin": false,
            // 	  "level":this.levelvalue
            //   },
            //   "private":this.privateKey,
            //   "public": this.mypublickey
            //     }	    
            // const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json'
            // })
            // }
            //     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
            //  (val) => {	
            //   console.log("POST call successful value returned in body", val);
            //   this.blockchain = val;
            //   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //     this.status = JSON.parse(this.blockchain.response.body);            
            //     this.statusValue = this.status.data[0].status;
            //     this.itemId = this.status.data[0].id;
            //     if (this.statusValue == 'COMMITTED') {   
            // 	   this.displayTable=true; 
            // 	  //this.openpackagecall(id,this.mypublickey);
            // 		/*Transfer child packages to user account*/
            // 			if(Array.isArray(this.mlist[0].packages))
            // 				var meds = this.mlist[0].packages;
            // 			else
            // 				var meds = this.mlist[0].packages.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getPackageStatus3(meds[j]).subscribe((pdata) =>{
            // 						  this.httpuser.getPackageId(id).subscribe(packagedata => {
            // 								this.plist=packagedata;
            // 								this.transporter(this.plist[0].serial,this.plist[0].medicines, this.plist[0].barcode, this.plist[0].location, this.plist[0].level, this.plist[0].packages, this.plist[0].PackageId, this.plist[0].role, this.plist[0].time, this.mypublickey,this.packageStatus);
            // 						});		
            // 						//this.getByPackageId(pdata.PackageId,'4');
            // 					});
            // 				}
            // 			}
            // 			/*Transfer child medicines to user account*/
            // 			if(Array.isArray(this.mlist[0].medicines))
            // 				var meds = this.mlist[0].medicines;
            // 			else
            // 				var meds = this.mlist[0].medicines.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getMedicineStatus3(meds[j]).subscribe((mdata) =>{
            // 							this.httpuser.getMedicineId(id).subscribe(medicinedata => {
            // 								this.medlist=medicinedata;
            // 								 this.medicineTransporter(this.medlist[0].serial,this.medlist[0].medicine,this.medlist[0].barcode,this.medlist[0].location,this.medlist[0].weight,this.medlist[0].Edate,this.medlist[0].Mdate,this.medlist[0].MedicineId,this.medlist[0].role,this.medlist[0].time,this.mypublickey,this.medicineStatus);
            // 						});
            // 							//this.medicinedetails.push(mdata);
            // 					});
            // 				}
            // 			}
            // 			this.httpuser.deletePackageTransport(id,this.mypublickey).subscribe(res => {
            // 				alert("Package Opened ");
            // 			 });
            // 			//alert("Package Opened ");
            //   }
            //   else{
            // 	  alert("Process not completed");
            //   }
            //   }
            //   else {
            //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //       this.blockchain2 =val
            //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //         this.status = JSON.parse(this.blockchain2.body);
            //         console.log('json value2', this.status.data[0].status);
            //         this.statusValue = this.status.data[0].status;
            //         this.itemId = this.status.data[0].id;
            //         if (this.statusValue == 'COMMITTED') {
            // 				/*Transfer child packages to user account*/
            // 			if(Array.isArray(this.mlist[0].packages))
            // 				var meds = this.mlist[0].packages;
            // 			else
            // 				var meds = this.mlist[0].packages.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getPackageStatus3(meds[j]).subscribe((pdata) =>{
            // 						  this.httpuser.getPackageId(id).subscribe(packagedata => {
            // 								this.plist=packagedata;
            // 								this.transporter(this.plist[0].serial,this.plist[0].medicines, this.plist[0].barcode, this.plist[0].location, this.plist[0].level, this.plist[0].packages, this.plist[0].PackageId, this.plist[0].role, this.plist[0].time, this.mypublickey,this.packageStatus);
            // 						});		
            // 						//this.getByPackageId(pdata.PackageId,'4');
            // 					});
            // 				}
            // 			}
            // 			/*Transfer child medicines to user account*/
            // 			if(Array.isArray(this.mlist[0].medicines))
            // 				var meds = this.mlist[0].medicines;
            // 			else
            // 				var meds = this.mlist[0].medicines.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getMedicineStatus3(meds[j]).subscribe((mdata) =>{
            // 							this.httpuser.getMedicineId(id).subscribe(medicinedata => {
            // 								this.medlist=medicinedata;
            // 								 this.medicineTransporter(this.medlist[0].serial,this.medlist[0].medicine,this.medlist[0].barcode,this.medlist[0].location,this.medlist[0].weight,this.medlist[0].Edate,this.medlist[0].Mdate,this.medlist[0].MedicineId,this.medlist[0].role,this.medlist[0].time,this.mypublickey,this.medicineStatus);
            // 						});
            // 							//this.medicinedetails.push(mdata);
            // 					});
            // 				}
            // 			}
            // 				this.httpuser.deletePackageTransport(id,this.mypublickey).subscribe(res => {
            // 				alert("Package Opened ");
            // 			 });
            //         }
            //         else {
            //           alert('Request Rejected');
            //         }
            //       }
            //     })
            //   }
            // // }).catch(function (err) {
            // //   console.log(err.message);
            // });
        });
    };
    RecievepackagepharmareportComponent.prototype.exporttocsv = function () {
        var data = [];
        var datarow = {};
        if (Array.isArray(this.TMlist))
            this.meds = this.TMlist;
        else
            this.meds = this.TMlist.split(',');
        for (var i = 0; i <= this.meds.length; i++) {
            console.log("meds==" + this.meds[i]);
            if (typeof this.meds[i] != "undefined") {
                datarow = {
                    serial: this.meds[i].serial,
                    location: this.meds[i].location,
                    level: this.meds[i].level,
                    time: this.meds[i].time,
                };
                data.push(datarow);
            }
        }
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            headers: ["Serial Number", "Location", "Level", "Date/Time"]
        };
        new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7__["Angular5Csv"](data, 'Report1', options);
        return true;
    };
    RecievepackagepharmareportComponent.prototype.medicineTransporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_8__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    RecievepackagepharmareportComponent.prototype.mTransection = function (serial, wholesalerId, transpoterId) {
        console.log(serial, wholesalerId, transpoterId);
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        //  const Metadata = {
        // 			  "action": "sendToPharma",
        //     "payloaddata": {
        //         "serialNumber": serial,
        //         "wholesaler": {
        //             "address": wholesalerId,
        //             "comment": "In Transaction"
        //         },
        //         "transporterid": transpoterId,
        // 		"level":this.levelvalue
        //     },
        // 				"private":this.privateKey,
        // 				"public": this.mypublickey
        // 					}	    
        // 	const httpOptions = {
        //       headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //       })
        //     };
        //             var x = this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
        //        (val) => {	
        // 	   this.blockchain=val;
        //         console.log("POST call successful value returned in body",val);
        // 	   if(this.blockchain){
        //     this.transection = new Transection(serial,wholesalerId,transpoterId);
        //     this.base = this.httpuser.medicineTransection(this.transection);
        //     this.call = this.base.subscribe(
        //       data => {        
        //         alert("done");        
        //       },
        //       err => {
        //         console.log(err);
        //       },
        //       () => {
        //         console.log("Done");
        //       }
        //     );
        //   }
        //   else{
        // 	  alert("Process not completed");
        //   }
        //   });
    };
    RecievepackagepharmareportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recievepackagepharmareport',
            template: __webpack_require__(/*! ./recievepackagepharmareport.component.html */ "./src/app/send/recievepackagepharmareport/recievepackagepharmareport.component.html"),
            styles: [__webpack_require__(/*! ./recievepackagepharmareport.component.css */ "./src/app/send/recievepackagepharmareport/recievepackagepharmareport.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], RecievepackagepharmareportComponent);
    return RecievepackagepharmareportComponent;
}());



/***/ }),

/***/ "./src/app/send/recievepackagewholesaler/recievepackagewholesaler.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/send/recievepackagewholesaler/recievepackagewholesaler.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    \n  }\n\n \n#heading{\n    background-color: rgb(18, 50, 190); \n    color:white;\n}\n\n \n.pd{\n  background: navy;\n}\n\n \ntd a {\n  display:block;\n  width:100%;\n  background-clip: padding-box; \n  border-radius: 5px;\n  background-color: blue;\n  color: white;\n  border: 2px solid green;\n}\n\n \na {\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC9yZWNpZXZlcGFja2FnZXdob2xlc2FsZXIvcmVjaWV2ZXBhY2thZ2V3aG9sZXNhbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXOztFQUViOzs7QUFHRjtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0FBQ2Y7OztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFDQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7O0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9zZW5kL3JlY2lldmVwYWNrYWdld2hvbGVzYWxlci9yZWNpZXZlcGFja2FnZXdob2xlc2FsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgfVxuXG4gXG4jaGVhZGluZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDUwLCAxOTApOyBcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5wZHtcbiAgYmFja2dyb3VuZDogbmF2eTtcbn1cbnRkIGEge1xuICBkaXNwbGF5OmJsb2NrO1xuICB3aWR0aDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyBcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/send/recievepackagewholesaler/recievepackagewholesaler.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/send/recievepackagewholesaler/recievepackagewholesaler.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n\t<br>\n\t<br>\n\n\t<form>\n\t\n        <div class=\"row\"> \n          <div class=\"col\"><div class=\"form-group\">\n            <label>Packing Barcode</label>\n\t\t\t<input type=\"file\" style=\"margin-left:20px;\" accept=\"image/*\" (change)=\"onFileChange($event)\">\n            <input #br type=\"text\" value=\"{{barcodevalue}}\" class=\"form-control required\" >\n          </div>\n        </div>\n        \n            \n          </div>\n            <div class=\"row text-right\">\n             \t\t<div class=\"col\">\n             \t\t\t<div class=\"form-group\">\n                  \t\t\t<button type=\"reset\" (click)=\"getByPackageId(br.value,4)\" class=\"btn btn-primary\">Recieve</button>\n\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; \n              <button type=\"reset\" (click)=\"getByPackageId(br.value,5)\" class=\"btn btn-secondary\">Reject</button>\n              &nbsp; &nbsp; &nbsp;\n              <button type=\"reset\" (click)=\"getdetails(br.value,5)\" class=\"btn btn-primary\">Get Details</button>\n                \t\t</div>\n                </div>\n             </div>\n\t</form>\n\n\n  <div *ngIf=\"displayTable\" class=\"table-responsive\">\n    <br>\n    <table class=\"table table-striped table-dark table-hover text-center\">\n      \n        <thead class=\"theme-table\">\n            <tr>            \n              <th> Serial Number</th>\n              <th>Level</th>\n             <th>Location</th>\n              \n            </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><a [routerLink]=\"['/package/details',mlist[0].serial]\">{{mlist[0].serial}}</a></td>\n            <td>{{mlist[0].level}}</td>\n            <td>{{mlist[0].location}}</td>\n            \n          </tr>\n         \n        </tbody>\n        <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th></tr></tfoot>\n      </table>\n    </div>\n\n    <div  class=\"table-responsive\">\n      <br>\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n          <thead class=\"theme-table\">\n              <tr>            \n                  <th> Serial Number</th>\n                  <th>Level</th>\n                  <th>Location</th>\n                  <th></th>             \n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of TMlist\">\n              <td><a [routerLink]=\"['/package/details',list.serial]\">{{list.serial}}</a></td>\n              <td>{{list.level}}</td>\n              <td>{{list.location}}</td>        \n              <td><button type=\"button\"   (click)=\"serialId(list.serial,list.level)\"  class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Send to Distributer</button> &nbsp; &nbsp; &nbsp;  <button type=\"button\"   (click)=\"openpackage(list.PackageId,list.level)\"  class=\"btn btn-primary\">Open Package</button></td>\n              </tr>\n           \n          </tbody>\n          <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th></tr></tfoot>\n        </table>\n      </div>\n    \n\n</div>\n\n\n   <!-- Modal -->\n   <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Package Transportation</h5>\n          \n        </div>\n        <div class=\"modal-body\">\n      \n      <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Serial</label>\n                <input #serial   type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n              </div></div>           \n          </div>   \n           <div class=\"row\">          \n                <div class=\"col\"><div class=\"form-group\">\n                  <label>DistributerId</label>\n           <select [(ngModel)]=\"wId1\" class=\"form-control\" >\n                <option    *ngFor=\"let wid of dlist\" [value]=\"wid.publicKey\">{{wid.firstName}}</option>\n                            </select>   \n                </div></div>\n            </div>       \n    <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>TransporterId</label>\n          <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option  *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n                            </select> \n              </div></div>           \n          </div> \t\t\n  \n            \n        </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" #completeModal  data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/send/recievepackagewholesaler/recievepackagewholesaler.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/send/recievepackagewholesaler/recievepackagewholesaler.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RecievepackagewholesalerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecievepackagewholesalerComponent", function() { return RecievepackagewholesalerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/medicine/package-create/addpackage2 */ "./src/app/admin/medicine/package-create/addpackage2.ts");
/* harmony import */ var src_app_admin_medicine_package_list_transection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/admin/medicine/package-list/transection */ "./src/app/admin/medicine/package-list/transection.ts");
/* harmony import */ var src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/admin/medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");









var RecievepackagewholesalerComponent = /** @class */ (function () {
    function RecievepackagewholesalerComponent(route, httpuser, qrReader, http) {
        this.route = route;
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.selectedWId = '';
        this.selectedTId = '';
        this.transporter1 = src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_6__["Package2"];
        this.list = [];
        this.mlist = [];
        this.medlist = [];
        this.plist = [];
        this.dlist = [];
        this.tlist = [];
        this.TMlist = [];
        this.wid1 = '';
        this.tid1 = '';
        this.transection = src_app_admin_medicine_package_list_transection__WEBPACK_IMPORTED_MODULE_7__["Transection"];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    RecievepackagewholesalerComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Recived to Wholesaler";
        this.packageStatus = "Recived to Wholesaler";
        this.myrole = localStorage.getItem("role");
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.transporterPackageId(this.mypublickey);
        this.allDistributer();
        this.allTransporter();
    };
    RecievepackagewholesalerComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    RecievepackagewholesalerComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    RecievepackagewholesalerComponent.prototype.serialId = function (serialId, level) {
        this.serialvalue = serialId;
        this.levelvalue = level;
    };
    RecievepackagewholesalerComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    RecievepackagewholesalerComponent.prototype.transporterPackageId = function (id) {
        var _this = this;
        return this.httpuser.transporterPackage(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log('Package list', data);
        });
    };
    RecievepackagewholesalerComponent.prototype.getdetails = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            _this.route.navigate(['/package/details/' + _this.mlist[0].serial]);
        });
    };
    RecievepackagewholesalerComponent.prototype.getByPackageId = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            _this.displayTable = true;
            if (statusid == 5)
                _this.packageStatus = "Rejected from Distributer";
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicines, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].level, _this.mlist[0].packages, _this.mlist[0].PackageId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.packageStatus);
            if (statusid == 5)
                alert("Package Returned ");
            else
                alert("Package piked ");
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            //const Metadata = {
            //   "action": "recieveFromManufecturer",
            //   "payloaddata": {
            //       "serialNumber": this.mlist[0].serial,
            //       "status": statusid,
            //       "comment": "Delivered",
            // 	  "level": this.mlist[0].level,
            //   },
            //   "private":this.privateKey,
            //   "public": this.mypublickey
            //     }	    
            // const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json'
            // })
            // }
            //     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
            //  (val) => {	
            //   console.log("POST call successful value returned in body", val);
            //   this.blockchain = val;
            //   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //     this.status = JSON.parse(this.blockchain.response.body);            
            //     this.statusValue = this.status.data[0].status;
            //     this.itemId = this.status.data[0].id;
            //     if (this.statusValue == 'COMMITTED') {   
            // 	   this.displayTable=true; 
            // 	   if(statusid == 5) this.packageStatus = "Rejected from Distributer";
            // 		this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
            // 		if(statusid == 5)
            // 			alert("Package Returned ");
            // 		else
            // 			alert("Package piked ");
            //   }
            //   else{
            // 	  alert("Process not completed");
            //   }
            //   }
            //   else {
            //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //       this.blockchain2 =val
            //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //         this.status = JSON.parse(this.blockchain2.body);
            //         console.log('json value2', this.status.data[0].status);
            //         this.statusValue = this.status.data[0].status;
            //         this.itemId = this.status.data[0].id;
            //         if (this.statusValue == 'COMMITTED') {
            // 				if(statusid == 5) this.packageStatus = "Rejected to Distributer";
            //                   this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
            //                   if(statusid == 5)
            // 					alert("Package Returned ");
            // 				else
            // 					alert("Package picked");
            //         }
            //         else {
            //           alert('Request Rejected');
            //         }
            //       }
            //     })
            //   }
            // // }).catch(function (err) {
            // //   console.log(err.message);
            // });
        });
    };
    RecievepackagewholesalerComponent.prototype.allDistributer = function () {
        var _this = this;
        return this.httpuser.getallDistributerUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    RecievepackagewholesalerComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    RecievepackagewholesalerComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k) {
        this.transporter1 = new src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_6__["Package2"](a, b, c, d, e, f, g, h, i, j, k);
        this.base = this.httpuser.packagetransporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    RecievepackagewholesalerComponent.prototype.openpackage = function (id, level) {
        var _this = this;
        this.levelvalue = level;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            _this.displayTable = true;
            //this.openpackagecall(id,this.mypublickey);
            /*Transfer child packages to user account*/
            if (Array.isArray(_this.mlist[0].packages))
                var meds = _this.mlist[0].packages;
            else
                var meds = _this.mlist[0].packages.split(',');
            if (meds.length > 0) {
                for (var j = 0; j < meds.length; j++) {
                    _this.httpuser.getPackageStatus3(meds[j]).subscribe(function (pdata) {
                        _this.httpuser.getPackageId(id).subscribe(function (packagedata) {
                            _this.plist = packagedata;
                            _this.transporter(_this.plist[0].serial, _this.plist[0].medicines, _this.plist[0].barcode, _this.plist[0].location, _this.plist[0].level, _this.plist[0].packages, _this.plist[0].PackageId, _this.plist[0].role, _this.plist[0].time, _this.mypublickey, _this.packageStatus);
                        });
                        //this.getByPackageId(pdata.PackageId,'4');
                    });
                }
            }
            /*Transfer child medicines to user account*/
            if (Array.isArray(_this.mlist[0].medicines))
                var meds = _this.mlist[0].medicines;
            else
                var meds = _this.mlist[0].medicines.split(',');
            if (meds.length > 0) {
                for (var j = 0; j < meds.length; j++) {
                    _this.httpuser.getMedicineStatus3(meds[j]).subscribe(function (mdata) {
                        _this.httpuser.getMedicineId(id).subscribe(function (medicinedata) {
                            _this.medlist = medicinedata;
                            _this.medicineTransporter(_this.medlist[0].serial, _this.medlist[0].medicine, _this.medlist[0].barcode, _this.medlist[0].location, _this.medlist[0].weight, _this.medlist[0].Edate, _this.medlist[0].Mdate, _this.medlist[0].MedicineId, _this.medlist[0].role, _this.medlist[0].time, _this.mypublickey, _this.medicineStatus);
                        });
                        //this.medicinedetails.push(mdata);
                    });
                }
            }
            _this.httpuser.deletePackageTransport(id, _this.mypublickey).subscribe(function (res) {
                alert("Package Opened ");
            });
            //  const Metadata = {
            //   "action": "openPackage",
            //   "payloaddata": {
            //       "serialNumber": this.mlist[0].serial,
            //       "userRole": this.myrole,
            //       "admin": false,
            // 	  "level":this.levelvalue
            //   },
            //   "private":this.privateKey,
            //   "public": this.mypublickey
            //     }	    
            // const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json'
            // })
            // }
            //     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
            //  (val) => {	
            //   console.log("POST call successful value returned in body", val);
            //   this.blockchain = val;
            //   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //     this.status = JSON.parse(this.blockchain.response.body);            
            //     this.statusValue = this.status.data[0].status;
            //     this.itemId = this.status.data[0].id;
            //     if (this.statusValue == 'COMMITTED') {   
            // 	   this.displayTable=true; 
            // 	  //this.openpackagecall(id,this.mypublickey);
            // 		/*Transfer child packages to user account*/
            // 			if(Array.isArray(this.mlist[0].packages))
            // 				var meds = this.mlist[0].packages;
            // 			else
            // 				var meds = this.mlist[0].packages.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getPackageStatus3(meds[j]).subscribe((pdata) =>{
            // 						  this.httpuser.getPackageId(id).subscribe(packagedata => {
            // 								this.plist=packagedata;
            // 								this.transporter(this.plist[0].serial,this.plist[0].medicines, this.plist[0].barcode, this.plist[0].location, this.plist[0].level, this.plist[0].packages, this.plist[0].PackageId, this.plist[0].role, this.plist[0].time, this.mypublickey,this.packageStatus);
            // 						});		
            // 						//this.getByPackageId(pdata.PackageId,'4');
            // 					});
            // 				}
            // 			}
            // 			/*Transfer child medicines to user account*/
            // 			if(Array.isArray(this.mlist[0].medicines))
            // 				var meds = this.mlist[0].medicines;
            // 			else
            // 				var meds = this.mlist[0].medicines.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getMedicineStatus3(meds[j]).subscribe((mdata) =>{
            // 							this.httpuser.getMedicineId(id).subscribe(medicinedata => {
            // 								this.medlist=medicinedata;
            // 								 this.medicineTransporter(this.medlist[0].serial,this.medlist[0].medicine,this.medlist[0].barcode,this.medlist[0].location,this.medlist[0].weight,this.medlist[0].Edate,this.medlist[0].Mdate,this.medlist[0].MedicineId,this.medlist[0].role,this.medlist[0].time,this.mypublickey,this.medicineStatus);
            // 						});
            // 							//this.medicinedetails.push(mdata);
            // 					});
            // 				}
            // 			}
            // 			this.httpuser.deletePackageTransport(id,this.mypublickey).subscribe(res => {
            // 				alert("Package Opened ");
            // 			 });
            // 			//alert("Package Opened ");
            //   }
            //   else{
            // 	  alert("Process not completed");
            //   }
            //   }
            //   else {
            //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //       this.blockchain2 =val
            //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //         this.status = JSON.parse(this.blockchain2.body);
            //         console.log('json value2', this.status.data[0].status);
            //         this.statusValue = this.status.data[0].status;
            //         this.itemId = this.status.data[0].id;
            //         if (this.statusValue == 'COMMITTED') {
            // 				/*Transfer child packages to user account*/
            // 			if(Array.isArray(this.mlist[0].packages))
            // 				var meds = this.mlist[0].packages;
            // 			else
            // 				var meds = this.mlist[0].packages.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getPackageStatus3(meds[j]).subscribe((pdata) =>{
            // 						  this.httpuser.getPackageId(id).subscribe(packagedata => {
            // 								this.plist=packagedata;
            // 								this.transporter(this.plist[0].serial,this.plist[0].medicines, this.plist[0].barcode, this.plist[0].location, this.plist[0].level, this.plist[0].packages, this.plist[0].PackageId, this.plist[0].role, this.plist[0].time, this.mypublickey,this.packageStatus);
            // 						});		
            // 						//this.getByPackageId(pdata.PackageId,'4');
            // 					});
            // 				}
            // 			}
            // 			/*Transfer child medicines to user account*/
            // 			if(Array.isArray(this.mlist[0].medicines))
            // 				var meds = this.mlist[0].medicines;
            // 			else
            // 				var meds = this.mlist[0].medicines.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getMedicineStatus3(meds[j]).subscribe((mdata) =>{
            // 							this.httpuser.getMedicineId(id).subscribe(medicinedata => {
            // 								this.medlist=medicinedata;
            // 								 this.medicineTransporter(this.medlist[0].serial,this.medlist[0].medicine,this.medlist[0].barcode,this.medlist[0].location,this.medlist[0].weight,this.medlist[0].Edate,this.medlist[0].Mdate,this.medlist[0].MedicineId,this.medlist[0].role,this.medlist[0].time,this.mypublickey,this.medicineStatus);
            // 						});
            // 							//this.medicinedetails.push(mdata);
            // 					});
            // 				}
            // 			}
            // 				this.httpuser.deletePackageTransport(id,this.mypublickey).subscribe(res => {
            // 				alert("Package Opened ");
            // 			 });
            //         }
            //         else {
            //           alert('Request Rejected');
            //         }
            //       }
            //     })
            //   }
            // // }).catch(function (err) {
            // //   console.log(err.message);
            // });
        });
    };
    RecievepackagewholesalerComponent.prototype.medicineTransporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_8__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    RecievepackagewholesalerComponent.prototype.mTransection = function (serial, distributerId, transpoterId) {
        var that = this;
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        this.transection = new src_app_admin_medicine_package_list_transection__WEBPACK_IMPORTED_MODULE_7__["Transection"](serial, distributerId, transpoterId);
        this.base = this.httpuser.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
        });
        // const Metadata = {
        //   "action": "sendToDistributer",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "distributer": {
        //       "address": distributerId,
        //       "comment": "In Transaction"
        //     },
        //     "transporterid": transpoterId,
        //     "level": this.levelvalue
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.transection = new Transection(serial, distributerId, transpoterId);
        //         this.base = this.httpuser.medicineTransection(this.transection);
        //         this.call = this.base.subscribe(data => {
        //           alert('Request Accepted');
        //         });
        //       }
        //       else {
        //         alert('Request Rejected');
        //       }
        //     } else {
        //       that.http.get(this.httpuser.batchUrl + "/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);
        //           console.log('json value2', this.status.data[0].status);
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.transection = new Transection(serial, distributerId, transpoterId);
        //             this.base = this.httpuser.medicineTransection(this.transection);
        //             this.call = this.base.subscribe(data => {
        //               alert('Request Accepted');
        //             });
        //           }
        //           else {
        //             alert('Request Rejected');
        //           }
        //         }
        //       })
        //     }
        //     // }).catch(function (err) {
        //     //   console.log(err.message);
        //   });
    };
    RecievepackagewholesalerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recievepackagewholesaler',
            template: __webpack_require__(/*! ./recievepackagewholesaler.component.html */ "./src/app/send/recievepackagewholesaler/recievepackagewholesaler.component.html"),
            styles: [__webpack_require__(/*! ./recievepackagewholesaler.component.css */ "./src/app/send/recievepackagewholesaler/recievepackagewholesaler.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_4__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], RecievepackagewholesalerComponent);
    return RecievepackagewholesalerComponent;
}());



/***/ }),

/***/ "./src/app/send/recievepackagewholesalerreport/recievepackagewholesalerreport.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/send/recievepackagewholesalerreport/recievepackagewholesalerreport.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    \n  }\n\n \n#heading{\n    background-color: rgb(18, 50, 190); \n    color:white;\n}\n\n \n.pd{\n  background: navy;\n}\n\n \ntd a {\n  display:block;\n  width:100%;\n  background-clip: padding-box; \n  border-radius: 5px;\n  background-color: blue;\n  color: white;\n  border: 2px solid green;\n}\n\n \na {\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC9yZWNpZXZlcGFja2FnZXdob2xlc2FsZXJyZXBvcnQvcmVjaWV2ZXBhY2thZ2V3aG9sZXNhbGVycmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXOztFQUViOzs7QUFHRjtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0FBQ2Y7OztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFDQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7O0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9zZW5kL3JlY2lldmVwYWNrYWdld2hvbGVzYWxlcnJlcG9ydC9yZWNpZXZlcGFja2FnZXdob2xlc2FsZXJyZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgfVxuXG4gXG4jaGVhZGluZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDUwLCAxOTApOyBcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5wZHtcbiAgYmFja2dyb3VuZDogbmF2eTtcbn1cbnRkIGEge1xuICBkaXNwbGF5OmJsb2NrO1xuICB3aWR0aDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyBcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/send/recievepackagewholesalerreport/recievepackagewholesalerreport.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/send/recievepackagewholesalerreport/recievepackagewholesalerreport.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n\t<br>\n\t<br>\n\n    <div  class=\"table-responsive\">\n      <br>\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n          <thead class=\"theme-table\">\n\t\t  <tr>\n\t\t<th colspan=\"3\"></th>\n\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t</tr>\n              <tr>            \n                  <th> Serial Number</th>\n                  <th>Level</th>\n                  <th>Location</th>\n                  <th>Date</th>             \n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of TMlist\">\n              <td><a [routerLink]=\"['/package/details',list.serial]\">{{list.serial}}</a></td>\n              <td>{{list.level}}</td>\n              <td>{{list.location}}</td>        \n              <td>{{list.time | date: 'dd/MM/yyyy h:mm:ss a'}}</td>\n              </tr>\n           \n          </tbody>\n          <tfoot class=\"theme-table\"><tr>\n\t\t<th colspan=\"3\"></th>\n\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t</tr></tfoot>\n        </table>\n      </div>\n    \n\n</div>\n\n\n   <!-- Modal -->\n   <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Package Transportation</h5>\n          \n        </div>\n        <div class=\"modal-body\">\n      \n      <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Serial</label>\n                <input #serial   type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n              </div></div>           \n          </div>   \n           <div class=\"row\">          \n                <div class=\"col\"><div class=\"form-group\">\n                  <label>DistributerId</label>\n           <select [(ngModel)]=\"wId1\" class=\"form-control\" >\n                <option    *ngFor=\"let wid of dlist\" [value]=\"wid.publicKey\">{{wid.firstName}}</option>\n                            </select>   \n                </div></div>\n            </div>       \n    <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>TransporterId</label>\n          <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option  *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n                            </select> \n              </div></div>           \n          </div> \t\t\n  \n            \n        </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" #completeModal  data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/send/recievepackagewholesalerreport/recievepackagewholesalerreport.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/send/recievepackagewholesalerreport/recievepackagewholesalerreport.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: RecievepackagewholesalerreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecievepackagewholesalerreportComponent", function() { return RecievepackagewholesalerreportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/medicine/package-create/addpackage2 */ "./src/app/admin/medicine/package-create/addpackage2.ts");
/* harmony import */ var src_app_admin_medicine_package_list_transection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/medicine/package-list/transection */ "./src/app/admin/medicine/package-list/transection.ts");
/* harmony import */ var src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/admin/medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular5-csv/dist/Angular5-csv */ "./node_modules/angular5-csv/dist/Angular5-csv.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_8__);









var RecievepackagewholesalerreportComponent = /** @class */ (function () {
    function RecievepackagewholesalerreportComponent(httpuser, qrReader, http) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.selectedWId = '';
        this.selectedTId = '';
        this.transporter1 = src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__["Package2"];
        this.list = [];
        this.mlist = [];
        this.medlist = [];
        this.plist = [];
        this.dlist = [];
        this.tlist = [];
        this.TMlist = [];
        this.meds = [];
        this.wid1 = '';
        this.tid1 = '';
        this.transection = src_app_admin_medicine_package_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    RecievepackagewholesalerreportComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Recived to Wholesaler";
        this.packageStatus = "Recived to Wholesaler";
        this.myrole = localStorage.getItem("role");
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.transporterPackageId(this.mypublickey);
        this.allDistributer();
        this.allTransporter();
    };
    RecievepackagewholesalerreportComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    RecievepackagewholesalerreportComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    RecievepackagewholesalerreportComponent.prototype.serialId = function (serialId, level) {
        this.serialvalue = serialId;
        this.levelvalue = level;
    };
    RecievepackagewholesalerreportComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    RecievepackagewholesalerreportComponent.prototype.transporterPackageId = function (id) {
        var _this = this;
        return this.httpuser.transporterPackage(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log('Package list', data);
        });
    };
    RecievepackagewholesalerreportComponent.prototype.getByPackageId = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            _this.displayTable = true;
            if (statusid == 5)
                _this.packageStatus = "Rejected from Distributer";
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicines, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].level, _this.mlist[0].packages, _this.mlist[0].PackageId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.packageStatus);
            if (statusid == 5)
                alert("Package Returned ");
            else
                alert("Package piked ");
            //  const Metadata = {
            //   "action": "recieveFromManufecturer",
            //   "payloaddata": {
            //       "serialNumber": this.mlist[0].serial,
            //       "status": statusid,
            //       "comment": "Delivered",
            // 	  "level": this.mlist[0].level,
            //   },
            //   "private":this.privateKey,
            //   "public": this.mypublickey
            //     }	    
            // const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json'
            // })
            // }
            //     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
            //  (val) => {	
            //   console.log("POST call successful value returned in body", val);
            //   this.blockchain = val;
            //   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //     this.status = JSON.parse(this.blockchain.response.body);            
            //     this.statusValue = this.status.data[0].status;
            //     this.itemId = this.status.data[0].id;
            //     if (this.statusValue == 'COMMITTED') {   
            // 	   this.displayTable=true; 
            // 	   if(statusid == 5) this.packageStatus = "Rejected from Distributer";
            // 		this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
            // 		if(statusid == 5)
            // 			alert("Package Returned ");
            // 		else
            // 			alert("Package piked ");
            //   }
            //   else{
            // 	  alert("Process not completed");
            //   }
            //   }
            //   else {
            //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //       this.blockchain2 =val
            //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //         this.status = JSON.parse(this.blockchain2.body);
            //         console.log('json value2', this.status.data[0].status);
            //         this.statusValue = this.status.data[0].status;
            //         this.itemId = this.status.data[0].id;
            //         if (this.statusValue == 'COMMITTED') {
            // 				if(statusid == 5) this.packageStatus = "Rejected to Distributer";
            //                   this.transporter(this.mlist[0].serial,this.mlist[0].medicines, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].level, this.mlist[0].packages, this.mlist[0].PackageId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.packageStatus);
            //                   if(statusid == 5)
            // 					alert("Package Returned ");
            // 				else
            // 					alert("Package picked");
            //         }
            //         else {
            //           alert('Request Rejected');
            //         }
            //       }
            //     })
            //   }
            // // }).catch(function (err) {
            // //   console.log(err.message);
            // });
        });
    };
    RecievepackagewholesalerreportComponent.prototype.allDistributer = function () {
        var _this = this;
        return this.httpuser.getallDistributerUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    RecievepackagewholesalerreportComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    RecievepackagewholesalerreportComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k) {
        this.transporter1 = new src_app_admin_medicine_package_create_addpackage2__WEBPACK_IMPORTED_MODULE_5__["Package2"](a, b, c, d, e, f, g, h, i, j, k);
        this.base = this.httpuser.packagetransporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    RecievepackagewholesalerreportComponent.prototype.openpackage = function (id, level) {
        var _this = this;
        this.levelvalue = level;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getPackageId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            _this.displayTable = true;
            //this.openpackagecall(id,this.mypublickey);
            /*Transfer child packages to user account*/
            if (Array.isArray(_this.mlist[0].packages))
                var meds = _this.mlist[0].packages;
            else
                var meds = _this.mlist[0].packages.split(',');
            if (meds.length > 0) {
                for (var j = 0; j < meds.length; j++) {
                    _this.httpuser.getPackageStatus3(meds[j]).subscribe(function (pdata) {
                        _this.httpuser.getPackageId(id).subscribe(function (packagedata) {
                            _this.plist = packagedata;
                            _this.transporter(_this.plist[0].serial, _this.plist[0].medicines, _this.plist[0].barcode, _this.plist[0].location, _this.plist[0].level, _this.plist[0].packages, _this.plist[0].PackageId, _this.plist[0].role, _this.plist[0].time, _this.mypublickey, _this.packageStatus);
                        });
                        //this.getByPackageId(pdata.PackageId,'4');
                    });
                }
            }
            /*Transfer child medicines to user account*/
            if (Array.isArray(_this.mlist[0].medicines))
                var meds = _this.mlist[0].medicines;
            else
                var meds = _this.mlist[0].medicines.split(',');
            if (meds.length > 0) {
                for (var j = 0; j < meds.length; j++) {
                    _this.httpuser.getMedicineStatus3(meds[j]).subscribe(function (mdata) {
                        _this.httpuser.getMedicineId(id).subscribe(function (medicinedata) {
                            _this.medlist = medicinedata;
                            _this.medicineTransporter(_this.medlist[0].serial, _this.medlist[0].medicine, _this.medlist[0].barcode, _this.medlist[0].location, _this.medlist[0].weight, _this.medlist[0].Edate, _this.medlist[0].Mdate, _this.medlist[0].MedicineId, _this.medlist[0].role, _this.medlist[0].time, _this.mypublickey, _this.medicineStatus);
                        });
                        //this.medicinedetails.push(mdata);
                    });
                }
            }
            _this.httpuser.deletePackageTransport(id, _this.mypublickey).subscribe(function (res) {
                alert("Package Opened ");
            });
            //  const Metadata = {
            //   "action": "openPackage",
            //   "payloaddata": {
            //       "serialNumber": this.mlist[0].serial,
            //       "userRole": this.myrole,
            //       "admin": false,
            // 	  "level":this.levelvalue
            //   },
            //   "private":this.privateKey,
            //   "public": this.mypublickey
            //     }	    
            // const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json'
            // })
            // }
            //     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
            //  (val) => {	
            //   console.log("POST call successful value returned in body", val);
            //   this.blockchain = val;
            //   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //     this.status = JSON.parse(this.blockchain.response.body);            
            //     this.statusValue = this.status.data[0].status;
            //     this.itemId = this.status.data[0].id;
            //     if (this.statusValue == 'COMMITTED') {   
            // 	   this.displayTable=true; 
            // 	  //this.openpackagecall(id,this.mypublickey);
            // 		/*Transfer child packages to user account*/
            // 			if(Array.isArray(this.mlist[0].packages))
            // 				var meds = this.mlist[0].packages;
            // 			else
            // 				var meds = this.mlist[0].packages.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getPackageStatus3(meds[j]).subscribe((pdata) =>{
            // 						  this.httpuser.getPackageId(id).subscribe(packagedata => {
            // 								this.plist=packagedata;
            // 								this.transporter(this.plist[0].serial,this.plist[0].medicines, this.plist[0].barcode, this.plist[0].location, this.plist[0].level, this.plist[0].packages, this.plist[0].PackageId, this.plist[0].role, this.plist[0].time, this.mypublickey,this.packageStatus);
            // 						});		
            // 						//this.getByPackageId(pdata.PackageId,'4');
            // 					});
            // 				}
            // 			}
            // 			/*Transfer child medicines to user account*/
            // 			if(Array.isArray(this.mlist[0].medicines))
            // 				var meds = this.mlist[0].medicines;
            // 			else
            // 				var meds = this.mlist[0].medicines.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getMedicineStatus3(meds[j]).subscribe((mdata) =>{
            // 							this.httpuser.getMedicineId(id).subscribe(medicinedata => {
            // 								this.medlist=medicinedata;
            // 								 this.medicineTransporter(this.medlist[0].serial,this.medlist[0].medicine,this.medlist[0].barcode,this.medlist[0].location,this.medlist[0].weight,this.medlist[0].Edate,this.medlist[0].Mdate,this.medlist[0].MedicineId,this.medlist[0].role,this.medlist[0].time,this.mypublickey,this.medicineStatus);
            // 						});
            // 							//this.medicinedetails.push(mdata);
            // 					});
            // 				}
            // 			}
            // 			this.httpuser.deletePackageTransport(id,this.mypublickey).subscribe(res => {
            // 				alert("Package Opened ");
            // 			 });
            // 			//alert("Package Opened ");
            //   }
            //   else{
            // 	  alert("Process not completed");
            //   }
            //   }
            //   else {
            //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //       this.blockchain2 =val
            //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //         this.status = JSON.parse(this.blockchain2.body);
            //         console.log('json value2', this.status.data[0].status);
            //         this.statusValue = this.status.data[0].status;
            //         this.itemId = this.status.data[0].id;
            //         if (this.statusValue == 'COMMITTED') {
            // 				/*Transfer child packages to user account*/
            // 			if(Array.isArray(this.mlist[0].packages))
            // 				var meds = this.mlist[0].packages;
            // 			else
            // 				var meds = this.mlist[0].packages.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getPackageStatus3(meds[j]).subscribe((pdata) =>{
            // 						  this.httpuser.getPackageId(id).subscribe(packagedata => {
            // 								this.plist=packagedata;
            // 								this.transporter(this.plist[0].serial,this.plist[0].medicines, this.plist[0].barcode, this.plist[0].location, this.plist[0].level, this.plist[0].packages, this.plist[0].PackageId, this.plist[0].role, this.plist[0].time, this.mypublickey,this.packageStatus);
            // 						});		
            // 						//this.getByPackageId(pdata.PackageId,'4');
            // 					});
            // 				}
            // 			}
            // 			/*Transfer child medicines to user account*/
            // 			if(Array.isArray(this.mlist[0].medicines))
            // 				var meds = this.mlist[0].medicines;
            // 			else
            // 				var meds = this.mlist[0].medicines.split(',');
            // 			if(meds.length>0)
            // 			{
            // 				for(var j=0;j < meds.length; j++)
            // 				{
            // 					this.httpuser.getMedicineStatus3(meds[j]).subscribe((mdata) =>{
            // 							this.httpuser.getMedicineId(id).subscribe(medicinedata => {
            // 								this.medlist=medicinedata;
            // 								 this.medicineTransporter(this.medlist[0].serial,this.medlist[0].medicine,this.medlist[0].barcode,this.medlist[0].location,this.medlist[0].weight,this.medlist[0].Edate,this.medlist[0].Mdate,this.medlist[0].MedicineId,this.medlist[0].role,this.medlist[0].time,this.mypublickey,this.medicineStatus);
            // 						});
            // 							//this.medicinedetails.push(mdata);
            // 					});
            // 				}
            // 			}
            // 				this.httpuser.deletePackageTransport(id,this.mypublickey).subscribe(res => {
            // 				alert("Package Opened ");
            // 			 });
            //         }
            //         else {
            //           alert('Request Rejected');
            //         }
            //       }
            //     })
            //   }
            // // }).catch(function (err) {
            // //   console.log(err.message);
            // });
        });
    };
    RecievepackagewholesalerreportComponent.prototype.medicineTransporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_7__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    RecievepackagewholesalerreportComponent.prototype.exporttocsv = function () {
        var data = [];
        var datarow = {};
        if (Array.isArray(this.TMlist))
            this.meds = this.TMlist;
        else
            this.meds = this.TMlist.split(',');
        for (var i = 0; i <= this.meds.length; i++) {
            console.log("meds==" + this.meds[i]);
            if (typeof this.meds[i] != "undefined") {
                datarow = {
                    serial: this.meds[i].serial,
                    location: this.meds[i].location,
                    level: this.meds[i].level,
                    time: this.meds[i].time,
                };
                data.push(datarow);
            }
        }
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            headers: ["Serial Number", "Location", "Level", "Date/Time"]
        };
        new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_8__["Angular5Csv"](data, 'Report1', options);
        return true;
    };
    RecievepackagewholesalerreportComponent.prototype.mTransection = function (serial, distributerId, transpoterId) {
        var that = this;
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        this.transection = new src_app_admin_medicine_package_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"](serial, distributerId, transpoterId);
        this.base = this.httpuser.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
        });
        //  const Metadata = {
        // 			  "action": "sendToDistributer",
        //     "payloaddata": {
        //         "serialNumber": serial,
        //         "distributer": {
        //             "address": distributerId,
        //             "comment": "In Transaction"
        //         },
        //         "transporterid": transpoterId,
        // 		"level":this.levelvalue
        //     },
        // 				"private":this.privateKey,
        // 				"public": this.mypublickey
        // 					}	    
        // 	const httpOptions = {
        //       headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //       })
        //     };
        //             var x = this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
        //        (val) => {	
        // console.log("POST call successful value returned in body", val);
        // this.blockchain = val;
        // if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
        //   JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //   this.status = JSON.parse(this.blockchain.response.body);            
        //   this.statusValue = this.status.data[0].status;
        //   this.itemId = this.status.data[0].id;
        //   if (this.statusValue == 'COMMITTED') {
        //     this.transection = new Transection(serial,distributerId,transpoterId);
        //     this.base = this.httpuser.medicineTransection(this.transection);
        //     this.call = this.base.subscribe(data => {        
        //         alert('Request Accepted');       
        //       });
        //     }
        //     else {
        //       alert('Request Rejected');
        //     }
        //   } else {
        //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //       this.blockchain2 =val
        //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
        //         this.status = JSON.parse(this.blockchain2.body);
        //         console.log('json value2', this.status.data[0].status);
        //         this.statusValue = this.status.data[0].status;
        //         this.itemId = this.status.data[0].id;
        //         if (this.statusValue == 'COMMITTED') {
        //           this.transection = new Transection(serial,distributerId,transpoterId);
        //           this.base = this.httpuser.medicineTransection(this.transection);
        //           this.call = this.base.subscribe(data => {              
        //              alert('Request Accepted');            
        //           });
        //         }
        //         else {
        //           alert('Request Rejected');
        //         }
        //       }
        //     })
        //   }
        // }).catch(function (err) {
        //   console.log(err.message);
        //});
    };
    RecievepackagewholesalerreportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recievepackagewholesalerreport',
            template: __webpack_require__(/*! ./recievepackagewholesalerreport.component.html */ "./src/app/send/recievepackagewholesalerreport/recievepackagewholesalerreport.component.html"),
            styles: [__webpack_require__(/*! ./recievepackagewholesalerreport.component.css */ "./src/app/send/recievepackagewholesalerreport/recievepackagewholesalerreport.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], RecievepackagewholesalerreportComponent);
    return RecievepackagewholesalerreportComponent;
}());



/***/ }),

/***/ "./src/app/send/senddistributor/senddistributor.component.css":
/*!********************************************************************!*\
  !*** ./src/app/send/senddistributor/senddistributor.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbmQvc2VuZGRpc3RyaWJ1dG9yL3NlbmRkaXN0cmlidXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/send/senddistributor/senddistributor.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/send/senddistributor/senddistributor.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n\t<br>\n\t<br>\n\n\t<form>\n\t\n        <div class=\"row\"> \n          <div class=\"col\"><div class=\"form-group\">\n            <label>Packing Barcode</label>\n\t\t\t<input type=\"file\" style=\"margin-left:20px;\" accept=\"image/*\" (change)=\"onFileChange($event)\">\n            <input #br type=\"text\" value=\"{{barcodevalue}}\" class=\"form-control required\" >\n          </div>\n        </div>\n        \n            \n          </div>\n            <div class=\"row text-right\">\n             \t\t<div class=\"col\">\n             \t\t\t<div class=\"form-group\">\n                  \t\t\t<button type=\"reset\" (click)=\"getByMedicineId(br.value,4)\" class=\"btn btn-primary\">Accept</button>\n\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp;\n\t\t\t\t\t\t\t<button type=\"reset\" (click)=\"getByMedicineId(br.value,5)\" class=\"btn btn-primary\">Reject</button>\n\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp;\n\t\t\t\t\t\t\t<button type=\"reset\" (click)=\"getdetails(br.value,5)\" class=\"btn btn-primary\">Get Details</button>\n                \t\t</div>\n                </div>\n             </div>\n\t</form>\n\n\n  <div *ngIf=\"displayTable\" class=\"table-responsive\">\n    <br>\n    <table class=\"table table-striped table-dark table-hover text-center\">\n      \n        <thead class=\"theme-table\">\n            <tr>            \n              <th> Serial Number</th>\n              <th>Medicine</th>\n              <th>Manufacture Date</th>\n              <th>Location</th>\n              <th>Weight(Kg)</th>                 \n            </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><a [routerLink]=\"['/medicine/details',mlist[0].serial]\">{{mlist[0].serial}}</a></td>\n            <td>{{mlist[0].medicine}}</td>\n            <td>{{mlist[0].Mdate}}</td>\n            <td>{{mlist[0].location}}</td>\n            <td>{{mlist[0].weight}}</td>           \n          </tr>\n         \n        </tbody>\n        <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th><th></th></tr></tfoot>\n      </table>\n    </div>\n\n    <div  class=\"table-responsive\">\n      <br>\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n          <thead class=\"theme-table\">\n              <tr>            \n                  <th> Serial Number</th>\n                  <th>Medicine</th>\n                  <th>Manufacture Date</th>\n                  <th>Location</th>\n                  <th>Weight</th>   \n                  <th></th>             \n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of TMlist\">\n              <td><a [routerLink]=\"['/medicine/details',list.serial]\">{{list.serial}}</a></td>\n              <td>{{list.medicine}}</td>\n              <td>{{list.Mdate}}</td>\n              <td>{{list.location}}</td>\n              <td>{{list.weight}}</td>           \n              <td><button type=\"button\"   (click)=\"serialId(list.serial)\"  class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Send to Pharma</button></td>\n              </tr>\n           \n          </tbody>\n          <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th><th></th><th></th></tr></tfoot>\n        </table>\n      </div>\n\n</div>\n\n\n   <!-- Modal -->\n   <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Medicine Transportation</h5>\n          \n        </div>\n        <div class=\"modal-body\">\n      \n      <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Serial</label>\n                <input #serial   type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n              </div></div>           \n          </div>   \n           <div class=\"row\">          \n                <div class=\"col\"><div class=\"form-group\">\n                  <label>DistributerId</label>\n           <select [(ngModel)]=\"wId1\" class=\"form-control\" >\n                <option    *ngFor=\"let wid of dlist\" [value]=\"wid.publicKey\">{{wid.firstName}}</option>\n                            </select>   \n                </div></div>\n            </div>       \n    <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>TransporterId</label>\n          <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option  *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n                            </select> \n              </div></div>           \n          </div> \t\t\n  \n            \n        </div>\n        <div class=\"modal-footer\"> \n        <button type=\"button\" class=\"btn btn-danger\" #completeModal  data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/send/senddistributor/senddistributor.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/send/senddistributor/senddistributor.component.ts ***!
  \*******************************************************************/
/*! exports provided: SenddistributorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenddistributorComponent", function() { return SenddistributorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");
/* harmony import */ var src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/medicine/medicine-list/transection */ "./src/app/admin/medicine/medicine-list/transection.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var SenddistributorComponent = /** @class */ (function () {
    function SenddistributorComponent(route, httpuser, qrReader, http) {
        this.route = route;
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.transporter1 = src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"];
        this.list = [];
        this.mlist = [];
        this.dlist = [];
        this.tlist = [];
        this.TMlist = [];
        this.transection = src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    SenddistributorComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Recived to Distributer";
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.transporterMedicineId(this.mypublickey);
        this.allPharma();
        this.allTransporter();
    };
    SenddistributorComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    SenddistributorComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    SenddistributorComponent.prototype.serialId = function (serialId) {
        this.serialvalue = serialId;
    };
    SenddistributorComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    SenddistributorComponent.prototype.transporterMedicineId = function (id) {
        var _this = this;
        return this.httpuser.transporterMedicine(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log(_this.TMlist);
        });
    };
    SenddistributorComponent.prototype.getdetails = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getMedicineId(id).subscribe(function (data) {
            _this.mlist = data;
            _this.route.navigate(['/medicinedetailsdashboard/' + _this.mlist[0].serial]);
        });
    };
    SenddistributorComponent.prototype.getByMedicineId = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getMedicineId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            _this.displayTable = true;
            if (statusid == 5)
                _this.medicineStatus = "Rejected by Distributer";
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicine, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].weight, _this.mlist[0].Edate, _this.mlist[0].Mdate, _this.mlist[0].MedicineId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.medicineStatus);
            if (statusid == 5)
                alert("Package Returned ");
            else
                alert("Package piked ");
            // const Metadata = {
            //   "action": "recieveFromWholesaler",
            //   "payloaddata": {
            //     "serialNumber": this.mlist[0].serial,
            //     "status": statusid,
            //     "comment": "Delivered"
            //   },
            //   "private": this.privateKey,
            //   "public": this.mypublickey
            // }
            // const httpOptions = {
            //   headers: new HttpHeaders({
            //     'Content-Type': 'application/json'
            //   })
            // }
            // return this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
            //   (val) => {
            //     console.log("POST call successful value returned in body", val);
            //     this.blockchain = val;
            //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //       this.status = JSON.parse(this.blockchain.response.body);
            //       this.statusValue = this.status.data[0].status;
            //       this.itemId = this.status.data[0].id;
            //       if (this.statusValue == 'COMMITTED') {
            //         this.displayTable = true;
            //   if(statusid == 5) this.medicineStatus = "Rejected by Distributer";
            //         this.transporter(this.mlist[0].serial, this.mlist[0].medicine, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].weight, this.mlist[0].Edate, this.mlist[0].Mdate,
            //           this.mlist[0].MedicineId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.medicineStatus);
            //        if(statusid == 5)
            // 		alert("Package Returned ");
            // 	else
            // 		alert("Package piked ");
            //       }
            //       else {
            //         alert("Process not completed");
            //       }
            //     }
            //     else {
            //       that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //         this.blockchain2 = val
            //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //           this.status = JSON.parse(this.blockchain2.body);
            //           console.log('json value2', this.status.data[0].status);
            //           this.statusValue = this.status.data[0].status;
            //           this.itemId = this.status.data[0].id;
            //           if (this.statusValue == 'COMMITTED') {
            // 		if(statusid == 5) this.medicineStatus = "Rejected by Distributer";
            //             this.transporter(this.mlist[0].serial, this.mlist[0].medicine, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].weight, this.mlist[0].Edate, this.mlist[0].Mdate,
            //               this.mlist[0].MedicineId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.medicineStatus);
            //            if(statusid == 5)
            // 		alert("Package Returned ");
            // 	else
            // 		alert("Package piked ");
            //           }
            //           else {
            //             alert('Request Rejected');
            //           }
            //         }
            //       })
            //     }
            //     // }).catch(function (err) {
            //     //   console.log(err.message);
            //   });
        });
    };
    SenddistributorComponent.prototype.allPharma = function () {
        var _this = this;
        return this.httpuser.getallPharmaUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    SenddistributorComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    SenddistributorComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    SenddistributorComponent.prototype.mTransection = function (serial, wholesalerId, transpoterId) {
        var _this = this;
        var that = this;
        console.log("ID", wholesalerId);
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        this.transection = new src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"](serial, wholesalerId, transpoterId);
        this.base = this.httpuser.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
            var el = _this.completeModal.nativeElement;
            el.click();
        });
        // const Metadata = {
        //   "action": "sendToPharma",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "pharma": {
        //       "address": wholesalerId,
        //       "comment": "In Transaction"
        //     },
        //     "transporterid": transpoterId
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.transection = new Transection(serial, wholesalerId, transpoterId);
        //         this.base = this.httpuser.medicineTransection(this.transection);
        //         this.call = this.base.subscribe(data => {
        //           alert('Request Accepted');
        //           let el: HTMLElement = this.completeModal.nativeElement;
        //          el.click(); 
        //         });
        //       }
        //       else {
        //         alert('Request Rejected');
        //         let el: HTMLElement = this.completeModal.nativeElement;
        //          el.click(); 
        //       }
        //     } else {
        //       that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);
        //           console.log('json value2', this.status.data[0].status);
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.transection = new Transection(serial, wholesalerId, transpoterId);
        //             this.base = this.httpuser.medicineTransection(this.transection);
        //             this.call = this.base.subscribe(data => {
        //               alert('Request Accepted');
        //             });
        //           }
        //           else {
        //             alert('Request Rejected');
        //           }
        //         }
        //       })
        //     }
        //     // }).catch(function (err) {
        //     //   console.log(err.message);
        //   });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SenddistributorComponent.prototype, "completeModal", void 0);
    SenddistributorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-senddistributor',
            template: __webpack_require__(/*! ./senddistributor.component.html */ "./src/app/send/senddistributor/senddistributor.component.html"),
            styles: [__webpack_require__(/*! ./senddistributor.component.css */ "./src/app/send/senddistributor/senddistributor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SenddistributorComponent);
    return SenddistributorComponent;
}());



/***/ }),

/***/ "./src/app/send/senddistributordashboard/senddistributordashboard.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/send/senddistributordashboard/senddistributordashboard.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    \n  }\n\n \n#heading{\n    background-color: rgb(18, 50, 190); \n    color:white;\n}\n\n \n.pd{\n  background: navy;\n}\n\n \ntd a {\n  display:block;\n  width:100%;\n  background-clip: padding-box; \n  border-radius: 5px;\n  background-color: blue;\n  color: white;\n  border: 2px solid green;\n}\n\n \na {\n  text-decoration: none !important;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC9zZW5kZGlzdHJpYnV0b3JkYXNoYm9hcmQvc2VuZGRpc3RyaWJ1dG9yZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXOztFQUViOzs7QUFHRjtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0FBQ2Y7OztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFDQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7O0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9zZW5kL3NlbmRkaXN0cmlidXRvcmRhc2hib2FyZC9zZW5kZGlzdHJpYnV0b3JkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgfVxuXG4gXG4jaGVhZGluZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDUwLCAxOTApOyBcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5wZHtcbiAgYmFja2dyb3VuZDogbmF2eTtcbn1cbnRkIGEge1xuICBkaXNwbGF5OmJsb2NrO1xuICB3aWR0aDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyBcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/send/senddistributordashboard/senddistributordashboard.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/send/senddistributordashboard/senddistributordashboard.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n\t<br>\n\t<br>\n<div class=\"container\"><div class=\"row\">\n\t<!-- <form>\n\t\n        <div class=\"row\"> \n          <div class=\"col\"><div class=\"form-group\">\n            <label>Packing Barcode</label>\n\t\t\t<input type=\"file\" style=\"margin-left:20px;\" accept=\"image/*\" (change)=\"onFileChange($event)\">\n            <input #br type=\"text\" value=\"{{barcodevalue}}\" class=\"form-control required\" >\n          </div>\n        </div>\n        \n            \n          </div>\n            <div class=\"row text-right\">\n             \t\t<div class=\"col\">\n             \t\t\t<div class=\"form-group\">\n                  \t\t\t<button type=\"reset\" (click)=\"getByMedicineId(br.value)\" class=\"btn btn-primary\">Submit</button>\n                \t\t</div>\n                </div>\n             </div>\n\t</form> -->\n\n\n  <div *ngIf=\"displayTable\" class=\"col-xs-9 col-md-6 col-sm-6\">\n    <table class=\"table table-striped table-dark table-hover text-center\">\n      \n        <thead class=\"theme-table\">\n            <tr>            \n              <th>Serial Number</th>\n              <th>Medicine</th>\n              <th>Manufacture Date</th>\n              <th>Location</th>\n              <th>Weight(Kg)</th>                 \n            </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><a [routerLink]=\"['/medicine/details',mlist[0].serial]\">{{mlist[0].serial}}</a></td>\n            <td>{{mlist[0].medicine}}</td>\n            <td>{{mlist[0].Mdate}}</td>\n            <td>{{mlist[0].location}}</td>\n            <td>{{mlist[0].weight}}</td>           \n          </tr>\n         \n        </tbody>\n        <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th><th></th></tr></tfoot>\n      </table>\n    </div>\n\n    <div class=\"col-xs-9 col-md-6 col-sm-6\">\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n          <thead class=\"theme-table\">\n              <tr>            \n                  <th> Serial Number</th>\n                  <!-- <th>Medicine</th>\n                  <th>Manufacture Date</th>\n                  <th>Location</th>\n                  <th>Weight</th>   \n                  <th></th>              -->\n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of TMlist\">\n              <td><a [routerLink]=\"['/medicinedetailsdashboard',list.serial]\">{{list.serial}}</a></td>\n              <!-- <td>{{list.medicine}}</td>\n              <td>{{list.Mdate}}</td>\n              <td>{{list.location}}</td>\n              <td>{{list.weight}}</td>           \n              <td><button type=\"button\"   (click)=\"serialId(list.serial)\"  class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Send to Pharma</button></td>\n               -->\n            </tr>\n           \n          </tbody>\n          <tfoot class=\"theme-table\"><tr><th></th></tfoot>\n        </table>\n      </div>\n\n\n\t <div class=\"col-xs-9 col-md-6 col-sm-6\">\n    <table class=\"table table-striped table-dark table-hover text-center\">\n\n      <thead class=\"theme-table\">\n        <tr>\n          <th>Serial</th>\n\t\t  <th>Sent to</th>\n\t\t  <th>Transporter</th>\n\t\t  <th>Date</th>\n          <!-- <th>Medicine code</th>\n          <th>Manufactured Date</th>\n          <th>Location</th>\n          <th>Weight(Kg)</th> -->\n          <!-- <th></th>\n          <th></th> -->\n        </tr>\n      </thead>\n      <tbody>\n          <ng-container *ngFor=\"let tr of trans; let i = index\" >\n        <tr *ngIf=\"tr.serial\">\n          <td><a [routerLink]=\"['/medicinedetailsdashboard',tr.serial]\" style=\"color:blue\"> {{tr.serial}} </a></td>\n\t\t  <td><p *ngFor=\"let u of dlist;\"><span *ngIf=\"u.userId==tr.wholesalerId || u.publicKey==tr.wholesalerId \">{{u.firstName}} {{u.lastName}}</span></p></td>\n\t\t   <td><p *ngFor=\"let t of tlist;\"><span *ngIf=\"t.userId==tr.transporterId  || t.publicKey==tr.wholesalerId \t\">{{t.firstName}} {{t.lastName}}</span></p></td>\n\t\t   <td><span *ngIf=\"tr.edate\">{{tr.edate | date: 'dd/MM/yyyy h:mm:ss a'}}</span></td>\n\t\t   \n        </tr>\n          </ng-container>\n      </tbody>\n      \n    </table>\n\t </div>\n\t\n\n \t <div class=\"col-xs-9 col-md-6 col-sm-6\">\n    <table class=\"table table-striped table-dark table-hover text-center\">\n\n      <thead class=\"theme-table\">\n        <tr>\n          <th>Serial</th>\n\t\t  <th>Sent By</th>\n\t\t  <th>Transporter</th>\n\t\t  <th>Date</th>\n          <!-- <th>Medicine code</th>\n          <th>Manufactured Date</th>\n          <th>Location</th>\n          <th>Weight(Kg)</th> -->\n          <!-- <th></th>\n          <th></th> -->\n        </tr>\n      </thead>\n      <tbody>\n          <ng-container *ngFor=\"let tr of recievedtrans; let i = index\" >\n        <tr *ngIf=\"tr.serial\">\n          <td><a [routerLink]=\"['/medicinedetailsdashboard',tr.serial]\" style=\"color:blue\"> {{tr.serial}} </a></td>\n\t\t  <td><p *ngFor=\"let u of wlist;\"><span *ngIf=\"u.userId==tr.senderId || u.publicKey==tr.wholesalerId \">{{u.firstName}} {{u.lastName}}</span></p></td>\n\t\t   <td><p *ngFor=\"let t of tlist;\"><span *ngIf=\"t.userId==tr.transporterId  || t.publicKey==tr.wholesalerId \t\">{{t.firstName}} {{t.lastName}}</span></p></td>\n\t\t   <td><span *ngIf=\"tr.edate\">{{tr.edate | date: 'dd/MM/yyyy h:mm:ss a'}}</span></td>\n\t\t   \n        </tr>\n          </ng-container>\n      </tbody>\n      \n    </table>\n\t </div>\n\t \n\n\n\t</div>\n</div>\n\n   <!-- Modal -->\n   <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Medicine Transportation</h5>\n          \n        </div>\n        <div class=\"modal-body\">\n      \n      <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Serial</label>\n                <input #serial   type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n              </div></div>           \n          </div>   \n           <div class=\"row\">          \n                <div class=\"col\"><div class=\"form-group\">\n                  <label>DistributerId</label>\n           <select [(ngModel)]=\"wId1\" class=\"form-control\" >\n                <option    *ngFor=\"let wid of dlist\" [value]=\"wid.publicKey\">{{wid.firstName}}</option>\n                            </select>   \n                </div></div>\n            </div>       \n    <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>TransporterId</label>\n          <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option  *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n                            </select> \n              </div></div>           \n          </div> \t\t\n  \n            \n        </div>\n        <div class=\"modal-footer\"> \n        <button type=\"button\" class=\"btn btn-danger\" #completeModal  data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/send/senddistributordashboard/senddistributordashboard.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/send/senddistributordashboard/senddistributordashboard.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SenddistributordashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenddistributordashboardComponent", function() { return SenddistributordashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");
/* harmony import */ var src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/medicine/medicine-list/transection */ "./src/app/admin/medicine/medicine-list/transection.ts");







var SenddistributordashboardComponent = /** @class */ (function () {
    function SenddistributordashboardComponent(httpuser, qrReader, http) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.transporter1 = src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"];
        this.list = [];
        this.trans = [];
        this.recievedtrans = [];
        this.mlist = [];
        this.dlist = [];
        this.tlist = [];
        this.wlist = [];
        this.TMlist = [];
        this.transection = src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    SenddistributordashboardComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Recived to Distributer";
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.transporterMedicineId(this.mypublickey);
        this.allPharma();
        this.allTransporter();
        this.allWholesaler();
        this.medicinetransactions();
        this.medicinerecievetransactions();
    };
    SenddistributordashboardComponent.prototype.medicinetransactions = function () {
        var _this = this;
        return this.httpuser.getMedicineTransection().subscribe(function (data) {
            _this.trans = data;
            console.log("All Medicine trans", _this.trans);
        });
    };
    SenddistributordashboardComponent.prototype.medicinerecievetransactions = function () {
        var _this = this;
        return this.httpuser.getRecieveMedicineTransection().subscribe(function (data) {
            _this.recievedtrans = data;
            console.log("All Medicine trans", _this.trans);
        });
    };
    SenddistributordashboardComponent.prototype.allWholesaler = function () {
        var _this = this;
        return this.httpuser.getallWholesalerUser().subscribe(function (data) {
            _this.wlist = data;
            console.log(_this.wlist);
        });
    };
    SenddistributordashboardComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    SenddistributordashboardComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    SenddistributordashboardComponent.prototype.serialId = function (serialId) {
        this.serialvalue = serialId;
    };
    SenddistributordashboardComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    SenddistributordashboardComponent.prototype.transporterMedicineId = function (id) {
        var _this = this;
        return this.httpuser.transporterMedicine(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log(_this.TMlist);
        });
    };
    SenddistributordashboardComponent.prototype.getByMedicineId = function (id) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getMedicineId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            _this.displayTable = true;
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicine, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].weight, _this.mlist[0].Edate, _this.mlist[0].Mdate, _this.mlist[0].MedicineId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.medicineStatus);
            alert("Package piked ");
            // const Metadata = {
            //   "action": "recieveFromWholesaler",
            //   "payloaddata": {
            //     "serialNumber": this.mlist[0].serial,
            //     "status": 4,
            //     "comment": "Delivered"
            //   },
            //   "private": this.privateKey,
            //   "public": this.mypublickey
            // }
            // const httpOptions = {
            //   headers: new HttpHeaders({
            //     'Content-Type': 'application/json'
            //   })
            // }
            // return this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
            //   (val) => {
            //     console.log("POST call successful value returned in body", val);
            //     this.blockchain = val;
            //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //       this.status = JSON.parse(this.blockchain.response.body);
            //       this.statusValue = this.status.data[0].status;
            //       this.itemId = this.status.data[0].id;
            //       if (this.statusValue == 'COMMITTED') {
            //         this.displayTable = true;
            //         this.transporter(this.mlist[0].serial, this.mlist[0].medicine, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].weight, this.mlist[0].Edate, this.mlist[0].Mdate,
            //           this.mlist[0].MedicineId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.medicineStatus);
            //         alert("Package piked ");
            //       }
            //       else {
            //         alert("Process not completed");
            //       }
            //     }
            //     else {
            //       that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //         this.blockchain2 = val
            //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //           this.status = JSON.parse(this.blockchain2.body);
            //           console.log('json value2', this.status.data[0].status);
            //           this.statusValue = this.status.data[0].status;
            //           this.itemId = this.status.data[0].id;
            //           if (this.statusValue == 'COMMITTED') {
            //             this.transporter(this.mlist[0].serial, this.mlist[0].medicine, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].weight, this.mlist[0].Edate, this.mlist[0].Mdate,
            //               this.mlist[0].MedicineId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.medicineStatus);
            //             alert("Package piked ");
            //           }
            //           else {
            //             alert('Request Rejected');
            //           }
            //         }
            //       })
            //     }
            //     // }).catch(function (err) {
            //     //   console.log(err.message);
            //   });
        });
    };
    SenddistributordashboardComponent.prototype.allPharma = function () {
        var _this = this;
        return this.httpuser.getallPharmaUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    SenddistributordashboardComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    SenddistributordashboardComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    SenddistributordashboardComponent.prototype.mTransection = function (serial, wholesalerId, transpoterId) {
        var _this = this;
        var that = this;
        console.log("ID", wholesalerId);
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        this.transection = new src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"](serial, wholesalerId, transpoterId);
        this.base = this.httpuser.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
            var el = _this.completeModal.nativeElement;
            el.click();
        });
        // const Metadata = {
        //   "action": "sendToPharma",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "pharma": {
        //       "address": wholesalerId,
        //       "comment": "In Transaction"
        //     },
        //     "transporterid": transpoterId
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.transection = new Transection(serial, wholesalerId, transpoterId);
        //         this.base = this.httpuser.medicineTransection(this.transection);
        //         this.call = this.base.subscribe(data => {
        //           alert('Request Accepted');
        //           let el: HTMLElement = this.completeModal.nativeElement;
        //          el.click(); 
        //         });
        //       }
        //       else {
        //         alert('Request Rejected');
        //         let el: HTMLElement = this.completeModal.nativeElement;
        //          el.click(); 
        //       }
        //     } else {
        //       that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);
        //           console.log('json value2', this.status.data[0].status);
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.transection = new Transection(serial, wholesalerId, transpoterId);
        //             this.base = this.httpuser.medicineTransection(this.transection);
        //             this.call = this.base.subscribe(data => {
        //               alert('Request Accepted');
        //             });
        //           }
        //           else {
        //             alert('Request Rejected');
        //           }
        //         }
        //       })
        //     }
        //     // }).catch(function (err) {
        //     //   console.log(err.message);
        //   });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SenddistributordashboardComponent.prototype, "completeModal", void 0);
    SenddistributordashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-senddistributordashboard',
            template: __webpack_require__(/*! ./senddistributordashboard.component.html */ "./src/app/send/senddistributordashboard/senddistributordashboard.component.html"),
            styles: [__webpack_require__(/*! ./senddistributordashboard.component.css */ "./src/app/send/senddistributordashboard/senddistributordashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SenddistributordashboardComponent);
    return SenddistributordashboardComponent;
}());



/***/ }),

/***/ "./src/app/send/senddistributorreport/senddistributorreport.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/send/senddistributorreport/senddistributorreport.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbmQvc2VuZGRpc3RyaWJ1dG9ycmVwb3J0L3NlbmRkaXN0cmlidXRvcnJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/send/senddistributorreport/senddistributorreport.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/send/senddistributorreport/senddistributorreport.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n\t<br>\n\t<br>\n\n    <div  class=\"table-responsive\">\n      <br>\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n          <thead class=\"theme-table\">\n\t\t  <tr>\n\t\t\t<th colspan=\"4\"></th>\n\t\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t\t</tr>\n              <tr>            \n                  <th>Serial Number</th>\n                  <th>Medicine</th>\n                  <th>Manufacture Date</th>\n                  <th>Location</th>\n                  <th>Weight(Kg)</th>   \n                  <!-- <th></th>-->\n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of TMlist\">\n              <td><a [routerLink]=\"['/medicine/details',list.serial]\">{{list.serial}}</a></td>\n              <td>{{list.medicine}}</td>\n              <td>{{list.Mdate}}</td>\n              <td>{{list.location}}</td>\n              <td>{{list.weight}}</td>           \n              \n              </tr>\n           \n          </tbody>\n          <tfoot class=\"theme-table\"><tr>\n\t\t\t<th colspan=\"4\"></th>\n\t\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t\t</tr></tfoot>\n        </table>\n      </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/send/senddistributorreport/senddistributorreport.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/send/senddistributorreport/senddistributorreport.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SenddistributorreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenddistributorreportComponent", function() { return SenddistributorreportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");
/* harmony import */ var src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/medicine/medicine-list/transection */ "./src/app/admin/medicine/medicine-list/transection.ts");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular5-csv/dist/Angular5-csv */ "./node_modules/angular5-csv/dist/Angular5-csv.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7__);








var SenddistributorreportComponent = /** @class */ (function () {
    function SenddistributorreportComponent(httpuser, qrReader, http) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.transporter1 = src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"];
        this.list = [];
        this.mlist = [];
        this.dlist = [];
        this.tlist = [];
        this.TMlist = [];
        this.meds = [];
        this.transection = src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    SenddistributorreportComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Recived to Distributer";
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.transporterMedicineId(this.mypublickey);
        this.allPharma();
        this.allTransporter();
    };
    SenddistributorreportComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    SenddistributorreportComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    SenddistributorreportComponent.prototype.serialId = function (serialId) {
        this.serialvalue = serialId;
    };
    SenddistributorreportComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    SenddistributorreportComponent.prototype.transporterMedicineId = function (id) {
        var _this = this;
        return this.httpuser.transporterMedicine(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log(_this.TMlist);
        });
    };
    SenddistributorreportComponent.prototype.getByMedicineId = function (id) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getMedicineId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            _this.displayTable = true;
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicine, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].weight, _this.mlist[0].Edate, _this.mlist[0].Mdate, _this.mlist[0].MedicineId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.medicineStatus);
            alert("Package piked ");
            // const Metadata = {
            //   "action": "recieveFromWholesaler",
            //   "payloaddata": {
            //     "serialNumber": this.mlist[0].serial,
            //     "status": 4,
            //     "comment": "Delivered"
            //   },
            //   "private": this.privateKey,
            //   "public": this.mypublickey
            // }
            // const httpOptions = {
            //   headers: new HttpHeaders({
            //     'Content-Type': 'application/json'
            //   })
            // }
            // return this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
            //   (val) => {
            //     console.log("POST call successful value returned in body", val);
            //     this.blockchain = val;
            //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //       this.status = JSON.parse(this.blockchain.response.body);
            //       this.statusValue = this.status.data[0].status;
            //       this.itemId = this.status.data[0].id;
            //       if (this.statusValue == 'COMMITTED') {
            //         this.displayTable = true;
            //         this.transporter(this.mlist[0].serial, this.mlist[0].medicine, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].weight, this.mlist[0].Edate, this.mlist[0].Mdate,
            //           this.mlist[0].MedicineId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.medicineStatus);
            //         alert("Package piked ");
            //       }
            //       else {
            //         alert("Process not completed");
            //       }
            //     }
            //     else {
            //       that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //         this.blockchain2 = val
            //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //           this.status = JSON.parse(this.blockchain2.body);
            //           console.log('json value2', this.status.data[0].status);
            //           this.statusValue = this.status.data[0].status;
            //           this.itemId = this.status.data[0].id;
            //           if (this.statusValue == 'COMMITTED') {
            //             this.transporter(this.mlist[0].serial, this.mlist[0].medicine, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].weight, this.mlist[0].Edate, this.mlist[0].Mdate,
            //               this.mlist[0].MedicineId, this.mlist[0].role, this.mlist[0].time, this.mypublickey,this.medicineStatus);
            //             alert("Package piked ");
            //           }
            //           else {
            //             alert('Request Rejected');
            //           }
            //         }
            //       })
            //     }
            //     // }).catch(function (err) {
            //     //   console.log(err.message);
            //   });
        });
    };
    SenddistributorreportComponent.prototype.allPharma = function () {
        var _this = this;
        return this.httpuser.getallPharmaUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    SenddistributorreportComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    SenddistributorreportComponent.prototype.exporttocsv = function () {
        var data = [];
        var datarow = {};
        if (Array.isArray(this.TMlist))
            this.meds = this.TMlist;
        else
            this.meds = this.TMlist.split(',');
        for (var i = 0; i <= this.meds.length; i++) {
            console.log("meds==" + this.meds[i]);
            if (typeof this.meds[i] != "undefined") {
                datarow = {
                    serial: this.meds[i].serial,
                    medicine: this.meds[i].medicine,
                    manufactured: this.meds[i].Mdate,
                    location: this.meds[i].location,
                    weight: this.meds[i].weight
                };
                data.push(datarow);
            }
        }
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            headers: ["Serial Number", "Medicine code", "Manufactured Date", "Location", "Weight"]
        };
        new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7__["Angular5Csv"](data, 'Report1', options);
        return true;
    };
    SenddistributorreportComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    SenddistributorreportComponent.prototype.mTransection = function (serial, wholesalerId, transpoterId) {
        var _this = this;
        var that = this;
        console.log("ID", wholesalerId);
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        this.transection = new src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"](serial, wholesalerId, transpoterId);
        this.base = this.httpuser.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
            var el = _this.completeModal.nativeElement;
            el.click();
        });
        // const Metadata = {
        //   "action": "sendToPharma",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "pharma": {
        //       "address": wholesalerId,
        //       "comment": "In Transaction"
        //     },
        //     "transporterid": transpoterId
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.transection = new Transection(serial, wholesalerId, transpoterId);
        //         this.base = this.httpuser.medicineTransection(this.transection);
        //         this.call = this.base.subscribe(data => {
        //           alert('Request Accepted');
        //           let el: HTMLElement = this.completeModal.nativeElement;
        //          el.click(); 
        //         });
        //       }
        //       else {
        //         alert('Request Rejected');
        //         let el: HTMLElement = this.completeModal.nativeElement;
        //          el.click(); 
        //       }
        //     } else {
        //       that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);
        //           console.log('json value2', this.status.data[0].status);
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.transection = new Transection(serial, wholesalerId, transpoterId);
        //             this.base = this.httpuser.medicineTransection(this.transection);
        //             this.call = this.base.subscribe(data => {
        //               alert('Request Accepted');
        //             });
        //           }
        //           else {
        //             alert('Request Rejected');
        //           }
        //         }
        //       })
        //     }
        //     // }).catch(function (err) {
        //     //   console.log(err.message);
        //   });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('completeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SenddistributorreportComponent.prototype, "completeModal", void 0);
    SenddistributorreportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-senddistributorreport',
            template: __webpack_require__(/*! ./senddistributorreport.component.html */ "./src/app/send/senddistributorreport/senddistributorreport.component.html"),
            styles: [__webpack_require__(/*! ./senddistributorreport.component.css */ "./src/app/send/senddistributorreport/senddistributorreport.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SenddistributorreportComponent);
    return SenddistributorreportComponent;
}());



/***/ }),

/***/ "./src/app/send/sendpharma/sendpharma.component.css":
/*!**********************************************************!*\
  !*** ./src/app/send/sendpharma/sendpharma.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbmQvc2VuZHBoYXJtYS9zZW5kcGhhcm1hLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/send/sendpharma/sendpharma.component.html":
/*!***********************************************************!*\
  !*** ./src/app/send/sendpharma/sendpharma.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n\t<br>\n\t<br>\n\n\t<form>\n\t\n        <div class=\"row\"> \n          <div class=\"col\"><div class=\"form-group\">\n            <label>Packing Barcode</label>\n\t\t\t<input type=\"file\" style=\"margin-left:20px;\" accept=\"image/*\" (change)=\"onFileChange($event)\">\n            <input #br type=\"text\" value=\"{{barcodevalue}}\" class=\"form-control required\" >\n          </div>\n        </div>\n        \n            \n          </div>\n            <div class=\"row text-right\">\n             \t\t<div class=\"col\">\n             \t\t\t<div class=\"form-group\">\n                  \t\t\t<button type=\"reset\" (click)=\"getByMedicineId(br.value,4)\" class=\"btn btn-primary\">Accept</button>\n\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp;\n\t\t\t\t\t\t\t<button type=\"reset\" (click)=\"getByMedicineId(br.value,5)\" class=\"btn btn-primary\">Reject</button>\n\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp;\n\t\t\t\t\t\t\t<button type=\"reset\" (click)=\"getdetails(br.value,5)\" class=\"btn btn-primary\">Get Details</button> \n                \t\t</div>\n                </div>\n             </div>\n\t</form>\n\n\n  <div *ngIf=\"displayTable\" class=\"table-responsive\">\n    <br>\n    <table class=\"table table-striped table-dark table-hover text-center\">\n      \n        <thead class=\"theme-table\">\n            <tr>            \n              <th> Serial Number</th>\n              <th>Medicine</th>\n              <th>Manufacture Date</th>\n              <th>Location</th>\n              <th>Weight (Kg)</th>  \n              \n            </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><a [routerLink]=\"['/medicine/details',mlist[0].serial]\">{{mlist[0].serial}}</a></td>\n            <td>{{mlist[0].medicine}}</td>\n            <td>{{mlist[0].Mdate}}</td>\n            <td>{{mlist[0].location}}</td>\n            <td>{{mlist[0].weight}}</td>\n            </tr>\n         \n        </tbody>\n        <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th><th></th></tr></tfoot>\n      </table>\n    </div>\n\n    <div  class=\"table-responsive\">\n      <br>\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n          <thead class=\"theme-table\">\n              <tr>            \n                  <th> Serial Number</th>\n                  <th>Medicine</th>\n                  <th>Manufacture Date</th>\n                  <th>Location</th>\n                  <th>Weight</th>   \n                        \n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of TMlist\">\n              <td><a [routerLink]=\"['/medicine/details',list.serial]\">{{list.serial}}</a></td>\n              <td>{{list.medicine}}</td>\n              <td>{{list.Mdate}}</td>\n              <td>{{list.location}}</td>\n              <td>{{list.weight}}</td>           \n            <!-- <td><button type=\"button\"   (click)=\"serialId(list.serial)\"  class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Send to Customer</button></td> -->\n              </tr>\n           \n          </tbody>\n          <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th><th></th></tr></tfoot>\n        </table>\n      </div>\n    \n</div>\n\n\n   <!-- Modal -->\n   <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Medicine Transportation</h5>\n          \n        </div>\n        <div class=\"modal-body\">\n      \n      <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Serial</label>\n                <input #serial   type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n              </div></div>           \n          </div>   \n           <div class=\"row\">          \n                <div class=\"col\"><div class=\"form-group\">\n                  <label>PharmaId</label>\n           <select [(ngModel)]=\"wId1\" class=\"form-control\" >\n                <option    *ngFor=\"let wid of dlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n                            </select>   \n                </div></div>\n            </div>       \n    <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>TransporterId</label>\n          <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option  *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n                            </select> \n              </div></div>           \n          </div> \t\t\n  \n            \n        </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\"  data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/send/sendpharma/sendpharma.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/send/sendpharma/sendpharma.component.ts ***!
  \*********************************************************/
/*! exports provided: SendpharmaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendpharmaComponent", function() { return SendpharmaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");
/* harmony import */ var src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/medicine/medicine-list/transection */ "./src/app/admin/medicine/medicine-list/transection.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var SendpharmaComponent = /** @class */ (function () {
    function SendpharmaComponent(route, httpuser, qrReader, http) {
        this.route = route;
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.transporter1 = src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"];
        this.list = [];
        this.mlist = [];
        this.dlist = [];
        this.tlist = [];
        this.TMlist = [];
        this.transection = src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    SendpharmaComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Recived to Pharma";
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.transporterMedicineId(this.mypublickey);
        this.allPharma();
        this.allTransporter();
    };
    SendpharmaComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    SendpharmaComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    SendpharmaComponent.prototype.serialId = function (serialId) {
        this.serialvalue = serialId;
    };
    SendpharmaComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    SendpharmaComponent.prototype.transporterMedicineId = function (id) {
        var _this = this;
        return this.httpuser.transporterMedicine(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log(_this.TMlist);
        });
    };
    SendpharmaComponent.prototype.getdetails = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getMedicineId(id).subscribe(function (data) {
            _this.mlist = data;
            _this.route.navigate(['/medicinedetailsdashboard/' + _this.mlist[0].serial]);
        });
    };
    SendpharmaComponent.prototype.getByMedicineId = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getMedicineId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            _this.displayTable = true;
            if (statusid == 5)
                _this.medicineStatus = "Rejected by Pharma";
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicine, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].weight, _this.mlist[0].Edate, _this.mlist[0].Mdate, _this.mlist[0].MedicineId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.medicineStatus);
            if (statusid == 5)
                alert("Package Returned ");
            else
                alert("Package piked ");
            //  const Metadata = {
            //   "action": "recieveFromDistributer",
            //   "payloaddata": {
            //       "serialNumber": this.mlist[0].serial,
            //       "status": statusid,
            //       "comment": "Delivered"
            //   },
            //   "private":this.privateKey,
            //   "public": this.mypublickey
            //     }	    
            // const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json'
            // })
            // }
            //     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
            //  (val) => {	
            //   console.log("POST call successful value returned in body", val);
            //   this.blockchain = val;
            //   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //     this.status = JSON.parse(this.blockchain.response.body);            
            //     this.statusValue = this.status.data[0].status;
            //     this.itemId = this.status.data[0].id;
            //     if (this.statusValue == 'COMMITTED') {   
            //    this.displayTable=true; 
            //    if(statusid == 5) this.medicineStatus = "Rejected by Pharma";
            //    this.transporter(this.mlist[0].serial,this.mlist[0].medicine,this.mlist[0].barcode,this.mlist[0].location,this.mlist[0].weight,this.mlist[0].Edate,this.mlist[0].Mdate,
            //     this.mlist[0].MedicineId,this.mlist[0].role,this.mlist[0].time,this.mypublickey,this.medicineStatus);
            // 				if(statusid == 5)
            // 					alert("Package Returned ");
            // 				else
            // 					alert("Package piked ");
            //   }
            //   else{
            // 	  alert("Process not completed");
            //   }
            //   }
            //   else {
            //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //       this.blockchain2 =val
            //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //         this.status = JSON.parse(this.blockchain2.body);
            //         console.log('json value2', this.status.data[0].status);
            //         this.statusValue = this.status.data[0].status;
            //         this.itemId = this.status.data[0].id;
            //         if (this.statusValue == 'COMMITTED') {
            // 			 if(statusid == 5) this.medicineStatus = "Rejected by Pharma";
            //           this.transporter(this.mlist[0].serial,this.mlist[0].medicine,this.mlist[0].barcode,this.mlist[0].location,this.mlist[0].weight,this.mlist[0].Edate,this.mlist[0].Mdate,
            //             this.mlist[0].MedicineId,this.mlist[0].role,this.mlist[0].time,this.mypublickey,this.medicineStatus);
            //             if(statusid == 5)
            // 				alert("Package Returned ");
            // 			else
            // 				alert("Package piked ");
            //         }
            //         else {
            //           alert('Request Rejected');
            //         }
            //       }
            //     })
            //   }
            // // }).catch(function (err) {
            // //   console.log(err.message);
            // });
        });
    };
    SendpharmaComponent.prototype.allPharma = function () {
        var _this = this;
        return this.httpuser.getallPharmaUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    SendpharmaComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    SendpharmaComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    SendpharmaComponent.prototype.mTransection = function (serial, wholesalerId, transpoterId) {
        console.log(serial, wholesalerId, transpoterId);
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        //  const Metadata = {
        // 			  "action": "sendToPharma",
        //     "payloaddata": {
        //         "serialNumber": serial,
        //         "wholesaler": {
        //             "address": wholesalerId,
        //             "comment": "In Transaction"
        //         },
        //         "transporterid": transpoterId
        //     },
        // 				"private":this.privateKey,
        // 				"public": this.mypublickey
        // 					}	    
        // 	const httpOptions = {
        //       headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //       })
        //     };
        //             var x = this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
        //        (val) => {	
        // 	   this.blockchain=val;
        //         console.log("POST call successful value returned in body",val);
        // 	   if(this.blockchain){
        //     this.transection = new Transection(serial,wholesalerId,transpoterId);
        //     this.base = this.httpuser.medicineTransection(this.transection);
        //     this.call = this.base.subscribe(
        //       data => {        
        //         alert("done");        
        //       },
        //       err => {
        //         console.log(err);
        //       },
        //       () => {
        //         console.log("Done");
        //       }
        //     );
        //   }
        //   else{
        // 	  alert("Process not completed");
        //   }
        //   });
    };
    SendpharmaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sendpharma',
            template: __webpack_require__(/*! ./sendpharma.component.html */ "./src/app/send/sendpharma/sendpharma.component.html"),
            styles: [__webpack_require__(/*! ./sendpharma.component.css */ "./src/app/send/sendpharma/sendpharma.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SendpharmaComponent);
    return SendpharmaComponent;
}());



/***/ }),

/***/ "./src/app/send/sendpharmadashboard/sendpharmadashboard.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/send/sendpharmadashboard/sendpharmadashboard.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbmQvc2VuZHBoYXJtYWRhc2hib2FyZC9zZW5kcGhhcm1hZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/send/sendpharmadashboard/sendpharmadashboard.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/send/sendpharmadashboard/sendpharmadashboard.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \t <div class=\"col-xs-9 col-md-6 col-sm-6\">\n    <table class=\"table table-striped table-dark table-hover text-center\">\n\n      <thead class=\"theme-table\">\n        <tr>\n          <th>Serial</th>\n\t\t  <th>Sent By</th>\n\t\t  <th>Transporter</th>\n\t\t  <th>Date</th>\n          <!-- <th>Medicine code</th>\n          <th>Manufactured Date</th>\n          <th>Location</th>\n          <th>Weight(Kg)</th> -->\n          <!-- <th></th>\n          <th></th> -->\n        </tr>\n      </thead>\n      <tbody>\n          <ng-container *ngFor=\"let tr of recievedtrans; let i = index\" >\n        <tr *ngIf=\"tr.serial\">\n          <td><a [routerLink]=\"['/medicinedetailsdashboard',tr.serial]\" style=\"color:white\"> {{tr.serial}} </a></td>\n\t\t  <td><p *ngFor=\"let u of dlist;\"><span *ngIf=\"u.userId==tr.senderId || u.publicKey==tr.wholesalerId \">{{u.firstName}} {{u.lastName}}</span></p></td>\n\t\t   <td><p *ngFor=\"let t of tlist;\"><span *ngIf=\"t.userId==tr.transporterId  || t.publicKey==tr.wholesalerId \t\">{{t.firstName}} {{t.lastName}}</span></p></td>\n\t\t   <td><span *ngIf=\"tr.edate\">{{tr.edate | date: 'dd/MM/yyyy h:mm:ss a'}}</span></td>\n\t\t   \n        </tr>\n          </ng-container>\n      </tbody>\n      \n    </table>\n\t </div>\n\t \n"

/***/ }),

/***/ "./src/app/send/sendpharmadashboard/sendpharmadashboard.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/send/sendpharmadashboard/sendpharmadashboard.component.ts ***!
  \***************************************************************************/
/*! exports provided: SendpharmadashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendpharmadashboardComponent", function() { return SendpharmadashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var SendpharmadashboardComponent = /** @class */ (function () {
    function SendpharmadashboardComponent(httpuser, qrReader, http) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.recievedtrans = [];
        this.dlist = [];
        this.tlist = [];
    }
    SendpharmadashboardComponent.prototype.ngOnInit = function () {
        this.medicinerecievetransactions();
        this.allDistributer();
        this.allTransporter();
    };
    SendpharmadashboardComponent.prototype.medicinerecievetransactions = function () {
        var _this = this;
        return this.httpuser.getRecieveMedicineTransection().subscribe(function (data) {
            _this.recievedtrans = data;
            console.log("All Medicine trans", _this.recievedtrans);
        });
    };
    SendpharmadashboardComponent.prototype.allDistributer = function () {
        var _this = this;
        return this.httpuser.getallDistributerUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    SendpharmadashboardComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    SendpharmadashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sendpharmadashboard',
            template: __webpack_require__(/*! ./sendpharmadashboard.component.html */ "./src/app/send/sendpharmadashboard/sendpharmadashboard.component.html"),
            styles: [__webpack_require__(/*! ./sendpharmadashboard.component.css */ "./src/app/send/sendpharmadashboard/sendpharmadashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SendpharmadashboardComponent);
    return SendpharmadashboardComponent;
}());



/***/ }),

/***/ "./src/app/send/sendpharmareport/sendpharmareport.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/send/sendpharmareport/sendpharmareport.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbmQvc2VuZHBoYXJtYXJlcG9ydC9zZW5kcGhhcm1hcmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/send/sendpharmareport/sendpharmareport.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/send/sendpharmareport/sendpharmareport.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n\t<br>\n\t<br>\n\n\n    <div  class=\"table-responsive\">\n      <br>\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n          <thead class=\"theme-table\">\n\t\t  <tr>\n\t\t\t<th colspan=\"4\"></th>\n\t\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t\t</tr>\n              <tr>            \n                  <th> Serial Number</th>\n                  <th>Medicine</th>\n                  <th>Manufacture Date</th>\n                  <th>Location</th>\n                  <th>Weight(Kg)</th>   \n                        \n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of TMlist\">\n              <td><a [routerLink]=\"['/medicine/details',list.serial]\">{{list.serial}}</a></td>\n              <td>{{list.medicine}}</td>\n              <td>{{list.Mdate}}</td>\n              <td>{{list.location}}</td>\n              <td>{{list.weight}}</td>           \n            <!-- <td><button type=\"button\"   (click)=\"serialId(list.serial)\"  class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Send to Customer</button></td> -->\n              </tr>\n           \n          </tbody>\n          <tfoot class=\"theme-table\"><tr>\n\t\t\t<th colspan=\"4\"></th>\n\t\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t\t</tr></tfoot>\n        </table>\n      </div>\n    \n</div>\n\n\n   <!-- Modal -->\n   <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Medicine Transportation</h5>\n          \n        </div>\n        <div class=\"modal-body\">\n      \n      <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Serial</label>\n                <input #serial   type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n              </div></div>           \n          </div>   \n           <div class=\"row\">          \n                <div class=\"col\"><div class=\"form-group\">\n                  <label>PharmaId</label>\n           <select [(ngModel)]=\"wId1\" class=\"form-control\" >\n                <option    *ngFor=\"let wid of dlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n                            </select>   \n                </div></div>\n            </div>       \n    <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>TransporterId</label>\n          <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option  *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n                            </select> \n              </div></div>           \n          </div> \t\t\n  \n            \n        </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\"  data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/send/sendpharmareport/sendpharmareport.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/send/sendpharmareport/sendpharmareport.component.ts ***!
  \*********************************************************************/
/*! exports provided: SendpharmareportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendpharmareportComponent", function() { return SendpharmareportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");
/* harmony import */ var src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/medicine/medicine-list/transection */ "./src/app/admin/medicine/medicine-list/transection.ts");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular5-csv/dist/Angular5-csv */ "./node_modules/angular5-csv/dist/Angular5-csv.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7__);








var SendpharmareportComponent = /** @class */ (function () {
    function SendpharmareportComponent(httpuser, qrReader, http) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.selectedWId = '';
        this.selectedTId = '';
        this.serialvalue = " ";
        this.transporter1 = src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"];
        this.list = [];
        this.mlist = [];
        this.dlist = [];
        this.tlist = [];
        this.TMlist = [];
        this.meds = [];
        this.transection = src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    SendpharmareportComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Recived to Pharma";
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.transporterMedicineId(this.mypublickey);
        this.allPharma();
        this.allTransporter();
    };
    SendpharmareportComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    SendpharmareportComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    SendpharmareportComponent.prototype.serialId = function (serialId) {
        this.serialvalue = serialId;
    };
    SendpharmareportComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    SendpharmareportComponent.prototype.transporterMedicineId = function (id) {
        var _this = this;
        return this.httpuser.transporterMedicine(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log(_this.TMlist);
        });
    };
    SendpharmareportComponent.prototype.getByMedicineId = function (id) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getMedicineId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            _this.displayTable = true;
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicine, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].weight, _this.mlist[0].Edate, _this.mlist[0].Mdate, _this.mlist[0].MedicineId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.medicineStatus);
            alert("Package piked ");
            // const Metadata = {
            //   "action": "recieveFromDistributer",
            //   "payloaddata": {
            //     "serialNumber": this.mlist[0].serial,
            //     "status": 4,
            //     "comment": "Delivered"
            //   },
            //   "private": this.privateKey,
            //   "public": this.mypublickey
            // }
            // const httpOptions = {
            //   headers: new HttpHeaders({
            //     'Content-Type': 'application/json'
            //   })
            // }
            // return this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
            //   (val) => {
            //     console.log("POST call successful value returned in body", val);
            //     this.blockchain = val;
            //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //       this.status = JSON.parse(this.blockchain.response.body);
            //       this.statusValue = this.status.data[0].status;
            //       this.itemId = this.status.data[0].id;
            //       if (this.statusValue == 'COMMITTED') {
            //         this.displayTable = true;
            //         this.transporter(this.mlist[0].serial, this.mlist[0].medicine, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].weight, this.mlist[0].Edate, this.mlist[0].Mdate,
            //           this.mlist[0].MedicineId, this.mlist[0].role, this.mlist[0].time, this.mypublickey, this.medicineStatus);
            //         alert("Package piked ");
            //       }
            //       else {
            //         alert("Process not completed");
            //       }
            //     }
            //     else {
            //       that.http.get(this.httpuser.batchUrl + "/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //         this.blockchain2 = val
            //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //           this.status = JSON.parse(this.blockchain2.body);
            //           console.log('json value2', this.status.data[0].status);
            //           this.statusValue = this.status.data[0].status;
            //           this.itemId = this.status.data[0].id;
            //           if (this.statusValue == 'COMMITTED') {
            //             this.transporter(this.mlist[0].serial, this.mlist[0].medicine, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].weight, this.mlist[0].Edate, this.mlist[0].Mdate,
            //               this.mlist[0].MedicineId, this.mlist[0].role, this.mlist[0].time, this.mypublickey, this.medicineStatus);
            //             alert("Package piked ");
            //           }
            //           else {
            //             alert('Request Rejected');
            //           }
            //         }
            //       })
            //     }
            //     // }).catch(function (err) {
            //     //   console.log(err.message);
            //   });
        });
    };
    SendpharmareportComponent.prototype.allPharma = function () {
        var _this = this;
        return this.httpuser.getallPharmaUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    SendpharmareportComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    SendpharmareportComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    SendpharmareportComponent.prototype.exporttocsv = function () {
        var data = [];
        var datarow = {};
        if (Array.isArray(this.TMlist))
            this.meds = this.TMlist;
        else
            this.meds = this.TMlist.split(',');
        for (var i = 0; i <= this.meds.length; i++) {
            console.log("meds==" + this.meds[i]);
            if (typeof this.meds[i] != "undefined") {
                datarow = {
                    serial: this.meds[i].serial,
                    medicine: this.meds[i].medicine,
                    manufactured: this.meds[i].Mdate,
                    location: this.meds[i].location,
                    weight: this.meds[i].weight
                };
                data.push(datarow);
            }
        }
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            headers: ["Serial Number", "Medicine code", "Manufactured Date", "Location", "Weight"]
        };
        new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7__["Angular5Csv"](data, 'Report1', options);
        return true;
    };
    SendpharmareportComponent.prototype.mTransection = function (serial, wholesalerId, transpoterId) {
        var _this = this;
        console.log(serial, wholesalerId, transpoterId);
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        var Metadata = {
            "action": "sendToPharma",
            "payloaddata": {
                "serialNumber": serial,
                "wholesaler": {
                    "address": wholesalerId,
                    "comment": "In Transaction"
                },
                "transporterid": transpoterId
            },
            "private": this.privateKey,
            "public": this.mypublickey
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var x = this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(function (val) {
            _this.blockchain = val;
            console.log("POST call successful value returned in body", val);
            if (_this.blockchain) {
                _this.transection = new src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"](serial, wholesalerId, transpoterId);
                _this.base = _this.httpuser.medicineTransection(_this.transection);
                _this.call = _this.base.subscribe(function (data) {
                    alert("done");
                }, function (err) {
                    console.log(err);
                }, function () {
                    console.log("Done");
                });
            }
            else {
                alert("Process not completed");
            }
        });
    };
    SendpharmareportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sendpharmareport',
            template: __webpack_require__(/*! ./sendpharmareport.component.html */ "./src/app/send/sendpharmareport/sendpharmareport.component.html"),
            styles: [__webpack_require__(/*! ./sendpharmareport.component.css */ "./src/app/send/sendpharmareport/sendpharmareport.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SendpharmareportComponent);
    return SendpharmareportComponent;
}());



/***/ }),

/***/ "./src/app/send/sendwholesaler/sendwholesaler.component.css":
/*!******************************************************************!*\
  !*** ./src/app/send/sendwholesaler/sendwholesaler.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    \n  }\n\n \n#heading{\n    background-color: rgb(18, 50, 190); \n    color:white;\n}\n\n \n.pd{\n  background: navy;\n}\n\n \ntd a {\n  display:block;\n  width:100%;\n  background-clip: padding-box; \n  border-radius: 5px;\n  background-color: blue;\n  color: white;\n  border: 2px solid green;\n}\n\n \na {\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC9zZW5kd2hvbGVzYWxlci9zZW5kd2hvbGVzYWxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVzs7RUFFYjs7O0FBR0Y7SUFDSSxrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOzs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7OztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvc2VuZC9zZW5kd2hvbGVzYWxlci9zZW5kd2hvbGVzYWxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICB9XG5cbiBcbiNoZWFkaW5ne1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgNTAsIDE5MCk7IFxuICAgIGNvbG9yOndoaXRlO1xufVxuLnBke1xuICBiYWNrZ3JvdW5kOiBuYXZ5O1xufVxudGQgYSB7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IFxuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/send/sendwholesaler/sendwholesaler.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/send/sendwholesaler/sendwholesaler.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n\t<br>\n\t<br>\n\n\t<form>\n\t\n        <div class=\"row\"> \n          <div class=\"col\"><div class=\"form-group\">\n            <label>Packing Barcode</label>\n\t\t\t<input type=\"file\" style=\"margin-left:20px;\" accept=\"image/*\" (change)=\"onFileChange($event)\">\n            <input #br type=\"text\" value=\"{{barcodevalue}}\" class=\"form-control required\" >\n          </div>\n        </div>\n        \n            \n          </div>\n            <div class=\"row text-right\">\n             \t\t<div class=\"col\">\n             \t\t\t<div class=\"form-group\">\n                  \t\t\t<button type=\"reset\" (click)=\"getByMedicineId(br.value,4)\" class=\"btn btn-primary\">Accept</button>\n\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp;\n\t\t\t\t\t\t\t<button type=\"reset\" (click)=\"getByMedicineId(br.value,5)\" class=\"btn btn-primary\">Reject</button>\n\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp;\n\t\t\t\t\t\t\t<button type=\"reset\" (click)=\"getdetails(br.value,5)\" class=\"btn btn-primary\">Get Details</button>\n                \t\t</div>\n                </div>\n             </div>\n\t</form>\n\n\n  <div *ngIf=\"displayTable\" class=\"table-responsive\">\n    <br>\n    <table class=\"table table-striped table-dark table-hover text-center\">\n      \n        <thead class=\"theme-table\">\n            <tr>            \n              <th> Serial Number</th>\n              <th>Medicine</th>\n              <th>Manufacture Date</th>\n              <th>Location</th>\n              <th>Weight(Kg)</th>   \n            </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><a [routerLink]=\"['/medicine/details',mlist[0].serial]\">{{mlist[0].serial}}</a></td>\n            <td>{{mlist[0].medicine}}</td>\n            <td>{{mlist[0].Mdate}}</td>\n            <td>{{mlist[0].location}}</td>\n            <td>{{mlist[0].weight}}</td>\n\n          </tr>\n         \n        </tbody>\n        <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th><th></th></tr></tfoot>\n      </table>\n    </div>\n\n    <div  class=\"table-responsive\">\n      <br>\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n          <thead class=\"theme-table\">\n              <tr>            \n                  <th> Serial Number</th>\n                  <th>Medicine</th>\n                  <th>Manufacture Date</th>\n                  <th>Location</th>\n                  <th>Weight</th>   \n                  <th></th>             \n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of TMlist\">\n              <td><a [routerLink]=\"['/medicine/details',list.serial]\">{{list.serial}}</a></td>\n              <td>{{list.medicine}}</td>\n              <td>{{list.Mdate}}</td>\n              <td>{{list.location}}</td>\n              <td>{{list.weight}}</td>           \n              <td><button type=\"button\"   (click)=\"serialId(list.serial)\"  class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Send to Distributer</button></td>\n              </tr>\n           \n          </tbody>\n          <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th><th></th><th></th></tr></tfoot>\n        </table>\n      </div>\n    \n\n</div>\n\n\n   <!-- Modal -->\n   <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Medicine Transportation</h5>\n          \n        </div>\n        <div class=\"modal-body\">\n      \n      <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Serial</label>\n                <input #serial   type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n              </div></div>           \n          </div>   \n           <div class=\"row\">          \n                <div class=\"col\"><div class=\"form-group\">\n                  <label>DistributerId</label>\n           <select [(ngModel)]=\"wId1\" class=\"form-control\" >\n                <option    *ngFor=\"let wid of dlist\" [value]=\"wid.publicKey\">{{wid.firstName}}</option>\n                            </select>   \n                </div></div>\n            </div>       \n    <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>TransporterId</label>\n          <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option  *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n                            </select> \n              </div></div>           \n          </div> \t\t\n  \n            \n        </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" #completeModal  data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/send/sendwholesaler/sendwholesaler.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/send/sendwholesaler/sendwholesaler.component.ts ***!
  \*****************************************************************/
/*! exports provided: SendwholesalerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendwholesalerComponent", function() { return SendwholesalerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");
/* harmony import */ var src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/medicine/medicine-list/transection */ "./src/app/admin/medicine/medicine-list/transection.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var SendwholesalerComponent = /** @class */ (function () {
    function SendwholesalerComponent(route, httpuser, qrReader, http) {
        this.route = route;
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.selectedWId = '';
        this.selectedTId = '';
        this.transporter1 = src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"];
        this.list = [];
        this.mlist = [];
        this.dlist = [];
        this.tlist = [];
        this.TMlist = [];
        this.wid1 = '';
        this.tid1 = '';
        this.transection = src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    SendwholesalerComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Recived to Wholesaler";
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.transporterMedicineId(this.mypublickey);
        this.allDistributer();
        this.allTransporter();
    };
    SendwholesalerComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    SendwholesalerComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    SendwholesalerComponent.prototype.serialId = function (serialId) {
        this.serialvalue = serialId;
    };
    SendwholesalerComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    SendwholesalerComponent.prototype.transporterMedicineId = function (id) {
        var _this = this;
        return this.httpuser.transporterMedicine(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log('medicne list', data);
        });
    };
    SendwholesalerComponent.prototype.getdetails = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getMedicineId(id).subscribe(function (data) {
            _this.mlist = data;
            _this.route.navigate(['/medicinedetailsdashboard/' + _this.mlist[0].serial]);
        });
    };
    SendwholesalerComponent.prototype.getByMedicineId = function (id, statusid) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getMedicineId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            _this.displayTable = true;
            if (statusid == 5)
                _this.medicineStatus = "Rejected by Wholesaler";
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicine, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].weight, _this.mlist[0].Edate, _this.mlist[0].Mdate, _this.mlist[0].MedicineId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.medicineStatus);
            if (statusid == 5)
                alert("Package Returned ");
            else
                alert("Package piked ");
            // const Metadata = {
            //   "action": "recieveFromManufecturer",
            //   "payloaddata": {
            //     "serialNumber": this.mlist[0].serial,
            //     "status": statusid,
            //     "comment": "Delivered"
            //   },
            //   "private": this.privateKey,
            //   "public": this.mypublickey
            // }
            // const httpOptions = {
            //   headers: new HttpHeaders({
            //     'Content-Type': 'application/json'
            //   })
            // }
            // return this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
            //   (val) => {
            //     console.log("POST call successful value returned in body", val);
            //     this.blockchain = val;
            //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //       this.status = JSON.parse(this.blockchain.response.body);
            //       this.statusValue = this.status.data[0].status;
            //       this.itemId = this.status.data[0].id;
            //       if (this.statusValue == 'COMMITTED') {
            //         this.displayTable = true;
            //         if (statusid == 5) this.medicineStatus = "Rejected by Wholesaler";
            //         this.transporter(this.mlist[0].serial, this.mlist[0].medicine, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].weight, this.mlist[0].Edate, this.mlist[0].Mdate,
            //           this.mlist[0].MedicineId, this.mlist[0].role, this.mlist[0].time, this.mypublickey, this.medicineStatus);
            //         if (statusid == 5)
            //           alert("Package Returned ");
            //         else
            //           alert("Package piked ");
            //       }
            //       else {
            //         alert("Process not completed");
            //       }
            //     }
            //     else {
            //       that.http.get(this.httpuser.batchUrl + "/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //         this.blockchain2 = val
            //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //           this.status = JSON.parse(this.blockchain2.body);
            //           console.log('json value2', this.status.data[0].status);
            //           this.statusValue = this.status.data[0].status;
            //           this.itemId = this.status.data[0].id;
            //           if (this.statusValue == 'COMMITTED') {
            //             if (statusid == 5) this.medicineStatus = "Rejected by Wholesaler";
            //             this.transporter(this.mlist[0].serial, this.mlist[0].medicine, this.mlist[0].barcode, this.mlist[0].location, this.mlist[0].weight, this.mlist[0].Edate, this.mlist[0].Mdate,
            //               this.mlist[0].MedicineId, this.mlist[0].role, this.mlist[0].time, this.mypublickey, this.medicineStatus);
            //             if (statusid == 5)
            //               alert("Package Returned ");
            //             else
            //               alert("Package piked ");
            //           }
            //           else {
            //             alert('Request Rejected');
            //           }
            //         }
            //       })
            //     }
            //     // }).catch(function (err) {
            //     //   console.log(err.message);
            //   });
        });
    };
    SendwholesalerComponent.prototype.allDistributer = function () {
        var _this = this;
        return this.httpuser.getallDistributerUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    SendwholesalerComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    SendwholesalerComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    SendwholesalerComponent.prototype.mTransection = function (serial, distributerId, transpoterId) {
        var that = this;
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        this.transection = new src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"](serial, distributerId, transpoterId);
        this.base = this.httpuser.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
        });
        // const Metadata = {
        //   "action": "sendToDistributer",
        //   "payloaddata": {
        //     "serialNumber": serial,
        //     "distributer": {
        //       "address": distributerId,
        //       "comment": "In Transaction"
        //     },
        //     "transporterid": transpoterId
        //   },
        //   "private": this.privateKey,
        //   "public": this.mypublickey
        // }
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        // var x = this.http.post(this.blockchainUrl, Metadata, httpOptions).subscribe(
        //   (val) => {
        //     console.log("POST call successful value returned in body", val);
        //     this.blockchain = val;
        //     if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
        //       JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //       this.status = JSON.parse(this.blockchain.response.body);
        //       this.statusValue = this.status.data[0].status;
        //       this.itemId = this.status.data[0].id;
        //       if (this.statusValue == 'COMMITTED') {
        //         this.transection = new Transection(serial, distributerId, transpoterId);
        //         this.base = this.httpuser.medicineTransection(this.transection);
        //         this.call = this.base.subscribe(data => {
        //           alert('Request Accepted');
        //         });
        //       }
        //       else {
        //         alert('Request Rejected');
        //       }
        //     } else {
        //       that.http.get(this.httpuser.batchUrl + "/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //         this.blockchain2 = val
        //         if (that.httpuser.IsJsonString(this.blockchain2.body)) {
        //           this.status = JSON.parse(this.blockchain2.body);
        //           console.log('json value2', this.status.data[0].status);
        //           this.statusValue = this.status.data[0].status;
        //           this.itemId = this.status.data[0].id;
        //           if (this.statusValue == 'COMMITTED') {
        //             this.transection = new Transection(serial, distributerId, transpoterId);
        //             this.base = this.httpuser.medicineTransection(this.transection);
        //             this.call = this.base.subscribe(data => {
        //               alert('Request Accepted');
        //             });
        //           }
        //           else {
        //             alert('Request Rejected');
        //           }
        //         }
        //       })
        //     }
        //     // }).catch(function (err) {
        //     //   console.log(err.message);
        //   });
    };
    SendwholesalerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sendwholesaler',
            template: __webpack_require__(/*! ./sendwholesaler.component.html */ "./src/app/send/sendwholesaler/sendwholesaler.component.html"),
            styles: [__webpack_require__(/*! ./sendwholesaler.component.css */ "./src/app/send/sendwholesaler/sendwholesaler.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SendwholesalerComponent);
    return SendwholesalerComponent;
}());



/***/ }),

/***/ "./src/app/send/sendwholesalerdashboard/sendwholesalerdashboard.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/send/sendwholesalerdashboard/sendwholesalerdashboard.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    \n  }\n\n \n#heading{\n    background-color: rgb(18, 50, 190); \n    color:white;\n}\n\n \n.pd{\n  background: navy;\n}\n\n \ntd a {\n  display:block;\n  width:100%;\n  background-clip: padding-box; \n  border-radius: 5px;\n  background-color: blue;\n  color: white;\n  border: 2px solid green;\n}\n\n \na {\n  text-decoration: none !important;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC9zZW5kd2hvbGVzYWxlcmRhc2hib2FyZC9zZW5kd2hvbGVzYWxlcmRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVzs7RUFFYjs7O0FBR0Y7SUFDSSxrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOzs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7OztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvc2VuZC9zZW5kd2hvbGVzYWxlcmRhc2hib2FyZC9zZW5kd2hvbGVzYWxlcmRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICB9XG5cbiBcbiNoZWFkaW5ne1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgNTAsIDE5MCk7IFxuICAgIGNvbG9yOndoaXRlO1xufVxuLnBke1xuICBiYWNrZ3JvdW5kOiBuYXZ5O1xufVxudGQgYSB7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IFxuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/send/sendwholesalerdashboard/sendwholesalerdashboard.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/send/sendwholesalerdashboard/sendwholesalerdashboard.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n\t<br>\n\t<br>\n\t<div class=\"container\">\n\t<div class=\"row\">\n<!-- \n\t<form>\n\t\n        <div class=\"row\"> \n          <div class=\"col\"><div class=\"form-group\">\n            <label>Packing Barcode</label>\n\t\t\t<input type=\"file\" style=\"margin-left:20px;\" accept=\"image/*\" (change)=\"onFileChange($event)\">\n            <input #br type=\"text\" value=\"{{barcodevalue}}\" class=\"form-control required\" >\n          </div>\n        </div>\n        \n            \n          </div>\n            <div class=\"row text-right\">\n             \t\t<div class=\"col\">\n             \t\t\t<div class=\"form-group\">\n                  \t\t\t<button type=\"reset\" (click)=\"getByMedicineId(br.value)\" class=\"btn btn-primary\">Submit</button>\n                \t\t</div>\n                </div>\n             </div>\n\t</form> -->\n\n\n  <div *ngIf=\"displayTable\"  class=\"col-xs-9 col-md-6 col-sm-6\">\n    <br>\n    <table class=\"table table-striped table-dark table-hover text-center\">\n      \n        <thead class=\"theme-table\">\n            <tr>            \n              <th> Serial Number</th>\n              <th>Medicine</th>\n              <th>Manufacture Date</th>\n              <th>Location</th>\n              <th>Weight(Kg)</th>   \n            </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><a [routerLink]=\"['/medicine/details',mlist[0].serial]\">{{mlist[0].serial}}</a></td>\n            <td>{{mlist[0].medicine}}</td>\n            <td>{{mlist[0].Mdate}}</td>\n            <td>{{mlist[0].location}}</td>\n            <td>{{mlist[0].weight}}</td>\n\n          </tr>\n         \n        </tbody>\n        <tfoot class=\"theme-table\"><tr><th></th><th></th><th></th><th></th><th></th></tr></tfoot>\n      </table>\n    </div>\n\n\t\n\t<div class=\"col-xs-9 col-md-6 col-sm-6\">\n\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n          <thead class=\"theme-table\">\n              <tr>            \n                  <th> Serial Number</th>\n                  <!-- <th>Medicine</th>\n                  <th>Manufacture Date</th>\n                  <th>Location</th>\n                  <th>Weight</th>   \n                  <th></th>              -->\n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of TMlist\">\n              <td><a [routerLink]=\"['/medicinedetailsdashboard',list.serial]\" style=\"color:blue\">{{list.serial}}</a></td>\n              <!-- <td>{{list.medicine}}</td>\n              <td>{{list.Mdate}}</td>\n              <td>{{list.location}}</td>\n              <td>{{list.weight}}</td>           \n              <td><button type=\"button\"   (click)=\"serialId(list.serial)\"  class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Send to Distributer</button></td> -->\n              </tr>\n           \n          </tbody>\n          <tfoot class=\"theme-table\"><tr><th></tr></tfoot>\n        </table>\n      </div>\n\t\n\t <div class=\"col-xs-9 col-md-6 col-sm-6\">\n    <table class=\"table table-striped table-dark table-hover text-center\">\n\n      <thead class=\"theme-table\">\n        <tr>\n          <th>Serial</th>\n\t\t  <th>Sent to</th>\n\t\t  <th>Transporter</th>\n\t\t  <th>Date</th>\n          <!-- <th>Medicine code</th>\n          <th>Manufactured Date</th>\n          <th>Location</th>\n          <th>Weight(Kg)</th> -->\n          <!-- <th></th>\n          <th></th> -->\n        </tr>\n      </thead>\n      <tbody>\n          <ng-container *ngFor=\"let tr of trans; let i = index\" >\n        <tr *ngIf=\"tr.serial\">\n          <td><a [routerLink]=\"['/medicinedetailsdashboard',tr.serial]\" style=\"color:blue\"> {{tr.serial}} </a></td>\n\t\t  <td><p *ngFor=\"let u of dlist;\"><span *ngIf=\"u.userId==tr.wholesalerId || u.publicKey==tr.wholesalerId \">{{u.firstName}} {{u.lastName}}</span></p></td>\n\t\t   <td><p *ngFor=\"let t of tlist;\"><span *ngIf=\"t.userId==tr.transporterId  || t.publicKey==tr.wholesalerId \t\">{{t.firstName}} {{t.lastName}}</span></p></td>\n\t\t   <td><span *ngIf=\"tr.edate\">{{tr.edate | date: 'dd/MM/yyyy h:mm:ss a'}}</span></td>\n\t\t   \n        </tr>\n          </ng-container>\n      </tbody>\n      \n    </table>\n\t </div>\n\t \n\t \n\t \t <div class=\"col-xs-9 col-md-6 col-sm-6\">\n    <table class=\"table table-striped table-dark table-hover text-center\">\n\n      <thead class=\"theme-table\">\n        <tr>\n          <th>Serial</th>\n\t\t  <th>Sent By</th>\n\t\t  <th>Transporter</th>\n\t\t  <th>Date</th>\n          <!-- <th>Medicine code</th>\n          <th>Manufactured Date</th>\n          <th>Location</th>\n          <th>Weight(Kg)</th> -->\n          <!-- <th></th>\n          <th></th> -->\n        </tr>\n      </thead>\n      <tbody>\n          <ng-container *ngFor=\"let tr of recievedtrans; let i = index\" >\n        <tr *ngIf=\"tr.serial\">\n          <td><a [routerLink]=\"['/medicinedetailsdashboard',tr.serial]\" style=\"color:blue\"> {{tr.serial}} </a></td>\n\t\t  <td><p *ngFor=\"let u of malist;\"><span *ngIf=\"u.userId==tr.senderId || u.publicKey==tr.wholesalerId \">{{u.firstName}} {{u.lastName}}</span></p></td>\n\t\t   <td><p *ngFor=\"let t of tlist;\"><span *ngIf=\"t.userId==tr.transporterId  || t.publicKey==tr.wholesalerId \t\">{{t.firstName}} {{t.lastName}}</span></p></td>\n\t\t   <td><span *ngIf=\"tr.edate\">{{tr.edate | date: 'dd/MM/yyyy h:mm:ss a'}}</span></td>\n\t\t   \n        </tr>\n          </ng-container>\n      </tbody>\n      \n    </table>\n\t </div>\n\t \n\n     \n    \n\n</div>\n</div>\n\n   <!-- Modal -->\n   <!-- <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Medicine Transportation</h5>\n          \n        </div>\n        <div class=\"modal-body\">\n      \n      <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Serial</label>\n                <input #serial   type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n              </div></div>           \n          </div>   \n           <div class=\"row\">          \n                <div class=\"col\"><div class=\"form-group\">\n                  <label>DistributerId</label>\n           <select [(ngModel)]=\"wId1\" class=\"form-control\" >\n                <option    *ngFor=\"let wid of dlist\" [value]=\"wid.publicKey\">{{wid.firstName}}</option>\n                            </select>   \n                </div></div>\n            </div>       \n    <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>TransporterId</label>\n          <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option  *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n                            </select> \n              </div></div>           \n          </div> \t\t\n  \n            \n        </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" #completeModal  data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div> -->"

/***/ }),

/***/ "./src/app/send/sendwholesalerdashboard/sendwholesalerdashboard.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/send/sendwholesalerdashboard/sendwholesalerdashboard.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SendwholesalerdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendwholesalerdashboardComponent", function() { return SendwholesalerdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");
/* harmony import */ var src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/medicine/medicine-list/transection */ "./src/app/admin/medicine/medicine-list/transection.ts");







var SendwholesalerdashboardComponent = /** @class */ (function () {
    function SendwholesalerdashboardComponent(httpuser, qrReader, http) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.selectedWId = '';
        this.selectedTId = '';
        this.transporter1 = src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"];
        this.list = [];
        this.trans = [];
        this.recievedtrans = [];
        this.mlist = [];
        this.malist = [];
        this.dlist = [];
        this.tlist = [];
        this.TMlist = [];
        this.wid1 = '';
        this.tid1 = '';
        this.transection = src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    SendwholesalerdashboardComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Recived to Wholesaler";
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.transporterMedicineId(this.mypublickey);
        this.allDistributer();
        this.allTransporter();
        this.allManufacture();
        this.medicinetransactions();
        this.medicinerecievetransactions();
    };
    SendwholesalerdashboardComponent.prototype.medicinetransactions = function () {
        var _this = this;
        return this.httpuser.getMedicineTransection().subscribe(function (data) {
            _this.trans = data;
            console.log("All Medicine trans", _this.trans);
        });
    };
    SendwholesalerdashboardComponent.prototype.allManufacture = function () {
        var _this = this;
        return this.httpuser.getallManufactureUser().subscribe(function (data) {
            _this.malist = data;
        });
    };
    SendwholesalerdashboardComponent.prototype.medicinerecievetransactions = function () {
        var _this = this;
        return this.httpuser.getRecieveMedicineTransection().subscribe(function (data) {
            _this.recievedtrans = data;
            console.log("All Medicine trans", _this.trans);
        });
    };
    SendwholesalerdashboardComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    SendwholesalerdashboardComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    SendwholesalerdashboardComponent.prototype.serialId = function (serialId) {
        this.serialvalue = serialId;
        this.serialvalue = serialId;
    };
    SendwholesalerdashboardComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    SendwholesalerdashboardComponent.prototype.transporterMedicineId = function (id) {
        var _this = this;
        return this.httpuser.transporterMedicine(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log('medicne list', data);
        });
    };
    SendwholesalerdashboardComponent.prototype.getByMedicineId = function (id) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getMedicineId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            _this.displayTable = true;
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicine, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].weight, _this.mlist[0].Edate, _this.mlist[0].Mdate, _this.mlist[0].MedicineId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.medicineStatus);
            alert("Package piked ");
            //  const Metadata = {
            //   "action": "recieveFromManufecturer",
            //   "payloaddata": {
            //       "serialNumber": this.mlist[0].serial,
            //       "status": 4,
            //       "comment": "Delivered"
            //   },
            //   "private":this.privateKey,
            //   "public": this.mypublickey
            //     }	    
            // const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json'
            // })
            // }
            //     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
            //  (val) => {	
            //   console.log("POST call successful value returned in body", val);
            //   this.blockchain = val;
            //   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //     this.status = JSON.parse(this.blockchain.response.body);            
            //     this.statusValue = this.status.data[0].status;
            //     this.itemId = this.status.data[0].id;
            //     if (this.statusValue == 'COMMITTED') {   
            //    this.displayTable=true; 
            //    this.transporter(this.mlist[0].serial,this.mlist[0].medicine,this.mlist[0].barcode,this.mlist[0].location,this.mlist[0].weight,this.mlist[0].Edate,this.mlist[0].Mdate,
            //     this.mlist[0].MedicineId,this.mlist[0].role,this.mlist[0].time,this.mypublickey,this.medicineStatus);
            //    alert("Package piked ");
            //   }
            //   else{
            // 	  alert("Process not completed");
            //   }
            //   }
            //   else {
            //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //       this.blockchain2 =val
            //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //         this.status = JSON.parse(this.blockchain2.body);
            //         console.log('json value2', this.status.data[0].status);
            //         this.statusValue = this.status.data[0].status;
            //         this.itemId = this.status.data[0].id;
            //         if (this.statusValue == 'COMMITTED') {
            //           this.transporter(this.mlist[0].serial,this.mlist[0].medicine,this.mlist[0].barcode,this.mlist[0].location,this.mlist[0].weight,this.mlist[0].Edate,this.mlist[0].Mdate,
            //             this.mlist[0].MedicineId,this.mlist[0].role,this.mlist[0].time,this.mypublickey,this.medicineStatus);
            //             alert("Package piked ");
            //         }
            //         else {
            //           alert('Request Rejected');
            //         }
            //       }
            //     })
            //   }
            // // }).catch(function (err) {
            // //   console.log(err.message);
            // });
        });
    };
    SendwholesalerdashboardComponent.prototype.allDistributer = function () {
        var _this = this;
        return this.httpuser.getallDistributerUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    SendwholesalerdashboardComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    SendwholesalerdashboardComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    SendwholesalerdashboardComponent.prototype.mTransection = function (serial, distributerId, transpoterId) {
        var that = this;
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        this.transection = new src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"](serial, distributerId, transpoterId);
        this.base = this.httpuser.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
        });
        //  const Metadata = {
        // 			  "action": "sendToDistributer",
        //     "payloaddata": {
        //         "serialNumber": serial,
        //         "distributer": {
        //             "address": distributerId,
        //             "comment": "In Transaction"
        //         },
        //         "transporterid": transpoterId
        //     },
        // 				"private":this.privateKey,
        // 				"public": this.mypublickey
        // 					}	    
        // 	const httpOptions = {
        //       headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //       })
        //     };
        //             var x = this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
        //        (val) => {	
        // console.log("POST call successful value returned in body", val);
        // this.blockchain = val;
        // if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
        //   JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //   this.status = JSON.parse(this.blockchain.response.body);            
        //   this.statusValue = this.status.data[0].status;
        //   this.itemId = this.status.data[0].id;
        //   if (this.statusValue == 'COMMITTED') {
        //     this.transection = new Transection(serial,distributerId,transpoterId);
        //     this.base = this.httpuser.medicineTransection(this.transection);
        //     this.call = this.base.subscribe(data => {        
        //         alert('Request Accepted');       
        //       });
        //     }
        //     else {
        //       alert('Request Rejected');
        //     }
        //   } else {
        //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //       this.blockchain2 =val
        //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
        //         this.status = JSON.parse(this.blockchain2.body);
        //         console.log('json value2', this.status.data[0].status);
        //         this.statusValue = this.status.data[0].status;
        //         this.itemId = this.status.data[0].id;
        //         if (this.statusValue == 'COMMITTED') {
        //           this.transection = new Transection(serial,distributerId,transpoterId);
        //           this.base = this.httpuser.medicineTransection(this.transection);
        //           this.call = this.base.subscribe(data => {              
        //              alert('Request Accepted');          
        //           });
        //         }
        //         else {
        //           alert('Request Rejected');
        //         }
        //       }
        //     })
        //   }
        // // }).catch(function (err) {
        // //   console.log(err.message);
        // });
    };
    SendwholesalerdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sendwholesalerdashboard',
            template: __webpack_require__(/*! ./sendwholesalerdashboard.component.html */ "./src/app/send/sendwholesalerdashboard/sendwholesalerdashboard.component.html"),
            styles: [__webpack_require__(/*! ./sendwholesalerdashboard.component.css */ "./src/app/send/sendwholesalerdashboard/sendwholesalerdashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SendwholesalerdashboardComponent);
    return SendwholesalerdashboardComponent;
}());



/***/ }),

/***/ "./src/app/send/sendwholesalerreport/sendwholesalerreport.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/send/sendwholesalerreport/sendwholesalerreport.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    \n  }\n\n \n#heading{\n    background-color: rgb(18, 50, 190); \n    color:white;\n}\n\n \n.pd{\n  background: navy;\n}\n\n \ntd a {\n  display:block;\n  width:100%;\n  background-clip: padding-box; \n  border-radius: 5px;\n  background-color: blue;\n  color: white;\n  border: 2px solid green;\n}\n\n \na {\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC9zZW5kd2hvbGVzYWxlcnJlcG9ydC9zZW5kd2hvbGVzYWxlcnJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVzs7RUFFYjs7O0FBR0Y7SUFDSSxrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOzs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7OztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvc2VuZC9zZW5kd2hvbGVzYWxlcnJlcG9ydC9zZW5kd2hvbGVzYWxlcnJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICB9XG5cbiBcbiNoZWFkaW5ne1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgNTAsIDE5MCk7IFxuICAgIGNvbG9yOndoaXRlO1xufVxuLnBke1xuICBiYWNrZ3JvdW5kOiBuYXZ5O1xufVxudGQgYSB7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IFxuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/send/sendwholesalerreport/sendwholesalerreport.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/send/sendwholesalerreport/sendwholesalerreport.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n\t<br>\n\t<br>\n\n\n\n    <div  class=\"table-responsive\">\n      <br>\n      <table class=\"table table-striped table-dark table-hover text-center\">\n        \n          <thead class=\"theme-table\">\n\t\t\t<tr>\n\t\t\t<th colspan=\"4\"></th>\n\t\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t\t</tr>\n              <tr>            \n                  <th> Serial Number</th>\n                  <th>Medicine</th>\n                  <th>Manufacture Date</th>\n                  <th>Location</th>\n                  <th>Weight(Kg)</th>      \n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of TMlist\">\n              <td><a [routerLink]=\"['/medicine/details',list.serial]\">{{list.serial}}</a></td>\n              <td>{{list.medicine}}</td>\n              <td>{{list.Mdate}}</td>\n              <td>{{list.location}}</td>\n              <td>{{list.weight}}</td>           \n              </tr>\n           \n          </tbody>\n          <tfoot class=\"theme-table\">\n\t\t  \t\t\t<tr>\n\t\t\t<th colspan=\"4\"></th>\n\t\t\t<th><button type=\"button\"   (click)=\"exporttocsv()\"  class=\"btn btn-primary\" >Export as CSV</button></th>\n\t\t\t</tr>\n\n\t\t  </tfoot>\n        </table>\n      </div>\n    \n\n</div>\n\n\n   <!-- Modal -->\n   <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Medicine Transportation</h5>\n          \n        </div>\n        <div class=\"modal-body\">\n      \n      <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>Serial</label>\n                <input #serial   type=\"text\" [(ngModel)]=\"serialvalue\" class=\"form-control required\">\n              </div></div>           \n          </div>   \n           <div class=\"row\">          \n                <div class=\"col\"><div class=\"form-group\">\n                  <label>DistributerId</label>\n           <select [(ngModel)]=\"wId1\" class=\"form-control\" >\n                <option    *ngFor=\"let wid of dlist\" [value]=\"wid.publicKey\">{{wid.firstName}}</option>\n                            </select>   \n                </div></div>\n            </div>       \n    <div class=\"row\">\n            <div class=\"col\"><div class=\"form-group\">\n                <label>TransporterId</label>\n          <select [(ngModel)]=\"tId1\" class=\"form-control\">\n                <option  *ngFor=\"let wid of tlist\" [value]=\"wid.userId\">{{wid.firstName}}</option>\n                            </select> \n              </div></div>           \n          </div> \t\t\n  \n            \n        </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" #completeModal  data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"mTransection(serial.value,wId1,tId1)\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/send/sendwholesalerreport/sendwholesalerreport.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/send/sendwholesalerreport/sendwholesalerreport.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SendwholesalerreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendwholesalerreportComponent", function() { return SendwholesalerreportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qr-code-reader.service */ "./src/app/qr-code-reader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/medicine/medicine-create/addmedicine2 */ "./src/app/admin/medicine/medicine-create/addmedicine2.ts");
/* harmony import */ var src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/medicine/medicine-list/transection */ "./src/app/admin/medicine/medicine-list/transection.ts");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular5-csv/dist/Angular5-csv */ "./node_modules/angular5-csv/dist/Angular5-csv.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7__);








var SendwholesalerreportComponent = /** @class */ (function () {
    function SendwholesalerreportComponent(httpuser, qrReader, http) {
        this.httpuser = httpuser;
        this.qrReader = qrReader;
        this.http = http;
        this.selectedWId = '';
        this.selectedTId = '';
        this.transporter1 = src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"];
        this.list = [];
        this.mlist = [];
        this.dlist = [];
        this.tlist = [];
        this.TMlist = [];
        this.meds = [];
        this.wid1 = '';
        this.tid1 = '';
        this.transection = src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"];
        this.displayTable = false;
        this.blockchain = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.httpuser.blockchainUrl;
    }
    SendwholesalerreportComponent.prototype.ngOnInit = function () {
        this.medicineStatus = "Recived to Wholesaler";
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.transporterMedicineId(this.mypublickey);
        this.allDistributer();
        this.allTransporter();
    };
    SendwholesalerreportComponent.prototype.selectChangeHandler1 = function (event) {
        //update the ui
        this.selectedWId = event.target.value;
    };
    SendwholesalerreportComponent.prototype.selectChangeHandler2 = function (event) {
        //update the ui
        this.selectedTId = event.target.value;
    };
    SendwholesalerreportComponent.prototype.serialId = function (serialId) {
        this.serialvalue = serialId;
    };
    SendwholesalerreportComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            _this.barcodevalue = decodedString;
            console.log(decodedString);
        });
    };
    SendwholesalerreportComponent.prototype.transporterMedicineId = function (id) {
        var _this = this;
        return this.httpuser.transporterMedicine(id).subscribe(function (data) {
            _this.TMlist = data;
            console.log('medicne list', data);
        });
    };
    SendwholesalerreportComponent.prototype.getByMedicineId = function (id) {
        var _this = this;
        var that = this;
        this.mypublickey = localStorage.getItem("publicKey");
        this.privateKey = localStorage.getItem("privateKey");
        this.httpuser.getMedicineId(id).subscribe(function (data) {
            _this.mlist = data;
            //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
            _this.displayTable = true;
            _this.transporter(_this.mlist[0].serial, _this.mlist[0].medicine, _this.mlist[0].barcode, _this.mlist[0].location, _this.mlist[0].weight, _this.mlist[0].Edate, _this.mlist[0].Mdate, _this.mlist[0].MedicineId, _this.mlist[0].role, _this.mlist[0].time, _this.mypublickey, _this.medicineStatus);
            alert("Package piked ");
            //  const Metadata = {
            //   "action": "recieveFromManufecturer",
            //   "payloaddata": {
            //       "serialNumber": this.mlist[0].serial,
            //       "status": 4,
            //       "comment": "Delivered"
            //   },
            //   "private":this.privateKey,
            //   "public": this.mypublickey
            //     }	    
            // const httpOptions = {
            // headers: new HttpHeaders({
            //   'Content-Type': 'application/json'
            // })
            // }
            //     return this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
            //  (val) => {	
            //   console.log("POST call successful value returned in body", val);
            //   this.blockchain = val;
            //   if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
            //     JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
            //     this.status = JSON.parse(this.blockchain.response.body);            
            //     this.statusValue = this.status.data[0].status;
            //     this.itemId = this.status.data[0].id;
            //     if (this.statusValue == 'COMMITTED') {   
            //    this.displayTable=true; 
            //    this.transporter(this.mlist[0].serial,this.mlist[0].medicine,this.mlist[0].barcode,this.mlist[0].location,this.mlist[0].weight,this.mlist[0].Edate,this.mlist[0].Mdate,
            //     this.mlist[0].MedicineId,this.mlist[0].role,this.mlist[0].time,this.mypublickey,this.medicineStatus);
            //    alert("Package piked ");
            //   }
            //   else{
            // 	  alert("Process not completed");
            //   }
            //   }
            //   else {
            //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
            //       this.blockchain2 =val
            //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
            //         this.status = JSON.parse(this.blockchain2.body);
            //         console.log('json value2', this.status.data[0].status);
            //         this.statusValue = this.status.data[0].status;
            //         this.itemId = this.status.data[0].id;
            //         if (this.statusValue == 'COMMITTED') {
            //           this.transporter(this.mlist[0].serial,this.mlist[0].medicine,this.mlist[0].barcode,this.mlist[0].location,this.mlist[0].weight,this.mlist[0].Edate,this.mlist[0].Mdate,
            //             this.mlist[0].MedicineId,this.mlist[0].role,this.mlist[0].time,this.mypublickey,this.medicineStatus);
            //             alert("Package piked ");
            //         }
            //         else {
            //           alert('Request Rejected');
            //         }
            //       }
            //     })
            //   }
            // // }).catch(function (err) {
            // //   console.log(err.message);
            // });
        });
    };
    SendwholesalerreportComponent.prototype.allDistributer = function () {
        var _this = this;
        return this.httpuser.getallDistributerUser().subscribe(function (data) {
            _this.dlist = data;
            console.log(_this.dlist);
        });
    };
    SendwholesalerreportComponent.prototype.allTransporter = function () {
        var _this = this;
        return this.httpuser.getallTransporterUser().subscribe(function (data) {
            _this.tlist = data;
            console.log(_this.tlist);
        });
    };
    SendwholesalerreportComponent.prototype.transporter = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.transporter1 = new src_app_admin_medicine_medicine_create_addmedicine2__WEBPACK_IMPORTED_MODULE_5__["Medicine2"](a, b, c, d, e, f, g, h, i, j, k, l);
        this.base = this.httpuser.transporter(this.transporter1);
        this.call = this.base.subscribe(function (data) {
            alert("done");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Done");
        });
    };
    SendwholesalerreportComponent.prototype.exporttocsv = function () {
        var data = [];
        var datarow = {};
        if (Array.isArray(this.TMlist))
            this.meds = this.TMlist;
        else
            this.meds = this.TMlist.split(',');
        for (var i = 0; i <= this.meds.length; i++) {
            console.log("meds==" + this.meds[i]);
            if (typeof this.meds[i] != "undefined") {
                datarow = {
                    serial: this.meds[i].serial,
                    medicine: this.meds[i].medicine,
                    manufactured: this.meds[i].Mdate,
                    location: this.meds[i].location,
                    weight: this.meds[i].weight
                };
                data.push(datarow);
            }
        }
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            headers: ["Serial Number", "Medicine code", "Manufactured Date", "Location", "Weight"]
        };
        new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_7__["Angular5Csv"](data, 'Report1', options);
        return true;
    };
    SendwholesalerreportComponent.prototype.mTransection = function (serial, distributerId, transpoterId) {
        var that = this;
        //Register User on Blockchain ==>> if "COMMITED" :: register in db else Mail (ERROR Message)	
        //  const Metadata = {
        // 			  "action": "sendToDistributer",
        //     "payloaddata": {
        //         "serialNumber": serial,
        //         "distributer": {
        //             "address": distributerId,
        //             "comment": "In Transaction"
        //         },
        //         "transporterid": transpoterId
        //     },
        // 				"private":this.privateKey,
        // 				"public": this.mypublickey
        // 					}	    
        // 	const httpOptions = {
        //       headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //       })
        //     };
        //             var x = this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
        //        (val) => {	
        // console.log("POST call successful value returned in body", val);
        // this.blockchain = val;
        // if (that.httpuser.IsJsonString(this.blockchain.response.body)) {
        //   JSON.parse(this.blockchain.response.body).hasOwnProperty("data");
        //   this.status = JSON.parse(this.blockchain.response.body);            
        //   this.statusValue = this.status.data[0].status;
        //   this.itemId = this.status.data[0].id;
        //   if (this.statusValue == 'COMMITTED') {
        this.transection = new src_app_admin_medicine_medicine_list_transection__WEBPACK_IMPORTED_MODULE_6__["Transection"](serial, distributerId, transpoterId);
        this.base = this.httpuser.medicineTransection(this.transection);
        this.call = this.base.subscribe(function (data) {
            alert('Request Accepted');
        });
        //     }
        //     else {
        //       alert('Request Rejected');
        //     }
        //   } else {
        //     that.http.get(this.httpuser.batchUrl +"/batch_statuses?" + this.blockchain.id + "&wait").subscribe((val) => {
        //       this.blockchain2 =val
        //       if (that.httpuser.IsJsonString(this.blockchain2.body)) {
        //         this.status = JSON.parse(this.blockchain2.body);
        //         console.log('json value2', this.status.data[0].status);
        //         this.statusValue = this.status.data[0].status;
        //         this.itemId = this.status.data[0].id;
        //         if (this.statusValue == 'COMMITTED') {
        //           this.transection = new Transection(serial,distributerId,transpoterId);
        //           this.base = this.httpuser.medicineTransection(this.transection);
        //           this.call = this.base.subscribe(data => {              
        //              alert('Request Accepted');            
        //           });
        //         }
        //         else {
        //           alert('Request Rejected');
        //         }
        //       }
        //     })
        //   }
        // // }).catch(function (err) {
        // //   console.log(err.message);
        // });
    };
    SendwholesalerreportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sendwholesalerreport',
            template: __webpack_require__(/*! ./sendwholesalerreport.component.html */ "./src/app/send/sendwholesalerreport/sendwholesalerreport.component.html"),
            styles: [__webpack_require__(/*! ./sendwholesalerreport.component.css */ "./src/app/send/sendwholesalerreport/sendwholesalerreport.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_qr_code_reader_service__WEBPACK_IMPORTED_MODULE_3__["QrCodeReader"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SendwholesalerreportComponent);
    return SendwholesalerreportComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        //uri = 'http://localhost:8080';
        this.blockchainUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL;
        this.apiuri = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIURL;
        this.batchUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BATCHURL;
    }
    // ----Logout
    AuthService.prototype.lout = function () {
        this.logout = localStorage.getItem("x-token");
        localStorage.removeItem("x-token");
        return this.http.post(this.apiuri + "/logOut", {
            token: this.logout
        });
    };
    AuthService.prototype.signup = function (signin) {
        // console.log(signin);
        return this.http.post(this.apiuri + "/signup", signin);
    };
    AuthService.prototype.saveSignup = function (sign) {
        console.log('service', sign);
        // console.log(signin);
        return this.http.post(this.apiuri + "/signup2", sign);
    };
    //signin to second table end
    //login api
    AuthService.prototype.userlog = function (ulog) {
        return this.http.post(this.apiuri + "/login", ulog, {
            observe: "response"
        });
    };
    // login api end
    //token
    AuthService.prototype.setTkn = function (tok) {
        localStorage.setItem("x-token", tok);
    };
    // token end
    //get token
    AuthService.prototype.getTkn = function () {
        return localStorage.getItem("x-token");
    };
    //get token end
    // newuser start
    AuthService.prototype.createuser = function (createuser) {
        this.usereamil = localStorage.getItem("email");
        return this.http.post(this.apiuri + "/newuser", createuser, { params: { email: this.usereamil } });
    };
    //newuser end
    // new wholesaler start
    AuthService.prototype.wholesaler = function (createwholesaler) {
        this.usereamil = localStorage.getItem("email");
        return this.http.post(this.apiuri + "/postWholesaler", createwholesaler, { params: { email: this.usereamil } });
    };
    // new wholesaler end
    //Distributer Start
    AuthService.prototype.distributer = function (createdistributer) {
        this.usereamil = localStorage.getItem("email");
        return this.http.post(this.apiuri + "/postDistrubuter", createdistributer, { params: { email: this.usereamil } });
    };
    //Distributer End
    //Pharma Start
    AuthService.prototype.pharma = function (createpharma) {
        this.usereamil = localStorage.getItem("email");
        return this.http.post(this.apiuri + "/postPharma", createpharma, { params: { email: this.usereamil } });
    };
    //Pharma End
    //Distributor Start
    AuthService.prototype.distributorqr = function (email) {
        var object = {
            'email': email
        };
        this.usereamil = localStorage.getItem("email");
        return this.http.post(this.apiuri + "/sendResetMail", object);
    };
    AuthService.prototype.wholesalerqr = function (eid, pass, actcode) {
        var object = {
            'email': eid,
            'password': pass,
            'actcode': actcode
        };
        return this.http.post(this.apiuri + "/resetPassword", object);
    };
    //manufacture Start
    AuthService.prototype.manufacture = function (createmanufacture) {
        this.usereamil = localStorage.getItem("email");
        return this.http.post(this.apiuri + "/postManufacture", createmanufacture, { params: { email: this.usereamil } });
    };
    //manufacture End
    //transporter Start
    AuthService.prototype.transporter = function (createtransporter) {
        this.usereamil = localStorage.getItem("email");
        console.log(createtransporter);
        return this.http.post(this.apiuri + "/postTransporter", createtransporter, { params: { email: this.usereamil } });
    };
    //transporter End
    //transporter Start
    AuthService.prototype.packagetransporter = function (createtransporter) {
        this.usereamil = localStorage.getItem("email");
        console.log(createtransporter);
        return this.http.post(this.apiuri + "/postPackageTransporter", createtransporter, { params: { email: this.usereamil } });
    };
    //transporter End 
    AuthService.prototype.createmedicine = function (createmedicine) {
        this.usereamil = localStorage.getItem("email");
        return this.http.post(this.apiuri + "/newmedicine", createmedicine, { params: { email: this.usereamil } });
    };
    AuthService.prototype.createpackage = function (createpackage) {
        this.usereamil = localStorage.getItem("email");
        return this.http.post(this.apiuri + "/newpackage", createpackage, { params: { email: this.usereamil } });
    };
    AuthService.prototype.createmedicine2 = function (createmedicine2) {
        this.usereamil = localStorage.getItem("email");
        return this.http.post(this.apiuri + "/medicineStatusUpdate", createmedicine2, { params: { email: this.usereamil } });
    };
    AuthService.prototype.createpackage2 = function (createpackage2) {
        this.usereamil = localStorage.getItem("email");
        return this.http.post(this.apiuri + "/medicineStatusUpdate", createpackage2, { params: { email: this.usereamil } });
    };
    AuthService.prototype.medicineTransection = function (transection) {
        this.usereamil = localStorage.getItem("email");
        return this.http.post(this.apiuri + "/transection1", transection, { params: { email: this.usereamil } });
    };
    AuthService.prototype.getMedicineTransection = function () {
        this.userId = localStorage.getItem("userId");
        console.log('server side userid', this.userId);
        var obj = {
            id: this.userId
        };
        return this.http.post(this.apiuri + "/gettransection", obj);
    };
    AuthService.prototype.getRecieveMedicineTransection = function () {
        this.userId = localStorage.getItem("userId");
        this.publickey = localStorage.getItem("publicKey");
        console.log('server side userid', this.userId);
        var obj = {
            id: this.userId,
            key: this.publickey
        };
        return this.http.post(this.apiuri + "/getrecievetransection", obj);
    };
    /***************************get apis *********************************** */
    AuthService.prototype.IsJsonString = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    //get user publickey
    AuthService.prototype.getpublickey = function (key) {
        var obj = {
            pkey: key
        };
        return this.http.post(this.apiuri + "/keymatch", obj);
    };
    AuthService.prototype.getallUser = function () {
        return this.http.get(this.apiuri + "/allUser");
    };
    AuthService.prototype.getallWholesalerUser = function () {
        return this.http.get(this.apiuri + "/getwholesalerUser");
    };
    AuthService.prototype.getallTransporterUser = function () {
        return this.http.get(this.apiuri + "/getTransporterUser");
    };
    AuthService.prototype.getallDistributerUser = function () {
        return this.http.get(this.apiuri + "/getDistributerUser");
    };
    AuthService.prototype.getallPharmaUser = function () {
        return this.http.get(this.apiuri + "/getPharmaUser");
    };
    AuthService.prototype.getallManufactureUser = function () {
        return this.http.get(this.apiuri + "/getManufactureUser");
    };
    AuthService.prototype.getUser = function (userid) {
        var obj = {
            userId: userid
        };
        return this.http.post(this.apiuri + "/getvalidUser", obj);
    };
    AuthService.prototype.getvalidUser = function () {
        return this.http.get(this.apiuri + "/validUser");
    };
    AuthService.prototype.getMedicineList = function () {
        return this.http.get(this.apiuri + "/getmedicinelist");
    };
    AuthService.prototype.getPackageList = function () {
        return this.http.get(this.apiuri + "/getpackagelist");
    };
    AuthService.prototype.getMedicineUserId = function () {
        this.userId = localStorage.getItem("userId");
        console.log('server side userid', this.userId);
        var obj = {
            userId: this.userId
        };
        return this.http.post(this.apiuri + "/getMedicineUserId", obj);
    };
    AuthService.prototype.getPkgMedicineUserId = function () {
        this.userId = localStorage.getItem("userId");
        console.log('server side userid', this.userId);
        var obj = {
            userId: this.userId
        };
        return this.http.post(this.apiuri + "/getPkgMedicineUserId", obj);
    };
    AuthService.prototype.getPackageUserId = function () {
        this.userId = localStorage.getItem("userId");
        console.log('server side userid', this.userId);
        var obj = {
            userId: this.userId
        };
        return this.http.post(this.apiuri + "/getPackageUserId", obj);
    };
    AuthService.prototype.getNotification = function () {
        return this.http.get(this.apiuri + "/getnotification");
    };
    AuthService.prototype.getNotificationUserId = function () {
        this.userId = localStorage.getItem("userId");
        this.publickey = localStorage.getItem("publicKey");
        console.log('server side userid', this.userId);
        var obj = {
            userId: this.userId,
            publickey: this.publickey
        };
        return this.http.post(this.apiuri + "/getNotificationUserId", obj);
    };
    AuthService.prototype.openpackage = function (id, publickey) {
        this.userId = localStorage.getItem("userId");
        console.log('server side userid', this.userId);
        var obj = {
            userId: this.userId,
            PackageId: id,
            publickey: publickey
        };
        return this.http.post(this.apiuri + "/openPackage", obj);
    };
    AuthService.prototype.getMedicineStatus = function (id) {
        return this.http.get(this.apiuri + "/getMedicineStatus/" + id);
    };
    AuthService.prototype.getPackageStatus = function (id) {
        return this.http.get(this.apiuri + "/getPackageStatus/" + id);
    };
    AuthService.prototype.getMedicineStatus2 = function (id) {
        return this.http.get(this.apiuri + "/getMedicineStatus2/" + id);
    };
    AuthService.prototype.getMedicineStatus3 = function (id) {
        return this.http.get(this.apiuri + "/getMedicineStatus3/" + id);
    };
    AuthService.prototype.getPackageStatus3 = function (id) {
        return this.http.get(this.apiuri + "/getPackageStatus3/" + id);
    };
    AuthService.prototype.getPackageStatus2 = function (id) {
        return this.http.get(this.apiuri + "/getPackageStatus2/" + id);
    };
    AuthService.prototype.getMedicineId = function (id) {
        return this.http.get(this.apiuri + "/getByMedicineId/" + id);
    };
    AuthService.prototype.getPackageId = function (id) {
        return this.http.get(this.apiuri + "/getByPackageId/" + id);
    };
    AuthService.prototype.transporterMedicine = function (id) {
        return this.http.get(this.apiuri + "/getTransporter/" + id);
    };
    AuthService.prototype.transporterPackage = function (id) {
        return this.http.get(this.apiuri + "/getPackageTransporter/" + id);
    };
    ////Distributor
    AuthService.prototype.getDistributerList = function () {
        return this.http.get(this.apiuri + "/getdistributerlist");
    };
    //Distrubtor End
    //Manufacture start
    AuthService.prototype.getManufactureList = function () {
        return this.http.get(this.apiuri + "/getmanufacturelist");
    };
    //ManuFacture End
    //WholeSaler Start
    AuthService.prototype.getWholesalerList = function () {
        return this.http.get(this.apiuri + "/getwholesalerlist");
    };
    //WholeSaler End
    //Pharma Start
    AuthService.prototype.getPharmaList = function () {
        return this.http.get(this.apiuri + "/getpharmalist");
    };
    //Pharma End
    //transporter Start
    AuthService.prototype.getTransporterList = function () {
        return this.http.get(this.apiuri + "/gettransporterlist");
    };
    //transporter End
    //transporter Start
    AuthService.prototype.getPackagetransporterList = function () {
        return this.http.get(this.apiuri + "/getpackagetransporterlist");
    };
    //transporter End
    AuthService.prototype.getprofile = function (x) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("token", x);
        return this.http.get(this.apiuri + "/profile", { params: params });
    };
    /*******************************DELETE API*********************************/
    AuthService.prototype.deleteUser = function (id) {
        return this.http.get(this.apiuri + "/deleteUser/" + id);
    };
    AuthService.prototype.deletevalidUser = function (id) {
        return this.http.get(this.apiuri + "/deletevalidUser/" + id);
    };
    // delete medicine start
    AuthService.prototype.deleteMedicine = function (id) {
        return this.http.get(this.apiuri + "/deleteMedicine/" + id);
    };
    // delete medicine start
    AuthService.prototype.deleteNotification = function (id) {
        return this.http.get(this.apiuri + "/deleteNotification/" + id);
    };
    // delete package start
    AuthService.prototype.deletePackage = function (id) {
        return this.http.get(this.apiuri + "/deletePackage/" + id);
    };
    AuthService.prototype.deletePackageTransport = function (id, publickey) {
        var object = {
            'id': id,
            'publickey': publickey
        };
        return this.http.post(this.apiuri + "/deletePackageTransport", object);
    };
    // delete medicie
    // delete Manufacture start
    AuthService.prototype.deleteManufacture = function (id) {
        return this.http.get(this.apiuri + "/deleteManufacture/" + id);
    };
    // delete Manufacture ends
    //Delete WholeSaler
    AuthService.prototype.deletewholesaler = function (id) {
        return this.http.get(this.apiuri + "/deleteWholesaler/" + id);
    };
    //Delete WholeSaler
    //Delete Pharma Start
    AuthService.prototype.deletePharma = function (id) {
        return this.http.get(this.apiuri + "/deletePharma/" + id);
    };
    //Delete Pharma End
    //Delete Pharma Start
    AuthService.prototype.deleteDistributer = function (id) {
        return this.http.get(this.apiuri + "/deleteDistrubuter/" + id);
    };
    //Delete Pharma End
    /*******************************************edit item ************************************** */
    AuthService.prototype.editMedicineStatus = function (id) {
        //console.log("Edit Medicine");
        return this.http.get(this.apiuri + "/editMedicineStatus/" + id);
    };
    AuthService.prototype.editPackageStatus = function (id) {
        //console.log("Edit Medicine");
        return this.http.get(this.apiuri + "/editPackageStatus/" + id);
    };
    AuthService.prototype.editPharma = function (id) {
        return this.http.get(this.apiuri + "/edit/" + id);
    };
    AuthService.prototype.editDistributor = function (id) {
        return this.http.get(this.apiuri + "/editDistributor/" + id);
    };
    AuthService.prototype.editWholesaler = function (id) {
        return this.http.get(this.apiuri + "/editWholesaler/" + id);
    };
    AuthService.prototype.editManufacture = function (id) {
        return this.http.get(this.apiuri + "/editManufacture/" + id);
    };
    /************************************update fileds***********************************************/
    //-----------------------update user
    AuthService.prototype.updateProfile = function (firstName, lastName, mobileNo, email, mylocation, id) {
        var obj = {
            firstName: firstName,
            lastName: lastName,
            mobileNo: mobileNo,
            email: email,
            location: mylocation
        };
        return this.http.post(this.apiuri + "/updateprofile/" + id, obj);
        //.subscribe(res => console.log("Done"))
    };
    //-----------------------update user
    AuthService.prototype.updatePassword = function (eid, newPassword, id) {
        var object = {
            'email': eid,
            'password': newPassword,
            'actcode': ''
        };
        return this.http.post(this.apiuri + "/resetPassword", object);
        //.subscribe(res => console.log("Done"))
    };
    //----------------------update pharma
    AuthService.prototype.updatePharma = function (batchid, medicineStatus, medicineQuality, id) {
        var obj = {
            batchid: batchid,
            medicineStatus: medicineStatus,
            medicineQuality: medicineQuality
        };
        this.http
            .post(this.apiuri + "/updatepharma/" + id, obj)
            .subscribe(function (res) { return console.log("Done"); });
    };
    //----------------------Update Wholesaler
    AuthService.prototype.updateWholesaler = function (batchid, shipper, reciver, id) {
        var obj = {
            batchid: batchid,
            shipper: shipper,
            reciver: reciver
        };
        this.http
            .post(this.apiuri + "/updateWholesaler/" + id, obj)
            .subscribe(function (res) { return console.log("Done"); });
    };
    AuthService.prototype.updatManufacture = function (medicinedescription, medicineStatus, pickdate, packdate, reciver, quality, recivertype, id) {
        var obj = {
            medicinedescription: medicinedescription,
            medicineStatus: medicineStatus,
            pickdate: pickdate,
            packdate: packdate,
            reciver: reciver,
            quality: quality,
            recivertype: recivertype
        };
        this.http
            .post(this.apiuri + "/updateManufacture/" + id, obj)
            .subscribe(function (res) { return console.log("Done"); });
    };
    //Update Distributor
    AuthService.prototype.updateDistributor = function (batchid, shipper, reciver, id) {
        var obj = {
            batchid: batchid,
            shipper: shipper,
            reciver: reciver
        };
        this.http
            .post(this.apiuri + "/updateDistributor/" + id, obj)
            .subscribe(function (res) { return console.log("Done"); });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/user/mylogin/userlog.ts":
/*!*****************************************!*\
  !*** ./src/app/user/mylogin/userlog.ts ***!
  \*****************************************/
/*! exports provided: UserLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLog", function() { return UserLog; });
var UserLog = /** @class */ (function () {
    function UserLog(mob, pas) {
        this.email = mob;
        this.password = pas;
    }
    return UserLog;
}());



/***/ }),

/***/ "./src/app/user/profile/profile.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/profile/profile.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-top:50px;\n}\n\n#privatekey { \n\t-webkit-text-security: disc; \n}\n\np{\n\tword-break: break-all;\n}\n\ntable {\n    width: 100%;\n    background-color: white;   \n  }\n\ntd {\n\tbackground: none;\n}\n\nbutton{\n\twidth: 132px;\n    background: #F4A018;\n    border: 2px solid #F4A018;\n    color: white;\n    height: 35px;\n    border-radius: 7px;\n}\n\nbutton:hover{\n\tborder: 1px solid #3d6d79;\n\tbackground-color:#f4a018a8;\n}\n\nth{\n\tborder: none !important;\n\tbackground-color: #3d6d79; \n\tcolor:White;\n\tfont-family: Muli,Helvetica Neue,Arial,sans-serif;\n\tfont-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCOztBQUVGO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsWUFBWTtJQUNULG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1gsaURBQWlEO0NBQ2pELGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6NTBweDtcbn1cblxuI3ByaXZhdGVrZXkgeyBcblx0LXdlYmtpdC10ZXh0LXNlY3VyaXR5OiBkaXNjOyBcbn1cblxucHtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICAgXG4gIH1cblxudGQge1xuXHRiYWNrZ3JvdW5kOiBub25lO1xufVxuIFxuYnV0dG9ue1xuXHR3aWR0aDogMTMycHg7XG4gICAgYmFja2dyb3VuZDogI0Y0QTAxODtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRjRBMDE4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5idXR0b246aG92ZXJ7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzZDZkNzk7XG5cdGJhY2tncm91bmQtY29sb3I6I2Y0YTAxOGE4O1xufVxuXG50aHtcblx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzZDZkNzk7IFxuXHRjb2xvcjpXaGl0ZTtcblx0Zm9udC1mYW1pbHk6IE11bGksSGVsdmV0aWNhIE5ldWUsQXJpYWwsc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div class=\"container\">\n  <div class=\"col\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped table-hover\">\n        <tr>\n          <th  colspan=\"2\"><h4>Welcome {{profile.firstName|uppercase}}</h4></th>\n        </tr>\n        <tr>\n          <td><b>Public Key </b></td>\n          <td>{{profile.publicKey}}</td>\n        </tr>\n        <tr>\n          <td><b>Username </b></td>\n          <td>{{profile.firstName}} {{profile.lastName}}</td>\n        </tr>\n        <tr>\n          <td><b>Password </b></td>\n          <td id=\"privatekey\">{{profile.password}}</td>\n        </tr>\n        <tr>\n          <td><b>Email </b></td>\n          <td>{{profile.email}}</td>\n        </tr>\n        <tr>\n          <td><b>Email </b></td>\n          <td>{{profile.email}}</td>\n        </tr>\n        <tr>\n          <td><b>Role </b></td>\n          <td> <span *ngIf=\"profile.role == 1\">\n            Admin</span>\n          <span *ngIf=\"profile.role == 2\">\n            Manufacturer</span>\n          <span *ngIf=\"profile.role == 3\">\n            Wholesaler</span>\n          <span *ngIf=\"profile.role == 4\">\n            Distributor</span>\n          <span *ngIf=\"profile.role == 5\">\n            Pharma</span>\n          <span *ngIf=\"profile.role == 6\">\n            Transporter</span></td>\n        </tr>\n        <tr>\n          <td class=\"form-group\">\n            <button type=\"button\" data-toggle=\"modal\"\n            data-target=\"#exampleModalCenter\">Edit Profile</button>\n          </td>\n          <td class=\"form-group\">\n            <button type=\"button\" class=\"w-auto\" data-toggle=\"modal\"\n            data-target=\"#changepassword\">Change Password</button>\n          </td>\n        </tr> \n      </table>\n    </div>  \n  </div>\n</div>\n  <!-- <form>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label>Public Key</label>\n          <p> {{profile.publicKey}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label>Username</label>\n          <p>{{profile.firstName}} {{profile.lastName}}</p>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label>Password</label>\n          <p id=\"privatekey\"> {{profile.password}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label>Email</label>\n          <p>{{profile.email}}</p>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label>Role</label>\n          <span *ngIf=\"profile.role == 1\">\n            <p>Admin</p></span>\n          <span *ngIf=\"profile.role == 2\">\n            <p> Manufacturer</p></span>\n          <span *ngIf=\"profile.role == 3\">\n            <p> Wholesaler</p></span>\n          <span *ngIf=\"profile.role == 4\">\n            <p>Distributor</p></span>\n          <span *ngIf=\"profile.role == 5\">\n            <p>Pharma</p></span>\n          <span *ngIf=\"profile.role == 6\">\n            <p> Transporter</p></span>\n        </div>\n      </div>\n    </div>\n\t\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t<h4 class=\"text-center\">Settings</h4>\n\t\t<br/>\n\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t&nbsp;\n\t\t</div>\n\t\t</div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\"\n              data-target=\"#exampleModalCenter\">Edit Profile</button>\n        </div>\n      </div>\n\t  <div class=\"col\">\n        <div class=\"form-group\">\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\"\n              data-target=\"#changepassword\">Change Password</button>\n        </div>\n      </div>\n    </div>\n  </form> -->\n\n\n\n\n<!-- Update Pharma -->\n<div class=\"container\">\n    <!-- The Modal -->\n    <div class=\"modal fade\" id=\"exampleModalCenter\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <!-- Modal body -->\n          <div class=\"modal-body\">\n            <form>\n              <div class=\"form-group\">\n              <label>First Name</label>\n              <input type=\"text\"  #fname class=\"form-control required\" [(ngModel)]=\"profile.firstName\" name=\"first\">              \n              </div>\n              <div class=\"form-group\">\n              <label>Last Name</label>\n              <input type=\"text\"  #lname class=\"form-control required\" [(ngModel)]=\"profile.lastName\" name=\"last\">              \n              </div>\n              <div class=\"form-group\">\n              <label>Mobile No</label>\n              <input type=\"text\"  #mobile class=\"form-control required\" [(ngModel)]=\"profile.mobileNo\" name=\"mobile\">              \n              </div>\n              <div class=\"form-group\">\n              <label>Location</label>\n              <input type=\"text\"  #location class=\"form-control required\" [(ngModel)]=\"profile.location\" name=\"location\">              \n              </div>                            \n              <!-- Modal footer -->\n              <div class=\"modal-footer\">\n                <div class=\"form-group\">\n                  <button type=\"button\" #closeProfile class=\"btn btn-danger\" (click)=\"myprofile(token);\" data-dismiss=\"modal\">Close</button>\n                </div>\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateuserprofile(fname.value,lname.value,mobile.value,profile.email,location.value,profile.publicKey)\">Save changes</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n   <!-- The Modal -->\n    <div class=\"modal fade\" id=\"changepassword\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <!-- Modal body -->\n          <div class=\"modal-body\">\n            <form>\n              <div class=\"form-group\">\n              <label>Current Password</label>\n              <input type=\"password\"  #curpass class=\"form-control required\" name=\"last\">              \n              </div>\n              <div class=\"form-group\">\n              <label>New Password</label>\n              <input type=\"password\"  #newpass class=\"form-control required\" name=\"last\">              \n              </div>\n              <div class=\"form-group\">\n              <label>Confirm Password</label>\n              <input type=\"password\"  #confirmpass class=\"form-control required\" name=\"mobile\">              \n              </div>          \n              <!-- Modal footer -->\n              <div class=\"modal-footer\">\n                <div class=\"form-group\">\n                  <button #closeModal type=\"button\" class=\"btn btn-danger\" (click)=\"myprofile(token);\" data-dismiss=\"modal\">Close</button>\n                </div>\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateuserpassword(profile.email,curpass.value,newpass.value,confirmpass.value,profile.publicKey)\">Save changes</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/user/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mylogin_userlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mylogin/userlog */ "./src/app/user/mylogin/userlog.ts");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(http, route, router, http2) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.http2 = http2;
        this.profile = [];
        this.editlist = [];
        this.blockchain2 = [];
        this.status = [];
        this.itemId = [];
        this.blockchainUrl = this.http.blockchainUrl;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        console.log('profile init');
        this.token = localStorage.getItem("id_token");
        this.myprofile(this.token);
    };
    ProfileComponent.prototype.myprofile = function (token) {
        var _this = this;
        if (token === void 0) { token = this.token; }
        return this.http.getprofile(token).subscribe(function (data) {
            _this.profile = data;
            console.log("Profile data:" + JSON.stringify(data));
        });
    };
    //update edited api
    ProfileComponent.prototype.updateuserprofile = function (fname, lname, mobile, email, location, publickey) {
        var _this = this;
        if (fname == '') {
            alert("Kindly add First Name!!");
            return false;
        }
        if (lname == '') {
            alert("Kindly add Last Name!!");
            return false;
        }
        if (mobile == '' || mobile.length < 10 || isNaN(mobile)) {
            alert("Kindly add Valid Mobile number!!");
            return false;
        }
        if (location == '') {
            alert("Kindly add Location Name!!");
            return false;
        }
        this.http.updateProfile(fname, lname, mobile, email, location, publickey).subscribe(function (data) {
            alert('Profile data saved ');
            _this.closeProfile.nativeElement.click();
        });
    };
    ProfileComponent.prototype.updateuserpassword = function (email, curpass, pass, confpass, publickey) {
        var _this = this;
        if (pass != confpass) {
            alert("Password do not match!!");
            return false;
        }
        if (pass.length < 6) {
            alert("Password length should equals to or greater than six. !!");
            return false;
        }
        if (curpass == '') {
            alert("Kindly add Current Password!!");
            return false;
        }
        this.userlog = new _mylogin_userlog__WEBPACK_IMPORTED_MODULE_2__["UserLog"](email, curpass);
        this.http.userlog(this.userlog).subscribe(function (data) {
            return _this.http.updatePassword(email, pass, publickey).subscribe(function (data) {
                //this.myprofile(this.token);
                _this.closeModal.nativeElement.click(); //<-- here
                alert('Password Changed Successfully');
            });
        }, function (err) {
            console.log(err);
            alert("Current Password does not match.");
        }, function () {
            console.log("User Data Checks Out");
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProfileComponent.prototype, "closeModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeProfile'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProfileComponent.prototype, "closeProfile", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/activation.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/signup/activation.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6 \">\n               <h3>Email Verification </h3>\n                <p> {{message}}</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/user/signup/activation.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/signup/activation.component.ts ***!
  \*****************************************************/
/*! exports provided: ActivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationComponent", function() { return ActivationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ActivationComponent = /** @class */ (function () {
    // ab:Subscription;
    function ActivationComponent(route, auth, formBuilder, router, http) {
        this.route = route;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.blockchainUrl = this.auth.blockchainUrl + "/activation";
        //file download code
        this.setting = {
            element: {
                dynamicDownload: null
            }
        };
    }
    ActivationComponent.prototype.ngOnInit = function () {
        this.actcode = this.route.snapshot.params['id'];
        // const Metadata = {
        //       "activation": {
        // 		"code": this.actcode
        //       }
        //     }     
        // const httpOptions = {
        //     headers: new HttpHeaders({
        //       'Content-Type': 'application/json'
        //     })
        //   };
        //  var x = this.http.post(this.blockchainUrl, Metadata,httpOptions).subscribe(
        //      (val) => {		   
        //       alert("Account verfied successfully");
        // 	this.router.navigate(['/login']);
        //     },(err) => {		   
        //       console.log(err);
        //     this.message = "Verfication code not match with any account. Kindly check and let us know.";
        //     }); 
    };
    ActivationComponent.prototype.dyanmicDownloadByHtmlTag = function (arg) {
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
    ActivationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activation',
            template: __webpack_require__(/*! ./activation.component.html */ "./src/app/user/signup/activation.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ActivationComponent);
    return ActivationComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signuplog.ts":
/*!******************************************!*\
  !*** ./src/app/user/signup/signuplog.ts ***!
  \******************************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
var register = /** @class */ (function () {
    function register(firstName, lastName, role, mobileNo, location, email, password, publicKey, userId, transectionId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.mobileNo = mobileNo;
        this.location = location;
        this.email = email;
        this.password = password;
        this.publicKey = publicKey;
        this.userId = userId;
        this.transectionId = transectionId;
    }
    return register;
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
    production: false,
    // URL: 'http://localhost:8080',
    APIURL: 'http://localhost:10000',
    // BATCHURL : 'http://localhost:8008',
    URL: 'http://ec2-34-253-54-125.eu-west-1.compute.amazonaws.com:8080',
    // APIURL : 'http://ec2-34-253-54-125.eu-west-1.compute.amazonaws.com/sarafuApi',
    BATCHURL: 'http://ec2-34-253-54-125.eu-west-1.compute.amazonaws.com:8008',
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/angular_Medicine-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map