import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CrudService } from '../../services/crud/crud.service';
import { ObservablesService } from '../../services/observable/observable.service';

@Component({
  selector: 'app-genres-movie',
  templateUrl: './genres-movie.component.html',
  styles: [
  ]
})
export class GenresMovieComponent implements OnInit {

  public movie: any;
  private movieId: string;
  moviesList: object;


  constructor(
    private CrudService: CrudService,
    private ActivatedRoute: ActivatedRoute) { }

    private getMovieContent = (id: String) => {
        this.CrudService.readOneMovie('movie', id)
        .then( apiResponse => this.movie = apiResponse.genres)
        .catch( apiResponse => console.error (apiResponse))
      }
      ngOnInit() {





        this.movieId = this.ActivatedRoute.snapshot.params['id'];
        this.getMovieContent(this.movieId);
      }


}
