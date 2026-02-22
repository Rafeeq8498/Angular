import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(
    public readonly storeService: StoreService,
    private readonly router: Router
  ) {}

  increase(productId: number): void {
    this.storeService.increaseQuantity(productId);
  }

  decrease(productId: number): void {
    this.storeService.decreaseQuantity(productId);
  }

  remove(productId: number): void {
    this.storeService.removeFromCart(productId);
  }

  checkout(): void {
    const ok = this.storeService.placeOrder();
    if (ok) {
      this.router.navigateByUrl('/orders');
    }
  }
}
