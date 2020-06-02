import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartItemsTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/StripeButton';

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
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}

    <div className="total">TOTAL: ${total}</div>

    <div className="test-warning">
      *Please use the following test credit card for payment.*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
