import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsPostComponent } from './tvs-post.component';

describe('TvsPostComponent', () => {
  let component: TvsPostComponent;
  let fixture: ComponentFixture<TvsPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvsPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
