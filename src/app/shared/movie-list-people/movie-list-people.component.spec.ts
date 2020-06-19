import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListPeopleComponent } from './movie-list-people.component';

describe('MovieListPeopleComponent', () => {
  let component: MovieListPeopleComponent;
  let fixture: ComponentFixture<MovieListPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
