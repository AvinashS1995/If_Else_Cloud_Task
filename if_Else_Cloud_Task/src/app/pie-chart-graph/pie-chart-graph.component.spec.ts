import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartGraphComponent } from './pie-chart-graph.component';

describe('PieChartGraphComponent', () => {
  let component: PieChartGraphComponent;
  let fixture: ComponentFixture<PieChartGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartGraphComponent]
    });
    fixture = TestBed.createComponent(PieChartGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
