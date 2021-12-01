import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartIsHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.container';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import {
  HeaderStyles,
  LogoContainerStyles,
  OptionsStyles,
  OptionStyles,
  OptionStylesAsDiv,
} from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, cartIsHidden, signOutStart }) => (
  <HeaderStyles>
    <LogoContainerStyles to="/">
      <Logo />
    </LogoContainerStyles>
    <OptionsStyles>
      <OptionStyles to="/shop">Shop</OptionStyles>
      <OptionStyles to="/shop">Contact</OptionStyles>
      {currentUser ? (
        <OptionStylesAsDiv onClick={signOutStart}>
          Sign out
        </OptionStylesAsDiv>
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

const mapDispatchToProps = (dispactch) => ({
  signOutStart: () => dispactch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
