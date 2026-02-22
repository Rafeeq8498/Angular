import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public readonly storeService: StoreService) {}

  onAddToCart(product: Product): void {
    this.storeService.addToCart(product);
  }

  onToggleWishlist(productId: number): void {
    this.storeService.toggleWishlist(productId);
  }

  onSelectCategory(category: string): void {
    this.storeService.setCategory(category);
  }

  isCategoryActive(category: string): boolean {
    return this.storeService.selectedCategory === category;
  }

  trackByProductId(_index: number, product: Product): number {
    return product.id;
  }
}
