import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'product-selection-card',
  templateUrl: './product-selection-card.component.html',
  styleUrls: ['./product-selection-card.component.scss'],
})
export class ProductSelectionCardComponent implements OnInit {
  @Input() image = '';
  @Input() title = 'Fibra óptica';
  @Input() description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor lorem magna.';

  constructor() {}

  ngOnInit(): void {}
}

