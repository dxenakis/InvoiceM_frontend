import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonDetailsComponent } from './salondetails.component';

describe('SalondetailsComponent', () => {
  let component: SalonDetailsComponent;
  let fixture: ComponentFixture<SalonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalonDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


