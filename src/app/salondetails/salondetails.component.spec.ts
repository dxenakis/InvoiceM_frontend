import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalondetailsComponent } from './salondetails.component';

describe('SalondetailsComponent', () => {
  let component: SalondetailsComponent;
  let fixture: ComponentFixture<SalondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalondetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
