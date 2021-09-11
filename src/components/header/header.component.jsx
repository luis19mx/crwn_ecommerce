import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
/** @jsxImportSource @emotion/react  */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { auth } from '../../firebase';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartIsHidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, cartIsHidden }) => (
  <HeaderStyles>
    <LogoContainerStyles to="/">
      <Logo />
    </LogoContainerStyles>
    <div css={OptionsStyles}>
      <Link css={OptionStyles} to="/shop">
        Shop
      </Link>
      <Link css={OptionStyles} to="/shop">
        Contact
      </Link>
      {currentUser ? (
        <div
          css={OptionStyles}
          onClick={async () => {
            try {
              await signOut(auth);
            } catch (error) {
              console.error(error.stack);
              throw error;
            }
          }}
        >
          Sign out
        </div>
      ) : (
        <Link css={OptionStyles} to="/signin">
          Sign in
        </Link>
      )}
      <CartIcon />
    </div>
    {!cartIsHidden && <CartDropdown />}
  </HeaderStyles>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartIsHidden: selectCartIsHidden,
});

export default connect(mapStateToProps)(Header);

const HeaderStyles = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
`;
const LogoContainerStyles = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
const OptionsStyles = css`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;
const OptionStyles = css`
  padding: 10px 15px;
  text-transform: uppercase;
`;
