import { Link } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ currentUser }) => (
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
            const auth = getAuth()
            try {
              await signOut(auth)
            } catch (error) {
              console.error(error.stack)
              throw error
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
    </div>
  </header>
)

export default Header
