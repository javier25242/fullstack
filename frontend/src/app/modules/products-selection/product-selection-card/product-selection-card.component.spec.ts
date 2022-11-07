import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectionCardComponent } from './product-selection-card.component';

describe('ProductSelectionCardComponent', () => {
  let component: ProductSelectionCardComponent;
  let fixture: ComponentFixture<ProductSelectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSelectionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
