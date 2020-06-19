import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedTvComponent } from './top-rated-tv.component';

describe('TopRatedTvComponent', () => {
  let component: TopRatedTvComponent;
  let fixture: ComponentFixture<TopRatedTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
