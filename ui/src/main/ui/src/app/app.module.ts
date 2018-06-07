import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from "./main/user-view/user.component";
import {ChangePasswordComponent} from "./main/shared-components/change-password/change-password-component";
import {AppRoutingModule} from "./app-routing.module";
import {UserProfileComponent} from "./main/user-view/user-profile/user-profile.component";
import {MainComponent} from "./main/main.component";
import {AdminService} from "./services/admin.service";
import {AdminComponent} from "./main/admin-view/admin.component";
import {CommonService} from "./services/common.service";
import {RoleGuard} from "./guards/role.guard";
import {UsersService} from "./services/users.service";
import {AuthGuard} from "./guards/auth.guard";
import {EditProfileComponent} from "./main/user-view/user-profile/edit-profile/edit-profile.component";
import {EditPasswordService} from "./main/shared-components/services/edit.password.service";
import {EditPatientProfileService} from "./main/shared-components/services/edit.patient.service";
import {AppComponent} from "./main/public/app.component";
import {HomeComponent} from "./main/public/home/home.component";
import {RegisterComponent} from "./main/public/register/register.component";
import {LoginComponent} from "./main/public/login/login.component";
import {DentistResultsComponent} from "./main/user-view/products/dentist.results.component";
import {EventsComponent} from "./main/user-view/products/events/events.component";
import {DentistProfileComponent} from "./main/user-view/products/dentist-profile/dentist.profile.component";
import {RatingsComponent} from "./main/user-view/products/dentist-profile/ratings/ratings.component";
import {DentistCommonService} from "./main/user-view/products/services/dentist.common.service";
import {DatePipe} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RatingsService} from "./services/ratings.service";
import {EditDentistProfileComponent} from "./main/user-view/user-profile/edit-address/edit.profile.component";
import {ShoppingCartComponent} from "./main/user-view/shopping-cart/shopping.cart.component";
import {BlogComponent} from "./main/user-view/blog/blog.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    MainComponent,
    ChangePasswordComponent,
    UserProfileComponent,
    DentistResultsComponent,
    EditProfileComponent,
    EventsComponent,
    DentistProfileComponent,
    RatingsComponent,
    EditDentistProfileComponent,
    ShoppingCartComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    JsonpModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [
    CommonService,
    RoleGuard,
    AuthGuard,
    UsersService,
    AdminService,
    RatingsService,
    EditPasswordService,
    EditPatientProfileService,
    DentistCommonService
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
