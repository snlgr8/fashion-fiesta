import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripr-button.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderBlock,
  TestWarningContainer,
  TotalContainer,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutContainer>
    <CheckoutHeader>
      <CheckoutHeaderBlock>
        <span>Product</span>
      </CheckoutHeaderBlock>

      <CheckoutHeaderBlock>
        <span>Description</span>
      </CheckoutHeaderBlock>

      <CheckoutHeaderBlock>
        <span>Quantity</span>
      </CheckoutHeaderBlock>

      <CheckoutHeaderBlock>
        <span>Price</span>
      </CheckoutHeaderBlock>

      <CheckoutHeaderBlock>
        <span>Remove</span>
      </CheckoutHeaderBlock>
    </CheckoutHeader>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>
      <span>Total : ${total}</span>
    </TotalContainer>
    <TestWarningContainer>
      {' '}
      *Please use following test credit card for payments
      <br />
      4242 4242 4242 4242 - Exp : 01/22 - CVV: 123
    </TestWarningContainer>

    <StripeCheckoutButton price={total} />
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
