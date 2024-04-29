import { createReducer, on } from '@ngrx/store';
import { add, remove, updateAllState, clear } from './favorite-product.actions';
import { AppState } from '../models/app-state.model';

export const initialState: AppState = localStorage.getItem('addFavoriteProduct') ? 
JSON.parse(localStorage.getItem('addFavoriteProduct') || '') : 
{
    products: [],
};

export const favoriteReducer = createReducer(
    initialState,
    on(add, (state, { product }) => (
      {
        ...state,
        products: [...state.products, product]
      }
    )
    ),
    on(remove, (state, { product }) => ({
      ...state,
      products: state.products.filter((p) => product.id != p.id)
    })),
    on(updateAllState, (state, { products }) => (
      {
        ...state,
        products
      }
    )
    ),
    on(clear, state => initialState)
);