import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObservablesService } from '../../services/observable/observable.service';
@Component({
  selector: 'app-genre-movie-one',
  templateUrl: './genre-movie-one.component.html',
  styles: [
  ]
})
export class GenreMovieOneComponent implements OnInit {


    @Input() genre: any;
    @Input() id: number;
    @Output() sendMovieId = new EventEmitter();

  constructor(
      private ObservablesService: ObservablesService
  ) { }


  ngOnInit(): void {
  }

}
