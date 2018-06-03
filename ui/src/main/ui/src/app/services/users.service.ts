import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {ProductModel} from "../models/product.model";

@Injectable()
export class UsersService {

   private static readonly GET_ALL_PRODUCTS_URL: string = "/getAllProducts";
   private static readonly GET_ALL_PATIENTS_URL: string = "/getAllPatients";
   private static readonly BLACKLIST_USER_URL: string = "/blacklistUser";
   private static readonly GET_USER_BLACKLIST_URL: string = "/getUserBlacklist";

   constructor(private httpClient: HttpClient) {
   }

   public getAllProducts(): Observable<ProductModel[]> {
      return this.httpClient.get<ProductModel[]>(UsersService.GET_ALL_PRODUCTS_URL);
   }

  /* public getAllPatients(adminEmail: string): Observable<UsersResultModel> {
      return this.httpClient.post<UsersResultModel>(UsersService.GET_ALL_PATIENTS_URL, adminEmail);
   }

  public getPatientsByName(id: number): Observable<PatientResultModel[]> {
    return this.httpClient.get<PatientResultModel[]>('/patients/' + id);
  }

   public getPatients(id: number): Observable<PatientResultModel[]> {
     return this.httpClient.get<PatientResultModel[]>('/patients/' + id);
   }

   public getPastAppointments(id: number): Observable<PastAppointmentModel[]> {
     return this.httpClient.get<PastAppointmentModel[]>('pastAppointments/' + id);
   }

   public addAppointmentComment(id: number, comment: string): Observable<Boolean> {
     let requestModel: CommentModel = new CommentModel(id, comment);
     return this.httpClient.post<Boolean>('addAppointmentComment', requestModel);
  }

   public blacklistUser(executorEmail: string,
                        targetId: number,
                        doBlock: boolean): Observable<BaseResultModel> {
      return this.httpClient.post<BaseResultModel>(
            UsersService.BLACKLIST_USER_URL,
            new BlacklistUserModel(executorEmail, targetId, doBlock));
   }

   public getUserBlacklist(userId: number): Observable<UserBlacklistModel> {
      return this.httpClient.post<UserBlacklistModel>(
            UsersService.GET_USER_BLACKLIST_URL,
            userId);
   }*/
}
