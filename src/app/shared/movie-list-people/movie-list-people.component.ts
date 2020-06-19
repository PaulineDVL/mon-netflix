import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CrudService } from '../../services/crud/crud.service';
import { ObservablesService } from '../../services/observable/observable.service';

@Component({
  selector: 'app-movie-list-people',
  templateUrl: './movie-list-people.component.html',
  styles: [
  ]
})
export class MovieListPeopleComponent implements OnInit {

  public people: any;
  private peopleId: string;
  moviesList: any;

  constructor(
    private CrudService: CrudService,
    private ActivatedRoute: ActivatedRoute,
    private ObservablesService: ObservablesService
  ) { }

  private getPeopleMovies = async (id: String) => {
    const response = await this.CrudService.getOnePeopleMovies('movie_credits', id);
    this.moviesList = response;
    this.ObservablesService.setObservableData('movie_credits', response);
    localStorage.setItem('movie_credits', JSON.stringify(this.moviesList));
  }


  ngOnInit(): void {
    this.peopleId = this.ActivatedRoute.snapshot.params['id'];
    this.getPeopleMovies(this.peopleId);
  }

}
