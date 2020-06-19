import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresMovieComponent } from './genres-movie.component';

describe('GenresMovieComponent', () => {
  let component: GenresMovieComponent;
  let fixture: ComponentFixture<GenresMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenresMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
