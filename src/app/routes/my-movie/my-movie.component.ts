import { Component, OnInit } from '@angular/core';
import { CastVideoService } from '../../services/cast/cast-video.service';


@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  providers: [CastVideoService],
  styles: [
  ]
})
export class MyMovieComponent implements OnInit {

  constructor(
    private castVideoService: CastVideoService
  ) {}


  ngOnInit(): void {


  }

}
