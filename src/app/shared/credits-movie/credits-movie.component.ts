import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CrudService } from '../../services/crud/crud.service';
import { ObservablesService } from '../../services/observable/observable.service';

@Component({
  selector: 'app-credits-movie',
  templateUrl: './credits-movie.component.html',
  styles: [
  ]
})
export class CreditsMovieComponent implements OnInit {

  public movie: any;
  private movieId: string;
  creditsList: any;

  constructor(
    private CrudService: CrudService,
    private ActivatedRoute: ActivatedRoute,
  private ObservablesService: ObservablesService) { }

    private getMovieCredits = async (id: String) => {
      const response = await this.CrudService.getOneMovieCredits('credits', id);
      this.creditsList = response;
      console.log(this.creditsList);
      this.ObservablesService.setObservableData('credits', response);
      localStorage.setItem('credits', JSON.stringify(this.creditsList));
    }


    ngOnInit(): void {
      this.movieId = this.ActivatedRoute.snapshot.params['id'];
      this.getMovieCredits(this.movieId);
    }

  }
