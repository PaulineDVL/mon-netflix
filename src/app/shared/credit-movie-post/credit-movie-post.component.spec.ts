import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMoviePostComponent } from './credit-movie-post.component';

describe('CreditMoviePostComponent', () => {
  let component: CreditMoviePostComponent;
  let fixture: ComponentFixture<CreditMoviePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditMoviePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMoviePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
