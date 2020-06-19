import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTvComponent } from './latest-tv.component';

describe('LatestTvComponent', () => {
  let component: LatestTvComponent;
  let fixture: ComponentFixture<LatestTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
