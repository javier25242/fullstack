import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSelectionComponent } from './products-selection.component';
import { ProductSelectionCardComponent } from './product-selection-card/product-selection-card.component';



@NgModule({
  declarations: [ProductsSelectionComponent, ProductSelectionCardComponent],
  imports: [CommonModule],
  exports: [ProductsSelectionComponent],
})
export class ProductsSelectionModule { }
