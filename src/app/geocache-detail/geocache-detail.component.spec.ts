import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocacheDetailComponent } from './geocache-detail.component';

describe('GeocacheDetailComponent', () => {
  let component: GeocacheDetailComponent;
  let fixture: ComponentFixture<GeocacheDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocacheDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocacheDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
