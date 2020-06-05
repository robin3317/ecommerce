import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartItemsTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/StripeButton';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  CheckoutHeader,
  CheckoutTotal,
  CheckoutWarning,
} from './CheckoutPage.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <CheckoutHeader>Product</CheckoutHeader>
      <CheckoutHeader>Description</CheckoutHeader>
      <CheckoutHeader>Quantity</CheckoutHeader>
      <CheckoutHeader>Price</CheckoutHeader>
      <CheckoutHeader>Remove</CheckoutHeader>
    </CheckoutHeaderContainer>

    {cartItems.map((cartItem) => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}

    <CheckoutTotal>TOTAL: ${total}</CheckoutTotal>

    <CheckoutWarning>
      *Please use the following test credit card for payment.*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </CheckoutWarning>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
