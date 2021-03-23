import React from 'react';

const ProductsList = ({ cartItems }) => {
  const cartsList = cartItems.map(({ id, name, price }) => (
    <li key={id} className="products__list-item">
      <span className="products__item-name">{name}</span>
      <span className="products__item-price">{price}</span>
    </li>
  ));

  const total = cartItems.reduce((acc, cart) => acc + cart.price, 0);

  return (
    <div className="products">
      <ul className="products__list">{cartsList}</ul>
      <div className="products__total">{`Total: $${total}`}</div>
    </div>
  );
};

export default ProductsList;
