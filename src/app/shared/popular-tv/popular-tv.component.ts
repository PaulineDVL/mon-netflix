import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CrudService } from '../../services/crud/crud.service';
import { ObservablesService } from '../../services/observable/observable.service';

@Component({
  selector: 'app-popular-tv',
  templateUrl: './popular-tv.component.html',
  styles: [
  ]
})
export class PopularTvComponent implements OnInit {

  tvsList: object;


  constructor(
    private CrudService: CrudService,
    private ObservablesService: ObservablesService
  ) { }


  public getTvsPopularList = async () => {
        const response = await this.CrudService.getAllTvsPopular();
        this.tvsList = response;
        this.ObservablesService.setObservableData('tvs', response);
        localStorage.setItem('tvs', JSON.stringify(this.tvsList));
  };

  ngOnInit(): void {
    this.getTvsPopularList();

  }

}
