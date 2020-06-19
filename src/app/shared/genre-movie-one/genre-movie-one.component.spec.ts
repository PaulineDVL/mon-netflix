import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreMovieOneComponent } from './genre-movie-one.component';

describe('GenreMovieOneComponent', () => {
  let component: GenreMovieOneComponent;
  let fixture: ComponentFixture<GenreMovieOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreMovieOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreMovieOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
