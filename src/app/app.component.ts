/*
Import
*/
// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "./services/auth/auth-service.service";


// Inner

//

/*
Componant configuration
*/
@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  `
})
//


/*
Componant class definition
*/
export class AppComponent implements OnInit {

  constructor(
    private Router: Router
  ){}

  async ngOnInit(){
  };
};
//
