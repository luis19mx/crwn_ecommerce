import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartIsHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.container';
import SignOut from '../sign-out/sign-out.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import {
  HeaderStyles,
  LogoContainerStyles,
  OptionsStyles,
  OptionStyles,
} from './header.styles';

const Header = ({ currentUser, cartIsHidden }) => (
  <HeaderStyles>
    <LogoContainerStyles to="/">
      <Logo />
    </LogoContainerStyles>
    <OptionsStyles>
      <OptionStyles to="/shop">Shop</OptionStyles>
      <OptionStyles to="/shop">Contact</OptionStyles>
      {currentUser ? (
        <SignOut>Sign out</SignOut>
      ) : (
        <OptionStyles to="/signin">Sign in</OptionStyles>
      )}
      <CartIcon />
    </OptionsStyles>
    {!cartIsHidden && <CartDropdownContainer />}
  </HeaderStyles>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartIsHidden: selectCartIsHidden,
});

export default connect(mapStateToProps)(Header);
