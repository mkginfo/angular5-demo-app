import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { LoginModel } from '../model/login-model';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  private dataUrl: string;

  private response = {
              'id': 'K900203',
              'firstName': 'Mohit',
              'lastName': 'Gupta',
              'shortName': 'MKG',
              'emailAddress': 'mohit0313@gmail.com'
          };

  getLoginDetails(): LoginModel {
    return this.response;
  }

   /**
   * To retrieve login datat by josn or server side 
   */
  getLoginDetailsByHttp(): Observable<any> {
    this.dataUrl = '/assets/json/login.json';
    return this.http.get(this.dataUrl).map(response => response);
  }

}
