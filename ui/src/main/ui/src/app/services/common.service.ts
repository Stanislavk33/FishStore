import {HttpClient} from "@angular/common/http";
import {LoginResultModel} from "../models/login.result.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {LoginModel} from "../main/public/login/model/login.model";
import {RegisterModel} from "../main/public/register/model/register.model";
import {UserModel} from "../models/user.model";


@Injectable()
export class CommonService {

   private static readonly LOGIN_URL: string = "/authenticate";
   private static readonly REGISTER_USER_URL: string = "/registerUser";

   constructor(private httpClient: HttpClient) {
   }

   public logIn(loginModel: LoginModel): Observable<LoginResultModel> {
      return this.httpClient.post<LoginResultModel>(CommonService.LOGIN_URL, loginModel);
   }

   public register(registerModel: RegisterModel): Observable<any> {
     return this.registerUser(registerModel);
   }

   private registerUser(registerModel: RegisterModel) {
      return this.httpClient.post(CommonService.REGISTER_USER_URL, registerModel);
   }

   public getUserInfo(id:number): Observable<any>{
     return this.httpClient.get('user/'+ id);
   }

}
