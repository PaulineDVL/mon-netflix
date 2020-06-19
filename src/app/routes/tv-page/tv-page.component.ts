import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CrudService } from '../../services/crud/crud.service';
import { ObservablesService } from '../../services/observable/observable.service';


@Component({
  selector: 'app-tv-page',
  templateUrl: './tv-page.component.html',
  styles: [
  ]
})
export class TvPageComponent implements OnInit {

  constructor(
    private Router: Router,
    private CrudService: CrudService,
    private ObservablesService: ObservablesService
  ) { }

  ngOnInit(): void {
  }

}
