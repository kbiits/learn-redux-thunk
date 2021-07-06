import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from 'redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <>
      <div className="ui centered grid container">
        <ProductComponent />
      </div>
    </>
  );
};

export default ProductListing;
