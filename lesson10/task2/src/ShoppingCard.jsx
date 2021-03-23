import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCard extends Component {
  state = {
    productsList: [
      {
        id: 'id-01',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: 'id-02',
        name: 'iPad Pro',
        price: 799,
      },
    ],
  };

  render() {
    return (
      <div className="column">
        <CartTitle count={this.state.productsList.length} userName={this.props.userName} />
        <ProductsList cartItems={this.state.productsList} />
      </div>
    );
  }
}

export default ShoppingCard;
