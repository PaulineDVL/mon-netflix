import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsMovieComponent } from './credits-movie.component';

describe('CreditsMovieComponent', () => {
  let component: CreditsMovieComponent;
  let fixture: ComponentFixture<CreditsMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
