/* eslint-disable no-console */
import { checkCacheValid } from 'redux-cache';
import ProductRepository from 'repositories/ProductRepository';
import ActionTypes from '../constants/action-types';

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: product,
});

export const removeSelectedProduct = () => ({
  type: ActionTypes.REMOVE_SELECTED_PRODUCT,
});

// Middleware for API Call
export const fetchProducts = () => async (dispatch, getState) => {
  const isCacheValid = checkCacheValid(getState, 'allProducts');
  if (isCacheValid) return;
  const productsFromAPI = await ProductRepository.getAllProducts()
    .then((data) => data)
    .catch((err) => {
      console.log(err);
    });
  dispatch(setProducts(productsFromAPI));
};

export const fetchAProduct = (productId) => async (dispatch, getState) => {
  if (getState().productById.id === parseInt(productId, 10)) {
    const isCacheValid = checkCacheValid(getState, 'productById');
    if (isCacheValid) {
      return;
    }
  }
  dispatch(removeSelectedProduct());
  const product = await ProductRepository.getProduct(productId)
    .then((data) => data)
    .catch((err) => console.log(err));

  dispatch(selectedProduct(product));
};
