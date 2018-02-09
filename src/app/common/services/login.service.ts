import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login-model';

@Injectable()
export class LoginService {

  constructor() { }

  response = {
              'id': 'K900203',
              'firstName': 'Mohit',
              'lastName': 'Gupta',
              'shortName': 'MKG',
              'emailAddress': 'mohit0313@gmail.com'
          };

  getLoginDetails(): LoginModel {
    return this.response;
  }

}
