/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAProduct } from 'redux/actions/productActions';

const ProductDetail = () => {
  const { productId } = useParams();

  const product = useSelector((state) => state.productById);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    dispatch(fetchAProduct(productId));
  };

  useEffect(() => {
    if (productId && productId !== '') {
      fetchProduct();
    }
  }, []);

  const renderProduct = (prod) => {
    const {
      image, title, price, category, description,
    } = prod;
    if (prod.error === 404) {
      return (
        <>
          <h2>Nah error ga ketemu</h2>
        </>
      );
    }
    if (Object.keys(prod).length === 0 || parseInt(productId, 10) !== product.id) {
      return <div>Masih Loading Guys</div>;
    }
    return (
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image} alt={title} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">
                  $
                  {price}
                </a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon" />
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="ui grid container">
      {renderProduct(product)}
    </div>
  );
};

export default ProductDetail;
