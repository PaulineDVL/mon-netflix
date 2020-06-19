import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleOneComponent } from './people-one.component';

describe('PeopleOneComponent', () => {
  let component: PeopleOneComponent;
  let fixture: ComponentFixture<PeopleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
