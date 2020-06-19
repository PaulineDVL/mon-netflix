import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObservablesService } from '../../services/observable/observable.service';

@Component({
  selector: 'app-movie-list-people-one',
  templateUrl: './movie-list-people-one.component.html',
  styles: [
  ]
})
export class MovieListPeopleOneComponent implements OnInit {


    @Input() people: any;
    @Input() id: number;
    @Output() sendPeopleId = new EventEmitter();

  constructor(
      private ObservablesService: ObservablesService
  ) { }

  ngOnInit(): void {
  }

}
