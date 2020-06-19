/* IMPORTS */
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';


/* DEFINITION & EXPORT */
@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  // PROPERTIES

  protected movies: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  protected tvs: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  protected credits: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  protected movie_credits: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  protected people: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }


  // METHODS
  // set data
  public setObservableData = (type: string, data: any) => {
    switch (type) {
      case 'movies':
      this.movies.next(data);
      break;
      case 'tvs':
      this.tvs.next(data);
      break;
      case 'credits':
      this.credits.next(data);
      break;
      case 'movie_credits':
      this.movie_credits.next(data);
      break;
      case 'people':
      this.people.next(data);
      break;

      default:
      break;
    }
  };

  // get data
  public getObservableData = (type: string): Observable<any> => {
    switch (type) {
      case 'tvs':
      return this.tvs;
      break;
      case 'movies':
      return this.movies;
      break;
      case 'credits':
      return this.credits;
      break;
      case 'movie_credits':
      return this.movie_credits;
      break;
      case 'people':
      return this.people;
      break;

      default:
      break;
    }
  };

}
