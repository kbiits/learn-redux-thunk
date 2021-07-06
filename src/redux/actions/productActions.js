/* eslint-disable no-console */
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
export const fetchProducts = () => async (dispatch) => {
  const productsFromAPI = await ProductRepository.getAllProducts()
    .then((data) => data)
    .catch((err) => {
      console.log(err);
    });
  dispatch(setProducts(productsFromAPI));
};

export const fetchAProduct = (productId) => async (dispatch) => {
  const product = await ProductRepository.getProduct(productId)
    .then((data) => data)
    .catch((err) => console.log(err));

  dispatch(selectedProduct(product));
};
