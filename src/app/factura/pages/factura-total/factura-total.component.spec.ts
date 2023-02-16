import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaTotalComponent } from './factura-total.component';

describe('FacturaTotalComponent', () => {
  let component: FacturaTotalComponent;
  let fixture: ComponentFixture<FacturaTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
