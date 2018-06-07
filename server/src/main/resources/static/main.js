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
/* harmony import */ var _main_user_view_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/user-view/user.component */ "./src/app/main/user-view/user.component.ts");
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/role.guard */ "./src/app/guards/role.guard.ts");
/* harmony import */ var _main_admin_view_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/admin-view/admin.component */ "./src/app/main/admin-view/admin.component.ts");
/* harmony import */ var _main_public_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/public/app.component */ "./src/app/main/public/app.component.ts");
/* harmony import */ var _main_public_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/public/home/home.component */ "./src/app/main/public/home/home.component.ts");
/* harmony import */ var _main_public_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/public/register/register.component */ "./src/app/main/public/register/register.component.ts");
/* harmony import */ var _main_public_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/public/login/login.component */ "./src/app/main/public/login/login.component.ts");
/* harmony import */ var _main_user_view_products_dentist_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/user-view/products/dentist.results.component */ "./src/app/main/user-view/products/dentist.results.component.ts");
/* harmony import */ var _main_user_view_products_dentist_profile_dentist_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/user-view/products/dentist-profile/dentist.profile.component */ "./src/app/main/user-view/products/dentist-profile/dentist.profile.component.ts");
/* harmony import */ var _main_user_view_user_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/user-view/user-profile/edit-profile/edit-profile.component */ "./src/app/main/user-view/user-profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _main_user_view_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/user-view/user-profile/user-profile.component */ "./src/app/main/user-view/user-profile/user-profile.component.ts");
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
            { path: 'user', component: _main_user_view_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
                children: [
                    { path: '', redirectTo: 'dentists', pathMatch: 'full' },
                    { path: 'profile', component: _main_user_view_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["UserProfileComponent"], children: [
                            { path: '', redirectTo: 'edit', pathMatch: 'full' },
                            { path: 'edit', pathMatch: 'full', component: _main_user_view_user_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_12__["EditProfileComponent"] },
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
/* harmony import */ var _main_user_view_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/user-view/user.component */ "./src/app/main/user-view/user.component.ts");
/* harmony import */ var _main_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/shared-components/change-password/change-password-component */ "./src/app/main/shared-components/change-password/change-password-component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_user_view_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/user-view/user-profile/user-profile.component */ "./src/app/main/user-view/user-profile/user-profile.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _main_admin_view_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/admin-view/admin.component */ "./src/app/main/admin-view/admin.component.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/role.guard */ "./src/app/guards/role.guard.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _main_user_view_user_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/user-view/user-profile/edit-profile/edit-profile.component */ "./src/app/main/user-view/user-profile/edit-profile/edit-profile.component.ts");
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
/* harmony import */ var _main_user_view_user_profile_edit_address_edit_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./main/user-view/user-profile/edit-address/edit.profile.component */ "./src/app/main/user-view/user-profile/edit-address/edit.profile.component.ts");
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
                _main_user_view_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _main_admin_view_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _main_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"],
                _main_user_view_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
                _main_user_view_products_dentist_results_component__WEBPACK_IMPORTED_MODULE_24__["DentistResultsComponent"],
                _main_user_view_user_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_17__["EditProfileComponent"],
                _main_user_view_products_events_events_component__WEBPACK_IMPORTED_MODULE_25__["EventsComponent"],
                _main_user_view_products_dentist_profile_dentist_profile_component__WEBPACK_IMPORTED_MODULE_26__["DentistProfileComponent"],
                _main_user_view_products_dentist_profile_ratings_ratings_component__WEBPACK_IMPORTED_MODULE_27__["RatingsComponent"],
                _main_user_view_user_profile_edit_address_edit_profile_component__WEBPACK_IMPORTED_MODULE_31__["EditDentistProfileComponent"],
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

module.exports = ".header {\r\n  max-height: 10px;\r\n}\r\n\r\n.logo {\r\n  padding-right: 5px;\r\n}\r\n\r\n.header-navi {\r\n  height: 60px;\r\n}\r\n\r\n.nav{\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  width:16%;\r\n  text-align: center;\r\n}\r\n\r\nh1{\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/admin-view/admin.component.html":
/*!******************************************************!*\
  !*** ./src/app/main/admin-view/admin.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <header class=\"header-6\">\r\n    <div class=\"branding\">\r\n      <a href=\"...\" class=\"nav-link\">\r\n        <div class=\"logo\">\r\n          <img src=\"https://www.clker.com/cliparts/A/K/h/3/U/N/tooth-md.png\" width=\"50\" height=\"50\">\r\n        </div>\r\n        <span class=\"title\">Appointment App - Admin Dashboard</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"header-actions\">\r\n\r\n    </div>\r\n  </header>\r\n  <div class=\"wrapper\">\r\n    <div *ngIf=\"users\">\r\n      <h1>Patients</h1>\r\n    </div>\r\n  </div>\r\n\r\n"

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

module.exports = "  /*.main-container {*/\r\n    /*display: flex;*/\r\n    /*justify-content: center;*/\r\n    /*text-align: center;*/\r\n    /*}*/\r\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n   <router-outlet>\r\n   </router-outlet>\r\n</div>\r\n"

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

module.exports = ".header-navi {\r\n  height: 60px;\r\n  text-align: center;\r\n}\r\n\r\n.nav {\r\n  margin-top: 15px;\r\n  display: inline-block;\r\n  width:16%;\r\n  text-align: center;\r\n}\r\n\r\n.navbar {\r\n  margin-top: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.logo {\r\n  padding-right: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/public/app.component.html":
/*!************************************************!*\
  !*** ./src/app/main/public/app.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <header class=\"header-6\">\r\n    <div class=\"branding\">\r\n      <a href=\"...\" class=\"nav-link\">\r\n        <div class=\"logo\">\r\n          <img src=\"https://www.clker.com/cliparts/A/K/h/3/U/N/tooth-md.png\" width=\"50\" height=\"50\">\r\n        </div>\r\n        <span class=\"title\">Fish Store</span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"header-nav nav-justified\">\r\n      <a class=\"nav-link nav-text\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n      <a class=\"nav-link nav-text\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\r\n      <a class=\"nav-link nav-text\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\r\n    </div>\r\n  </header>\r\n  <router-outlet>\r\n  </router-outlet>\r\n</div>\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" style=\"\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Features</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">About</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" placeholder=\"Search\" type=\"text\">\r\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n<button type=\"button\" class=\"btn btn-primary\">Primary</button>\r\n"

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

module.exports = ".container {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  width: 1000px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/public/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/main/public/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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

module.exports = ".login-container {\r\n  display:flex;\r\n  justify-content: center;\r\n  height: 200px;\r\n  widht: 200px;\r\n}\r\n.label-login {\r\n  text-align: center;\r\n  padding-bottom: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/public/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/main/public/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\r\n  <div [hidden]=\"submitted\">\r\n    <form class=\"login\" (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\r\n      <div class=\"label-login\"><label><h2 class=\"welcome\">Login Panel</h2></label></div>\r\n      <div class=\"alert alert-danger\" *ngIf=\"error\">\r\n        <div class=\"alert-items\">\r\n          <div class=\"alert-item static\">\r\n            <div class=\"alert-icon-wrapper\">\r\n            </div>\r\n            <span class=\"alert-text\">{{error}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"required\">Email</label>\r\n        <input type=\"email\"\r\n               id=\"email\"\r\n               aria-label=\"Email\"\r\n               required\r\n               [(ngModel)]=\"model.email\"\r\n               name=\"email\"\r\n               #email=\"ngModel\"\r\n               placeholder=\"Enter email\"\r\n               size=\"35\">\r\n        <div [hidden]=\"email.valid || email.pristine\"\r\n             class=\"alert alert-danger\">\r\n          Email is required\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"required\">Password</label>\r\n        <input type=\"password\"\r\n               id=\"password\"\r\n               required\r\n               [(ngModel)]=\"model.password\"\r\n               name=\"password\"\r\n               #password=\"ngModel\"\r\n               placeholder=\"Enter password\"\r\n               size=\"35\">\r\n        <div [hidden]=\"password.valid || password.pristine\"\r\n             class=\"alert alert-danger\">\r\n          Password is required\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!loginForm.form.valid\">\r\n        Log in\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

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

module.exports = ".no-style .ng-valid {\r\n  border-left: 1px solid #CCC\r\n}\r\n\r\n.no-style .ng-invalid {\r\n  border-left: 1px solid #CCC\r\n}\r\n\r\n.register-container {\r\n  position: absolute;\r\n  height: 200px;\r\n  widht: 200px;\r\n  top: 25%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n}\r\n\r\n.label-login {\r\n  text-align: center;\r\n  padding-bottom: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/public/register/register.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main/public/register/register.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-container\">\r\n  <div class=\"alert alert-danger\" *ngIf=\"failMessage\">\r\n    <div class=\"alert-items\">\r\n      <div class=\"alert-item static\">\r\n        <div class=\"alert-icon-wrapper\">\r\n        </div>\r\n        <span class=\"alert-text\">\r\n               {{failMessage}}\r\n            </span>\r\n      </div>\r\n    </div>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeAlert()\">\r\n\r\n    </button>\r\n  </div>\r\n  <div [hidden]=\"submitted\">\r\n    <form (ngSubmit)=\"onSubmit()\"\r\n          #registerForm=\"ngForm\">\r\n      <div class=\"label-login\"><label><h2 class=\"welcome\">Registration Panel</h2></label></div>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email</label>\r\n        <input type=\"email\"\r\n               id=\"email\"\r\n               required\r\n               [(ngModel)]=\"model.email\"\r\n               name=\"email\"\r\n               #email=\"ngModel\"\r\n               placeholder=\"Email here\"\r\n               size=\"35\">\r\n        <div [hidden]=\"email.valid || email.pristine\"\r\n             class=\"alert alert-danger\">\r\n          Email is required\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\"\r\n               id=\"password\"\r\n               required\r\n               [(ngModel)]=\"model.password\"\r\n               name=\"password\"\r\n               #password=\"ngModel\"\r\n               placeholder=\"Password here\"\r\n               size=\"35\">\r\n        <div [hidden]=\"password.valid || password.pristine\"\r\n             class=\"alert alert-danger\">\r\n          Password is required\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"firstName\">First name</label>\r\n        <input type=\"text\"\r\n               id=\"firstName\"\r\n               required\r\n               [(ngModel)]=\"model.firstName\"\r\n               name=\"firstName\"\r\n               #firstName=\"ngModel\"\r\n               placeholder=\"First name here\"\r\n               size=\"35\">\r\n        <div [hidden]=\"firstName.valid || firstName.pristine\"\r\n             class=\"alert alert-danger\">\r\n          First name is required\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"lastName\">Last name</label>\r\n        <input type=\"text\"\r\n               id=\"lastName\"\r\n               required\r\n               [(ngModel)]=\"model.lastName\"\r\n               name=\"lastName\"\r\n               #lastName=\"ngModel\"\r\n               placeholder=\"Last name here\"\r\n               size=\"35\">\r\n        <div [hidden]=\"lastName.valid || lastName.pristine\"\r\n             class=\"alert alert-danger\">\r\n          Last name is required\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary btn-block\"\r\n              [disabled]=\"!registerForm.form.valid\">Register\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n"

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

module.exports = ".change-pass-container {\r\n  max-width: 800px;\r\n  margin-left: 500px;\r\n}\r\n\r\n.formFields_7 {\r\n  width: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/shared-components/change-password/change-password-component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/main/shared-components/change-password/change-password-component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"change-pass-container\">\r\n  <div class=\"password-alert\">\r\n    <div class=\"alert alert-danger\" *ngIf=\"openFail\">\r\n      <div class=\"alert-items\">\r\n        <div class=\"alert-item static\">\r\n          <div class=\"alert-icon-wrapper\">\r\n\r\n            </div>\r\n          <span class=\"alert-text\">\r\n                    {{failMessage}}\r\n                </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"alert alert-success\" *ngIf=\"openSuccess\">\r\n      <div class=\"alert-items\">\r\n        <div class=\"alert-item static\">\r\n          <div class=\"alert-icon-wrapper\">\r\n\r\n          </div>\r\n          <span class=\"alert-text\">\r\n                    Successfully changed password.\r\n                </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <form>\r\n    <section class=\"form-block\">\r\n        <div class=\"form-group\">\r\n          <label class=\"required\">Old Password</label>\r\n          <input type=\"password\" #oldPass class=\"formFields_7\" placeholder=\"Password\">\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"form-block\">\r\n      <div class=\"form-group\">\r\n        <label class=\"required\">New Password</label>\r\n        <input type=\"password\" #newPass class=\"formFields_7\" placeholder=\"Password\">\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"form-block\">\r\n      <div class=\"form-group\">\r\n        <label class=\"required\">Repeat New Password</label>\r\n        <input type=\"password\" #newRepeat class=\"formFields_7\" placeholder=\"Password\">\r\n      </div>\r\n    </section>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit(oldPass.value, newPass.value, newRepeat.value)\">Ok</button>\r\n  </form>\r\n</div>\r\n"

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

module.exports = ".edit-events{\r\n  width: 100%;\r\n}\r\n\r\n.new-event{\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.card{\r\n  width:400px;\r\n}\r\n\r\nform-block {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.card-header {\r\n  text-align: center;\r\n}\r\n\r\n.events {\r\n  position: absolute;\r\n  left: 50%;\r\n  width: 1000px;\r\n  -webkit-transform: translate(-50%);\r\n          transform: translate(-50%);\r\n}\r\n\r\n.add-event, .labels, .select {\r\n  display: inline-block;\r\n}\r\n\r\n.error-msg {\r\n  margin-left:auto;\r\n  margin-right:0;\r\n}\r\n\r\n.new-event {\r\n  margin-bottom: 30px;\r\n}\r\n\r\nlabel{\r\n  margin-right: 18px;\r\n}\r\n\r\nh4 {\r\n  display: inline-block;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\n.date-time {\r\n  display: inline-block;\r\n  width: 350px;\r\n}\r\n\r\n.info {\r\n  margin-top: 13px;\r\n}\r\n\r\n.time,.description{\r\n  margin-top: 17px;\r\n}\r\n\r\n.description {\r\n  padding-bottom: 13px;\r\n}\r\n\r\n.select {\r\n  width: 230px;\r\n}\r\n\r\n#title, #date {\r\n  width: 230px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/user-view/blog/blog.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/user-view/blog/blog.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-container\">\r\n BLOG\r\n</div>\r\n"

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

/***/ "./src/app/main/user-view/products/dentist-profile/dentist.profile.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/main/user-view/products/dentist-profile/dentist.profile.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-container{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n.profile-card {\r\n  width: 800px;\r\n  display: block;\r\n}\r\n\r\n\r\n.dentist-info {\r\n  display: inline-block;\r\n  width: 800px;\r\n  vertical-align: top;\r\n  align-content: center;\r\n}\r\n\r\n\r\n.card {\r\n  width: 800px;\r\n}\r\n\r\n\r\nh4 {\r\n  text-align: center;\r\n}\r\n\r\n\r\n.ratings {\r\n  display: inline-block;\r\n  width: 800px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/user-view/products/dentist-profile/dentist.profile.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/user-view/products/dentist-profile/dentist.profile.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container\">\r\n  <div class=\"dentist-info\">\r\n    <h4>DENTIST INFO</h4>\r\n    <div *ngIf=\"isDataAvailable\" class=\"profile-card\">\r\n      <div>\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            Dr. {{dentist.firstName}} {{dentist.lastName}}\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <div class=\"card-title\">\r\n\r\n            </div>\r\n            <div class=\"card-text\">\r\n              <p>City: {{dentist.city}}</p>\r\n              <p>Type: {{dentist.dentistType}}</p>\r\n              <p>More Information:{{dentist.generalInformation}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div class=\"ratings\">\r\n    <h4>PATIENTS RATINGS</h4>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n"

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

module.exports = ".all-ratings {\r\n  max-width: 800px;\r\n}\r\n\r\n.rate {\r\n  width: 800px;\r\n  display: inline-block;\r\n}\r\n\r\n.rate-dentist {\r\n  width: 800px;\r\n}\r\n\r\n.alert {\r\n  width: 800px;\r\n}\r\n\r\nh4 {\r\n  text-align: center;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.hidden-warning {\r\n  display: none;\r\n}\r\n\r\n/***************************\r\nPulls the stars container to the left\r\n***************************/\r\n\r\n.rating {\r\n  display: inline-block;\r\n  position: relative;\r\n  top:50%;\r\n  left:35%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/***************************\r\nHides the radio buttons\r\n***************************/\r\n\r\n.rating:not(:checked) > input {\r\n  position:absolute;\r\n  top:-9999px;\r\n  clip:rect(0,0,0,0);\r\n}\r\n\r\n/***************************\r\nDefault stars styles\r\n***************************/\r\n\r\n.rating:not(:checked) > label {\r\n  float:right;\r\n  width:1em;\r\n  padding:0 .1em;\r\n  overflow:hidden;\r\n  white-space:nowrap;\r\n  cursor:pointer;\r\n  font-size:200%;\r\n  line-height:1.2;\r\n  color:#ddd;\r\n}\r\n\r\n/***************************\r\nAdds the star symbol to the labels\r\n***************************/\r\n\r\n.rating:not(:checked) > label:before {\r\n  content: '★ ';\r\n}\r\n\r\n/***************************\r\nColour for the applied rating stars\r\n***************************/\r\n\r\n.rating > input:checked ~ label {\r\n  color: #f70;\r\n}\r\n\r\n/***************************\r\nColour for hovered stars when increasing the rating\r\n***************************/\r\n\r\n.rating:not(:checked) > label:hover,\r\n.rating:not(:checked) > label:hover ~ label {\r\n  color: gold;\r\n}\r\n\r\n/***************************\r\nColour for hovered stars when decreasing the rating\r\n***************************/\r\n\r\n.rating > input:checked ~ label:hover,\r\n.rating > input:checked ~ label:hover ~ label,\r\n.rating > label:hover ~ input:checked ~ label {\r\n  color: #ea0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/user-view/products/dentist-profile/ratings/ratings.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/user-view/products/dentist-profile/ratings/ratings.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ratings-container\">\r\n  <div class=\"all-ratings\" *ngIf=\"isRatingAvailable()\">\r\n\r\n  </div>\r\n  <div class=\"rate-container\" *ngIf=\"userId != 0\">\r\n    <h4>RATE AND COMMENT</h4>\r\n\r\n    <div class=\"alert alert-danger\" *ngIf=\"!hideWarning\" [class.hidden-warning]=\"hideWarning\">\r\n      <div class=\"alert-items\">\r\n        <div class=\"alert-item static\">\r\n          <div class=\"alert-icon-wrapper\">\r\n          </div>\r\n          <span class=\"alert-text\">{{message}}</span>\r\n        </div>\r\n      </div>\r\n      <button type=\"button\" class=\"close\" (click)=\"closeWarning()\" aria-label=\"Close\">\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"rate-dentist\">\r\n      <div class=\"rating\">\r\n        <fieldset class=\"rating\">\r\n          <input type=\"radio\"\r\n                 value=\"5\"\r\n                 [name]=\"inputName\"\r\n                 [checked]=\"rating===5\" />\r\n          <label title=\"Perfect!\" (click)='onClick(5)'>5 stars</label>\r\n\r\n          <input type=\"radio\"\r\n                 value=\"4\"\r\n                 [name]=\"inputName\"\r\n                 [checked]=\"rating===4\" />\r\n          <label title=\"Pretty good.\" (click)='onClick(4)'>4 stars</label>\r\n\r\n          <input type=\"radio\"\r\n                 value=\"3\"\r\n                 [name]=\"inputName\"\r\n                 [checked]=\"rating===3\" />\r\n          <label title=\"Meh..\" (click)='onClick(3)'>3 stars</label>\r\n\r\n          <input type=\"radio\"\r\n                 value=\"2\"\r\n                 [name]=\"inputName\"\r\n                 [checked]=\"rating===2\" />\r\n          <label title=\"Seen better.\" (click)='onClick(2)'>2 stars</label>\r\n\r\n          <input type=\"radio\"\r\n                 value=\"1\"\r\n                 [name]=\"inputName\"\r\n                 [checked]=\"rating===1\" />\r\n          <label title=\"Sucks big time!\" (click)='onClick(1)'>1 star</label>\r\n        </fieldset>\r\n      </div>\r\n      <div class=\"rate\">\r\n        <form (ngSubmit)=\"onSubmit()\"\r\n              #registerForm=\"ngForm\">\r\n        <textarea id=\"formFields_8\" rows=\"3\"\r\n                  type=\"text\"\r\n                  required\r\n                  [(ngModel)]=\"comment\"\r\n                  name=\"comment\"\r\n                  placeholder=\"Comment..\"></textarea>\r\n          <button type=\"submit\" class=\"btn btn-primary btn-block\">Rate & Comment</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = ".search-container {\r\n  position: absolute;\r\n  width: 900px;\r\n  height: 100%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%);\r\n          transform: translate(-50%)\r\n}\r\n\r\n.search-result{\r\n  left: auto;\r\n  width: 900px\r\n}\r\n\r\nh4 {\r\n  text-align: center;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.hidden-warning {\r\n  display: none;\r\n}\r\n\r\n.search-box {\r\n  position: absolute;\r\n  width: 900px;\r\n  height: 100px;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%);\r\n          transform: translate(-50%);\r\n}\r\n\r\n.criteria {\r\n  width: 900px;\r\n}\r\n\r\n.search-city {\r\n  display: inline-block;\r\n}\r\n\r\n.search-name {\r\n  display: inline-block;\r\n}\r\n\r\n.btn btn-primary {\r\n  display: inline-block;\r\n}\r\n\r\n.form-block{\r\n  display: inline-block;\r\n}\r\n\r\n.city-dropdown {\r\n  display: inline-block;\r\n  width: 180px;\r\n}\r\n\r\n.type-dropdown {\r\n  display: inline-block;\r\n  width: 180px;\r\n}\r\n\r\n.events {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  width: 800px;\r\n}\r\n\r\n.select {\r\n  display:block;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/main/user-view/products/dentist.results.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/user-view/products/dentist.results.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\">\r\n\r\n  <div class=\"alert alert-danger\" *ngIf=\"notAuth\" [class.hidden-warning]=\"hideWarning\">\r\n    <div class=\"alert-items\">\r\n      <div class=\"alert-item static\">\r\n        <div class=\"alert-icon-wrapper\">\r\n\r\n         </div>\r\n        <span class=\"alert-text\">Log in or Register to view profile!</span>\r\n      </div>\r\n    </div>\r\n    <button type=\"button\" class=\"close\" (click)=\"closeWarning()\" aria-label=\"Close\">\r\n\r\n     </button>\r\n  </div>\r\n\r\n  <div class=\"search-box\">\r\n\r\n    <div class=\"type-dropdown\">\r\n\r\n      <!--<span *ngIf=\"type\">{{type}}</span>-->\r\n    </div>\r\n\r\n    <div class=\"city-dropdown\">\r\n\r\n      <!--<span *ngIf=\"city\">{{city}}</span>-->\r\n    </div>\r\n\r\n    <form class=\"search-name\">\r\n      <section class=\"form-block\">\r\n        <div class=\"form-group\">\r\n          <label>Search by name:</label>\r\n          <input type=\"text\" #titleInput>\r\n        </div>\r\n      </section>\r\n      <button class=\"btn btn-primary\" (click) = \"setNameAndSearch(titleInput.value)\">Search</button>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"events\">\r\n    <events></events>\r\n  </div>\r\n</div>\r\n\r\n"

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

module.exports = ".events-container {\r\n  margin-left:50px;\r\n  margin-top: 30px;\r\n  display: inline-block;\r\n  width: 850px;\r\n}\r\n\r\np {\r\n  display: inline-block;\r\n}\r\n\r\nh4 {\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.event-info {\r\n  display: inline-block;\r\n}\r\n\r\n.card-header {\r\n  height: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.event-comments {\r\n  display: inline-block;\r\n  vertical-align:top;\r\n  width: 350px;\r\n}\r\n\r\n.card {\r\n  width: 350px;\r\n}\r\n\r\n.card-header {\r\n  padding: 0 !important;\r\n}\r\n\r\n.com-table {\r\n  margin: 0 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/user-view/products/events/events.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main/user-view/products/events/events.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"events-container\">\r\n  <h4>SPECIAL EVENTS</h4>\r\n\r\n</div>\r\n"

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

module.exports = ".edit-events{\r\n  width: 100%;\r\n}\r\n\r\n.new-event{\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.card{\r\n  width:400px;\r\n}\r\n\r\nform-block {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.card-header {\r\n  text-align: center;\r\n}\r\n\r\n.events {\r\n  position: absolute;\r\n  left: 50%;\r\n  width: 1000px;\r\n  -webkit-transform: translate(-50%);\r\n          transform: translate(-50%);\r\n}\r\n\r\n.add-event, .labels, .select {\r\n  display: inline-block;\r\n}\r\n\r\n.error-msg {\r\n  margin-left:auto;\r\n  margin-right:0;\r\n}\r\n\r\n.new-event {\r\n  margin-bottom: 30px;\r\n}\r\n\r\nlabel{\r\n  margin-right: 18px;\r\n}\r\n\r\nh4 {\r\n  display: inline-block;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\n.date-time {\r\n  display: inline-block;\r\n  width: 350px;\r\n}\r\n\r\n.info {\r\n  margin-top: 13px;\r\n}\r\n\r\n.time,.description{\r\n  margin-top: 17px;\r\n}\r\n\r\n.description {\r\n  padding-bottom: 13px;\r\n}\r\n\r\n.select {\r\n  width: 230px;\r\n}\r\n\r\n#title, #date {\r\n  width: 230px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/user-view/shopping-cart/shopping.cart.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/main/user-view/shopping-cart/shopping.cart.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cart-container\">\r\n  SHOPPING CART\r\n</div>\r\n"

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

/***/ "./src/app/main/user-view/user-profile/edit-address/edit.profile.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/main/user-view/user-profile/edit-address/edit.profile.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dentist-edit-container{\r\n  position: absolute;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%);\r\n          transform: translate(-50%);\r\n  height: 500px;\r\n}\r\n\r\n.edit-panel {\r\n  width: 700px;\r\n}\r\n\r\n.edit-label{\r\n  text-align: center;\r\n  padding-bottom: 30px;\r\n}\r\n\r\nh4{\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/user-view/user-profile/edit-address/edit.profile.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/user-view/user-profile/edit-address/edit.profile.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dentist-edit-container\">\r\n  <h4>Edit Panel</h4>\r\n  <div class=\"edit-profile-container\">\r\n    <div class=\"email-alert\">\r\n      <div class=\"alert alert-danger\" *ngIf=\"openFail\">\r\n        <div class=\"alert-items\">\r\n          <div class=\"alert-item static\">\r\n            <div class=\"alert-icon-wrapper\">\r\n            </div>\r\n            <span class=\"alert-text\">\r\n                    {{failMessage}}\r\n                </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n      <div class=\"alert alert-success\" *ngIf=\"openSuccess\">\r\n    <div class=\"alert-items\">\r\n      <div class=\"alert-item static\">\r\n        <div class=\"alert-icon-wrapper\">\r\n        </div>\r\n        <span class=\"alert-text\">\r\n                    Successfully updated profile.\r\n                </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <form #editForm=\"ngForm\">\r\n    <div class=\"edit-panel\">\r\n      <section class=\"form-block\">\r\n        <div class=\"form-group\">\r\n          <label class=\"required\">Email</label>\r\n          <input type=\"email\" [(ngModel)]=\"UserInfo.email\" #email=\"ngModel\" class=\"formFields_7\" size=\"25\" placeholder=\"Email\" [ngModelOptions]=\"{standalone: true}\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"required\">FirstName</label>\r\n          <input type=\"text\" [(ngModel)]=\"UserInfo.firstName\" #firstName=\"ngModel\" class=\"formFields_7\" size=\"25\" placeholder=\"FirstName\" [ngModelOptions]=\"{standalone: true}\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"required\">LastName</label>\r\n          <input type=\"text\" [(ngModel)]=\"UserInfo.lastName\" #lastName=\"ngModel\" class=\"formFields_7\" size=\"25\" placeholder=\"LastName\" [ngModelOptions]=\"{standalone: true}\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"city\">City</label>\r\n          <div class=\"select\">\r\n            <select id=\"city\"\r\n                    name=\"city\"\r\n                    [(ngModel)]=\"UserInfo.city\"\r\n                    #city=\"ngModel\"\r\n                    [ngModelOptions]=\"{standalone: true}\"\r\n                >\r\n              <option value={{constants.CITY_SOFIA}}>Sofia</option>\r\n              <option value={{constants.CITY_VARNA}}>Varna</option>\r\n              <option value={{constants.CITY_PLOVDIV}}>Plovdiv</option>\r\n              <option value={{constants.CITY_BURGAS}}>Burgas</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"dentistType\">Type</label>\r\n          <div class=\"select\">\r\n            <select id=\"dentistType\"\r\n                    name=\"dentistType\"\r\n                    [(ngModel)]=\"UserInfo.dentistType\"\r\n                    #dentistType=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\r\n              <option value={{constants.TYPE_NORMAL}}>Normal</option>\r\n              <option value={{constants.TYPE_ORTHODONT}}>Orthodont</option>\r\n              <option value=\"{{constants.TYPE_SURGEON}}\">Surgeon</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>General Information</label>\r\n          <textarea [(ngModel)]=\"UserInfo.generalInformation\"  #generalInformation=\"ngModel\" class=\"formFields_7\" rows=\"8\" placeholder=\"Add General Information\" [ngModelOptions]=\"{standalone: true}\">\r\n          </textarea>\r\n        </div>\r\n\r\n      </section>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-block\"(click)=\"submit(\r\n      UserInfo.email,\r\n    UserInfo.firstName,\r\n    UserInfo.lastName,\r\n    dentistType.value,\r\n    city.value,\r\n    UserInfo.generalInformation)\">Confirm</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/user-view/user-profile/edit-address/edit.profile.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/user-view/user-profile/edit-address/edit.profile.component.ts ***!
  \************************************************************************************/
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
            template: __webpack_require__(/*! ./edit.profile.component.html */ "./src/app/main/user-view/user-profile/edit-address/edit.profile.component.html"),
            styles: [__webpack_require__(/*! ./edit.profile.component.css */ "./src/app/main/user-view/user-profile/edit-address/edit.profile.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], EditDentistProfileComponent);
    return EditDentistProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/user-view/user-profile/edit-profile/edit-profile.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/main/user-view/user-profile/edit-profile/edit-profile.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".patient-edit-container {\r\n  position: absolute;\r\n  width: 400px;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%);\r\n          transform: translate(-50%);\r\n}\r\n\r\nh4{\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/user-view/user-profile/edit-profile/edit-profile.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/user-view/user-profile/edit-profile/edit-profile.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"patient-edit-container\">\r\n  <h4>Edit Panel</h4>\r\n    <div class=\"email-alert\">\r\n      <div class=\"alert alert-danger\" *ngIf=\"openFail\">\r\n        <div class=\"alert-items\">\r\n          <div class=\"alert-item static\">\r\n            <div class=\"alert-icon-wrapper\">\r\n            </div>\r\n            <span class=\"alert-text\">\r\n                    {{failMessage}}\r\n                </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  <div class=\"alert alert-success\" *ngIf=\"openSuccess\">\r\n    <div class=\"alert-items\">\r\n      <div class=\"alert-item static\">\r\n        <div class=\"alert-icon-wrapper\">\r\n        </div>\r\n        <span class=\"alert-text\">\r\n                    Successfully updated profile.\r\n                </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <form #editForm=\"ngForm\">\r\n    <div>\r\n      <section class=\"form-block\">\r\n        <div class=\"form-group\">\r\n          <label class=\"required\">Email</label>\r\n          <input type=\"email\"  [(ngModel)]=\"EUser.email\" #email=\"ngModel\" class=\"formFields_7\" placeholder=\"Email\" [ngModelOptions]=\"{standalone: true}\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"required\">FirstName</label>\r\n          <input type=\"text\" #firstName=\"ngModel\" [(ngModel)]=\"EUser.firstName\"  class=\"formFields_7\" placeholder=\"FirstName\" [ngModelOptions]=\"{standalone: true}\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"required\">LastName</label>\r\n          <input type=\"text\" #lastName=\"ngModel\" [(ngModel)]=\"EUser.lastName\" class=\"formFields_7\" placeholder=\"LastName\" [ngModelOptions]=\"{standalone: true}\">\r\n        </div>\r\n      </section>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-block\"(click)=\"submit(EUser.email,EUser.firstName,EUser.lastName)\">Confirm</button>\r\n</form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/user-view/user-profile/edit-profile/edit-profile.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/user-view/user-profile/edit-profile/edit-profile.component.ts ***!
  \************************************************************************************/
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
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/main/user-view/user-profile/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/main/user-view/user-profile/edit-profile/edit-profile.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_shared_components_services_edit_patient_service__WEBPACK_IMPORTED_MODULE_2__["EditPatientProfileService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/user-view/user-profile/user-profile.component.css":
/*!************************************************************************!*\
  !*** ./src/app/main/user-view/user-profile/user-profile.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-navi {\r\n  height: 60px;\r\n  text-align: center;\r\n}\r\n\r\n.nav{\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  width:16%;\r\n  text-align: center;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/main/user-view/user-profile/user-profile.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/user-view/user-profile/user-profile.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"patient-profie-container\">\r\n  <div class=\"profile-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/user-view/user-profile/user-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/user-view/user-profile/user-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
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



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(router) {
        this.router = router;
    }
    UserProfileComponent.prototype.loadAppointments = function () {
        this.router.navigate(['/patient/profile/appointments']);
    };
    UserProfileComponent.prototype.editProfile = function () {
        this.router.navigate(['/patient/profile/edit']);
    };
    UserProfileComponent.prototype.ambulatoryList = function () {
        this.router.navigate(['/patient/profile/ambulatory']);
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        this.userEmail = _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].getSessionUserEmail();
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'patient-profile-component',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/main/user-view/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/main/user-view/user-profile/user-profile.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/user-view/user.component.css":
/*!***************************************************!*\
  !*** ./src/app/main/user-view/user.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n.header {\r\n  max-height: 60px;\r\n}\r\n*/\r\n\r\n.wrapper {\r\n  margin-top: 30px;\r\n  margin-left: 60px;\r\n  margin-right:60px;\r\n}\r\n\r\n.logo{\r\n  padding-right: 5px;\r\n}\r\n\r\n.subnav {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n/*#logo {\r\n  background-image:  url('../img/logo.jpg');\r\n  background-size: 100%;\r\n}*/\r\n\r\n.patient-container{\r\n  background-color: white;\r\n}\r\n\r\n.header-4 {\r\n  height: 150px;\r\n}\r\n\r\n.branding {\r\n  margin-right: 250px;\r\n  margin-left: 200px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/user-view/user.component.html":
/*!****************************************************!*\
  !*** ./src/app/main/user-view/user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n<!--  <header class=\"header-4\">\r\n    <img src=\"https://d1af89beukha9h.cloudfront.net/wp-content/uploads/2018/01/Global-Fish-and-Seafood-Market.jpg\" width=\"1800\" height=\"150\">\r\n  </header>-->\r\n  <header class=\"header-6\">\r\n    <div class=\"navButtons\">\r\n      <div class=\"header-nav nav-justified\">\r\n        <a class=\"nav-link nav-text\" routerLink=\"/user/profile/edit\" routerLinkActive=\"active\">My Profile</a>\r\n        <a class=\"nav-link nav-text\" routerLink=\"/patient/profile/edit\" routerLinkActive=\"active\">About Us</a>\r\n        <a class=\"nav-link nav-text\" routerLink=\"/user/dentists\" routerLinkActive=\"active\">Products</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"branding\">\r\n      <a href=\"...\" class=\"nav-link\">\r\n        <div class=\"logo\">\r\n          <img src=\"http://icons.iconarchive.com/icons/martin-berube/flat-animal/256/shark-icon.png\" width=\"50\" height=\"50\">\r\n        </div>\r\n        <span class=\"title\">Joe's Fish Store</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"navButtons\">\r\n      <div class=\"header-nav nav-justified\">\r\n        <a class=\"nav-link nav-text\" routerLink=\"/user/blog\" routerLinkActive=\"active\">Blog</a>\r\n        <a class=\"nav-link nav-text\" routerLink=\"/user/cart\" routerLinkActive=\"active\">Shopping Cart</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"header-actions\">\r\n\r\n    </div>\r\n  </header>\r\n  <div class=\"patient-router\">\r\n    <router-outlet>\r\n    </router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/user-view/user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main/user-view/user.component.ts ***!
  \**************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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



var UserComponent = /** @class */ (function () {
    function UserComponent(router) {
        this.router = router;
        this.userEmail = '';
    }
    UserComponent.prototype.editProfile = function () {
        this.router.navigate(['/user/profile/edit']);
    };
    UserComponent.prototype.dentistSearch = function () {
        this.router.navigate(['/user/dentists']);
    };
    UserComponent.prototype.logout = function () {
        _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].removeUser();
        this.router.navigate(['']);
    };
    UserComponent.prototype.ngOnInit = function () {
        this.userEmail = _util_common_util__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].getSessionUserEmail();
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'patient-component',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/main/user-view/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/main/user-view/user.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserComponent);
    return UserComponent;
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

module.exports = __webpack_require__(/*! E:\Projects\NBU\FishStore\ui\src\main\ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map