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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_user_view_patient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/user-view/patient.component */ "./src/app/main/user-view/patient.component.ts");
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/role.guard */ "./src/app/guards/role.guard.ts");
/* harmony import */ var _main_admin_view_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/admin-view/admin.component */ "./src/app/main/admin-view/admin.component.ts");
/* harmony import */ var _main_public_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/public/app.component */ "./src/app/main/public/app.component.ts");
/* harmony import */ var _main_public_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/public/home/home.component */ "./src/app/main/public/home/home.component.ts");
/* harmony import */ var _main_public_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/public/register/register.component */ "./src/app/main/public/register/register.component.ts");
/* harmony import */ var _main_public_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/public/login/login.component */ "./src/app/main/public/login/login.component.ts");
/* harmony import */ var _main_user_view_products_dentist_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/user-view/products/dentist.results.component */ "./src/app/main/user-view/products/dentist.results.component.ts");
/* harmony import */ var _main_user_view_products_dentist_profile_dentist_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/user-view/products/dentist-profile/dentist.profile.component */ "./src/app/main/user-view/products/dentist-profile/dentist.profile.component.ts");
/* harmony import */ var _main_user_view_patient_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/user-view/patient-profile/edit-profile/edit-profile.component */ "./src/app/main/user-view/patient-profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _main_user_view_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/user-view/patient-profile/patient-profile.component */ "./src/app/main/user-view/patient-profile/patient-profile.component.ts");
/* harmony import */ var _main_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/shared-components/change-password/change-password-component */ "./src/app/main/shared-components/change-password/change-password-component.ts");
/* harmony import */ var _main_user_view_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/user-view/shopping-cart/shopping.cart.component */ "./src/app/main/user-view/shopping-cart/shopping.cart.component.ts");
/* harmony import */ var _main_user_view_blog_blog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/user-view/blog/blog.component */ "./src/app/main/user-view/blog/blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], children: [
            { path: '', component: _main_public_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], children: [
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: _main_public_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], children: [
                            { path: '', pathMatch: 'full', component: _main_user_view_products_dentist_results_component__WEBPACK_IMPORTED_MODULE_10__["DentistResultsComponent"] },
                            { path: 'dentists', pathMatch: 'full', component: _main_user_view_products_dentist_results_component__WEBPACK_IMPORTED_MODULE_10__["DentistResultsComponent"] },
                            { path: 'result/:id', pathMatch: 'full', component: _main_user_view_products_dentist_profile_dentist_profile_component__WEBPACK_IMPORTED_MODULE_11__["DentistProfileComponent"] }
                        ] },
                    { path: 'register', component: _main_public_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
                    { path: 'login', component: _main_public_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
                ] },
            { path: 'user', component: _main_user_view_patient_component__WEBPACK_IMPORTED_MODULE_3__["PatientComponent"],
                children: [
                    { path: '', redirectTo: 'dentists', pathMatch: 'full' },
                    { path: 'profile', component: _main_user_view_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_13__["PatientProfileComponent"], children: [
                            { path: '', redirectTo: 'edit', pathMatch: 'full' },
                            { path: 'edit', pathMatch: 'full', component: _main_user_view_patient_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_12__["EditProfileComponent"] },
                        ] },
                    { path: 'changepass', component: _main_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_14__["ChangePasswordComponent"] },
                    { path: 'dentists', component: _main_user_view_products_dentist_results_component__WEBPACK_IMPORTED_MODULE_10__["DentistResultsComponent"] },
                    { path: 'result/:id', component: _main_user_view_products_dentist_profile_dentist_profile_component__WEBPACK_IMPORTED_MODULE_11__["DentistProfileComponent"] },
                    { path: 'cart', component: _main_user_view_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_15__["ShoppingCartComponent"] },
                    { path: 'blog', component: _main_user_view_blog_blog_component__WEBPACK_IMPORTED_MODULE_16__["BlogComponent"] }
                ],
                canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_4__["RoleGuard"]],
                data: { roles: ['USER'] }
            },
            { path: 'admin', component: _main_admin_view_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_4__["RoleGuard"]], data: { roles: ['ADMIN'] } },
            { path: '**', component: _main_public_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, {
                    useHash: true,
                    enableTracing: false // <-- debugging purposes only
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _main_user_view_patient_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/user-view/patient.component */ "./src/app/main/user-view/patient.component.ts");
/* harmony import */ var _main_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/shared-components/change-password/change-password-component */ "./src/app/main/shared-components/change-password/change-password-component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_user_view_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/user-view/patient-profile/patient-profile.component */ "./src/app/main/user-view/patient-profile/patient-profile.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _main_admin_view_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/admin-view/admin.component */ "./src/app/main/admin-view/admin.component.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/role.guard */ "./src/app/guards/role.guard.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _main_user_view_patient_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/user-view/patient-profile/edit-profile/edit-profile.component */ "./src/app/main/user-view/patient-profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _main_shared_components_services_edit_password_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main/shared-components/services/edit.password.service */ "./src/app/main/shared-components/services/edit.password.service.ts");
/* harmony import */ var _main_shared_components_services_edit_patient_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main/shared-components/services/edit.patient.service */ "./src/app/main/shared-components/services/edit.patient.service.ts");
/* harmony import */ var _main_public_app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main/public/app.component */ "./src/app/main/public/app.component.ts");
/* harmony import */ var _main_public_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main/public/home/home.component */ "./src/app/main/public/home/home.component.ts");
/* harmony import */ var _main_public_register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main/public/register/register.component */ "./src/app/main/public/register/register.component.ts");
/* harmony import */ var _main_public_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main/public/login/login.component */ "./src/app/main/public/login/login.component.ts");
/* harmony import */ var _main_user_view_products_dentist_results_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main/user-view/products/dentist.results.component */ "./src/app/main/user-view/products/dentist.results.component.ts");
/* harmony import */ var _main_user_view_products_events_events_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./main/user-view/products/events/events.component */ "./src/app/main/user-view/products/events/events.component.ts");
/* harmony import */ var _main_user_view_products_dentist_profile_dentist_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./main/user-view/products/dentist-profile/dentist.profile.component */ "./src/app/main/user-view/products/dentist-profile/dentist.profile.component.ts");
/* harmony import */ var _main_user_view_products_dentist_profile_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./main/user-view/products/dentist-profile/ratings/ratings.component */ "./src/app/main/user-view/products/dentist-profile/ratings/ratings.component.ts");
/* harmony import */ var _main_user_view_products_services_dentist_common_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./main/user-view/products/services/dentist.common.service */ "./src/app/main/user-view/products/services/dentist.common.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_ratings_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/ratings.service */ "./src/app/services/ratings.service.ts");
/* harmony import */ var _main_user_view_patient_profile_edit_address_edit_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./main/user-view/patient-profile/edit-address/edit.profile.component */ "./src/app/main/user-view/patient-profile/edit-address/edit.profile.component.ts");
/* harmony import */ var _main_user_view_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./main/user-view/shopping-cart/shopping.cart.component */ "./src/app/main/user-view/shopping-cart/shopping.cart.component.ts");
/* harmony import */ var _main_user_view_blog_blog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./main/user-view/blog/blog.component */ "./src/app/main/user-view/blog/blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _main_public_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
                _main_public_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _main_public_register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
                _main_public_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
                _main_user_view_patient_component__WEBPACK_IMPORTED_MODULE_6__["PatientComponent"],
                _main_admin_view_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _main_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"],
                _main_user_view_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_9__["PatientProfileComponent"],
                _main_user_view_products_dentist_results_component__WEBPACK_IMPORTED_MODULE_24__["DentistResultsComponent"],
                _main_user_view_patient_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_17__["EditProfileComponent"],
                _main_user_view_products_events_events_component__WEBPACK_IMPORTED_MODULE_25__["EventsComponent"],
                _main_user_view_products_dentist_profile_dentist_profile_component__WEBPACK_IMPORTED_MODULE_26__["DentistProfileComponent"],
                _main_user_view_products_dentist_profile_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_27__["RatingsComponent"],
                _main_user_view_patient_profile_edit_address_edit_profile_component__WEBPACK_IMPORTED_MODULE_31__["EditDentistProfileComponent"],
                _main_user_view_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_32__["ShoppingCartComponent"],
                _main_user_view_blog_blog_component__WEBPACK_IMPORTED_MODULE_33__["BlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["JsonpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["BrowserAnimationsModule"]
            ],
            providers: [
                _services_common_service__WEBPACK_IMPORTED_MODULE_13__["CommonService"],
                _guards_role_guard__WEBPACK_IMPORTED_MODULE_14__["RoleGuard"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                _services_users_service__WEBPACK_IMPORTED_MODULE_15__["UsersService"],
                _services_admin_service__WEBPACK_IMPORTED_MODULE_11__["AdminService"],
                _services_ratings_service__WEBPACK_IMPORTED_MODULE_30__["RatingsService"],
                _main_shared_components_services_edit_password_service__WEBPACK_IMPORTED_MODULE_18__["EditPasswordService"],
                _main_shared_components_services_edit_patient_service__WEBPACK_IMPORTED_MODULE_19__["EditPatientProfileService"],
                _main_user_view_products_services_dentist_common_service__WEBPACK_IMPORTED_MODULE_28__["DentistCommonService"]
            ],
            bootstrap: [_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/common.util */ "./src/app/util/common.util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var userRole = _util_common_util__WEBPACK_IMPORTED_MODULE_2__["CommonUtil"].getSessionUserRole();
        if (userRole) {
            this.router.navigate(['/' + userRole.toLowerCase()]);
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/role.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/role.guard.ts ***!
  \**************************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/common.util */ "./src/app/util/common.util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleGuard = /** @class */ (function () {
    function RoleGuard(router) {
        this.router = router;
    }
    RoleGuard.prototype.canActivate = function (route, state) {
        var userRole = _util_common_util__WEBPACK_IMPORTED_MODULE_2__["CommonUtil"].getSessionUserRole();
        var roles = route.data["roles"];
        return (roles == null || roles.indexOf(userRole) != -1);
    };
    RoleGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoleGuard);
    return RoleGuard;
}());



/***/ }),

/***/ "./src/app/main/admin-view/admin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/main/admin-view/admin.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  max-height: 10px;\n}\n\n.logo {\n  padding-right: 5px;\n}\n\n.header-navi {\n  height: 60px;\n}\n\n.nav{\n  margin-top: 10px;\n  display: inline-block;\n  width:16%;\n  text-align: center;\n}\n\nh1{\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/main/admin-view/admin.component.html":
/*!******************************************************!*\
  !*** ./src/app/main/admin-view/admin.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <header class=\"header-6\">\n    <div class=\"branding\">\n      <a href=\"...\" class=\"nav-link\">\n        <div class=\"logo\">\n          <img src=\"https://www.clker.com/cliparts/A/K/h/3/U/N/tooth-md.png\" width=\"50\" height=\"50\">\n        </div>\n        <span class=\"title\">Appointment App - Admin Dashboard</span>\n      </a>\n    </div>\n    <div class=\"header-actions\">\n\n    </div>\n  </header>\n  <div class=\"wrapper\">\n    <div *ngIf=\"users\">\n      <h1>Patients</h1>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/main/admin-view/admin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main/admin-view/admin.component.ts ***!
  \****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/common.util */ "./src/app/util/common.util.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/constants */ "./src/app/models/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.products = [];
        this.userEmail = '';
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.currentUser = _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].getSessionUser();
        this.userEmail = _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].getSessionUserEmail();
        if (this.currentUser && this.currentUser.role == _models_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].ROLE_ADMIN) {
            this.loadData();
        }
    };
    AdminComponent.prototype.logout = function () {
        _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].removeUser();
        this.router.navigate(['']);
    };
    AdminComponent.prototype.loadData = function () {
        var _this = this;
        this.usersService.getAllProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return console.error(error); });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-component',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/main/admin-view/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/main/admin-view/admin.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  /*.main-container {*/\n    /*display: flex;*/\n    /*justify-content: center;*/\n    /*text-align: center;*/\n    /*}*/\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n   <router-outlet>\n   </router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'main-component',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/public/app.component.css":
/*!***********************************************!*\
  !*** ./src/app/main/public/app.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-navi {\n  height: 60px;\n  text-align: center;\n}\n\n.nav {\n  margin-top: 15px;\n  display: inline-block;\n  width:16%;\n  text-align: center;\n}\n\n.navbar {\n  margin-top: 10px;\n  text-align: center;\n}\n\n.logo {\n  padding-right: 5px;\n}\n"

/***/ }),

/***/ "./src/app/main/public/app.component.html":
/*!************************************************!*\
  !*** ./src/app/main/public/app.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <header class=\"header-6\">\n    <div class=\"branding\">\n      <a href=\"...\" class=\"nav-link\">\n        <div class=\"logo\">\n          <img src=\"https://www.clker.com/cliparts/A/K/h/3/U/N/tooth-md.png\" width=\"50\" height=\"50\">\n        </div>\n        <span class=\"title\">Fish Store</span>\n      </a>\n    </div>\n\n    <div class=\"header-nav nav-justified\">\n      <a class=\"nav-link nav-text\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n      <a class=\"nav-link nav-text\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n      <a class=\"nav-link nav-text\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n    </div>\n  </header>\n  <router-outlet>\n  </router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/main/public/app.component.ts":
/*!**********************************************!*\
  !*** ./src/app/main/public/app.component.ts ***!
  \**********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/common.util */ "./src/app/util/common.util.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var userRole = _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].getSessionUserRole();
        if (userRole) {
            this.router.navigate(['/' + userRole.toLowerCase()]);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'app-component',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/main/public/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/main/public/app.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/main/public/home/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/main/public/home/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 1000px;\n}\n"

/***/ }),

/***/ "./src/app/main/public/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/main/public/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/main/public/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main/public/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-component',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/main/public/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/main/public/home/home.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/public/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/main/public/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  display:flex;\n  justify-content: center;\n  height: 200px;\n  widht: 200px;\n}\n.label-login {\n  text-align: center;\n  padding-bottom: 30px;\n}\n"

/***/ }),

/***/ "./src/app/main/public/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/main/public/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <div [hidden]=\"submitted\">\n    <form class=\"login\" (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n      <div class=\"label-login\"><label><h2 class=\"welcome\">Login Panel</h2></label></div>\n      <div class=\"alert alert-danger\" *ngIf=\"error\">\n        <div class=\"alert-items\">\n          <div class=\"alert-item static\">\n            <div class=\"alert-icon-wrapper\">\n            </div>\n            <span class=\"alert-text\">{{error}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"required\">Email</label>\n        <input type=\"email\"\n               id=\"email\"\n               aria-label=\"Email\"\n               required\n               [(ngModel)]=\"model.email\"\n               name=\"email\"\n               #email=\"ngModel\"\n               placeholder=\"Enter email\"\n               size=\"35\">\n        <div [hidden]=\"email.valid || email.pristine\"\n             class=\"alert alert-danger\">\n          Email is required\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"required\">Password</label>\n        <input type=\"password\"\n               id=\"password\"\n               required\n               [(ngModel)]=\"model.password\"\n               name=\"password\"\n               #password=\"ngModel\"\n               placeholder=\"Enter password\"\n               size=\"35\">\n        <div [hidden]=\"password.valid || password.pristine\"\n             class=\"alert alert-danger\">\n          Password is required\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!loginForm.form.valid\">\n        Log in\n      </button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/public/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main/public/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/login.model */ "./src/app/main/public/login/model/login.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/common.util */ "./src/app/util/common.util.ts");
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/constants */ "./src/app/models/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(commonService, router) {
        this.commonService = commonService;
        this.router = router;
        this.model = new _model_login_model__WEBPACK_IMPORTED_MODULE_1__["LoginModel"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.error = null;
        this.commonService.logIn(this.model)
            .subscribe(function (result) {
            if (result.user == null) {
                _this.error = result.message;
            }
            else {
                _util_common_util__WEBPACK_IMPORTED_MODULE_4__["CommonUtil"].putSessionUser(result.user);
                _this.userRole = _util_common_util__WEBPACK_IMPORTED_MODULE_4__["CommonUtil"].getSessionUserRole();
                switch (_this.userRole) {
                    case _models_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].ROLE_ADMIN:
                        _this.router.navigate(['/admin']);
                        break;
                    case _models_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].ROLE_USER:
                        _this.router.navigate(['/user']);
                        break;
                }
            }
        }, function (error) { return console.error(error); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-component',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/main/public/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/main/public/login/login.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/public/login/model/login.model.ts":
/*!********************************************************!*\
  !*** ./src/app/main/public/login/model/login.model.ts ***!
  \********************************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
        this.email = "";
        this.password = "";
    }
    return LoginModel;
}());



/***/ }),

/***/ "./src/app/main/public/register/model/register.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/public/register/model/register.model.ts ***!
  \**************************************************************/
/*! exports provided: RegisterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return RegisterModel; });
var RegisterModel = /** @class */ (function () {
    function RegisterModel() {
        this.email = "";
        this.password = "";
        this.firstName = "";
        this.lastName = "";
        this.role = "USER";
    }
    return RegisterModel;
}());



/***/ }),

/***/ "./src/app/main/public/register/register.component.css":
/*!*************************************************************!*\
  !*** ./src/app/main/public/register/register.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-style .ng-valid {\n  border-left: 1px solid #CCC\n}\n\n.no-style .ng-invalid {\n  border-left: 1px solid #CCC\n}\n\n.register-container {\n  position: absolute;\n  height: 200px;\n  widht: 200px;\n  top: 25%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n\n.label-login {\n  text-align: center;\n  padding-bottom: 30px;\n}\n"

/***/ }),

/***/ "./src/app/main/public/register/register.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main/public/register/register.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-container\">\n  <div class=\"alert alert-danger\" *ngIf=\"failMessage\">\n    <div class=\"alert-items\">\n      <div class=\"alert-item static\">\n        <div class=\"alert-icon-wrapper\">\n        </div>\n        <span class=\"alert-text\">\n               {{failMessage}}\n            </span>\n      </div>\n    </div>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeAlert()\">\n\n    </button>\n  </div>\n  <div [hidden]=\"submitted\">\n    <form (ngSubmit)=\"onSubmit()\"\n          #registerForm=\"ngForm\">\n      <div class=\"label-login\"><label><h2 class=\"welcome\">Registration Panel</h2></label></div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\"\n               id=\"email\"\n               required\n               [(ngModel)]=\"model.email\"\n               name=\"email\"\n               #email=\"ngModel\"\n               placeholder=\"Email here\"\n               size=\"35\">\n        <div [hidden]=\"email.valid || email.pristine\"\n             class=\"alert alert-danger\">\n          Email is required\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\"\n               id=\"password\"\n               required\n               [(ngModel)]=\"model.password\"\n               name=\"password\"\n               #password=\"ngModel\"\n               placeholder=\"Password here\"\n               size=\"35\">\n        <div [hidden]=\"password.valid || password.pristine\"\n             class=\"alert alert-danger\">\n          Password is required\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"firstName\">First name</label>\n        <input type=\"text\"\n               id=\"firstName\"\n               required\n               [(ngModel)]=\"model.firstName\"\n               name=\"firstName\"\n               #firstName=\"ngModel\"\n               placeholder=\"First name here\"\n               size=\"35\">\n        <div [hidden]=\"firstName.valid || firstName.pristine\"\n             class=\"alert alert-danger\">\n          First name is required\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last name</label>\n        <input type=\"text\"\n               id=\"lastName\"\n               required\n               [(ngModel)]=\"model.lastName\"\n               name=\"lastName\"\n               #lastName=\"ngModel\"\n               placeholder=\"Last name here\"\n               size=\"35\">\n        <div [hidden]=\"lastName.valid || lastName.pristine\"\n             class=\"alert alert-danger\">\n          Last name is required\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary btn-block\"\n              [disabled]=\"!registerForm.form.valid\">Register\n      </button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/public/register/register.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main/public/register/register.component.ts ***!
  \************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_register_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/register.model */ "./src/app/main/public/register/model/register.model.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/common.util */ "./src/app/util/common.util.ts");
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/constants */ "./src/app/models/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(commonService, router) {
        this.commonService = commonService;
        this.router = router;
        this.model = new _model_register_model__WEBPACK_IMPORTED_MODULE_1__["RegisterModel"]();
        this.Constants = _models_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.closeAlert = function () {
        this.failMessage = null;
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.commonService.register(this.model)
            .subscribe(function (result) {
            if (result.result == _models_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].RESULT_SUCCESSFUL) {
                _util_common_util__WEBPACK_IMPORTED_MODULE_3__["CommonUtil"].putSessionUser(result.user);
                _this.userRole = _util_common_util__WEBPACK_IMPORTED_MODULE_3__["CommonUtil"].getSessionUserRole();
                if (_this.userRole == _models_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].ROLE_ADMIN) {
                    _this.router.navigate(['/admin']);
                }
                else if (_this.userRole == _models_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].ROLE_USER) {
                    _this.router.navigate(['/user']);
                }
            }
            else {
                _this.failMessage = result.message;
            }
        }, function (error) { return console.error(error); });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register-component',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/main/public/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/main/public/register/register.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/main/shared-components/change-password/change-password-component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/main/shared-components/change-password/change-password-component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".change-pass-container {\n  max-width: 800px;\n  margin-left: 500px;\n}\n\n.formFields_7 {\n  width: 300px;\n}\n"

/***/ }),

/***/ "./src/app/main/shared-components/change-password/change-password-component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/main/shared-components/change-password/change-password-component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"change-pass-container\">\n  <div class=\"password-alert\">\n    <div class=\"alert alert-danger\" *ngIf=\"openFail\">\n      <div class=\"alert-items\">\n        <div class=\"alert-item static\">\n          <div class=\"alert-icon-wrapper\">\n\n            </div>\n          <span class=\"alert-text\">\n                    {{failMessage}}\n                </span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"alert alert-success\" *ngIf=\"openSuccess\">\n      <div class=\"alert-items\">\n        <div class=\"alert-item static\">\n          <div class=\"alert-icon-wrapper\">\n\n          </div>\n          <span class=\"alert-text\">\n                    Successfully changed password.\n                </span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <form>\n    <section class=\"form-block\">\n        <div class=\"form-group\">\n          <label class=\"required\">Old Password</label>\n          <input type=\"password\" #oldPass class=\"formFields_7\" placeholder=\"Password\">\n        </div>\n    </section>\n\n    <section class=\"form-block\">\n      <div class=\"form-group\">\n        <label class=\"required\">New Password</label>\n        <input type=\"password\" #newPass class=\"formFields_7\" placeholder=\"Password\">\n      </div>\n    </section>\n\n    <section class=\"form-block\">\n      <div class=\"form-group\">\n        <label class=\"required\">Repeat New Password</label>\n        <input type=\"password\" #newRepeat class=\"formFields_7\" placeholder=\"Password\">\n      </div>\n    </section>\n\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit(oldPass.value, newPass.value, newRepeat.value)\">Ok</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/main/shared-components/change-password/change-password-component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/shared-components/change-password/change-password-component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/common.util */ "./src/app/util/common.util.ts");
/* harmony import */ var _services_edit_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/edit.password.service */ "./src/app/main/shared-components/services/edit.password.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(service) {
        this.service = service;
        this.userEmail = '';
        this.openFail = false;
        this.failMessage = '';
        this.openSuccess = false;
    }
    ChangePasswordComponent.prototype.submit = function (old, newPass, newRepeat) {
        var _this = this;
        if (newPass === newRepeat) {
            this.service.changePassword(this.userEmail, old, newPass)
                .subscribe(function (success) {
                if (success) {
                    _this.openSuccess = true;
                    _this.openFail = false;
                }
                else {
                    _this.openFail = true;
                    _this.openSuccess = false;
                    _this.failMessage = 'Old password is wrong';
                }
            }, function (error) { return console.error(error); });
        }
        else {
            this.openFail = true;
            this.openSuccess = false;
            this.failMessage = 'The passwords do not match.';
        }
    };
    ChangePasswordComponent.prototype.ngOnChanges = function () {
    };
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.userEmail = _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].getSessionUserEmail();
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'change-password',
            template: __webpack_require__(/*! ./change-password-component.html */ "./src/app/main/shared-components/change-password/change-password-component.html"),
            styles: [__webpack_require__(/*! ./change-password-component.css */ "./src/app/main/shared-components/change-password/change-password-component.css")]
        }),
        __metadata("design:paramtypes", [_services_edit_password_service__WEBPACK_IMPORTED_MODULE_2__["EditPasswordService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/main/shared-components/services/edit.password.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/shared-components/services/edit.password.service.ts ***!
  \**************************************************************************/
/*! exports provided: EditPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordService", function() { return EditPasswordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_model_change_pass_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/model/change.pass.model */ "./src/app/services/model/change.pass.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditPasswordService = /** @class */ (function () {
    function EditPasswordService(http) {
        this.http = http;
    }
    EditPasswordService.prototype.changePassword = function (userEmail, oldPass, newPass) {
        var requestModel = new _services_model_change_pass_model__WEBPACK_IMPORTED_MODULE_2__["ChangePassModel"](userEmail, oldPass, newPass);
        return this.http.post('/changePassword', requestModel);
    };
    EditPasswordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EditPasswordService);
    return EditPasswordService;
}());



/***/ }),

/***/ "./src/app/main/shared-components/services/edit.patient.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/shared-components/services/edit.patient.service.ts ***!
  \*************************************************************************/
/*! exports provided: EditPatientProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPatientProfileService", function() { return EditPatientProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_model_edit_user_profile_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/model/edit.user.profile.model */ "./src/app/services/model/edit.user.profile.model.ts");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/common.util */ "./src/app/util/common.util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditPatientProfileService = /** @class */ (function () {
    function EditPatientProfileService(http) {
        this.http = http;
    }
    EditPatientProfileService.prototype.editPatientProfile = function (email, firstName, lastName, id) {
        var requestModel = new _services_model_edit_user_profile_model__WEBPACK_IMPORTED_MODULE_2__["EditPatientProfileModel"](email, firstName, lastName, id);
        var defaultModel = _util_common_util__WEBPACK_IMPORTED_MODULE_3__["CommonUtil"].getSessionUser();
        if (requestModel.email === '') {
            requestModel.email = defaultModel.email;
        }
        ;
        if (requestModel.firstName === '') {
            requestModel.firstName = defaultModel.firstName;
        }
        ;
        if (requestModel.lastName === '') {
            requestModel.lastName = defaultModel.lastName;
        }
        ;
        return this.http.post('/editPatientProfile', requestModel);
    };
    EditPatientProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EditPatientProfileService);
    return EditPatientProfileService;
}());



/***/ }),

/***/ "./src/app/main/user-view/blog/blog.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/user-view/blog/blog.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-events{\n  width: 100%;\n}\n\n.new-event{\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n\n.card{\n  width:400px;\n}\n\nform-block {\n  margin-bottom: 10px;\n}\n\n.card-header {\n  text-align: center;\n}\n\n.events {\n  position: absolute;\n  left: 50%;\n  width: 1000px;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n}\n\n.add-event, .labels, .select {\n  display: inline-block;\n}\n\n.error-msg {\n  margin-left:auto;\n  margin-right:0;\n}\n\n.new-event {\n  margin-bottom: 30px;\n}\n\nlabel{\n  margin-right: 18px;\n}\n\nh4 {\n  display: inline-block;\n}\n\nh3 {\n  text-align: center;\n}\n\n.date-time {\n  display: inline-block;\n  width: 350px;\n}\n\n.info {\n  margin-top: 13px;\n}\n\n.time,.description{\n  margin-top: 17px;\n}\n\n.description {\n  padding-bottom: 13px;\n}\n\n.select {\n  width: 230px;\n}\n\n#title, #date {\n  width: 230px;\n}\n"

/***/ }),

/***/ "./src/app/main/user-view/blog/blog.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/user-view/blog/blog.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-container\">\n BLOG\n</div>\n"

/***/ }),

/***/ "./src/app/main/user-view/blog/blog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/user-view/blog/blog.component.ts ***!
  \*******************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'blog-component',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/main/user-view/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/main/user-view/blog/blog.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/main/user-view/patient-profile/edit-address/edit.profile.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/main/user-view/patient-profile/edit-address/edit.profile.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dentist-edit-container{\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  height: 500px;\n}\n\n.edit-panel {\n  width: 700px;\n}\n\n.edit-label{\n  text-align: center;\n  padding-bottom: 30px;\n}\n\nh4{\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/main/user-view/patient-profile/edit-address/edit.profile.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/user-view/patient-profile/edit-address/edit.profile.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dentist-edit-container\">\n  <h4>Edit Panel</h4>\n  <div class=\"edit-profile-container\">\n    <div class=\"email-alert\">\n      <div class=\"alert alert-danger\" *ngIf=\"openFail\">\n        <div class=\"alert-items\">\n          <div class=\"alert-item static\">\n            <div class=\"alert-icon-wrapper\">\n            </div>\n            <span class=\"alert-text\">\n                    {{failMessage}}\n                </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n      <div class=\"alert alert-success\" *ngIf=\"openSuccess\">\n    <div class=\"alert-items\">\n      <div class=\"alert-item static\">\n        <div class=\"alert-icon-wrapper\">\n        </div>\n        <span class=\"alert-text\">\n                    Successfully updated profile.\n                </span>\n      </div>\n    </div>\n  </div>\n\n  <form #editForm=\"ngForm\">\n    <div class=\"edit-panel\">\n      <section class=\"form-block\">\n        <div class=\"form-group\">\n          <label class=\"required\">Email</label>\n          <input type=\"email\" [(ngModel)]=\"UserInfo.email\" #email=\"ngModel\" class=\"formFields_7\" size=\"25\" placeholder=\"Email\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"required\">FirstName</label>\n          <input type=\"text\" [(ngModel)]=\"UserInfo.firstName\" #firstName=\"ngModel\" class=\"formFields_7\" size=\"25\" placeholder=\"FirstName\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"required\">LastName</label>\n          <input type=\"text\" [(ngModel)]=\"UserInfo.lastName\" #lastName=\"ngModel\" class=\"formFields_7\" size=\"25\" placeholder=\"LastName\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"city\">City</label>\n          <div class=\"select\">\n            <select id=\"city\"\n                    name=\"city\"\n                    [(ngModel)]=\"UserInfo.city\"\n                    #city=\"ngModel\"\n                    [ngModelOptions]=\"{standalone: true}\"\n                >\n              <option value={{constants.CITY_SOFIA}}>Sofia</option>\n              <option value={{constants.CITY_VARNA}}>Varna</option>\n              <option value={{constants.CITY_PLOVDIV}}>Plovdiv</option>\n              <option value={{constants.CITY_BURGAS}}>Burgas</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"dentistType\">Type</label>\n          <div class=\"select\">\n            <select id=\"dentistType\"\n                    name=\"dentistType\"\n                    [(ngModel)]=\"UserInfo.dentistType\"\n                    #dentistType=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\n              <option value={{constants.TYPE_NORMAL}}>Normal</option>\n              <option value={{constants.TYPE_ORTHODONT}}>Orthodont</option>\n              <option value=\"{{constants.TYPE_SURGEON}}\">Surgeon</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label>General Information</label>\n          <textarea [(ngModel)]=\"UserInfo.generalInformation\"  #generalInformation=\"ngModel\" class=\"formFields_7\" rows=\"8\" placeholder=\"Add General Information\" [ngModelOptions]=\"{standalone: true}\">\n          </textarea>\n        </div>\n\n      </section>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-block\"(click)=\"submit(\n      UserInfo.email,\n    UserInfo.firstName,\n    UserInfo.lastName,\n    dentistType.value,\n    city.value,\n    UserInfo.generalInformation)\">Confirm</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/main/user-view/patient-profile/edit-address/edit.profile.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/user-view/patient-profile/edit-address/edit.profile.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditDentistProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDentistProfileComponent", function() { return EditDentistProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/common.util */ "./src/app/util/common.util.ts");
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/constants */ "./src/app/models/constants.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditDentistProfileComponent = /** @class */ (function () {
    function EditDentistProfileComponent(UserService) {
        this.UserService = UserService;
        this.constants = _models_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"];
        this.UserId = 0;
        this.openFail = false;
        this.failMessage = '';
        this.openSuccess = false;
    }
    /*
    submit(email: string, firstName: string, lastName: string, dentistType: string, city: string,generalInformation:string) {
  
      this.service.editDentistProfile(email, this.UserId, firstName, lastName, dentistType, city,generalInformation)
        .subscribe(success => {
            if (success) {
              this.openSuccess = true;//console log true
              this.openFail = false;
              this.UserService.getUserInfo(this.UserId)
                .subscribe(data => {
                    this.User = data;
                    CommonUtil.putSessionUser(this.User);},
                  err => console.log(err));
  
            } else {
              this.openFail = true;
              this.openSuccess = false;
              this.failMessage = 'This email is already used.';
  
            }
          },
  
          error => console.error(error));
  
    }
  
  
    ngOnChanges() {
  
    }
    */
    EditDentistProfileComponent.prototype.ngOnInit = function () {
        this.UserId = _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].getSessionUserId();
        this.UserInfo = _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].getSessionUser();
    };
    EditDentistProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'edit-dentist-profile-component',
            template: __webpack_require__(/*! ./edit.profile.component.html */ "./src/app/main/user-view/patient-profile/edit-address/edit.profile.component.html"),
            styles: [__webpack_require__(/*! ./edit.profile.component.css */ "./src/app/main/user-view/patient-profile/edit-address/edit.profile.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], EditDentistProfileComponent);
    return EditDentistProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/user-view/patient-profile/edit-profile/edit-profile.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/main/user-view/patient-profile/edit-profile/edit-profile.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".patient-edit-container {\n  position: absolute;\n  width: 400px;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n}\n\nh4{\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/main/user-view/patient-profile/edit-profile/edit-profile.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/user-view/patient-profile/edit-profile/edit-profile.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"patient-edit-container\">\n  <h4>Edit Panel</h4>\n    <div class=\"email-alert\">\n      <div class=\"alert alert-danger\" *ngIf=\"openFail\">\n        <div class=\"alert-items\">\n          <div class=\"alert-item static\">\n            <div class=\"alert-icon-wrapper\">\n            </div>\n            <span class=\"alert-text\">\n                    {{failMessage}}\n                </span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  <div class=\"alert alert-success\" *ngIf=\"openSuccess\">\n    <div class=\"alert-items\">\n      <div class=\"alert-item static\">\n        <div class=\"alert-icon-wrapper\">\n        </div>\n        <span class=\"alert-text\">\n                    Successfully updated profile.\n                </span>\n      </div>\n    </div>\n  </div>\n\n  <form #editForm=\"ngForm\">\n    <div>\n      <section class=\"form-block\">\n        <div class=\"form-group\">\n          <label class=\"required\">Email</label>\n          <input type=\"email\"  [(ngModel)]=\"EUser.email\" #email=\"ngModel\" class=\"formFields_7\" placeholder=\"Email\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"required\">FirstName</label>\n          <input type=\"text\" #firstName=\"ngModel\" [(ngModel)]=\"EUser.firstName\"  class=\"formFields_7\" placeholder=\"FirstName\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"required\">LastName</label>\n          <input type=\"text\" #lastName=\"ngModel\" [(ngModel)]=\"EUser.lastName\" class=\"formFields_7\" placeholder=\"LastName\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </section>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-block\"(click)=\"submit(EUser.email,EUser.firstName,EUser.lastName)\">Confirm</button>\n</form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/user-view/patient-profile/edit-profile/edit-profile.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/user-view/patient-profile/edit-profile/edit-profile.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/common.util */ "./src/app/util/common.util.ts");
/* harmony import */ var _shared_components_services_edit_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared-components/services/edit.patient.service */ "./src/app/main/shared-components/services/edit.patient.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/constants */ "./src/app/models/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(service, UserService) {
        this.service = service;
        this.UserService = UserService;
        this.UserId = 0;
        this.openFail = false;
        this.failMessage = '';
        this.openSuccess = false;
    }
    EditProfileComponent.prototype.submit = function (email, firstName, lastName) {
        var _this = this;
        this.service.editPatientProfile(email, firstName, lastName, this.UserId)
            .subscribe(function (result) {
            if (result.result == _models_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].RESULT_SUCCESSFUL) {
                _this.openSuccess = true; //console log true
                _this.openFail = false;
                _this.UserService.getUserInfo(_this.UserId)
                    .subscribe(function (data) {
                    _this.User = data;
                    _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].putSessionUser(_this.User);
                }, function (err) { return console.log(err); });
            }
            else {
                _this.openFail = true;
                _this.openSuccess = false;
                _this.failMessage = 'This email is already used.';
            }
        }, function (error) { return console.error(error); });
    };
    EditProfileComponent.prototype.ngOnChanges = function () {
    };
    EditProfileComponent.prototype.ngOnInit = function () {
        this.UserId = _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].getSessionUserId();
        console.log(this.UserId);
        this.UserInfo = _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].getSessionUser();
        this.EUser = this.UserInfo;
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'edit-patient-profile-component',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/main/user-view/patient-profile/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/main/user-view/patient-profile/edit-profile/edit-profile.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_shared_components_services_edit_patient_service__WEBPACK_IMPORTED_MODULE_2__["EditPatientProfileService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/user-view/patient-profile/patient-profile.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/main/user-view/patient-profile/patient-profile.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-navi {\n  height: 60px;\n  text-align: center;\n}\n\n.nav{\n  margin-top: 10px;\n  display: inline-block;\n  width:16%;\n  text-align: center;\n}\n\n\n"

/***/ }),

/***/ "./src/app/main/user-view/patient-profile/patient-profile.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/main/user-view/patient-profile/patient-profile.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"patient-profie-container\">\n  <div class=\"profile-content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/user-view/patient-profile/patient-profile.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/user-view/patient-profile/patient-profile.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PatientProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientProfileComponent", function() { return PatientProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/common.util */ "./src/app/util/common.util.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientProfileComponent = /** @class */ (function () {
    function PatientProfileComponent(router) {
        this.router = router;
    }
    PatientProfileComponent.prototype.loadAppointments = function () {
        this.router.navigate(['/patient/profile/appointments']);
    };
    PatientProfileComponent.prototype.editProfile = function () {
        this.router.navigate(['/patient/profile/edit']);
    };
    PatientProfileComponent.prototype.ambulatoryList = function () {
        this.router.navigate(['/patient/profile/ambulatory']);
    };
    PatientProfileComponent.prototype.ngOnInit = function () {
        this.userEmail = _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].getSessionUserEmail();
    };
    PatientProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'patient-profile-component',
            template: __webpack_require__(/*! ./patient-profile.component.html */ "./src/app/main/user-view/patient-profile/patient-profile.component.html"),
            styles: [__webpack_require__(/*! ./patient-profile.component.css */ "./src/app/main/user-view/patient-profile/patient-profile.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PatientProfileComponent);
    return PatientProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/user-view/patient.component.css":
/*!******************************************************!*\
  !*** ./src/app/main/user-view/patient.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n.header {\n  max-height: 60px;\n}\n*/\n\n.wrapper {\n  margin-top: 30px;\n  margin-left: 60px;\n  margin-right:60px;\n}\n\n.logo{\n  padding-right: 5px;\n}\n\n.subnav {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n\n/*#logo {\n  background-image:  url('../img/logo.jpg');\n  background-size: 100%;\n}*/\n\n.patient-container{\n  background-color: white;\n}\n\n.header-4 {\n  height: 150px;\n}\n\n.branding {\n  margin-right: 250px;\n  margin-left: 200px;\n}\n"

/***/ }),

/***/ "./src/app/main/user-view/patient.component.html":
/*!*******************************************************!*\
  !*** ./src/app/main/user-view/patient.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n<!--  <header class=\"header-4\">\n    <img src=\"https://d1af89beukha9h.cloudfront.net/wp-content/uploads/2018/01/Global-Fish-and-Seafood-Market.jpg\" width=\"1800\" height=\"150\">\n  </header>-->\n  <header class=\"header-6\">\n    <div class=\"navButtons\">\n      <div class=\"header-nav nav-justified\">\n        <a class=\"nav-link nav-text\" routerLink=\"/user/profile/edit\" routerLinkActive=\"active\">My Profile</a>\n        <a class=\"nav-link nav-text\" routerLink=\"/patient/profile/edit\" routerLinkActive=\"active\">About Us</a>\n        <a class=\"nav-link nav-text\" routerLink=\"/user/dentists\" routerLinkActive=\"active\">Products</a>\n      </div>\n    </div>\n    <div class=\"branding\">\n      <a href=\"...\" class=\"nav-link\">\n        <div class=\"logo\">\n          <img src=\"http://icons.iconarchive.com/icons/martin-berube/flat-animal/256/shark-icon.png\" width=\"50\" height=\"50\">\n        </div>\n        <span class=\"title\">Joe's Fish Store</span>\n      </a>\n    </div>\n    <div class=\"navButtons\">\n      <div class=\"header-nav nav-justified\">\n        <a class=\"nav-link nav-text\" routerLink=\"/user/blog\" routerLinkActive=\"active\">Blog</a>\n        <a class=\"nav-link nav-text\" routerLink=\"/user/cart\" routerLinkActive=\"active\">Shopping Cart</a>\n      </div>\n    </div>\n    <div class=\"header-actions\">\n\n    </div>\n  </header>\n  <div class=\"patient-router\">\n    <router-outlet>\n    </router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/user-view/patient.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/user-view/patient.component.ts ***!
  \*****************************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/common.util */ "./src/app/util/common.util.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientComponent = /** @class */ (function () {
    function PatientComponent(router) {
        this.router = router;
        this.userEmail = '';
    }
    PatientComponent.prototype.editProfile = function () {
        this.router.navigate(['/user/profile/edit']);
    };
    PatientComponent.prototype.dentistSearch = function () {
        this.router.navigate(['/user/dentists']);
    };
    PatientComponent.prototype.logout = function () {
        _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].removeUser();
        this.router.navigate(['']);
    };
    PatientComponent.prototype.ngOnInit = function () {
        this.userEmail = _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].getSessionUserEmail();
    };
    PatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'patient-component',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/main/user-view/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.css */ "./src/app/main/user-view/patient.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "./src/app/main/user-view/products/dentist-profile/dentist.profile.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/main/user-view/products/dentist-profile/dentist.profile.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-container{\n  display: flex;\n  justify-content: center;\n}\n\n\n.profile-card {\n  width: 800px;\n  display: block;\n}\n\n\n.dentist-info {\n  display: inline-block;\n  width: 800px;\n  vertical-align: top;\n  align-content: center;\n}\n\n\n.card {\n  width: 800px;\n}\n\n\nh4 {\n  text-align: center;\n}\n\n\n.ratings {\n  display: inline-block;\n  width: 800px;\n}\n"

/***/ }),

/***/ "./src/app/main/user-view/products/dentist-profile/dentist.profile.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/user-view/products/dentist-profile/dentist.profile.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container\">\n  <div class=\"dentist-info\">\n    <h4>DENTIST INFO</h4>\n    <div *ngIf=\"isDataAvailable\" class=\"profile-card\">\n      <div>\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Dr. {{dentist.firstName}} {{dentist.lastName}}\n          </div>\n          <div class=\"card-block\">\n            <div class=\"card-title\">\n\n            </div>\n            <div class=\"card-text\">\n              <p>City: {{dentist.city}}</p>\n              <p>Type: {{dentist.dentistType}}</p>\n              <p>More Information:{{dentist.generalInformation}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  <div class=\"ratings\">\n    <h4>PATIENTS RATINGS</h4>\n  </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/user-view/products/dentist-profile/dentist.profile.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/user-view/products/dentist-profile/dentist.profile.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DentistProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DentistProfileComponent", function() { return DentistProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dentist_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dentist.common.service */ "./src/app/main/user-view/products/services/dentist.common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import 'clarity-icons';
//import 'clarity-icons/shapes/essential-shapes';
//import 'clarity-icons/shapes/technology-shapes';


//import {CommonUtil} from "../../../../util/common.util";
var DentistProfileComponent = /** @class */ (function () {
    function DentistProfileComponent(_Activatedroute, dentistService) {
        this._Activatedroute = _Activatedroute;
        this.dentistService = dentistService;
        this.id = 0;
        this.isDataAvailable = false;
        this.avgRating = 0.;
    }
    DentistProfileComponent.prototype.ngOnInit = function () {
        this.id = this._Activatedroute.snapshot.params['id'];
    };
    DentistProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dentist-profile',
            template: __webpack_require__(/*! ./dentist.profile.component.html */ "./src/app/main/user-view/products/dentist-profile/dentist.profile.component.html"),
            styles: [__webpack_require__(/*! ./dentist.profile.component.css */ "./src/app/main/user-view/products/dentist-profile/dentist.profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_dentist_common_service__WEBPACK_IMPORTED_MODULE_2__["DentistCommonService"]])
    ], DentistProfileComponent);
    return DentistProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/user-view/products/dentist-profile/ratings/dentist.rating.model.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/user-view/products/dentist-profile/ratings/dentist.rating.model.ts ***!
  \*****************************************************************************************/
/*! exports provided: DentistRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DentistRating", function() { return DentistRating; });
var DentistRating = /** @class */ (function () {
    function DentistRating(rated_id, rater_id, rate, comment) {
        this.rated_id = rated_id;
        this.rater_id = rater_id;
        this.rate = rate;
        this.comment = comment;
    }
    return DentistRating;
}());



/***/ }),

/***/ "./src/app/main/user-view/products/dentist-profile/ratings/ratings.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/main/user-view/products/dentist-profile/ratings/ratings.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all-ratings {\n  max-width: 800px;\n}\n\n.rate {\n  width: 800px;\n  display: inline-block;\n}\n\n.rate-dentist {\n  width: 800px;\n}\n\n.alert {\n  width: 800px;\n}\n\nh4 {\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.hidden-warning {\n  display: none;\n}\n\n/***************************\nPulls the stars container to the left\n***************************/\n\n.rating {\n  display: inline-block;\n  position: relative;\n  top:50%;\n  left:35%;\n  margin-bottom: 10px;\n}\n\n/***************************\nHides the radio buttons\n***************************/\n\n.rating:not(:checked) > input {\n  position:absolute;\n  top:-9999px;\n  clip:rect(0,0,0,0);\n}\n\n/***************************\nDefault stars styles\n***************************/\n\n.rating:not(:checked) > label {\n  float:right;\n  width:1em;\n  padding:0 .1em;\n  overflow:hidden;\n  white-space:nowrap;\n  cursor:pointer;\n  font-size:200%;\n  line-height:1.2;\n  color:#ddd;\n}\n\n/***************************\nAdds the star symbol to the labels\n***************************/\n\n.rating:not(:checked) > label:before {\n  content: '★ ';\n}\n\n/***************************\nColour for the applied rating stars\n***************************/\n\n.rating > input:checked ~ label {\n  color: #f70;\n}\n\n/***************************\nColour for hovered stars when increasing the rating\n***************************/\n\n.rating:not(:checked) > label:hover,\n.rating:not(:checked) > label:hover ~ label {\n  color: gold;\n}\n\n/***************************\nColour for hovered stars when decreasing the rating\n***************************/\n\n.rating > input:checked ~ label:hover,\n.rating > input:checked ~ label:hover ~ label,\n.rating > label:hover ~ input:checked ~ label {\n  color: #ea0;\n}\n"

/***/ }),

/***/ "./src/app/main/user-view/products/dentist-profile/ratings/ratings.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/user-view/products/dentist-profile/ratings/ratings.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ratings-container\">\n  <div class=\"all-ratings\" *ngIf=\"isRatingAvailable()\">\n\n  </div>\n  <div class=\"rate-container\" *ngIf=\"userId != 0\">\n    <h4>RATE AND COMMENT</h4>\n\n    <div class=\"alert alert-danger\" *ngIf=\"!hideWarning\" [class.hidden-warning]=\"hideWarning\">\n      <div class=\"alert-items\">\n        <div class=\"alert-item static\">\n          <div class=\"alert-icon-wrapper\">\n          </div>\n          <span class=\"alert-text\">{{message}}</span>\n        </div>\n      </div>\n      <button type=\"button\" class=\"close\" (click)=\"closeWarning()\" aria-label=\"Close\">\n      </button>\n    </div>\n\n    <div class=\"rate-dentist\">\n      <div class=\"rating\">\n        <fieldset class=\"rating\">\n          <input type=\"radio\"\n                 value=\"5\"\n                 [name]=\"inputName\"\n                 [checked]=\"rating===5\" />\n          <label title=\"Perfect!\" (click)='onClick(5)'>5 stars</label>\n\n          <input type=\"radio\"\n                 value=\"4\"\n                 [name]=\"inputName\"\n                 [checked]=\"rating===4\" />\n          <label title=\"Pretty good.\" (click)='onClick(4)'>4 stars</label>\n\n          <input type=\"radio\"\n                 value=\"3\"\n                 [name]=\"inputName\"\n                 [checked]=\"rating===3\" />\n          <label title=\"Meh..\" (click)='onClick(3)'>3 stars</label>\n\n          <input type=\"radio\"\n                 value=\"2\"\n                 [name]=\"inputName\"\n                 [checked]=\"rating===2\" />\n          <label title=\"Seen better.\" (click)='onClick(2)'>2 stars</label>\n\n          <input type=\"radio\"\n                 value=\"1\"\n                 [name]=\"inputName\"\n                 [checked]=\"rating===1\" />\n          <label title=\"Sucks big time!\" (click)='onClick(1)'>1 star</label>\n        </fieldset>\n      </div>\n      <div class=\"rate\">\n        <form (ngSubmit)=\"onSubmit()\"\n              #registerForm=\"ngForm\">\n        <textarea id=\"formFields_8\" rows=\"3\"\n                  type=\"text\"\n                  required\n                  [(ngModel)]=\"comment\"\n                  name=\"comment\"\n                  placeholder=\"Comment..\"></textarea>\n          <button type=\"submit\" class=\"btn btn-primary btn-block\">Rate & Comment</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/user-view/products/dentist-profile/ratings/ratings.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/user-view/products/dentist-profile/ratings/ratings.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RatingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsComponent", function() { return RatingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../util/common.util */ "./src/app/util/common.util.ts");
/* harmony import */ var _services_ratings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/ratings.service */ "./src/app/services/ratings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RatingsComponent = /** @class */ (function () {
    function RatingsComponent(service) {
        this.service = service;
        this.isDataAvailable = false;
        this.rating = 0;
        this.ratingClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.comment = "";
        this.hideWarning = true;
        this.message = "";
    }
    RatingsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.userId = _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].getSessionUserId();
        this.inputName = this.itemId + '_rating';
        this.getRatings();
        if (this.userId != 0) {
            this.service.getPatientRatingForDentist(this.dentistId, this.userId)
                .subscribe(function (data) {
                if (data != null) {
                    _this.currentRate = data;
                    _this.onClick(_this.currentRate.rate);
                    _this.comment = _this.currentRate.comment;
                }
            }, function (err) { return console.log(err); });
        }
    };
    RatingsComponent.prototype.getRatings = function () {
        var _this = this;
        this.service.getDentistRating(this.dentistId).subscribe(function (data) {
            _this.ratings = data;
            _this.isDataAvailable = true;
        });
    };
    RatingsComponent.prototype.onClick = function (rating) {
        this.rating = rating;
        this.ratingClick.emit({
            itemId: this.itemId,
            rating: rating
        });
    };
    RatingsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.comment === "" || this.rating == 0) {
            this.message = 'Please add both a COMMENT and RATE before submitting.';
            this.hideWarning = false;
        }
        else {
            this.service.rateUser(this.userId, this.dentistId, this.rating, this.comment).subscribe(function (success) {
                if (success) {
                    _this.getRatings();
                    _this.comment = "";
                }
            });
        }
    };
    RatingsComponent.prototype.closeWarning = function () {
        this.hideWarning = !this.hideWarning;
    };
    RatingsComponent.prototype.isRatingAvailable = function () {
        return this.isDataAvailable;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingsComponent.prototype, "dentistId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingsComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingsComponent.prototype, "itemId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RatingsComponent.prototype, "ratingClick", void 0);
    RatingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ratings-component',
            template: __webpack_require__(/*! ./ratings.component.html */ "./src/app/main/user-view/products/dentist-profile/ratings/ratings.component.html"),
            styles: [__webpack_require__(/*! ./ratings.component.css */ "./src/app/main/user-view/products/dentist-profile/ratings/ratings.component.css")],
            providers: [_services_ratings_service__WEBPACK_IMPORTED_MODULE_2__["RatingsService"]]
        }),
        __metadata("design:paramtypes", [_services_ratings_service__WEBPACK_IMPORTED_MODULE_2__["RatingsService"]])
    ], RatingsComponent);
    return RatingsComponent;
}());



/***/ }),

/***/ "./src/app/main/user-view/products/dentist.results.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/main/user-view/products/dentist.results.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-container {\n  position: absolute;\n  width: 900px;\n  height: 100%;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%)\n}\n\n.search-result{\n  left: auto;\n  width: 900px\n}\n\nh4 {\n  text-align: center;\n  padding-bottom: 50px;\n}\n\n.hidden-warning {\n  display: none;\n}\n\n.search-box {\n  position: absolute;\n  width: 900px;\n  height: 100px;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n}\n\n.criteria {\n  width: 900px;\n}\n\n.search-city {\n  display: inline-block;\n}\n\n.search-name {\n  display: inline-block;\n}\n\n.btn btn-primary {\n  display: inline-block;\n}\n\n.form-block{\n  display: inline-block;\n}\n\n.city-dropdown {\n  display: inline-block;\n  width: 180px;\n}\n\n.type-dropdown {\n  display: inline-block;\n  width: 180px;\n}\n\n.events {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 800px;\n}\n\n.select {\n  display:block;\n}\n\n"

/***/ }),

/***/ "./src/app/main/user-view/products/dentist.results.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/user-view/products/dentist.results.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\">\n\n  <div class=\"alert alert-danger\" *ngIf=\"notAuth\" [class.hidden-warning]=\"hideWarning\">\n    <div class=\"alert-items\">\n      <div class=\"alert-item static\">\n        <div class=\"alert-icon-wrapper\">\n\n         </div>\n        <span class=\"alert-text\">Log in or Register to view profile!</span>\n      </div>\n    </div>\n    <button type=\"button\" class=\"close\" (click)=\"closeWarning()\" aria-label=\"Close\">\n\n     </button>\n  </div>\n\n  <div class=\"search-box\">\n\n    <div class=\"type-dropdown\">\n\n      <!--<span *ngIf=\"type\">{{type}}</span>-->\n    </div>\n\n    <div class=\"city-dropdown\">\n\n      <!--<span *ngIf=\"city\">{{city}}</span>-->\n    </div>\n\n    <form class=\"search-name\">\n      <section class=\"form-block\">\n        <div class=\"form-group\">\n          <label>Search by name:</label>\n          <input type=\"text\" #titleInput>\n        </div>\n      </section>\n      <button class=\"btn btn-primary\" (click) = \"setNameAndSearch(titleInput.value)\">Search</button>\n    </form>\n  </div>\n\n  <div class=\"events\">\n    <events></events>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/user-view/products/dentist.results.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/user-view/products/dentist.results.component.ts ***!
  \**********************************************************************/
/*! exports provided: DentistResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DentistResultsComponent", function() { return DentistResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/common.util */ "./src/app/util/common.util.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*class DentistComparator implements Comparator<UserModel> {
  compare(a: UserModel, b: UserModel) {
    return a.rating - b.rating;
  }
}*/
var DentistResultsComponent = /** @class */ (function () {
    function DentistResultsComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        //private dentistComparator = new DentistComparator();
        this.products = [];
        this.city = '';
    }
    /*public performSearch(){
      this.dentistService.getFilteredDentists(this.name, this.city, this.type)
              .subscribe(data => this.dentists = data,
              error => console.error(error));
    }*/
    DentistResultsComponent.prototype.openProfile = function (id) {
        if (_util_common_util__WEBPACK_IMPORTED_MODULE_2__["CommonUtil"].getSessionUserId() === 0) {
            this.router.navigate(["home/result/", id]);
        }
        else {
            this.router.navigate(["patient/result/", id]);
        }
    };
    /*setCity(city:string){
      if(city){
        this.currentCity = city;
        this.city = city;
        this.performSearch();
      }else{
        this.currentCity = 'Select city';
        this.city = "";
        this.performSearch();
      }
    }
  
    setNameAndSearch(name:string){
      this.name = name;
      this.performSearch();
    }
  
    setType(type:string){
      if(type){
        this.currentType = type;
        this.type = type;
        this.performSearch();
      }else{
        this.type = "";
        this.currentType = 'Select Type';
        this.performSearch();
      }
    }
  
    closeWarning() {
      this.hideWarning= !this.hideWarning;
    }*/
    DentistResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getAllProducts()
            .subscribe(function (data) { return _this.products = data; }, function (error) { return console.error(error); });
    };
    DentistResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'dentist-results',
            template: __webpack_require__(/*! ./dentist.results.component.html */ "./src/app/main/user-view/products/dentist.results.component.html"),
            styles: [__webpack_require__(/*! ./dentist.results.component.css */ "./src/app/main/user-view/products/dentist.results.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DentistResultsComponent);
    return DentistResultsComponent;
}());



/***/ }),

/***/ "./src/app/main/user-view/products/events/events.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/main/user-view/products/events/events.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".events-container {\n  margin-left:50px;\n  margin-top: 30px;\n  display: inline-block;\n  width: 850px;\n}\n\np {\n  display: inline-block;\n}\n\nh4 {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.event-info {\n  display: inline-block;\n}\n\n.card-header {\n  height: 20px;\n  text-align: center;\n}\n\n.event-comments {\n  display: inline-block;\n  vertical-align:top;\n  width: 350px;\n}\n\n.card {\n  width: 350px;\n}\n\n.card-header {\n  padding: 0 !important;\n}\n\n.com-table {\n  margin: 0 !important;\n}\n"

/***/ }),

/***/ "./src/app/main/user-view/products/events/events.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main/user-view/products/events/events.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"events-container\">\n  <h4>SPECIAL EVENTS</h4>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/user-view/products/events/events.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/user-view/products/events/events.component.ts ***!
  \********************************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/common.util */ "./src/app/util/common.util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
        // private dateComparator = new DateComparator();
        this.openInfo = false;
        this.fullName = "";
    }
    /* public currentEvent: EventInfoModel = new EventInfoModel();
     public comments: EventComment[] = [];
     public comment: string = "";
   
   
     constructor(private eventsService: EventsService){
     }
   
     private refreshComments(){
       this.eventsService.getEventComments(this.currentEvent.id)
         .subscribe( data => {
             this.comments = data;
           },
           err => console.log(err));
     }
   
   /!*  seeEventInfo(event: EventInfoModel){
       this.openInfo = true;
       this.currentEvent = event;
       this.refreshComments();
     }*!/
   
     onSubmit(){
       if(this.comment === ''){
         console.log('empty comment');
       }else{
         this.eventsService.comment(this.fullName, this.currentEvent.id, this.comment)
           .subscribe(success => {
             if(success){
               this.comment = '';
               this.refreshComments();
             }
             },
             err => console.log(err));
       }
     }*/
    EventsComponent.prototype.ngOnInit = function () {
        this.fullName = _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].getSessionUserFullName();
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/main/user-view/products/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/main/user-view/products/events/events.component.css")]
        })
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/main/user-view/products/services/dentist.common.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/user-view/products/services/dentist.common.service.ts ***!
  \****************************************************************************/
/*! exports provided: DentistCommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DentistCommonService", function() { return DentistCommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DentistCommonService = /** @class */ (function () {
    function DentistCommonService(httpClient) {
        this.httpClient = httpClient;
    }
    DentistCommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DentistCommonService);
    return DentistCommonService;
}());



/***/ }),

/***/ "./src/app/main/user-view/shopping-cart/shopping.cart.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/main/user-view/shopping-cart/shopping.cart.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-events{\n  width: 100%;\n}\n\n.new-event{\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n\n.card{\n  width:400px;\n}\n\nform-block {\n  margin-bottom: 10px;\n}\n\n.card-header {\n  text-align: center;\n}\n\n.events {\n  position: absolute;\n  left: 50%;\n  width: 1000px;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n}\n\n.add-event, .labels, .select {\n  display: inline-block;\n}\n\n.error-msg {\n  margin-left:auto;\n  margin-right:0;\n}\n\n.new-event {\n  margin-bottom: 30px;\n}\n\nlabel{\n  margin-right: 18px;\n}\n\nh4 {\n  display: inline-block;\n}\n\nh3 {\n  text-align: center;\n}\n\n.date-time {\n  display: inline-block;\n  width: 350px;\n}\n\n.info {\n  margin-top: 13px;\n}\n\n.time,.description{\n  margin-top: 17px;\n}\n\n.description {\n  padding-bottom: 13px;\n}\n\n.select {\n  width: 230px;\n}\n\n#title, #date {\n  width: 230px;\n}\n"

/***/ }),

/***/ "./src/app/main/user-view/shopping-cart/shopping.cart.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/main/user-view/shopping-cart/shopping.cart.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cart-container\">\n  SHOPPING CART\n</div>\n"

/***/ }),

/***/ "./src/app/main/user-view/shopping-cart/shopping.cart.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/user-view/shopping-cart/shopping.cart.component.ts ***!
  \*************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent() {
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'shopping-cart',
            template: __webpack_require__(/*! ./shopping.cart.component.html */ "./src/app/main/user-view/shopping-cart/shopping.cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping.cart.component.css */ "./src/app/main/user-view/shopping-cart/shopping.cart.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/models/constants.ts":
/*!*************************************!*\
  !*** ./src/app/models/constants.ts ***!
  \*************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.RESULT_SUCCESSFUL = "SUCCESS";
    Constants.RESULT_FAILED = "FAIL";
    Constants.RESULT_ERROR = "ERROR";
    Constants.ROLE_ADMIN = "ADMIN";
    Constants.ROLE_USER = "USER";
    Constants.CITY_SOFIA = "Sofia";
    Constants.CITY_VARNA = "Varna";
    Constants.CITY_PLOVDIV = "Plovdiv";
    Constants.CITY_BURGAS = "Burgas";
    Constants.SESSION_USER = "currentUser";
    Constants.PATIENT_BLACKLISTED_SUCCESSFULLY = "The patient was added to your blacklist successfully.";
    Constants.PATIENT_UNBLACKLISTED_SUCCESSFULLY = "The patient was removed from your blacklist successfully.";
    return Constants;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_manage_block_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/manage.block.model */ "./src/app/services/model/manage.block.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService_1 = AdminService;
    AdminService.prototype.blockUser = function (adminEmail, targetUserEmail, block) {
        var requestModel = new _model_manage_block_model__WEBPACK_IMPORTED_MODULE_1__["ManageBlockModel"](adminEmail, targetUserEmail, block);
        return this.http.post(AdminService_1.MANAGE_BLOCKED_USERS_URL, requestModel);
    };
    AdminService.MANAGE_BLOCKED_USERS_URL = "/manageBlockedUsers";
    AdminService = AdminService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminService);
    return AdminService;
    var AdminService_1;
}());



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonService = /** @class */ (function () {
    function CommonService(httpClient) {
        this.httpClient = httpClient;
    }
    CommonService_1 = CommonService;
    CommonService.prototype.logIn = function (loginModel) {
        return this.httpClient.post(CommonService_1.LOGIN_URL, loginModel);
    };
    CommonService.prototype.register = function (registerModel) {
        return this.registerUser(registerModel);
    };
    CommonService.prototype.registerUser = function (registerModel) {
        return this.httpClient.post(CommonService_1.REGISTER_USER_URL, registerModel);
    };
    CommonService.prototype.getUserInfo = function (id) {
        return this.httpClient.get('user/' + id);
    };
    CommonService.LOGIN_URL = "/authenticate";
    CommonService.REGISTER_USER_URL = "/registerUser";
    CommonService = CommonService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CommonService);
    return CommonService;
    var CommonService_1;
}());



/***/ }),

/***/ "./src/app/services/model/change.pass.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/model/change.pass.model.ts ***!
  \*****************************************************/
/*! exports provided: ChangePassModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassModel", function() { return ChangePassModel; });
var ChangePassModel = /** @class */ (function () {
    function ChangePassModel(userEmail, oldPass, newPass) {
        this.userEmail = userEmail;
        this.oldPass = oldPass;
        this.newPass = newPass;
    }
    return ChangePassModel;
}());



/***/ }),

/***/ "./src/app/services/model/edit.user.profile.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/model/edit.user.profile.model.ts ***!
  \***********************************************************/
/*! exports provided: EditPatientProfileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPatientProfileModel", function() { return EditPatientProfileModel; });
var EditPatientProfileModel = /** @class */ (function () {
    function EditPatientProfileModel(email, firstName, lastName, id) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
    return EditPatientProfileModel;
}());



/***/ }),

/***/ "./src/app/services/model/manage.block.model.ts":
/*!******************************************************!*\
  !*** ./src/app/services/model/manage.block.model.ts ***!
  \******************************************************/
/*! exports provided: ManageBlockModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBlockModel", function() { return ManageBlockModel; });
var ManageBlockModel = /** @class */ (function () {
    function ManageBlockModel(adminEmail, targetUserEmail, block) {
        this.adminEmail = adminEmail;
        this.targetUserEmail = targetUserEmail;
        this.block = block;
    }
    return ManageBlockModel;
}());



/***/ }),

/***/ "./src/app/services/ratings.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/ratings.service.ts ***!
  \*********************************************/
/*! exports provided: RatingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsService", function() { return RatingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _main_user_view_products_dentist_profile_ratings_dentist_rating_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/user-view/products/dentist-profile/ratings/dentist.rating.model */ "./src/app/main/user-view/products/dentist-profile/ratings/dentist.rating.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RatingsService = /** @class */ (function () {
    function RatingsService(http) {
        this.http = http;
    }
    RatingsService.prototype.getDentistRating = function (id) {
        return this.http.get('rating/' + id);
    };
    RatingsService.prototype.rateUser = function (raterId, ratedId, rate, comment) {
        var requestModel = new _main_user_view_products_dentist_profile_ratings_dentist_rating_model__WEBPACK_IMPORTED_MODULE_2__["DentistRating"](raterId, ratedId, rate, comment);
        return this.http.post('/addRating', requestModel);
    };
    RatingsService.prototype.existsRating = function (patientId, dentistId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('patientId', patientId)
            .set('dentistId', dentistId);
        return this.http.get('canRate/', { params: params });
    };
    RatingsService.prototype.getDentistRatingForPatient = function (dentistId, patientId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('dentistId', dentistId)
            .set('patientId', patientId);
        return this.http.get('getCurrentRate/', { params: params });
    };
    RatingsService.prototype.getPatientRatingForDentist = function (patientId, dentistId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('dentistId', dentistId)
            .set('patientId', patientId);
        return this.http.get('getCurrentRate/', { params: params });
    };
    RatingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RatingsService);
    return RatingsService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = /** @class */ (function () {
    function UsersService(httpClient) {
        this.httpClient = httpClient;
    }
    UsersService_1 = UsersService;
    UsersService.prototype.getAllProducts = function () {
        return this.httpClient.get(UsersService_1.GET_ALL_PRODUCTS_URL);
    };
    UsersService.GET_ALL_PRODUCTS_URL = "/getAllProducts";
    UsersService.GET_ALL_PATIENTS_URL = "/getAllPatients";
    UsersService.BLACKLIST_USER_URL = "/blacklistUser";
    UsersService.GET_USER_BLACKLIST_URL = "/getUserBlacklist";
    UsersService = UsersService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UsersService);
    return UsersService;
    var UsersService_1;
}());



/***/ }),

/***/ "./src/app/util/common.util.ts":
/*!*************************************!*\
  !*** ./src/app/util/common.util.ts ***!
  \*************************************/
/*! exports provided: CommonUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonUtil", function() { return CommonUtil; });
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/constants */ "./src/app/models/constants.ts");

var CommonUtil = /** @class */ (function () {
    function CommonUtil() {
    }
    CommonUtil.putSessionUser = function (user) {
        sessionStorage.setItem(_models_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].SESSION_USER, JSON.stringify(user));
    };
    CommonUtil.removeUser = function () {
        sessionStorage.removeItem(_models_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].SESSION_USER);
    };
    CommonUtil.getSessionUser = function () {
        return JSON.parse(sessionStorage.getItem(_models_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].SESSION_USER));
    };
    CommonUtil.getSessionUserRole = function () {
        var user = this.getSessionUser();
        return user ? user.role : "";
    };
    CommonUtil.getSessionUserEmail = function () {
        var user = this.getSessionUser();
        return user ? user.email : "";
    };
    CommonUtil.getSessionUserId = function () {
        var user = this.getSessionUser();
        return user ? user.id : 0;
    };
    CommonUtil.getSessionUserFullName = function () {
        var user = this.getSessionUser();
        return user ? (user.firstName + ' ' + user.lastName) : "";
    };
    CommonUtil.toDate = function (str) {
        return new Date("2000-01-01T" + str + ":00");
    };
    CommonUtil.getTime = function (millis) {
        if (millis == null) {
            return "";
        }
        var date = new Date(millis);
        return date.toTimeString().substr(3, 5);
    };
    CommonUtil.getReadableDay = function (weekDay) {
        return weekDay.substr(0, 1) + weekDay.substr(1).toLowerCase();
    };
    return CommonUtil;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");



if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    //enableProdMode();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\FishStore\ui\src\main\ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map