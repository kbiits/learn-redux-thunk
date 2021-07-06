import { DEFAULT_KEY, generateCacheTTL } from 'redux-cache';
import ActionTypes from '../constants/action-types';

const initialState = {
  products: [],
  [DEFAULT_KEY]: null,
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload, [DEFAULT_KEY]: generateCacheTTL() };
    default:
      return state;
  }
};

export const selectedProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      if (payload == null) {
        const data = {
          error: 404,
        };
        return { ...state, ...data };
      }
      return { ...state, ...payload, [DEFAULT_KEY]: generateCacheTTL() };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
