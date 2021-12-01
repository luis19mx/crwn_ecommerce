import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartIsHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import CartDropdownContainer from '../CartDropdown';
import CartIcon from '../cart-icon/cart-icon.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {
  HeaderStyles,
  LogoContainerStyles,
  OptionsStyles,
  OptionStyles,
  OptionStylesAsDiv,
} from './Header.styles';

const storeSelectors = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartIsHidden: selectCartIsHidden,
});

export default function Header() {
  const dispatch = useDispatch();
  const handleSignOut = () => dispatch(signOutStart());

  const { currentUser, cartIsHidden } = useSelector(storeSelectors);

  return (
    <HeaderStyles>
      <LogoContainerStyles to="/">
        <Logo />
      </LogoContainerStyles>
      <OptionsStyles>
        <OptionStyles to="/shop">Shop</OptionStyles>
        <OptionStyles to="/shop">Contact</OptionStyles>
        {currentUser ? (
          <OptionStylesAsDiv onClick={handleSignOut}>
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
}
