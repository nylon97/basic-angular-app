import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FavoriteProduct } from './models/favorite-product.model';
import { selectProducts } from './store/favorite-product.selector';
import { AppState } from './models/app-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'basic-angular-app';

  favoriteProducts: Observable<Array<FavoriteProduct>> = this.store.select(selectProducts);

  constructor(private store: Store) {}

  ngOnDestroy(): void {
    this.favoriteProducts.subscribe(e => {
      const save: AppState = {
          products: e
      };
      localStorage.setItem('addFavoriteProduct', JSON.stringify(save));
  })
  }
}