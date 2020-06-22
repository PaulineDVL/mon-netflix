import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth-service.service';
import { CrudService } from '../../services/crud/crud.service';
import { ObservablesService } from '../../services/observable/observable.service';

import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styles: [
  ]
})
export class ConnexionPageComponent implements OnInit {

  constructor(
    private AuthService: AuthService,
    private Router: Router,
    private CrudService: CrudService,
    private ObservablesService: ObservablesService
  ) { }


  // login
  public loginUser = async (credentials: string) => {
      // get user info
      const userInfo = await this.AuthService.loginUser(credentials);
      localStorage.setItem('token', userInfo.data.token);

      // check user info
      if (userInfo) {
          this.Router.navigateByUrl('/');
      }
  };

  // registration
public registerUser = async (user: UserModel) => {
    const userInfo = await this.AuthService.registerUser(user);

    // check user info
    if (userInfo) {
        this.Router.navigateByUrl('/login');
    }
};

  ngOnInit(): void {
  }

}
