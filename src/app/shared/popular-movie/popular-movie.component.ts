import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CrudService } from '../../services/crud/crud.service';
import { ObservablesService } from '../../services/observable/observable.service';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styles: [
  ]
})
export class PopularMovieComponent implements OnInit {

  moviesList: object;


  constructor(
    private CrudService: CrudService,
    private ObservablesService: ObservablesService
  ) {
    if (localStorage.getItem('movies')) {
        this.moviesList = JSON.parse(localStorage.getItem('movies'));
    } }


  public getMoviesPopularList = async () => {

        const response = await this.CrudService.getAllMoviesPopular();
        this.moviesList = response;
        console.log( this.moviesList );
        this.ObservablesService.setObservableData('movies', response);
        localStorage.setItem('movies', JSON.stringify(this.moviesList));
    
  };





  ngOnInit(): void {
    this.getMoviesPopularList();

  }

}
