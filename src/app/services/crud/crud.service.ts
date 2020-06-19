
// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//
import { ObservablesService } from "../observable/observable.service";

import { environment } from '../../../environments/environment';


/*
Definition
*/
@Injectable()

export class CrudService {

  constructor(
    private HttpClient: HttpClient,
    private ObservablesService: ObservablesService
  ){};


  /*
  Methods to get API responses
  */
  // Get the API response
  private getData = (endpoint, apiResponse: any) => {
    // Switch endpoint to set observable value
    switch(endpoint){
      default:
      // Retun data anytime
      return apiResponse || {};
      break;

      case 'movies':
      this.ObservablesService.setObservableData('movies', apiResponse.results);
      return apiResponse.results || {};
      break;

      case 'tvs':
      this.ObservablesService.setObservableData('tvs', apiResponse.results);
      return apiResponse.results || {};
      break;

      case 'credits':
      this.ObservablesService.setObservableData('credits', apiResponse.cast);
      return apiResponse.cast || {};
      break;

      case 'movie_credits':
      this.ObservablesService.setObservableData('movie_credits', apiResponse.cast);
      return apiResponse.cast || {};
      break;




    };
  };

  // Get the API error
  private setHeaders = () => {
    const myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // return header
    return { headers: myHeader };
  };

  private handleError = (apiError: any) => Promise.reject(apiError.error);
  //

  // MOVIES


  public getAllMoviesPopular(): Promise<any>{
    return this.HttpClient.get(`${environment.movieDatabaseUrl}/movie/popular?api_key=${environment.movieDatabaseKey}&language=fr&region=fr`)
    .toPromise()
    .then( data => this.getData('movies', data))
    .catch(this.handleError);
  };

  public getAllMoviesTopRated(): Promise<any>{
    return this.HttpClient.get(`${environment.movieDatabaseUrl}/movie/top_rated?api_key=${environment.movieDatabaseKey}&language=fr_FR&region=fr`)
    .toPromise()
    .then( data => this.getData('movies', data))
    .catch(this.handleError);
  };

  public getAllMoviesNowPlaying(): Promise<any>{
    return this.HttpClient.get(`${environment.movieDatabaseUrl}/movie/now_playing?api_key=${environment.movieDatabaseKey}&language=fr_FR&region=fr`)
    .toPromise()
    .then( data => this.getData('movies', data))
    .catch(this.handleError);
  };

  public readOneMovie = (endpoint: String, id:String) => {
    return this.HttpClient.get(`${environment.movieDatabaseUrl}/${endpoint}/${id}?api_key=${environment.movieDatabaseKey}&language=fr`)
    .toPromise()
    .then(data => this.getData(endpoint, data))
    .catch(this.handleError);
  }

  public getOneMovieCredits = (endpoint: String, id:String) => {
    return this.HttpClient.get(`${environment.movieDatabaseUrl}/movie/${id}/${endpoint}?api_key=${environment.movieDatabaseKey}&language=fr`)
    .toPromise()
    .then(data => this.getData(endpoint, data))
    .catch(this.handleError);
  }



//TVS
  public getAllTvsPopular(): Promise<any>{
    return this.HttpClient.get(`${environment.movieDatabaseUrl}/tv/popular?api_key=${environment.movieDatabaseKey}&language=fr&region=fr`)
    .toPromise()
    .then( data => this.getData('tvs', data))
    .catch(this.handleError);
  };

  public getAllTvsTopRated(): Promise<any>{
    return this.HttpClient.get(`${environment.movieDatabaseUrl}/tv/top_rated?api_key=${environment.movieDatabaseKey}&language=fr&region=fr`)
    .toPromise()
    .then( data => this.getData('tvs', data))
    .catch(this.handleError);
  };

  public getAllTvsLatest(): Promise<any>{
    return this.HttpClient.get(`${environment.movieDatabaseUrl}/tv/on_the_air?api_key=${environment.movieDatabaseKey}&language=fr&region=fr`)
    .toPromise()
    .then( data => this.getData('tvs', data))
    .catch(this.handleError);
  };

  public readOneTv = (endpoint: String, id:String) => {
    return this.HttpClient.get(`${environment.movieDatabaseUrl}/${endpoint}/${id}?api_key=${environment.movieDatabaseKey}&language=fr`)
    .toPromise()
    .then(data => this.getData(endpoint, data))
    .catch(this.handleError);
  };

  //People

  public readOnePeople = (endpoint: String, id:String) => {
    return this.HttpClient.get(`${environment.movieDatabaseUrl}/${endpoint}/${id}?api_key=${environment.movieDatabaseKey}&language=fr`)
    .toPromise()
    .then(data => this.getData(endpoint, data))
    .catch(this.handleError);
  }

  public getOnePeopleMovies = (endpoint: String, id:String) => {
    return this.HttpClient.get(`${environment.movieDatabaseUrl}/person/${id}/${endpoint}?api_key=${environment.movieDatabaseKey}&language=fr`)
    .toPromise()
    .then(data => this.getData(endpoint, data))
    .catch(this.handleError);
  }

};
