import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <CheckoutStyles>
    <CheckoutHeader>
      <div>
        <span>Product</span>
      </div>
      <div>
        <span>Description</span>
      </div>
      <div>
        <span>Quantity</span>
      </div>
      <div>
        <span>Price</span>
      </div>
      <div>
        <span>Remove</span>
      </div>
    </CheckoutHeader>
    {cartItems.map(({ id, name, imageUrl, price, quantity }) => (
      <CheckoutItem key={id} item={{ id, name, imageUrl, price, quantity }} />
    ))}
    <Total>
      <span>TOTAL ${cartTotal}</span>
    </Total>
    <Warning>
      *Please use the following test card for payments: <br />
      5555 5555 5555 4444 - Exp: 01 / 23 - CVV: 123
    </Warning>
    <StripeButton price={cartTotal} />
  </CheckoutStyles>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

const CheckoutStyles = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 3rem;
  }
`;
const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  > div {
    text-transform: capitalize;
    width: 23%;

    :last-child {
      width: 8%;
    }
  }
`;
const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
const Warning = styled.div`
  text-align: center;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  color: red;
`;
