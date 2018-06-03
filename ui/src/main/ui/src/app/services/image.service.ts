import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ResponseContentType} from "@angular/http";

@Injectable()
export class ImageService{


  constructor(private httpClient: HttpClient) {
  }

/*  getImage(imageUrl: string): Observable<File> {
    return this.httpClient
      .get(imageUrl, { responseType: ResponseContentType.Blob })
      .map((res: Response) => res.blob());
  }*/
}

