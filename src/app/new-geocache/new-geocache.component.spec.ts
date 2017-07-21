import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGeocacheComponent } from './new-geocache.component';

describe('NewGeocacheComponent', () => {
  let component: NewGeocacheComponent;
  let fixture: ComponentFixture<NewGeocacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGeocacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGeocacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
