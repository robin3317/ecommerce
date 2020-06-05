import React from 'react';
import { CartItemContainer, Image, ItemDetails, Name } from './CartItem.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <Image src={imageUrl} alt="item" />
    <ItemDetails>
      <Name>{name}</Name>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
