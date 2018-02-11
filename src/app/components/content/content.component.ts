import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
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

  loginJSONDetails: LoginModel;
  loginHTTPDetails: LoginModel;
  login$: Observable<LoginModel>;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
     this.loginJSONDetails = this.getLogin();
     this.getLoginDetailsByHttp();
  }

  getLogin(): LoginModel  {
    return this.loginService.getLoginDetails();
  }
  
  getLoginDetailsByHttp(){
    
    this.login$ = this.loginService.getLoginDetailsByHttp();
    this.login$.subscribe( login => {
      this.loginHTTPDetails = login;
    });

  }

}
