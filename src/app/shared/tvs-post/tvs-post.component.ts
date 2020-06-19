import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObservablesService } from '../../services/observable/observable.service';

@Component({
  selector: 'app-tvs-post',
  templateUrl: './tvs-post.component.html',
  styles: [
  ]
})
export class TvsPostComponent implements OnInit {

  @Input() tvs: any;
  @Input() id: number;
  @Output() sendTvId = new EventEmitter();

  constructor(
    private ObservablesService: ObservablesService
  ) { }

  ngOnInit(): void {
  }

}
