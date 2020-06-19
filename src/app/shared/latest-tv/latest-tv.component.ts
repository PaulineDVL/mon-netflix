import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CrudService } from '../../services/crud/crud.service';
import { ObservablesService } from '../../services/observable/observable.service';
@Component({
  selector: 'app-latest-tv',
  templateUrl: './latest-tv.component.html',
  styles: [
  ]
})
export class LatestTvComponent implements OnInit {

  tvsList: object;


  constructor(
    private CrudService: CrudService,
    private ObservablesService: ObservablesService
  ) { }

  public getTvsLatestList = async () => {

        const response = await this.CrudService.getAllTvsLatest();
        this.tvsList = response;
        console.log( this.tvsList );
        this.ObservablesService.setObservableData('tvs', response);
        localStorage.setItem('tvs', JSON.stringify(this.tvsList));

  };

  ngOnInit(): void {
    this.getTvsLatestList();

  }

}
