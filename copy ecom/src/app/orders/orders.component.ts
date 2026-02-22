import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  constructor(public readonly storeService: StoreService) {}
}
