import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListPeopleOneComponent } from './movie-list-people-one.component';

describe('MovieListPeopleOneComponent', () => {
  let component: MovieListPeopleOneComponent;
  let fixture: ComponentFixture<MovieListPeopleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListPeopleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListPeopleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
