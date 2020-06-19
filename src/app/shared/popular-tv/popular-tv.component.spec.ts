import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTvComponent } from './popular-tv.component';

describe('PopularTvComponent', () => {
  let component: PopularTvComponent;
  let fixture: ComponentFixture<PopularTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
