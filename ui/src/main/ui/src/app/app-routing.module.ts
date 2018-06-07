import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {UserComponent} from "./main/user-view/user.component";
import {RoleGuard} from "./guards/role.guard";
import {AdminComponent} from "./main/admin-view/admin.component";
import {AppComponent} from "./main/public/app.component";
import {HomeComponent} from "./main/public/home/home.component";
import {RegisterComponent} from "./main/public/register/register.component";
import {LoginComponent} from "./main/public/login/login.component";
import {DentistResultsComponent} from "./main/user-view/products/dentist.results.component";
import {DentistProfileComponent} from "./main/user-view/products/dentist-profile/dentist.profile.component";
import {EditProfileComponent} from "./main/user-view/user-profile/edit-profile/edit-profile.component";
import {UserProfileComponent} from "./main/user-view/user-profile/user-profile.component";
import {ChangePasswordComponent} from "./main/shared-components/change-password/change-password-component";
import {ShoppingCartComponent} from "./main/user-view/shopping-cart/shopping.cart.component";
import {BlogComponent} from "./main/user-view/blog/blog.component";

const appRoutes: Routes = [
  {path: '', component: MainComponent, children:[

    {path: '', component: AppComponent, children:[
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent, children: [
        {path: '', pathMatch: 'full', component: DentistResultsComponent},
        {path: 'dentists', pathMatch: 'full', component: DentistResultsComponent},
        {path: 'result/:id', pathMatch: 'full', component: DentistProfileComponent}
      ]},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
    ]},

    {path: 'user', component: UserComponent,
      children: [
        {path: '', redirectTo: 'dentists', pathMatch: 'full'},
        { path: 'profile', component: UserProfileComponent, children: [
          { path: '', redirectTo: 'edit', pathMatch: 'full'},
          { path: 'edit', pathMatch: 'full', component: EditProfileComponent},
        ]},
        { path: 'changepass', component: ChangePasswordComponent},
        { path: 'dentists', component: DentistResultsComponent},
        { path: 'result/:id', component: DentistProfileComponent},
        { path: 'cart', component: ShoppingCartComponent},
        { path: 'blog', component: BlogComponent}
      ],
      canActivate: [RoleGuard],
      data: { roles: ['USER'] }
    },

    {path: 'admin', component: AdminComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN'] }},

    {path: '**', component: HomeComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true,
        enableTracing: false // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
