import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMovieComponent } from './my-movie.component';

describe('MyMovieComponent', () => {
  let component: MyMovieComponent;
  let fixture: ComponentFixture<MyMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
