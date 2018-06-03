import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {CommonUtil} from "../../util/common.util";
import {UsersService} from "../../services/users.service";
import {Constants} from "../../models/constants";
import {Router} from "@angular/router";
import {ProductModel} from "../../models/product.model";


@Component({
  selector: 'admin-component',
  templateUrl: 'admin.component.html',
  styleUrls: ["admin.component.css"],
  providers: []
})
export class AdminComponent implements OnInit {

  //TODO: Put admin component trough routing on it's place.
  //TODO: Paging, filtering, sorting, visuals.
  private currentUser: UserModel;
  private products: ProductModel[] = [];
  private userEmail: string = '';

  constructor(private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.currentUser = CommonUtil.getSessionUser();
    this.userEmail = CommonUtil.getSessionUserEmail();
    if (this.currentUser && this.currentUser.role == Constants.ROLE_ADMIN) {
      this.loadData();
    }
  }

  private logout(){
    CommonUtil.removeUser();
    this.router.navigate(['']);
  }

  private loadData(): void {
    this.usersService.getAllProducts()
      .subscribe(products => this.products = products,
        error => console.error(error));
  }
}
