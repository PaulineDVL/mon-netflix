import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CrudService } from '../../services/crud/crud.service';
import { ObservablesService } from '../../services/observable/observable.service';

@Component({
  selector: 'app-top-rated-tv',
  templateUrl: './top-rated-tv.component.html',
  styles: [
  ]
})
export class TopRatedTvComponent implements OnInit {

  tvsList: object;

  constructor(
    private CrudService: CrudService,
    private ObservablesService: ObservablesService
  ) {
    if (localStorage.getItem('movies')) {
      this.tvsList = JSON.parse(localStorage.getItem('movies'));
    }
  }

  public getTvsTopRatedList = async () => {

        const response = await this.CrudService.getAllTvsTopRated();
        this.tvsList = response;
        console.log( this.tvsList );
        this.ObservablesService.setObservableData('tvs', response);
        localStorage.setItem('tvs', JSON.stringify(this.tvsList));

  };

  ngOnInit(): void {
    this.getTvsTopRatedList();

  }

}
