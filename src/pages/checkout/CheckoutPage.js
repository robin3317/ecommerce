import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartItemsTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">Product</div>
      <div className="header-block">Description</div>
      <div className="header-block">Quantity</div>
      <div className="header-block">Price</div>
      <div className="header-block">Remove</div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckoutItem cartItem={cartItem} />
    ))}

    <div className="total">TOTAL: ${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
