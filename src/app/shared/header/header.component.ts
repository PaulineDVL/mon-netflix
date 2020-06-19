import { Component, OnInit } from '@angular/core';
import { ObservablesService } from "../../services/observable/observable.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  /*
  Declaration
  */
  // Properties
  public user: any;
  constructor(
    private ObservablesService: ObservablesService,
     private Router: Router
  ){
    // Get user data observer

  }
  //
  public logout = () => {

    // Delete localstorage
    localStorage.removeItem('token');
    localStorage.removeItem('movies');


    // Set user info obserrbale value
    this.ObservablesService.setObservableData('token', null);
    this.ObservablesService.setObservableData('movies', null);


    this.Router.navigateByUrl('/');
  }

  ngOnInit(){};

}
