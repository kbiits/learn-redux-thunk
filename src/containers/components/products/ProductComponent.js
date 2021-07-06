import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map(({
    id, title, price, category, image,
  }) => (
    <div className="four wide column" key={id}>
      <Link to={`/products/${id}`}>
        <div className="ui link">
          <div className="ui card">
            <div className="image">
              <img src={image} alt={title} width="300" height="500" />
            </div>
            <div className="content">
              <div className="header">{title}</div>
            </div>
            <div className="content">
              <div className="meta price">
                {`$${price}`}
              </div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      {
        products.length === 0
          ? (
            <>
              <h1>Sabar woi loading dulu</h1>
            </>
          )
          : renderList
      }
    </>
  );
};

export default ProductComponent;
