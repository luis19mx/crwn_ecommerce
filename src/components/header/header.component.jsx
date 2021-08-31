import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartIsHidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, cartIsHidden }) => (
  <header className="header">
    <Link className="header__logo-container" to="/">
      <Logo className="header__logo" />
    </Link>
    <div className="header__options">
      <Link className="header__option" to="/shop">
        Shop
      </Link>
      <Link className="header__option" to="/shop">
        Contact
      </Link>
      {currentUser ? (
        <div
          className="header__option"
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
        <Link className="header__option" to="/signin">
          Sign in
        </Link>
      )}
      <CartIcon />
    </div>
    {!cartIsHidden && <CartDropdown />}
  </header>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartIsHidden: selectCartIsHidden,
});

export default connect(mapStateToProps)(Header);
