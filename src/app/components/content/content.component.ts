import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LoginService } from '../../common/services/login.service';
import { LoginModel } from '../../common/model/login-model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  login: LoginModel;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.login = this.getLogin();
  }

  getLogin(): LoginModel  {
    return this.loginService.getLoginDetails();
  }

}
