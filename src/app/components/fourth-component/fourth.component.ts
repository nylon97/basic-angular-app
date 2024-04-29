import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/models/app-state.model";
import { FavoriteProduct } from "src/app/models/favorite-product.model";
import { add } from "src/app/store/favorite-product.actions";
import { selectProductById, selectProducts } from "src/app/store/favorite-product.selector";


@Component({
    selector: 'fourth-component',
    templateUrl: './fourth.component.html',
    styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit {

    // favoritesProducts: Observable<Array<FavoriteProduct>> = this.store.pipe(select(selectProducts))
    favoritesProducts: Observable<Array<FavoriteProduct>> = this.store.select(selectProducts);

    constructor(
        private readonly store: Store<FavoriteProduct[]>
    ) {
    }

    ngOnInit(): void {
        this.favoritesProducts.subscribe(e => {
            const save: AppState = {
                products: e
            };
            localStorage.setItem('addFavoriteProduct', JSON.stringify(save));
        })
    }

    addProductToFavorites(id: string, name: string) {
        const favoriteProduct: FavoriteProduct = {
            id: Number(id),
            name: name
        }
        this.store.dispatch(add({ product: favoriteProduct }));
        console.log(this.favoritesProducts)
    }
}