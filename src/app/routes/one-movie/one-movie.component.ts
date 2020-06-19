import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CrudService } from '../../services/crud/crud.service';


@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styles: [
  ]
})
export class OneMovieComponent implements OnInit {

  public movie: any;
private movieId: string;
moviesList: object;


  constructor(
    private CrudService: CrudService,
    private ActivatedRoute: ActivatedRoute) { }

    private getMovieContent = (id: String) => {
        this.CrudService.readOneMovie('movie', id)
        .then( apiResponse => this.movie = apiResponse)
        .catch( apiResponse => console.error (apiResponse))
      }
      ngOnInit() {

        this.movieId = this.ActivatedRoute.snapshot.params['id'];
        this.getMovieContent(this.movieId);
      }

}
