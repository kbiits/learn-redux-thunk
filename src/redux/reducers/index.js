import { combineReducers } from 'redux';
import { productReducer, selectedProduct } from './productReducer';

const reducers = combineReducers({
  allProducts: productReducer,
  productById: selectedProduct,
});

export default reducers;
