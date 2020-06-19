import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObservablesService } from '../../services/observable/observable.service';

@Component({
  selector: 'app-credit-movie-post',
  templateUrl: './credit-movie-post.component.html',
  styles: [
  ]
})
export class CreditMoviePostComponent implements OnInit {

  @Input() credit: any;
  @Input() id: number;
  @Output() sendMovieId = new EventEmitter();

  constructor(
    private ObservablesService: ObservablesService
  ) { }

  ngOnInit(): void {
  }

}
