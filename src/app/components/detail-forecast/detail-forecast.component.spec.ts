import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailForecastComponent } from './detail-forecast.component';

describe('DetailForecastComponent', () => {
  let component: DetailForecastComponent;
  let fixture: ComponentFixture<DetailForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
