/* IMPORTS */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ObservablesService } from "../observable/observable.service";
import { UserModel } from "../../models/user.model";


/* DEFINITION & EXPORT */
@Injectable({ providedIn: 'root' })
export class AuthService {

  // PROPERTIES
  private apiUrl = '/api/auth'


  // DEPENDENCIES INJECTION
  constructor(
    private HttpClient: HttpClient,
    private ObservablesService: ObservablesService) { }


    // METHODS
    // request headers settings
    private setHeaders = () => {
      // set header
      const myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // return header
      return { headers: myHeader };
    };

    // register new user
    public registerUser(user: UserModel): Promise<any> {
      // Delete repeatpassword property from the user object (for checkFields)
      delete user.repeatpassword;

      return this.HttpClient
      .post(`${this.apiUrl}/register`, user, this.setHeaders())
      .toPromise()
      .then(data => this.getData('register', data))
      .catch(this.handleError)
    }

    public loginUser(credentials: any): Promise<any> {
      return this.HttpClient
      .post(`${this.apiUrl}/login`, credentials, this.setHeaders())
      .toPromise()
      .then(data => this.getData('login', data))
      .catch(this.handleError);
    }

    public logOutUser(): Promise<any> {
      return this.HttpClient
      .get(`${this.apiUrl}/logout`, this.setHeaders())
      .toPromise()
      .then(data => this.getData('logout', data))
      .catch(this.handleError);
    }

    // get user info
    public getUserInfo(): Promise<any> {
      return this.HttpClient
      .get(this.apiUrl)
      .toPromise()
      .then(data => this.getData('auth', data))
      .catch(this.handleError);
    };

    // Fonction to parse SUCCESS response
    private getData = (endpoint: string, apiResponse: any) => {
      switch (endpoint) {
        case 'logout':
        this.ObservablesService.setObservableData('user', null)
        break;

        default:
        // Set user info Observable value
        this.ObservablesService.setObservableData('user', apiResponse.data);
        break;
      }

      // Return data
      return apiResponse || {};
    }

    // Fonction to parse ERROR response
    private handleError = (apiError: any) => Promise.reject(apiError.error);
  }
