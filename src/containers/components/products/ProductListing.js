import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from 'redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
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
