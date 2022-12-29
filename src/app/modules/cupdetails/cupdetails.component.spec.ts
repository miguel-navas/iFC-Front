import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupdetailsComponent } from './cupdetails.component';

describe('CupdetailsComponent', () => {
  let component: CupdetailsComponent;
  let fixture: ComponentFixture<CupdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CupdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
